import { type TableRow } from "../DataTable";

// Memo form data interface
export interface MemoFormData {
  id: string;
  name: string;
  description: string;
  amount: number;
  status: string;
  priority: string;
  requestDate: string;
  type: string;
  department: string;
  approvedBy: string;
  notes: string;
}

// Filter state interface
export interface FilterState {
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  type: string;
  status: string;
  priority: string;
  department: string;
  amountRange: [number, number];
  searchQuery: string;
}

// Column visibility interface
export interface ColumnVisibility {
  id: boolean;
  name: boolean;
  description: boolean;
  amount: boolean;
  status: boolean;
  priority: boolean;
  requestDate: boolean;
  type: boolean;
  department: boolean;
  approvedBy: boolean;
  notes: boolean;
}

// Memo categories
export const MEMO_CATEGORIES = [
  { value: 'Klaim Langsung', label: 'Klaim Langsung' },
  { value: 'Persekot Kerja', label: 'Persekot Kerja' },
  { value: 'Termin', label: 'Termin' },
  { value: 'Beban Investasi', label: 'Beban Investasi' },
  { value: 'Anggaran Terpusat', label: 'Anggaran Terpusat' },
  { value: 'BYMHD', label: 'BYMHD' }
];

export const STATUS_OPTIONS = [
  { value: 'Draft', label: 'Draft' },
  { value: 'Pending', label: 'Pending Review' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Rejected', label: 'Rejected' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Cancelled', label: 'Cancelled' }
];

export const PRIORITY_OPTIONS = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
  { value: 'Urgent', label: 'Urgent' },
  { value: 'Critical', label: 'Critical' }
];

export const DEPARTMENT_OPTIONS = [
  { value: 'Finance', label: 'Finance' },
  { value: 'Human Resources', label: 'Human Resources' },
  { value: 'Information Technology', label: 'Information Technology' },
  { value: 'Operations', label: 'Operations' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Legal', label: 'Legal' },
  { value: 'Procurement', label: 'Procurement' }
];

// Tab information
export interface TabInfo {
  id: string;
  title: string;
  description: string;
}

export const TAB_INFO: Record<string, TabInfo> = {
  'Klaim Langsung': {
    id: 'klaim-langsung',
    title: 'Klaim Langsung',
    description: 'Data pencairan anggaran untuk klaim langsung yang telah disetujui dan sedang dalam proses.'
  },
  'Persekot Kerja': {
    id: 'persekot-kerja',
    title: 'Persekot Kerja',
    description: 'Daftar persekot kerja yang telah diajukan dan statusnya untuk berbagai kegiatan operasional.'
  },
  'Termin': {
    id: 'termin',
    title: 'Termin',
    description: 'Pembayaran bertahap sesuai dengan jadwal dan milestone yang telah ditetapkan.'
  },
  'Beban Investasi': {
    id: 'beban-investasi',
    title: 'Beban Investasi',
    description: 'Pencairan dana untuk kegiatan investasi dan pengembangan infrastruktur.'
  },
  'Anggaran Terpusat': {
    id: 'anggaran-terpusat',
    title: 'Anggaran Terpusat',
    description: 'Pengelolaan anggaran yang dikelola secara terpusat dari kantor pusat.'
  },
  'BYMHD': {
    id: 'bymhd',
    title: 'BYMHD',
    description: 'Biaya yang dapat dibayar di muka sesuai dengan ketentuan yang berlaku.'
  }
};