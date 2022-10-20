import Link from 'next/link';

export default function About(){
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center py-5">
          <h1>About Xhula.co</h1>
          <p>Xluh is a tool for Excellians to make sharing URLs easier.</p>
          <p>Have fun!</p>
          <Link href="/">
            <a className="btn btn-primary">Explore</a>
          </Link>
        </div>
      </div>

    </div>
  )
}