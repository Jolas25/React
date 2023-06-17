export default function Modal({ open, setOpen }) {
  return (
    <div className={`modal ${open ? "show" : ""}`}>
      <div className="modal__title">
        <h2>Модальне вікно</h2>
        <span
          style={{ color: "red", fontSize: 25 + "px" }}
          onClick={() => {
            setOpen(false);
          }}
        >
          &#10007;
        </span>
      </div>

      <img
        src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1"
        alt="citten"
      />
    </div>
  );
}
