import { useRef, useState, useEffect } from "react";
import Input from "./Input";

const Item = ({ item, index, handleUpdate, handDelete }) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [edited, setEdited] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    setData({ ...item });
  }, [item]);
  const update = (e) => {
    console.log(e.target.value);
    setData({ ...data, text: e.target.value });
  };
  const doUpdate = (data, index) => {
    handleUpdate(data, index);
    setEdited(false);
    setEditedIndex(null);
  };
  const doDelete = (data, index) => {
    let text = "Press click OK to Delte";
    if (window.confirm(text) == true) {
      handDelete(data, index);
    }
  };
  return (
    <li key={index}>
      {edited && editedIndex == index && (
        <input value={data.text} onChange={(e) => update(e)} />
      )}

      <span style={{ margin: "5px 5px" }}>{item.text}</span>
      {edited && editedIndex == index ? (
        <>
          <button
            style={{ margin: "5px 5px" }}
            onClick={() => doUpdate(data, index)}
          >
            Update
          </button>
          <button
            style={{ margin: "5px 5px" }}
            onClick={() => {
              setEdited(false);
              setEditedIndex(null);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          style={{ margin: "5px 5px" }}
          onClick={() => {
            setEdited(true);
            setEditedIndex(index);
          }}
        >
          Edit
        </button>
      )}
      <button
        style={{ margin: "5px 5px" }}
        onClick={() => doDelete(item, index)}
      >
        Delete
      </button>
    </li>
  );
};
export default Item;
