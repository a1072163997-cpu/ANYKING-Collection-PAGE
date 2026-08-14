import { ProductModel, WorkspaceApp } from '../types';
import tripleAeroImg from '../assets/images/triple_aero_pro_1786691727339.jpg';
import tripleBoostImg from '../assets/images/triple_boost_pro_1786691736654.jpg';
import dualImg from '../assets/images/dual_monitors_card_1786693511238.jpg';
import singleImg from '../assets/images/single_monitors_card_1786693531829.jpg';

// TRIPLE MONITORS COLLECTION
export const TRIPLE_MONITOR_PRODUCTS: ProductModel[] = [
  {
    id: 'triple-aero-pro-max-gen2',
    name: 'Triple Aero Pro Max (Gen 2)',
    series: 'Triple Monitors',
    badge: 'Best Seller',
    isBestSeller: true,
    tagline: 'The most immersive triple portable monitor ever built.',
    screenSize: 'From 14" to 18.5"',
    resolution: 'From Full HD to 2.5K',
    panelType: 'Ultra-Clear Anti-Glare IPS Display',
    refreshRate: '120Hz Smooth Display',
    brightness: '500 nits',
    weight: '1.2kg (2.6 lbs)',
    thickness: '4.8mm',
    aspectRatio: '16:10 / 16:9',
    colorGamut: '100% sRGB / 95% DCI-P3',
    connection: '1 USB-C cable required (Connected to your laptop)',
    hingeType: 'Aero-Flex 360° Foldable Dual Hinge',
    price: 549,
    originalPrice: 699,
    discountPercentage: 21,
    rating: 4.4,
    reviewCount: 350,
    availableColors: [
      { name: 'Matte Black', hex: '#18181B' }
    ],
    accentColor: '#00B4D8',
    inStock: true,
    availableOnAmazon: false,
    cablesRequiredCount: 1,
    softwareRequired: true,
    supportedOS: ['MacOS', 'Windows', 'Game consoles'],
    materials: 'Full Aluminum',
    inputs: ['USB-C', 'Mini HDMI'],
    customImage: tripleAeroImg,
    specMatrix: [
      {
        icon: 'Cable',
        title: '1 USB-C cable required',
        subtitle: 'Connected to your laptop'
      },
      {
        icon: 'Monitor',
        title: 'From 14" to 18.5"',
        subtitle: 'Display Size'
      },
      {
        icon: 'Sparkles',
        title: 'From Full HD to 2.5K',
        subtitle: 'Resolution'
      },
      {
        icon: 'Laptop',
        title: 'MacOS, Windows',
        subtitle: '+ Game consoles'
      },
      {
        icon: 'Download',
        title: 'Software required',
        subtitle: 'Quick and easy installation'
      },
      {
        icon: 'Layers',
        title: 'Full Aluminum',
        subtitle: 'Materials'
      }
    ],
    idealFor: 'Software Engineers, Day Traders, Creative Directors',
    highlightSpecs: [
      'Single USB-C Cable drives two additional 120Hz panels effortlessly',
      'Aviation-grade aluminum construction with CNC-milled hinges',
      'Ultra-thin 4.8mm bezel with 500-nit high-visibility display',
      'Compatible with M1/M2/M3 MacBooks, Windows PCs, and Linux workstations'
    ],
    features: [
      {
        title: 'Triple-Screen Command Matrix',
        description: 'Instantly triple your workspace with dual 120Hz panels powered by a single USB-C cable.'
      }
    ]
  },
  {
    id: 'triple-boost-pro-gen2',
    name: 'Triple Boost Pro (Gen 2)',
    series: 'Triple Monitors',
    badge: 'Save 22%',
    isBestSeller: false,
    tagline: 'Engineered for power multi-taskers needing expansive screen real estate.',
    screenSize: '3x 14" or 3x 15.6"',
    resolution: 'Full HD to 2.5K',
    panelType: 'Anti-Glare IPS Display',
    refreshRate: '60Hz / 120Hz',
    brightness: '450 nits',
    weight: '1.3kg (2.8 lbs)',
    thickness: '5.2mm',
    aspectRatio: '16:9',
    colorGamut: '100% sRGB',
    connection: '1 USB-C cable required',
    hingeType: 'Dual-Stage Friction Hinge',
    price: 499,
    originalPrice: 639,
    discountPercentage: 22,
    rating: 4.5,
    reviewCount: 263,
    availableColors: [
      { name: 'Space Gray', hex: '#4A4D52' },
      { name: 'Midnight Silver', hex: '#8E9399' }
    ],
    accentColor: '#EF4444',
    inStock: true,
    availableOnAmazon: false,
    cablesRequiredCount: 1,
    softwareRequired: true,
    supportedOS: ['MacOS', 'Windows', 'Android', 'Ubuntu'],
    materials: 'Full Aluminum',
    inputs: ['USB-C', 'Mini HDMI'],
    customImage: tripleBoostImg,
    specMatrix: [
      {
        icon: 'Cable',
        title: '1 USB-C cable required',
        subtitle: 'Connected to your laptop'
      },
      {
        icon: 'Monitor',
        title: '3x 14" or 3x 15.6"',
        subtitle: 'Display Size'
      },
      {
        icon: 'Sparkles',
        title: 'From Full HD to 2.5K',
        subtitle: 'Resolution'
      },
      {
        icon: 'Laptop',
        title: 'MacOS, Windows',
        subtitle: '+ Android & Ubuntu'
      },
      {
        icon: 'Download',
        title: 'Software required',
        subtitle: 'Quick and easy installation'
      },
      {
        icon: 'Layers',
        title: 'Full Aluminum',
        subtitle: 'Materials'
      }
    ],
    idealFor: 'Financial Analysts, Project Managers, Accountants',
    highlightSpecs: [
      'Expand any laptop into an expansive 3-screen command center',
      'Plug-and-play multi-monitor synchronization',
      'Solid aluminum alloy casing',
      'Supports Windows, macOS, Android, and Ubuntu'
    ],
    features: [
      {
        title: 'Instant Multi-Tasking',
        description: 'Keep documentation, code, and chat visible simultaneously across dedicated displays.'
      }
    ]
  },
  {
    id: 'triple-screen-pro-fold',
    name: 'Triple Screen Pro Fold (Gen 2)',
    series: 'Triple Monitors',
    badge: 'Save 27%',
    isBestSeller: false,
    tagline: 'Ultra-portable foldable triple monitor for on-the-go professionals.',
    screenSize: '3x 14"',
    resolution: 'Full HD 1080p',
    panelType: 'Anti-Glare IPS Display',
    refreshRate: '60Hz',
    brightness: '400 nits',
    weight: '1.1kg (2.4 lbs)',
    thickness: '4.5mm',
    aspectRatio: '16:9',
    colorGamut: '99% sRGB',
    connection: '1 USB-C cable required',
    hingeType: 'Magnetic Easy-Fold',
    price: 429,
    originalPrice: 589,
    discountPercentage: 27,
    rating: 4.5,
    reviewCount: 271,
    availableColors: [
      { name: 'Matte Black', hex: '#18181B' }
    ],
    accentColor: '#EF4444',
    inStock: true,
    availableOnAmazon: false,
    cablesRequiredCount: 1,
    softwareRequired: true,
    supportedOS: ['MacOS', 'Windows', 'Android'],
    materials: 'Full Aluminum',
    inputs: ['USB-C'],
    customImage: tripleBoostImg,
    specMatrix: [
      {
        icon: 'Cable',
        title: '1 USB-C cable required',
        subtitle: 'Connected to your laptop'
      },
      {
        icon: 'Monitor',
        title: '3x 14" Display',
        subtitle: 'Display Size'
      },
      {
        icon: 'Sparkles',
        title: 'Full HD 1080p',
        subtitle: 'Resolution'
      },
      {
        icon: 'Laptop',
        title: 'MacOS, Windows',
        subtitle: '+ Android'
      },
      {
        icon: 'Download',
        title: 'Software required',
        subtitle: 'Quick and easy installation'
      },
      {
        icon: 'Layers',
        title: 'Full Aluminum',
        subtitle: 'Materials'
      }
    ],
    idealFor: 'Travelers, Digital Nomads, Consultants',
    highlightSpecs: [
      'Extremely compact fold-flat design fits in laptop backpacks',
      'Full Aluminum frame with magnetic clasp',
      'One USB-C connection'
    ],
    features: [
      {
        title: 'Travel Friendly',
        description: 'Fold flat into a single slim sleeve and set up in under 20 seconds at any cafe or hotel desk.'
      }
    ]
  }
];

