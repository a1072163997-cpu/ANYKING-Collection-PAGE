export type AnimationStep = 0 | 1 | 2 | 3;

export type ViewAngle = 'front' | 'angle' | 'hinge' | 'top';

export type WorkspacePreset = 'code' | 'creative' | 'finance' | 'doc';

export interface CardSpecItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ProductModel {
  id: string;
  name: string;
  series: string;
  badge?: string;
  tagline: string;
  screenSize: string;
  resolution: string;
  panelType: string;
  refreshRate: string;
  brightness: string;
  weight: string;
  thickness: string;
  aspectRatio: string;
  colorGamut: string;
  connection: string;
  hingeType: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  availableColors?: { name: string; hex: string }[];
  highlightSpecs: string[];
  idealFor: string;
  accentColor: string;
  inStock: boolean;
  availableOnAmazon?: boolean;
  cablesRequiredCount?: number;
  softwareRequired?: boolean;
  supportedOS?: string[];
  materials?: string;
  inputs?: string[];
  customImage?: string;
  specMatrix?: CardSpecItem[];
  features: {
    title: string;
    description: string;
  }[];
}

export interface WorkspaceApp {
  id: string;
  name: string;
  icon: string;
  category: string;
  laptopContent: {
    title: string;
    description: string;
    tags: string[];
  };
  anykingContent: {
    title: string;
    description: string;
    tags: string[];
  };
}
