import { useState } from "react";
import Button from "./components/button/button.jsx";
import Toaster from "./components/toaster/toaster.jsx";
import "./App.css";

export default function App() {
  const [list, setList] = useState([]);

  const showToast = (type) => {
    let toastProperties;

    switch (type) {
      case "success":
        toastProperties = {
          id: Date.now(),
          title: "Success",
          description: "this is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;

      case "danger":
        toastProperties = {
          id: Date.now(),
          title: "Danger",
          description: "this is a danger toast component",
          backgroundColor: "#d9534f",
        };
        break;

      case "info":
        toastProperties = {
          id: Date.now(),
          title: "Info",
          description: "this is an info toast component",
          backgroundColor: "#5bc0de",
        };
        break;

      case "warning":
        toastProperties = {
          id: Date.now(),
          title: "Warning",
          description: "this is a warning toast component",
          backgroundColor: "#f0ad4e",
        };
        break;

      default:
        return;
    }

    setList((prev) => [...prev, toastProperties]);
  };

  return (
    <div className="root">
      <Button handleClick={() => showToast("success")}>Success</Button>
      <Button handleClick={() => showToast("danger")}>Danger</Button>
      <Button handleClick={() => showToast("info")}>Info</Button>
      <Button handleClick={() => showToast("warning")}>Warning</Button>

      <Toaster list={list} position="bottom-right" setList={setList} />
    </div>
  );
}
