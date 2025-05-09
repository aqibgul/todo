import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]); // Array to store tasks

  const handleOnchange = (text) => {
    setInputText(text);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!inputText) return;
    if (task.includes(inputText)) {
      alert("Item already exists");
      setInputText("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputText]); // Add new task to the array
    console.log(task);
    setInputText("");
  };

  return (
    <>
      <div className="main-div">
        <h1>My Todo List</h1>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Add a new task"
            value={inputText}
            onChange={(event) => handleOnchange(event.target.value)}
          />
          <button>
            <IoIosAddCircle className="add-btn" />
          </button>
        </form>

        <ul className="">
          {task.map((item, index) => (
            <div className="">
              <li className="list-items" key={index}>
                <span>{item}</span>
                <button
                  className="dlt-btn"
                  onClick={() => {
                    setTask((prevTask) =>
                      prevTask.filter((_, items) => items !== index)
                    );
                    alert("Confirm Item deleted");
                  }}
                >
                  <MdDelete />
                </button>
                <button>
                  <FaRegEdit
                    onClick={() => {
                      const updatedTask = prompt("Update your task", item);
                      console.log(item);
                      if (updatedTask) {
                        setTask((prevTask) =>
                          prevTask.map((task, i) =>
                            i === index ? updatedTask : task
                          )
                        );
                      }
                    }}
                  />
                </button>

                <input
                  type="checkbox"
                  onChange={(event) => {
                    if (event.target.checked) {
                      event.target.parentElement.style.textDecoration =
                        "line-through";
                    } else {
                      event.target.parentElement.style.textDecoration = "none";
                    }
                  }}
                />
              </li>
            </div>
          ))}
        </ul>
        <button>
          <span
            onClick={() => {
              setTask([]);
            }}
          >
            Clear All
          </span>
        </button>
      </div>
    </>
  );
}

export default App;