// DUAL MONITORS COLLECTION (8 models represented)
export const DUAL_MONITOR_PRODUCTS: ProductModel[] = [
  {
    id: 'dual-aero-pro-15',
    name: 'Dual Aero Pro 15.6"',
    series: 'Dual Monitors',
    badge: 'Popular Choice',
    isBestSeller: true,
    tagline: 'Dual side-by-side balanced workspace for maximum desk productivity.',
    screenSize: '2x 15.6" IPS',
    resolution: '2.5K QHD (2560x1440)',
    panelType: 'Anti-Glare IPS Matte',
    refreshRate: '120Hz',
    brightness: '500 nits',
    weight: '980g (2.1 lbs)',
    thickness: '4.6mm',
    aspectRatio: '16:10',
    colorGamut: '100% DCI-P3',
    connection: '1 USB-C cable required',
    hingeType: 'Precision Dual Pivot Hinge',
    price: 399,
    originalPrice: 499,
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 420,
    availableColors: [
      { name: 'Space Gray', hex: '#4A4D52' },
      { name: 'Obsidian Black', hex: '#18181B' }
    ],
    accentColor: '#00B4D8',
    inStock: true,
    availableOnAmazon: true,
    cablesRequiredCount: 1,
    softwareRequired: false,
    supportedOS: ['MacOS', 'Windows', 'Android', 'Linux'],
    materials: 'Full Aluminum',
    inputs: ['USB-C', 'Mini HDMI'],
    customImage: dualImg,
    specMatrix: [
      { icon: 'Cable', title: '1 USB-C cable required', subtitle: 'Plug & Play Direct' },
      { icon: 'Monitor', title: '2x 15.6" IPS', subtitle: 'Display Size' },
      { icon: 'Sparkles', title: '2.5K QHD 120Hz', subtitle: 'Resolution' },
      { icon: 'Laptop', title: 'Mac, Win, Android', subtitle: 'Universal OS' },
      { icon: 'Download', title: 'Driver-Free', subtitle: 'Instant connect' },
      { icon: 'Layers', title: 'Full Aluminum', subtitle: 'Materials' }
    ],
    idealFor: 'Developers, Editors, Financial Analysts',
    highlightSpecs: ['Driver-free dual screen expansion', 'True 120Hz refresh rate', 'Precision aluminum housing'],
    features: [{ title: 'Dual Panel Harmony', description: 'Two matching displays on either side of your laptop.' }]
  },
  {
    id: 'dual-boost-compact-14',
    name: 'Dual Boost Compact 14"',
    series: 'Dual Monitors',
    badge: 'Ultra Light',
    isBestSeller: false,
    tagline: 'Lightweight dual monitor designed for 13-14 inch ultrabooks.',
    screenSize: '2x 14" Ultra Slim',
    resolution: 'Full HD 1080p',
    panelType: 'Anti-Glare IPS',
    refreshRate: '60Hz',
    brightness: '400 nits',
    weight: '820g (1.8 lbs)',
    thickness: '4.2mm',
    aspectRatio: '16:9',
    colorGamut: '100% sRGB',
    connection: '1 USB-C cable required',
    hingeType: 'Magnetic Quick-Mount',
    price: 349,
    originalPrice: 449,
    discountPercentage: 22,
    rating: 4.6,
    reviewCount: 310,
    availableColors: [{ name: 'Space Gray', hex: '#4A4D52' }],
    accentColor: '#EF4444',
    inStock: true,
    availableOnAmazon: true,
    cablesRequiredCount: 1,
    softwareRequired: false,
    supportedOS: ['MacOS', 'Windows', 'Android'],
    materials: 'Full Aluminum',
    inputs: ['USB-C'],
    customImage: dualImg,
    specMatrix: [
      { icon: 'Cable', title: '1 USB-C cable required', subtitle: 'Plug & Play Direct' },
      { icon: 'Monitor', title: '2x 14" Slim', subtitle: 'Display Size' },
      { icon: 'Sparkles', title: 'Full HD 1080p', subtitle: 'Resolution' },
      { icon: 'Laptop', title: 'Mac & Windows', subtitle: 'Universal OS' },
      { icon: 'Download', title: 'Driver-Free', subtitle: 'Instant connect' },
      { icon: 'Layers', title: 'Full Aluminum', subtitle: 'Materials' }
    ],
    idealFor: 'Commuters, Students, Remote Workers',
    highlightSpecs: ['Sub-1kg carry weight', 'Magnetic clip mechanism', 'Low power consumption'],
    features: [{ title: 'Compact Dual Field', description: 'Expands your 13" laptop into a 3-screen mobile rig.' }]
  }
];

