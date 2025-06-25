import MemoTabBase from "./MemoTabBase";
import { TAB_INFO } from "../types";
import { type TableRow } from "../../DataTable";

interface BebanInvestasiTabProps {
  onAddMemo: (category: string) => void;
  onEditMemo: (record: TableRow) => void;
  categoryData: TableRow[];
  onUpdateData: (updatedRecord: TableRow) => void;
  onDeleteData: (recordId: string) => void;
}

export default function BebanInvestasiTab(props: BebanInvestasiTabProps) {
  return (
    <MemoTabBase
      tabInfo={TAB_INFO['Beban Investasi']}
      {...props}
    />
  );
}