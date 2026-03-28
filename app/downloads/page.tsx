"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export interface Release {
  version: string;
  date: string;
  isLatest?: boolean;
  changelog: string[];
  downloadUrl: string;
}

const releases: Release[] = [
  {
    version: "3.0.4",
    date: "March 2026",
    isLatest: true,
    changelog: [
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v3.0.4.exe",
  },
  {
    version: "3.0.3",
    date: "March 2026",
    changelog: [
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v3.0.3.exe",
  },
  {
    version: "3.0.2",
    date: "March 2026",
    changelog: [
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v3.0.2.exe",
  },
  {
    version: "3.0.0",
    date: "March 2026",
    changelog: [
      "Major update with new features and improvements",
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v3.0.0.exe",
  },
  {
    version: "2.0.4",
    date: "March 2026",
    changelog: [
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v2.0.4.exe",
  },
  {
    version: "2.0.3",
    date: "March 2026",
    changelog: [
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v2.0.3.exe",
  },
  {
    version: "2.0.2",
    date: "March 2026",
    changelog: [
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v2.0.2.exe",
  },
  {
    version: "2.0.1",
    date: "March 2026",
    changelog: [
      "Bug fixes and stability improvements",
      "Performance optimizations",
      "Minor UI enhancements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v2.0.1.exe",
  },
  {
    version: "2.0.0",
    date: "March 2026",
    changelog: [
      "Major UI redesign with improved navigation",
      "Enhanced performance and stability",
      "New dashboard with real-time analytics",
      "Improved invoice management system",
      "Bug fixes and optimizations",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v2.0.0.exe",
  },
  {
    version: "1.0.3",
    date: "March 2026",
    changelog: [
      "Bug fixes and performance improvements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v1.0.3.exe",
  },
  {
    version: "1.0.2",
    date: "March 2026",
    changelog: [
      "Windows platform details added to privacy policy",
      "Invoice timeline now shows delivery details and comments",
      "Check for update feature in profile",
      "Bug fixes and performance improvements",
    ],
    downloadUrl: "/Sambhav_Services_Setup_v1.0.2.exe"
  },
  {
    version: "1.0.1",
    date: "March 2025",
    changelog: [
      "SIM-based device verification for account security",
      "Push notifications for invoice and task updates",
      "Force update mechanism",
      "Biometric authentication support",
    ],
    downloadUrl: "#",
  },
];

export default function DownloadsPage() {
  const latest = releases.find((r) => r.isLatest) ?? releases[0];

  return (
    <main className="min-h-screen bg-[#f0f4ff]">

      {/* ── Hero Header ── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#1a73e8] via-[#1558b0] to-[#0d3b7a] text-white">
        <motion.div
          className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-white/5"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-white/5"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 rounded-[22px] bg-white p-2 shadow-2xl shadow-black/30">
              <Image
                src="/logo.png"
                alt="Sambhav Services"
                width={88}
                height={88}
                className="w-full h-full object-contain rounded-[16px]"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            <span>🪟</span> Windows App
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
          >
            Downloads
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-blue-100 text-lg"
          >
            Sambhav Services – Windows Desktop Application
          </motion.p>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <a
              href={latest.downloadUrl}
              className="inline-flex items-center gap-2.5 bg-white text-[#1a73e8] font-bold text-base px-7 py-3.5 rounded-2xl shadow-lg shadow-black/20 hover:bg-blue-50 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download v{latest.version}
            </a>
          </motion.div>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            {[
              { label: "Platform", value: "Windows 10 / 11" },
              { label: "Latest Version", value: `v${latest.version}` },
              { label: "Updated", value: latest.date },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-left"
              >
                <div className="text-[10px] uppercase tracking-widest text-blue-200 font-semibold mb-0.5">
                  {item.label}
                </div>
                <div className="text-sm font-medium">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-5 py-14 space-y-5">

        {/* Install notice */}
        <AnimatedSection delay={0.05}>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-2xl mt-0.5">ℹ️</span>
            <div className="text-blue-800 text-sm leading-relaxed">
              <strong>Installation:</strong> Download the <code className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-xs font-mono">.exe</code> installer, run it, and follow the setup wizard.
              Windows may show a SmartScreen warning — click <strong>More info → Run anyway</strong>.
            </div>
          </div>
        </AnimatedSection>

        {/* Release cards */}
        {releases.map((release, i) => (
          <AnimatedSection key={release.version} delay={0.1 + i * 0.05}>
            <div className={`bg-white rounded-2xl border p-6 shadow-sm ${release.isLatest ? "border-blue-200 ring-1 ring-blue-100" : "border-gray-100"}`}>

              {/* Version header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">
                    🪟
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-extrabold text-gray-800">
                        v{release.version}
                      </span>
                      {release.isLatest && (
                        <span className="text-[11px] font-bold bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Latest
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-400">{release.date}</span>
                  </div>
                </div>

                {/* Download button */}
                <motion.a
                  href={release.downloadUrl}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                    release.isLatest
                      ? "bg-[#1a73e8] text-white shadow-md shadow-blue-200 hover:bg-[#1558b0]"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                  {release.isLatest ? "Download" : "Old version"}
                </motion.a>
              </div>

              {/* Changelog */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  What&apos;s new
                </p>
                <ul className="space-y-2">
                  {release.changelog.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.06 }}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* System requirements */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl">⚙️</div>
              <h2 className="text-lg font-bold text-gray-800">System Requirements</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: "OS", value: "Windows 10 or later (64-bit)" },
                { label: "Architecture", value: "x64" },
                { label: "RAM", value: "4 GB minimum" },
                { label: "Storage", value: "200 MB free space" },
                { label: "Internet", value: "Required (Firebase backend)" },
                { label: "Display", value: "1280 × 720 or higher" },
              ].map((req) => (
                <div key={req.label} className="bg-gray-50 rounded-xl px-4 py-3">
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                    {req.label}
                  </div>
                  <div className="font-semibold text-gray-700">{req.value}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Back to privacy policy */}
        <AnimatedSection delay={0.25}>
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium"
            >
              ← Privacy Policy
            </Link>
          </div>
        </AnimatedSection>

      </div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-10 text-gray-400 text-sm border-t border-gray-200 bg-white"
      >
        <p className="font-medium text-gray-500">© 2026 Shailendra Badjatya. All rights reserved.</p>
        <p className="mt-1">Sambhav Services – Windows Downloads</p>
      </motion.footer>

    </main>
  );
}
