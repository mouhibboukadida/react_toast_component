import { useCallback, useEffect } from "react";
import "./toaster.css";

const Toaster = ({ list, position, setList }) => {

  const deleteToast = useCallback((id) => {
    setList((prev) => prev.filter((toast) => toast.id !== id));
  }, [setList]);

  useEffect(() => {
    if (!list.length) return;

    const interval = setInterval(() => {
      deleteToast(list[0].id);
    }, 9000);

    return () => clearInterval(interval);
  }, [list, deleteToast]);

  return (
    <div className={`container ${position}`}>
      {list.map((toast) => (
        <div
          key={toast.id}
          className={`toast notification ${position}`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>

          <div>
            <p className="title">{toast.title}</p>
            <p className="description">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toaster;
