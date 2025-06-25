import React from 'react';
import { CodeSnippet } from './ui/code-snippet';
import { Button } from './ui/button';

// Typography specimen component
interface TypographySpecimenProps {
  title: string;
  description: string;
  children: React.ReactNode;
  cssProperties: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    letterSpacing?: string;
  };
  usage: string;
  tailwindClass?: string;
}

function TypographySpecimen({ 
  title, 
  description, 
  children, 
  cssProperties, 
  usage,
  tailwindClass 
}: TypographySpecimenProps) {
  return (
    <div className="w-full border border-border rounded-xl p-6 bg-card">
      {/* Typography Example */}
      <div className="mb-6">
        <div className="mb-3">
          {children}
        </div>
        <div className="text-sm text-muted-foreground">
          {description}
        </div>
      </div>

      {/* Properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-foreground">{title} Properties</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Font Size:</span>
              <code className="text-xs bg-muted px-1 py-0.5 rounded">{cssProperties.fontSize}</code>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Font Weight:</span>
              <code className="text-xs bg-muted px-1 py-0.5 rounded">{cssProperties.fontWeight}</code>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Line Height:</span>
              <code className="text-xs bg-muted px-1 py-0.5 rounded">{cssProperties.lineHeight}</code>
            </div>
            {cssProperties.letterSpacing && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Letter Spacing:</span>
                <code className="text-xs bg-muted px-1 py-0.5 rounded">{cssProperties.letterSpacing}</code>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 text-foreground">Usage</h4>
          <p className="text-sm text-muted-foreground">{usage}</p>
          {tailwindClass && (
            <div className="mt-2">
              <span className="text-xs text-muted-foreground">Tailwind Class:</span>
              <code className="text-xs bg-muted px-1 py-0.5 rounded ml-2">{tailwindClass}</code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Typography demo wrapper that applies exact CSS specifications
interface TypographyDemoProps {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style: React.CSSProperties;
}

function TypographyDemo({ tag: Tag, children, style }: TypographyDemoProps) {
  return (
    <Tag style={{ 
      ...style, 
      color: 'var(--foreground)',
      margin: 0,
      padding: 0
    }}>
      {children}
    </Tag>
  );
}

// Individual typography examples
function HeadingExamples() {
  return (
    <div className="space-y-6">
      <TypographySpecimen
        title="H1"
        description="Primary heading for page titles and major sections"
        cssProperties={{
          fontSize: "2.25rem (36px)",
          fontWeight: "700 (Bold)",
          lineHeight: "1.2",
          letterSpacing: "-0.025em"
        }}
        usage="Use for main page titles, hero sections, and primary content headings"
        tailwindClass="Default H1 styling"
      >
        <TypographyDemo 
          tag="h1" 
          style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.2',
            letterSpacing: '-0.025em'
          }}
        >
          Main Page Heading
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="H2"
        description="Secondary heading for major content sections"
        cssProperties={{
          fontSize: "1.5rem (24px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.5"
        }}
        usage="Use for section titles, card headers, and secondary content organization"
        tailwindClass="Default H2 styling"
      >
        <TypographyDemo 
          tag="h2" 
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5'
          }}
        >
          Section Heading
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="H3"
        description="Tertiary heading for subsections and content groups"
        cssProperties={{
          fontSize: "1.25rem (20px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.5"
        }}
        usage="Use for subsection titles, component headers, and content grouping"
        tailwindClass="Default H3 styling"
      >
        <TypographyDemo 
          tag="h3" 
          style={{
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5'
          }}
        >
          Subsection Heading
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="H4"
        description="Quaternary heading for detailed content organization"
        cssProperties={{
          fontSize: "1.125rem (18px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.5"
        }}
        usage="Use for detailed sections, form groups, and content subdivision"
        tailwindClass="Default H4 styling"
      >
        <TypographyDemo 
          tag="h4" 
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5'
          }}
        >
          Detail Heading
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="H5"
        description="Fifth-level heading for minor content sections"
        cssProperties={{
          fontSize: "1rem (16px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.5"
        }}
        usage="Use for small section titles, list headers, and minor groupings"
        tailwindClass="Default H5 styling"
      >
        <TypographyDemo 
          tag="h5" 
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5'
          }}
        >
          Minor Section Heading
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="H6"
        description="Sixth-level heading for the smallest content divisions (Note: Not defined in base layer)"
        cssProperties={{
          fontSize: "0.875rem (14px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.5"
        }}
        usage="Use for micro-sections, labels, and smallest content divisions"
        tailwindClass="text-sm font-medium"
      >
        <TypographyDemo 
          tag="h6" 
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5'
          }}
        >
          Micro Section Heading
        </TypographyDemo>
      </TypographySpecimen>
    </div>
  );
}

function BodyTextExamples() {
  return (
    <div className="space-y-6">
      <TypographySpecimen
        title="Body Large"
        description="Large body text for important content and introductions"
        cssProperties={{
          fontSize: "1.125rem (18px)",
          fontWeight: "400 (Normal)",
          lineHeight: "1.5"
        }}
        usage="Use for introductory paragraphs, important announcements, and featured content"
        tailwindClass="text-lg"
      >
        <TypographyDemo 
          tag="p" 
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.5'
          }}
        >
          This is large body text used for important content, introductions, and featured paragraphs that need more emphasis than regular body text.
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="Body Regular"
        description="Standard body text for general content (default paragraph styling)"
        cssProperties={{
          fontSize: "1rem (16px)",
          fontWeight: "400 (Normal)",
          lineHeight: "1.5"
        }}
        usage="Use for paragraphs, descriptions, and general readable content"
        tailwindClass="Default P styling"
      >
        <TypographyDemo 
          tag="p" 
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.5'
          }}
        >
          This is regular body text used for paragraphs, descriptions, and general content. It provides optimal readability for extended reading and is the foundation of most text content.
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="Body Small"
        description="Small body text for secondary information"
        cssProperties={{
          fontSize: "0.875rem (14px)",
          fontWeight: "400 (Normal)",
          lineHeight: "1.5"
        }}
        usage="Use for secondary information, metadata, and supporting details"
        tailwindClass="text-sm"
      >
        <TypographyDemo 
          tag="p" 
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.5'
          }}
        >
          This is small body text used for secondary information, metadata, helper text, and supporting details that complement the main content.
        </TypographyDemo>
      </TypographySpecimen>
    </div>
  );
}

function UtilityTextExamples() {
  return (
    <div className="space-y-6">
      <TypographySpecimen
        title="Caption"
        description="Small text for captions, footnotes, and fine print"
        cssProperties={{
          fontSize: "0.75rem (12px)",
          fontWeight: "400 (Normal)",
          lineHeight: "1.4"
        }}
        usage="Use for image captions, footnotes, copyright text, and fine print"
        tailwindClass="text-xs"
      >
        <TypographyDemo 
          tag="p" 
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.4',
            color: 'var(--muted-foreground)'
          }}
        >
          This is caption text used for image captions, footnotes, timestamps, and other supplementary information that requires minimal visual weight.
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="Label"
        description="Text for form labels and UI element labels (default label styling)"
        cssProperties={{
          fontSize: "1rem (16px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.5"
        }}
        usage="Use for form labels, button text, and interactive element labels"
        tailwindClass="Default Label styling"
      >
        <TypographyDemo 
          tag="label" 
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.5',
            display: 'block'
          }}
        >
          Form Field Label
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="Button Text"
        description="Text for buttons and call-to-action elements (ShadCN Button component)"
        cssProperties={{
          fontSize: "0.875rem (14px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.5"
        }}
        usage="Use for button labels, links, and interactive elements using the Button component"
        tailwindClass="Button component with default variant (primary colors)"
      >
        <Button>Primary Button</Button>
      </TypographySpecimen>

      <TypographySpecimen
        title="Input Text"
        description="Text for input fields and form controls (default input styling)"
        cssProperties={{
          fontSize: "1rem (16px)",
          fontWeight: "400 (Normal)",
          lineHeight: "1.5"
        }}
        usage="Use for text inputs, textareas, and form field content"
        tailwindClass="Default Input styling with form field background"
      >
        <div>
          <input
            type="text"
            placeholder="Form field text"
            readOnly
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: '1.5',
              padding: '10px 12px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--input-background)',
              borderRadius: 'var(--radius)',
              color: 'var(--foreground)',
              outline: 'none',
              width: '200px',
              margin: 0
            }}
          />
        </div>
      </TypographySpecimen>

      <TypographySpecimen
        title="Code"
        description="Monospace text for code snippets and technical content"
        cssProperties={{
          fontSize: "0.875rem (14px)",
          fontWeight: "400 (Normal)",
          lineHeight: "1.5"
        }}
        usage="Use for code snippets, technical values, and monospace content"
        tailwindClass="text-sm font-mono"
      >
        <TypographyDemo 
          tag="code" 
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: '1.5',
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
            backgroundColor: 'var(--muted)',
            padding: '4px 8px',
            borderRadius: '4px'
          }}
        >
          const example = "code text";
        </TypographyDemo>
      </TypographySpecimen>

      <TypographySpecimen
        title="Overline"
        description="Small uppercase text for categories and metadata"
        cssProperties={{
          fontSize: "0.75rem (12px)",
          fontWeight: "500 (Medium)",
          lineHeight: "1.4"
        }}
        usage="Use for categories, tags, section labels, and metadata"
        tailwindClass="text-xs font-medium uppercase tracking-wide"
      >
        <TypographyDemo 
          tag="p" 
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: '1.4',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--muted-foreground)'
          }}
        >
          Category Label
        </TypographyDemo>
      </TypographySpecimen>
    </div>
  );
}

// CSS Implementation Section
function TypographyCSSSection() {
  const cssCode = `/* Typography Scale Variables (from globals.css) */
:root {
  --text-4xl: 2.25rem;   /* 36px - H1 */
  --text-3xl: 1.875rem;  /* 30px */
  --text-2xl: 1.5rem;    /* 24px - H2 */
  --text-xl: 1.25rem;    /* 20px - H3 */
  --text-lg: 1.125rem;   /* 18px - H4 */
  --text-base: 1rem;     /* 16px - H5, Body */
  --text-sm: 0.875rem;   /* 14px - H6, Small */
  --text-xs: 0.75rem;    /* 12px - Caption */

  /* Font Weight Variables */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}

/* Base Typography Styles (from globals.css) */
@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 {
      font-size: var(--text-4xl);
      font-weight: var(--font-weight-bold);
      line-height: 1.2;
      letter-spacing: -0.025em;
      color: var(--foreground);
    }
    
    h2 {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
      color: var(--foreground);
    }
    
    h3 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
      color: var(--foreground);
    }
    
    h4 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
      color: var(--foreground);
    }
    
    h5 {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
      color: var(--foreground);
    }
    
    p {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
      color: var(--foreground);
    }
    
    label {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
      color: var(--foreground);
    }
    
    button {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    input {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
      color: var(--foreground);
    }
  }
}`;

  const reactCode = `import React from 'react';
