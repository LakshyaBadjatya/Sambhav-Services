"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCard from "@/components/SectionCard";

const tableData = [
  {
    type: "Identity",
    what: "Full name, email address",
    purpose: "Account creation and authentication",
  },
  {
    type: "Contact",
    what: "Phone number, delivery address",
    purpose: "Order delivery and communication",
  },
  {
    type: "Order Data",
    what: "Cart items, order history, cake customizations, delivery notes",
    purpose: "Core ordering functionality",
  },
  {
    type: "Payment Reference",
    what: "Order ID, UPI transaction reference",
    purpose: "Payment verification and order tracking",
  },
  {
    type: "Profile Photo",
    what: "Google account profile picture (if signed in via Google)",
    purpose: "Display in user profile",
  },
];

const thirdParty = [
  {
    service: "Firebase Authentication",
    provider: "Google LLC",
    purpose: "Email/password and Google Sign-In login",
  },
  {
    service: "Cloud Firestore",
    provider: "Google LLC",
    purpose: "Storing cakes catalog, orders, and user profiles",
  },
  {
    service: "Firebase Storage",
    provider: "Google LLC",
    purpose: "Cake product images uploaded by admin",
  },
  {
    service: "Google Sign-In",
    provider: "Google LLC",
    purpose: "One-tap authentication via Google account",
  },
];

