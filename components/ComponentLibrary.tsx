import { useState } from "react";
import { 
  Search, 
  Copy, 
  Check, 
  ChevronDown, 
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  Heart,
  Settings,
  Filter,
  Download,
  Upload,
  Play,
  Pause,
  Volume2,
  Bell,
  Shield,
  Trash2,
  Edit,
  Plus,
  Minus,
  X,
  Home,
  Grid,
  Layout,
  Mouse,
  Type,
  Palette,
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  ChevronRight,
  MoreHorizontal,
  ChevronsUpDown,
  Command,
  FileText,
  Layers,
  BarChart3,
  PieChart,
  TrendingUp,
  ArrowUpDown,
  SlidersHorizontal,
  PanelLeft,
  Menu,
  Maximize2,
  Volume1,
  VolumeX
} from "lucide-react";

// Import ALL UI components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { AspectRatio } from "./ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Checkbox } from "./ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "./ui/context-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Input } from "./ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Label } from "./ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { ScrollArea } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Skeleton } from "./ui/skeleton";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import { Toggle } from "./ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { toast } from "sonner@2.0.3";

interface ComponentLibraryProps {
  onOpenTab?: (title: string) => void;
}

interface ComponentExample {
  id: string;
  name: string;
  category: string;
  description: string;
  component: React.ReactNode;
  code: string;
  variants?: React.ReactNode[];
}

const componentCategories = [
  { id: "all", name: "All Components", icon: Grid },
  { id: "navigation", name: "Navigation", icon: Home },
  { id: "forms", name: "Forms", icon: Type },
  { id: "data-display", name: "Data Display", icon: Layout },
  { id: "feedback", name: "Feedback", icon: AlertCircle },
  { id: "layout", name: "Layout", icon: Mouse },
  { id: "media", name: "Media", icon: Palette },
  { id: "overlay", name: "Overlay", icon: Layers }
];

