import { useState, useEffect } from "react";
import { CalendarIcon, Filter as FilterIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Slider } from "../ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { type FilterState } from "./types";

interface AdvancedFiltersPopoverProps {
  onFiltersChange?: (filters: FilterState) => void;
  onApplyFilters?: (filters: FilterState) => void;
  initialFilters?: Partial<FilterState>;
}

export default function AdvancedFiltersPopover({ 
  onFiltersChange, 
  onApplyFilters,
  initialFilters = {}
}: AdvancedFiltersPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    dateFrom: undefined,
    dateTo: undefined,
    type: '',
    status: '',
    priority: '',
    department: '',
    amountRange: [0, 1000000000],
    searchQuery: '',
    ...initialFilters
  });

  const [showDateFromPicker, setShowDateFromPicker] = useState(false);
  const [showDateToPicker, setShowDateToPicker] = useState(false);

  // Update filters when initialFilters prop changes
  useEffect(() => {
    if (initialFilters) {
      setFilters(prev => ({
        ...prev,
        ...initialFilters
      }));
    }
  }, [initialFilters]);

  // Filter options
  const typeOptions = [
    { value: 'operational', label: 'Operational' },
    { value: 'investment', label: 'Investment' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'development', label: 'Development' },
    { value: 'emergency', label: 'Emergency' }
  ];

  const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'pending', label: 'Pending Review' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'critical', label: 'Critical' }
  ];

  const departmentOptions = [
    { value: 'finance', label: 'Finance' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'it', label: 'Information Technology' },
    { value: 'operations', label: 'Operations' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'legal', label: 'Legal' },
    { value: 'procurement', label: 'Procurement' }
  ];

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = {
      ...filters,
      [key]: value
    };
    
    setFilters(newFilters);
    
    // Immediately notify parent of filter changes for real-time filtering
    if (onFiltersChange) {
      onFiltersChange(newFilters);
    }
    
    console.log(`Filter ${key} changed:`, value);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      dateFrom: undefined,
      dateTo: undefined,
      type: '',
      status: '',
      priority: '',
      department: '',
      amountRange: [0, 1000000000] as [number, number],
      searchQuery: ''
    };
    
    setFilters(clearedFilters);
    
    // Notify parent component
    if (onFiltersChange) {
      onFiltersChange(clearedFilters);
    }
    
    console.log('Filters cleared');
  };

  const handleApplyFilters = () => {
    console.log('Applying filters:', filters);
    
    // Notify parent with final filter state
    if (onApplyFilters) {
      onApplyFilters(filters);
    } else if (onFiltersChange) {
      onFiltersChange(filters);
    }
    
    setIsOpen(false);
  };

  // Get active filters for button badge
  const getActiveFilters = () => {
    const active = [];
    
    if (filters.searchQuery) {
      active.push({ key: 'searchQuery' as keyof FilterState, label: 'Search', value: filters.searchQuery });
    }
    if (filters.dateFrom) {
      active.push({ key: 'dateFrom' as keyof FilterState, label: 'From', value: formatDate(filters.dateFrom) });
    }
    if (filters.dateTo) {
      active.push({ key: 'dateTo' as keyof FilterState, label: 'To', value: formatDate(filters.dateTo) });
    }
    if (filters.type) {
      const typeLabel = typeOptions.find(opt => opt.value === filters.type)?.label || filters.type;
      active.push({ key: 'type' as keyof FilterState, label: 'Type', value: typeLabel });
    }
    if (filters.status) {
      const statusLabel = statusOptions.find(opt => opt.value === filters.status)?.label || filters.status;
      active.push({ key: 'status' as keyof FilterState, label: 'Status', value: statusLabel });
    }
    if (filters.priority) {
      const priorityLabel = priorityOptions.find(opt => opt.value === filters.priority)?.label || filters.priority;
      active.push({ key: 'priority' as keyof FilterState, label: 'Priority', value: priorityLabel });
    }
    if (filters.department) {
      const deptLabel = departmentOptions.find(opt => opt.value === filters.department)?.label || filters.department;
      active.push({ key: 'department' as keyof FilterState, label: 'Department', value: deptLabel });
    }
    if (filters.amountRange[0] > 0 || filters.amountRange[1] < 1000000000) {
      active.push({ 
        key: 'amountRange' as keyof FilterState, 
        label: 'Amount', 
        value: `${formatCurrency(filters.amountRange[0])} - ${formatCurrency(filters.amountRange[1])}` 
      });
    }
    
    return active;
  };

  const activeFilters = getActiveFilters();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <FilterIcon className="w-4 h-4 mr-2" />
          Filters
          {activeFilters.length > 0 && (
            <Badge variant="secondary" className="ml-2 px-1 py-0 text-xs min-w-4 h-4">
              {activeFilters.length}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end" side="bottom">
        <div className="bg-card text-card-foreground border-0 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border bg-gray-50/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4 text-gray-600" />
                <h3 className="font-medium text-gray-900">Advanced Filters</h3>
                {activeFilters.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFilters.length} active
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Filter Content */}
          <div className="max-h-96 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* Quick Search */}
              <div className="space-y-2">
                <Label htmlFor="search">Quick Search</Label>
                <Input
                  id="search"
                  placeholder="Search records..."
                  value={filters.searchQuery}
                  onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                />
              </div>

              {/* Date Range Row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Date From */}
                <div className="space-y-2">
                  <Label>Date From</Label>
                  <Popover open={showDateFromPicker} onOpenChange={setShowDateFromPicker}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {filters.dateFrom ? formatDate(filters.dateFrom) : "Select"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={filters.dateFrom}
                        onSelect={(date) => {
                          handleFilterChange('dateFrom', date);
                          setShowDateFromPicker(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Date To */}
                <div className="space-y-2">
                  <Label>Date To</Label>
                  <Popover open={showDateToPicker} onOpenChange={setShowDateToPicker}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {filters.dateTo ? formatDate(filters.dateTo) : "Select"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={filters.dateTo}
                        onSelect={(date) => {
                          handleFilterChange('dateTo', date);
                          setShowDateToPicker(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Type and Status Row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Type */}
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {typeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Status */}
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Priority and Department Row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Priority */}
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select value={filters.priority} onValueChange={(value) => handleFilterChange('priority', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorityOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Select value={filters.department} onValueChange={(value) => handleFilterChange('department', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departmentOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Amount Range */}
              <div className="space-y-2">
                <Label>Amount Range</Label>
                <div className="space-y-3">
                  <Slider
                    value={filters.amountRange}
                    onValueChange={(value) => handleFilterChange('amountRange', value as [number, number])}
                    max={1000000000}
                    min={0}
                    step={1000000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{formatCurrency(filters.amountRange[0])}</span>
                    <span>{formatCurrency(filters.amountRange[1])}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-border bg-gray-50/50">
            <div className="flex gap-2">
              <Button onClick={handleApplyFilters} className="flex-1">
                Apply Filters
              </Button>
              <Button variant="outline" onClick={handleClearFilters} className="flex-1">
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}