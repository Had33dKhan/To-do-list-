import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap-reboot.min.css"

const App = () => {
  return (
    <div className="container">
      <div className="mt-3">
        <div className="row">
          <div className="col">
          <div className="text-center">
    </div>
    <div className="contain">
    <img width="50"src="/icon.png" className="rounded"/>
          <h1 style={{ color: '#5397F0' }}>Add Your Task</h1></div>
          <hr/>
            <AddTask />
          </div>
          <div className="col">
          <h1 style={{ color: '#5397F0' }}>To do List <button type="button" className="btn btn-secondary">Pending <span className="badge bg-secondary">0</span>
</button></h1>
          <hr/>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
