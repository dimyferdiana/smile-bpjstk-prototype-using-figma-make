import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { generateDummyData, type TableRow } from "../components/DataTable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { toast } from "sonner@2.0.3";

// Import memo components
import MemoFormDialog from "../components/memo/MemoFormDialog";
import KlaimLangsungTab from "../components/memo/tabs/KlaimLangsungTab";
import PersekotKerjaTab from "../components/memo/tabs/PersekotKerjaTab";
import TerminTab from "../components/memo/tabs/TerminTab";
import BebanInvestasiTab from "../components/memo/tabs/BebanInvestasiTab";
import AnggaranTerpusatTab from "../components/memo/tabs/AnggaranTerpusatTab";
import BYMHDTab from "../components/memo/tabs/BYMHDTab";
import { MEMO_CATEGORIES, type MemoFormData } from "../components/memo/types";
import { memoDatabase, type MemoRecord } from "../components/memo/database";

function NavbarFillingForm({ onAddMemo }: { onAddMemo: () => void }) {
  return (
    <div className="relative w-full" data-name="navbar/filling-form">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-4 relative w-full bg-white border-border">
        <div className="basis-0 flex flex-col grow h-full justify-center min-h-px min-w-px relative shrink-0">
          <h1 className="text-4xl font-bold leading-[1.2] text-gray-900 m-0">
            Daftar Pencairan Anggaran
          </h1>
        </div>
        <Button 
          variant="brand-primary"
          onClick={onAddMemo}
          className="shrink-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Tambah Memo
        </Button>
      </div>
    </div>
  );
}

