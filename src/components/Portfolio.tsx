"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import proj2 from "../assets/proj2.jpeg";
import proj3 from "../assets/proj3.jpeg";
import proj4 from "../assets/proj4.jpg";

const projects = [
  {
    title: "Trading Card Harry Potter",
    desc: "Discover the magical world of Harry Potter through our exciting card trading platform! Collect, trade, and battle with iconic characters and spells in this enchanting card game adventure.",
    devStack: "Web Dev",
    git: "git",
    src: proj2,
  },
  {
    title: "Raspberry Pong",
    desc: "Experience the fun of classic Pong with a Raspberry Pi twist! Challenge friends in this retro-inspired game, powered by the magic of Raspberry Pi technology.",
    devStack: "IOT",
    git: "git2",
    src: proj3,
  },
  {
    title: "Museum App",
    desc: "Explore the rich history of toys at the Musée du Jouet de Poissy with our interactive app! Discover exhibits, learn about iconic toys, and enjoy a fun, engaging experience right at your fingertips.",
    devStack: "Swift",
    git: "git3",
    src: proj4,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        My
        <span className="text-orange-400">Projects</span>
      </h1>
      <div className="max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-12"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="flex space-x-6 my-4">
                <a
                  href={project.git}
                  className="text-white hover:text-orange-400"
                >
                  Git
                </a>
              </div>
              <div className="w-64 h-[1px] bg-gray-400 my-4"></div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover rounded border border-gray-700"
                width={500}
                height={350}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
