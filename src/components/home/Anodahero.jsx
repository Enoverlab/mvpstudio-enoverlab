const marquee1 = [
  '/firstverticalimage1.png', // Replace with actual filenames from your context
  '/firstverticalimage2.png',
  '/firstverticalimage3.png',
  '/firstverticalimage1.png',
];
const marquee2 = [
  '/secondverticalimage1.png',
  '/secondverticalimage2.png',
  '/secondverticalimage3.png',
  '/secondverticalimage1.png',
];
const brands = [
  '/digitalocean.png',
  '/brex.png',
  '/bubble.png',
  '/hubspot.png',
  '/google.png',
  '/gemini.png',
  '/godaddy.png',
  '/spotify.png',
];

const Anodahero = () => {
  return (
    <section className="w-full min-h-screen h-[100vh] flex flex-col md:flex-row bg-gradient-to-b from-[#F6F8FF] to-[#E6F0FF] relative overflow-hidden">
      {/* Left: Text & Buttons */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 md:px-16 py-10 z-10">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-[#FFA500] text-lg">★</span>
          <span className="text-[#121212] text-sm font-medium">
            4.9/5 (Base on 10000+ happy users)
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-[#121212] mb-4 leading-tight">
          Enoverlab Make Sure<br />
          You Never Start From <span className="text-[#1051FF]">Scratch</span>
        </h1>
        <p className="text-[#595C63] text-base md:text-lg mb-8 max-w-xl">
          We Empower startups, SMEs, and organization by offering ready to use and customizable MVPs That helps business scale their ideas without the typical hurdles of Cost and Time.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-2 border border-[#1051FF] rounded-lg text-[#121212] font-medium bg-white hover:bg-[#F3F3FF] transition">
            Explore an MVP
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#1051FF] text-white font-medium hover:bg-[#0039b7] transition">
            Hire Talents
          </button>
        </div>
      </div>

      {/* Right: Marquees */}
      <div className="flex-1 relative flex flex-col justify-center items-center overflow-hidden min-h-[400px]">
        {/* Upwards Marquee */}
        <div className="absolute left-0 top-0 w-1/2 md:w-2/3 h-full flex flex-col items-center pointer-events-none">
          <div className="marquee-vertical-up w-full h-full flex flex-col gap-6 animate-marquee-up">
            {marquee1.concat(marquee1).map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg w-[305px] h-[120px] md:w-[305px] md:h-[340px] bg-white flex items-center justify-center">
                <img src={img} alt="" className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
        {/* Downwards Marquee */}
        <div className="absolute right-0 top-0 w-1/2 md:w-2/3 h-full flex flex-col items-center pointer-events-none">
          <div className="marquee-vertical-down w-full h-full flex flex-col gap-6 animate-marquee-down">
            {marquee2.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg w-[120px] h-[120px] md:w-[305px] md:h-[340px] bg-white flex items-center justify-center">
                <img src={img} alt="" className="object-cover w-[305px] h-[340px]" />
              </div>
            ))}
          </div>
        </div>
        {/* Horizontal Brand Marquee */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90vw] md:w-[70vw] overflow-hidden pointer-events-none">
          <div className="flex items-center gap-10 animate-marquee-horizontal">
            {brands.concat(brands).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-8 md:h-10 w-auto grayscale opacity-80"
                style={{ minWidth: 90 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          to {
          bottom: -305px;}
        }
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-up {
          animation: marquee-up 12s linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-down 12s linear infinite;
        }
        .animate-marquee-horizontal {
          animation: marquee-horizontal 18s linear infinite;
        }
        @media (max-width: 768px) {
          .marquee-vertical-up > div,
          .marquee-vertical-down > div {
            width: 80px !important;
            height: 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Anodahero;