import { 
  Home, 
  FileText, 
  User, 
  Edit, 
  Database, 
  DollarSign, 
  HelpCircle,
  Settings,
  Layers,
  Grid,
  BarChart,
  Layout,
  Palette
} from "lucide-react";

export interface TabPreviewContent {
  description: string;
  features: string[];
}

export const getIconForTab = (tabId: string, title: string) => {
  const iconMap: { [key: string]: any } = {
    'beranda': Home,
    'components': Layers,
    'memo': DollarSign,
  };
  
  // Pattern matching for titles
  if (title.toLowerCase().includes('component')) return Layers;
  if (title.toLowerCase().includes('design')) return Palette;
  if (title.toLowerCase().includes('form')) return Edit;
  if (title.toLowerCase().includes('table') || title.toLowerCase().includes('data')) return Database;
  if (title.toLowerCase().includes('navigation')) return Layout;
  if (title.toLowerCase().includes('user') || title.toLowerCase().includes('auth')) return User;
  if (title.toLowerCase().includes('chart') || title.toLowerCase().includes('graph')) return BarChart;
  if (title.toLowerCase().includes('keuangan') || title.toLowerCase().includes('finance')) return DollarSign;
  if (title.toLowerCase().includes('help') || title.toLowerCase().includes('doc')) return HelpCircle;
  if (title.toLowerCase().includes('setting')) return Settings;
  
  return iconMap[tabId] || FileText;
};

export const getTabPreviewContent = (tabId: string, title: string): TabPreviewContent => {
  const previewMap: { [key: string]: TabPreviewContent } = {
    'beranda': {
      description: 'Main dashboard with overview and navigation',
      features: ['Dashboard Overview', 'Quick Actions', 'Recent Activities', 'System Status']
    },
    'components': {
      description: 'Complete UI component library showcase',
      features: ['Buttons & Forms', 'Navigation Elements', 'Data Display', 'Feedback Components']
    },
    'memo': {
      description: 'Financial memo and budget disbursement system',
      features: ['Budget Tracking', 'Memo Creation', 'Financial Reports', 'Approval Workflow']
    }
  };

  return previewMap[tabId] || {
    description: `${title} content and functionality`,
    features: ['Content Overview', 'Interactive Elements', 'Data Management', 'User Interface']
  };
};