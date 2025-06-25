import { TabBar } from "./tabs/TabBar";
import { TabContent } from "./tabs/TabContent";
import type { Tab } from "../hooks/useTabManager";

// Export Tab type for backward compatibility
export type { Tab };

interface ContentProps {
  activeTab: string;
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  onOpenTab: (title: string, tabType?: string) => void;
}

export default function Content({ 
  activeTab, 
  tabs, 
  onTabClick, 
  onTabClose, 
  onOpenTab 
}: ContentProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <TabBar 
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={onTabClick}
        onTabClose={onTabClose}
      />
      <TabContent activeTab={activeTab} onOpenTab={onOpenTab} />
    </div>
  );
}