import { Button } from './ui/button';

// Typography Usage Examples
export function TypographyExamples() {
  return (
    <div className="space-y-6">
      {/* Headings - Use default styling without Tailwind classes */}
      <h1>Main Page Title</h1>
      <h2>Section Title</h2>
      <h3>Subsection Title</h3>
      <h4>Detail Title</h4>
      <h5>Minor Section</h5>
      <h6 className="text-sm font-medium">Micro Section</h6>
      
      {/* Body Text */}
      <p className="text-lg">Large body text</p>
      <p>Regular body text (default)</p>
      <p className="text-sm">Small body text</p>
      
      {/* Form Elements */}
      <label>Form Label</label>
      <input type="text" placeholder="Input text" />
      <Button>Primary Button</Button>
      
      {/* Utility Text */}
      <p className="text-xs text-muted-foreground">Caption text</p>
      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
        Code snippet
      </code>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Overline Text
      </p>
    </div>
  );
}

// Note: 
// - H1-H5 use base layer styling from globals.css when no text classes are present
// - H6 is not defined in base layer, so use Tailwind classes: text-sm font-medium
// - Button component uses ShadCN styling with design system colors
// - The :where() selector prevents base styles when Tailwind text classes are used`;

  return (
    <div className="space-y-6">
      <CodeSnippet
        code={cssCode}
        language="css"
        title="CSS Typography Implementation"
        maxHeight="400px"
        showCopy={true}
      />
      
      <CodeSnippet
        code={reactCode}
        language="tsx"
        title="React Typography Usage"
        maxHeight="400px"
        showCopy={true}
      />
    </div>
  );
}

