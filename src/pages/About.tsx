import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Users, TrendingUp, Heart, Award, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">Connecting Experience with Opportunity</h1>
            <p className="text-xl text-gray-100">
              We believe that retirement shouldn't mean the end of meaningful work. ExpertBridge was built to unlock the value of experience and create opportunities for lifelong impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-[#1e3a8a] mb-6"><b>
                Our Mission</b></h2>
              <p className="text-lg text-gray-700 mb-4">
                To create a world where experienced professionals can continue making an impact on their own terms, while helping companies access the deep expertise they need to succeed.
              </p>
              <p className="text-gray-600">
                Every day, thousands of highly experienced professionals retire with decades of invaluable knowledge. At the same time, companies struggle to find seasoned experts for critical projects and mentorship. ExpertBridge bridges this gap.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFscyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MzM5MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <Target className="w-12 h-12 text-[#1e3a8a] mx-auto mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards for our expert network, ensuring quality and expertise in every engagement.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <Heart className="w-12 h-12 text-[#0f766e] mx-auto mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Impact</h3>
              <p className="text-gray-600">
                We believe work should be meaningful. We connect people with opportunities to make a real difference.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <Shield className="w-12 h-12 text-[#1e3a8a] mx-auto mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Trust</h3>
              <p className="text-gray-600">
                Trust is the foundation of our platform. We protect both experts and companies with secure processes.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <Users className="w-12 h-12 text-[#0f766e] mx-auto mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Community</h3>
              <p className="text-gray-600">
                We're building a community of lifelong learners and experienced professionals supporting each other.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-[#1e3a8a] mx-auto mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Growth</h3>
              <p className="text-gray-600">
                Continuous learning and growth don't stop at retirement. We facilitate ongoing professional development.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <Award className="w-12 h-12 text-[#0f766e] mx-auto mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Recognition</h3>
              <p className="text-gray-600">
                Experience deserves recognition and fair compensation. We value the expertise our professionals bring.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              ElderExpert was founded in 2023 by a team of entrepreneurs who witnessed firsthand the challenge of finding experienced professionals for critical business needs. At the same time, they saw talented retirees struggling to find meaningful ways to stay engaged and share their expertise.
            </p>
            <p>
              The idea was simple: create a marketplace that connects these two groups in a way that benefits both. A platform where companies could access world-class expertise on-demand, and where experienced professionals could work on their own terms while making a real impact.
            </p>
            <p>
              Today, ElderExpert serves hundreds of companies and professionals across industries including engineering, healthcare, education, finance, and technology. Our community has completed thousands of projects and mentorship sessions, creating value on both sides of every engagement.
            </p>
            <p>
              We're just getting started. Our vision is to become the premier destination for experienced professionals to share their knowledge and for companies to access the expertise they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Impact by the Numbers</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">500+</div>
              <p className="text-gray-200">Expert Professionals</p>
            </div>
            <div>
              <div className="text-5xl mb-2">150+</div>
              <p className="text-gray-200">Companies Served</p>
            </div>
            <div>
              <div className="text-5xl mb-2">2,500+</div>
              <p className="text-gray-200">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl mb-2">95%</div>
              <p className="text-gray-200">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the people building ExpertBridge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] rounded-full mx-auto mb-4" />
              <h3 className="mb-1">Sarah Anderson</h3>
              <p className="text-sm text-[#1e3a8a] mb-2">CEO & Co-Founder</p>
              <p className="text-sm text-gray-600">
                Former VP at LinkedIn. 15+ years building marketplace platforms.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] rounded-full mx-auto mb-4" />
              <h3 className="mb-1">Michael Torres</h3>
              <p className="text-sm text-[#1e3a8a] mb-2">CTO & Co-Founder</p>
              <p className="text-sm text-gray-600">
                Ex-Google engineer. Expert in building scalable platforms.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] rounded-full mx-auto mb-4" />
              <h3 className="mb-1">Jennifer Wu</h3>
              <p className="text-sm text-[#1e3a8a] mb-2">Head of Community</p>
              <p className="text-sm text-gray-600">
                20 years in talent development and professional networking.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1e3a8a] mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're an expert looking to share your knowledge or a company seeking expertise, we'd love to have you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/for-experts">
              <Button size="lg" className="bg-[#0f766e] hover:bg-[#0f766e]/90 w-full sm:w-auto">
                Become an Expert
              </Button>
            </Link>
            <Link to="/for-companies">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 w-full sm:w-auto">
                Hire an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
