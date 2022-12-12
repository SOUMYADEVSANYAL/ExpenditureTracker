import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");

  function getFilterDateHandler(year) {
    setFilterYear(year);
  }

  const filteredList = props.expensesList.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYear}
        getFilterDate={getFilterDateHandler}
      />
      <ExpensesChart expenses={filteredList} />
      {filteredList.length === 0 ? (
        <h1>No expense done in this year.</h1>
      ) : (
        filteredList.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
}
