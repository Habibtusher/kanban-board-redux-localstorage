import { Provider, useSelector } from "react-redux";
import AddNewTask from "./AddNewTask";
import "./App.css";
import store from "./redux/store";
import TaskList from "./TaskList";

function App() {
 
  return (
    
<Provider store={store}>
    <div className="main-div">

     <AddNewTask/>
      <div>
        <TaskList />
      </div>
    </div>
    </Provider>
  );
}

export default App;
