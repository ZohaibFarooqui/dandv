import React from 'react';

const Testimonials = () => {
    // Static testimonials data
    const testimonials = [
        
        {
            id: 2,
            name: 'Sheikh Ahmed Badawi',
            feedback: 'A truly professional team. Highly recommended!',
            rating: 4,
        },
        {
            id: 3,
            name: 'Kashif Khan',
            feedback: 'Their attention to detail and commitment to quality is remarkable.',
            rating: 5,
        },
        {
            id: 4,
            name: 'Ken Gutierrez',
            feedback: 'Great experience! The project was completed on time and with precision.',
            rating: 5,
        },
    ];

    const renderStars = (rating) => {
        const totalStars = 5;
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= rating ? 'filled' : 'empty'}`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="testimonials-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <h3>{testimonial.name}</h3>
                        <p className="feedback">"{testimonial.feedback}"</p>
                        <div className="rating">{renderStars(testimonial.rating)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
