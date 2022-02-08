import React from "react";
// import "./_tagstatus.scss";

const TagStatus = ({ statusText, statusMode }) => {
  return (
    <div
      className={
        statusMode === "danger"
          ? "tag-danger"
          : statusMode === "warning"
          ? "tag-warning"
          : "tag-succes"
      }
    >
      <div
        className={
          statusMode === "danger"
            ? "status-danger"
            : statusMode === "warning"
            ? "status-warning"
            : "status-succes"
        }
      >
        {statusText}
      </div>
    </div>
  );
};

TagStatus.defaultProps = {
  statusText: "Ada diruangan",
  statusMode: "succes",
};

export default TagStatus;
