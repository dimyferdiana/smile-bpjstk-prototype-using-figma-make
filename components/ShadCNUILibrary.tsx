/*
 * ShadCN UI Component Library - Complete Showcase
 * Displays all ShadCN/UI components available in components/ui/
 */

import { useState } from "react";
import { 
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronRight,
  Plus,
  Search,
  Star,
  Settings,
  Home,
  User,
  Mail,
  Phone,
  Eye,
  EyeOff,
  Check,
  X,
  Heart,
  Share2,
  Download,
  Upload,
  Play,
  Pause,
  Volume2,
  Info,
  AlertTriangle,
  CheckCircle,
  Bell,
  Menu,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  RefreshCcw,
  Filter,
  SortAsc,
  Sun,
  Moon,
  Bold,
  Italic,
  Underline,
  RotateCcw,
  Undo2,
  Redo2,
  PanelLeft,
  PanelRight,
  GripVertical,
  Save
} from "lucide-react";

// Import all ShadCN/UI components
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AspectRatio } from "./ui/aspect-ratio";
import { Slider } from "./ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "./ui/radio-group";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Calendar } from "./ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Toggle } from "./ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ScrollArea } from "./ui/scroll-area";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "./ui/context-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "./ui/menubar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Resizable, ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Sidebar } from "./ui/sidebar";
import { toast } from "sonner@2.0.3";

// Component Sections

function AccordionShowcase() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function AlertDialogShowcase() {
  return (
    <div className="space-y-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function AlertShowcase() {
  return (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
}

function AspectRatioShowcase() {
  return (
    <div className="w-[300px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
}

function AvatarShowcase() {
  return (
    <div className="flex space-x-2">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b75da6e2?w=32&h=32&fit=crop&crop=face" alt="User" />
        <AvatarFallback>SA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}

function BadgeShowcase() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

function BreadcrumbShowcase() {
  return (
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
          <BreadcrumbPage>ShadCN UI</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function ButtonShowcase() {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-700">Button Variants</h4>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-700">Button Sizes</h4>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Settings className="w-4 h-4" /></Button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-700">Button States</h4>
        <div className="flex flex-wrap gap-3">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  );
}

function CalendarShowcase() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}

function CardShowcase() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

function CarouselShowcase() {
  return (
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
  );
}

function ChartShowcase() {
  const data = [
    { month: "Jan", desktop: 186, mobile: 80 },
    { month: "Feb", desktop: 305, mobile: 200 },
    { month: "Mar", desktop: 237, mobile: 120 },
    { month: "Apr", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "Jun", desktop: 214, mobile: 140 },
  ];

  return (
    <ChartContainer className="min-h-[200px] w-full" config={{}}>
      <div className="p-4 border rounded-md">
        <h4 className="text-sm font-medium mb-2">Sample Chart</h4>
        <p className="text-sm text-muted-foreground">Chart components for data visualization</p>
      </div>
    </ChartContainer>
  );
}

function CheckboxShowcase() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={isChecked}
          onCheckedChange={setIsChecked}
        />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" />
        <Label htmlFor="terms2">Subscribe to newsletter</Label>
      </div>
    </div>
  );
}

function CollapsibleShowcase() {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

  return (
    <Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          Can I use this in my project?
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          Yes. Free to use for personal and commercial projects.
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          No attribution required.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CommandShowcase() {
  return (
    <Command className="rounded-lg border shadow-md max-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

function ContextMenuShowcase() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function DialogShowcase() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DrawerShowcase() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
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
      </DrawerContent>
    </Drawer>
  );
}

function DropdownMenuShowcase() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Open Menu
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FormShowcase() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Enter username" />
        <p className="text-sm text-muted-foreground">This is your public display name.</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email" />
      </div>
      
      <Button type="submit">Submit</Button>
    </div>
  );
}

function HoverCardShowcase() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm">
              The React framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function InputShowcase() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter password"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled Input</Label>
        <Input
          id="disabled"
          disabled
          placeholder="This is disabled"
        />
      </div>
    </div>
  );
}

function InputOTPShowcase() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Enter OTP</Label>
        <InputOTP maxLength={6} value={value} onChange={setValue}>
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
      <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  );
}

function LabelShowcase() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Your description" />
      </div>
    </div>
  );
}

function MenubarShowcase() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
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
  );
}

function NavigationMenuShowcase() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and paste into your apps.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function PaginationShowcase() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function PopoverShowcase() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? date.toDateString() : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

function ProgressShowcase() {
  const [progress] = useState(65);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Loading...</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  );
}

