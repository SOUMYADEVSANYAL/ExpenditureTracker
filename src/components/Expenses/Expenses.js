import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const expenses = props.expenses;

  function getFilterDateHandler(year) {
    console.log(year);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear="2019" getFilterDate={getFilterDateHandler} />
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}
