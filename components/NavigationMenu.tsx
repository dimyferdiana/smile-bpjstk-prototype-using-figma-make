/*
 * NavigationMenu Component
 * Modular navigation menu with collapsible items and blue indicators
 */

import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { 
  SidebarProvider,
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarMenuSub, 
  SidebarMenuSubItem 
} from "./ui/sidebar";
import imgImage18 from "figma:asset/54f58dfce07ac3c06360b64284e6eca5888c91e2.png";
import imgImage19 from "figma:asset/3a855f55584f3f6d9fdb58b914cfe71e8077db94.png";

interface MenuItem {
  icon: string;
  text: string;
  hasChildren: boolean;
  children?: { icon: string; text: string }[];
}

interface NavigationMenuProps {
  isExpanded: boolean;
  menuItems?: MenuItem[];
  onItemClick?: (itemText: string) => void;
  onChildClick?: (parentText: string, childText: string) => void;
}

const defaultMenuItems: MenuItem[] = [
  { 
    icon: imgImage18, 
    text: "Menu Favorit",
    hasChildren: false
  },
  { 
    icon: imgImage19, 
    text: "UI Components",
    hasChildren: true,
    children: [
      { icon: imgImage19, text: "Components" },
      { icon: imgImage19, text: "ShadCNUI" }
    ]
  },
  { 
    icon: imgImage19, 
    text: "Keuangan",
    hasChildren: true,
    children: [
      { icon: imgImage19, text: "Memo Pencairan Anggaran" }
    ]
  },
  { 
    icon: imgImage19, 
    text: "Informasi Profile Kepesertaan",
    hasChildren: true,
    children: [
      { icon: imgImage19, text: "Data Pribadi" },
      { icon: imgImage19, text: "Riwayat Kepesertaan" }
    ]
  },
  { 
    icon: imgImage19, 
    text: "Kepesertaan",
    hasChildren: true,
    children: [
      { icon: imgImage19, text: "Pendaftaran Baru" },
      { icon: imgImage19, text: "Update Data" },
      { icon: imgImage19, text: "Status Kepesertaan" }
    ]
  },
  { 
    icon: imgImage19, 
    text: "Pelayanan",
    hasChildren: false
  },
  { 
    icon: imgImage19, 
    text: "e-Channel",
    hasChildren: true,
    children: [
      { icon: imgImage19, text: "Mobile App" },
      { icon: imgImage19, text: "Web Portal" }
    ]
  },
  { 
    icon: imgImage19, 
    text: "Data Pendukung",
    hasChildren: false
  },
  { 
    icon: imgImage19, 
    text: "Open Tracking Keuangan",
    hasChildren: false
  },
  { 
    icon: imgImage19, 
    text: "Panduan Pengguna",
    hasChildren: false
  },
];

interface MenuItemComponentProps {
  item: MenuItem;
  index: number;
  isExpanded: boolean;
  onItemClick?: (itemText: string) => void;
  onChildClick?: (parentText: string, childText: string) => void;
}

