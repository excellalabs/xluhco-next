import { useState } from 'react'
import UrlForm from '../components/UrlForm'
import Link from './Link'

export default function LinksList({initialLinks}){
  const [links, setLinks] = useState(initialLinks)

  const fetchLinks = async () => {
    const response = await fetch('api/links')
    const data = await response.json()
    setLinks(data)
  }

  return (
    <div>
      <UrlForm onCreate={fetchLinks} />
      <div className="card">
        <ul className="list-group list-group-flush">
          {links.map((link, i) => (
            <li key={i}>
              <Link link={link} />
            </li> 
          ))}
          {/* If user is not logged in */}
          <div className="list-group-item">
            <a className="btn btn-success float-end mt-3" href="https://console.jumpcloud.com/login/" target="_blank">Get Started</a>
            <h5 className="mt-3">Want to track your links?</h5>
            <div className="mb-3">
              <small>
                To save your links and to view analytics, sign in using <a href="https://console.jumpcloud.com/login/" target="_blank">JumpCloud</a>.
              </small>
            </div>
          </div>
          {/* End if user is not logged in */}
        </ul>
      </div>
    </div>
  );
}