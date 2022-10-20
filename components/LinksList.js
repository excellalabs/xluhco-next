import { useState } from 'react'
import NewLinkForm from './NewLinkForm'
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
      <NewLinkForm onCreate={fetchLinks} />
      <div className="card">
        <ul className="list-group list-group-flush">
          {links.map((link, i) => (
            <li className="list-group-item" key={i}>
              <Link onDelete={fetchLinks} link={link} />
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
}