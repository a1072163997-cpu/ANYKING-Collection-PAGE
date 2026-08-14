import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Laptop, 
  Sparkles, 
  Coffee, 
  Code2, 
  TrendingUp, 
  Video, 
  FileSpreadsheet,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../utils/audio';

import setupWindowImg from '../assets/images/setup_window_view_1786693262711.jpg';
import setupOfficeImg from '../assets/images/setup_home_office_1786693275405.jpg';
import setupKitchenImg from '../assets/images/setup_kitchen_desk_1786693288708.jpg';

interface PracticalSetupCard {
  id: string;
  image: string;
  headline: string;
  country: string;
  author: string;
  verified: boolean;
  testimonial: string;
  scenarioTag: string;
  coreBenefit: string;
}

export const UseCases: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>('all');
  const [activeModalReview, setActiveModalReview] = useState<PracticalSetupCard | null>(null);

  const practicalSetups: PracticalSetupCard[] = [
    {
      id: 'setup-1',
      image: setupWindowImg,
      headline: '"Just Get it. It’s amazing."',
      country: 'US',
      author: 'Lena G.',
      verified: true,
      testimonial: "This is well made. ANYKING has thought of everything. Best extended screens I've ever used and owned. Don't hesitate buy!!",
      scenarioTag: '高空景观窗边 / 移动咖啡厅办公',
      coreBenefit: '零桌面占用 · 单线直连 · 随时移动'
    },
    {
      id: 'setup-2',
      image: setupOfficeImg,
      headline: '"Best IT purchase in years"',
      country: 'GB',
      author: 'Damien',
      verified: true,
      testimonial: "It has transformed working from home as I can now relocate anywhere and set up in minutes. Before this purchase I had 2 additional screens, a hub, 7 cables and 2 power packs, now I have 1 power pack and 1 cable, bliss!",
      scenarioTag: '极简居家办公 / 告别繁杂拓展坞与线缆',
      coreBenefit: '1条Type-C替代7根线缆与扩展坞'
    },
    {
      id: 'setup-3',
      image: setupKitchenImg,
      headline: '"Spectacular Mobile Displays"',
      country: 'CA',
      author: 'Paul M.',
      verified: true,
      testimonial: "Spectacular. The hinges feel a touch unstable when unfolding the screens, but it's actually quite sturdy. The USB-PD design is quite useful, the screens and my MacBook can run on a single power input through the screens.",
      scenarioTag: '灵活餐厨办公区 / USB-PD 双向反向供电',
      coreBenefit: 'MacBook 与拓展屏单口一线同源供电'
    }
  ];

  const scenarioCategories = [
    { id: 'all', label: '全部真实案例', icon: Sparkles },
    { id: 'office', label: '居家与远程移动办公', icon: Coffee },
    { id: 'dev', label: '编程调试与实时文档', icon: Code2 },
    { id: 'finance', label: '数据对比与表格协同', icon: FileSpreadsheet },
    { id: 'meeting', label: '视频会议与实时速记', icon: Video },
  ];

  const practicalDetails = [
    {
      title: '主屏专注输入，拓展屏常驻参考',
      desc: '笔记本屏幕全屏写代码、做 PPT 或撰写报告；单屏拓展屏常驻 Slack、微信、Notion 知识库或参考文档，告别频繁 Alt+Tab 切换造成的思路中断。',
      gain: '+50% 专注持久度'
    },
    {
      title: '远程会议不再挡住会议纪要',
      desc: '主屏打开 Zoom / 腾讯会议全屏视频并共享画面；右侧拓展屏实时查看参会人员发来的文件、演示文稿与要点备忘，保持自然眼神交流。',
      gain: '眼神直视镜头'
    },
    {
      title: '财务与数据核对：双表同屏秒校准',
      desc: '左边打开原数据源或银行流水，右边单屏展示最终统计报表，两份大表格同时展开，肉眼一览无余，彻底杜绝数据录入与复制粘贴遗漏。',
      gain: '核对效率翻倍'
    }
  ];

  return (
    <section id="use-cases" className="py-16 sm:py-24 bg-[#F6F4EF] border-t border-[#E3E1DC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#D5D2CA] text-[#1D1F22] text-xs font-semibold mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D1F22]"></span>
            <span>Real Customer Setups & Daily Workflows</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1F22] tracking-tight">
            单屏拓展屏的实用案例
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6265] leading-relaxed">
            从高空窗边到居家餐台，真实用户如何用一块轻便拓展屏彻底告别线缆杂乱与窗口来回切换。
          </p>
        </div>

        {/* 3 Real-World Customer Setup Cards (Exact Match to Uploaded Image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {practicalSetups.map((setup) => (
            <div
              key={setup.id}
              className="flex flex-col bg-white rounded-3xl p-4 sm:p-5 border border-[#E3E1DC] shadow-xs hover:shadow-md transition-shadow group"
            >
              {/* Photo Container */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#EDE7DF] mb-5 relative">
                <img
                  src={setup.image}
                  alt={setup.headline}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                {/* Scenario Pill on Image */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium">
                  {setup.scenarioTag}
                </div>
              </div>

              {/* Quote Headline */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1D1F22] tracking-tight mb-2">
                {setup.headline}
              </h3>

              {/* Author & Verified Line */}
              <div className="flex items-center space-x-2 text-xs font-medium text-[#1D1F22] mb-3">
                <span className="text-[#5E6265]">—</span>
                <span className="font-semibold uppercase">{setup.country}</span>
                <span>{setup.author}</span>
                <span className="px-2 py-0.5 rounded bg-black text-white text-[9.5px] font-bold tracking-wider">
                  Verified
                </span>
              </div>

              {/* Review / Testimonial Body */}
              <p className="text-xs sm:text-[13px] text-[#4A4E52] leading-relaxed italic mb-6 flex-1">
                "{setup.testimonial}"
              </p>

              {/* Bottom See Reviews Action */}
              <div className="pt-3 border-t border-[#E8E6E0] flex items-center justify-between">
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveModalReview(setup);
                  }}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1D1F22] hover:text-[#00B4D8] transition-colors cursor-pointer group/btn"
                >
                  <span>See reviews</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>

                <span className="text-[10.5px] text-[#868A8D] font-mono">
                  {setup.coreBenefit}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Deep Dive Practical Benefits (3-Pillar Breakdown) */}
        <div className="bg-white rounded-3xl border border-[#E3E1DC] p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#1D1F22]">
              为什么单屏拓展是移动办公的最佳平衡？
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6265] mt-1">
              无需笨重支架与额外电源，兼顾便携重量与两倍工作视野。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E8E6E0]">
            {practicalDetails.map((detail, index) => (
              <div key={index} className="pt-4 md:pt-0 md:px-5 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#EDE7DF] text-[#1D1F22] text-[10.5px] font-bold mb-2">
                    {detail.gain}
                  </div>
                  <h4 className="text-sm font-bold text-[#1D1F22] mb-1.5">
                    {detail.title}
                  </h4>
                  <p className="text-xs text-[#5E6265] leading-relaxed">
                    {detail.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Review Modal */}
      <AnimatePresence>
        {activeModalReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#E3E1DC] space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#E8E6E0] pb-3">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-[#1D1F22]">{activeModalReview.author}</span>
                  <span className="px-2 py-0.5 rounded bg-black text-white text-[10px] font-bold">
                    Verified Buyer ({activeModalReview.country})
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalReview(null)}
                  className="w-8 h-8 rounded-full bg-[#F6F4EF] hover:bg-[#E8E6E0] text-[#1D1F22] flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#EDE7DF]">
                <img
                  src={activeModalReview.image}
                  alt={activeModalReview.headline}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-base font-bold text-[#1D1F22]">
                {activeModalReview.headline}
              </h4>

              <p className="text-xs sm:text-sm text-[#4A4E52] leading-relaxed italic bg-[#F6F4EF] p-4 rounded-2xl border border-[#E3E1DC]">
                "{activeModalReview.testimonial}"
              </p>

              <div className="text-xs text-[#5E6265] space-y-1">
                <div><strong className="text-[#1D1F22]">适用场景：</strong> {activeModalReview.scenarioTag}</div>
                <div><strong className="text-[#1D1F22]">核心提升：</strong> {activeModalReview.coreBenefit}</div>
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveModalReview(null);
                }}
                className="w-full py-2.5 rounded-full bg-[#1D1F22] hover:bg-[#33373B] text-white text-xs font-semibold cursor-pointer"
              >
                关闭
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
