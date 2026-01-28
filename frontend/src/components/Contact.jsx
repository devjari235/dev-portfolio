import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';


// ✅ ADDED / FIXED (DO NOT REMOVE)
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL;
// ✅ END FIX


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

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

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
      // ✅ FIXED API CALL (NO TRAILING SLASH, CORRECT ROUTE)
      const response = await axios.post(
        `${API}/api/contact`,
        formData
      );

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
          <p className="text-[#9CA3AF] text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

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
                    <Label htmlFor="name" className="text-[#E5E7EB]">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#E5E7EB]">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#E5E7EB]">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#E5E7EB]">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : <> <Send size={18} /> Send Message </>}
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
