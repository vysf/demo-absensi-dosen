import React from "react";
// import "./_select.scss";

/*
label: label untuk input
errorInfo: object untuk konfirmasi error
          {error: boolean, message: string}
htmlfor: atribut "for" untuk label, berpasangan dengan atribut "id"
         pada tag <select>
optionLabel: laberl untuk option/sebagai placeholder
optionItem: option  (array) yang disediakan
rest: argumen sisanya
*/
const Select = ({
  label,
  errorInfo,
  htmlfor,
  optionLabel,
  optionItems,
  ...rest
}) => {
  const items = [];
  for (const [i, v] of optionItems.entries()) {
    items.push(
      <option key={i + 1} value={v}>
        {v}
      </option>
    );
  }
  // console.log(items);
  return (
    <div className="input">
      <label
        className={
          errorInfo?.error ? "input-label label-warning" : "input-label"
        }
        htmlFor={htmlfor}
      >
        ini label select
      </label>
      <select
        className={errorInfo?.error ? "input-fill input-warning" : "input-fill"}
        {...rest}
      >
        <option key={0} value="" defaultValue hidden>
          {optionLabel}
        </option>
        {items}
      </select>
      <small className={errorInfo?.error ? "error-msg" : undefined}>
        {errorInfo?.error && errorInfo?.message}
      </small>
    </div>
  );
};

Select.defaultProps = {
  label: "Select Label",
  errorInfo: {
    error: false,
    message: "",
  },
  htmlfor: "select",
  optionLabel: "--Pilih disini--",
  optionItems: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
  // rest
  id: "select",
};

export default Select;
