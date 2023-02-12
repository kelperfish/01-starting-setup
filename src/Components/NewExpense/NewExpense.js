import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {/* use whatever name you like */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;