import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(()=>{
    gsap.fromTo("tech-card",{y:50, opacity:0}, {
      y:0,
      opacity:1,
      duration:1,
      ease: "power2.inOut",
      stagger:0.2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center"
      }
 
    })
  })
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝Here are some of the technologies I enjoy working with and have experience in."
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="relative card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* Animated Background ONLY */}
              <div className="tech-card-animated-bg" />

              {/* Card Content */}
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full text-center">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;