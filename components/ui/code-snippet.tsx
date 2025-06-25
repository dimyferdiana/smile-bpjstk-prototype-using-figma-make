import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "./utils"
import { Button } from "./button"

interface CodeSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  title?: string
  showCopy?: boolean
  maxHeight?: string
}

const CodeSnippet = React.forwardRef<HTMLDivElement, CodeSnippetProps>(
  ({ className, code, language = "css", title, showCopy = true, maxHeight, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const onCopy = async () => {
      try {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy code:', err)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg border bg-muted/30",
          className
        )}
        {...props}
      >
        {(title || showCopy) && (
          <div className="flex items-center justify-between border-b px-4 py-3">
            {title && (
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
            )}
            {showCopy && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={onCopy}
                disabled={copied}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {copied ? "Copied" : "Copy code"}
                </span>
              </Button>
            )}
          </div>
        )}
        <div 
          className={cn(
            "overflow-auto p-4",
            maxHeight && `max-h-[${maxHeight}]`
          )}
          style={maxHeight ? { maxHeight } : undefined}
        >
          <pre className="text-sm leading-relaxed">
            <code className={cn(
              "relative rounded font-mono text-muted-foreground",
              language && `language-${language}`
            )}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    )
  }
)
CodeSnippet.displayName = "CodeSnippet"

export { CodeSnippet }