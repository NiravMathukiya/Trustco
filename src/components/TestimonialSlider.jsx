import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO, TechCorp",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      content: "This product has completely transformed our workflow. The efficiency gains are remarkable, and the support team is outstanding."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      content: "I'm impressed with the intuitive design and powerful features. It's exactly what we needed to scale our operations."
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Product Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      content: "The platform's flexibility and ease of use have made it an essential tool for our team's daily operations."
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Design Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
      content: "Outstanding user experience and beautiful design. It's rare to find a product that excels in both form and function."
    },
    {
      id: 5,
      name: "David Wilson",
      role: "CTO, StartupX",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
      content: "The integration capabilities are fantastic. We've seen a significant boost in productivity since implementing this solution."
    }
  ];

const TestimonialSlider = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;