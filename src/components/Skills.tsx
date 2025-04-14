"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Database,
  ServerCog,
  Settings,
  Globe,
  LayoutTemplate,
  GitBranch,
  ShieldCheck,
  Terminal,
  Zap,
  Braces,
  Box,
  LucideIcon,
} from "lucide-react";

export default function SkillsModal() {
  const skills: { icon: LucideIcon; label: string }[] = [
    // Frontend
    { icon: MonitorSmartphone, label: "React.js / Next.js" },
    { icon: LayoutTemplate, label: "TailwindCSS / UI Design" },
    { icon: Braces, label: "JavaScript / TypeScript" },

    // Backend
    { icon: ServerCog, label: "Node.js / Express.js" },
    { icon: Globe, label: "Django / Django REST" },
    { icon: Database, label: "PostgreSQL / SQLite" },

    // DevOps & Tools
    { icon: Box, label: "Docker / Docker Compose" },
    { icon: Terminal, label: "Linux / CLI Tools" },
    { icon: GitBranch, label: "Git / GitHub" },
    { icon: Settings, label: "CI/CD / Nginx" },

    // Web & Security
    { icon: ShieldCheck, label: "JWT / OAuth2 / 42 API" },
    { icon: Zap, label: "WebSockets / Real-time Apps" },
  ];

  return (
    <div className="py-10 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition font-semibold">
        <Zap className="w-8 h-16 animate-pulse" />
         Click to see My Superpowers
      </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h4 className="text-2xl font-bold text-center text-neutral-800 dark:text-white mb-6">
              My Tech Stack & Skills ⚙️
            </h4>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto text-neutral-700 dark:text-neutral-200"
            >
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  <skill.icon className="text-indigo-500 w-5 h-5" />
                  <span className="text-sm">{skill.label}</span>
                </div>
              ))}
            </motion.div>
          </ModalContent>

          <ModalFooter className="mt-8 flex justify-center gap-4">
            <button className="px-4 py-1 bg-gray-200 text-black dark:bg-neutral-900 dark:text-white rounded-md text-sm">
              Close
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-md border border-black dark:border-white text-sm">
              Let’s Work Together
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
