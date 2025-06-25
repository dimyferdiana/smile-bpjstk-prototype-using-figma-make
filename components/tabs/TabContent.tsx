import { FileText, Layers, DollarSign, Grid, HelpCircle } from "lucide-react";
import ComponentLibrary from "../ComponentLibrary";
import ColorPalettes from "../ColorPalettes";
import Typography from "../Typography";
import DesignSystemHub from "../DesignSystemHub";
import ContentMemoPencairanAnggaran from "../../imports/ContentMemoPencairanAnggaran";
import { BerandaContent } from "./BerandaContent";

interface TabContentProps {
  activeTab: string;
  onOpenTab: (title: string, tabType?: string) => void;
}

function DefaultTabContent({ tabId, onOpenTab }: { tabId: string; onOpenTab: (title: string, tabType?: string) => void }) {
  return (
    <div className="h-full flex items-center justify-center bg-neutral-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-neutral-800 mb-2">
          Tab Content
        </h3>
        <p className="text-neutral-600 mb-4">
          This tab ({tabId}) contains custom content and functionality.
        </p>
        <button
          onClick={() => onOpenTab('Components')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Explore Components
        </button>
      </div>
    </div>
  );
}

export function TabContent({ activeTab, onOpenTab }: TabContentProps) {
  const getContentForTab = () => {
    switch (activeTab) {
      case 'beranda':
        return <BerandaContent onOpenTab={onOpenTab} />;
      case 'components':
      case 'shadcn-ui':
        return <ComponentLibrary onOpenTab={onOpenTab} />;
      case 'memo':
      case 'memo-pencairan-anggaran':
        return <ContentMemoPencairanAnggaran />;
      case 'colors':
      case 'color-system':
      case 'Color System':
        return <ColorPalettes onOpenTab={onOpenTab} />;
      case 'typography':
      case 'Typography':
        return <Typography />;
      case 'design-system-hub':
        return <DesignSystemHub onOpenTab={onOpenTab} />;
      default:
        return <DefaultTabContent tabId={activeTab} onOpenTab={onOpenTab} />;
    }
  };

  return (
    <div className="flex-1 overflow-hidden">
      {getContentForTab()}
    </div>
  );
}