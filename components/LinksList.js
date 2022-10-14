export default function LinksList({links}){

  return (
    <div>
      {links.map((link, i) => (
        <div className="card my-3" key={i}>
          <div className="card-body">
            <div className="row g-4">
              <div className="col-lg-5">
                <p>{link.url}</p>
              </div>
              <div className="col-lg-5">
                <a class="fw-lighter float-end" href={`${process.env.HOST}/${link.shortId}`}>
                  {`http://www.xluh.co/${link.shortId}`}
                </a>
              </div>
                <a class="btn btn-primary col-lg-2">Copy</a>
            </div>
          </div>
          <div className="card-footer">
            <p>
              Want to track your links?
              <a className="btn btn-success float-end">Get Started</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}