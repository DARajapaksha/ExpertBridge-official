import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Phone, MapPin, MessageCircle, HelpCircle, Briefcase } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-[#1e3a8a] mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-[#1e3a8a] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">First Name *</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last Name *</label>
                    <Input placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="john.smith@email.com" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">I am a... *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="company">Company/Client</SelectItem>
                      <SelectItem value="expert">Expert/Professional</SelectItem>
                      <SelectItem value="mentee">Mentee</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Subject *</label>
                  <Input placeholder="How can we help you?" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Message *</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90" size="lg">
                  Send Message
                </Button>

                <p className="text-xs text-center text-gray-500">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-[#1e3a8a] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Email</p>
                    <a href="mailto:hello@expertbridge.com" className="text-sm text-[#1e3a8a] hover:underline">
                      hello@expertbridge.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-sm text-[#1e3a8a] hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Headquarters</p>
                    <p className="text-sm text-gray-600">
                      123 Market Street, Suite 500<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-[#1e3a8a] mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[#1e3a8a]/5 to-[#0f766e]/5">
              <h3 className="text-[#1e3a8a] mb-4">Quick Links</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0f766e]" />
                  <a href="#" className="text-sm text-gray-700 hover:text-[#1e3a8a]">
                    FAQ & Help Center
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-[#0f766e]" />
                  <a href="#" className="text-sm text-gray-700 hover:text-[#1e3a8a]">
                    Expert Application
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#0f766e]" />
                  <a href="#" className="text-sm text-gray-700 hover:text-[#1e3a8a]">
                    Live Chat Support
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-[#1e3a8a] text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <h3 className="mb-2">How do I get started as an expert?</h3>
              <p className="text-sm text-gray-600">
                Simply create a profile, complete our verification process, and start applying to projects or offering mentorship sessions. The process typically takes 2-3 business days.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">What industries do you cover?</h3>
              <p className="text-sm text-gray-600">
                We cover a wide range of industries including Engineering, Healthcare, Finance, Technology, Education, and more. Our expert network spans over 50 different specialties.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">How are payments handled?</h3>
              <p className="text-sm text-gray-600">
                All payments are processed through our secure escrow system. Funds are released when project milestones are completed and approved by both parties.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">Can I speak to someone directly?</h3>
              <p className="text-sm text-gray-600">
                Yes! You can schedule a call with our team by emailing us or calling during business hours. We also offer live chat support for immediate assistance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">Do you offer enterprise solutions?</h3>
              <p className="text-sm text-gray-600">
                Yes, we offer custom solutions for enterprise clients including dedicated account management, volume discounts, and integration with your existing systems.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">Is there a minimum project size?</h3>
              <p className="text-sm text-gray-600">
                No, we welcome projects of all sizes. Whether you need a quick consultation or a long-term engagement, our platform can accommodate your needs.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
