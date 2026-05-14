import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);
  useGSAP(
    () => {
      // Fade in the whole section on scroll
      const projects = [project1.current, project2.current, project3.current];

      projects.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          },
        );
      });
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
      );
    },
    { scope: sectionRef },
  );
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT SIDE */}
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On demand rides nade simple with a powerfuk,user-frindely App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                Ryde is a cutting-edge ridesharing application designed with
                MERN stack, offering a seamless and efficient transportation
                experience. With a user-friendly interface, Ryde connects
                passengers with nearby drivers, providing real-time ride
                tracking, secure payments, and personalized features for a
                convenient and enjoyable journey. Whether you're commuting or
                exploring the city, Ryde is your go-to solution for reliable and
                hassle-free ridesharing.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management System"
                />
              </div>
              <h2>Library Management System</h2>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory App" />
                <h2>YC Directory App - a startup shpowcase App</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
