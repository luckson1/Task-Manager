import'./App.css';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";

function App() {
  return (
  <TaskListContextProvider>
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <div className='main'>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  </TaskListContextProvider>
    
  );
}

export default App;
