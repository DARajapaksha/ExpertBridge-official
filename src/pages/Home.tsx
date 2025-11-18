import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { mockExperts, industries, testimonials } from '../data/mockData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  GraduationCap,
  Settings,
  HeartPulse,
  TrendingUp,
  Cpu,
  Scale,
  Star,
  Quote
} from 'lucide-react';

const iconMap: Record<string, any> = {
  'cog': Settings,
  'heart-pulse': HeartPulse,
  'graduation-cap': GraduationCap,
  'trending-up': TrendingUp,
  'cpu': Cpu,
  'scale': Scale
};

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#0f766e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-xl text-gray-100 mb-8">
                Harness Decades of Experience. On-Demand.
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Connect with a network of retired industry leaders for your most critical projects and mentorship needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse-experts">
                  <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 w-full sm:w-auto">
                    Find Your Expert
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/for-experts">
                  <Button size="lg" variant="outline" className="bg-white text-[#1e3a8a] hover:bg-gray-100 w-full sm:w-auto">
                    Share Your Expertise
                  </Button>
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl mb-1">1+</div>
                  <div className="text-sm text-gray-200">Expert Professionals</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">5+</div>
                  <div className="text-sm text-gray-200">Companies Trust Us</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">95%</div>
                  <div className="text-sm text-gray-200">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612116144183-d1ba477239f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYzMzkxNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional consultant"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] mb-4 text-2xl font-semibold italic">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and designed for results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Companies */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-[#1e3a8a]" />
                <h3 className="text-[#1e3a8a] text-2xl font-semibold">For Companies</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1">Post a Project</h4>
                    <p className="text-gray-600">Define your needs, timeline, and budget in minutes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1">Match with an Expert</h4>
                    <p className="text-gray-600">Review proposals and select the perfect professional</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1">Get it Done</h4>
                    <p className="text-gray-600">Collaborate securely and achieve exceptional results</p>
                  </div>
                </div>
              </div>
              <Link to="/for-companies">
                <Button className="w-full mt-8 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                  Learn More for Companies
                </Button>
              </Link>
            </div>

            {/* For Experts */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#0f766e]" />
                <h3 className="text-[#0f766e] text-2xl font-semibold">For Experts</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0f766e] text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1">Build Your Profile</h4>
                    <p className="text-gray-600">Showcase your experience, skills, and expertise</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0f766e] text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1">Apply for Projects</h4>
                    <p className="text-gray-600">Browse opportunities that match your expertise</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0f766e] text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1">Share & Earn</h4>
                    <p className="text-gray-600">Deliver value and get paid for your expertise</p>
                  </div>
                </div>
              </div>
              <Link to="/for-experts">
                <Button className="w-full mt-8 bg-[#0f766e] hover:bg-[#0f766e]/90">
                  Learn More for Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-[#1e3a8a] transition-colors">
              <Building2 className="w-12 h-12 text-[#1e3a8a] mb-2" />
              <h3 className="text-[#1e3a8a] mb-3 text-2xl font-semibold">For Companies</h3>
              <p className="text-gray-600 mb-6">
                Access flexible, world-class talent. Get expert insights, solve complex problems, and avoid high recruitment costs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Pay only 10% service fee per project</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Access vetted, experienced professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Secure escrow payment protection</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#0f766e] transition-colors">
              <Users className="w-12 h-12 text-[#0f766e] mb-2" />
              <h3 className="text-[#0f766e] mb-3 text-2xl font-semibold">For Experts</h3>
              <p className="text-gray-600 mb-6">
                Your experience is in-demand. Monetize your skills, set your own schedule, and mentor the next generation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Work on your own terms and schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Simple monthly subscription model</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Make meaningful impact and stay engaged</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#d4af37] transition-colors">
              <GraduationCap className="w-12 h-12 text-[#d4af37] mb-2" />
              <h3 className="text-[#1e3a8a] mb-3 text-2xl font-semibold">For Mentees</h3>
              <p className="text-gray-600 mb-6">
                Learn from the best. Get 1-on-1 guidance from seasoned leaders who have been there and done that.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Direct access to industry veterans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Personalized career guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Flexible session scheduling</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Experts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-3 text-2xl font-semibold">Featured Experts</h2>
            <p className="text-xl text-gray-600">
              World-class professionals ready to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockExperts.slice(0, 6).map((expert) => (
              <Link key={expert.id} to={`/expert/${expert.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                        <span className="text-sm">{expert.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({expert.reviewCount} reviews)</span>
                    </div>
                    <h3 className="mb-1">{expert.name}</h3>
                    <p className="text-sm text-[#1e3a8a] mb-2">{expert.title}</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{expert.tagline}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-[#1e3a8a]">${expert.hourlyRate}/hr</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/browse-experts">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                View All Experts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-3 text-2xl font-semibold">Browse by Industry</h2>
            <p className="text-xl text-gray-600">
              Find experts in your field
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <Link key={industry.name} to="/browse-experts">
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer text-center h-full">
                    <Icon className="w-10 h-10 text-[#1e3a8a] mx-auto mb-3" />
                    <h4 className="text-sm mb-1">{industry.name}</h4>
                    <p className="text-xs text-gray-500">{industry.count} experts</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-3 text-2xl font-semibold">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-100">
              See what our community has to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 bg-white/10 backdrop-blur border-white/20 text-white">
                <Quote className="w-10 h-10 text-[#d4af37] mb-4" />
                <p className="mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-200">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1e3a8a] mb-6 text-2xl font-semibold">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of companies and experts already using ExpertBridge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse-experts">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 w-full sm:w-auto">
                Find Your Expert
              </Button>
            </Link>
            <Link to="/for-experts">
              <Button size="lg" variant="outline" className="border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white w-full sm:w-auto">
                Share Your Expertise
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
