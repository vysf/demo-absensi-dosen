import React from "react";

const Gap = ({ width, height, ...rest }) => {
  return <div style={{ width, height, ...rest }} />;
};

export default Gap;