function RadioGroupShowcase() {
  const [radioValue, setRadioValue] = useState("");

  return (
    <div className="space-y-3">
      <Label>Choose an option</Label>
      <RadioGroup value={radioValue} onValueChange={setRadioValue}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="r1" />
          <Label htmlFor="r1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="r2" />
          <Label htmlFor="r2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="r3" />
          <Label htmlFor="r3">Option 3</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

function ResizableShowcase() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

function ScrollAreaShowcase() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            v1.2.0-beta.{i}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function SelectShowcase() {
  const [selectValue, setSelectValue] = useState("");

  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="select">Framework</Label>
      <Select value={selectValue} onValueChange={setSelectValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function SeparatorShowcase() {
  return (
    <div className="space-y-4">
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </div>
  );
}

function SheetShowcase() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function SidebarShowcase() {
  return (
    <div className="p-4 border rounded-md max-w-sm">
      <h4 className="text-sm font-medium mb-2">Sidebar Component</h4>
      <p className="text-sm text-muted-foreground">
        Advanced sidebar component with collapsible sections, navigation, and customizable layouts.
      </p>
    </div>
  );
}

function SkeletonShowcase() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[160px]" />
        </div>
      </div>
    </div>
  );
}

function SliderShowcase() {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="space-y-3 max-w-sm">
      <Label>Volume: {sliderValue[0]}</Label>
      <Slider
        value={sliderValue}
        onValueChange={setSliderValue}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
}

function SonnerShowcase() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Button
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.error("Something went wrong", {
              description: "Your request could not be completed",
            })
          }
        >
          Show Error Toast
        </Button>
      </div>
    </div>
  );
}

function SwitchShowcase() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          checked={isToggled}
          onCheckedChange={setIsToggled}
        />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>
    </div>
  );
}

function TableShowcase() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
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
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function TabsShowcase() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Account content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Password content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your settings here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Settings content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function TextareaShowcase() {
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="message">Your message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      />
    </div>
  );
}

function ToggleShowcase() {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Toggle pressed={toggleValue} onPressedChange={setToggleValue}>
          <Star className="h-4 w-4" />
        </Toggle>
        <Label>Favorite</Label>
      </div>
      
      <div className="flex space-x-2">
        <Toggle aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  );
}

function ToggleGroupShowcase() {
  const [toggleGroupValue, setToggleGroupValue] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Text Alignment</Label>
        <ToggleGroup type="single" value={toggleGroupValue} onValueChange={setToggleGroupValue}>
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      <div className="space-y-2">
        <Label>Text Formatting</Label>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}

function TooltipShowcase() {
  return (
    <TooltipProvider>
      <div className="space-y-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Settings className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}

// Component Section Wrapper
function ComponentSection2({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function ShadCNUILibrary() {
  return (
    <div className="bg-gray-50 h-full overflow-y-auto p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold leading-[1.2] text-gray-900 mb-2">ShadCN UI Component Library</h1>
          <p className="text-gray-600">
            A comprehensive showcase of all ShadCN/UI components available in this application.
            These are production-ready, accessible components built with Radix UI primitives and designed by shadcn/ui.
          </p>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> All components are located in <code className="px-1 py-0.5 bg-blue-100 rounded text-xs">/components/ui/</code> 
              and can be imported using: <code className="px-1 py-0.5 bg-blue-100 rounded text-xs">import &#123; ComponentName &#125; from "./ui/component-name";</code>
            </p>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ComponentSection2 title="Accordion">
            <AccordionShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Alert Dialog">
            <AlertDialogShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Alert">
            <AlertShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Aspect Ratio">
            <AspectRatioShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Avatar">
            <AvatarShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Badge">
            <BadgeShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Breadcrumb">
            <BreadcrumbShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Button">
            <ButtonShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Calendar">
            <CalendarShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Card">
            <CardShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Carousel">
            <CarouselShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Chart">
            <ChartShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Checkbox">
            <CheckboxShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Collapsible">
            <CollapsibleShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Command">
            <CommandShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Context Menu">
            <ContextMenuShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Dialog">
            <DialogShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Drawer">
            <DrawerShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Dropdown Menu">
            <DropdownMenuShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Form">
            <FormShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Hover Card">
            <HoverCardShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Input">
            <InputShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Input OTP">
            <InputOTPShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Label">
            <LabelShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Menubar">
            <MenubarShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Navigation Menu">
            <NavigationMenuShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Pagination">
            <PaginationShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Popover">
            <PopoverShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Progress">
            <ProgressShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Radio Group">
            <RadioGroupShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Resizable">
            <ResizableShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Scroll Area">
            <ScrollAreaShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Select">
            <SelectShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Separator">
            <SeparatorShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Sheet">
            <SheetShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Sidebar">
            <SidebarShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Skeleton">
            <SkeletonShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Slider">
            <SliderShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Sonner">
            <SonnerShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Switch">
            <SwitchShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Table">
            <TableShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Tabs">
            <TabsShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Textarea">
            <TextareaShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Toggle">
            <ToggleShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Toggle Group">
            <ToggleGroupShowcase />
          </ComponentSection2>

          <ComponentSection2 title="Tooltip">
            <TooltipShowcase />
          </ComponentSection2>
        </div>

        {/* Footer */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About ShadCN/UI</h3>
          <p className="text-gray-600 mb-4">
            Beautifully designed components that you can copy and paste into your apps. 
            Accessible. Customizable. Open Source.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="outline">Radix UI</Badge>
            <Badge variant="outline">Accessible</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}