export default function ComponentLibrary({ onOpenTab }: ComponentLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Complete component examples data
  const componentExamples: ComponentExample[] = [
    {
      id: "accordion",
      name: "Accordion",
      category: "layout",
      description: "A vertically stacked set of interactive headings that each reveal a section of content.",
      component: (
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
      code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
</Accordion>`
    },
    {
      id: "alert",
      name: "Alert",
      category: "feedback",
      description: "Displays a callout for user attention.",
      component: (
        <div className="space-y-4 max-w-2xl">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        </div>
      ),
      code: `<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`
    },
    {
      id: "alert-dialog",
      name: "Alert Dialog",
      category: "overlay",
      description: "A modal dialog that interrupts the user with important content and expects a response.",
      component: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`
    },
    {
      id: "aspect-ratio",
      name: "Aspect Ratio",
      category: "layout",
      description: "Displays content within a desired ratio.",
      component: (
        <div className="w-full max-w-sm">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      ),
      code: `<AspectRatio ratio={16 / 9}>
  <img src="..." alt="Image" className="w-full h-full object-cover" />
</AspectRatio>`
    },
    {
      id: "avatar",
      name: "Avatar",
      category: "media",
      description: "An image element with a fallback for representing the user.",
      component: (
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      ),
      code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`
    },
    {
      id: "badge",
      name: "Badge",
      category: "data-display",
      description: "Displays a badge or a component that looks like a badge.",
      component: (
        <div className="flex gap-2 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
      code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`
    },
    {
      id: "breadcrumb",
      name: "Breadcrumb",
      category: "navigation",
      description: "Displays the path to the current resource using a hierarchy of links.",
      component: (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ),
      code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`
    },
    {
      id: "button",
      name: "Button",
      category: "forms",
      description: "Displays a button or a component that looks like a button.",
      component: (
        <div className="flex gap-2 flex-wrap">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      ),
      code: `<Button>Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`
    },
    {
      id: "calendar",
      name: "Calendar",
      category: "forms",
      description: "A date field component that allows users to enter and edit date.",
      component: (
        <CalendarComponent
          mode="single"
          selected={new Date()}
          className="rounded-md border"
        />
      ),
      code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`
    },
    {
      id: "card",
      name: "Card",
      category: "layout",
      description: "Displays a card with header, content, and footer.",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area where you can put any content.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </div>
      ),
      code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content area.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`
    },
    {
      id: "carousel",
      name: "Carousel",
      category: "media",
      description: "A carousel with motion and swipe built using Embla.",
      component: (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
      code: `<Carousel>
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent>Content 1</CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
    },
    {
      id: "checkbox",
      name: "Checkbox",
      category: "forms",
      description: "A control that allows the user to toggle between checked and not checked.",
      component: (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" defaultChecked />
            <Label htmlFor="marketing">Receive marketing emails</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled checkbox</Label>
          </div>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`
    },
    {
      id: "collapsible",
      name: "Collapsible",
      category: "layout",
      description: "An interactive component which expands/collapses a panel.",
      component: (
        <Collapsible className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/primitives</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/colors</div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@stitches/react</div>
          </CollapsibleContent>
        </Collapsible>
      ),
      code: `<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </CollapsibleContent>
</Collapsible>`
    },
    {
      id: "command",
      name: "Command",
      category: "navigation",
      description: "Fast, composable, unstyled command menu for React.",
      component: (
        <Command className="rounded-lg border shadow-md max-w-sm">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      ),
      code: `<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandItem>Calendar</CommandItem>
    <CommandItem>Search Emoji</CommandItem>
    <CommandItem>Settings</CommandItem>
  </CommandList>
</Command>`
    },
    {
      id: "context-menu",
      name: "Context Menu",
      category: "overlay",
      description: "Displays a menu to the user triggered by right-click.",
      component: (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>
              Back
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Forward
            </ContextMenuItem>
            <ContextMenuItem inset>
              Reload
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ),
      code: `<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`
    },
    {
      id: "dialog",
      name: "Dialog",
      category: "overlay",
      description: "A window overlaid on either the primary window or another dialog window.",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      id: "drawer",
      name: "Drawer",
      category: "overlay",
      description: "For slide-in panels",
      component: (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ),
      code: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`
    },
    {
      id: "dropdown-menu",
      name: "Dropdown Menu",
      category: "overlay",
      description: "Displays a menu to the user triggered by a button.",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    },
    {
      id: "hover-card",
      name: "Hover Card",
      category: "overlay",
      description: "For sighted users to preview content available behind a link.",
      component: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <Calendar className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ),
      code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">@nextjs</h4>
      <p className="text-sm">The React Framework</p>
    </div>
  </HoverCardContent>
</HoverCard>`
    },
    {
      id: "input",
      name: "Input",
      category: "forms",
      description: "Displays a form input field or a component that looks like an input field.",
      component: (
        <div className="space-y-4 max-w-sm">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Input placeholder="Disabled input" disabled />
        </div>
      ),
      code: `<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>`
    },
    {
      id: "input-otp",
      name: "Input OTP",
      category: "forms",
      description: "Accessible one-time password component with copy paste functionality.",
      component: (
        <div className="space-y-2">
          <Label htmlFor="otp">One-Time Password</Label>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      ),
      code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`
    },
    {
      id: "label",
      name: "Label",
      category: "forms",
      description: "Renders an accessible label associated with controls.",
      component: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Your email address</Label>
            <Input id="email" type="email" />
          </div>
          <div>
            <Label htmlFor="terms" className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <span>Accept terms and conditions</span>
            </Label>
          </div>
        </div>
      ),
      code: `<Label htmlFor="email">Your email address</Label>
<Input id="email" type="email" />`
    },
    {
      id: "menubar",
      name: "Menubar",
      category: "navigation", 
      description: "A visually persistent menu common in desktop applications.",
      component: (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <span className="ml-auto text-xs tracking-widest opacity-60">⌘T</span>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ),
      code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`
    },
    {
      id: "navigation-menu",
      name: "Navigation Menu",
      category: "navigation",
      description: "A collection of links for navigating websites.",
      component: (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <div className="row-span-3">
                    <NavigationMenuLink className="block space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium leading-none">shadcn/ui</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </p>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="block rounded-md px-3 py-2 hover:bg-accent">
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ),
      code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Introduction</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`
    },
    {
      id: "pagination",
      name: "Pagination",
      category: "navigation",
      description: "Pagination with page navigation, next and previous links.",
      component: (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ),
      code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`
    },
    {
      id: "popover",
      name: "Popover",
      category: "overlay",
      description: "Displays rich content in a portal, triggered by a button.",
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ),
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
    </div>
  </PopoverContent>
</Popover>`
    },
    {
      id: "progress",
      name: "Progress",
      category: "feedback",
      description: "Displays an indicator showing the completion progress of a task.",
      component: (
        <div className="space-y-4 max-w-md">
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={88} />
        </div>
      ),
      code: `<Progress value={33} />`
    },
    {
      id: "radio-group",
      name: "Radio Group",
      category: "forms",
      description: "A set of checkable buttons where no more than one can be checked at a time.",
      component: (
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      ),
      code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`
    },
    {
      id: "resizable",
      name: "Resizable",
      category: "layout",
      description: "Accessible resizable panel groups and layouts with keyboard support.",
      component: (
        <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ),
      code: `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>
    <div className="p-6">One</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="p-6">Two</div>
  </ResizablePanel>
</ResizablePanelGroup>`
    },
    {
      id: "scroll-area",
      name: "Scroll Area",
      category: "layout",
      description: "Augments native scroll functionality for custom, cross-browser styling.",
      component: (
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          <div className="space-y-4">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="text-sm">
                This is item {i + 1} in the scrollable area. Lorem ipsum dolor sit amet.
              </div>
            ))}
          </div>
        </ScrollArea>
      ),
      code: `<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  <div className="space-y-4">
    {items.map((item) => (
      <div key={item.id} className="text-sm">{item.content}</div>
    ))}
  </div>
</ScrollArea>`
    },
    {
      id: "select",
      name: "Select",
      category: "forms",
      description: "Displays a list of options for the user to pick from—triggered by a button.",
      component: (
        <div className="max-w-sm">
          <Label htmlFor="framework">Framework</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
            </SelectContent>
          </Select>
        </div>
      ),
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`
    },
    {
      id: "separator",
      name: "Separator",
      category: "layout",
      description: "Visually or semantically separates content.",
      component: (
        <div className="space-y-4 max-w-sm">
          <div>
            <h4 className="text-sm font-medium">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium">Installation</h4>
            <p className="text-sm text-muted-foreground">How to install dependencies and structure your app.</p>
          </div>
        </div>
      ),
      code: `<div>
  <h4>Radix Primitives</h4>
  <p>An open-source UI component library.</p>
</div>
<Separator />
<div>
  <h4>Installation</h4>
  <p>How to install dependencies and structure your app.</p>
</div>`
    },
    {
      id: "sheet",
      name: "Sheet",
      category: "overlay",
      description: "Extends the Dialog component to display content that complements the main content.",
      component: (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ),
      code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="Pedro Duarte" />
    </div>
  </SheetContent>
</Sheet>`
    },
    {
      id: "skeleton",
      name: "Skeleton",
      category: "feedback",
      description: "Use to show a placeholder while content is loading.",
      component: (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ),
      code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`
    },
    {
      id: "slider",
      name: "Slider",
      category: "forms",
      description: "An input where the user selects a value from within a given range.",
      component: (
        <div className="space-y-4 max-w-sm">
          <div className="space-y-2">
            <Label>Default value</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="space-y-2">
            <Label>Range value</Label>
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </div>
      ),
      code: `<Slider defaultValue={[50]} max={100} step={1} />`
    },
    {
      id: "switch",
      name: "Switch",
      category: "forms",
      description: "A control that allows the user to toggle between checked and not checked.",
      component: (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Push Notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled">Disabled Switch</Label>
          </div>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`
    },
    {
      id: "table",
      name: "Table",
      category: "data-display",
      description: "A responsive table component.",
      component: (
        <div className="rounded-md border max-w-2xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ),
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`
    },
    {
      id: "tabs",
      name: "Tabs",
      category: "navigation",
      description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      component: (
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </TabsContent>
          <TabsContent value="password" className="space-y-2">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </TabsContent>
        </Tabs>
      ),
      code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Make changes to your account here.
  </TabsContent>
</Tabs>`
    },
    {
      id: "textarea",
      name: "Textarea",
      category: "forms",
      description: "Displays a form textarea or a component that looks like a textarea.",
      component: (
        <div className="space-y-2 max-w-sm">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here."
            className="resize-none"
          />
        </div>
      ),
      code: `<Textarea placeholder="Type your message here." />`
    },
    {
      id: "toast",
      name: "Toast",
      category: "feedback",
      description: "A succinct message that is displayed temporarily.",
      component: (
        <Button
          variant="outline"
          onClick={() => {
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
          }}
        >
          Show Toast
        </Button>
      ),
      code: `import { toast } from "sonner@2.0.3"

toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`
    },
    {
      id: "toggle",
      name: "Toggle",
      category: "forms",
      description: "A two-state button that can be either on or off.",
      component: (
        <div className="flex gap-2 items-center">
          <Toggle aria-label="Toggle italic">
            <Type className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold" pressed>
            <Type className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle disabled" disabled>
            <Type className="h-4 w-4" />
          </Toggle>
        </div>
      ),
      code: `<Toggle aria-label="Toggle italic">
  <Type className="h-4 w-4" />
</Toggle>`
    },
    {
      id: "toggle-group",
      name: "Toggle Group",
      category: "forms",
      description: "A set of two-state buttons that can be toggled on or off.",
      component: (
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Type className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Type className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Type className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      ),
      code: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <Type className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Type className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`
    },
    {
      id: "tooltip",
      name: "Tooltip",
      category: "overlay",
      description: "A popup that displays information related to an element when hovered.",
      component: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`
    }
  ];

  const filteredComponents = componentExamples.filter(component => {
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="h-full w-full flex bg-background overflow-hidden">
      {/* Instance Menu Sidebar */}
      <div className="w-64 border-r border-border bg-muted/30 flex flex-col overflow-hidden">
        <div className="shrink-0 p-4 border-b border-border">
          <h2 className="font-semibold text-lg mb-3">Component Library</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto scrollbar-custom">
          <div className="p-2">
            {componentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Using native scrolling */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <div className="shrink-0 p-6 border-b border-border bg-background">
          <h1 className="text-3xl font-bold mb-2">
            {componentCategories.find(cat => cat.id === selectedCategory)?.name || "All Components"}
          </h1>
          <p className="text-muted-foreground">
            {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-custom">
          <div className="p-6">
            <div className="space-y-8">
              {filteredComponents.map((example) => (
                <Card key={example.id} className="overflow-hidden">
                  <CardHeader className="border-b border-border bg-muted/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{example.name}</CardTitle>
                        <CardDescription className="mt-1">{example.description}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        {componentCategories.find(cat => cat.id === example.category)?.name}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-4">Preview</h4>
                      <div className="p-6 border border-border rounded-lg bg-background">
                        <TooltipProvider>
                          {example.component}
                        </TooltipProvider>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium">Code</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(example.code, example.id)}
                        >
                          {copiedCode === example.id ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                          {copiedCode === example.id ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                      <div className="bg-muted/50 border border-border rounded-lg p-4">
                        <pre className="text-sm overflow-x-auto">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredComponents.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium">No components found</h3>
                  <p>Try adjusting your search or category filter.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}