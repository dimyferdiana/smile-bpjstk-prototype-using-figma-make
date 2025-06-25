import { useState, useEffect, useRef } from "react";
import { Search, ArrowRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface SearchItem {
  id: string;
  title: string;
  type: 'parent' | 'instance';
  parent?: string;
  description?: string;
  category?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTab?: (title: string) => void;
}

// Cleaned up search data without ShadCNUI references
const searchData: SearchItem[] = [
  // Parent items
  {
    id: 'beranda',
    title: 'Beranda',
    type: 'parent',
    category: 'Navigation',
    description: 'Main dashboard and overview'
  },
  {
    id: 'components',
    title: 'Components',
    type: 'parent',
    category: 'Development',
    description: 'Component library and design system'
  },
  {
    id: 'memo',
    title: 'Memo Pencairan Anggaran',
    type: 'parent',
    category: 'Finance',
    description: 'Budget disbursement memo management'
  },
  {
    id: 'keuangan',
    title: 'Keuangan',
    type: 'parent',
    category: 'Finance',
    description: 'Financial management modules'
  },
  {
    id: 'pelayanan',
    title: 'Pelayanan',
    type: 'parent',
    category: 'Services',
    description: 'Service management and delivery'
  },
  {
    id: 'pengajuan',
    title: 'Pengajuan',
    type: 'parent',
    category: 'Workflow',
    description: 'Application and request management'
  },
  {
    id: 'laporan',
    title: 'Laporan',
    type: 'parent',
    category: 'Reports',
    description: 'Reports and analytics'
  },

  // Instance items under Components
  {
    id: 'buttons',
    title: 'Buttons',
    type: 'instance',
    parent: 'components',
    category: 'UI Components',
    description: 'Button variants and examples'
  },
  {
    id: 'forms',
    title: 'Forms',
    type: 'instance',
    parent: 'components',
    category: 'UI Components',
    description: 'Form inputs and validation'
  },
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'instance',
    parent: 'components',
    category: 'UI Components',
    description: 'Navigation components and menus'
  },
  {
    id: 'layout',
    title: 'Layout',
    type: 'instance',
    parent: 'components',
    category: 'UI Components',
    description: 'Layout and container components'
  },

  // Instance items under Memo Pencairan Anggaran
  {
    id: 'klaim-langsung',
    title: 'Klaim Langsung',
    type: 'instance',
    parent: 'memo',
    category: 'Memo Types',
    description: 'Direct claim processing'
  },
  {
    id: 'persekot-kerja',
    title: 'Persekot Kerja',
    type: 'instance',
    parent: 'memo',
    category: 'Memo Types',
    description: 'Work advance processing'
  },
  {
    id: 'termin',
    title: 'Termin',
    type: 'instance',
    parent: 'memo',
    category: 'Memo Types',
    description: 'Term-based payments'
  },
  {
    id: 'beban-investasi',
    title: 'Beban Investasi',
    type: 'instance',
    parent: 'memo',
    category: 'Memo Types',
    description: 'Investment cost management'
  },

  // Other instance items
  {
    id: 'budget-planning',
    title: 'Budget Planning',
    type: 'instance',
    parent: 'keuangan',
    category: 'Financial Planning',
    description: 'Annual budget planning and forecasting'
  },
  {
    id: 'expense-tracking',
    title: 'Expense Tracking',
    type: 'instance',
    parent: 'keuangan',
    category: 'Financial Monitoring',
    description: 'Track and monitor expenses'
  },
  {
    id: 'customer-service',
    title: 'Customer Service',
    type: 'instance',
    parent: 'pelayanan',
    category: 'Customer Support',
    description: 'Customer service management'
  },
  {
    id: 'service-requests',
    title: 'Service Requests',
    type: 'instance',
    parent: 'pelayanan',
    category: 'Request Management',
    description: 'Handle service requests and tickets'
  }
];

export default function SearchModal({ isOpen, onClose, onOpenTab }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter search results
  const filteredResults = query.trim() === '' 
    ? [] 
    : searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase())
      );

  // Group results: if a parent matches, show it with its instances
  const groupedResults = () => {
    const results: SearchItem[] = [];
    const addedParents = new Set<string>();

    filteredResults.forEach(item => {
      if (item.type === 'parent') {
        results.push(item);
        addedParents.add(item.id);
        
        // Add instances of this parent
        const instances = searchData.filter(child => 
          child.type === 'instance' && child.parent === item.id
        );
        results.push(...instances);
      } else if (item.type === 'instance' && !addedParents.has(item.parent || '')) {
        // Add parent first if not already added
        const parent = searchData.find(p => p.id === item.parent && p.type === 'parent');
        if (parent) {
          results.push(parent);
          addedParents.add(parent.id);
        }
        results.push(item);
      }
    });

    return results;
  };

  const results = groupedResults();

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            handleItemClick(results[selectedIndex]);
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle item click
  const handleItemClick = (item: SearchItem) => {
    onOpenTab?.(item.title);
    onClose();
  };

  // Update selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Global Search</DialogTitle>
        <DialogDescription className="sr-only">
          Search for menu items, components, and features across the application.
        </DialogDescription>

        {/* Search Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search menu items, components, and features..."
            className="flex-1 bg-transparent border-none outline-none text-base placeholder:text-gray-500"
            aria-label="Search input"
          />
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">⌘</kbd>
            <span>+</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">K</kbd>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto" role="listbox" aria-label="Search results">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">Start typing to search menu items and components</p>
              <p className="text-xs mt-1">Use <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">↑</kbd> <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">↓</kbd> to navigate</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">No results found for "{query}"</p>
              <p className="text-xs mt-1">Try a different search term</p>
            </div>
          ) : (
            <div className="py-2">
              {results.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
                    index === selectedIndex ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                  }`}
                  role="option"
                  aria-selected={index === selectedIndex}
                  aria-label={`${item.title} - ${item.type} ${item.description ? `- ${item.description}` : ''}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${item.type === 'parent' ? 'text-gray-900' : 'text-gray-700'}`}>
                        {item.title}
                      </span>
                      {item.type === 'parent' && (
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                          Parent
                        </span>
                      )}
                      {item.type === 'instance' && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                          Instance
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-0.5 truncate">{item.description}</p>
                    )}
                    {item.category && (
                      <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    {item.type === 'instance' ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">↵</kbd>
              <span>to select</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">↓</kbd>
              <span>to navigate</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">Esc</kbd>
            <span>to close</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}