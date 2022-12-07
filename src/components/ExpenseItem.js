import "./ExpenseItem.css";
import Calender from "./Calender";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <Calender date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
