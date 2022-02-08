import React from "react";
// import "./_button.scss";

/*
action: tombol primary dan secondry
size: ukuran small, large, dan extra-large
text: teks yang ingin ditampilkan
rest: argumen sisanya
*/

const Button = ({ action, size, text, ...rest }) => {
  if (action === "primary") {
    if (size === "small") {
      return (
        <button
          type="button"
          className={"btn " + action + " " + size}
          {...rest}
        >
          {text}
        </button>
      );
    } else if (size === "large") {
      return (
        <button
          type="button"
          className={"btn " + action + " " + size}
          {...rest}
        >
          {text}
        </button>
      );
    } else if (size === "extra-large") {
      return (
        <button
          type="button"
          className={"btn " + action + " " + size}
          {...rest}
        >
          {text}
        </button>
      );
    } else {
      return (
        <button type="button" className="btn primary small" {...rest}>
          {text}
        </button>
      );
    }
  }

  if (action === "secondry") {
    if (size === "small") {
      return (
        <button
          type="button"
          className={"btn " + action + " " + size}
          {...rest}
        >
          {text}
        </button>
      );
    } else if (size === "large") {
      return (
        <button
          type="button"
          className={"btn " + action + " " + size}
          {...rest}
        >
          {text}
        </button>
      );
    } else if (size === "extra-large") {
      return (
        <button
          type="button"
          className={"btn " + action + " " + size}
          {...rest}
        >
          {text}
        </button>
      );
    } else {
      return (
        <button type="button" className="btn secondry small" {...rest}>
          {text}
        </button>
      );
    }
  }
};

// action, size, text, ...rest
Button.defaultProps = {
  action: "primary",
  size: "small",
  text: "Tombol",
};

export default Button;