// SINGLE MONITORS COLLECTION (6 models represented)
export const SINGLE_SCREEN_COLLECTION_PRODUCTS: ProductModel[] = [
  {
    id: 'single-aero-pro-16',
    name: 'Single Aero Pro 16" 2.5K',
    series: 'Single Monitors',
    badge: 'Best Seller',
    isBestSeller: true,
    tagline: 'The ultimate standalone 16-inch 2.5K companion display with built-in kickstand.',
    screenSize: '16.0" 16:10 Display',
    resolution: '2.5K (2560x1600)',
    panelType: 'Anti-Glare IPS 100% sRGB',
    refreshRate: '120Hz',
    brightness: '500 nits',
    weight: '620g (1.36 lbs)',
    thickness: '4.0mm',
    aspectRatio: '16:10',
    colorGamut: '100% sRGB / 98% DCI-P3',
    connection: '1 USB-C cable required (Power + Display)',
    hingeType: 'Integrated 0-90° Aluminum Kickstand',
    price: 249,
    originalPrice: 329,
    discountPercentage: 24,
    rating: 4.9,
    reviewCount: 512,
    availableColors: [
      { name: 'Space Gray', hex: '#4A4D52' },
      { name: 'Silver', hex: '#D8D8D8' }
    ],
    accentColor: '#00B4D8',
    inStock: true,
    availableOnAmazon: true,
    cablesRequiredCount: 1,
    softwareRequired: false,
    supportedOS: ['MacOS', 'Windows', 'Android', 'iPadOS', 'Switch', 'PS5'],
    materials: 'Full Aluminum',
    inputs: ['USB-C x2', 'Mini HDMI'],
    customImage: singleImg,
    specMatrix: [
      { icon: 'Cable', title: '1 USB-C cable required', subtitle: 'Display + Power Passthrough' },
      { icon: 'Monitor', title: '16.0" 16:10 IPS', subtitle: 'Display Size' },
      { icon: 'Sparkles', title: '2.5K 120Hz Retina', subtitle: 'Resolution' },
      { icon: 'Laptop', title: 'Mac, Win, iPad, Consoles', subtitle: 'Universal Support' },
      { icon: 'Download', title: 'Zero Software Needed', subtitle: 'Pure Plug & Play' },
      { icon: 'Layers', title: 'Aviation Aluminum', subtitle: 'Materials' }
    ],
    idealFor: 'Everyday multitasking, coding, travel, gaming',
    highlightSpecs: [
      'Featherlight 620g CNC aluminum unibody',
      '2.5K QHD 120Hz high refresh rate screen',
      'Dual full-function Type-C ports with 65W passthrough charging'
    ],
    features: [
      {
        title: 'True Single-Cable Freedom',
        description: 'Connect directly to your laptop or phone with one Type-C cable for instant display.'
      }
    ]
  },
  {
    id: 'single-flex-touch-15',
    name: 'Single Flex Touch 15.6"',
    series: 'Single Monitors',
    badge: '10-Point Touch',
    isBestSeller: false,
    tagline: 'Responsive 10-point capacitive touchscreen monitor for creative notes and stylus.',
    screenSize: '15.6" Touch Display',
    resolution: 'Full HD 1080p',
    panelType: 'Glossy IPS Touch Panel',
    refreshRate: '60Hz',
    brightness: '450 nits',
    weight: '710g (1.56 lbs)',
    thickness: '4.8mm',
    aspectRatio: '16:9',
    colorGamut: '100% sRGB',
    connection: '1 USB-C cable required',
    hingeType: 'Magnetic Protective Stand Cover',
    price: 219,
    originalPrice: 289,
    discountPercentage: 24,
    rating: 4.7,
    reviewCount: 380,
    availableColors: [{ name: 'Matte Black', hex: '#18181B' }],
    accentColor: '#EF4444',
    inStock: true,
    availableOnAmazon: true,
    cablesRequiredCount: 1,
    softwareRequired: false,
    supportedOS: ['MacOS', 'Windows', 'Android'],
    materials: 'Full Aluminum',
    inputs: ['USB-C x2', 'Mini HDMI', 'Audio 3.5mm'],
    customImage: singleImg,
    specMatrix: [
      { icon: 'Cable', title: '1 USB-C cable required', subtitle: 'Touch + Video + Power' },
      { icon: 'Monitor', title: '15.6" Capacitive Touch', subtitle: 'Display Size' },
      { icon: 'Sparkles', title: '1080p Full HD', subtitle: 'Resolution' },
      { icon: 'Laptop', title: 'Mac, Win, Android', subtitle: 'Universal Support' },
      { icon: 'Download', title: 'Driver-Free', subtitle: 'Plug & Play' },
      { icon: 'Layers', title: 'Full Aluminum', subtitle: 'Materials' }
    ],
    idealFor: 'Designers, Presenters, Note Takers',
    highlightSpecs: ['10-point touch gesture support', 'Stereo built-in dual speakers', 'Magnetic smart cover included'],
    features: [{ title: 'Intuitive Direct Touch', description: 'Annotate PDFs, zoom blueprints, and swipe presentations natively.' }]
  }
];

