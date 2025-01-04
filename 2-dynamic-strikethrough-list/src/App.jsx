import { useState } from "react";
import "./App.css";
import { tasks } from "./tasks";

function App() {
  const [list, setList] = useState(tasks);

  function handleCheckBoxToggle(index) {
    let arr = list.slice();
    arr[index].finished = !arr[index].finished;
    setList(arr);
  }

  return (
    <div id="list-wrapper">
      <ul>
        {list.map((task, index) => {
          return (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckBoxToggle(index);
                  }}
                />
                {task.finished ? <del>{task.title}</del> : task.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
