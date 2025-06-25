import { Badge } from "../ui/badge";
import { type TableColumn, type TableRow } from "../DataTable";
import { type ColumnVisibility, type FilterState } from "./types";

// Helper function to create all possible table columns
export function createAllTableColumns(): TableColumn[] {
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
    { key: 'requestDate', label: 'Date', sortable: true, width: '130px' },
    { key: 'type', label: 'Type', sortable: true, width: '120px' },
    { key: 'department', label: 'Department', sortable: true, width: '130px' },
    { key: 'approvedBy', label: 'Approved By', sortable: true, width: '120px' },
    { key: 'notes', label: 'Notes', width: '200px' }
  ];
}

// Filter columns based on visibility settings
export function getVisibleColumns(columnVisibility: ColumnVisibility): TableColumn[] {
  const allColumns = createAllTableColumns();
  return allColumns.filter(column => {
    const key = column.key as keyof ColumnVisibility;
    return columnVisibility[key];
  });
}

// Apply filters to table data
export function applyFilters(data: TableRow[], filters: FilterState): TableRow[] {
  let filtered = [...data];

  // Text search filter - search across multiple fields
  if (filters.searchQuery && filters.searchQuery.trim()) {
    const query = filters.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(row => {
      const searchFields = [
        row.id?.toString() || '',
        row.name?.toString() || '',
        row.description?.toString() || '',
        row.notes?.toString() || '',
        row.department?.toString() || '',
        row.approvedBy?.toString() || ''
      ];
      
      return searchFields.some(field => 
        field.toLowerCase().includes(query)
      );
    });
  }

  // Date range filter
  if (filters.dateFrom || filters.dateTo) {
    filtered = filtered.filter(row => {
      if (!row.requestDate) return true;
      
      const rowDate = new Date(row.requestDate);
      
      // Check if date is valid
      if (isNaN(rowDate.getTime())) return true;
      
      if (filters.dateFrom && rowDate < filters.dateFrom) {
        return false;
      }
      
      if (filters.dateTo && rowDate > filters.dateTo) {
        return false;
      }
      
      return true;
    });
  }

  // Type filter
  if (filters.type && filters.type.trim()) {
    filtered = filtered.filter(row => {
      if (!row.type) return false;
      return row.type.toLowerCase().includes(filters.type.toLowerCase());
    });
  }

  // Status filter
  if (filters.status && filters.status.trim()) {
    filtered = filtered.filter(row => {
      if (!row.status) return false;
      return row.status.toLowerCase().includes(filters.status.toLowerCase());
    });
  }

  // Priority filter
  if (filters.priority && filters.priority.trim()) {
    filtered = filtered.filter(row => {
      if (!row.priority) return false;
      return row.priority.toLowerCase().includes(filters.priority.toLowerCase());
    });
  }

  // Department filter
  if (filters.department && filters.department.trim()) {
    filtered = filtered.filter(row => {
      if (!row.department) return false;
      return row.department.toLowerCase().includes(filters.department.toLowerCase());
    });
  }

  // Amount range filter
  if (filters.amountRange && (filters.amountRange[0] > 0 || filters.amountRange[1] < 1000000000)) {
    filtered = filtered.filter(row => {
      if (!row.amount) return false;
      
      const amount = typeof row.amount === 'number' 
        ? row.amount 
        : parseFloat(row.amount.toString().replace(/[^\d.-]/g, ''));
      
      if (isNaN(amount)) return false;
      
      return amount >= filters.amountRange[0] && amount <= filters.amountRange[1];
    });
  }

  return filtered;
}

// Check if any filters are active
export function hasActiveFilters(filters: FilterState): boolean {
  return !!(
    filters.searchQuery?.trim() ||
    filters.dateFrom ||
    filters.dateTo ||
    filters.type?.trim() ||
    filters.status?.trim() ||
    filters.priority?.trim() ||
    filters.department?.trim() ||
    (filters.amountRange && (filters.amountRange[0] > 0 || filters.amountRange[1] < 1000000000))
  );
}

// Get a summary of active filters
export function getFilterSummary(filters: FilterState): string[] {
  const active = [];
  
  if (filters.searchQuery?.trim()) {
    active.push(`Search: "${filters.searchQuery}"`);
  }
  
  if (filters.dateFrom) {
    active.push(`From: ${filters.dateFrom.toLocaleDateString('id-ID')}`);
  }
  
  if (filters.dateTo) {
    active.push(`To: ${filters.dateTo.toLocaleDateString('id-ID')}`);
  }
  
  if (filters.type?.trim()) {
    active.push(`Type: ${filters.type}`);
  }
  
  if (filters.status?.trim()) {
    active.push(`Status: ${filters.status}`);
  }
  
  if (filters.priority?.trim()) {
    active.push(`Priority: ${filters.priority}`);
  }
  
  if (filters.department?.trim()) {
    active.push(`Department: ${filters.department}`);
  }
  
  if (filters.amountRange && (filters.amountRange[0] > 0 || filters.amountRange[1] < 1000000000)) {
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
    };
    
    active.push(`Amount: ${formatCurrency(filters.amountRange[0])} - ${formatCurrency(filters.amountRange[1])}`);
  }
  
  return active;
}