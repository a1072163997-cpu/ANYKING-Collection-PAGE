import React, { useState } from 'react';
import { 
  Laptop, 
  Check, 
  Sparkles, 
  CheckCircle2, 
  Cable, 
  Zap, 
  Info, 
  Monitor,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../utils/audio';

interface DevicePreset {
  id: string;
  name: string;
  category: 'mac' | 'windows' | 'tablet' | 'gaming';
  supported: boolean;
  cableSetup: string;
  powerPassThrough: boolean;
  notes: string;
}

export const CompatibilityChecker: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('macbook-m-series');

  const devices: DevicePreset[] = [
    {
      id: 'macbook-m-series',
      name: 'Apple MacBook Pro & Air (M1 / M2 / M3 / M4)',
      category: 'mac',
      supported: true,
      cableSetup: '1 USB-C Braided Cable Only',
      powerPassThrough: true,
      notes: 'Native hardware display output. Zero DisplayLink or virtual drivers required. Full brightness & volume sync.'
    },
    {
      id: 'macbook-intel',
      name: 'Apple MacBook Pro (Intel Core 2016-2020)',
      category: 'mac',
      supported: true,
      cableSetup: '1 USB-C Thunderbolt 3 Cable',
      powerPassThrough: true,
      notes: 'Fully driverless via Thunderbolt 3 ports. 100W PD pass-through active.'
    },
    {
      id: 'dell-xps',
      name: 'Dell XPS 13 / 14 / 15 / 16 & Precision',
      category: 'windows',
      supported: true,
      cableSetup: '1 USB-C / Thunderbolt 4 Cable',
      powerPassThrough: true,
      notes: 'Instant plug-and-play Windows 11 HDR support. Clamping mechanism aligns perfectly with InfinityEdge display.'
    },
    {
      id: 'lenovo-thinkpad',
      name: 'Lenovo ThinkPad X1 Carbon & T-Series',
      category: 'windows',
      supported: true,
      cableSetup: '1 USB-C or Mini-HDMI + USB',
      powerPassThrough: true,
      notes: 'Fully compatible with standard USB-C Gen 2 and Thunderbolt 4 ports. Matte finish matches ThinkPad aesthetic.'
    },
    {
      id: 'surface-pro',
      name: 'Microsoft Surface Pro 9 / 10 & Laptop Studio',
      category: 'windows',
      supported: true,
      cableSetup: '1 USB-C Cable',
      powerPassThrough: true,
      notes: 'Native second monitor extension. Works seamlessly with touchscreen or stylus input.'
    },
    {
      id: 'ipad-pro',
      name: 'Apple iPad Pro & Air (M-Series / Stage Manager)',
      category: 'tablet',
      supported: true,
      cableSetup: '1 USB-C Cable',
      powerPassThrough: true,
      notes: 'Full iPadOS Stage Manager extended workspace support. Zero lag touchpad navigation.'
    },
    {
      id: 'steam-deck',
      name: 'Steam Deck / ROG Ally / Nintendo Switch',
      category: 'gaming',
      supported: true,
      cableSetup: '1 USB-C (Direct Power & Video)',
      powerPassThrough: true,
      notes: 'Play on 2.8K 120Hz OLED screen anywhere with direct USB-C input from your console.'
    }
  ];

  const currentDevice = devices.find(d => d.id === selectedDevice) || devices[0];

  return (
    <section id="compatibility" className="py-16 sm:py-24 bg-[#F6F4EF] border-t border-[#C8CBCB]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6DDCE]/40 border border-[#C8CBCB] text-[#25282B] text-xs font-semibold mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E6265]"></span>
            <span>Compatibility & Drivers</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#25282B] tracking-tight font-display">
            Works Instantly with Your Machine
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6265] font-light leading-relaxed">
            No driver installation. No kernel extensions. Connects directly via standard DisplayPort over USB-C or HDMI.
          </p>
        </div>

        {/* Interactive Compatibility Tool */}
        <div className="bg-white rounded-3xl border border-[#C8CBCB] p-6 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Device Selector List */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-semibold text-[#5E6265] uppercase tracking-wider block mb-2">
                Select Your Primary Machine:
              </span>

              <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                {devices.map((device) => {
                  const isSelected = selectedDevice === device.id;
                  return (
                    <button
                      key={device.id}
                      id={`compat-device-${device.id}`}
                      onClick={() => {
                        setSelectedDevice(device.id);
                        sound.playClick();
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#25282B] text-white border-[#25282B] shadow-xs'
                          : 'bg-[#F6F4EF] text-[#25282B] border-[#C8CBCB]/60 hover:border-[#5E6265]'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        <Laptop className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#E6DDCE]' : 'text-[#5E6265]'}`} />
                        <span className="truncate">{device.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ml-2 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#E6DDCE]/50 text-[#25282B]'
                      }`}>
                        100% Ready
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Technical Readiness Card */}
            <div className="lg:col-span-7 bg-[#F6F4EF] rounded-2xl border border-[#C8CBCB] p-6 sm:p-8 space-y-6">
              
              {/* Header result */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#C8CBCB]/60">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified 100% Compatible</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#25282B]">
                    {currentDevice.name}
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-[#25282B]">DRIVERLESS</div>
                  <div className="text-[10px] text-[#5E6265]">Zero Setup Time</div>
                </div>
              </div>

              {/* 3 Key Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-[#C8CBCB]/60">
                  <div className="flex items-center space-x-1.5 text-[#5E6265] text-xs mb-1">
                    <Cable className="w-3.5 h-3.5" />
                    <span>Cable Setup</span>
                  </div>
                  <div className="font-semibold text-xs text-[#25282B]">
                    {currentDevice.cableSetup}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#C8CBCB]/60">
                  <div className="flex items-center space-x-1.5 text-[#5E6265] text-xs mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Power Delivery</span>
                  </div>
                  <div className="font-semibold text-xs text-[#25282B]">
                    100W PD Pass-through
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#C8CBCB]/60">
                  <div className="flex items-center space-x-1.5 text-[#5E6265] text-xs mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Hinge Load</span>
                  </div>
                  <div className="font-semibold text-xs text-[#25282B]">
                    0.0g (Zero Stress)
                  </div>
                </div>
              </div>

              {/* Technical Engineer Note */}
              <div className="bg-white p-4 rounded-xl border border-[#C8CBCB]/60 text-xs text-[#5E6265] leading-relaxed">
                <span className="font-semibold text-[#25282B] block mb-1">Engineer Note:</span>
                {currentDevice.notes}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
