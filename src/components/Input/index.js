import React from "react";
// import "./_input.scss";

/*
label: label untuk input
errorInfo: object untuk konfirmasi error
          {error: boolean, message: string}
htmlfor: atribut "for" untuk label, berpasangan dengan atribut "id"
         pada tag <input>
rest: argumen sisanya
*/

const Input = ({ label, errorInfo, htmlfor, placeholder, ...rest }) => {
  // console.log(errorInfo);
  return (
    <div className="input">
      <label
        htmlFor={htmlfor}
        className={
          errorInfo?.error ? "input-label label-warning" : "input-label"
        }
      >
        {label}
      </label>
      <input
        className={errorInfo?.error ? "input-fill input-warning" : "input-fill"}
        placeholder={placeholder}
        {...rest}
      />
      <small className={errorInfo?.error ? "error-msg" : undefined}>
        {errorInfo?.error && errorInfo?.message}
      </small>
    </div>
  );
};

Input.defaultProps = {
  label: "Input label",
  errorInfo: {
    error: false,
    message: "",
  },
  htmlFor: "input",
  placeholder: "1980xxxxxxxxxxxxxx",
  // rest
  id: "input",
  name: "input",
};

export default Input;
