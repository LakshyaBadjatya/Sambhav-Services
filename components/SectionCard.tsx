"use client";
import { motion } from "framer-motion";

interface Props {
  icon: string;
  number: number;
  title: string;
  children: React.ReactNode;
}

export default function SectionCard({ icon, number, title, children }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(26,115,232,0.12)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-2xl border border-blue-50 p-8 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">
          {icon}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
            {String(number).padStart(2, "0")}
          </span>
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </div>
      </div>
      <div className="text-gray-600 leading-relaxed space-y-3 text-[15px]">
        {children}
      </div>
    </motion.div>
  );
}
