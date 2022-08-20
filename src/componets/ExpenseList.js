import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [input, setInput] = useState("");
  const searchFilter = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(input)
  );

  return (
    <>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className="list-group">
        {searchFilter.length > 0
          ? searchFilter.map((expense) => (
              <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
                key={expense.id}
              />
            ))
          : expenses.map((expense) => (
              <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
                key={expense.id}
              />
            ))}
      </ul>
    </>
  );
};

export default ExpenseList;
