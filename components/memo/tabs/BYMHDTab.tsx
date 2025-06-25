import MemoTabBase from "./MemoTabBase";
import { TAB_INFO } from "../types";
import { type TableRow } from "../../DataTable";

interface BYMHDTabProps {
  onAddMemo: (category: string) => void;
  onEditMemo: (record: TableRow) => void;
  categoryData: TableRow[];
  onUpdateData: (updatedRecord: TableRow) => void;
  onDeleteData: (recordId: string) => void;
}

export default function BYMHDTab(props: BYMHDTabProps) {
  return (
    <MemoTabBase
      tabInfo={TAB_INFO['BYMHD']}
      {...props}
    />
  );
}