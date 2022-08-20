import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: ${props.budget}</span>
      <button
        type="button"
        class="btn btn-primary btm-sm"
        onClick={props.handleEdit}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
