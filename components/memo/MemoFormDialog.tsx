import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { toast } from "sonner@2.0.3";
import { type TableRow } from "../DataTable";
import { 
  type MemoFormData, 
  MEMO_CATEGORIES, 
  STATUS_OPTIONS, 
  PRIORITY_OPTIONS, 
  DEPARTMENT_OPTIONS 
} from "./types";

interface MemoFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MemoFormData) => void;
  editData?: TableRow | null;
  selectedCategory?: string;
}

export default function MemoFormDialog({ 
  isOpen, 
  onClose, 
  onSubmit, 
  editData = null,
  selectedCategory = ''
}: MemoFormDialogProps) {
  const [formData, setFormData] = useState<MemoFormData>({
    id: '',
    name: '',
    description: '',
    amount: 0,
    status: 'Draft',
    priority: 'Medium',
    requestDate: new Date().toISOString().split('T')[0],
    type: selectedCategory || '',
    department: '',
    approvedBy: '',
    notes: ''
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize form data when editing or when dialog opens
  useEffect(() => {
    if (editData) {
      setFormData({
        id: editData.id,
        name: editData.name,
        description: editData.description,
        amount: typeof editData.amount === 'string' ? parseFloat(editData.amount.replace(/[^0-9.-]+/g, "")) : editData.amount,
        status: editData.status,
        priority: editData.priority,
        requestDate: editData.requestDate,
        type: editData.type || selectedCategory || '',
        department: editData.department || '',
        approvedBy: editData.approvedBy || '',
        notes: editData.notes || ''
      });
    } else {
      setFormData({
        id: `MEMO-${Date.now()}`,
        name: '',
        description: '',
        amount: 0,
        status: 'Draft',
        priority: 'Medium',
        requestDate: new Date().toISOString().split('T')[0],
        type: selectedCategory || '',
        department: '',
        approvedBy: '',
        notes: ''
      });
    }
    setErrors({});
  }, [editData, selectedCategory, isOpen]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.type) newErrors.type = 'Memo category is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (formData.amount <= 0) newErrors.amount = 'Amount must be greater than 0';
    if (!formData.requestDate) newErrors.requestDate = 'Request date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    onSubmit(formData);
    onClose();
    toast.success(editData ? 'Memo updated successfully' : 'Memo created successfully');
  };

  const handleInputChange = (field: keyof MemoFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editData ? 'Edit Memo' : 'Add New Memo'}
          </DialogTitle>
          <DialogDescription>
            {editData 
              ? 'Update the memo details below.' 
              : 'Fill in the details to create a new memo.'
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Memo ID (read-only for editing) */}
          <div className="space-y-2">
            <Label htmlFor="id">Memo ID</Label>
            <Input
              id="id"
              value={formData.id}
              readOnly
              className="bg-gray-50"
            />
          </div>

          {/* Memo Category */}
          <div className="space-y-2">
            <Label htmlFor="type">
              Memo Category <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.type}
              onValueChange={(value) => handleInputChange('type', value)}
            >
              <SelectTrigger className={errors.type ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select memo category" />
              </SelectTrigger>
              <SelectContent>
                {MEMO_CATEGORIES.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.type && <p className="text-sm text-red-500">{errors.type}</p>}
          </div>

          {/* Basic Information Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Memo Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter memo name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Department */}
            <div className="space-y-2">
              <Label htmlFor="department">
                Department <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.department}
                onValueChange={(value) => handleInputChange('department', value)}
              >
                <SelectTrigger className={errors.department ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {DEPARTMENT_OPTIONS.map((dept) => (
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.department && <p className="text-sm text-red-500">{errors.department}</p>}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter detailed description"
              rows={3}
              className={errors.description ? 'border-red-500' : ''}
            />
            {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
          </div>

          {/* Amount and Date Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount">
                Amount (IDR) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
                placeholder="0"
                min="0"
                step="1000"
                className={errors.amount ? 'border-red-500' : ''}
              />
              {formData.amount > 0 && (
                <p className="text-sm text-gray-600">{formatCurrency(formData.amount)}</p>
              )}
              {errors.amount && <p className="text-sm text-red-500">{errors.amount}</p>}
            </div>

            {/* Request Date */}
            <div className="space-y-2">
              <Label htmlFor="requestDate">
                Request Date <span className="text-red-500">*</span>
              </Label>
              <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${errors.requestDate ? 'border-red-500' : ''}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.requestDate 
                      ? new Date(formData.requestDate).toLocaleDateString('id-ID')
                      : "Select date"
                    }
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.requestDate ? new Date(formData.requestDate) : undefined}
                    onSelect={(date) => {
                      if (date) {
                        handleInputChange('requestDate', date.toISOString().split('T')[0]);
                        setShowDatePicker(false);
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.requestDate && <p className="text-sm text-red-500">{errors.requestDate}</p>}
            </div>
          </div>

          {/* Status and Priority Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleInputChange('status', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STATUS_OPTIONS.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => handleInputChange('priority', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRIORITY_OPTIONS.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      {priority.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Approved By */}
          <div className="space-y-2">
            <Label htmlFor="approvedBy">Approved By</Label>
            <Input
              id="approvedBy"
              value={formData.approvedBy}
              onChange={(e) => handleInputChange('approvedBy', e.target.value)}
              placeholder="Enter approver name"
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              placeholder="Additional notes or comments"
              rows={2}
            />
          </div>

          <DialogFooter className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {editData ? 'Update Memo' : 'Create Memo'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}