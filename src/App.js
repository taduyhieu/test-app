import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Item from "./Item";

const App = () => {
  const [list, setList] = useState([{ text: "test 1" }, { text: "test 2" }]);

  const name = useRef("");
  const handleAdd = () => {
    const text = name.current.value;
    if (text != "") {
      setList([{ text: text }, ...list]);
      name.current.value = "";
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
        {/* {list.length > 5 && ( */}
        <div class="pagination">
          <a href="#">&laquo;</a>
          {[...Array(10x).keys()].map(function (item) {
            return (
              <a href="#" className={item == 2 ? "active" : ""}>
                {item + 1}
              </a>
            );
          })}

          <a href="#">&raquo;</a>
        </div>
        {/* )} */}
      </main>
    </div>
  );
};

export default App;
