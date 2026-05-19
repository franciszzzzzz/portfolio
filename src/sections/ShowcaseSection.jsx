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
              <img src="/images/project1.png" alt="Frost" />
            </div>
            <div className="text-content">
              <h2>
                A modern eCommerce experience made simple with a powerful,
                user-friendly platform called Frost
              </h2>
              <p className="text-white-50 md:text-xl">
                Frost is a cutting-edge eCommerce web application built with
                React and Node.js, designed to deliver a fast, scalable, and
                seamless shopping experience. It features a modern UI, secure
                JWT authentication, and integrated payment processing with
                Paystack for smooth transactions. With Redis-powered caching for
                high performance, Cloudinary for optimized media storage and
                asset delivery, and a custom-built email service for user
                notifications, Frost ensures reliability and speed at every
                level. Whether you're browsing products, managing orders, or
                completing purchases, Frost provides a secure, responsive, and
                intuitive shopping experience built for modern users.
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
              <h2>
                {" "}
                A real-time chat experience made simple with a fast, secure
                messaging platform built for modern communication
              </h2>
              <p className="text-white-50 md:text-xl">
                A real-time chat application built with React and Node.js,
                powered by WebSockets for instant messaging.
              </p>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory App" />
                <h2>
                  A modern, responsive university website designed to deliver a
                  smooth and engaging user experience for students and visitors
                </h2>
                <p className="text-white-50 md:text-xl">
                  This project is a fully responsive university website built
                  with React and modern UI principles. It provides a clean,
                  user-friendly experience for exploring programs, campus life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
