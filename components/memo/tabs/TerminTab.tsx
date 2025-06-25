import MemoTabBase from "./MemoTabBase";
import { TAB_INFO } from "../types";
import { type TableRow } from "../../DataTable";

interface TerminTabProps {
  onAddMemo: (category: string) => void;
  onEditMemo: (record: TableRow) => void;
  categoryData: TableRow[];
  onUpdateData: (updatedRecord: TableRow) => void;
  onDeleteData: (recordId: string) => void;
}

export default function TerminTab(props: TerminTabProps) {
  return (
    <MemoTabBase
      tabInfo={TAB_INFO['Termin']}
      {...props}
    />
  );
}