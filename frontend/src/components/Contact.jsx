import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { socialLinks } from '../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    // Message length validation
    if (formData.message.length < 10) {
      toast({
        title: 'Error',
        description: 'Message must be at least 10 characters long',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: 'Success!',
          description: 'Your message has been sent successfully. I will get back to you soon!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: 'Error',
        description: error.response?.data?.detail || 'Failed to send message. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F14]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] mb-4 text-center">
            Get In <span className="text-[#38FF62]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#38FF62] mx-auto mb-4"></div>
          <p className="text-[#9CA3AF] text-center mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center gap-3 bg-[#111827] border border-[#1F2937] rounded-lg p-4 hover:border-[#38FF62] transition-all duration-300"
            >
              <div className="bg-[#38FF62]/10 p-2 rounded-lg">
                <Mail className="text-[#38FF62]" size={18} />
              </div>
              <span className="text-[#E5E7EB] text-sm break-all">{socialLinks.email}</span>
            </a>
            <a
              href={`tel:${socialLinks.phone}`}
              className="flex items-center gap-3 bg-[#111827] border border-[#1F2937] rounded-lg p-4 hover:border-[#38FF62] transition-all duration-300"
            >
              <div className="bg-[#38FF62]/10 p-2 rounded-lg">
                <Phone className="text-[#38FF62]" size={18} />
              </div>
              <span className="text-[#E5E7EB] text-sm">{socialLinks.phone}</span>
            </a>
            <div className="flex items-center gap-3 bg-[#111827] border border-[#1F2937] rounded-lg p-4">
              <div className="bg-[#38FF62]/10 p-2 rounded-lg">
                <MapPin className="text-[#38FF62]" size={18} />
              </div>
              <span className="text-[#E5E7EB] text-sm">{socialLinks.location}</span>
            </div>
          </div>
          
          <Card className="bg-[#111827] border-[#1F2937]">
            <CardHeader>
              <CardTitle className="text-[#E5E7EB] text-2xl flex items-center gap-2">
                <Mail className="text-[#38FF62]" size={24} />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#E5E7EB]">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[#0B0F14] border-[#1F2937] text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#38FF62]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#E5E7EB]">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-[#0B0F14] border-[#1F2937] text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#38FF62]"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#E5E7EB]">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-[#0B0F14] border-[#1F2937] text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#38FF62]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#E5E7EB]">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-[#0B0F14] border-[#1F2937] text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#38FF62] resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#38FF62] text-[#0B0F14] hover:bg-[#2AE052] py-6 text-lg font-medium"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
