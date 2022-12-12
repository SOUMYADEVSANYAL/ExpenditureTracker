import { useState } from "react";
import "./NewExpenseForm.css";

export default function NewExpenseForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");


  function titleChangeHandler(event){setInputTitle(event.target.value)}
  function amountChangeHandler(event){setInputAmount(event.target.value)}
  function dateChangeHandler(event){setInputDate(event.target.value)}


  function submitHandler(event){
    event.preventDefault();

    const newExpenseData= {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate)
    }

    props.getNewExpenseData(newExpenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");

    props.changeIsEditingStateToFalse();

  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={inputAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2018-01-01" max="2023-01-01" value={inputDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.changeIsEditingStateToFalse}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
