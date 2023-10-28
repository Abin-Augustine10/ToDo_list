import "./App.css";
import { useState } from "react";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const [currentDate, setCurrentDate] = useState(getDate());

  // Function to handle deletion of a to-do item
  const handleDelete = (id) => {
    // Filter the to-dos array to exclude the item with the given id
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <h2 class="date">{currentDate}</h2>
      <div className="subHeading">
        <br />
        <br/>
        <br/>
        
        <h2>Hey!! 🌝 ☕ </h2><br/>
        <h3 class="addyourtodo">Add your ToDo list here!!</h3>
        <br/>
      </div>

      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false },
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <br></br>
      <br></br>
      <h3 class="addyourtodo">Your ToDo list!!</h3>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    })
                  );
                }}
                value={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => handleDelete(obj.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
