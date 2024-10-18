const AddTask = () => {
  return (
    <div>     
<div className="row g-2">
<div className="input-group mb-3">
  <button type="button" className="btn btn-outline-secondary">Task</button>
  <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    Medium
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
</div><br/>

      <label htmlFor="detailsTextarea">Task Details</label>
      <textarea id="detailsTextarea" className="form-control" placeholder="Enter task details here"></textarea>
      <br/>
      <label htmlFor="deadlineInput">Deadline</label>
      <input type="date" id="deadlineInput" className="form-control" />
    </div><br/>
    <button className="btn btn-primary">Submit</button>
    </div>
  )
}

export default AddTask