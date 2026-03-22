"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCard from "@/components/SectionCard";

const tableData = [
  {
    type: "Identity",
    what: "Full name, email address, phone number",
    purpose: "Account creation, authentication, and communication",
  },
  {
    type: "Organization",
    what: "Company name, address, phone, email, website, logo, GSTIN, license number",
    purpose: "Provisioning and managing your organization account",
  },
  {
    type: "Engineer / Staff",
    what: "Full name, email, phone, address, government ID number, assigned regions",
    purpose: "Field engineer profile management and ticket assignment",
  },
  {
    type: "Client / Customer",
    what: "Name, address, phone, email, associated machines",
    purpose: "Customer relationship and service history tracking",
  },
  {
    type: "Machine Data",
    what: "Machine model, serial number, ownership type, installation date, warranty details",
    purpose: "Asset tracking and service scheduling",
  },
  {
    type: "Service Tickets",
    what: "Problem descriptions, photos, status history, visit logs, service reports (PDF)",
    purpose: "Core service management functionality and audit trail",
  },
  {
    type: "Expense Records",
    what: "Amount, category, notes, receipt photos, approval details",
    purpose: "Field expense tracking and reimbursement workflows",
  },
  {
    type: "Referral / Lead Data",
    what: "Prospect name, address, phone, email, machine model, commercial terms",
    purpose: "Customer acquisition and referral tracking",
  },
  {
    type: "Session & Security",
    what: "Last login timestamp, FCM push token, biometric enrollment status",
    purpose: "Authentication, security, and real-time push notifications",
  },
];

const thirdParty = [
  {
    service: "Firebase Authentication",
    provider: "Google LLC",
    purpose: "Email OTP-based user login",
  },
  {
    service: "Cloud Firestore",
    provider: "Google LLC",
    purpose: "All business data storage (tickets, clients, machines, etc.)",
  },
  {
    service: "Firebase Storage",
    provider: "Google LLC",
    purpose: "Photo and document uploads (ticket images, expense receipts, reports)",
  },
  {
    service: "Firebase Cloud Messaging",
    provider: "Google LLC",
    purpose: "Push notifications for ticket updates and assignments",
  },
  {
    service: "Cloud Functions (Firebase)",
    provider: "Google LLC",
    purpose: "Backend processing: OTP generation, notifications, photo compression",
  },
  {
    service: "Gmail SMTP (via Nodemailer)",
    provider: "Google LLC",
    purpose: "Sending OTP login codes and system notifications via email",
  },
];

const permissions = [
  {
    permission: "INTERNET",
    reason: "Required to communicate with Firebase backend services",
  },
  {
    permission: "CAMERA",
    reason: "Capture photos for service tickets and expense receipts",
  },
  {
    permission: "READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE",
    reason: "Select existing photos from device gallery for tickets or receipts",
  },
  {
    permission: "WRITE_EXTERNAL_STORAGE",
    reason: "Save generated PDF reports and Excel exports to device storage",
  },
  {
    permission: "POST_NOTIFICATIONS",
    reason: "Display push notification alerts for ticket and task updates",
  },
  {
    permission: "USE_BIOMETRIC / USE_FINGERPRINT",
    reason: "Optional biometric login (fingerprint) for faster re-authentication",
  },
  {
    permission: "ACCESS_NETWORK_STATE",
    reason: "Detect network connectivity for offline/online mode switching",
  },
  {
    permission: "VIBRATE",
    reason: "Haptic feedback for incoming notification alerts",
  },
  {
    permission: "RECEIVE_BOOT_COMPLETED",
    reason: "Restore background notification listener after device restart",
  },
];

