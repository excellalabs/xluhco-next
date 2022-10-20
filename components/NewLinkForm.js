import {useRef} from 'react';
import {flash} from "react-universal-flash";

export default function NewLinkForm({onCreate = f => f}){
  const linkUrl = useRef();
  const linkSlug = useRef();

  const addLink = async function(newLinkUrl, newLinkSlug) {
    const response = await fetch('api/links', {
      method: 'POST',
      body: JSON.stringify({linkUrl: newLinkUrl, slug: newLinkSlug}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status === 201) {
      flash("New Link Created",3000, "success");
      onCreate();
    } else if (response.status === 409){
      flash("A link with that slug already exists",3000, "error");
    } else {
      flash("An error occurred",3000, "error");
    }
    
  }

  const submit = e => {
    e.preventDefault();
    const newLinkUrl = linkUrl.current.value;
    const newLinkSlug = linkSlug.current.value;
    addLink(newLinkUrl, newLinkSlug)
    .then(()=>{
      linkUrl.current.value = "";
      linkSlug.current.value = "";
    })
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div className="row">
          <div className="col-lg-5 col-md-5 py-3">
            <input ref={linkUrl} htmlFor="linkUrl" type="url" className="form-control" id="linkUrl" name="linkUrl" placeholder="Target URL" required />
          </div>
          <div className="col-lg-5 col-md py-3">
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="slug" className="col-form-label">{process.env.HOST}/</label>
              </div>
              <div className="col-auto">
                <input ref={linkSlug} htmlFor="slug" type="text" name="slug" id="slug" className="form-control w-auto" aria-describedby="slug" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 d-grid gap-2 py-3">
            <button type="submit" className="btn btn-primary mb-3">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}