import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");
  
  function getFilterDateHandler(year) {
    
    setFilterYear(year);
  }

  const filteredList = props.expensesList.filter(item => item.date.getFullYear().toString() === filterYear)

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filterYear} getFilterDate={getFilterDateHandler} />
      {filteredList.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}
