"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import Socials from "@/app/components/headers/Socials";
import RotatingGeometric from "@/app/components/RotatingGeometric";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const childVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.12,
      y: { type: "spring", mass: 0.3, damping: 10, stiffness: 150 },
      opacity: { duration: 0.35 },
    },
  },
};

const HeroSection = () => {
  return (
    <section
      className="relative bg-[#fef5f5] dark:bg-transparent h-[650px] sm:h-[700px] md:h-[750px]
      flex justify-center items-center"
    >
      <div className="absolute w-full top-0 overflow-hidden h-[650px] sm:h-[700px] md:h-[750px]">
        <RotatingGeometric />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row-reverse justify-center items-center
        gap-x-10 gap-y-3 z-20 py-20"
      >
        <div className="flex flex-col max-w-[380px] items-start">
          <div>
            <motion.div
              className="text-sm uppercase font-semibold mb-2 text-primary
              tracking-[3px] flex items-center gap-x-2 justify-start"
              variants={childVariants}
            >
              <span className="hidden md:block w-5 h-[2px] bg-primary rounded-lg" />
              Software Engineer
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="text-big text-left flex flex-col items-start"
            >
              Hi there,
              <div className="flex gap-x-2 items-center">
                my name is
                <span className="text-primary">Phot</span>
              </div>
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="my-3 text-left text-muted-foreground font-light
              text-sm md:text-[16px] md:leading-[24px]"
            >
              I love to build things that can help people.
            </motion.p>
          </div>

          <motion.div variants={childVariants}>
            <Socials
              containerStyles="flex md:hidden justify-center items-center gap-x-5"
              iconsStyles="text-[23px] hover:text-primary"
            />
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex gap-x-2 sm:gap-x-3 mt-3 w-full justify-start"
          >
            <Link href="#contact" passHref className="hidden xs:block">
              <Button className="rounded-full gap-x-2">
                Contact Me
                <RiMailSendLine size={18} />
              </Button>
            </Link>

            <Link
              href="/phot_kosee_resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              passHref
              className="hidden xs:block"
            >
              <Button className="rounded-full gap-x-1" variant="secondary">
                Resume
                <IoDocumentTextOutline size={19} />
              </Button>
            </Link>

            <Link href="#contact" passHref className="xs:hidden">
              <Button className="rounded-full gap-x-2 px-3" size="sm">
                Contact Me
                <RiMailSendLine size={18} />
              </Button>
            </Link>

            <Link
              href="/phot_kosee_resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              passHref
              className="xs:hidden"
            >
              <Button
                className="rounded-full gap-x-1 px-3"
                variant="secondary"
                size="sm"
              >
                Resume
                <IoDocumentTextOutline size={19} />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div variants={childVariants}>
          <Socials
            containerStyles="hidden md:flex justify-center items-center
            gap-x-5 md:flex-col md:gap-y-5"
            iconsStyles="text-[27px] hover:text-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
