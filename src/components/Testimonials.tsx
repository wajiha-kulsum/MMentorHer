
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ 
  content, 
  author, 
  position, 
  delay 
}: { 
  content: string, 
  author: string, 
  position: string, 
  delay: number 
}) => {
  return (
    <motion.div 
      className="glass-panel p-6 rounded-2xl h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 mb-6">"{content}"</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-mentorship-purple to-mentorship-blue flex items-center justify-center text-white font-bold">
          {author.split(' ').map(word => word[0]).join('')}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "TechMentor connected me with an incredible senior developer who helped me navigate my career transition. The AI matching was spot-on!",
      author: "Sarah Johnson",
      position: "Frontend Developer",
      delay: 0.1
    },
    {
      content: "The scheduling system and video calls made it so easy to connect with my mentor despite our busy schedules and different time zones.",
      author: "Michelle Lee",
      position: "UX Designer",
      delay: 0.2
    },
    {
      content: "The gamification elements kept me motivated, and the career path generator gave me clear steps to reach my goals in data science.",
      author: "Jessica Rahman",
      position: "Data Analyst",
      delay: 0.3
    },
    {
      content: "The community forum introduced me to a network of women in tech who have become both colleagues and friends. Invaluable resource!",
      author: "Priya Sharma",
      position: "Product Manager",
      delay: 0.4
    },
    {
      content: "My mentor helped me prepare for technical interviews, and I landed my dream job at a major tech company within three months!",
      author: "Tanya Wilson",
      position: "Software Engineer",
      delay: 0.5
    },
    {
      content: "The personalized learning path helped me identify and close skill gaps that were holding me back in my cybersecurity career.",
      author: "Emma Garcia",
      position: "Security Specialist",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-br from-mentorship-blue/10 to-transparent rounded-full blur-3xl opacity-60 transform -translate-x-1/3 -translate-y-1/4 -z-10"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <span className="badge">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">Success Stories from <br />Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the women who have transformed their careers through meaningful mentorship connections on our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
