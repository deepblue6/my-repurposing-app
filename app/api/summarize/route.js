// app/api/summarize/route.js
import { getSubtitles } from "youtube-captions-scraper";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { url } = await req.json();

  try {
    console.log("Processing URL:", url);

    // Extract YouTube video ID from URL
    const videoId = new URL(url).searchParams.get("v");
    if (!videoId) {
      throw new Error(
        "Invalid YouTube URL. Please provide a valid YouTube video URL."
      );
    }

    console.log("Fetching subtitles for video ID:", videoId);

    // Fetch YouTube transcript
    const subtitles = await getSubtitles({
      videoID: videoId,
      lang: "en", // default to English
    }).catch(async (err) => {
      console.error(
        "Error fetching English subtitles, trying auto-generated:",
        err
      );
      // Try auto-generated captions if manual ones aren't available
      return await getSubtitles({
        videoID: videoId,
        lang: "en-US",
      });
    });

    if (!subtitles || subtitles.length === 0) {
      throw new Error(
        "No subtitles found for this video. Please try a different video."
      );
    }

    console.log("Successfully fetched subtitles, length:", subtitles.length);

    // Join transcript into a single text block
    const text = subtitles.map((item) => item.text).join(" ");

    if (!text) {
      throw new Error("Failed to extract text from subtitles.");
    }

    console.log("Sending to OpenAI for summarization");

    // Summarize using OpenAI GPT model
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that summarizes YouTube video transcripts.",
        },
        {
          role: "user",
          content: `Summarize the following transcript in a clear and concise way: ${text}`,
        },
      ],
    });

    // Get the summary from OpenAI response
    const summary = completion.choices[0].message.content;

    console.log("Successfully generated summary");

    return new Response(JSON.stringify({ summary }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in /api/summarize:", error);

    // Determine the appropriate error message
    let errorMessage = "An unexpected error occurred.";
    if (error.message.includes("videoID")) {
      errorMessage = "Invalid YouTube video ID. Please check the URL.";
    } else if (error.message.includes("subtitles")) {
      errorMessage =
        "Could not find subtitles for this video. The video might not have captions available.";
    } else if (error.message.includes("OpenAI")) {
      errorMessage = "Error generating summary. Please try again.";
    }

    return new Response(
      JSON.stringify({
        error: errorMessage,
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
