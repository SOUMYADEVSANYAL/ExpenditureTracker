import "./ExpenseItem.css";
import Calender from "./Calender";
import Card from "../UI/Card";
import { useState } from "react";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <Calender date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <Card className="expense-item__price">{props.amount}</Card>
      </div>
    </Card>
  );
}
