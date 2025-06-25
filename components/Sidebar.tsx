/*
 * Sidebar Component
 * Contains the collapsible sidebar with navigation menu and user profile
 */

import svgPaths from "../imports/svg-eexj65cku5";
import collapsedSvgPaths from "../imports/svg-lj0lg62l2v";
import SearchComponent from "../imports/Search";
import { Search } from "lucide-react";
import NavigationMenu from "./NavigationMenu";
import imgFotoUser from "figma:asset/aa779ca1216181901e36b7fa9b2cf5644aa73d81.png";
import imgImage22 from "figma:asset/d5629099f26e362fc673a6d9e7c8a8b6156f6c27.png";

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
  onAddTab?: (title: string) => void;
}

function Avatar() {
  return (
    <button
      className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
      data-name="avatar"
      onClick={() => console.log('Avatar clicked')}
      aria-label="User profile"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <div
          className="bg-center bg-cover bg-no-repeat relative shrink-0 size-[66px]"
          data-name="foto user"
          style={{ backgroundImage: `url('${imgFotoUser}')` }}
        >
          <div className="absolute border border-blue-700 border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </button>
  );
}

function UserProfile({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className={`box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-2.5 pt-[5px] px-[5px] relative w-full transition-all duration-300 ${
      isExpanded ? "opacity-100" : "opacity-0"
    }`}>
      <div className="relative shrink-0 w-full" data-name="div">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[5px] relative w-full">
            <div className="relative shrink-0" data-name="div">
              <div className="box-border content-stretch flex flex-col gap-0.5 items-center justify-start p-0 relative">
                <Avatar />
                <div
                  className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-neutral-900 text-[12px] text-center"
                  style={{ width: "min-content" }}
                >
                  <p className="block leading-[1.5]">262741590</p>
                </div>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="div">
              <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
                <div className="relative shrink-0 w-full" data-name="div">
                  <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative text-neutral-900 text-[12px] text-left w-full">
                    <div className="font-['Helvetica_Neue:Bold',_sans-serif] relative shrink-0 w-full">
                      <p className="block leading-[1.5]">Login Sebagai:</p>
                    </div>
                    <div className="font-['Gotham:Book',_sans-serif] relative shrink-0 w-full">
                      <p className="block leading-[1.5]">EKA DESTIKA SANDAKILA</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="div">
                  <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative text-neutral-900 text-[12px] text-left w-full">
                    <div className="font-['Helvetica_Neue:Bold',_sans-serif] relative shrink-0 w-full">
                      <p className="block leading-[1.5]">Role:</p>
                    </div>
                    <div className="font-['Gotham:Book',_sans-serif] relative shrink-0 w-full">
                      <p className="block leading-[1.5]">
                        CSO - Customer Service Officer ( N12 )
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="div">
        <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative text-neutral-900 text-[12px] text-left w-full">
          <div className="font-['Helvetica_Neue:Bold',_sans-serif] relative shrink-0 w-full">
            <p className="block leading-[1.5]">Email:</p>
          </div>
          <div className="font-['Gotham:Book',_sans-serif] relative shrink-0 w-full">
            <p className="block leading-[1.5]">
              eka.destika@bpjsketenagakerjaan.go.idx
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="div">
        <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start leading-[0] not-italic p-0 relative text-neutral-900 text-[12px] text-left w-full">
          <div className="font-['Helvetica_Neue:Bold',_sans-serif] relative shrink-0 w-full">
            <p className="block leading-[1.5]">Informasi Login</p>
          </div>
          <div className="font-['Gotham:Book',_sans-serif] relative shrink-0 w-full">
            <p className="block leading-[1.5]">
              Password expired dalam 12 hari,
              <br />
              tanggal 12-11-2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsIcoFolderGo() {
  return (
    <div className="relative shrink-0" data-name="Icons/ico-folder-go">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
          <div
            className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
            data-name="image 22"
            style={{ backgroundImage: `url('${imgImage22}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function CollapsedAccordion({ onToggle }: { onToggle: () => void }) {
  return (
    <div
      className="basis-0 bg-blue-700 bg-gradient-to-r from-blue-700 to-blue-800 grow min-h-px min-w-px relative shrink-0 w-full transition-all duration-200 hover:opacity-90"
      data-name="accordion"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <button
              onClick={onToggle}
              className="bg-white/20 hover:bg-white/30 rounded-full p-1 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 shrink-0 cursor-pointer"
              aria-label="Expand sidebar"
            >
              <svg
                className="w-3 h-3 text-white transition-transform duration-300 rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex h-[61.422px] items-center justify-center relative shrink-0 w-[15px]">
            <div className="flex-none rotate-[90deg]">
              <div className="font-['Arial:Bold',_sans-serif] leading-[0] not-italic relative text-white text-[13px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">
                  Navigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({ isExpanded, onToggle, onAddTab }: SidebarProps) {
  // Navigation menu event handlers
  const handleMenuItemClick = (itemText: string) => {
    console.log(`Menu item clicked: ${itemText}`);
    
    // Create tab for menu items that don't have children
    // This includes the "Components" and "ShadCNUI" items that come from the UI Components parent
    if (onAddTab) {
      onAddTab(itemText);
    }
  };

  const handleSubMenuItemClick = (parentText: string, childText: string) => {
    console.log(`Sub-menu item clicked: ${childText} from ${parentText}`);
    // Always create new tab for sub-menu items (child items)
    if (onAddTab) {
      onAddTab(childText);
    }
  };

  if (!isExpanded) {
    return (
      <div
        className="bg-neutral-50 h-full relative shrink-0 transition-all duration-300 overflow-hidden inline-flex"
        data-name="sidebar—collapsed"
      >
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="div">
            <div className="box-border content-stretch flex flex-col h-full items-center justify-start p-0 relative">
              <CollapsedAccordion onToggle={onToggle} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-neutral-50 h-full relative shrink-0 transition-all duration-300 overflow-hidden w-[270px]"
      data-name="sidebar"
    >
      <div className="box-border content-stretch flex flex-col h-full items-start justify-start relative w-full p-[0px] m-[0px]">
        {/* Navigation Header */}
        <div className="relative shrink-0 w-full" data-name="navigation-header">
          <div className="relative shrink-0 w-full bg-blue-700 bg-gradient-to-r from-blue-700 to-blue-800">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[10px] relative w-full">
                
                {/* Icon Folder */}
                <div className="relative shrink-0" data-name="Icons/ico-folder-go">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
                      <div
                        className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
                        data-name="image 22"
                        style={{ backgroundImage: `url('${imgImage22}')` }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <div className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-white text-[13px] text-left">
                  <p className="block leading-[normal]">Navigation</p>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={onToggle}
                  className="relative shrink-0 size-6 cursor-pointer hover:bg-white/20 rounded p-1 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
                >
                  <svg
                    className={`w-4 h-4 text-white transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="bg-neutral-50 relative shrink-0 w-full" data-name="navigation-content">
          <div className="relative size-full">
            <UserProfile isExpanded={isExpanded} />
          </div>
        </div>
        
        {/* Pilihan Form Header */}
        <div className="relative shrink-0 w-full" data-name="forms-header">
          <div className="relative shrink-0 w-full bg-blue-700 bg-gradient-to-r from-blue-700 to-blue-800">
            <div className="flex flex-row items-center relative size-full">
              {/* The beginning of blue section title */}
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[10px] relative w-full">
                
                {/* Icon Folder */}
                <div className="relative shrink-0" data-name="Icons/ico-folder-go">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative">
                      <div
                        className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
                        data-name="image 22"
                        style={{ backgroundImage: `url('${imgImage22}')` }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <div className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-white text-[13px] text-left">
                  <p className="block leading-[normal]">Pilihan Form</p>
                </div>

                {/* Search Button */}
                <button
                  className="relative shrink-0 size-6 cursor-pointer hover:bg-white/20 rounded p-1 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                  data-name="search-button"
                  onClick={() => console.log('Search clicked')}
                  aria-label="Search forms"
                >
                  <Search className="w-4 h-4 text-white" />
                </button>
              {/* End of blue section title */}
              </div>
            </div>
          </div>
        </div>

        {/* Pilihan Form Content */}
        <div className="bg-neutral-50 relative shrink-0 w-full" data-name="forms-content">
          <div className="relative size-full">
            <NavigationMenu 
              isExpanded={isExpanded}
              onItemClick={handleMenuItemClick}
              onChildClick={handleSubMenuItemClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}