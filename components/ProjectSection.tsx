"use client";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ArrowDoodle from "@/components/ArrowDoodle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/components/storage";
import { Button } from "@/components/ui/button";

const ProjectSection = () => {
  return (
    <section className="mt-28">
      <div className="container mx-auto flex flex-col gap-7 relative h-[84vh]">
        <div className="
          max-w-[330px] xl:max-w-[480px] mx-auto md:h-full lg:mx-0
          flex flex-col lg:justify-center lg:pl-10 xl:pl-28
          "
        >
          <div className="
            font-bold relative w-full flex items-center justify-center
            text-2xl md:text-3xl
            "
          >
            <ArrowDoodle />
            Recent Projects
          </div>

          <p className="
            my-2 lg:my-5 text-left text-muted-foreground font-light
            text-sm md:text-[16px] md:leading-[24px]
            "
          >
            Exploring new ventures and mastering existing skills
            through diverse projects
          </p>

          <div className="w-full flex justify-center">
            <Link className="max-w-[170px]" href="/projects" passHref>
              <Button className="rounded-full max-w-[170px]">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>

        <div className="
          lg:w-[630px] xl:w-[750px] lg:absolute right-5 top-0
          flex items-center h-full
          "
        >
          <Swiper
            className="w-full h-[400px] sm:h-[430px]"
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 1.5,
              },
              700: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
                key={index}
              >
                <ProjectCard
                  name={project.name}
                  image={project.image}
                  category={project.category}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                  stack={project.stack}
                  date={project.date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
