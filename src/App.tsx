import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense tracker/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "a", amount: 10, category: "Utilities" },
    { id: 2, description: "b", amount: 10, category: "Utilities" },
    { id: 3, description: "c", amount: 10, category: "Utilities" },
    { id: 4, description: "d", amount: 10, category: "Utilities" },
  ]);
  return (
    <>
      <div>
        <h1>expense tracker</h1>
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
