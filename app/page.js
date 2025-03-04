// app/page.js (or pages/index.js)
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/70 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                ContentRepurpose.ai
              </span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <Link
                href="/pricing"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/terms"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/signup"
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Transform your content across platforms in minutes
              </h1>
              <p className="mt-6 text-xl text-slate-300">
                A powerful AI platform that automatically repurposes your
                content between YouTube, Instagram, TikTok, and other platforms
                - optimized for each platform&apos;s unique requirements.
              </p>
              <div className="mt-8 space-y-4">
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-lg text-slate-300">
                      Multi-directional content repurposing
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-lg text-slate-300">
                      Platform-specific optimization
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-lg text-slate-300">
                      AI-powered content transformation
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-lg text-slate-300">
                      Multiple tone options with refinement
                    </span>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                  >
                    Start Now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="w-full h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg backdrop-blur-sm border border-slate-700/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  Your graphic
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Before/After Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  className="h-6 w-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="ml-2 text-2xl font-bold text-slate-200">
                  Manual Content Repurposing is Painful
                </span>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2 text-2xl font-bold text-slate-200">
                  ContentRepurpose.ai Makes it Easy
                </span>
              </motion.div>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              As a content creator, I know the struggle of manually adapting
              content for different platforms. Each one has its own format,
              style, and audience expectations. It&apos;s overwhelming and
              time-consuming - but it doesn&apos;t have to be.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-colors duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Without ContentRepurpose.ai
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-red-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Hours spent manually editing and reformatting content
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-red-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Struggle with platform-specific requirements
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-red-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Miss opportunities due to time constraints
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-red-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Inconsistent content quality across platforms
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                With ContentRepurpose.ai
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Transform content in minutes, not hours
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Automatic platform-specific optimization
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Reach more platforms with less effort
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Maintain consistent quality everywhere
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-purple-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-slate-200 mb-4">
              Everything you need to dominate cross-platform content
            </h2>
            <p className="text-xl text-slate-300">
              A complete suite of tools designed to make content repurposing
              effortless and effective
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Flexible Input System",
                description:
                  "Upload any type of content and transform it for your target platforms",
              },
              {
                title: "Smart Platform Optimizer",
                description:
                  "Automatically adjust content for each platform&apos;s requirements",
              },
              {
                title: "AI Content Engine",
                description:
                  "Generate platform-specific content with customizable tones",
              },
              {
                title: "Content Dashboard",
                description:
                  "Track and manage your content transformation history",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-slate-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
              Hey there, I&apos;m Jules 👋🏼
            </h2>
            <motion.div
              className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 p-[2px] shadow-lg shadow-blue-500/20"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/jules.png"
                  alt="Jules Mundur"
                  fill
                  className="rounded-full object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-slate-700/50 rounded-full" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900" />
            </motion.div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              As a content creator and developer, I&apos;ve experienced
              firsthand the challenges of maintaining a strong presence across
              multiple platforms. The endless hours spent reformatting content,
              adjusting messaging, and optimizing for different platforms
              inspired me to create ContentRepurpose.ai. I wanted to build a
              tool that would make content repurposing effortless, intelligent,
              and actually enjoyable. Now, I&apos;m excited to share this
              solution with other creators who face the same challenges.
            </p>
            <motion.div
              className="mt-8 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.a
                href="https://x.com/julesmundur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-200"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on Twitter
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-purple-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300">
              Start transforming your content today
            </p>
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50"
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="px-6 py-8">
                <h3 className="text-center text-2xl font-bold text-slate-200">
                  Early Access
                </h3>
                <div className="mt-4 flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    $29
                  </span>
                  <span className="ml-1 text-xl text-slate-400">/month</span>
                </div>
                <p className="mt-4 text-center text-slate-300">
                  Full access to all current features
                </p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {[
                    "Multi-directional content repurposing",
                    "Platform-specific optimization",
                    "AI content transformation",
                    "Multiple tone options",
                    "Basic analytics dashboard",
                  ].map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <svg
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-slate-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/signup"
                    className="block w-full px-6 py-3 text-center text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <p className="mt-6 text-center text-sm text-slate-400">
                  14-day money-back guarantee. No questions asked.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about ContentRepurpose.ai
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-8">
              {[
                {
                  question: "How does ContentRepurpose.ai work?",
                  answer:
                    "Our AI-powered platform analyzes your content, understands its key messages and structure, then automatically adapts it for different platforms while maintaining your voice and message. Simply upload your content, choose your target platforms, and let our AI handle the rest.",
                },
                {
                  question: "What platforms do you support?",
                  answer:
                    "We currently support content transformation between YouTube, Instagram, TikTok, Twitter, and LinkedIn. We're constantly adding more platforms based on user feedback and demand.",
                },
                {
                  question: "How long does it take to repurpose content?",
                  answer:
                    "Most content transformations are completed within minutes. The exact time depends on the length and complexity of your content, but you'll save hours compared to manual repurposing.",
                },
                {
                  question: "Can I customize the output for each platform?",
                  answer:
                    "Yes! You can select different tones, styles, and formats for each platform. Our AI will generate initial versions, and you can refine them to match your preferences perfectly.",
                },
                {
                  question:
                    "Is there a limit to how much content I can repurpose?",
                  answer:
                    "With our Early Access plan, you can repurpose unlimited content across all supported platforms. We don't believe in complicated pricing tiers or usage limits during our launch phase.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6 hover:border-blue-500/50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-slate-200 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
                ContentRepurpose.ai
              </h3>
              <p className="mt-4 text-base text-slate-500">
                Transform your content across platforms effortlessly
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="https://x.com/julesmundur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    Twitter Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="text-base text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-base text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8">
            <p className="text-base text-slate-500 text-center">
              ContentRepurpose.ai © 2024 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
