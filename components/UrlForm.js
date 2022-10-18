export default function UrlForm({links}){

  return (
    <div>
      <form action="/api/create-link" method="post">
        <div className="row">
          <div className="col-lg-5 col-md-5 py-3">
            <input htmlFor="linkUrl" type="url" className="form-control" id="linkUrl" name="linkUrl" placeholder="Target URL" />
          </div>
          <div className="col-lg-5 col-md py-3">
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="slug" className="col-form-label">http://{process.env.HOST}/</label>
              </div>
              <div className="col-auto">
                <input htmlFor="slug" type="text" name="slug" id="slug" className="form-control w-auto" aria-describedby="slug" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 d-grid gap-2 py-3">
            <button type="submit" className="btn btn-primary mb-3">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}