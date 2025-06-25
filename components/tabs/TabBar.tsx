import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { getIconForTab } from "../../utils/tabUtils";
import { TabPreview } from "./TabPreview";
import { X } from "lucide-react";
import type { Tab } from "../../hooks/useTabManager";

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

export function TabBar({ tabs, activeTab, onTabClick, onTabClose }: TabBarProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [previewTab, setPreviewTab] = useState<Tab | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [tabPosition, setTabPosition] = useState<{ x: number; y: number } | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleMouseEnter = (e: React.MouseEvent, tab: Tab) => {
    if (activeTab === tab.id) return; // Don't show preview for active tab
    
    const rect = e.currentTarget.getBoundingClientRect();
    setTabPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom
    });
    
    setPreviewTab(tab);

    const timeout = setTimeout(() => {
      setShowPreview(true);
    }, 800); // 800ms delay like the original
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowPreview(false);
    setPreviewTab(null);
  };

  if (tabs.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex items-center px-4 py-[7px] bg-neutral-50/50 border-b border-neutral-200/70 overflow-x-auto scrollbar-hide z-tabs px-[14px] bg-[rgba(244,246,246,0.5)]">
        <Tabs value={activeTab} onValueChange={onTabClick} className="w-full">
          <TabsList className="h-auto p-1 bg-muted/50 w-fit gap-1">
            {tabs.map((tab) => {
              const IconComponent = getIconForTab(tab.id, tab.title);
              
              return (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id}
                  className="relative flex items-center gap-2 px-3 py-2 h-auto text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-200 whitespace-nowrap"
                  onMouseEnter={(e) => handleMouseEnter(e, tab)}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconComponent className="w-4 h-4 shrink-0" />
                  <span className="min-w-0 truncate">{tab.title}</span>
                  {tab.closeable && (
                    <span
                      className="ml-1 p-0.5 rounded-sm opacity-70 hover:opacity-100 hover:bg-muted/50 transition-all duration-150 shrink-0 cursor-pointer inline-flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        onTabClose(tab.id);
                      }}
                      onMouseEnter={(e) => handleMouseEnter(e, tab)}
                      onMouseLeave={handleMouseLeave}
                      aria-label={`Close ${tab.title} tab`}
                      title={`Close ${tab.title}`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          e.stopPropagation();
                          onTabClose(tab.id);
                        }
                      }}
                    >
                      <X className="w-3 h-3" />
                    </span>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>

      {/* Tab Preview */}
      {previewTab && (
        <TabPreview 
          tab={previewTab}
          show={showPreview && activeTab !== previewTab.id}
          position={tabPosition}
        />
      )}
    </>
  );
}