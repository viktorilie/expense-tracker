import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense tracker/ExpenseList";
import ExpenseFilter from "./expense tracker/ExpenseFilter";
import ExpenseForm from "./expense tracker/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertaionment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "a", amount: 10, category: "Utilities" },
    { id: 2, description: "b", amount: 10, category: "Utilities" },
    { id: 3, description: "c", amount: 10, category: "Utilities" },
    { id: 4, description: "d", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <h1 className="mb-5">Expense Tracker</h1>

        <div className="mb-5">
          <ExpenseForm />
        </div>

        <div className="mb-3">
          <ExpenseFilter
            onSelectCategrory={(category) => setSelectedCategory(category)}
          />
        </div>

        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
