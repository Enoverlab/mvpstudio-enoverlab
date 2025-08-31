import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase'; // adjust path if needed

const categories = [
  "AgricTech", "HealthTech", "FinTech", "EdTech", "FoodTech", "E-Commerce", "AI", "Hospitality", "Events"
];
const tabs = ["All Projects", "Web App", "Mobile App"];

const Mvpstudiocatalog = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("All Projects");
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Get initial category from query string, sessionStorage, or default
  const sessionCategory = sessionStorage.getItem("catalogCategory");
  const initialCategory = params.get('category') || sessionCategory || categories[0];
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const navigate = useNavigate();

  // Real-time fetch from Firestore
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects"), (snapshot) => {
      const arr = [];
      snapshot.forEach(doc => arr.push({ id: doc.id, ...doc.data() }));
      // Sort by createdAt descending
      arr.sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return b.createdAt.seconds - a.createdAt.seconds;
      });
      setProjects(arr);
    });
    return unsub;
  }, []);

  // Restore scroll position after projects are loaded
  useEffect(() => {
    if (projects.length > 0) {
      const savedScroll = sessionStorage.getItem("catalogScroll");
      if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll, 10));
        sessionStorage.removeItem("catalogScroll");
      }
    }
  }, [projects]);

  // Restore active category on mount (keep this separate)
  useEffect(() => {
    const savedCategory = sessionStorage.getItem("catalogCategory");
    if (savedCategory && categories.includes(savedCategory)) {
      setActiveCategory(savedCategory);
    }
  }, []);

  // Update URL query string when activeCategory changes
  useEffect(() => {
  const params = new URLSearchParams(location.search);
  if (params.get('category') !== activeCategory) {
    params.set('category', activeCategory);
    navigate({ search: params.toString() }, { replace: true });
  }
  sessionStorage.setItem("catalogCategory", activeCategory);
  // eslint-disable-next-line
}, [activeCategory]);

  // Always prioritize query string for category when it changes
  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const queryCategory = params.get('category');
  if (queryCategory && categories.includes(queryCategory) && queryCategory !== activeCategory) {
    setActiveCategory(queryCategory);
  }
  // eslint-disable-next-line
}, [location.search]);

  // Updated filtering logic
  const filteredProjects = projects.filter((proj) => {
    const categoryMatch = proj.category === activeCategory;
    if (activeTab === "All Projects") {
      return categoryMatch;
    }
    return categoryMatch && proj.tab === activeTab;
  });

  return (
    <section className="w-full min-h-screen px-2 pt-8 flex flex-col items-center mb-20">
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
                key={project.id}
                className='rounded-[24px] p-6 md:p-10 flex flex-col md:flex-row items-center shadow-md bg-gradient-to-r from-[#FFEDEE] to-[#F2EAFF]'
              >
                {/* Left */}
                <div className="flex-1 flex flex-col justify-center items-start mb-6 md:mb-0 md:mr-8">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">{project.title && project.title + " ready for customization"}</h3>
                  <p className="text-sm md:text-base mb-6 text-[#222]"> {project.desc && project.desc.length > 150 ? project.desc.slice(0, 150) + "..." : project.desc} </p>
                  {/* Truncate description to 150 characters */}
                  <button
                    className="bg-[#2563eb] text-white px-6 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-[#1051FF] transition"
                    onClick={() => {
                      // Save scroll and category before navigating
                      sessionStorage.setItem("catalogScroll", window.scrollY);
                      sessionStorage.setItem("catalogCategory", activeCategory);
                      navigate(`/project/${activeTab}/${activeCategory}/${project.id}?category=${activeCategory}`);
                    }}
                  >
                    Explore <span>&#8594;</span>
                  </button>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={project.img}
                    alt="Project"
                    className="rounded-xl w-full max-w-[400px] max-h-[200px] h-auto object-cover shadow"
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