export default function SamTechyPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f0f4ff]">

      {/* ── Hero Header ── */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
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
            <Image
              src="/samtechy_logo.png"
              alt="SamTechy"
              width={128}
              height={128}
              className="rounded-[28px] shadow-2xl shadow-black/40"
            />
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
            SamTechy – Machine Service Management System
          </motion.p>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {[
              { label: "Developer", value: "Sammed Technosol" },
              { label: "Platforms", value: "Android · Windows" },
              { label: "Effective Date", value: "March 22, 2026" },
              { label: "Last Updated", value: "March 22, 2026" },
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
              SamTechy is intended for <strong>authorized business users only</strong> — including
              administrators, field engineers, dealers, and clients of registered organizations.
              Access is restricted to invited users with verified credentials.
            </p>
          </div>
        </AnimatedSection>

        {/* 1. Introduction */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📋" number={1} title="Introduction">
            <p>
              Welcome to <strong className="text-gray-800">SamTechy</strong>, a Machine Service
              Management System developed by{" "}
              <strong className="text-gray-800">Sammed Technosol</strong> ("we", "us", or "our").
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect your personal
              information when you use the SamTechy application on Android or Windows. By using
              SamTechy, you agree to the practices described in this policy.
            </p>
            <p>
              SamTechy operates as a multi-organization SaaS platform. Data is scoped per
              organization — users within an organization can only access data belonging to that
              organization.
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
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className="border-t border-gray-100 hover:bg-blue-50/40 transition-colors"
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

        {/* 3. Android Permissions */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📱" number={3} title="Android Permissions">
            <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <span>🤖</span> Android Platform Only
            </div>
            <p>
              On Android, SamTechy requests the following permissions. Each permission is used
              exclusively for the stated purpose:
            </p>
            <div className="mt-4 space-y-2">
              {permissions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">
                      {item.permission}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">{item.reason}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 text-amber-800 text-sm">
              <strong>⚠️ Important:</strong> No permission is used for advertising, location
              tracking, call/SMS access, or any purpose beyond what is described above.
            </div>
          </SectionCard>
        </AnimatedSection>

        {/* 4. Biometric Authentication */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔏" number={4} title="Biometric Authentication">
            <p>
              SamTechy supports optional <strong className="text-gray-800">fingerprint / biometric login</strong> on
              compatible Android devices using the Android{" "}
              <code className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">
                BiometricPrompt
              </code>{" "}
              API.
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                Biometric data (fingerprint templates) is <strong>never transmitted</strong> to our
                servers or stored in our database
              </li>
              <li>
                All biometric operations are handled entirely by the device&apos;s secure hardware
                (Android Keystore / TEE)
              </li>
              <li>
                We only store a boolean flag indicating whether biometric login is enabled for your
                account — not the biometric data itself
              </li>
              <li>Biometric authentication is always optional and can be disabled at any time</li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 5. Windows Platform */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🖥️" number={5} title="Windows Platform">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <span>🪟</span> Windows Platform
            </div>
            <p>
              SamTechy is also available on <strong className="text-gray-800">Microsoft Windows</strong>.
              The Windows version provides the same core service management functionality with these
              platform-specific differences:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                {
                  title: "No Camera Permissions",
                  desc: "The Windows app does not request camera access. Photos must be selected from existing files on your device.",
                },
                {
                  title: "No Push Notifications via FCM",
                  desc: "Firebase Cloud Messaging is not used on Windows. In-app alerts are displayed instead.",
                },
                {
                  title: "No Biometric via Android Keystore",
                  desc: "Windows Hello (PIN/fingerprint) may be used for session re-authentication if supported by the device.",
                },
                {
                  title: "Same Cloud Data",
                  desc: "All business data (tickets, clients, machines, expenses) is stored in Google Firebase — identical to Android. No business data is stored locally on the Windows device.",
                },
                {
                  title: "No Advertising or Tracking",
                  desc: "The Windows version does not use any advertising SDKs, analytics libraries, or tracking pixels.",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                  <span>
                    <strong className="text-gray-700">{item.title}:</strong> {item.desc}
                  </span>
                </motion.li>
              ))}
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 6. How We Use */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="⚙️" number={6} title="How We Use Your Information">
            <p>We use collected information solely for the following purposes:</p>
            <ul className="mt-2 space-y-2">
              {[
                "Authenticate and authorize users to access the SamTechy platform",
                "Enable core service management features: ticket creation, assignment, tracking, and closure",
                "Manage machine assets, AMC/warranty schedules, and installation records",
                "Process and approve field expense claims submitted by engineers",
                "Track customer referrals and leads through the approval pipeline",
                "Generate PDF service reports and Excel analytics exports",
                "Send push notifications for ticket assignments, status updates, and approvals",
                "Maintain a complete audit timeline of all actions for business accountability",
                "Allow administrators to manage staff roles, regions, and permissions",
                "Enforce organization-level data isolation in a multi-tenant environment",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              We do <strong>not</strong> use your data for advertising, profiling, or any purpose
              outside of the business operations described above.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 7. Data Storage & Security */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔒" number={7} title="Data Storage & Security">
            <p>
              All data is stored securely using{" "}
              <strong className="text-gray-800">Google Firebase</strong> (Cloud Firestore and
              Firebase Storage), hosted in the{" "}
              <strong className="text-gray-800">nam5 (North America)</strong> region. Firebase
              complies with industry-standard security practices.
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside">
              <li>All data in transit is encrypted using <strong>TLS/HTTPS</strong></li>
              <li>All data at rest is encrypted by Firebase using <strong>AES-256</strong></li>
              <li>
                Sensitive fields within the app are additionally encrypted using{" "}
                <strong>AES-256-GCM</strong> before being written to the database
              </li>
              <li>
                Session tokens are stored in the <strong>Android Keystore</strong> (hardware-backed
                secure storage)
              </li>
              <li>
                Database access is governed by <strong>Firestore Security Rules</strong> enforcing
                role-based access control (Super Admin, Admin, Engineer, Dealer, Client)
              </li>
              <li>Users can only access data belonging to their own organization</li>
              <li>
                The app enforces HTTPS-only traffic (<code className="bg-blue-50 text-blue-700 px-1 py-0.5 rounded text-xs font-mono">usesCleartextTraffic=&quot;false&quot;</code>)
              </li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 8. Third-Party Services */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔗" number={8} title="Third-Party Services">
            <p>SamTechy uses the following third-party services:</p>
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
                      transition={{ delay: i * 0.07 }}
                      className="border-t border-gray-100 hover:bg-blue-50/40 transition-colors"
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
                className="text-blue-600 hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              for details on how Google handles data within these services.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 9. Multi-Organization & Role-Based Access */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🏢" number={9} title="Multi-Organization & Role-Based Access">
            <p>
              SamTechy is a <strong className="text-gray-800">multi-tenant SaaS platform</strong>.
              Each organization&apos;s data is strictly isolated. Users cannot access data from
              other organizations.
            </p>
            <p className="mt-2">Within an organization, data access is role-based:</p>
            <ul className="mt-3 space-y-2">
              {[
                {
                  role: "Super Admin",
                  access: "Full system access across all organizations (platform management)",
                },
                {
                  role: "Admin",
                  access: "Full access within their own organization — engineers, clients, tickets, reports",
                },
                {
                  role: "Engineer",
                  access: "Access to assigned tickets, own profile, and submitted expenses",
                },
                {
                  role: "Dealer",
                  access: "Access to assigned clients, referrals, and related tickets",
                },
                {
                  role: "Client",
                  access: "Access to own service tickets and machine records only",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <span className="font-bold text-gray-700 w-24 flex-shrink-0">{item.role}</span>
                  <span className="text-gray-600 text-sm">{item.access}</span>
                </motion.li>
              ))}
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 10. Data Sharing */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🤝" number={10} title="Data Sharing & Disclosure">
            <p>
              We do <strong className="text-gray-800">not</strong> sell, rent, or trade your
              personal information. Data may be shared only in these limited circumstances:
            </p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li>
                <strong className="text-gray-700">Within the organization:</strong> Staff data is
                visible to authorized administrators within the same organization
              </li>
              <li>
                <strong className="text-gray-700">Service providers:</strong> Firebase and Google as
                described above, solely to operate the app&apos;s backend infrastructure
              </li>
              <li>
                <strong className="text-gray-700">Legal obligations:</strong> If required by law,
                court order, or government authority in India or applicable jurisdictions
              </li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 11. Data Retention */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🗓️" number={11} title="Data Retention">
            <p>
              Business data (tickets, clients, machines, expenses) is retained for as long as the
              organization&apos;s account remains active and licensed.
            </p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li>
                Staff and engineer accounts are retained until deleted by an administrator
              </li>
              <li>
                Inactive user accounts are marked as inactive rather than immediately deleted to
                preserve historical audit records
              </li>
              <li>
                OTP login codes are automatically expired within <strong>10 minutes</strong> of
                generation and purged from the database
              </li>
              <li>
                Ticket photo files stored in Firebase Storage are subject to periodic compression
                by a scheduled Cloud Function
              </li>
            </ul>
            <p className="mt-3">
              To request deletion of your personal data, please contact us at the email below. We
              will process your request within <strong className="text-gray-800">30 days</strong>.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 12. Children */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="👶" number={12} title="Children's Privacy">
            <p>
              SamTechy is a business-to-business application intended exclusively for adults
              (18 years and older) acting in a professional capacity. We do not knowingly collect
              any information from children under the age of 13. If we become aware that a child
              has provided personal information, we will delete it immediately.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 13. Your Rights */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="✅" number={13} title="Your Rights">
            <p>As a user of SamTechy, you have the right to:</p>
            <ul className="mt-2 space-y-1.5 list-disc list-inside">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your account and associated personal data</li>
              <li>
                Withdraw consent for specific Android permissions via the device&apos;s App Settings
                at any time (note: some features may stop working if required permissions are
                revoked)
              </li>
              <li>Disable biometric login at any time within the app settings</li>
              <li>On Windows, uninstall the app at any time to stop all local data access</li>
            </ul>
          </SectionCard>
        </AnimatedSection>

        {/* 14. Changes */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="🔄" number={14} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              &ldquo;Last Updated&rdquo; date at the top of this page. Continued use of SamTechy
              after changes constitutes acceptance of the updated policy.
            </p>
            <p>
              For significant changes, we will notify users via in-app notification or through
              their registered email address.
            </p>
          </SectionCard>
        </AnimatedSection>

        {/* 15. Contact */}
        <AnimatedSection delay={0.1}>
          <SectionCard icon="📬" number={15} title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              your data, please contact us:
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mt-4 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-2xl p-6 text-center"
            >
              <p className="font-bold text-gray-800 text-lg">Sammed Technosol</p>
              <p className="text-gray-500 text-sm mt-0.5">by Shailendra Badjatya</p>
              <a
                href="mailto:sammedtechno@gmail.com"
                className="text-blue-600 font-semibold text-xl mt-2 block hover:underline"
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
        <p className="font-medium text-gray-500">© 2026 Sammed Technosol. All rights reserved.</p>
        <p className="mt-1">SamTechy – Privacy Policy</p>
      </motion.footer>

    </main>
  );
}
