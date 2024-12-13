import StarRating from './StarRating';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col transform transition-all duration-500 hover:scale-105">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-600 flex-grow italic">{testimonial.content}</p>
      <div className="mt-4">
        <StarRating />
      </div>
    </div>
  );
};

export default TestimonialCard;