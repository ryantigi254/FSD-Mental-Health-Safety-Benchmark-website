"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import UpdateEntry from "./ui/UpdateEntry";
import { siteContent } from "@/content/site";
import { updates } from "@/content/updates";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Updates() {
  return (
    <SectionWrapper
      id={siteContent.sections.updates.id}
      title={siteContent.sections.updates.title}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-3xl space-y-4"
      >
        {updates.map((update) => (
          <motion.div key={update.date + update.title} variants={itemVariants}>
            <UpdateEntry
              date={update.date}
              title={update.title}
              body={update.body}
              tag={update.tag}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
