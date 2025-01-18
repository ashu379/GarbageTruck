import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      author: "John Doe",
      rating: 4,
      image: "/images/testimonials-1.jpg", // Add the path to the image
    },
    {
      text: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      author: "Jane Smith",
      rating: 5,
      image: "/images/testimonials-2.jpg", // Add the path to the image
    },
    {
      text: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      author: "Michael Brown",
      rating: 3,
      image: "/images/testimonials-3.jpg", // Add the path to the image
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`} >★</span>
    ));
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-image-container">
        <img 
          className="testimonial-image" 
          src={testimonials[currentTestimonial].image} 
          alt={testimonials[currentTestimonial].author} 
        />
      </div>
      <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
      <div className="testimonial-author">
      <div className="testimonial-rating">
          {renderStars(testimonials[currentTestimonial].rating)}
        </div>
        <p>- {testimonials[currentTestimonial].author}</p>
        
      </div>
    </div>
  );
};

export default TestimonialSlider;