export default function CheenaBakesPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#fff8f5]">

      {/* ── Hero Header ── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#E91E63] via-[#C2185B] to-[#880E4F] text-white">
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
            <div className="w-28 h-28 rounded-full bg-white p-1.5 shadow-2xl shadow-black/30">
              <Image
                src="/cheenabakes_logo.png"
                alt="Cheena Bakes"
                width={112}
                height={112}
                className="w-full h-full object-cover rounded-full"
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
            className="text-pink-100 text-lg"
          >
            Cheena Bakes – 100% Eggless Cakes
          </motion.p>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {[
              { label: "Developer", value: "Lakshya Badjatya" },
              { label: "Platform", value: "Android" },
              { label: "Effective Date", value: "March 29, 2026" },
              { label: "Last Updated", value: "March 29, 2026" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-left"
              >
                <div className="text-[10px] uppercase tracking-widest text-pink-200 font-semibold mb-0.5">
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
          <div className="bg-pink-50 border border-pink-100 rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-2xl mt-0.5">🍰</span>
            <p className="text-pink-800 text-sm leading-relaxed">
              Cheena Bakes is a cake ordering application for customers who love <strong>100% eggless cakes</strong>.
              This policy describes how we handle your information when you use the app to browse, order, and pay for cakes.
            </p>
          </div>
        </AnimatedSection>

        {/* 1. Introduction */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📋" number={1} title="Introduction">
            <p>
              Welcome to <strong className="text-gray-800">Cheena Bakes</strong>, a cake ordering
              application developed by <strong className="text-gray-800">Lakshya Badjatya</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect your personal
              information when you use the Cheena Bakes app. By using the app, you agree to the
              practices described in this policy.
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
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Data Type
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      What We Collect
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Purpose
                    </th>
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
                      className="border-t border-gray-100 hover:bg-pink-50/40 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{row.what}</td>
                      <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">
                        {row.purpose}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </AnimatedSection>

        {/* 3. How We Use Your Information */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="⚙️" number={3} title="How We Use Your Information">
            <p>We use collected information solely for the following purposes:</p>
            <ul className="mt-2 space-y-2">
              {[
                "Authenticate your identity via email/password or Google Sign-In",
                "Display and manage the cake catalog for browsing and ordering",
                "Process your cake orders including weight selection, quantity, and custom messages",
                "Generate UPI QR codes for secure payment processing",
                "Store and display your order history and order status",
                "Pre-fill delivery details (phone, address) from your profile for faster checkout",
                "Allow admin to manage cake listings, pricing, and order fulfillment",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              We do <strong>not</strong> use your data for advertising, profiling, analytics tracking,
              or any purpose outside of the cake ordering service described above.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 4. Payment Information */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="💳" number={4} title="Payment Information">
            <p>
              Cheena Bakes uses <strong className="text-gray-800">UPI (Unified Payments Interface)</strong> for
              payment processing. When you place an order:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                A QR code is generated containing the UPI payment URI with the order amount
              </li>
              <li>
                You scan the QR code using your preferred UPI app (Google Pay, PhonePe, Paytm, etc.)
              </li>
              <li>
                The payment is processed entirely by your UPI app — <strong>we do not collect, store, or have access to your bank details, UPI PIN, or transaction credentials</strong>
              </li>
              <li>
                We only store the order ID and amount for order tracking purposes
              </li>
            </ul>
            <div className="mt-4 bg-green-50 border border-green-100 rounded-xl p-4 text-green-800 text-sm">
              <strong>Safe & Secure:</strong> Your financial information never passes through our servers.
              All payment processing is handled directly by your UPI application.
            </div>
          </SectionCard>
        </AnimatedSection>

        {/* 5. Data Storage & Security */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔒" number={5} title="Data Storage & Security">
            <p>
              All data is stored securely using{" "}
              <strong className="text-gray-800">Google Firebase</strong> (Cloud Firestore, Firebase
              Authentication, and Firebase Storage), which complies with industry-standard security
              practices.
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside">
              <li>All data in transit is encrypted using <strong>TLS/HTTPS</strong></li>
              <li>All data at rest is encrypted by Firebase</li>
              <li>Authentication is handled securely via Firebase Auth (email/password and Google OAuth)</li>
              <li>Database access is restricted by <strong>Firestore Security Rules</strong> — users can only access their own data</li>
              <li>Admin access is restricted to authorized email addresses only</li>
              <li>Cake product images are stored in Firebase Storage with read-only public access</li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 6. Third-Party Services */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔗" number={6} title="Third-Party Services">
            <p>The app uses the following third-party services:</p>
            <div className="mt-4 rounded-xl overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Purpose
                    </th>
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
                      className="border-t border-gray-100 hover:bg-pink-50/40 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-700">{row.service}</td>
                      <td className="px-4 py-3 text-gray-600">{row.provider}</td>
                      <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">
                        {row.purpose}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Please refer to{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                className="text-pink-600 hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              for details on how Google handles data within these services.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 7. Data Sharing */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🤝" number={7} title="Data Sharing & Disclosure">
            <p>
              We do <strong className="text-gray-800">not</strong> sell, rent, or trade your personal
              information to any third party. Data may be shared only in these limited circumstances:
            </p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li>
                <strong className="text-gray-700">Order fulfillment:</strong> Your delivery address and
                phone number are used by Cheena Bakes to deliver your order
              </li>
              <li>
                <strong className="text-gray-700">Service providers:</strong> Firebase/Google as
                described above, solely to operate the app
              </li>
              <li>
                <strong className="text-gray-700">Legal obligations:</strong> If required by law, court
                order, or government authority
              </li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 8. Data Retention */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🗓️" number={8} title="Data Retention">
            <p>
              Your account data and order history are retained for as long as your account remains
              active. Order records are kept for business accounting purposes.
            </p>
            <p>
              If you wish to delete your account and all associated data, please contact us at the
              email below and we will process your request within{" "}
              <strong className="text-gray-800">30 days</strong>.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 9. Children */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="👶" number={9} title="Children&apos;s Privacy">
            <p>
              Cheena Bakes is a general consumer application. We do not knowingly collect any
              information from children under the age of 13. If we become aware that a child has
              provided personal information, we will delete it immediately.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 10. Your Rights */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="✅" number={10} title="Your Rights">
            <p>As a user of Cheena Bakes, you have the right to:</p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and all associated data</li>
              <li>Update your profile information (name, phone, address) at any time within the app</li>
              <li>Sign out of the app to end your active session</li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 11. Permissions */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📱" number={11} title="App Permissions">
            <p>Cheena Bakes requests only the following permissions:</p>
            <div className="mt-4 space-y-2">
              {[
                { permission: "INTERNET", reason: "Required to communicate with Firebase backend and load cake images" },
                { permission: "ACCESS_NETWORK_STATE", reason: "Detect network connectivity for proper error handling" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <span className="text-pink-500 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <code className="bg-pink-50 text-pink-700 px-1.5 py-0.5 rounded text-xs font-mono">
                      {item.permission}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">{item.reason}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 bg-green-50 border border-green-100 rounded-xl p-4 text-green-800 text-sm">
              <strong>Minimal Permissions:</strong> Cheena Bakes does not request access to your
              camera, contacts, location, phone state, storage, or any sensitive device data.
            </div>
          </SectionCard>
        </AnimatedSection>

        {/* 12. Changes */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔄" number={12} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              &ldquo;Last Updated&rdquo; date at the top of this page. Continued use of the app after
              changes constitutes acceptance of the updated policy.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 13. Contact */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📬" number={13} title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please
              contact us:
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mt-4 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-2xl p-6 text-center"
            >
              <p className="font-bold text-gray-800 text-lg">Lakshya Badjatya</p>
              <p className="text-gray-500 text-sm mt-0.5">Developer – Cheena Bakes</p>
              <a
                href="mailto:sammedtechno@gmail.com"
                className="text-pink-600 font-semibold text-xl mt-2 block hover:underline"
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
        <p className="font-medium text-gray-500">© 2026 Lakshya Badjatya. All rights reserved.</p>
        <p className="mt-1">Cheena Bakes – Privacy Policy</p>
      </motion.footer>

    </main>
  );
}
