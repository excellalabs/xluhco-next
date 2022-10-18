export default function LinksList({links}){

  return (
    <div>
      <div className="card">
        <ul className="list-group list-group-flush">
          {links.map((link, i) => (
            <div className="list-group-item" key={i}>
                <div className="py-3 w-100 justify-content-between">
                  <div className="row">
                    <div className="col-md-5 col-sm-12 text-center text-md-start my-2">
                      <h5 className="mb-1">{link.url}</h5>
                    </div>
                    <div className="col-md-5 col-sm-12 text-center text-md-end my-2">
                      <small>
                        <a className="card-subtitle mb-2 text-muted py-2" target="_blank" href={`/${link.slug}`}>
                          {`${process.env.HOST}/${link.slug}`}
                        </a>
                      </small>
                    </div>
                    <div className="col-md-2 col-sm-12 text-center d-grid my-2">
                      <a className="btn btn-secondary float-end">Copy</a>
                    </div>
                  </div>
                </div>
            </div>
          ))}
          {/* If user is not logged in */}
          <div className="list-group-item">
            <a className="btn btn-success float-end mt-3" href="https://console.jumpcloud.com/login/" target="_blank">Get Started</a>
            <h5 className="mt-3">Want to track your links?</h5>
            <small>
              To save your links and to view analytics, sign in using <a href="https://console.jumpcloud.com/login/" target="_blank">JumpCloud</a>.
            </small>
          </div>
          {/* End if user is not logged in */}
        </ul>
      </div>
    </div>
  );
}