import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CheckCircle2, X } from 'lucide-react';

export function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-[#1e3a8a] mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works for you. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Experts */}
          <Card className="p-8 border-2 border-[#0f766e] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0f766e] text-white px-4 py-1 text-sm">
              For Experts
            </div>
            <div className="mb-8 mt-4">
              <h2 className="text-[#0f766e] mb-2">Pro Profile Plan</h2>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl text-[#1e3a8a]">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">
                Everything you need to start earning from your expertise
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="mb-4">What's Included:</h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Public Expert Profile</p>
                  <p className="text-sm text-gray-600">Showcase your expertise to thousands of companies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Apply to Unlimited Projects</p>
                  <p className="text-sm text-gray-600">No restrictions on project applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Offer Mentorship Sessions</p>
                  <p className="text-sm text-gray-600">Schedule and manage 1-on-1 mentoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Secure Escrow Payments</p>
                  <p className="text-sm text-gray-600">Protected payments with milestone tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Analytics Dashboard</p>
                  <p className="text-sm text-gray-600">Track earnings, applications, and profile views</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Direct Messaging</p>
                  <p className="text-sm text-gray-600">Communicate securely with clients</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Priority Support</p>
                  <p className="text-sm text-gray-600">Dedicated support team for all your needs</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f766e]/10 rounded-lg p-4 mb-6">
              <p className="text-sm">
                <span className="text-[#0f766e]">Plus:</span> Keep 100% of your project earnings after the subscription fee
              </p>
            </div>

            <Link to="/signup">
              <Button className="w-full bg-[#0f766e] hover:bg-[#0f766e]/90" size="lg">
                Start Your Expert Profile
              </Button>
            </Link>
          </Card>

          {/* For Companies */}
          <Card className="p-8 border-2 border-[#1e3a8a] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#1e3a8a] text-white px-4 py-1 text-sm">
              For Companies
            </div>
            <div className="mb-8 mt-4">
              <h2 className="text-[#1e3a8a] mb-2">Pay-As-You-Go</h2>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl text-[#1e3a8a]">10%</span>
                <span className="text-gray-600">service fee</span>
              </div>
              <p className="text-gray-600">
                Only pay when you hire an expert - no monthly fees
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="mb-4">What's Included:</h3>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Post Unlimited Projects</p>
                  <p className="text-sm text-gray-600">Create as many project listings as you need</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Search Full Expert Database</p>
                  <p className="text-sm text-gray-600">Access to 500+ vetted professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Secure Escrow Payments</p>
                  <p className="text-sm text-gray-600">Funds held safely until milestones are met</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Advanced Filters & Matching</p>
                  <p className="text-sm text-gray-600">Find exactly the right expert for your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Project Management Tools</p>
                  <p className="text-sm text-gray-600">Manage contracts, milestones, and payments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Direct Messaging</p>
                  <p className="text-sm text-gray-600">Communicate with experts securely</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900">Dedicated Account Manager</p>
                  <p className="text-sm text-gray-600">Personal support for your hiring needs</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1e3a8a]/10 rounded-lg p-4 mb-6">
              <p className="text-sm">
                <span className="text-[#1e3a8a]">Example:</span> $10,000 project = $1,000 service fee (10%)
              </p>
            </div>

            <Link to="/signup">
              <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90" size="lg">
                Get Started as a Company
              </Button>
            </Link>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h2 className="text-[#1e3a8a] text-center mb-12">Feature Comparison</h2>
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">For Experts</th>
                    <th className="text-center p-4">For Companies</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">Monthly Subscription Fee</td>
                    <td className="text-center p-4">$49/month</td>
                    <td className="text-center p-4">$0</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4">Per-Project Service Fee</td>
                    <td className="text-center p-4">$0</td>
                    <td className="text-center p-4">10%</td>
                  </tr>
                  <tr>
                    <td className="p-4">Create Public Profile</td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#0f766e] mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4">Post/Browse Projects</td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#0f766e] mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">Search Database</td>
                    <td className="text-center p-4">
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4">Secure Payments</td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#0f766e] mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">Direct Messaging</td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#0f766e] mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4">Mentorship Platform</td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#0f766e] mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">Priority Support</td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#0f766e] mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle2 className="w-5 h-5 text-[#1e3a8a] mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-[#1e3a8a] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-2">Can I try before I subscribe?</h3>
              <p className="text-sm text-gray-600">
                Yes! Companies can browse the full expert database for free. Experts can create a profile and explore projects with a 14-day free trial.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">How do payments work?</h3>
              <p className="text-sm text-gray-600">
                All payments are held in secure escrow until project milestones are completed. Experts receive payment within 5 business days of milestone approval.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">Can I cancel my expert subscription anytime?</h3>
              <p className="text-sm text-gray-600">
                Absolutely. There are no long-term contracts. You can cancel your subscription at any time and you'll have access until the end of your billing period.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">What if I'm not satisfied with an expert?</h3>
              <p className="text-sm text-gray-600">
                We have a satisfaction guarantee. If you're not happy with the expert's work within the first week, we'll help you find a replacement or provide a full refund.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="mb-2">Are there any hidden fees?</h3>
              <p className="text-sm text-gray-600">
                No. The pricing you see is the pricing you pay. Experts pay $49/month. Companies pay a 10% service fee per project. That's it.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-[#1e3a8a] mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/for-experts">
              <Button size="lg" className="bg-[#0f766e] hover:bg-[#0f766e]/90 w-full sm:w-auto">
                I'm an Expert
              </Button>
            </Link>
            <Link to="/for-companies">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 w-full sm:w-auto">
                I'm a Company
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
