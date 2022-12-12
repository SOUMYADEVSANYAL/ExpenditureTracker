import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

export default function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  function changeIsEditingState() {
    setIsEditing(true);
  }

  function changeIsEditingStateToFalse(){
    setIsEditing(false);
  }

  function getNewExpenseDataHandler(newExpenseData) {
    const modifiedNewExpenseData = {
      id: Math.random().toString(),
      ...newExpenseData,
    };
    props.getNewExpenseData(modifiedNewExpenseData);
  }

  return (
    <div className="new-expense">
      {isEditing ? (
        <NewExpenseForm getNewExpenseData={getNewExpenseDataHandler} changeIsEditingStateToFalse={changeIsEditingStateToFalse} />
      ) : (
        <button onClick={changeIsEditingState}>Add Expense</button>
      )}
    </div>
  );
}
