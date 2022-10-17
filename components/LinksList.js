export default function LinksList({links}){

  return (
    <div>
      {links.map((link, i) => (
        <div className="card mb-3" key={i}>
          <div className="card-body">
            <div className="row g-4">
              <div className="col-lg-5">
                <h5 className="car-title">{link.url}</h5>
              </div>
              <div className="col-5">
                <a className="card-subtitle mb-2 text-muted float-end" target="_blank" href={`/${link.slug}`}>
                  {`${process.env.HOST}/${link.slug}`}
                </a>
              </div>
              <div className="col-lg-2">
                <a className="btn btn-primary float-end">Copy Link</a>
              </div>
            </div>
          </div>
          {/* If user is not logged in */}
          <div className="card-footer">
            <p>
              Want to track your links?
              <a className="btn btn-success float-end" href="/sign-up">Get Started</a>
            </p>
          </div>
          {/* End if user is not logged in */}
        </div>
      ))}
    </div>
  );
}