export default function LinksList({links}){

  return (
    <div>
      {links.map((link, i) => (
        <div className="card" key={i}>
          <div className="card-body">
            <p>{link.url}</p>
            <a class="btn btn-primary" href={`${process.env.HOST}/${link.shortId}`}>
              {`${process.env.HOST}/${link.shortId}`}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}