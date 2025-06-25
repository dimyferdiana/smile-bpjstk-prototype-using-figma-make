import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Eye, Edit, Trash2, ChevronLeft, ChevronRight, Save, X, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// Types
export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
  width?: string;
}

export interface TableRow {
  id: string | number;
  [key: string]: any;
}

export interface TableAction {
  label: string;
  icon: React.ReactNode;
  onClick: (row: TableRow) => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  disabled?: (row: TableRow) => boolean;
}

interface DataTableProps {
  columns: TableColumn[];
  data: TableRow[];
  actions?: TableAction[];
  selectable?: boolean;
  paginated?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  onSelectionChange?: (selectedRows: TableRow[]) => void;
  onRowClick?: (row: TableRow) => void;
  emptyMessage?: string;
  className?: string;
}

// Helper function to format values for display
const formatValue = (value: any): string => {
  if (value === null || value === undefined) return 'N/A';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (typeof value === 'number') {
    // Format currency if it looks like a monetary value
    if (value > 1000 && Math.abs(value) % 1 === 0) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value);
    }
    return value.toLocaleString();
  }
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

// Sorting helper functions
export const sortingHelpers = {
  // Parse date values for sorting
  parseDate: (value: any): Date => {
    if (!value) return new Date(0);
    const date = new Date(value);
    return isNaN(date.getTime()) ? new Date(0) : date;
  },

  // Parse numeric values (including currency) for sorting
  parseNumber: (value: any): number => {
    if (typeof value === 'number') return value;
    if (!value) return 0;
    const cleaned = value.toString().replace(/[^\d.-]/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  },

  // Get status priority for sorting
  getStatusPriority: (status: string): number => {
    const statusOrder = {
      'draft': 0,
      'pending': 1,
      'pending review': 1,
      'approved': 2,
      'rejected': 3,
      'completed': 4,
      'cancelled': 5
    };
    return statusOrder[status?.toLowerCase()] ?? 999;
  },

  // Get priority level for sorting
  getPriorityLevel: (priority: string): number => {
    const priorityOrder = {
      'low': 0,
      'medium': 1,
      'high': 2,
      'urgent': 3,
      'critical': 4
    };
    return priorityOrder[priority?.toLowerCase()] ?? 999;
  }
};

// Helper function to get editable fields (excluding certain system fields)
const getEditableFields = (row: TableRow): string[] => {
  const excludeFields = ['id', 'createdAt', 'updatedAt', 'actions'];
  return Object.keys(row).filter(key => !excludeFields.includes(key));
};

// Dialog Components
function ViewDialog({ row, open, onClose }: { row: TableRow | null; open: boolean; onClose: () => void }) {
  if (!row) return null;

  const fields = Object.entries(row).filter(([key]) => key !== 'id');

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            View Record Details
          </DialogTitle>
          <DialogDescription>
            View detailed information for this record. All fields are displayed in read-only format.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Record ID */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Record ID:</span>
              <Badge variant="outline">{row.id}</Badge>
            </div>
          </div>

          {/* Record Details */}
          <div className="space-y-4">
            {fields.map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label className="text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </Label>
                <div className="p-3 bg-muted/30 rounded-md border">
                  <p className="text-sm text-foreground">
                    {formatValue(value)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EditDialog({ row, open, onClose, onSave }: { 
  row: TableRow | null; 
  open: boolean; 
  onClose: () => void;
  onSave: (updatedRow: TableRow) => void;
}) {
  const [formData, setFormData] = useState<TableRow>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (row && open) {
      setFormData({ ...row });
    }
  }, [row, open]);

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = async () => {
    if (!row) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSave(formData);
    setIsLoading(false);
    onClose();
  };

  if (!row) return null;

  const editableFields = getEditableFields(row);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit className="w-5 h-5" />
            Edit Record
          </DialogTitle>
          <DialogDescription>
            Edit the record information below. Make your changes and click "Save Changes" to update the record.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Record ID (Read-only) */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Record ID:</span>
              <Badge variant="outline">{row.id}</Badge>
            </div>
          </div>

          {/* Editable Fields */}
          <div className="space-y-4">
            {editableFields.map((key) => {
              const value = formData[key];
              const fieldLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
              
              return (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key} className="text-sm font-medium">
                    {fieldLabel}
                  </Label>
                  
                  {/* Different input types based on field type */}
                  {key.toLowerCase().includes('description') || key.toLowerCase().includes('notes') ? (
                    <Textarea
                      id={key}
                      value={value || ''}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      placeholder={`Enter ${fieldLabel.toLowerCase()}`}
                      rows={3}
                    />
                  ) : key.toLowerCase().includes('status') ? (
                    <Select value={value || ''} onValueChange={(val) => handleInputChange(key, val)}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${fieldLabel.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : key.toLowerCase().includes('priority') ? (
                    <Select value={value || ''} onValueChange={(val) => handleInputChange(key, val)}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${fieldLabel.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : key.toLowerCase().includes('amount') || key.toLowerCase().includes('value') ? (
                    <Input
                      id={key}
                      type="number"
                      value={value || ''}
                      onChange={(e) => handleInputChange(key, parseFloat(e.target.value) || 0)}
                      placeholder={`Enter ${fieldLabel.toLowerCase()}`}
                    />
                  ) : (
                    <Input
                      id={key}
                      value={value || ''}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      placeholder={`Enter ${fieldLabel.toLowerCase()}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DeleteDialog({ row, open, onClose, onDelete }: { 
  row: TableRow | null; 
  open: boolean; 
  onClose: () => void;
  onDelete: (row: TableRow) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (!row) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onDelete(row);
    setIsLoading(false);
    onClose();
  };

  if (!row) return null;

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-destructive" />
            Delete Record
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this record? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        {/* Record Summary */}
        <div className="my-4 p-4 bg-muted/50 rounded-lg border">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Record ID:</span>
              <Badge variant="outline">{row.id}</Badge>
            </div>
            {row.name && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Name:</span>
                <span className="text-sm">{row.name}</span>
              </div>
            )}
            {row.description && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Description:</span>
                <span className="text-sm truncate max-w-[200px]">{row.description}</span>
              </div>
            )}
            {row.status && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Status:</span>
                <Badge variant="secondary">{row.status}</Badge>
              </div>
            )}
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// Actions Menu Component
function ActionsMenu({ row, actions }: { row: TableRow; actions: TableAction[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleActionClick = (action: TableAction) => {
    action.onClick(row);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 w-7 p-0"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open actions menu</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-1" align="end">
        <div className="space-y-1">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="w-full justify-start h-8 px-2"
              onClick={() => handleActionClick(action)}
              disabled={action.disabled?.(row)}
            >
              <span className="mr-2 flex-shrink-0">
                {action.icon}
              </span>
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function DataTable({
  columns,
  data,
  actions = [],
  selectable = false,
  paginated = true,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50],
  onSelectionChange,
  onRowClick,
  emptyMessage = "No data available",
  className = ""
}: DataTableProps) {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);
  
  // Selection state
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());
  
  // Sorting state
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  // Dialog states
  const [viewDialog, setViewDialog] = useState<{ open: boolean; row: TableRow | null }>({ open: false, row: null });
  const [editDialog, setEditDialog] = useState<{ open: boolean; row: TableRow | null }>({ open: false, row: null });
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; row: TableRow | null }>({ open: false, row: null });

  // Data state for handling updates and deletions
  const [tableData, setTableData] = useState<TableRow[]>(data);

  // Update tableData when data prop changes
  useEffect(() => {
    setTableData(data);
  }, [data]);

  // Enhanced sort data with custom comparators
  const sortedData = useMemo(() => {
    if (!sortConfig) return tableData;
    
    return [...tableData].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      
      // Custom sorting logic based on column type
      let comparison = 0;
      
      // Date sorting
      if (sortConfig.key.toLowerCase().includes('date')) {
        const aDate = new Date(aVal);
        const bDate = new Date(bVal);
        
        // Handle invalid dates
        if (isNaN(aDate.getTime()) && isNaN(bDate.getTime())) comparison = 0;
        else if (isNaN(aDate.getTime())) comparison = 1;
        else if (isNaN(bDate.getTime())) comparison = -1;
        else comparison = aDate.getTime() - bDate.getTime();
      }
      // Amount/numeric sorting
      else if (sortConfig.key.toLowerCase().includes('amount') || sortConfig.key.toLowerCase().includes('value')) {
        const aNum = typeof aVal === 'number' ? aVal : parseFloat(aVal?.toString().replace(/[^\d.-]/g, '') || '0');
        const bNum = typeof bVal === 'number' ? bVal : parseFloat(bVal?.toString().replace(/[^\d.-]/g, '') || '0');
        comparison = aNum - bNum;
      }
      // Status sorting (with priority order)
      else if (sortConfig.key.toLowerCase().includes('status')) {
        const statusOrder = {
          'draft': 0,
          'pending': 1,
          'pending review': 1,
          'approved': 2,
          'rejected': 3,
          'completed': 4,
          'cancelled': 5
        };
        
        const aOrder = statusOrder[aVal?.toLowerCase()] ?? 999;
        const bOrder = statusOrder[bVal?.toLowerCase()] ?? 999;
        comparison = aOrder - bOrder;
      }
      // Priority sorting (with priority order)
      else if (sortConfig.key.toLowerCase().includes('priority')) {
        const priorityOrder = {
          'low': 0,
          'medium': 1,
          'high': 2,
          'urgent': 3,
          'critical': 4
        };
        
        const aOrder = priorityOrder[aVal?.toLowerCase()] ?? 999;
        const bOrder = priorityOrder[bVal?.toLowerCase()] ?? 999;
        comparison = aOrder - bOrder;
      }
      // Default string/generic sorting
      else {
        if (aVal === null || aVal === undefined) comparison = 1;
        else if (bVal === null || bVal === undefined) comparison = -1;
        else if (aVal < bVal) comparison = -1;
        else if (aVal > bVal) comparison = 1;
        else comparison = 0;
      }
      
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [tableData, sortConfig]);

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!paginated) return sortedData;
    
    const startIndex = (currentPage - 1) * currentPageSize;
    return sortedData.slice(startIndex, startIndex + currentPageSize);
  }, [sortedData, currentPage, currentPageSize, paginated]);

  // Calculate pagination info
  const totalPages = Math.ceil(sortedData.length / currentPageSize);
  const startIndex = (currentPage - 1) * currentPageSize + 1;
  const endIndex = Math.min(currentPage * currentPageSize, sortedData.length);

  // Handle sorting
  const handleSort = (key: string) => {
    setSortConfig(prev => {
      if (prev?.key === key) {
        return prev.direction === 'asc' ? { key, direction: 'desc' } : null;
      }
      return { key, direction: 'asc' };
    });
  };

  // Handle row selection
  const handleRowSelect = (rowId: string | number, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedRows(newSelected);
    
    // Notify parent component
    if (onSelectionChange) {
      const selectedRowData = tableData.filter(row => newSelected.has(row.id));
      onSelectionChange(selectedRowData);
    }
  };

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(paginatedData.map(row => row.id));
      setSelectedRows(allIds);
      if (onSelectionChange) {
        onSelectionChange(paginatedData);
      }
    } else {
      setSelectedRows(new Set());
      if (onSelectionChange) {
        onSelectionChange([]);
      }
    }
  };

  // Handle page size change
  const handlePageSizeChange = (newPageSize: string) => {
    setCurrentPageSize(parseInt(newPageSize));
    setCurrentPage(1); // Reset to first page
  };

  // Handle dialog actions with useCallback for stable references
  const handleView = useCallback((row: TableRow) => {
    setViewDialog({ open: true, row });
  }, []);

  const handleEdit = useCallback((row: TableRow) => {
    setEditDialog({ open: true, row });
  }, []);

  const handleDelete = useCallback((row: TableRow) => {
    setDeleteDialog({ open: true, row });
  }, []);

  const handleSaveEdit = (updatedRow: TableRow) => {
    setTableData(prev => prev.map(row => row.id === updatedRow.id ? updatedRow : row));
    console.log('Record updated:', updatedRow);
  };

  const handleConfirmDelete = (rowToDelete: TableRow) => {
    setTableData(prev => prev.filter(row => row.id !== rowToDelete.id));
    setSelectedRows(prev => {
      const newSelected = new Set(prev);
      newSelected.delete(rowToDelete.id);
      return newSelected;
    });
    console.log('Record deleted:', rowToDelete);
  };

  // Combine built-in actions with custom actions, avoiding duplication
  const allActions = useMemo(() => {
    // Create built-in actions inside useMemo to ensure proper dependencies
    const builtInActions: TableAction[] = [
      {
        label: "View",
        icon: <Eye className="h-4 w-4" />,
        onClick: handleView,
        variant: "ghost" as const
      },
      {
        label: "Edit",
        icon: <Edit className="h-4 w-4" />,
        onClick: handleEdit,
        variant: "ghost" as const
      },
      {
        label: "Delete",
        icon: <Trash2 className="h-4 w-4" />,
        onClick: handleDelete,
        variant: "ghost" as const,
        disabled: (row: TableRow) => row.status === 'Approved' // Example: disable delete for approved items
      }
    ];

    const customActionLabels = actions.map(action => action.label.toLowerCase());
    const filteredBuiltInActions = builtInActions.filter(
      builtIn => !customActionLabels.includes(builtIn.label.toLowerCase())
    );
    
    return [...filteredBuiltInActions, ...actions];
  }, [actions, handleView, handleEdit, handleDelete]);

  // Calculate if all visible rows are selected
  const allSelected = paginatedData.length > 0 && paginatedData.every(row => selectedRows.has(row.id));
  const someSelected = paginatedData.some(row => selectedRows.has(row.id));

  // Show actions column if there are any actions
  const showActionsColumn = allActions.length > 0;

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Table Container */}
      <div className="flex-1 overflow-hidden border rounded-lg bg-card">
        {/* Scrollable Table */}
        <div className="overflow-auto h-full">
          <table className="w-full table-auto">
            {/* Sticky Header */}
            <thead className="bg-muted sticky top-0 z-10">
              <tr className="border-b">
                {selectable && (
                  <th className="px-3 py-3 text-left w-12">
                    <Checkbox
                      checked={allSelected}
                      onCheckedChange={handleSelectAll}
                      ref={(el) => {
                        if (el) el.indeterminate = someSelected && !allSelected;
                      }}
                      aria-label="Select all rows"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`px-3 py-3 text-left font-medium text-muted-foreground ${
                      column.sortable ? 'cursor-pointer hover:text-foreground select-none' : ''
                    }`}
                    style={{ width: column.width }}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    <div className="flex items-center gap-2">
                      {column.label}
                      {column.sortable && sortConfig?.key === column.key && (
                        <span className="text-xs">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
                {showActionsColumn && (
                  <th className="px-3 py-3 text-left font-medium text-muted-foreground w-12">
                    <span className="sr-only">Actions</span>
                  </th>
                )}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-border">
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0) + (showActionsColumn ? 1 : 0)}
                    className="px-3 py-8 text-center text-muted-foreground"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                paginatedData.map((row) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-muted/50 cursor-pointer transition-colors ${
                      selectedRows.has(row.id) ? 'bg-accent/50' : ''
                    }`}
                    onClick={() => {
                      handleView(row);
                      onRowClick?.(row);
                    }}
                  >
                    {selectable && (
                      <td className="px-3 py-4">
                        <Checkbox
                          checked={selectedRows.has(row.id)}
                          onCheckedChange={(checked) => handleRowSelect(row.id, checked as boolean)}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Select row ${row.id}`}
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={column.key} className="px-3 py-4">
                        {column.render ? column.render(row[column.key], row) : (
                          <span className="text-sm text-foreground">
                            {formatValue(row[column.key])}
                          </span>
                        )}
                      </td>
                    ))}
                    {showActionsColumn && (
                      <td className="px-3 py-4">
                        <ActionsMenu row={row} actions={allActions} />
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {paginated && (
        <div className="flex items-center justify-between px-4 py-3 bg-card">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Rows per page:</span>
              <Select value={currentPageSize.toString()} onValueChange={handlePageSizeChange}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {pageSizeOptions.map((size) => (
                    <SelectItem key={size} value={size.toString()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {startIndex} to {endIndex} of {sortedData.length} entries
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-8 h-8"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Dialog Components */}
      <ViewDialog
        row={viewDialog.row}
        open={viewDialog.open}
        onClose={() => setViewDialog({ open: false, row: null })}
      />
      
      <EditDialog
        row={editDialog.row}
        open={editDialog.open}
        onClose={() => setEditDialog({ open: false, row: null })}
        onSave={handleSaveEdit}
      />
      
      <DeleteDialog
        row={deleteDialog.row}
        open={deleteDialog.open}
        onClose={() => setDeleteDialog({ open: false, row: null })}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
}

// Helper functions for generating dummy data
export function generateDummyData(count: number = 20): TableRow[] {
  const statuses = ['Draft', 'Pending', 'Approved', 'Rejected', 'Completed'];
  const priorities = ['Low', 'Medium', 'High', 'Urgent'];
  const types = ['Operational', 'Investment', 'Maintenance', 'Development', 'Emergency'];
  const departments = ['Finance', 'HR', 'IT', 'Operations', 'Marketing'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `MEMO-${String(i + 1).padStart(4, '0')}`,
    name: `Memo Pencairan ${i + 1}`,
    description: `Description for memo pencairan anggaran ${i + 1}`,
    amount: Math.floor(Math.random() * 1000000000) + 1000000,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
    type: types[Math.floor(Math.random() * types.length)],
    department: departments[Math.floor(Math.random() * departments.length)],
    requestDate: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    approvedBy: `User ${Math.floor(Math.random() * 20) + 1}`,
    notes: `Additional notes for memo ${i + 1}`
  }));
}

export function createTableColumns(): TableColumn[] {
  return [
    { key: 'id', label: 'ID', sortable: true, width: '120px' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'description', label: 'Description', width: '300px' },
    { 
      key: 'amount', 
      label: 'Amount', 
      sortable: true, 
      width: '150px',
      render: (value) => (
        <span className="font-medium">
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(value)}
        </span>
      )
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true, 
      width: '120px',
      render: (value) => (
        <Badge 
          variant={
            value === 'Approved' ? 'default' : 
            value === 'Pending' ? 'secondary' : 
            value === 'Rejected' ? 'destructive' : 
            'outline'
          }
        >
          {value}
        </Badge>
      )
    },
    { key: 'priority', label: 'Priority', sortable: true, width: '100px' },
    { key: 'requestDate', label: 'Date', sortable: true, width: '130px' }
  ];
}