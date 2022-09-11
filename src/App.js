import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Item from "./Item";

const App = () => {
  const [list, setList] = useState([{ text: "test 1" }, { text: "test 2" }]);

  const name = useRef("");
  const handleAdd = () => {
    const text = name.current.value;
    console.log(text);
    if (text != "") {
      setList([...list, { text: text }]);
    } else {
      alert("Text is invalid");
    }
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  const handleUpdate = (item, index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1, item);
    setList(updatedList);
  };

  const handDelete = (item, index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <div className="App">
      <header>
        <input ref={name} />
        <button onClick={handleAdd}>Add</button>
      </header>
      <main>
        <ul>
          {list &&
            list.map((item, index) => (
              <Item
                item={item}
                index={index}
                key={index}
                handleUpdate={handleUpdate}
                handDelete={handDelete}
              />
            ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
