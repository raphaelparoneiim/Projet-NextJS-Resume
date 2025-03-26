"use client";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-24" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-16 text-center">
        About
        <span className="text-orange-400">Me</span>
      </h1>
      <div className="grid grid-cols-8 gap-10 place-items-center px-4">
        <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>
          <div className="flex flex-row p-8">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-6 mt-4">
              <h2 className="text-2xl font-bold text-white/80">Overview</h2>
              <p className="text-lg text-white/70 mt-4">
                👋 Hi, I'm Raphaël Parone, I'm 19 years old, and I'm passionate
                about web development. I love exploring new technologies and
                building innovative projects.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>
          <div className="flex flex-row p-8">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-6 mt-4">
              <h2 className="text-2xl font-bold text-white/80">Qualities</h2>
              <p className="text-lg text-white/70 mt-4">
                Curious, creative and dedicated
              </p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>
          <div className="flex flex-row p-8">
            <Image src={card} alt="card" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-6 mt-4">
              <h2 className="text-2xl font-bold text-white/80">Goal</h2>
              <p className="text-lg text-white/70 mt-4">
                🎯 My goal? Collaborate with inspiring people.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>
          <div className="flex flex-row p-8">
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col ml-6 mt-4">
              <h2 className="text-2xl font-bold text-white/80">Motivation</h2>
              <p className="text-lg text-white/70 mt-4">
                💡 What motivates me? Creating high-performance and aesthetic
                applications, while constantly improving my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