// Fallback compatibility
export const SINGLE_SCREEN_PRODUCTS = TRIPLE_MONITOR_PRODUCTS;

export const WORKSPACE_SCENARIOS: WorkspaceApp[] = [
  {
    id: 'code-docs',
    name: 'Developer & Engineering',
    icon: 'Code2',
    category: 'Development',
    laptopContent: {
      title: 'VS Code · React Architecture',
      description: 'Active IDE Workspace & Terminal',
      tags: ['VS Code', 'TypeScript', 'Node.js']
    },
    anykingContent: {
      title: 'API Reference & Live Preview',
      description: 'Real-time hot reloader & Figma spec',
      tags: ['Docs', 'Figma', 'Simulator']
    }
  },
  {
    id: 'creator-studio',
    name: 'Creative Studio & Grading',
    icon: 'Palette',
    category: 'Creative',
    laptopContent: {
      title: 'Premiere Pro Timeline',
      description: 'Multi-track 4K ProRes Editing',
      tags: ['Timeline', 'Audio Scopes']
    },
    anykingContent: {
      title: 'Full 10-Bit Color LUT Scope',
      description: 'Hardware calibrated reference monitor',
      tags: ['Preview', 'Color LUT', 'Bin']
    }
  },
  {
    id: 'trading-finance',
    name: 'Day Trading & Multi-Asset Finance',
    icon: 'TrendingUp',
    category: 'Finance',
    laptopContent: {
      title: 'Bloomberg Terminal & Order Book',
      description: 'Level 2 Depth & Realtime Tape',
      tags: ['Order Book', 'Execution']
    },
    anykingContent: {
      title: 'Multi-Chart 120Hz Candlesticks',
      description: 'Instant zero-latency telemetry',
      tags: ['Candlesticks', 'News Feed', 'Alerts']
    }
  },
  {
    id: 'executive-multitasking',
    name: 'Executive & Communications',
    icon: 'FileText',
    category: 'Productivity',
    laptopContent: {
      title: 'Google Meet 4K Grid',
      description: 'Live board presentation deck',
      tags: ['Meeting', 'Keynote']
    },
    anykingContent: {
      title: 'Slack, Notion & Meeting Notes',
      description: 'Always-in-sight active agenda',
      tags: ['Slack', 'Notion', 'Calendar']
    }
  }
];
