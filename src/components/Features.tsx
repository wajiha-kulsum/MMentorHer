
import React from 'react';
import { Calendar, Stars, Activity, Video, MessageSquare, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  color,
  delay
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  color: string,
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
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${color} mb-5`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: "AI-Powered Profile Matching",
      description: "Our advanced algorithm connects mentees with the perfect mentors based on skills, experience, and career goals.",
      color: "bg-gradient-to-br from-mentorship-purple to-mentorship-blue",
      delay: 0.1
    },
    {
      icon: Calendar,
      title: "Smart Scheduling System",
      description: "Seamlessly book sessions with your mentor based on their availability, with Google Calendar integration and automated reminders.",
      color: "bg-gradient-to-br from-mentorship-blue to-mentorship-purple",
      delay: 0.2
    },
    {
      icon: Video,
      title: "WebRTC Video & Voice Calls",
      description: "Connect with your mentor through our built-in, real-time communication system — no third-party apps required.",
      color: "bg-gradient-to-br from-mentorship-purple/90 to-mentorship-pink",
      delay: 0.3
    },
    {
      icon: Stars,
      title: "Gamified Learning Experience",
      description: "Earn badges, unlock achievements, and track your progress on personalized leaderboards designed to boost engagement.",
      color: "bg-gradient-to-br from-mentorship-pink to-mentorship-purple/90",
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: "AI-Driven Career Path Generator",
      description: "Receive personalized learning paths and skill recommendations based on your current abilities and career aspirations.",
      color: "bg-gradient-to-br from-mentorship-purple/80 to-mentorship-blue/90",
      delay: 0.5
    },
    {
      icon: MessageSquare,
      title: "Community & Q&A Forum",
      description: "Join our interactive space for discussions, peer learning, and direct participation from expert mentors in the tech industry.",
      color: "bg-gradient-to-br from-mentorship-blue/90 to-mentorship-purple/80",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-full h-full bg-gradient-to-bl from-mentorship-pink/10 to-transparent rounded-full blur-3xl opacity-60 transform translate-x-1/3 -translate-y-1/4 -z-10"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <span className="badge">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">Empowering Features for <br />Women in Tech</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with thoughtful design to create meaningful mentorship experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
