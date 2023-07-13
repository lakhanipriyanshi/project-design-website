import React, { useState, useEffect } from "react";
// import "./To.css";

const To = () => {
  const getLocalData = () => {
    const lists = localStorage.getItem("TodoList");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());

  const additems = () => {
    if (inputdata) {
      const newInputData = {
        id: new Date(),
        name: inputdata,
      };
      setItems([...items, newInputData]);
      setInputData("");
    } else {
      alert("please fill the data");
    }
  };

  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItem);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <div className="main">
        <h1>TO DO LIST</h1>

        <form className="form">
          <input
            id="inputtask"
            type="text"
            placeholder="Enter your task here"
            value={inputdata}
            onChange={(event) => {
              setInputData(event.target.value);
            }}
          />
          <input id="addbutton" value="+" type="submit" onClick={additems} />
        </form>

        <ol className="todolist">
          {items.map((curElem) => {
            return (
              <li key={curElem.id}>
                {curElem.name}
                <button onClick={() => deleteItem(curElem.id)}>Delete</button>
              </li>
            );
          })}
        </ol>
        <button onClick={removeAll}>Remove All</button>
      </div>
    </div>
  );
};

export default To;