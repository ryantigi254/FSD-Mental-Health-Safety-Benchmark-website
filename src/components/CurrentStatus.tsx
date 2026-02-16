"use client";

import { motion, type Variants } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import TimelineItem from "./ui/TimelineItem";
import { siteContent } from "@/content/site";
import { milestones } from "@/content/milestones";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CurrentStatus() {
  return (
    <SectionWrapper
      id={siteContent.sections.status.id}
      title={siteContent.sections.status.title}
      background="light"
    >
      <div className="max-w-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {milestones.map((milestone, index) => (
            <motion.div key={milestone.title} variants={itemVariants}>
              <TimelineItem
                date={milestone.date}
                title={milestone.title}
                description={milestone.description}
                status={milestone.status}
                isLast={index === milestones.length - 1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
