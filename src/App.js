import { useState } from "react";
import "./App.scss";
import Modal from "./Components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div className="modal__app">
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Відкрити
        </button>
        {open && <Modal open={open} />}
      </div>
    </div>
  );
}

export default App;
