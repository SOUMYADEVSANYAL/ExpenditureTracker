import "./ExpensesFilter.css";

const ExpenseFilter = (props) => {
  function onSelectHandler(event) {
    const date = event.target.value;
    props.getFilterDate(date);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
