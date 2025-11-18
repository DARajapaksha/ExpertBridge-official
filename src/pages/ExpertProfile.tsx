import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { mockExperts } from '../data/mockData';
import { 
  Star, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  MessageCircle,
  DollarSign,
  CheckCircle2,
  Award,
  Calendar
} from 'lucide-react';

export function ExpertProfile() {
  const { id } = useParams();
  const expert = mockExperts.find((e) => e.id === id);

  if (!expert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#1e3a8a] mb-4">Expert Not Found</h2>
          <Link to="/browse-experts">
            <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
              Browse All Experts
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src={expert.image}
                    alt={expert.name}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-[#1e3a8a] mb-2">{expert.name}</h1>
                      <p className="text-xl text-gray-700 mb-3">{expert.title}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-[#d4af37]/10 px-3 py-2 rounded-lg">
                      <Star className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                      <span className="text-xl">{expert.rating}</span>
                      <span className="text-sm text-gray-600">({expert.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{expert.yearsExperience}+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{expert.industry}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <Card className="p-6 bg-gradient-to-br from-[#1e3a8a] to-[#0f766e] text-white">
                <div className="mb-4">
                  <p className="text-sm text-gray-200 mb-1">Starting Rate</p>
                  <p className="text-3xl">${expert.hourlyRate}/hr</p>
                </div>
                <Button className="w-full bg-white text-[#1e3a8a] hover:bg-gray-100 mb-2">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Expert
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Session
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <Card className="p-8">
              <h2 className="text-[#1e3a8a] mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{expert.about}</p>
            </Card>

            {/* Services Offered */}
            <Card className="p-8">
              <h2 className="text-[#1e3a8a] mb-6">Services Offered</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#1e3a8a] pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-[#1e3a8a] mb-2">Project Consulting</h3>
                      <p className="text-gray-600">{expert.services.project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Starting at ${expert.services.project.startingPrice.toLocaleString()}</span>
                  </div>
                </div>

                <Separator />

                <div className="border-l-4 border-[#0f766e] pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-[#0f766e] mb-2">Mentorship Sessions</h3>
                      <p className="text-gray-600">{expert.services.mentorship.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Starting at ${expert.services.mentorship.startingPrice}/session</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience Timeline */}
            <Card className="p-8">
              <h2 className="text-[#1e3a8a] mb-6">Experience</h2>
              <div className="space-y-6">
                {expert.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 last:border-0 last:pb-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#1e3a8a]" />
                    <div className="mb-1">
                      <h3 className="mb-1">{exp.role}</h3>
                      <p className="text-[#1e3a8a]">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{exp.years}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-8">
              <h2 className="text-[#1e3a8a] mb-6">Reviews & Project History</h2>
              <div className="space-y-6">
                {expert.reviews.map((review) => (
                  <div key={review.id} className="pb-6 border-b last:border-0 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="mb-1">{review.client}</p>
                        <p className="text-sm text-gray-600">{review.project}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-[#d4af37] text-[#d4af37]'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">"{review.comment}"</p>
                    <p className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Skills */}
              <Card className="p-6">
                <h3 className="text-[#1e3a8a] mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {expert.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Why Hire This Expert */}
              <Card className="p-6 bg-gradient-to-br from-[#1e3a8a]/5 to-[#0f766e]/5">
                <h3 className="text-[#1e3a8a] mb-4">Why Hire {expert.name.split(' ')[0]}?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">
                      {expert.yearsExperience}+ years of industry experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">
                      Proven track record with {expert.reviewCount} client reviews
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">
                      {expert.rating}/5.0 average rating
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">
                      Flexible project and mentorship options
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Similar Experts */}
              <Card className="p-6">
                <h3 className="text-[#1e3a8a] mb-4">Similar Experts</h3>
                <div className="space-y-4">
                  {mockExperts
                    .filter((e) => e.id !== expert.id && e.industry === expert.industry)
                    .slice(0, 3)
                    .map((similarExpert) => (
                      <Link
                        key={similarExpert.id}
                        to={`/expert/${similarExpert.id}`}
                        className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <ImageWithFallback
                          src={similarExpert.image}
                          alt={similarExpert.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate">{similarExpert.name}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                            <span className="text-xs text-gray-600">{similarExpert.rating}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
