import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/headphone.png";
import Image2 from "../assets/macbook.png";
import Image3 from "../assets/vr.png";
import "slick-carousel/slick/slick.css";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "HeadPhone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="relative overflow-hidden min-h-[650px] sm:min-h[650px] bg-gray-200 dark:bg-gray-900 flex justify-center items-center dark:text-white duration-200 rounded-2xl hero-bg-color">
        <div data-aos="zoom-in" className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                  <div className="flex flex-col gap-5">
                    <h1 data-aos="fade-up" className="text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="fade-up"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}{" "}
                    </h1>
                    <h1
                      data-aos="fade-up-left"
                      className="text-5xl sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold text-gray-100 uppercase"
                    >
                      {data.title2}
                    </h1>
                    <div>
                      <button className="bg-primary px-8 py-2 hover:scale-105 duration-300 rounded-full z-10 relative text-white">
                        Shop by category
                      </button>
                    </div>
                  </div>
                  <img
                    src={data.img}
                    className="object-contain z-30 w-[430px] h-[430px] sm:h-[450px] sm:scale-105 lg:scale-110 mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] "
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
