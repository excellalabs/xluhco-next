export default function UrlForm({links}){

  return (
    <div className="mb-3 py-3">
      <div className="row">
        <div className="col-lg-5 col-md-5 py-3">
          <input type="url" className="form-control" id="exampleFormControlInput1" placeholder="Target URL" />
        </div>
        <div className="col-lg-5 col-md py-3">
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">http://www.xluh.co/</label>
            </div>
            <div class="col-auto">
              <input type="userDesiredShortUrl" id="userDesiredShortUrl" class="form-control" aria-describedby="userDesiredShortUrl" />
            </div>
          </div>
        </div>
        <div class="col-lg-2 d-grid gap-2 py-3">
          <button type="button" class="btn btn-primary mb-3">Add</button>
        </div>
      </div>
    </div>
  );
}