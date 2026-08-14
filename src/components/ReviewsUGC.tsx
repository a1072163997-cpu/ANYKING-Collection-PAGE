import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  ThumbsUp, 
  MessageSquare, 
  Laptop,
  Image as ImageIcon,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../utils/audio';

export const ReviewsUGC: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const stats = [
    { label: 'Verified Global Rating', value: '4.92 / 5' },
    { label: 'Units Working Worldwide', value: '14,200+' },
    { label: 'Hinge Protection Rating', value: '99.8%' },
    { label: 'Driverless Plug & Play', value: '100%' },
  ];

  const reviews = [
    {
      id: 'rev-1',
      author: 'Marcus Vance',
      role: 'Staff Infrastructure Engineer @ Scale AI',
      setup: 'MacBook Pro 16" (M3 Max) + ANYKING Solo 14" OLED',
      rating: 5,
      date: '2 days ago',
      category: 'engineering',
      title: 'The only portable monitor that doesn’t destroy your laptop hinge',
      content: 'I travel weekly between SF and NYC. Heavy magnetic multi-screen setups were slowly weakening my MacBook hinge. ANYKING’s friction foot carries 100% of the weight directly onto the desk. The 2.8K 120Hz OLED is as vibrant as Apple’s Liquid Retina XDR.',
      verified: true,
      likes: 48,
      setupTag: 'SF Coffee Shops & Flights'
    },
    {
      id: 'rev-2',
      author: 'Elena Rostova',
      role: 'Commercial Colorist & Filmmaker',
      setup: 'MacBook Pro 14" (M2) + ANYKING Pro 16" Studio 4K',
      rating: 5,
      date: '1 week ago',
      category: 'creative',
      title: '100% DCI-P3 factory calibration is real',
      content: 'I was skeptical about portable display color accuracy until I checked it with my Calibrite spectrophotometer. Delta E was 0.7 out of the box. I can color-grade ProRes RAW on client sets without hauling a massive reference monitor.',
      verified: true,
      likes: 35,
      setupTag: 'On-Location Commercial Sets'
    },
    {
      id: 'rev-3',
      author: 'David K. Liu',
      role: 'Quantitative Trader & Analyst',
      setup: 'Dell XPS 15 + ANYKING Flex 15.6" Fast-IPS 165Hz',
      rating: 5,
      date: '2 weeks ago',
      category: 'finance',
      title: '165Hz makes continuous chart tracking effortless',
      content: 'Zero motion blur on Level 2 depth ticks. Connects with a single braided USB-C cable without needing a separate charging brick. Fits inside my Tumi slim briefcase right alongside my laptop.',
      verified: true,
      likes: 29,
      setupTag: 'Trading Desk & Hotel Workspaces'
    },
    {
      id: 'rev-4',
      author: 'Sarah Chen',
      role: 'Founding Product Designer',
      setup: 'MacBook Air 15" + ANYKING Air 13.3" Touch',
      rating: 5,
      date: '3 weeks ago',
      category: 'design',
      title: 'Genuinely lightweight. Less than 600 grams.',
      content: 'Most portable screens feel clunky and double your backpack weight. This feels like sliding a second iPad into your bag. 10/10 craftsmanship in aluminum.',
      verified: true,
      likes: 52,
      setupTag: 'Remote Co-working Spaces'
    }
  ];

  const filteredReviews = selectedTag === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === selectedTag);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F6F4EF] border-t border-[#C8CBCB]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6DDCE]/40 border border-[#C8CBCB] text-[#25282B] text-xs font-semibold mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E6265]"></span>
            <span>Community & Verified UGC</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#25282B] tracking-tight font-display">
            Trusted by Mobile Professionals Worldwide
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6265] font-light leading-relaxed">
            Real desk setups, verified feedback, and honest reviews from remote engineers and creators.
          </p>
        </div>

        {/* Global Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-[#C8CBCB] text-center shadow-2xs">
              <div className="text-xl sm:text-2xl font-bold text-[#25282B] font-mono">
                {s.value}
              </div>
              <div className="text-xs text-[#5E6265] mt-1 font-light">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 overflow-x-auto pb-3 mb-8">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'engineering', label: 'Software Engineers' },
            { id: 'creative', label: 'Colorists & Creators' },
            { id: 'finance', label: 'Finance & Traders' },
            { id: 'design', label: 'Designers & Nomads' },
          ].map((tag) => (
            <button
              key={tag.id}
              onClick={() => {
                setSelectedTag(tag.id);
                sound.playClick();
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag.id
                  ? 'bg-[#25282B] text-white shadow-xs'
                  : 'bg-white text-[#5E6265] border border-[#C8CBCB] hover:text-[#25282B]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Reviews 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#C8CBCB] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E6DDCE] text-[#5E6265]" />
                    ))}
                  </div>

                  <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Buyer</span>
                  </div>
                </div>

                <h4 className="text-base font-semibold text-[#25282B] mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                <p className="text-xs text-[#5E6265] font-light leading-relaxed mb-4">
                  {rev.content}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C8CBCB]/40 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-[#25282B]">{rev.author}</div>
                  <div className="text-[10.5px] text-[#5E6265]">{rev.role}</div>
                  <div className="text-[10px] text-[#5E6265]/80 font-mono mt-0.5">{rev.setup}</div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E6DDCE]/40 text-[#25282B] border border-[#E6DDCE] font-medium">
                    {rev.setupTag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
