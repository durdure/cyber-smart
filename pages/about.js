import { useState } from 'react';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Footer from './Footer';

export default function About() {
  const values = [
    { text: "Integrity", image: "https://i.pinimg.com/564x/bc/ed/07/bced075dd9a8a25a025e598bb8e8c3a8.jpg" }, 
    { text: "Community Engagement", image: "https://i.pinimg.com/564x/bc/ed/07/bced075dd9a8a25a025e598bb8e8c3a8.jpg" }, 
    { text: "Continuous Learning", image: "https://i.pinimg.com/564x/bc/ed/07/bced075dd9a8a25a025e598bb8e8c3a8.jpg" },
    { text: "Inclusivity", image: "https://i.pinimg.com/564x/bc/ed/07/bced075dd9a8a25a025e598bb8e8c3a8.jpg" }, 
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div> 
         <Navbar />     
      <section className="about bg-gray-800 text-white py-20 w-full"> 
       
        <div className="container mx-auto text-center">
           
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4 text-gray-300">
            We are committed to empowering individuals through digital literacy and online safety.
          </p>
          <p className="text-lg mb-12 text-gray-300">
            Our mission is to create a safer and more informed online community.
          </p>
          
          <div className="mb-10">
            <Slider {...settings}>
              {values.map((value, index) => (
                <div key={index}>
                  <img 
                    src={value.image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: '200px' }}
                    className="mx-auto w-full max-w-md rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <h3 className="text-3xl font-semibold mb-4">{values[currentSlide].text}</h3>
        </div>
      </section>
        <Footer/>
    </div>
  );
}
