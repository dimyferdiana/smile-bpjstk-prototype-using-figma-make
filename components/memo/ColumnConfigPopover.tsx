import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { type ColumnVisibility } from "./types";

interface ColumnConfigPopoverProps {
  onColumnsChange: (columns: ColumnVisibility) => void;
}

export default function ColumnConfigPopover({ onColumnsChange }: ColumnConfigPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>({
    id: true,
    name: true,
    description: true,
    amount: true,
    status: true,
    priority: true,
    requestDate: true,
    type: false,
    department: false,
    approvedBy: false,
    notes: false
  });

  const columnOptions = [
    { key: 'id' as keyof ColumnVisibility, label: 'ID' },
    { key: 'name' as keyof ColumnVisibility, label: 'Name' },
    { key: 'description' as keyof ColumnVisibility, label: 'Description' },
    { key: 'amount' as keyof ColumnVisibility, label: 'Amount' },
    { key: 'status' as keyof ColumnVisibility, label: 'Status' },
    { key: 'priority' as keyof ColumnVisibility, label: 'Priority' },
    { key: 'requestDate' as keyof ColumnVisibility, label: 'Date' },
    { key: 'type' as keyof ColumnVisibility, label: 'Type' },
    { key: 'department' as keyof ColumnVisibility, label: 'Department' },
    { key: 'approvedBy' as keyof ColumnVisibility, label: 'Approved By' },
    { key: 'notes' as keyof ColumnVisibility, label: 'Notes' }
  ];

  const handleColumnToggle = (columnKey: keyof ColumnVisibility, checked: boolean) => {
    setColumnVisibility(prev => ({
      ...prev,
      [columnKey]: checked
    }));
  };

  const handleApply = () => {
    onColumnsChange(columnVisibility);
    setIsOpen(false);
  };

  const handleSelectAll = () => {
    const allVisible = {
      id: true,
      name: true,
      description: true,
      amount: true,
      status: true,
      priority: true,
      requestDate: true,
      type: true,
      department: true,
      approvedBy: true,
      notes: true
    };
    setColumnVisibility(allVisible);
  };

  const handleSelectNone = () => {
    const allHidden = {
      id: false,
      name: false,
      description: false,
      amount: false,
      status: false,
      priority: false,
      requestDate: false,
      type: false,
      department: false,
      approvedBy: false,
      notes: false
    };
    setColumnVisibility(allHidden);
  };

  const handleSelectDefault = () => {
    const defaultVisible = {
      id: true,
      name: true,
      description: true,
      amount: true,
      status: true,
      priority: true,
      requestDate: true,
      type: false,
      department: false,
      approvedBy: false,
      notes: false
    };
    setColumnVisibility(defaultVisible);
  };

  const visibleCount = Object.values(columnVisibility).filter(Boolean).length;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <Settings className="w-4 h-4 mr-2" />
          Columns
          <Badge variant="secondary" className="ml-2 px-1 py-0 text-xs min-w-4 h-4">
            {visibleCount}
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end" side="bottom">
        <div className="bg-card text-card-foreground border-0 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border bg-gray-50/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-gray-600" />
                <h3 className="font-medium text-gray-900">Configure Columns</h3>
                <Badge variant="secondary" className="ml-2">
                  {visibleCount} of {columnOptions.length}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Choose which columns to display in the table
            </p>
          </div>

          {/* Column Options */}
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {/* Quick Actions */}
            <div className="flex gap-2 pb-2 border-b border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSelectAll}
                className="h-7 px-2 text-xs"
              >
                All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSelectNone}
                className="h-7 px-2 text-xs"
              >
                None
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSelectDefault}
                className="h-7 px-2 text-xs"
              >
                Default
              </Button>
            </div>

            {/* Column Checkboxes */}
            <div className="space-y-3">
              {columnOptions.map((option) => (
                <div key={option.key} className="flex items-center space-x-3">
                  <Checkbox
                    id={option.key}
                    checked={columnVisibility[option.key]}
                    onCheckedChange={(checked) => handleColumnToggle(option.key, checked as boolean)}
                  />
                  <Label
                    htmlFor={option.key}
                    className="text-sm font-normal cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border bg-gray-50/50">
            <div className="flex gap-2">
              <Button onClick={handleApply} size="sm" className="flex-1">
                Apply Changes
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}