// Page header
function TypographyPageHeader() {
  return (
    <div className="shrink-0 p-6 border-b border-border bg-background">
      <TypographyDemo 
        tag="h1" 
        style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: '1.2',
          letterSpacing: '-0.025em',
          marginBottom: '8px'
        }}
      >
        Typography
      </TypographyDemo>
      <p className="text-muted-foreground">
        Typography creates hierarchy, establishes tone, and ensures consistent communication across the design system.
      </p>
    </div>
  );
}

// Main Typography component
export default function Typography() {
  return (
    <div className="flex flex-col h-full bg-white">
      <TypographyPageHeader />
      
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-custom">
        <div className="p-8 max-w-full">
          {/* Headings Section */}
          <div className="mb-12">
            <div className="mb-6">
              <TypographyDemo 
                tag="h2" 
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '1.5',
                  marginBottom: '8px'
                }}
              >
                Headings
              </TypographyDemo>
              <p className="text-muted-foreground">
                Headings create hierarchy and structure content from H1 to H6.
              </p>
            </div>
            <HeadingExamples />
          </div>

          {/* Body Text Section */}
          <div className="mb-12">
            <div className="mb-6">
              <TypographyDemo 
                tag="h2" 
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '1.5',
                  marginBottom: '8px'
                }}
              >
                Body Text
              </TypographyDemo>
              <p className="text-muted-foreground">
                Body text styles for different content hierarchy and reading contexts.
              </p>
            </div>
            <BodyTextExamples />
          </div>

          {/* Utility Text Section */}
          <div className="mb-12">
            <div className="mb-6">
              <TypographyDemo 
                tag="h2" 
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '1.5',
                  marginBottom: '8px'
                }}
              >
                Utility Text
              </TypographyDemo>
              <p className="text-muted-foreground">
                Specialized text styles for labels, captions, code, and metadata.
              </p>
            </div>
            <UtilityTextExamples />
          </div>

          {/* CSS Implementation Section */}
          <div className="mb-8">
            <div className="mb-6">
              <TypographyDemo 
                tag="h2" 
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '1.5',
                  marginBottom: '8px'
                }}
              >
                Implementation
              </TypographyDemo>
              <p className="text-muted-foreground">
                CSS variables and React component examples for implementing the typography system.
              </p>
            </div>
            <TypographyCSSSection />
          </div>
        </div>
      </div>
    </div>
  );
}