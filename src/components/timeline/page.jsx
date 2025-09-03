"use client";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/timeline/time.module.css";

const Home = ({ loadUSP }) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      const canvas = canvasRef.current;
      const originalWidth = 1632;
      const originalHeight = 918;
      const aspectRatio = originalWidth / originalHeight;

      const availableWidth = window.innerWidth;
      const availableHeight = window.innerHeight;
      const heightByWidth = availableWidth / aspectRatio;

      if (availableWidth < 200) {
        canvas.width = originalWidth / 2; // Adjust canvas width for mobile screens
        canvas.height = originalHeight / 2;
        canvas.style.width = "1301px"; // Set canvas width to 1301px width to be given according screen Sizes
        canvas.style.height = "100vh"; // Set canvas height to window height or any height specified
      } else {
        canvas.width = originalWidth;
        canvas.height = originalHeight;
        canvas.style.width = "100%"; // Set canvas width to 100% of container
        canvas.style.height = "100vh"; // this will  Allow canvas to maintain aspect ratio
      }
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    const frameCount = 483;

    const currentFrame = (index) =>
      `https://plywoodassets.royaletouche.com/assets/newframes/usp/F${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.webp`;
    // let imgL = [];
    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      // imgL.push(img.src);
    }
    // const loadImages = async () => {
    //   try {

    //     const loadImagePromises = imgL.map((imageUrl) => {
    //       return new Promise((resolve) => {
    //         const img = new Image();
    //         img.src = imageUrl;
    //         img.onload = () => resolve();
    //       });
    //     });

    //     await Promise.all(loadImagePromises);
    //     // for (let i = 0; i < 100; i++) console.log(i);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error loading images:", error);
    //     // Handle error loading images
    //   }
    // };
    // loadImages();
    // console.log(imgL);
    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          end: "+=350%",
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      });

    imagesRef.current[0].onload = render;

    // function render() {
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    //   context.drawImage(
    //     imagesRef.current[airpodsRef.current.frame],
    //     0,
    //     0,
    //     canvas.width,
    //     canvas.height
    //   );
    // }

    function render() {
      const frame = imagesRef.current[airpodsRef.current.frame];
      const canvasWidth = canvasRef.current.width;
      const canvasHeight = canvasRef.current.height;

      const frameWidth = 450; // Original width of your frames
      const frameHeight = (frame.height * frameWidth) / frame.width; // Maintain aspect ratio

      const xOffset = (canvasWidth - frameWidth) / 2;
      const yOffset = (canvasHeight - frameHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(frame, xOffset, yOffset, frameWidth, frameHeight);
    }

    // Cleanup
    return () => {
      // window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // console.log(loading ? "USP Loading" : "USP Complate");
  // console.log(loadUSP(loading));

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 50%",
        end: "bottom 40%",
        markers: "true",
      },
      opacity: 1,
      color: "#000",
      ease: "none",
      stagger: 0.9,
    });
  };

  return (
    <div className={styles.display1}>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
          <div className={styles.timeline_animation_text}>Our Expertise</div>
          <div className={styles.timeline_animation_text_One}>
            <p>Crafting Aluminium. Elevating Enterprises.</p>
          </div>
          <div className={styles.timeline} ref={container}>
            {/* <div className={styles.line}></div> */}
            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>01</p> */}
                <h2 className={styles.twoo}>General Engineering</h2>
                <p className={styles.contentInner}>
                  Forging the Backbone of Industry
                </p>
                <p className={styles.timeline_sec_comment}>
                  Our aluminium extrusion empower precision and resilience in a
                  range of engineering applications. From robust framework to
                  intricate machine components, we deliver tailored solutions
                  that ensure strength, reliability, and efficiency in every
                  project, helping our B2B partners innovate with confidence.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>02</p> */}
                <h2 className={styles.twoo}>Renewables</h2>
                <p className={styles.contentInner}>
                  Advancing a Greener Tomorrow
                </p>
                <p className={styles.timeline_sec_comment}>
                  Our extrusions are engineered for the renewable energy sector,
                  providing lightweight yet durable solutions for solar modules,
                  wind power structures, and more. We fuel the transition to
                  sustainable power, supporting clients who are building a
                  cleaner, more efficient future.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>03</p> */}
                <h2 className={styles.twoo}>Architecture</h2>
                <p className={styles.contentInner}>Shaping Iconic Skylines</p>
                <p className={styles.timeline_sec_comment}>
                  We collaborate with visionary architects and builders to bring
                  modern structures to life. Our customizable aluminium profiles
                  enable sleek facades, striking interiors, and enduring
                  exteriors, blending form and function for landmark buildings
                  that redefine the spaces they occupy.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              {/* <div className={styles.bead}></div> */}
              <div className={`${styles.contentX} triggered-element`}>
                {/* <p className={styles.timeline_number}>04</p> */}
                <h2 className={styles.twoo}>Furniture</h2>
                <p className={styles.contentInner}>Design Meets Durability</p>
                <p className={styles.timeline_sec_comment}>
                  With a commitment to aesthetics and endurance, our aluminium
                  profiles help furniture makers create distinctive products.
                  From minimalist designs to ergonomic innovations, we provide
                  the components that bring versatility, style, and lasting
                  quality into commercial and workspace environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.canvas_side_outer}>
          <section className={styles.sectionX} ref={sectionRef}>
            <canvas className={styles.canvas_layer} ref={canvasRef}></canvas>
          </section>
        </div>
      </div>
      <div className={styles.OuterTimelineContent}>
        <p>
          From robust standard sections to complex custom profiles, our advanced
          facility near Ahmedabad delivers reliability across every extrusion.
          We partner with top architects, OEMs, infrastructure developers, and
          manufacturers with tailored solutions for
        </p>
      </div>
    </div>
  );
};

export default Home;
