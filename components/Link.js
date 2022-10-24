
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import {flash} from "react-universal-flash";

export default function Link({link, onDelete = f => f}){

  const deleteLink = async function(linkSlug) {
    const response = await fetch(`api/links/${linkSlug}`, {
      method: 'DELETE',
    })
    flash(`Link ${process.env.HOST}/${linkSlug} Deleted!`,3000, "success")
    onDelete();
  }

  const copyLinkToClipboard = async function(slug) {
    navigator.clipboard.writeText(`${process.env.HOST}/${slug}`);
    flash(`Link ${process.env.HOST}/${slug} Copied!`,3000, "success")

  }

  return(
    <div className="row p-2">
      <div className="col py-2">
        <h5 className="m-0">{link.url}</h5>
      </div>
      <div className="col d-flex justify-content-end py-2">
        <a target="_blank" className="text-secondary" href={`/${link.slug}`}>
            {`${process.env.HOST}/${link.slug}`}
        </a>
      </div>
      <div className="col d-flex justify-content-end py-2">
        <a className="btn btn-success "
            onClick={() => copyLinkToClipboard(link.slug)}>
          Copy
        </a>
        <Dropdown>
          <Dropdown.Toggle variant="link" className="text-secondary" bsPrefix="p-0" id={`dropdown_${link.slug}`}>
            <BsThreeDotsVertical />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* <Dropdown.Item href="#/action-1">Edit</Dropdown.Item> */}
            <Dropdown.Item onClick={() => { window.confirm( 'Are you sure you want to delete this link?', ) && deleteLink(link.slug)}}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}