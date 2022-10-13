export default function UrlForm({links}){

  return (
    <div className="mb-3 py-3">
      <div className="row">
        <div className="col-9">
          <input type="url" className="form-control" id="exampleFormControlInput1" placeholder="mydomain.com" />
        </div>
        <div class="col-3 d-grid gap-2">
          <button type="button" class="btn btn-primary mb-3">Add</button>
        </div>
      </div>
    </div>
  );
}