import "./ExpenseItem.css";
import Calender from "./Calender";
import Card from "../Containers/Card";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Calender date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <Card className="expense-item__price">{props.amount}</Card>
      </div>
    </Card>
  );
}
