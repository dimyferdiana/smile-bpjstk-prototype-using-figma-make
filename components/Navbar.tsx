/*
 * Navbar Component
 * Contains the top navigation bar with logo, search, and navigation items
 */

import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-eexj65cku5";
import imgNavbar from "figma:asset/8dbd4d0757b75ef35cddd68972d32a1743bfd614.png";
import { Bell, HelpCircle, Search } from "lucide-react";
import SearchModal from "./SearchModal";

function Type() {
  return (
    <div
      className="absolute bottom-[22.414%] left-[31.328%] right-[4.404%] top-[31.035%]"
      data-name="type"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 109 23"
      >
        <g id="type">
          <g id="sub text">
            <path d={svgPaths.p26f26500} fill="white" />
            <path d={svgPaths.p20938800} fill="white" />
            <path d={svgPaths.p219d8700} fill="white" />
            <path d={svgPaths.p3daad80} fill="white" />
            <path d={svgPaths.p2da65a80} fill="white" />
            <path d={svgPaths.p2b998d70} fill="white" />
            <path d={svgPaths.p22d7e880} fill="white" />
            <path d={svgPaths.pee28e00} fill="white" />
            <path d={svgPaths.p7da0c80} fill="white" />
            <path d={svgPaths.p24378c00} fill="white" />
            <path d={svgPaths.p2445c4c0} fill="white" />
            <path d={svgPaths.p30501b00} fill="white" />
            <path d={svgPaths.p35c868f2} fill="white" />
            <path d={svgPaths.p21b56f00} fill="white" />
            <path d={svgPaths.p324d1cf0} fill="white" />
            <path d={svgPaths.p99d0ac0} fill="white" />
            <path d={svgPaths.p129c8b80} fill="white" />
            <path d={svgPaths.p28732a00} fill="white" />
            <path d={svgPaths.p103c7a80} fill="white" />
            <path d={svgPaths.p5ac5800} fill="white" />
            <path d={svgPaths.p2a990100} fill="white" />
            <path d={svgPaths.p30663200} fill="white" />
            <path d={svgPaths.p1e77d700} fill="white" />
            <path d={svgPaths.p18e6ebc0} fill="white" />
            <path d={svgPaths.p5984900} fill="white" />
            <path d={svgPaths.p28d8eff0} fill="white" />
            <path d={svgPaths.p20d55d00} fill="white" />
            <path d={svgPaths.p3444ac00} fill="white" />
            <path d={svgPaths.p18266b00} fill="white" />
            <path d={svgPaths.p3116c000} fill="white" />
            <path d={svgPaths.pbd35a40} fill="white" />
            <path d={svgPaths.p3ca5ee80} fill="white" />
            <path d={svgPaths.p19d4b000} fill="white" />
            <path d={svgPaths.p2d63b780} fill="white" />
          </g>
          <path d={svgPaths.p1c25ec00} fill="white" id="text" />
          <g id="smile">
            <path d={svgPaths.p1958d600} fill="white" />
            <path d={svgPaths.p4566680} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Mark() {
  return (
    <div
      className="absolute bottom-[15.517%] left-[4.405%] right-[69.248%] top-[15.517%]"
      data-name="mark"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 45 34"
        >
          <g id="mark">
            <g id="Vector"></g>
            <path
              d={svgPaths.p2f455e80}
              fill="white"
              id="Subtract"
            />
            <path
              d={svgPaths.p12c66b00}
              fill="white"
              fillOpacity="0.85"
              id="Intersect"
            />
            <g id="Vector_2"></g>
            <path
              d={svgPaths.p2ff2b300}
              fill="white"
              id="Subtract_2"
            />
            <path
              d={svgPaths.p3661ef00}
              fill="white"
              fillOpacity="0.85"
              id="Intersect_2"
            />
            <path
              d={svgPaths.p14785500}
              fill="white"
              fillOpacity="0.85"
              id="Intersect_3"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Smile() {
  return (
    <div className="h-[47.981px] relative shrink-0 w-[169px]" data-name="smile">
      <Type />
      <Mark />
    </div>
  );
}

function Logo() {
  return (
    <button 
      className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded" 
      data-name="logo"
      onClick={() => {
        // Add logo click handler here
        console.log('Logo clicked');
      }}
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <Smile />
      </div>
    </button>
  );
}

function V1NavBarItem({ children, onClick, ariaLabel }: { 
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  return (
    <div className="p-2" data-name="v1-nav-bar-item">
      {children}
    </div>
  );
}

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
        className="relative rounded-lg shrink-0 cursor-pointer bg-white/8 hover:bg-white/15 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 px-4 py-2.5"
        aria-label="Open search"
      >
        <div className="flex items-center gap-3 min-w-[240px]">
          <Search className="w-4 h-4 text-white/80" />
          <div className="flex-1 text-left">
            <span className="text-sm text-white/80">Search...</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-white/60">
            <kbd className="px-1.5 py-0.5 bg-white/15 rounded text-xs font-medium text-white/70">
              {shortcutKey}
            </kbd>
            <span>+</span>
            <kbd className="px-1.5 py-0.5 bg-white/15 rounded text-xs font-medium text-white/70">
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

function Nav({ onOpenTab }: { onOpenTab?: (title: string) => void }) {
  return (
    <div className="relative shrink-0" data-name="nav">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <V1NavBarItem 
          onClick={() => console.log('Notification clicked')}
          ariaLabel="Notifications"
        >
          <Bell className="w-4 h-4 text-white" />
        </V1NavBarItem>
        <V1NavBarItem 
          onClick={() => console.log('Help clicked')}
          ariaLabel="Help"
        >
          <HelpCircle className="w-4 h-4 text-white" />
        </V1NavBarItem>
      </div>
    </div>
  );
}

interface NavbarProps {
  onOpenTab?: (title: string) => void;
}

export default function Navbar({ onOpenTab }: NavbarProps) {
  return (
    <div
      className="bg-blue-700 bg-gradient-to-r from-blue-700 to-blue-800 pointer-events-auto sticky top-0 w-full z-50 h-16"
      data-name="navbar"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="content-stretch flex flex-row items-center justify-between px-2.5 py-0 relative w-full">
          <Logo />
          <div className="flex items-center gap-4">
            <GlobalSearch onOpenTab={onOpenTab} />
            <Nav onOpenTab={onOpenTab} />
          </div>
        </div>
      </div>
    </div>
  );
}