import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const response = await axios.get('/api/testimonials');
            setTestimonials(response.data);
        };
        fetchTestimonials();
    }, []);

    return (
        <div className="testimonials-background">
            <h2>Client Testimonials</h2>
            <ul>
                {testimonials.map(testimonial => (
                    <li key={testimonial.id}>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.feedback}</p>
                        <p>Rating: {testimonial.rating} / 5</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonials;
