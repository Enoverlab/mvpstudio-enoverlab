import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from'swiper/modules'; 
import { useParams, Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Footer from '../Footer';
import Navbar from '../Navbar';

const ProjectDetails = () => {
  const { tab, category, idx } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects"), (snapshot) => {
      const arr = [];
      snapshot.forEach(doc => arr.push({ id: doc.id, ...doc.data() }));
      setProjects(arr);
      setLoading(false);
    });
    return unsub;
  }, []);

  // Filter by tab and category
  const filteredProjects = projects.filter(
  (proj) =>
    (tab === "All Projects" ? true : proj.tab === tab) &&
    proj.category === category
);
  const project = filteredProjects[idx];

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!project) return <div className="min-h-screen flex items-center justify-center text-gray-500">Project not found.</div>;

  return (
    <>
      <Navbar/>
      <section className="w-full mt-[60px] min-h-screen bg-[#f7fafd] px-2 py-8 flex flex-col items-center">
        {/* Project Main Section */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-10 md:p-5">
          {/* Image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5 md:gap-8">
            <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay]}
        className="pt-0 mt-0 my-auto"
        id='mySwiper'
      >
        <SwiperSlide>
          <img src={project.img}
          alt={project.title} className='object-contain max-h-[200px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project.img1}
          alt={project.title} className='object-contain max-h-[200px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project.img2}
          alt={project.title} className='object-contain max-h-[200px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project.img3}
          alt={project.title} className='object-contain max-h-[200px]'/>
        </SwiperSlide>          
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[ Thumbs]}
        className="mySwiper pt-0 mt-0 py-0"
        id='mySwiper2'
      >
        <SwiperSlide>
          <img src={project.img}
          alt=''  className='h-[50px] bg-gray-300 object-fit object-center w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project.img1}
          alt='' className='h-[50px] bg-gray-200 object-fit object-center w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project.img2}
          alt='' className='h-[50px] bg-gray-100 object-fit object-center w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project.img3}
          alt='' className='h-[50px] bg-gray-50 object-fit object-center w-full'/>
        </SwiperSlide>
      </Swiper>
          </div>
          {/* Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start max-md:text-center">
            <h2 className="font-semibold text-xl md:text-2xl mb-2 capitalize">{project.title}</h2>
            <p className="text-sm md:text-base mb-6 text-[#222]">{project.desc}</p>
            <a href={project.explorelink} target='_blank' rel="noopener noreferrer" className='w-full'>
              <button className="bg-[#2563eb] text-white px-6 py-2 md:py-3 rounded-lg w-full font-medium text-sm hover:bg-[#1051FF] transition mb-4">
                Explore
              </button>
            </a>
          </div>
        </div>
        {/* Experts Section */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className='flex flex-row bg-[#1051FF] justify-center items-center w-[169px] h-[31px] text-white text-sm md:text-base leading-6 rounded-2xl mb-1'>
            <img src='/whychoose.png' className='w-4 mr-2 h-[19px] leading-1.5' alt="icon" />
            Meet The Team
          </div>
          <h3 className="text-center font-semibold text-lg md:text-2xl">Meet the Experts Behind The Project</h3>
          <p className="text-center text-sm text-[#595C63] mb-6">
            Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
          </p>
          {/* Experts Cards */}
          {project.experts && project.experts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 w-full mb-8">
              {project.experts.map((expert, i) => (
                <div
                  key={i}
                  className='rounded-2xl w-full sm:w-[250px] md:w-[180px] lg:w-[250px] mx-auto h-50'
                  style={{
                    backgroundImage: `url(${expert.expertimg})`,
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                  <div className='bg-white flex flex-row w-full lg:w-[90%] lg:left-[5%] p-1 md:p-2 absolute bottom-2 gap-2'>
                    <div className='w-[60%] flex flex-col gap-3 text-[9px] lg:text-[10px] whitespace-pre'>
                      <p>{expert.expertfirstname} <span>{expert.expertsecondname}</span></p>
                      <p>{expert.role}</p>
                    </div>
                    <div className='w-[40%] flex flex-col gap-2'>
                      <div className='flex flex-row gap-2 justify-center items-center'>
                        <FaInstagram/>
                        <FaFacebook/>
                        <FaWhatsapp/>
                      </div>
                      <Link to='/talentsform'><button className="text-[7px] lg:text-[8px] text-[#1051FF] w-[100%] bg-[#DFDFEE] rounded-lg py-0.5 md:py-1 lg:py-2 hover:text-white hover:bg-[#1051FF] flex justify-center items-center whitespace-pre">
                        Hire <span>{expert.expertfirstname}</span>
                      </button></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <Link to='/mvpstudio'>
            <button className="bg-[#2563eb] text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-[#1051FF] transition mb-4">
              See All &rarr;
            </button>
          </Link>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default ProjectDetails;