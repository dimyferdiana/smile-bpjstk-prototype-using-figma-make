import React from 'react';
import { CodeSnippet } from './ui/code-snippet';

// Color swatch component for individual colors
interface ColorSwatchProps {
  bgColor: string;
  textColor?: string;
  label?: string;
  name: string;
  hex: string;
  needsBorder?: boolean;
}

function ColorSwatch({ bgColor, textColor, label, name, hex, needsBorder = false }: ColorSwatchProps) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col gap-3">
        {/* Color Box */}
        <div className={`${bgColor} h-24 w-full rounded-xl relative flex items-center justify-center ${needsBorder ? 'border border-neutral-200' : ''}`}>
          {label && (
            <span className={`font-semibold text-sm ${textColor || 'text-foreground'}`}>
              {label}
            </span>
          )}
        </div>
        
        {/* Color Info */}
        <div className="flex flex-col gap-1 min-w-0">
          <h5 className="text-sm font-medium text-foreground truncate">{name}</h5>
          <p className="text-xs text-muted-foreground truncate">{hex}</p>
        </div>
      </div>
    </div>
  );
}

// Color scale component for displaying a full color palette
interface ColorScaleProps {
  colors: Array<{
    bg: string;
    name: string;
    hex: string;
    label?: string;
    textColor?: string;
    needsBorder?: boolean;
  }>;
  name: string;
}

function ColorScale({ colors, name }: ColorScaleProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex gap-3 w-full">
        {colors.map((color, index) => (
          <ColorSwatch
            key={index}
            bgColor={color.bg}
            textColor={color.textColor}
            label={color.label}
            name={color.name}
            hex={color.hex}
            needsBorder={color.needsBorder}
          />
        ))}
      </div>
    </div>
  );
}

