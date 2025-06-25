import { useState, useMemo, useEffect } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "../../ui/alert-dialog";
import { DataTable, generateDummyData, type TableRow, type TableAction } from "../../DataTable";
import { toast } from "sonner@2.0.3";
import ColumnConfigPopover from "../ColumnConfigPopover";
import AdvancedFiltersPopover from "../AdvancedFiltersPopover";
import { type ColumnVisibility, type MemoFormData, type TabInfo, type FilterState } from "../types";
import { getVisibleColumns, applyFilters, hasActiveFilters, getFilterSummary } from "../utils";

interface MemoTabBaseProps {
  tabInfo: TabInfo;
  onAddMemo: (category: string) => void;
  onEditMemo: (record: TableRow) => void;
  categoryData: TableRow[];
  onUpdateData: (updatedRecord: TableRow) => void;
  onDeleteData: (recordId: string) => void;
}

export default function MemoTabBase({
  tabInfo,
  onAddMemo,
  onEditMemo,
  categoryData,
  onUpdateData,
  onDeleteData
}: MemoTabBaseProps) {
  // Column visibility state - default shows the first 7 columns
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

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    dateFrom: undefined,
    dateTo: undefined,
    type: '',
    status: '',
    priority: '',
    department: '',
    amountRange: [0, 1000000000],
    searchQuery: ''
  });

  const handleColumnVisibilityChange = (newVisibility: ColumnVisibility) => {
    setColumnVisibility(newVisibility);
    console.log('Column visibility changed:', newVisibility);
  };

  // Handle filter changes
  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    console.log('Filters changed:', newFilters);
  };

  // Apply filters to data using utility function
  const filteredData = useMemo(() => {
    const filtered = applyFilters(categoryData, filters);
    console.log(`Filtering ${categoryData.length} records to ${filtered.length} results`);
    
    if (hasActiveFilters(filters)) {
      console.log('Active filters:', getFilterSummary(filters));
    }
    
    return filtered;
  }, [categoryData, filters]);

  // Handle deleting memo - removed duplicate toast message
  const handleDeleteMemo = (record: TableRow) => {
    onDeleteData(record.id);
    console.log('Memo deleted:', record);
  };

  // Selection state
  const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);

  // Confirmation modal state
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Clear selection when data changes (e.g., when switching tabs or data is refreshed)
  useEffect(() => {
    setSelectedRows([]);
  }, [categoryData]);

  // Handle row selection changes
  const handleSelectionChange = (selectedRows: TableRow[]) => {
    setSelectedRows(selectedRows);
    console.log('Selected rows:', selectedRows);
  };

  // Show confirmation modal
  const handleBulkDeleteClick = () => {
    if (selectedRows.length === 0) return;
    setShowDeleteConfirmation(true);
  };

  // Handle confirmed bulk delete
  const handleConfirmedBulkDelete = async () => {
    if (selectedRows.length === 0) return;

    try {
      // Delete all selected rows
      const deletePromises = selectedRows.map(row => 
        new Promise<void>((resolve) => {
          onDeleteData(row.id);
          resolve();
        })
      );

      await Promise.all(deletePromises);
      
      toast.success(`${selectedRows.length} memo(s) deleted successfully`);
      setSelectedRows([]); // Clear selection after successful deletion
      setShowDeleteConfirmation(false); // Close confirmation modal
      console.log('Bulk delete completed:', selectedRows);
    } catch (error) {
      console.error('Bulk delete failed:', error);
      toast.error('Failed to delete selected memos');
      setShowDeleteConfirmation(false); // Close confirmation modal on error
    }
  };

  // Handle row click for detail view
  const handleRowClick = (row: TableRow) => {
    console.log('Row clicked for details:', row);
    // Default behavior will show the detail dialog
  };

  // Custom table actions
  const getTableActions = (): TableAction[] => [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (record) => {
        console.log('View record:', record);
        // Handle view action
      }
    },
    {
      label: 'Edit',
      icon: <Edit className="h-4 w-4" />,
      onClick: onEditMemo
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: handleDeleteMemo,
      variant: 'destructive'
    }
  ];

  return (
    <div className="bg-card text-card-foreground border border-border shadow-sm rounded-lg flex flex-col h-full min-h-0 p-4 pt-[14px] pr-[14px] pb-[0px] pl-[14px]">
      {/* Header with Filter Button */}
      <div className="mb-4 flex items-start justify-between shrink-0">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900">{tabInfo.title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {tabInfo.description}
          </p>
          {/* Show filter summary */}
          {filteredData.length !== categoryData.length && (
            <p className="text-xs text-blue-600 mt-1">
              Showing {filteredData.length} of {categoryData.length} records
            </p>
          )}
        </div>
        <div className="ml-4 shrink-0 flex gap-2">
          {selectedRows.length > 0 ? (
            // Show delete button when items are selected
            <Button
              variant="destructive"
              onClick={handleBulkDeleteClick}
              className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 focus:ring-red-500 shadow-md transition-all duration-200"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete ({selectedRows.length})
            </Button>
          ) : (
            // Show normal buttons when no items are selected
            <>
              <ColumnConfigPopover onColumnsChange={handleColumnVisibilityChange} />
              <AdvancedFiltersPopover 
                onFiltersChange={handleFiltersChange}
                initialFilters={filters}
              />
            </>
          )}
        </div>
      </div>
      
      {/* Scrollable Table Container */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <DataTable
          columns={getVisibleColumns(columnVisibility)}
          data={filteredData}
          selectable={true}
          paginated={true}
          pageSize={10}
          pageSizeOptions={[10, 20, 30]}
          onSelectionChange={handleSelectionChange}
          onRowClick={handleRowClick}
          actions={getTableActions()}
          emptyMessage={
            filteredData.length === 0 && categoryData.length > 0
              ? `No ${tabInfo.title.toLowerCase()} records match the current filters`
              : `No ${tabInfo.title.toLowerCase()} records found`
          }
          className="h-full"
        />
      </div>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedRows.length} selected memo{selectedRows.length === 1 ? '' : 's'}? 
              This action cannot be undone and will permanently remove the selected records from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmedBulkDelete}
              className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 focus:ring-red-500"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete {selectedRows.length} Memo{selectedRows.length === 1 ? '' : 's'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}