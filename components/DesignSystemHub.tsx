import { useState } from "react";
import { 
  Palette, 
  Type, 
  Grid, 
  Layout, 
  Mouse, 
  DollarSign, 
  HelpCircle, 
  ArrowRight,
  Clock,
  Plus
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Smile from '../imports/Smile-2025-401';

interface DesignSystemHubProps {
  onOpenTab?: (title: string) => void;
}

// Design System core sections - the main 5 categories
const designSystemSections = [
  {
    id: "colors",
    title: "Colors",
    description: "Color palettes & brand guidelines",
    icon: Palette,
    color: "bg-purple-50 text-purple-600",
    onClick: "Colors",
    badge: "8 Scales"
  },
  {
    id: "typography",
    title: "Typography",
    description: "Text styles & hierarchy",
    icon: Type,
    color: "bg-orange-50 text-orange-600",
    onClick: "Typography",
    badge: "H1-H6"
  },
  {
    id: "components",
    title: "Components",
    description: "UI components & patterns",
    icon: Grid,
    color: "bg-blue-50 text-blue-600",
    onClick: "Components",
    badge: "45+ Components"
  },
  {
    id: "layout",
    title: "Layout",
    description: "Grid systems & spacing",
    icon: Layout,
    color: "bg-green-50 text-green-600",
    onClick: "Layout",
    badge: "Responsive"
  },
  {
    id: "interactions",
    title: "Interactions",
    description: "Animations & micro-interactions",
    icon: Mouse,
    color: "bg-sky-50 text-sky-600",
    onClick: "Interactions",
    badge: "Motion"
  }
];

// Recent activity data - updated to focus on design system activities
const recentActivity = [
  {
    id: 1,
    type: "colors",
    title: "Color Palette Updated",
    time: "2 minutes ago",
    icon: Palette,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 2,
    type: "component",
    title: "Button Component Enhanced",
    time: "1 hour ago",
    icon: Grid,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 3,
    type: "typography",
    title: "Typography Scale Refined",
    time: "3 hours ago", 
    icon: Type,
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: 4,
    type: "layout",
    title: "Grid System Documentation Added",
    time: "1 day ago",
    icon: Layout,
    color: "bg-green-50 text-green-600"
  },
  {
    id: 5,
    type: "interactions",
    title: "New Animation Guidelines",
    time: "2 days ago",
    icon: Mouse,
    color: "bg-sky-50 text-sky-600"
  }
];

// Quick stats for the Design System
const designSystemStats = [
  {
    label: "Color Tokens",
    value: "72",
    icon: Palette,
    color: "text-purple-600"
  },
  {
    label: "Typography Styles",
    value: "24",
    icon: Type,
    color: "text-orange-600"
  },
  {
    label: "Components",
    value: "45+",
    icon: Grid,
    color: "text-blue-600"
  }
];

export default function DesignSystemHub({ onOpenTab }: DesignSystemHubProps) {
  const handleSectionClick = (sectionTitle: string) => {
    if (onOpenTab) {
      onOpenTab(sectionTitle);
    }
  };

  const handleActivityClick = (activity: typeof recentActivity[0]) => {
    if (onOpenTab) {
      // Map activity types to appropriate tabs
      const activityTabMap: Record<string, string> = {
        'component': 'Components',
        'colors': 'Colors',
        'typography': 'Typography',
        'layout': 'Layout',
        'interactions': 'Interactions'
      };
      
      const tabTitle = activityTabMap[activity.type] || activity.title;
      onOpenTab(tabTitle);
    }
  };

  return (
    <div className="h-full overflow-auto bg-background">
      <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">
        {/* Header Section */}
        <div className="text-center bg-gradient-to-b from-blue-50 to-transparent rounded-2xl px-8 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Logo/Icon - Updated to use new Smile logo */}
            <div className="w-16 h-16 bg-[rgba(204,231,247,0)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <div className="w-12 h-12">
                <Smile />
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Design System Hub
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your comprehensive design system library. Everything you need to create 
              consistent, accessible, and beautiful user interfaces.
            </p>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              {designSystemStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <IconComponent className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Design System Categories */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Explore Design System</h2>
            <p className="text-muted-foreground">Browse our comprehensive design system components and guidelines</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {designSystemSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card 
                  key={section.id} 
                  className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border border-border bg-card relative overflow-hidden"
                  onClick={() => handleSectionClick(section.onClick)}
                >
                  <CardHeader className="pb-4 relative">
                    <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {section.description}
                    </CardDescription>
                    
                    {/* Badge */}
                    {section.badge && (
                      <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                        {section.badge}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Recent Design System Updates</h2>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Clock className="w-4 h-4 mr-2" />
              View All Activity
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div 
                  key={activity.id}
                  className="group flex items-center gap-4 p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors duration-200"
                  onClick={() => handleActivityClick(activity)}
                >
                  <div className={`w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Getting Started</h3>
            <p className="text-muted-foreground mb-6">
              New to our design system? Start with these essential resources.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleSectionClick('Colors')}
                className="bg-white/50 hover:bg-white/80"
              >
                <Palette className="w-4 h-4 mr-2" />
                Color Guidelines
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleSectionClick('Typography')}
                className="bg-white/50 hover:bg-white/80"
              >
                <Type className="w-4 h-4 mr-2" />
                Typography Scale
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleSectionClick('Components')}
                className="bg-white/50 hover:bg-white/80"
              >
                <Grid className="w-4 h-4 mr-2" />
                Component Library
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}