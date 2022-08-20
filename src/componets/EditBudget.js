import React, { useState } from "react";

const EditBudget = (props) => {
  const [newBudget, setNewBudget] = useState(props.budget);

  return (
    <>
      <span>
        Budget: ${" "}
        <input
          className="w-50"
          onChange={(e) => setNewBudget(e.target.value)}
        />
      </span>
      <button
        type="button"
        className="btn btn-primary btm-sm"
        onClick={() => props.handleSave(newBudget)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
