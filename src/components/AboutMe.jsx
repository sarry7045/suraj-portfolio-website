import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Helmet from "react-helmet";
import pdf from "../PDF/SurajYadav.pdf";
import Typewriter from "typewriter-effect";
import Zoom from "react-reveal/Zoom";
// import { motion } from "framer-motion";

const AboutMe = () => {
  const [state] = React.useState({
    title: "Suraj Anil Yadav",
    text: "Frontend Developer with 2+ Years of Professional Experience in User Interface Development with hands on Experience in JavaScript, React, TypeScript, Redux etc.",
    textt: "Also Learning: React Native, NodeJs",
    image: "/images/Avatar.png",
  });

  return (
    <>
      <Helmet>
        <title>Suraj Yadav | Software Development | SEO Expert</title>

        <meta
          name="description"
          content="I am an Innovative Front-End Developer with multiple Years of Experience in Web Development, Software Development and SEO."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <header className="">
        <div className="AboutMeBackground">
          <div className="container">
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="row"
            > */}
            <Zoom>
              <div className="row">
                <div className="col-6">
                  <div className="header__content">
                    <div className="header__section">
                      <ul className="header__ul">
                        <a
                          href="https://www.linkedin.com/in/suraj-yadav-01752b222/"
                          target="_blank"
                          rel="noreferrer"
                          title="LinkedIn"
                        >
                          <li>
                            <FaLinkedinIn
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://github.com/sarry7045"
                          target="_blank"
                          rel="noreferrer"
                          title="GitHub"
                        >
                          <li>
                            <FaGithub
                              className="headerIconGit"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://www.instagram.com/suraj.28_11/"
                          target="_blank"
                          rel="noreferrer"
                          title="Instagram"
                        >
                          {" "}
                          <li>
                            <FaInstagram
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100010635822203"
                          target="_blank"
                          rel="noreferrer"
                          title="Facebook"
                        >
                          {" "}
                          <li>
                            <FaFacebookF
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>

                        <a href="mailto: sarry7045@gmail.com" title="Mail">
                          {" "}
                          <li>
                            <AiFillMail
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                      </ul>

                      <h1>
                        <Typewriter
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("Suraj Yadav")
                              .pauseFor(500)
                              .deleteAll()
                              .typeString("Frontend Developer")
                              .pauseFor(500)
                              .start()
                              .deleteAll()
                              .typeString("Suraj Yadav");
                          }}
                        />
                      </h1>
                      <p>{state.text}</p>
                      <p style={{ paddingBottom: "20px" }}>{state.textt}</p>
                      {/* <motion.div
                      whileHover={{
                        scale: 1.1,
                        originX: 0,
                      }}
                      transition={{ type: "spring", stiffness: 1000 }}
                      className="header_buttons"
                    > */}
                      <div className="header_buttons">
                        <a
                          href={pdf}
                          className="btn btn-outline"
                          target="_blank"
                          rel="noreferrer"
                          title="Resume"
                        >
                          Download Resume
                        </a>
                        {/* </motion.div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="banner__img">
                    <img src={state.image} alt="man" loading="lazy" />
                  </div>
                </div>
                {/* </motion.div> */}
              </div>
            </Zoom>
          </div>
        </div>
      </header>
    </>
  );
};

export default AboutMe;
