export default function UrlForm({links}){

  return (
    <div>
      <div className="row">
        <div className="col-lg-5 col-md-5 py-3">
          <input type="url" className="form-control" id="exampleFormControlInput1" placeholder="Target URL" />
        </div>
        <div className="col-lg-5 col-md py-3">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label for="inputPassword6" className="col-form-label">http://{process.env.HOST}/</label>
            </div>
            <div className="col-auto">
              <input type="userDesiredShortUrl" id="userDesiredShortUrl" className="form-control w-auto" aria-describedby="userDesiredShortUrl" />
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-grid gap-2 py-3">
          <button type="button" className="btn btn-primary mb-3">Add</button>
        </div>
      </div>
    </div>
  );
}