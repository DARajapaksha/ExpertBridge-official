import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { mockExperts, industries } from '../data/mockData';
import { Search, Star, MapPin, Filter } from 'lucide-react';

export function BrowseExperts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  const [rateRange, setRateRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredExperts = mockExperts.filter((expert) => {
    const matchesSearch = 
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesIndustry = selectedIndustry === 'all' || expert.industry === selectedIndustry;
    const matchesRate = expert.hourlyRate >= rateRange[0] && expert.hourlyRate <= rateRange[1];

    return matchesSearch && matchesIndustry && matchesRate;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-[#1e3a8a] mb-4 text-2xl font-semibold">Browse Experts</h1>
          <p className="text-s text-gray-600">
            Find the perfect professional for your project or mentorship needs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#1e3a8a]">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Skills, name, title..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Industry Filter */}
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">Industry</label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Industries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      {industries.map((industry) => (
                        <SelectItem key={industry.name} value={industry.name}>
                          {industry.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Type */}
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">Service Type</label>
                  <Select value={selectedServiceType} onValueChange={setSelectedServiceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="project">Project Work</SelectItem>
                      <SelectItem value="mentorship">Mentorship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Hourly Rate Range */}
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Hourly Rate: ${rateRange[0]} - ${rateRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={500}
                    step={10}
                    value={rateRange}
                    onValueChange={setRateRange}
                    className="mt-2"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">Minimum Experience</label>
                  <Select defaultValue="0">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Any</SelectItem>
                      <SelectItem value="10">10+ years</SelectItem>
                      <SelectItem value="20">20+ years</SelectItem>
                      <SelectItem value="30">30+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedIndustry('all');
                    setSelectedServiceType('all');
                    setRateRange([0, 500]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Experts Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredExperts.length} expert{filteredExperts.length !== 1 ? 's' : ''} found
              </p>
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredExperts.map((expert) => (
                <Link key={expert.id} to={`/expert/${expert.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full">
                    <div className="aspect-[16/9] overflow-hidden">
                      <ImageWithFallback
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="mb-1">{expert.name}</h3>
                          <p className="text-sm text-[#1e3a8a]">{expert.title}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-[#d4af37]/10 px-2 py-1 rounded">
                          <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                          <span className="text-sm">{expert.rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {expert.tagline}
                      </p>

                      <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{expert.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {expert.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <p className="text-xs text-gray-500">Starting at</p>
                          <p className="text-[#1e3a8a]">${expert.hourlyRate}/hr</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">{expert.reviewCount} reviews</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredExperts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No experts found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedIndustry('all');
                    setSelectedServiceType('all');
                    setRateRange([0, 500]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
