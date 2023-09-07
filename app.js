const React = require("react");
const ReactDOM = require("react-dom");

function Button({ children, onClick }) {
  return React.createElement(
    "button",
    { onClick: onClick, className: "custom-button" },
    children
  );
}

ReactDOM.render(
  React.createElement(
    Button,
    { onClick: () => alert("Button clicked") },
    "Custom Button"
  ),
  document.getElementById("root")
);
