import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Building2, 
  DollarSign, 
  Shield, 
  Clock, 
  Target, 
  Users,
  CheckCircle2,
  TrendingUp,
  Zap
} from 'lucide-react';

export function ForCompanies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white mb-6">
                Access World-Class Expertise. On Your Terms.
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Connect with retired industry leaders who bring decades of experience to solve your most critical business challenges. Pay only for what you need, when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse-experts">
                  <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 w-full sm:w-auto">
                    Browse Experts
                  </Button>
                </Link>
                <a href="#post-project">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Post a Project
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFscyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MzM5MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business collaboration"
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
            <h2 className="text-[#1e3a8a] mb-4">Why Companies Choose ExpertBridge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access flexible, world-class talent. Get expert insights, solve complex problems, and avoid high recruitment costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-[#1e3a8a] transition-colors">
              <DollarSign className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Cost-Effective</h3>
              <p className="text-gray-600 mb-4">
                Pay only a 10% service fee per project. No recruitment costs, no benefits, no overhead. Get expert help only when you need it.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">No hiring overhead</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Transparent pricing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#1e3a8a] transition-colors">
              <Target className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Proven Expertise</h3>
              <p className="text-gray-600 mb-4">
                All experts have 20+ years of experience in their fields. Former executives, engineers, and professionals from top companies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Vetted professionals</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Verified track records</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#1e3a8a] transition-colors">
              <Clock className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Fast & Flexible</h3>
              <p className="text-gray-600 mb-4">
                Post a project and get proposals within 24 hours. Work on your timeline with flexible engagement models.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Quick turnaround</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Flexible contracts</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#1e3a8a] transition-colors">
              <Shield className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Secure Payments</h3>
              <p className="text-gray-600 mb-4">
                Funds are held in secure escrow until project milestones are met. Full transparency and protection for both parties.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Escrow protection</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Milestone-based payments</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#1e3a8a] transition-colors">
              <Users className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Dedicated Support</h3>
              <p className="text-gray-600 mb-4">
                Our team helps you find the right expert, manage projects, and resolve any issues. Success is our priority.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Personal account manager</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">24/7 support available</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-[#1e3a8a] transition-colors">
              <Zap className="w-12 h-12 text-[#0f766e] mb-4" />
              <h3 className="text-[#1e3a8a] mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600 mb-4">
                95% client satisfaction rate. Our experts are committed to delivering exceptional results on every engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Satisfaction guarantee</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#0f766e] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Expert vetting process</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] mb-4">Common Use Cases</h2>
            <p className="text-xl text-gray-600">
              How companies leverage our expert network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <TrendingUp className="w-10 h-10 text-[#1e3a8a] mb-4" />
              <h3 className="mb-2">Strategic Consulting</h3>
              <p className="text-sm text-gray-600">
                Get expert guidance on business strategy, market entry, digital transformation, and growth initiatives.
              </p>
            </Card>

            <Card className="p-6">
              <Building2 className="w-10 h-10 text-[#1e3a8a] mb-4" />
              <h3 className="mb-2">Technical Due Diligence</h3>
              <p className="text-sm text-gray-600">
                Hire experts to assess technology stacks, evaluate engineering teams, and review technical architecture.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-10 h-10 text-[#1e3a8a] mb-4" />
              <h3 className="mb-2">Interim Leadership</h3>
              <p className="text-sm text-gray-600">
                Bridge leadership gaps with experienced executives who can step in and lead critical initiatives.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-10 h-10 text-[#1e3a8a] mb-4" />
              <h3 className="mb-2">Compliance & Risk</h3>
              <p className="text-sm text-gray-600">
                Navigate regulatory requirements and risk management with seasoned compliance professionals.
              </p>
            </Card>

            <Card className="p-6">
              <Target className="w-10 h-10 text-[#1e3a8a] mb-4" />
              <h3 className="mb-2">Product Development</h3>
              <p className="text-sm text-gray-600">
                Get expert input on product strategy, design, and go-to-market planning from industry veterans.
              </p>
            </Card>

            <Card className="p-6">
              <Zap className="w-10 h-10 text-[#1e3a8a] mb-4" />
              <h3 className="mb-2">Crisis Management</h3>
              <p className="text-sm text-gray-600">
                Access experienced professionals who have navigated complex challenges and can provide immediate guidance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Pay only for the expertise you use
            </p>
          </div>

          <Card className="p-12 text-center border-2 border-[#1e3a8a]">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl text-[#1e3a8a] mb-4">10%</div>
              <h3 className="text-[#1e3a8a] mb-4">Service Fee Per Project</h3>
              <p className="text-gray-600 mb-8">
                That's it. No hidden fees, no monthly subscriptions, no contracts. You only pay a 10% service fee on top of the expert's rate.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <CheckCircle2 className="w-6 h-6 text-[#0f766e] mb-2" />
                  <h4 className="text-sm mb-1">Post Unlimited Projects</h4>
                  <p className="text-xs text-gray-600">No limit on project postings</p>
                </div>
                <div>
                  <CheckCircle2 className="w-6 h-6 text-[#0f766e] mb-2" />
                  <h4 className="text-sm mb-1">Search Expert Database</h4>
                  <p className="text-xs text-gray-600">Full access to all experts</p>
                </div>
                <div>
                  <CheckCircle2 className="w-6 h-6 text-[#0f766e] mb-2" />
                  <h4 className="text-sm mb-1">Secure Payments</h4>
                  <p className="text-xs text-gray-600">Escrow protection included</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Post Project Form */}
      <section id="post-project" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1e3a8a] mb-4">Post Your First Project</h2>
            <p className="text-xl text-gray-600">
              Get proposals from qualified experts within 24 hours
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Project Title *</label>
                <Input placeholder="e.g., Need CFO guidance for Series B fundraising" />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Project Description *</label>
                <Textarea 
                  placeholder="Describe your project, goals, and what you're looking for in an expert..."
                  rows={6}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Required Skills *</label>
                  <Input placeholder="e.g., Financial Strategy, M&A" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Budget Range *</label>
                  <Input placeholder="e.g., $5,000 - $10,000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Timeline *</label>
                  <Input placeholder="e.g., 2-4 weeks" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Industry *</label>
                  <Input placeholder="e.g., Technology" />
                </div>
              </div>

              <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90" size="lg">
                Post Project & Find Experts
              </Button>

              <p className="text-xs text-center text-gray-500">
                By posting a project, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Access World-Class Expertise?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Join hundreds of companies leveraging our expert network for critical projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse-experts">
              <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 w-full sm:w-auto">
                Browse Experts
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
