import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  Users,
  CheckCircle2,
  Award,
  HeartHandshake,
  Briefcase,
  Clock,
  Shield
} from 'lucide-react';

export function ForExperts() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f766e] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white mb-6">
                Your Experience is Valuable. Share It.
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Turn your decades of expertise into meaningful work. Help companies solve complex challenges, mentor the next generation, and earn on your own terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-[#0f766e] hover:bg-gray-100 w-full sm:w-auto">
                    Create Your Profile
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl mb-1">$150+</div>
                  <div className="text-sm text-gray-200">Average Hourly Rate</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">95%</div>
                  <div className="text-sm text-gray-200">Expert Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">20+</div>
                  <div className="text-sm text-gray-200">Hours/Week Average</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmllbmNlZCUyMHByb2Zlc3Npb25hbCUyMG1lbnRvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2MzM5MTY0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional mentor"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] mb-4">Why Join ExpertBridge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monetize your skills, set your own schedule, and make a meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-[#0f766e] transition-colors">
              <Calendar className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Work on Your Terms</h3>
              <p className="text-gray-600 mb-4">
                Choose projects that interest you. Set your own rates and schedule. Work from anywhere. You're in complete control.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Flexible schedule</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Set your own rates</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Work remotely</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#0f766e] transition-colors">
              <DollarSign className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Earn What You Deserve</h3>
              <p className="text-gray-600 mb-4">
                Simple monthly subscription to access unlimited opportunities. Keep 100% of your project earnings. Get paid securely.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Competitive rates</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Secure payments</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Low monthly fee</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#0f766e] transition-colors">
              <HeartHandshake className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Make an Impact</h3>
              <p className="text-gray-600 mb-4">
                Use your expertise to solve real problems. Mentor the next generation. Stay engaged and continue making a difference.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Meaningful projects</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Mentorship opportunities</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Stay engaged</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Getting started is simple
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f766e] to-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2">Create Profile</h3>
              <p className="text-sm text-gray-600">
                Showcase your experience, expertise, and what makes you unique. Highlight your career achievements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f766e] to-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2">Browse Projects</h3>
              <p className="text-sm text-gray-600">
                Explore opportunities that match your skills and interests. Filter by industry, budget, and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f766e] to-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2">Apply & Connect</h3>
              <p className="text-sm text-gray-600">
                Submit proposals for projects you want. Companies can also reach out to you directly based on your profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f766e] to-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="mb-2">Deliver & Earn</h3>
              <p className="text-sm text-gray-600">
                Work on projects you love. Get paid securely through our platform. Build your reputation with reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] mb-4">What's Included in Your Membership</h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed on ExpertBridge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 flex items-start gap-4">
              <Award className="w-8 h-8 text-[#0f766e] flex-shrink-0" />
              <div>
                <h4 className="mb-2">Professional Profile</h4>
                <p className="text-sm text-gray-600">
                  Create a detailed profile showcasing your expertise, experience, and achievements
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-[#0f766e] flex-shrink-0" />
              <div>
                <h4 className="mb-2">Unlimited Project Applications</h4>
                <p className="text-sm text-gray-600">
                  Apply to as many projects as you want with no restrictions
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <Users className="w-8 h-8 text-[#0f766e] flex-shrink-0" />
              <div>
                <h4 className="mb-2">Mentorship Platform</h4>
                <p className="text-sm text-gray-600">
                  Offer 1-on-1 mentorship sessions and build your mentee network
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <Shield className="w-8 h-8 text-[#0f766e] flex-shrink-0" />
              <div>
                <h4 className="mb-2">Secure Payments</h4>
                <p className="text-sm text-gray-600">
                  Get paid on time with our escrow payment protection system
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-[#0f766e] flex-shrink-0" />
              <div>
                <h4 className="mb-2">Analytics Dashboard</h4>
                <p className="text-sm text-gray-600">
                  Track your earnings, applications, and profile performance
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4">
              <Clock className="w-8 h-8 text-[#0f766e] flex-shrink-0" />
              <div>
                <h4 className="mb-2">Priority Support</h4>
                <p className="text-sm text-gray-600">
                  Get help when you need it from our dedicated support team
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-4">Is ExpertBridge Right for You?</h2>
            <p className="text-xl text-gray-600">
              You're a great fit if you have...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-[#0f766e] mb-3" />
              <h3 className="mb-2">20+ Years of Experience</h3>
              <p className="text-sm text-gray-600">
                Deep expertise in your field with proven track record of success
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-[#0f766e] mb-3" />
              <h3 className="mb-2">Senior Leadership Background</h3>
              <p className="text-sm text-gray-600">
                Experience as an executive, manager, or senior professional at established companies
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-[#0f766e] mb-3" />
              <h3 className="mb-2">Industry-Recognized Expertise</h3>
              <p className="text-sm text-gray-600">
                Specialized knowledge in engineering, medicine, business, education, or technology
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-[#0f766e] mb-3" />
              <h3 className="mb-2">Passion for Sharing Knowledge</h3>
              <p className="text-sm text-gray-600">
                Desire to mentor others and make a meaningful impact with your expertise
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-4">Join Our Expert Network</h2>
            <p className="text-xl text-gray-600">
              Start your application today - we'll review and get back to you within 48 hours
            </p>
          </div>

          <Card className="p-8">
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
                <label className="block text-sm text-gray-700 mb-2">Professional Title *</label>
                <Input placeholder="e.g., Retired Chief Engineer, Former CFO" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Years of Experience *</label>
                  <Input placeholder="e.g., 30" type="number" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Industry *</label>
                  <Input placeholder="e.g., Engineering" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">LinkedIn Profile URL (Optional)</label>
                <Input placeholder="https://linkedin.com/in/..." />
              </div>

              <Button className="w-full bg-[#0f766e] hover:bg-[#0f766e]/90" size="lg">
                Submit Application
              </Button>

              <p className="text-xs text-center text-gray-500">
                By applying, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f766e] to-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Share Your Expertise?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Join hundreds of experienced professionals earning on their own terms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-[#0f766e] hover:bg-gray-100 w-full sm:w-auto">
                Create Your Profile
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
