import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from './projectsData'; 
import { categories, tabs } from './projectsData'; 


const Mvpstudiocatalog = () => {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const navigate = useNavigate(); // Add this line

  // Filter projects by category for the active tab
  const filteredProjects = projectsData[activeTab].filter(
    (proj) => proj.category === activeCategory
  );

  return (
    <section className="w-full min-h-screen bg-white px-2 py-8 flex flex-col items-center">
      {/* Tabs */}
      <div className="flex gap-2 mb-4 bg-[#f7fafd] px-5 py-2 rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-medium text-[10px] sm:text-sm md:text-base transition ${
              activeTab === tab
                ? "bg-[#222] text-white shadow"
                : "bg-[#f7fafd] text-[#222] hover:bg-[#ececec]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Categories */}
      <div className="max-lg:w-full flex flex-row gap-3 sm:gap-4 md:gap-5 mb-6 border-b border-[#c9bbbb] max-lg:overflow-x-scroll scrollbar-thin">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 text-xs md:text-sm whitespace-pre ${
              activeCategory === cat
                ? "text-[#222] border-b border-[#222]"
                : "text-[#8a8484] hover:text-[#222]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Project Cards */}
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-8 w-full px-5 md:px-15 lg:px-20 xl:px-25">
          {filteredProjects.length === 0 ? (
            <div className="text-center text-gray-400 py-10">No projects available for this category.</div>
          ) : (
            filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`rounded-[24px] p-6 md:p-10 flex flex-col md:flex-row items-center ${project.bg} shadow-md`}
              >
                {/* Left */}
                <div className="flex-1 flex flex-col justify-center items-start mb-6 md:mb-0 md:mr-8">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base mb-6 text-[#222]">{project.desc}</p>
                  <button
                    className="bg-[#2563eb] text-white px-6 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#1051FF] transition"
                    onClick={() => navigate(`/project/${activeTab}/${activeCategory}/${idx}`)}
                  >
                    Explore <span>&#8594;</span>
                  </button>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={project.img}
                    alt="Project"
                    className="rounded-xl w-full max-w-[400px] h-auto object-cover shadow"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Mvpstudiocatalog;