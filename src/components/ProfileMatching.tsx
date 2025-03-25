
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UserSearch, Users, ArrowRight, CheckCircle, Brain, Stars } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Mentor = {
  id: number;
  name: string;
  role: string;
  company: string;
  skills: string[];
  experience: number;
  image: string;
  match: number;
};

const ProfileMatching = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>("");
  const [isMatching, setIsMatching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Engineering Manager",
      company: "Microsoft",
      skills: ["Leadership", "Machine Learning", "Full-stack", "Mentorship"],
      experience: 12,
      image: "https://i.pravatar.cc/150?img=5",
      match: 98
    },
    {
      id: 2,
      name: "Maya Patel",
      role: "Lead Product Designer",
      company: "Airbnb",
      skills: ["UX/UI", "Design Systems", "Research", "Prototyping"],
      experience: 8,
      image: "https://i.pravatar.cc/150?img=45",
      match: 93
    },
    {
      id: 3,
      name: "Jennifer Liu",
      role: "VP of Engineering",
      company: "Spotify",
      skills: ["Leadership", "System Architecture", "Team Building", "AI"],
      experience: 15,
      image: "https://i.pravatar.cc/150?img=9",
      match: 89
    }
  ];

  const handleFindMatch = () => {
    setIsMatching(true);
    setTimeout(() => {
      setIsMatching(false);
      setShowResults(true);
    }, 2000);
  };

  const resetSearch = () => {
    setSelectedSkill("");
    setShowResults(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-mentorship-purple/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-mentorship-pink/10 rounded-full blur-3xl z-0"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <span className="badge">AI Matching</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">Find Your Perfect Mentor Match</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our powerful AI algorithm connects you with mentors who align with your skills, 
            experience level, and career aspirations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            <motion.div 
              className="glass-panel p-8 md:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-semibold mb-4">What skills are you looking to develop?</h3>
                  <div className="space-y-4">
                    <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                      <SelectTrigger className="w-full h-12 bg-white/70 backdrop-blur-sm">
                        <SelectValue placeholder="Select a primary skill" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leadership">Leadership & Management</SelectItem>
                        <SelectItem value="coding">Software Development</SelectItem>
                        <SelectItem value="design">UX/UI Design</SelectItem>
                        <SelectItem value="data">Data Science & AI</SelectItem>
                        <SelectItem value="product">Product Management</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <div className="flex justify-end">
                      <Button 
                        onClick={handleFindMatch} 
                        disabled={!selectedSkill || isMatching}
                        className="rounded-full px-6 py-6 bg-gradient-to-r from-mentorship-purple to-mentorship-blue hover:opacity-90 transition-all"
                      >
                        {isMatching ? (
                          <>
                            <span className="mr-2">Matching</span>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Brain size={18} />
                            </motion.div>
                          </>
                        ) : (
                          <>
                            Find My Mentors
                            <UserSearch size={18} className="ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/3">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: [0.9, 1, 0.9], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-mentorship-purple/20 to-mentorship-blue/20 rounded-full blur-2xl"></div>
                    <Brain size={120} className="mx-auto text-mentorship-purple opacity-80" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Your Top Mentor Matches</h3>
                <Button variant="outline" onClick={resetSearch} className="hover-float">
                  New Search
                </Button>
              </div>
              
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.15 }}
                >
                  <Card className="glass-panel overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/4 p-6 flex justify-center items-center bg-gradient-to-br from-mentorship-purple/10 to-mentorship-blue/10">
                        <div className="relative">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name} 
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/50"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-mentorship-purple to-mentorship-blue text-white text-xs font-bold rounded-full py-1 px-2 flex items-center">
                            <Stars size={12} className="mr-1" />
                            {mentor.match}% Match
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="flex-1 p-6">
                        <CardHeader className="p-0 pb-3">
                          <CardTitle className="text-xl">{mentor.name}</CardTitle>
                          <CardDescription>{mentor.role} at {mentor.company}</CardDescription>
                        </CardHeader>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <CheckCircle size={16} className="text-mentorship-purple mr-2" />
                            <span>{mentor.experience} years of industry experience</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Areas of expertise:</p>
                            <div className="flex flex-wrap gap-2">
                              {mentor.skills.map(skill => (
                                <span 
                                  key={skill} 
                                  className="text-xs py-1 px-3 rounded-full bg-secondary text-secondary-foreground"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="flex-col justify-center items-center p-4 md:w-1/6 bg-gradient-to-br from-mentorship-purple/5 to-mentorship-blue/5">
                        <Button className="w-full rounded-full bg-gradient-to-r from-mentorship-purple to-mentorship-blue hover:opacity-90 hover-float">
                          View Profile
                        </Button>
                        <Button variant="outline" className="w-full mt-2 rounded-full hover-float">
                          Request
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              ))}
              
              <div className="pt-4 flex justify-center">
                <Button variant="outline" className="rounded-full">
                  View All Matches
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileMatching;
