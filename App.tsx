/*
 * Main App Component - Optimized and modular structure
 * Features: Tab management, sidebar navigation, search functionality
 */

import imgBody from "figma:asset/33f7db97f407dbe87d95e2058760fb07eca5d237.png";

// Layout Components
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { TooltipProvider } from "./components/ui/tooltip";
import { AppSidebar } from "./components/AppSidebar";
import { TopNavigation } from "./components/TopNavigation";
import Content from "./components/Content";

// Toast notifications
import { Toaster } from "sonner@2.0.3";

// Custom Hook
import { useTabManager } from "./hooks/useTabManager";

export default function App() {
  const {
    activeTab,
    tabs,
    addNewTab,
    handleTabClick,
    handleTabClose
  } = useTabManager();

  // Get current tab info for breadcrumb
  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="h-screen w-full flex" data-name="App">
          {/* Left Sidebar */}
          <AppSidebar onAddTab={addNewTab} />
          
          {/* Main Content Area */}
          <SidebarInset className="flex-1 flex flex-col min-w-0 w-full">
            {/* Background Image Container */}
            <div 
              className="flex-1 flex flex-col bg-center bg-cover bg-no-repeat overflow-hidden"
              style={{ backgroundImage: `url('${imgBody}')` }}
            >
              {/* Top Navigation */}
              <TopNavigation 
                onOpenTab={addNewTab} 
                currentTab={currentTab}
              />
              
              {/* Content Area with Tabs */}
              <div className="flex-1 bg-neutral-100/95 min-h-0 overflow-hidden">
                <Content 
                  activeTab={activeTab}
                  tabs={tabs}
                  onTabClick={handleTabClick}
                  onTabClose={handleTabClose}
                  onOpenTab={addNewTab}
                />
              </div>
            </div>
          </SidebarInset>
        </div>
        
        {/* Toast Notifications */}
        <Toaster 
          position="top-right"
          richColors
          expand={true}
          duration={4000}
        />
      </SidebarProvider>
    </TooltipProvider>
  );
}