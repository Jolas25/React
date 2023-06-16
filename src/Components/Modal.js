import { useState } from "react";

export default function Modal({ open }) {
  const [show, setShow] = useState({ open });
  if (show === false) {
    return null;
  }
  return (
    <div className="modal">
      <h2>Модальне вікно</h2>
      <span
        style={{ color: "red", fontSize: 25 + "px" }}
        onClick={() => {
          setShow(false);
        }}
      >
        &#10007;
      </span>
      <img
        src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1"
        alt="citten"
      />
    </div>
  );
}
