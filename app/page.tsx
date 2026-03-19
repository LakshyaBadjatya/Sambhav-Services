"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCard from "@/components/SectionCard";

const tableData = [
  { type: "Identity", what: "Full name, mobile number", purpose: "Account creation and authentication" },
  { type: "Device Phone State", what: "SIM card presence, device state (read-only)", purpose: "Security – detect unauthorized SIM changes" },
  { type: "Business Data", what: "Invoices, challans, client records, tasks", purpose: "Core app functionality" },
  { type: "Usage Data", what: "Actions performed in the app", purpose: "Audit trail and timeline history" },
  { type: "Notifications", what: "Push notification tokens", purpose: "Send real-time business alerts" },
];

const thirdParty = [
  { service: "Firebase Authentication", provider: "Google LLC", purpose: "Phone number OTP login" },
  { service: "Cloud Firestore", provider: "Google LLC", purpose: "Business data storage" },
  { service: "Firebase Cloud Messaging", provider: "Google LLC", purpose: "Push notifications" },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f0f4ff]">

      {/* ── Hero Header ── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#1a73e8] via-[#1558b0] to-[#0d3b7a] text-white">
        {/* Animated background blobs */}
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Legal Document
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-blue-100 text-lg"
          >
            Sambhav Services – Business Management Application
          </motion.p>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {[
              { label: "Developer", value: "Shailendra Badjatya" },
              { label: "Effective Date", value: "March 19, 2025" },
              { label: "Last Updated", value: "March 19, 2025" },
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

        {/* Intro notice */}
        <AnimatedSection delay={0.05}>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-2xl mt-0.5">ℹ️</span>
            <p className="text-blue-800 text-sm leading-relaxed">
              This app is intended for <strong>authorized business staff only</strong>. It is not a
              public consumer application. Access is restricted to invited users with verified mobile numbers.
            </p>
          </div>
        </AnimatedSection>

        {/* 1. Introduction */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📋" number={1} title="Introduction">
            <p>
              Welcome to <strong className="text-gray-800">Sambhav Services</strong>, a business management application
              developed by <strong className="text-gray-800">Shailendra Badjatya</strong> ("we", "us", or "our").
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect your personal information
              when you use the App. By using Sambhav Services, you agree to the practices described in this policy.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 2. Information We Collect */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📊" number={2} title="Information We Collect">
            <p>We collect the following categories of information:</p>
            <div className="mt-4 rounded-xl overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data Type</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">What We Collect</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <motion.tr
                      key={row.type}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="border-t border-gray-100 hover:bg-blue-50/40 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.what}</td>
                      <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.purpose}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </AnimatedSection>

        {/* 3. Phone State */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📱" number={3} title="Phone State & SIM Access">
            <p>
              The App requests <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">READ_PHONE_STATE</code> and{" "}
              <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">READ_PHONE_NUMBERS</code> permissions for the following security purpose:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>
                <strong className="text-gray-700">SIM Change Detection:</strong> To verify that the SIM card associated with a registered account has not been swapped by an unauthorized person. If a SIM change is detected, the user may be required to re-authenticate.
              </li>
            </ul>
            <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 text-amber-800 text-sm">
              <strong>⚠️ Important:</strong> We do NOT use this permission to track your location, read call logs, intercept SMS messages, or auto-collect your phone number. SIM state data is used exclusively for account security and is never shared with third parties.
            </div>
          </SectionCard>
        </AnimatedSection>

        {/* 4. How We Use */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="⚙️" number={4} title="How We Use Your Information">
            <p>We use collected information solely for the following purposes:</p>
            <ul className="mt-2 space-y-2">
              {[
                "Authenticate and authorize staff members to access the app",
                "Enable core business features: invoice tracking, client management, task management",
                "Maintain an audit trail of actions for business accountability",
                "Detect unauthorized account access via SIM change detection",
                "Send push notifications about invoice and task updates",
                "Allow administrators to manage staff accounts and permissions",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              We do <strong>not</strong> use your data for advertising, profiling, or any purpose outside of the business operations described above.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 5. Data Storage */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔒" number={5} title="Data Storage & Security">
            <p>
              All data is stored securely using <strong className="text-gray-800">Google Firebase</strong> (Firestore and Firebase Authentication), which complies with industry-standard security practices including encryption in transit (TLS) and at rest.
            </p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li>Authentication handled via Firebase Phone Authentication (OTP-based)</li>
              <li>Database access restricted by Firestore Security Rules</li>
              <li>Only authenticated and authorized users can read or write data</li>
              <li>Admin users have additional privileges managed within the app</li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 6. Third Party */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔗" number={6} title="Third-Party Services">
            <p>The App uses the following third-party services:</p>
            <div className="mt-4 rounded-xl overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Provider</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {thirdParty.map((row, i) => (
                    <motion.tr
                      key={row.service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="border-t border-gray-100 hover:bg-blue-50/40 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-700">{row.service}</td>
                      <td className="px-4 py-3 text-gray-600">{row.provider}</td>
                      <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.purpose}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Please refer to{" "}
              <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 hover:underline">
                Google&apos;s Privacy Policy
              </a>{" "}
              for details on how Google handles data.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 7. Data Sharing */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🤝" number={7} title="Data Sharing & Disclosure">
            <p>We do <strong className="text-gray-800">not</strong> sell, rent, or trade your personal information. We may share data only in these limited circumstances:</p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li><strong className="text-gray-700">Within the business:</strong> Staff data is visible to authorized administrators of the same business account</li>
              <li><strong className="text-gray-700">Legal obligations:</strong> If required by law, court order, or government authority</li>
              <li><strong className="text-gray-700">Service providers:</strong> Firebase/Google as described above, solely to operate the app</li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 8. Data Retention */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🗓️" number={8} title="Data Retention">
            <p>
              Business data (invoices, clients, tasks) is retained for as long as the business account remains active. Staff account data is retained until deleted by an administrator.
            </p>
            <p>
              If you wish to delete your data, please contact us at the email below and we will process your request within <strong className="text-gray-800">30 days</strong>.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 9. Children */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="👶" number={9} title="Children's Privacy">
            <p>
              Sambhav Services is a business application intended for adults (18 years and older). We do not knowingly collect any information from children under the age of 13. If we become aware that a child has provided personal information, we will delete it immediately.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 10. Your Rights */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="✅" number={10} title="Your Rights">
            <p>As a user of this app, you have the right to:</p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Withdraw consent for phone state access via Android app permissions settings</li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 11. Changes */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔄" number={11} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
            <p>
              For significant changes, we will notify users via the app or through the registered mobile number.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 12. Contact */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📬" number={12} title="Contact Us">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 text-center"
            >
              <p className="font-bold text-gray-800 text-lg">Shailendra Badjatya</p>
              <a
                href="mailto:sammedtechno@gmail.com"
                className="text-blue-600 font-semibold text-xl mt-1 block hover:underline"
              >
                sammedtechno@gmail.com
              </a>
              <p className="text-gray-500 text-sm mt-3">
                We will respond to all privacy-related inquiries within 7 business days.
              </p>
            </motion.div>
          </SectionCard>
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
        <p className="mt-1">Sambhav Services – Privacy Policy</p>
      </motion.footer>

    </main>
  );
}
