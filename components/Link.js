
export default function Link({link}){
return(
  <div className="list-group-item">
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
        <a className="btn btn-secondary float-end"
            onClick={() => navigator.clipboard.writeText(`${process.env.HOST}/${link.slug}`)}>
        Copy
        </a>
      </div>
      </div>
    </div>
  </div>
)
}