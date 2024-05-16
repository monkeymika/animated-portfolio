import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      animate={window.innerWidth <= 738 ? "animate" : isInView && "animate"}
      ref={ref}
      // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Mon objectif est de booster et d&apos;accompagner
          <br /> l&apos;évolution de votre marque.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#0ab394" }}>Des sites web</motion.b>{" "}
            unique
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#0ab394" }}>pour votre </motion.b>
            marque.
          </h1>
          <button>Discutons ? </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius quas vero aspernatur libero quia culpa ab, necessitatibus
            facere quae praesentium exercitationem temporibus itaque. Magni
            eveniet dolorum sint non. Reiciendis.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius quas vero aspernatur libero quia culpa ab, necessitatibus
            facere quae praesentium exercitationem temporibus itaque. Magni
            eveniet dolorum sint non. Reiciendis.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius quas vero aspernatur libero quia culpa ab, necessitatibus
            facere quae praesentium exercitationem temporibus itaque. Magni
            eveniet dolorum sint non. Reiciendis.
          </p>
          <button>Go</button>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            eius quas vero aspernatur libero quia culpa ab, necessitatibus
            facere quae praesentium exercitationem temporibus itaque. Magni
            eveniet dolorum sint non. Reiciendis.
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
