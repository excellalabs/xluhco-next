
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Link({link, onDelete = f => f}){

  const deleteLink = async function(linkSlug) {
    const response = await fetch(`api/links/${linkSlug}`, {
      method: 'DELETE',
    })
    onDelete();
  }

  return(
    <div className="d-flex justify-content-between align-items-center p-2">
      <div className="d-flex justify-content-start align-items-center">
        <h5 className="m-0">{link.url}</h5>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <div className="me-2">
          <small>
            <a target="_blank" className="text-secondary" href={`/${link.slug}`}>
                {`${process.env.HOST}/${link.slug}`}
            </a>
          </small>
        </div>
        <div className="m-2">
            <a className="btn btn-secondary "
                onClick={() => navigator.clipboard.writeText(`${process.env.HOST}/${link.slug}`)}>
            Copy
            </a>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="link" className="text-secondary" bsPrefix="p-0" id={`dropdown_${link.slug}`}>
            <BsThreeDotsVertical />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item onClick={() => deleteLink(link.slug)}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}