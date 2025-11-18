import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { 
  DollarSign, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Calendar,
  MessageCircle,
  FileText,
  Eye,
  Clock,
  CheckCircle2
} from 'lucide-react';

export function Dashboard() {
  const [userType, setUserType] = useState<'expert' | 'company' | 'mentee'>('expert');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#1e3a8a] mb-1">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Dr. Margaret Chen</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={userType === 'expert' ? 'default' : 'outline'}
                onClick={() => setUserType('expert')}
                className={userType === 'expert' ? 'bg-[#0f766e]' : ''}
              >
                Expert View
              </Button>
              <Button
                variant={userType === 'company' ? 'default' : 'outline'}
                onClick={() => setUserType('company')}
                className={userType === 'company' ? 'bg-[#1e3a8a]' : ''}
              >
                Company View
              </Button>
              <Button
                variant={userType === 'mentee' ? 'default' : 'outline'}
                onClick={() => setUserType('mentee')}
                className={userType === 'mentee' ? 'bg-[#d4af37]' : ''}
              >
                Mentee View
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Expert Dashboard */}
        {userType === 'expert' && (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Total Earnings</div>
                  <DollarSign className="w-5 h-5 text-[#0f766e]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">$47,250</div>
                <p className="text-xs text-gray-500 mt-1">+12% from last month</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Active Projects</div>
                  <Briefcase className="w-5 h-5 text-[#0f766e]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">3</div>
                <p className="text-xs text-gray-500 mt-1">2 in progress, 1 pending</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Profile Views</div>
                  <Eye className="w-5 h-5 text-[#0f766e]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">284</div>
                <p className="text-xs text-gray-500 mt-1">This month</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Avg Rating</div>
                  <TrendingUp className="w-5 h-5 text-[#0f766e]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">4.9</div>
                <p className="text-xs text-gray-500 mt-1">47 reviews</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Active Projects */}
                <Card className="p-6">
                  <h2 className="text-[#1e3a8a] mb-6">Active Projects</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#0f766e] pl-4 pb-4 border-b last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="mb-1">Aerospace Systems Review</h3>
                          <p className="text-sm text-gray-600">AeroTech Solutions</p>
                        </div>
                        <Badge className="bg-[#0f766e]">In Progress</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>$8,500</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Due: Dec 15, 2024</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#0f766e] w-[65%]" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">65% complete</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-[#d4af37] pl-4 pb-4 border-b last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="mb-1">Engineering Mentorship Program</h3>
                          <p className="text-sm text-gray-600">Individual Mentee</p>
                        </div>
                        <Badge variant="secondary">Ongoing</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>$200/session</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>12 sessions completed</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-gray-300 pl-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="mb-1">Quality Assurance Consulting</h3>
                          <p className="text-sm text-gray-600">Defense Dynamics Inc.</p>
                        </div>
                        <Badge variant="outline">Pending Start</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>$6,000</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Starts: Dec 1, 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Available Projects */}
                <Card className="p-6">
                  <h2 className="text-[#1e3a8a] mb-6">Recommended Projects</h2>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg hover:border-[#0f766e] transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="mb-1">Satellite Communications Expert Needed</h3>
                        <span className="text-sm text-[#0f766e]">$10,000-$15,000</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Looking for an aerospace engineer with satellite systems experience to review our communication architecture...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">Engineering</Badge>
                          <Badge variant="secondary" className="text-xs">Aerospace</Badge>
                        </div>
                        <Button size="sm" className="bg-[#0f766e] hover:bg-[#0f766e]/90">
                          Apply
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg hover:border-[#0f766e] transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="mb-1">Senior Engineer Mentor for Startup Team</h3>
                        <span className="text-sm text-[#0f766e]">$250/hr</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Tech startup seeking experienced engineer for monthly mentorship sessions with our engineering leadership...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">Mentorship</Badge>
                          <Badge variant="secondary" className="text-xs">Technology</Badge>
                        </div>
                        <Button size="sm" className="bg-[#0f766e] hover:bg-[#0f766e]/90">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="text-[#1e3a8a] mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Messages (3)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Payment Settings
                    </Button>
                  </div>
                </Card>

                {/* Recent Activity */}
                <Card className="p-6">
                  <h3 className="text-[#1e3a8a] mb-4">Recent Activity</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#0f766e] rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900">New project application</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900">Milestone completed</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900">New 5-star review</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900">Payment received: $8,500</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Company Dashboard */}
        {userType === 'company' && (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Active Projects</div>
                  <Briefcase className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">5</div>
                <p className="text-xs text-gray-500 mt-1">2 pending proposals</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Total Spent</div>
                  <DollarSign className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">$52,340</div>
                <p className="text-xs text-gray-500 mt-1">This year</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Hired Experts</div>
                  <Users className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">12</div>
                <p className="text-xs text-gray-500 mt-1">8 repeat hires</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Satisfaction</div>
                  <TrendingUp className="w-5 h-5 text-[#1e3a8a]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">98%</div>
                <p className="text-xs text-gray-500 mt-1">Avg project rating</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[#1e3a8a]">Your Projects</h2>
                    <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                      Post New Project
                    </Button>
                  </div>

                  <Tabs defaultValue="active">
                    <TabsList className="mb-4">
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>

                    <TabsContent value="active" className="space-y-4">
                      <div className="border-l-4 border-[#1e3a8a] pl-4 pb-4 border-b">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="mb-1">Cloud Architecture Review</h3>
                            <p className="text-sm text-gray-600">with David Kumar</p>
                          </div>
                          <Badge className="bg-[#1e3a8a]">In Progress</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>$6,000</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Due: Dec 20, 2024</span>
                          </div>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="outline">Message Expert</Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="pending" className="space-y-4">
                      <div className="border-l-4 border-gray-300 pl-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="mb-1">Financial Strategy Consulting</h3>
                            <p className="text-sm text-gray-600">5 proposals received</p>
                          </div>
                          <Badge variant="outline">Review Proposals</Badge>
                        </div>
                        <div className="mt-3">
                          <Button size="sm" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                            Review Applicants
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="completed">
                      <p className="text-sm text-gray-500">View your completed projects and leave reviews.</p>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-[#1e3a8a] mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Post Project
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Browse Experts
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Messages (2)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Billing
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-[#1e3a8a] mb-4">Recommended Experts</h3>
                  <p className="text-sm text-gray-600 mb-4">Based on your recent projects</p>
                  <div className="space-y-3">
                    <div className="p-3 border rounded hover:border-[#1e3a8a] transition-colors cursor-pointer">
                      <p className="text-sm">Sandra Morrison</p>
                      <p className="text-xs text-gray-600">Business Transformation</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs">⭐ 5.0</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Mentee Dashboard */}
        {userType === 'mentee' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Active Mentors</div>
                  <Users className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">2</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Sessions Booked</div>
                  <Calendar className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">8</div>
                <p className="text-xs text-gray-500 mt-1">3 upcoming</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Total Investment</div>
                  <DollarSign className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">$1,600</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Hours Learned</div>
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="text-3xl text-[#1e3a8a]">16</div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6">
                  <h2 className="text-[#1e3a8a] mb-6">Upcoming Sessions</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <Calendar className="w-10 h-10 text-[#d4af37]" />
                      <div className="flex-1">
                        <h3 className="mb-1">Career Advancement Strategy</h3>
                        <p className="text-sm text-gray-600">with Dr. Margaret Chen</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                          <span>Nov 25, 2024 at 2:00 PM</span>
                          <span>•</span>
                          <span>1 hour</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Join Call</Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-[#1e3a8a] mb-6">Your Mentors</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="mb-1">Dr. Margaret Chen</h3>
                        <p className="text-sm text-gray-600 mb-2">Aerospace Engineering</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-[#d4af37] hover:bg-[#d4af37]/90">
                            Book Session
                          </Button>
                          <Button size="sm" variant="outline">Message</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-[#1e3a8a] mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Find Mentors
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Messages
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      My Schedule
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
