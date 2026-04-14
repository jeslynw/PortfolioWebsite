"use client"
import React, { useState } from "react";
import { FaTools, FaDatabase, FaCode, FaLink, FaRobot } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiCplusplus,
  SiReact, SiNextdotjs, SiFlask, SiFastapi,
  SiTensorflow, SiScikitlearn, SiPandas, SiTailwindcss, SiStreamlit,
  SiDocker, SiGit, SiMysql, SiElasticsearch, SiFigma, SiPostman, SiLinux, SiKibana,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');
  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
  };

  const languageList = [
    { icon: <SiPython    className="w-[25px] h-[25px] self-center text-[#3776ab]" />, item: 'Python' },
    { icon: <SiJavascript className="w-[25px] h-[25px] self-center text-[#f7df1e]" />, item: 'JavaScript' },
    { icon: <FaJava   className="w-[25px] h-[25px] self-center text-[#007396]" />, item: 'Java' },
    { icon: <FaDatabase  className="w-[22px] h-[22px] self-center text-[#336791]" />, item: 'SQL' },
    // { icon: <SiCplusplus className="w-[25px] h-[25px] self-center text-[#00599c]" />, item: 'C++' },
  ];

  const aiWebList = [
    { icon: <SiReact       className="w-[25px] h-[25px] self-center text-[#61dafb]" />, item: 'React' },
    { icon: <SiNextdotjs   className="w-[25px] h-[25px] self-center text-black"     />, item: 'Next.js' },
    { icon: <SiFlask       className="w-[25px] h-[25px] self-center text-black"     />, item: 'Flask' },
    { icon: <SiFastapi     className="w-[25px] h-[25px] self-center text-[#009688]" />, item: 'FastAPI' },
    { icon: <FaLink        className="w-[22px] h-[22px] self-center text-[#1c3c57]" />, item: 'LangChain' },
    { icon: <FaRobot       className="w-[25px] h-[25px] self-center text-[#ff9d00]" />, item: 'HuggingFace' },
    { icon: <SiTensorflow  className="w-[25px] h-[25px] self-center text-[#ff6f00]" />, item: 'TensorFlow' },
    { icon: <SiScikitlearn className="w-[25px] h-[25px] self-center text-[#f7931e]" />, item: 'Scikit-learn' },
    { icon: <SiPandas      className="w-[25px] h-[25px] self-center text-[#150458]" />, item: 'Pandas' },
    { icon: <SiTailwindcss className="w-[25px] h-[25px] self-center text-[#38bdf8]" />, item: 'Tailwind' },
    { icon: <SiStreamlit   className="w-[25px] h-[25px] self-center text-[#ff4b4b]" />, item: 'Streamlit' },
    { icon: <FaDatabase    className="w-[22px] h-[22px] self-center text-[#d71f00]" />, item: 'SQLAlchemy' },
  ];

  const toolList = [
    { icon: <SiDocker        className="w-[25px] h-[25px] self-center text-[#2496ed]" />, item: 'Docker' },
    { icon: <SiGit           className="w-[25px] h-[25px] self-center text-[#f05032]" />, item: 'Git' },
    { icon: <SiMysql         className="w-[25px] h-[25px] self-center text-[#4479a1]" />, item: 'MySQL' },
    { icon: <SiFigma         className="w-[25px] h-[25px] self-center text-[#f24e1e]" />, item: 'Figma' },
    { icon: <SiPostman       className="w-[25px] h-[25px] self-center text-[#ff6c37]" />, item: 'Postman' },
    { icon: <SiLinux         className="w-[25px] h-[25px] self-center text-[#fcc624]" />, item: 'Linux' },
    { icon: <SiElasticsearch className="w-[25px] h-[25px] self-center text-[#005571]" />, item: 'ElasticSearch' },
    { icon: <SiKibana        className="w-[25px] h-[25px] self-center text-[#005571]" />, item: 'Kibana' },
  ];

  const currentList =
    activeTab === 'Languages' ? languageList :
    activeTab === 'AI & Web'  ? aiWebList    :
    toolList;

  return (
    <section id="skills">
      <div className="pt-16 md:pt-20">
        <motion.h1
          className="text-white text-5xl sm:text-5xl 2xl:text-6xl font-alegreya pb-8 md:pb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h1>
        <motion.div
          className="px-5 md:px-14 lg:px-40 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {/* Tab buttons */}
          <div className="flex -mb-px justify-center">
            <div className="me-2">
              <button
                className={`inline-block p-4 border-b-2 text-lg ${
                  activeTab === 'Languages'
                    ? 'border-gray-800 text-black'
                    : 'border-transparent text-gray-500'
                } rounded-t-lg hover:text-gray-800`}
                onClick={(e) => handleTabClick(e, 'Languages')}
              >
                <FaCode className="inline mr-2 w-max h-5" />
                Languages
              </button>
            </div>
            <div className="me-2">
              <button
                className={`inline-block p-4 border-b-2 text-lg ${
                  activeTab === 'AI & Web'
                    ? 'border-gray-800 text-black'
                    : 'border-transparent text-gray-500'
                } rounded-t-lg hover:text-gray-800`}
                onClick={(e) => handleTabClick(e, 'AI & Web')}
              >
                <IoMdSettings className="inline mr-2 w-max h-6" />
                AI &amp; Web
              </button>
            </div>
            <div className="me-2">
              <button
                className={`inline-block p-4 border-b-2 text-lg ${
                  activeTab === 'Tools'
                    ? 'border-gray-800 text-black'
                    : 'border-transparent text-gray-500'
                } rounded-t-lg hover:text-gray-800`}
                onClick={(e) => handleTabClick(e, 'Tools')}
              >
                <FaTools className="inline mr-2 w-max h-5" />
                Tools
              </button>
            </div>
          </div>

          {/* Skill grid */}
          <div className="flex justify-center">
            <div className="grid pt-10 grid-cols-8 md:grid-cols-12 gap-5">
              {currentList.map((skill, index) => (
                <div
                  key={index}
                  className="flex col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-2 rounded-lg bg-white shadow-md h-12"
                >
                  <button className="skill flex p-2">
                    {skill.icon}
                    <p className="flex pl-3 self-center font-noto text-black text-sm">{skill.item}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
