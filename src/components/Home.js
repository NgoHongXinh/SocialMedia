import React from 'react';
import { motion } from "framer-motion";
import avatar from "./image/xinh.jpg";

export default function Home() {
  return (

     <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 p-5"
      >
        <div className="w-full md:w-1/3 text-left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-primary-light uppercase"
          >
            Hi, Iam Xinh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.2,
            }}
            className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-200"
          >
            I am a final year student at Ton Duc Thang University majoring in computer networking and data communication. With the spirit of learning and hard work, I always want to experience and gain more practical knowledge about Front-end developer through an intern position.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center sm:block"
          >
            <a
              download="CV.pdf"
              href="/files/CV.pdf"
              className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download Resume"
            >
              {/* <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle> */}
              <span className="text-sm sm:text-lg font-general-medium duration-100">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="h-auto max-w-lg ml-auto sm:w-2/3 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30  mt-8 sm:mt-0"
        >
          <img src={avatar} alt='avatar'/>
          {/* <img
            src={
              activeTheme === 'dark' ? developerLight : developerDark
            }
            alt="Developer"
          /> */}
        </motion.div>
      </motion.section>

  )
}
