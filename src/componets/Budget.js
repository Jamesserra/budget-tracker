import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setEdit(false);
  };

  return (
    <div class="alert alert-secondary p-4 d-flex align-items-center justify-content-between">
      {edit ? (
        <EditBudget handleSave={handleSave} budget={budget} />
      ) : (
        <ViewBudget handleEdit={handleEdit} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