function Content({ 
  onCategorySelected,
  onDataUpdate
}: { 
  onCategorySelected: (category: string) => void;
  onDataUpdate: () => void;
}) {
  const filterOptions = [
    'Klaim Langsung',
    'Persekot Kerja', 
    'Termin',
    'Beban Investasi',
    'Anggaran Terpusat',
    'BYMHD'
  ];

  // Data state for each category
  const [categoryData, setCategoryData] = useState<Record<string, TableRow[]>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Dialog states
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<TableRow | null>(null);

  // Convert MemoRecord to TableRow
  const convertMemoToTableRow = (memo: MemoRecord): TableRow => ({
    id: memo.id,
    name: memo.name,
    description: memo.description,
    amount: memo.amount,
    status: memo.status,
    priority: memo.priority,
    requestDate: memo.requestDate,
    type: memo.type,
    department: memo.department,
    approvedBy: memo.approvedBy,
    notes: memo.notes
  });

  // Load data from IndexedDB
  const loadData = async () => {
    try {
      setIsLoading(true);
      
      // Initialize database and seed if empty
      await memoDatabase.init();
      await memoDatabase.seedDummyData();
      
      // Load data for each category
      const newCategoryData: Record<string, TableRow[]> = {};
      
      for (const category of filterOptions) {
        const memos = await memoDatabase.getMemosByType(category);
        newCategoryData[category] = memos.map(convertMemoToTableRow);
      }
      
      setCategoryData(newCategoryData);
      console.log('Data loaded from database:', newCategoryData);
      
    } catch (error) {
      console.error('Failed to load data from database:', error);
      toast.error('Failed to load data from database');
      
      // Fallback to dummy data if database fails
      const fallbackData: Record<string, TableRow[]> = {};
      filterOptions.forEach(category => {
        fallbackData[category] = generateDummyData(20).map(item => ({
          ...item,
          type: category,
          status: Math.random() > 0.5 ? 'Approved' : 'Pending',
          description: `${category} - ${item.description}`,
        }));
      });
      setCategoryData(fallbackData);
      
    } finally {
      setIsLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // Handle adding new memo (category pre-selected)
  const handleAddMemo = (category: string) => {
    onCategorySelected(category);
  };

  // Handle editing memo
  const handleEditMemo = (record: TableRow) => {
    setEditingRecord(record);
    setIsEditDialogOpen(true);
  };

  // Handle submitting edited memo
  const handleSubmitEditMemo = async (formData: MemoFormData) => {
    try {
      const memoRecord: Omit<MemoRecord, 'createdAt' | 'updatedAt'> = {
        id: formData.id,
        name: formData.name,
        description: formData.description,
        amount: formData.amount,
        status: formData.status,
        priority: formData.priority,
        requestDate: formData.requestDate,
        type: formData.type,
        department: formData.department,
        approvedBy: formData.approvedBy,
        notes: formData.notes
      };

      // Update in database
      await memoDatabase.updateMemo(memoRecord);

      // Update local state
      setCategoryData(prev => {
        const newData = { ...prev };
        
        // Remove from old categories
        Object.keys(newData).forEach(category => {
          newData[category] = newData[category].filter(item => item.id !== formData.id);
        });
        
        // Add to new category
        if (!newData[formData.type]) {
          newData[formData.type] = [];
        }
        newData[formData.type] = [convertMemoToTableRow(memoRecord), ...newData[formData.type]];
        
        return newData;
      });

      toast.success('Memo updated successfully');
      console.log('Memo updated:', memoRecord);
      onDataUpdate();
      
    } catch (error) {
      console.error('Failed to update memo:', error);
      toast.error('Failed to update memo');
    }
  };

  // Handle updating data from tabs
  const handleUpdateData = async (updatedRecord: TableRow) => {
    try {
      const memoRecord: Omit<MemoRecord, 'createdAt' | 'updatedAt'> = {
        id: updatedRecord.id,
        name: updatedRecord.name,
        description: updatedRecord.description,
        amount: updatedRecord.amount,
        status: updatedRecord.status,
        priority: updatedRecord.priority,
        requestDate: updatedRecord.requestDate,
        type: updatedRecord.type,
        department: updatedRecord.department,
        approvedBy: updatedRecord.approvedBy,
        notes: updatedRecord.notes
      };

      // Update in database
      await memoDatabase.updateMemo(memoRecord);

      // Update local state
      setCategoryData(prev => {
        const newData = { ...prev };
        Object.keys(newData).forEach(category => {
          const index = newData[category].findIndex(item => item.id === updatedRecord.id);
          if (index !== -1) {
            newData[category][index] = updatedRecord;
          }
        });
        return newData;
      });

      onDataUpdate();
      
    } catch (error) {
      console.error('Failed to update memo in database:', error);
      toast.error('Failed to update memo');
    }
  };

  // Handle deleting data from tabs
  const handleDeleteData = async (recordId: string) => {
    try {
      // Delete from database
      await memoDatabase.deleteMemo(recordId);

      // Update local state
      setCategoryData(prev => {
        const newData = { ...prev };
        Object.keys(newData).forEach(category => {
          newData[category] = newData[category].filter(item => item.id !== recordId);
        });
        return newData;
      });

      toast.success('Memo deleted successfully');
      onDataUpdate();
      
    } catch (error) {
      console.error('Failed to delete memo from database:', error);
      toast.error('Failed to delete memo');
    }
  };

  // Add new memo to data
  const handleAddNewMemo = async (formData: MemoFormData) => {
    try {
      const memoRecord: Omit<MemoRecord, 'createdAt' | 'updatedAt'> = {
        id: formData.id,
        name: formData.name,
        description: formData.description,
        amount: formData.amount,
        status: formData.status,
        priority: formData.priority,
        requestDate: formData.requestDate,
        type: formData.type,
        department: formData.department,
        approvedBy: formData.approvedBy,
        notes: formData.notes
      };

      // Add to database
      await memoDatabase.addMemo(memoRecord);

      // Add to local state
      const newRecord = convertMemoToTableRow(memoRecord);
      setCategoryData(prev => ({
        ...prev,
        [formData.type]: [newRecord, ...(prev[formData.type] || [])]
      }));

      toast.success('Memo created successfully');
      console.log('New memo added:', memoRecord);
      onDataUpdate();
      
    } catch (error) {
      console.error('Failed to add memo to database:', error);
      toast.error('Failed to create memo');
    }
  };

  const tabComponents = {
    'Klaim Langsung': KlaimLangsungTab,
    'Persekot Kerja': PersekotKerjaTab,
    'Termin': TerminTab,
    'Beban Investasi': BebanInvestasiTab,
    'Anggaran Terpusat': AnggaranTerpusatTab,
    'BYMHD': BYMHDTab
  };

  if (isLoading) {
    return (
      <div className="h-full p-4 bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading memo data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-4 bg-neutral-50">
      <div className="h-full">
        {/* Clean ShadCN Tabs */}
        <Tabs defaultValue={filterOptions[0]} className="flex flex-col h-full">
          <TabsList className="h-auto p-1 bg-muted/50 w-fit gap-1 mb-4 shrink-0">
            {filterOptions.map((filter, index) => (
              <TabsTrigger
                key={index}
                value={filter}
                className="px-3 py-2 h-auto text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all duration-200 whitespace-nowrap"
              >
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Tab Content Sections */}
          {filterOptions.map((filter, index) => {
            const TabComponent = tabComponents[filter as keyof typeof tabComponents];
            
            return (
              <TabsContent 
                key={index} 
                value={filter} 
                className="flex-1 min-h-0 data-[state=active]:flex data-[state=active]:flex-col"
              >
                <TabComponent
                  onAddMemo={handleAddMemo}
                  onEditMemo={handleEditMemo}
                  categoryData={categoryData[filter] || []}
                  onUpdateData={handleUpdateData}
                  onDeleteData={handleDeleteData}
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      {/* Edit Memo Dialog */}
      <MemoFormDialog
        isOpen={isEditDialogOpen}
        onClose={() => {
          setIsEditDialogOpen(false);
          setEditingRecord(null);
        }}
        onSubmit={handleSubmitEditMemo}
        editData={editingRecord}
      />
    </div>
  );
}

export default function ContentMemoPencairanAnggaran() {
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);
  const [showMemoDialog, setShowMemoDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dataVersion, setDataVersion] = useState(0); // Force re-renders when data changes

  const handleAddMemo = () => {
    setShowCategoryDialog(true);
  };

  const handleCategorySelected = (category: string) => {
    setSelectedCategory(category);
    setShowMemoDialog(true);
  };

  // This function will be called from the Content component when data is updated
  const handleDataUpdate = () => {
    setDataVersion(prev => prev + 1);
  };

  const handleSubmitMemo = async (formData: MemoFormData) => {
    try {
      const memoRecord: Omit<import("../components/memo/database").MemoRecord, 'createdAt' | 'updatedAt'> = {
        id: formData.id,
        name: formData.name,
        description: formData.description,
        amount: formData.amount,
        status: formData.status,
        priority: formData.priority,
        requestDate: formData.requestDate,
        type: formData.type,
        department: formData.department,
        approvedBy: formData.approvedBy,
        notes: formData.notes
      };

      // Add to database
      await memoDatabase.addMemo(memoRecord);

      toast.success('Memo created successfully');
      console.log('Memo submitted:', formData);
      
      // Force data refresh
      handleDataUpdate();
      
    } catch (error) {
      console.error('Failed to create memo:', error);
      toast.error('Failed to create memo');
    }
  };

  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="content-memo pencairan anggaran"
    >
      <div className="h-full grid grid-rows-[auto_1fr] overflow-hidden">
        {/* Page Header - Auto height */}
        <div className="shrink-0">
          <NavbarFillingForm onAddMemo={handleAddMemo} />
        </div>
        
        {/* Table with Tabs - Flexible height, scrollable content */}
        <div className="min-h-0 overflow-hidden">
          <Content 
            key={dataVersion} // Force re-render when data changes
            onCategorySelected={handleCategorySelected}
            onDataUpdate={handleDataUpdate}
          />
        </div>
      </div>

      {/* Category Selection Dialog */}
      <Dialog open={showCategoryDialog} onOpenChange={setShowCategoryDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Select Memo Category</DialogTitle>
            <DialogDescription>
              Choose the category for your new memo
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3">
            {MEMO_CATEGORIES.map((category) => (
              <Button
                key={category.value}
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  setShowCategoryDialog(false);
                  handleCategorySelected(category.value);
                }}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCategoryDialog(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Memo Form Dialog */}
      <MemoFormDialog
        isOpen={showMemoDialog}
        onClose={() => {
          setShowMemoDialog(false);
          setSelectedCategory('');
        }}
        onSubmit={handleSubmitMemo}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}