function MenuItemComponent({ 
  item, 
  index, 
  isExpanded, 
  onItemClick, 
  onChildClick 
}: MenuItemComponentProps) {
  if (item.hasChildren) {
    return (
      <Collapsible defaultOpen={false} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton 
              className="relative shrink-0 w-full cursor-pointer hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50 data-[state=open]:bg-gray-50"
            >
              <div className="box-border content-stretch flex flex-row items-center justify-between p-2 relative w-full">
                <div className="flex flex-row items-center gap-2 relative">
                  <div className="relative shrink-0" data-name={`Icons/${item.text.replace(/\s/g, '-')}`}>
                    <div
                      className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
                      data-name={`image-${index}`}
                      style={{ backgroundImage: `url('${item.icon}')` }}
                    />
                  </div>
                  <div className={`font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[13px] text-left transition-all duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0 overflow-hidden w-0"
                  }`}>
                    <p className="block whitespace-nowrap">{item.text}</p>
                  </div>
                </div>
                <div className={`transition-all duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}>
                  <ChevronRight className="w-4 h-4 text-blue-600 shrink-0 group-data-[state=open]/collapsible:rotate-90 transition-transform duration-200" />
                </div>
              </div>
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children?.map((child, childIndex) => (
                <SidebarMenuSubItem key={childIndex}>
                  <SidebarMenuButton 
                    size="sm"
                    className="relative shrink-0 w-full cursor-pointer hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50 ml-4"
                    onClick={() => onChildClick?.(item.text, child.text)}
                  >
                    <div className="box-border content-stretch flex flex-row items-center justify-start p-1 relative w-full">
                      <div className="flex flex-row items-center gap-2 relative">
                        <div className="relative shrink-0" data-name={`Icons/${child.text.replace(/\s/g, '-')}`}>
                          <div
                            className="bg-center bg-cover bg-no-repeat shrink-0 size-3"
                            data-name={`child-image-${childIndex}`}
                            style={{ backgroundImage: `url('${child.icon}')` }}
                          />
                        </div>
                        <div className={`font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[12px] text-left transition-all duration-300 ${
                          isExpanded ? "opacity-100" : "opacity-0 overflow-hidden"
                        }`}>
                          <p className="block whitespace-nowrap">{child.text}</p>
                        </div>
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className="relative shrink-0 w-full cursor-pointer hover:bg-gray-50 hover:shadow-sm active:bg-gray-100 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        onClick={() => onItemClick?.(item.text)}
      >
        <div className="box-border content-stretch flex flex-row items-center justify-start p-2 relative w-full">
          <div className="flex flex-row items-center gap-2 relative">
            <div className="relative shrink-0" data-name={`Icons/${item.text.replace(/\s/g, '-')}`}>
              <div
                className="bg-center bg-cover bg-no-repeat shrink-0 size-4"
                data-name={`image-${index}`}
                style={{ backgroundImage: `url('${item.icon}')` }}
              />
            </div>
            <div className={`font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[13px] text-left transition-all duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 overflow-hidden w-0"
            }`}>
              <p className="block whitespace-nowrap">{item.text}</p>
            </div>
          </div>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default function NavigationMenu({ 
  isExpanded, 
  menuItems = defaultMenuItems,
  onItemClick,
  onChildClick
}: NavigationMenuProps) {
  const handleItemClick = (itemText: string) => {
    console.log(`${itemText} clicked`);
    onItemClick?.(itemText);
  };

  const handleChildClick = (parentText: string, childText: string) => {
    console.log(`${childText} clicked from ${parentText}`);
    
    // Special handling for UI Components children
    if (parentText === "UI Components") {
      // Map child names to their corresponding tab identifiers
      const tabMapping = {
        "Components": "Components",
        "ShadCNUI": "ShadCNUI"
      };
      
      const tabName = tabMapping[childText as keyof typeof tabMapping];
      if (tabName) {
        onItemClick?.(tabName);
        return;
      }
    }
    
    // Default behavior for other child clicks
    onChildClick?.(parentText, childText);
  };

  return (
    <div className={`box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative w-full transition-all duration-300 ${
      isExpanded ? "opacity-100" : "opacity-0"
    }`}>
      <div className="relative shrink-0 w-full" data-name="div">
        <div className="flex flex-col items-end relative size-full">
          <div className="box-border content-stretch flex flex-col items-end justify-start px-4 py-0 relative w-full h-full flex-1 overflow-y-auto max-h-96 pt-[8px] pr-[14px] pb-[0px] pl-[14px]">
            <SidebarProvider>
              <SidebarMenu>
                {menuItems.map((item, index) => (
                  <MenuItemComponent
                    key={index}
                    item={item}
                    index={index}
                    isExpanded={isExpanded}
                    onItemClick={handleItemClick}
                    onChildClick={handleChildClick}
                  />
                ))}
              </SidebarMenu>
            </SidebarProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export { type MenuItem };