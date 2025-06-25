import { 
  Bell, 
  HelpCircle, 
  Home, 
  BookOpen, 
  Layout, 
  FileText, 
  ChevronRight,
  Settings,
  Users,
  Building,
  Target,
  Briefcase,
  Plane,
  MoreHorizontal,
  User,
  Palette,
  Layers,
  Grid,
  Mouse,
  Type,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Calendar,
  MessageSquare,
  DollarSign,
  Receipt,
  CreditCard,
  Banknote,
  Calculator,
  PiggyBank
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { TeamSwitcher } from "./TeamSwitcher";

// Import the new profile image
import profileImage from "figma:asset/0ac38acc3a7057730a12974203e13ec44e2a8432.png";

// Navigation Data
const navigation = [
  {
    title: "Beranda",
    icon: Home,
    isActive: true
  },
  {
    title: "Layanan Digital",
    icon: Layout,
    items: [
      { title: "Memo Pencairan Anggaran", icon: FileText },
      { title: "Laporan Keuangan", icon: BarChart3 },
      { title: "Dashboard Analytics", icon: BarChart3 },
      { title: "Manajemen User", icon: Users }
    ]
  },
  {
    title: "Keuangan",
    icon: DollarSign,
    items: [
      { title: "Anggaran Terpusat", icon: PiggyBank },
      { title: "BYMHD", icon: Calculator },
      { title: "Beban Investasi", icon: CreditCard },
      { title: "Klaim Langsung", icon: Receipt },
      { title: "Persekot Kerja", icon: Banknote },
      { title: "Termin", icon: FileText }
    ]
  },
  {
    title: "Pelaporan",
    icon: FileText,
    items: [
      { title: "Laporan Bulanan", icon: Calendar },
      { title: "Laporan Tahunan", icon: FileText },
      { title: "Audit Trail", icon: AlertCircle }
    ]
  },
  {
    title: "Komunikasi",
    icon: MessageSquare,
    items: [
      { title: "Pesan Internal", icon: MessageSquare },
      { title: "Notifikasi", icon: Bell },
      { title: "Pengumuman", icon: AlertCircle }
    ]
  }
];

const designSystemNavigation = [
  {
    title: "Design System",
    icon: Palette,
    items: [
      { title: "Colors", icon: Palette },
      { title: "Typography", icon: Type },
      { title: "Components", icon: Grid },
      { title: "Layout", icon: Layout },
      { title: "Interactions", icon: Mouse }
    ]
  },
  {
    title: "Component Library", 
    icon: Layers,
    items: [
      { title: "Custom Components", icon: Grid }
    ]
  }
];

interface AppSidebarProps {
  onAddTab: (tabName: string, tabType: string) => void;
}

export function AppSidebar({ onAddTab }: AppSidebarProps) {
  const handleMenuClick = (title: string) => {
    // Map titles to tab types for consistency
    const tabTypeMap: { [key: string]: string } = {
      "Beranda": "beranda",
      "Memo Pencairan Anggaran": "memo-pencairan-anggaran",
      "Colors": "colors",
      "Typography": "typography",
      "Components": "components",
      "Custom Components": "custom-components",
      "Layout": "layout",
      "Interactions": "interactions",
      "Design System": "design-system-hub"
    };

    const tabType = tabTypeMap[title] || title.toLowerCase().replace(/\s+/g, '-');
    onAddTab(title, tabType);
  };

  const handleAddTeam = () => {
    // Handle add team functionality
    console.log("Add team clicked");
  };

  return (
    <Sidebar variant="inset" className="z-sidebar">
      <SidebarHeader>
        <TeamSwitcher onAddTeam={handleAddTeam} />
      </SidebarHeader>
      
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarMenu>
            {navigation.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.items ? (
                  <Collapsible asChild defaultOpen={item.title === "Layanan Digital"}>
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton 
                                asChild
                                onClick={() => handleMenuClick(subItem.title)}
                              >
                                <button className="w-full">
                                  <subItem.icon />
                                  <span>{subItem.title}</span>
                                </button>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  </Collapsible>
                ) : (
                  <SidebarMenuButton 
                    tooltip={item.title} 
                    isActive={item.isActive}
                    onClick={() => handleMenuClick(item.title)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Design System Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Design System</SidebarGroupLabel>
          <SidebarMenu>
            {designSystemNavigation.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Collapsible asChild defaultOpen={item.title === "Design System"}>
                  <>
                    <div className="flex">
                      <SidebarMenuButton 
                        tooltip={item.title}
                        onClick={() => handleMenuClick(item.title)}
                        className="flex-1"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={`Expand ${item.title}`} className="w-8 p-0">
                          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton 
                              asChild
                              onClick={() => handleMenuClick(subItem.title)}
                            >
                              <button className="w-full">
                                <subItem.icon />
                                <span>{subItem.title}</span>
                              </button>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                </Collapsible>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={profileImage} alt="Dimy Ferdiana" />
                <AvatarFallback className="rounded-lg">DF</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Dimy Ferdiana</span>
                <span className="truncate text-xs">dimyferdi@gmail.com</span>
              </div>
              <MoreHorizontal className="ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}