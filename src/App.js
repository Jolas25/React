import { useState } from "react";
import "./App.scss";
import Modal from "./Components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div className="modal__app">
        <button
          className="modal__button"
          onClick={() => {
            setOpen(true);
          }}
        >
          Відкрити
        </button>
        {open && <Modal open={open} setOpen={setOpen} />}
      </div>
    </div>
  );
}

export default App;
