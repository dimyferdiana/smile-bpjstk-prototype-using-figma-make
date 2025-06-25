import { getIconForTab } from "../../utils/tabUtils";
import { X } from "lucide-react";
import type { Tab } from "../../hooks/useTabManager";

interface TabItemProps {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
  onClose?: () => void;
}

/**
 * Legacy TabItem component - replaced by ShadCN Tabs integration in TabBar
 * Keeping for potential future use or as a fallback
 */
export function TabItem({ tab, isActive, onClick, onClose }: TabItemProps) {
  const IconComponent = getIconForTab(tab.id, tab.title);

  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive 
            ? 'bg-background text-foreground shadow-sm border border-border' 
            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
        }`}
        aria-label={`${tab.title} tab`}
      >
        <IconComponent className="w-4 h-4" />
        <span className="whitespace-nowrap">{tab.title}</span>
        
        {tab.closeable && (
          <button
            className="ml-1 p-0.5 rounded-sm opacity-70 hover:opacity-100 hover:bg-muted/50 transition-all duration-150"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            aria-label={`Close ${tab.title} tab`}
            title={`Close ${tab.title}`}
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </button>
    </div>
  );
}