import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

export default function NewExpenses(props){

  function getNewExpenseDataHandler(newExpenseData){
    const modifiedNewExpenseData = {
      id: Math.random().toString(),
      ...newExpenseData
    }
    props.getNewExpenseData(modifiedNewExpenseData);
  }

    return (
        <div className='new-expense'>
            <NewExpenseForm getNewExpenseData={getNewExpenseDataHandler}/>
        </div>
    );
}