// Individual color scale components
function RedScale() {
  const colors = [
    { bg: "bg-red-50", name: "Red 50", hex: "#FDF0F4", label: "surface", textColor: "text-red-700" },
    { bg: "bg-red-100", name: "Red 100", hex: "#F9D1DF" },
    { bg: "bg-red-200", name: "Red 200", hex: "#F3A2BF" },
    { bg: "bg-red-300", name: "Red 300", hex: "#EE749E" },
    { bg: "bg-red-400", name: "Red 400", hex: "#E8457E" },
    { bg: "bg-red-500", name: "Red 500", hex: "#E2175E", label: "JKM", textColor: "text-white" },
    { bg: "bg-red-600", name: "Red 600", hex: "#C0153A", textColor: "text-white" },
    { bg: "bg-red-700", name: "Red 700", hex: "#9E1216", textColor: "text-white" },
    { bg: "bg-red-800", name: "Red 800", hex: "#79171E", textColor: "text-white" },
    { bg: "bg-red-900", name: "Red 900", hex: "#531C26", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Red" />;
}

function OrangeScale() {
  const colors = [
    { bg: "bg-orange-50", name: "Orange 50", hex: "#FEF8ED", label: "surface", textColor: "text-orange-800" },
    { bg: "bg-orange-100", name: "Orange 100", hex: "#FCEBC8" },
    { bg: "bg-orange-200", name: "Orange 200", hex: "#FAD692" },
    { bg: "bg-orange-300", name: "Orange 300", hex: "#F7C25B" },
    { bg: "bg-orange-400", name: "Orange 400", hex: "#F4AD24", label: "JKP", textColor: "text-white" },
    { bg: "bg-orange-500", name: "Orange 500", hex: "#F39523", textColor: "text-white" },
    { bg: "bg-orange-600", name: "Orange 600", hex: "#F26522", label: "JHT", textColor: "text-white" },
    { bg: "bg-orange-700", name: "Orange 700", hex: "#CB5A25", textColor: "text-white" },
    { bg: "bg-orange-800", name: "Orange 800", hex: "#A45029", textColor: "text-white" },
    { bg: "bg-orange-900", name: "Orange 900", hex: "#7D452C", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Orange" />;
}

function YellowScale() {
  const colors = [
    { bg: "bg-yellow-50", name: "Yellow 50", hex: "#FCFDF1", label: "surface", textColor: "text-yellow-900" },
    { bg: "bg-yellow-100", name: "Yellow 100", hex: "#F6F8D6" },
    { bg: "bg-yellow-200", name: "Yellow 200", hex: "#EDF0AE" },
    { bg: "bg-yellow-300", name: "Yellow 300", hex: "#E4E985" },
    { bg: "bg-yellow-400", name: "Yellow 400", hex: "#DBE15D" },
    { bg: "bg-yellow-500", name: "Yellow 500", hex: "#D2DA34", label: "Brand", textColor: "text-white" },
    { bg: "bg-yellow-600", name: "Yellow 600", hex: "#BDBC2E", label: "Web", textColor: "text-white" },
    { bg: "bg-yellow-700", name: "Yellow 700", hex: "#959A30", textColor: "text-white" },
    { bg: "bg-yellow-800", name: "Yellow 800", hex: "#6C7931", textColor: "text-white" },
    { bg: "bg-yellow-900", name: "Yellow 900", hex: "#445733", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Yellow" />;
}

function LimeScale() {
  const colors = [
    { bg: "bg-lime-50", name: "Lime 50", hex: "#F8FBF5", label: "surface", textColor: "text-lime-900" },
    { bg: "bg-lime-100", name: "Lime 100", hex: "#EBF3E0" },
    { bg: "bg-lime-200", name: "Lime 200", hex: "#D6E6C0" },
    { bg: "bg-lime-300", name: "Lime 300", hex: "#C2DAA1" },
    { bg: "bg-lime-400", name: "Lime 400", hex: "#ADCD81" },
    { bg: "bg-lime-500", name: "Lime 500", hex: "#99C162", label: "JP", textColor: "text-white" },
    { bg: "bg-lime-600", name: "Lime 600", hex: "#7CA259", textColor: "text-white" },
    { bg: "bg-lime-700", name: "Lime 700", hex: "#5F8350", textColor: "text-white" },
    { bg: "bg-lime-800", name: "Lime 800", hex: "#426447", textColor: "text-white" },
    { bg: "bg-lime-900", name: "Lime 900", hex: "#25443F", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Lime" />;
}

function GreenScale() {
  const colors = [
    { bg: "bg-green-50", name: "Green 50", hex: "#F2FBF3", label: "surface", textColor: "text-green-900" },
    { bg: "bg-green-100", name: "Green 100", hex: "#D7F4DC" },
    { bg: "bg-green-200", name: "Green 200", hex: "#B0E9B9" },
    { bg: "bg-green-300", name: "Green 300", hex: "#88DF96" },
    { bg: "bg-green-400", name: "Green 400", hex: "#61D473" },
    { bg: "bg-green-500", name: "Green 500", hex: "#39C950", label: "Web", textColor: "text-white" },
    { bg: "bg-green-600", name: "Green 600", hex: "#3BAB47", label: "Brand", textColor: "text-white" },
    { bg: "bg-green-700", name: "Green 700", hex: "#2A7F42", textColor: "text-white" },
    { bg: "bg-green-800", name: "Green 800", hex: "#22683F", textColor: "text-white" },
    { bg: "bg-green-900", name: "Green 900", hex: "#19523C", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Green" />;
}

function SkyScale() {
  const colors = [
    { bg: "bg-sky-50", name: "Sky 50", hex: "#EFF9FC", label: "surface", textColor: "text-sky-900" },
    { bg: "bg-sky-100", name: "Sky 100", hex: "#CFECF7" },
    { bg: "bg-sky-200", name: "Sky 200", hex: "#9FD9EE" },
    { bg: "bg-sky-300", name: "Sky 300", hex: "#70C6E6" },
    { bg: "bg-sky-400", name: "Sky 400", hex: "#40B3DD" },
    { bg: "bg-sky-500", name: "Sky 500", hex: "#10A0D5", label: "JKK", textColor: "text-white" },
    { bg: "bg-sky-600", name: "Sky 600", hex: "#0E87B5", textColor: "text-white" },
    { bg: "bg-sky-700", name: "Sky 700", hex: "#0D6F95", textColor: "text-white" },
    { bg: "bg-sky-800", name: "Sky 800", hex: "#0B5676", textColor: "text-white" },
    { bg: "bg-sky-900", name: "Sky 900", hex: "#0A3E56", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Sky" />;
}

function BlueScale() {
  const colors = [
    { bg: "bg-blue-50", name: "Blue 50", hex: "#EEF7FC", label: "surface", textColor: "text-blue-900" },
    { bg: "bg-blue-100", name: "Blue 100", hex: "#CCE7F7" },
    { bg: "bg-blue-200", name: "Blue 200", hex: "#99CFF0" },
    { bg: "bg-blue-300", name: "Blue 300", hex: "#66B7E8" },
    { bg: "bg-blue-400", name: "Blue 400", hex: "#339FE1" },
    { bg: "bg-blue-500", name: "Blue 500", hex: "#0087D9", label: "Web", textColor: "text-white" },
    { bg: "bg-blue-600", name: "Blue 600", hex: "#117AC1", textColor: "text-white" },
    { bg: "bg-blue-700", name: "Blue 700", hex: "#226DA8", label: "Brand", textColor: "text-white" },
    { bg: "bg-blue-800", name: "Blue 800", hex: "#195582", textColor: "text-white" },
    { bg: "bg-blue-900", name: "Blue 900", hex: "#113D5C", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Blue" />;
}

function NeutralScale() {
  const colors = [
    { bg: "bg-neutral-50", name: "Neutral 50", hex: "#FFFFFF", label: "surface", textColor: "text-neutral-900", needsBorder: true },
    { bg: "bg-neutral-100", name: "Neutral 100", hex: "#F4F6F6", label: "surface", textColor: "text-neutral-900" },
    { bg: "bg-neutral-200", name: "Neutral 200", hex: "#DFE3E5" },
    { bg: "bg-neutral-300", name: "Neutral 300", hex: "#CAD0D4" },
    { bg: "bg-neutral-400", name: "Neutral 400", hex: "#AAB4BA" },
    { bg: "bg-neutral-500", name: "Neutral 500", hex: "#8A98A0", textColor: "text-white" },
    { bg: "bg-neutral-600", name: "Neutral 600", hex: "#74858E", textColor: "text-white" },
    { bg: "bg-neutral-700", name: "Neutral 700", hex: "#5F727D", label: "Sub-text", textColor: "text-white" },
    { bg: "bg-neutral-800", name: "Neutral 800", hex: "#344C5A", textColor: "text-white" },
    { bg: "bg-neutral-900", name: "Neutral 900", hex: "#082536", label: "Text", textColor: "text-white" },
  ];

  return <ColorScale colors={colors} name="Neutral" />;
}

// CSS Variables Code Section using ShadCN CodeSnippet
function CSSVariablesSection() {
  const cssCode = `/* Brand Color System */
--red-50: #FDF0F4;
--red-100: #F9D1DF;
--red-200: #F3A2BF;
--red-300: #EE749E;
--red-400: #E8457E;
--red-500: #E2175E;
--red-600: #C0153A;
--red-700: #9E1216;
--red-800: #79171E;
--red-900: #531C26;

--orange-50: #FEF8ED;
--orange-100: #FCEBC8;
--orange-200: #FAD692;
--orange-300: #F7C25B;
--orange-400: #F4AD24;
--orange-500: #F39523;
--orange-600: #F26522;
--orange-700: #CB5A25;
--orange-800: #A45029;
--orange-900: #7D452C;

--yellow-50: #FCFDF1;
--yellow-100: #F6F8D6;
--yellow-200: #EDF0AE;
--yellow-300: #E4E985;
--yellow-400: #DBE15D;
--yellow-500: #D2DA34;
--yellow-600: #BDBC2E;
--yellow-700: #959A30;
--yellow-800: #6C7931;
--yellow-900: #445733;

--lime-50: #F8FBF5;
--lime-100: #EBF3E0;
--lime-200: #D6E6C0;
--lime-300: #C2DAA1;
--lime-400: #ADCD81;
--lime-500: #99C162;
--lime-600: #7CA259;
--lime-700: #5F8350;
--lime-800: #426447;
--lime-900: #25443F;

--green-50: #F2FBF3;
--green-100: #D7F4DC;
--green-200: #B0E9B9;
--green-300: #88DF96;
--green-400: #61D473;
--green-500: #39C950;
--green-600: #3BAB47;
--green-700: #2A7F42;
--green-800: #22683F;
--green-900: #19523C;

--sky-50: #EFF9FC;
--sky-100: #CFECF7;
--sky-200: #9FD9EE;
--sky-300: #70C6E6;
--sky-400: #40B3DD;
--sky-500: #10A0D5;
--sky-600: #0E87B5;
--sky-700: #0D6F95;
--sky-800: #0B5676;
--sky-900: #0A3E56;

--blue-50: #EEF7FC;
--blue-100: #CCE7F7;
--blue-200: #99CFF0;
--blue-300: #66B7E8;
--blue-400: #339FE1;
--blue-500: #0087D9;
--blue-600: #117AC1;
--blue-700: #226DA8;
--blue-800: #195582;
--blue-900: #113D5C;

--neutral-50: #FFFFFF;
--neutral-100: #F4F6F6;
--neutral-200: #DFE3E5;
--neutral-300: #CAD0D4;
--neutral-400: #AAB4BA;
--neutral-500: #8A98A0;
--neutral-600: #74858E;
--neutral-700: #5F727D;
--neutral-800: #344C5A;
--neutral-900: #082536;`;

  return (
    <div className="w-full mt-8">
      <CodeSnippet
        code={cssCode}
        language="css"
        title="CSS Variables"
        maxHeight="320px"
        showCopy={true}
      />
    </div>
  );
}

// Page header
function ColorPageHeader() {
  return (
    <div className="shrink-0 p-6 border-b border-border bg-background">
      <h1 className="text-3xl font-bold mb-2">Color</h1>
      <p className="text-muted-foreground">
        Color helps express hierarchy, establish brand identity, give meaning, and indicate element states.
      </p>
    </div>
  );
}

// Main ColorPalettes component
export default function ColorPalettes() {
  return (
    <div className="flex flex-col h-full bg-white">
      <ColorPageHeader />
      
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-custom">
        <div className="p-8 max-w-full">
          {/* Color Scales */}
          <div className="space-y-6">
            <RedScale />
            <OrangeScale />
            <YellowScale />
            <LimeScale />
            <GreenScale />
            <SkyScale />
            <BlueScale />
            <NeutralScale />
          </div>
          
          <CSSVariablesSection />
        </div>
      </div>
    </div>
  );
}