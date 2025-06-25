import { useState, useEffect } from "react";
import { Search, Bell, HelpCircle, Home } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "./ui/breadcrumb";
import SearchModal from "./SearchModal";

interface TopNavigationProps {
  onOpenTab?: (title: string) => void;
  currentTab?: {
    id: string;
    title: string;
  };
}

// Breadcrumb mapping for different tabs
const BREADCRUMB_MAPPING: Record<string, Array<{ label: string; href?: string }>> = {
  'beranda': [
    { label: 'Home' }
  ],
  'memo-pencairan-anggaran': [
    { label: 'Home', href: '#' },
    { label: 'Layanan Digital' },
    { label: 'Memo Pencairan Anggaran' }
  ],
  'design-system-hub': [
    { label: 'Home', href: '#' },
    { label: 'Design System Hub' }
  ],
  'colors': [
    { label: 'Home', href: '#' },
    { label: 'Design System', href: '#' },
    { label: 'Colors' }
  ],
  'typography': [
    { label: 'Home', href: '#' },
    { label: 'Design System', href: '#' },
    { label: 'Typography' }
  ],
  'components': [
    { label: 'Home', href: '#' },
    { label: 'Design System', href: '#' },
    { label: 'Components' }
  ],
  'custom-components': [
    { label: 'Home', href: '#' },
    { label: 'Component Library' },
    { label: 'Custom Components' }
  ],
  'layout': [
    { label: 'Home', href: '#' },
    { label: 'Design System', href: '#' },
    { label: 'Layout' }
  ],
  'interactions': [
    { label: 'Home', href: '#' },
    { label: 'Design System', href: '#' },
    { label: 'Interactions' }
  ]
};

function GlobalSearch({ onOpenTab }: { onOpenTab?: (title: string) => void }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  // Detect OS for keyboard shortcut display
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMacOS = /Mac|iPod|iPhone|iPad/.test(userAgent);
    setIsMac(isMacOS);
  }, []);

  // Global keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const shortcutKey = isMac ? '⌘' : 'Ctrl';

  return (
    <>
      <button
        onClick={() => setIsSearchOpen(true)}
        className="relative rounded-lg shrink-0 cursor-pointer bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring px-4 py-2.5 border border-border"
        aria-label="Open search"
      >
        <div className="flex items-center gap-3 min-w-[240px]">
          <Search className="w-4 h-4 text-muted-foreground" />
          <div className="flex-1 text-left">
            <span className="text-sm text-muted-foreground">Search...</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-medium">
              {shortcutKey}
            </kbd>
            <span>+</span>
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-medium">
              K
            </kbd>
          </div>
        </div>
      </button>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenTab={onOpenTab}
      />
    </>
  );
}

function ActionButton({ 
  icon: Icon, 
  label, 
  onClick 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-neutral-200 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label={label}
      title={label}
    >
      <Icon className="w-4 h-4 text-foreground" />
    </button>
  );
}

function DynamicBreadcrumb({ 
  currentTab, 
  onOpenTab 
}: { 
  currentTab?: { id: string; title: string };
  onOpenTab?: (title: string) => void;
}) {
  // Default to home if no current tab
  const tabId = currentTab?.id || 'beranda';
  const breadcrumbItems = BREADCRUMB_MAPPING[tabId] || [{ label: currentTab?.title || 'Home' }];

  const handleBreadcrumbClick = (label: string) => {
    if (onOpenTab) {
      // Map breadcrumb labels to proper tab titles
      const tabMapping: Record<string, string> = {
        'Home': 'Beranda',
        'Design System': 'Design System',
        'Design System Hub': 'Design System',
        'Component Library': 'Custom Components',
        'Layanan Digital': 'Memo Pencairan Anggaran'
      };
      
      const tabTitle = tabMapping[label] || label;
      onOpenTab(tabTitle);
    }
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  asChild
                  className="cursor-pointer"
                  onClick={() => handleBreadcrumbClick(item.label)}
                >
                  <span className="flex items-center gap-1">
                    {item.label === 'Home' && <Home className="w-4 h-4" />}
                    {item.label}
                  </span>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export function TopNavigation({ onOpenTab, currentTab }: TopNavigationProps) {
  return (
    <div className="sticky top-0 z-10 w-full flex items-center justify-between px-4 py-3 bg-background border-b border-border">
      {/* Left side - Sidebar Trigger & Breadcrumb */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
        <DynamicBreadcrumb currentTab={currentTab} onOpenTab={onOpenTab} />
      </div>
      
      {/* Right side - Search and Actions */}
      <div className="flex items-center gap-2">
        <GlobalSearch onOpenTab={onOpenTab} />
        <div className="flex items-center">
          <ActionButton
            icon={Bell}
            label="Notifications"
            onClick={() => console.log('Notifications clicked')}
          />
          <ActionButton
            icon={HelpCircle}
            label="Help & Support"
            onClick={() => console.log('Help clicked')}
          />
        </div>
      </div>
    </div>
  );
}