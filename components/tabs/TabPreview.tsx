import { Portal } from "../common/Portal";
import { getIconForTab, getTabPreviewContent } from "../../utils/tabUtils";
import type { Tab } from "../../hooks/useTabManager";

interface TabPreviewProps {
  tab: Tab;
  show: boolean;
  position: { x: number; y: number } | null;
}

export function TabPreview({ tab, show, position }: TabPreviewProps) {
  const IconComponent = getIconForTab(tab.id, tab.title);
  const previewContent = getTabPreviewContent(tab.id, tab.title);

  if (!position) return null;

  return (
    <Portal show={show}>
      <div 
        className="fixed w-80 bg-white rounded-lg shadow-2xl border border-neutral-200 p-4 transition-all duration-300 opacity-100 scale-100 pointer-events-none z-tab-preview"
        style={{ 
          left: `${position.x - 160}px`, // Center horizontally
          top: `${position.y + 16}px`, // Position below tab
        }}
      >
        {/* Preview Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <IconComponent className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-neutral-900 text-sm">{tab.title}</h4>
            <p className="text-xs text-neutral-600 mt-1">{previewContent.description}</p>
          </div>
        </div>

        {/* Preview Content */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-neutral-700 mb-2">Key Features:</div>
          <div className="grid grid-cols-2 gap-2">
            {previewContent.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-neutral-600">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Preview Mock */}
        <div className="mt-3 h-16 bg-gradient-to-br from-blue-50 to-neutral-50 rounded border border-neutral-100 flex items-center justify-center">
          <div className="text-xs text-neutral-400 flex items-center gap-1">
            <IconComponent className="w-3 h-3" />
            Content Preview
          </div>
        </div>

        {/* Preview Footer */}
        <div className="mt-3 pt-2 border-t border-neutral-100 flex justify-between items-center">
          <span className="text-xs text-neutral-500">Click to open</span>
          <div className="flex items-center gap-1 text-xs text-neutral-400">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            Available
          </div>
        </div>

        {/* Arrow Pointer */}
        <div 
          className="absolute w-4 h-4 bg-white border-l border-t border-neutral-200"
          style={{
            top: '-8px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)'
          }}
        />
      </div>
    </Portal>
  );
}