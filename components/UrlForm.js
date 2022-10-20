import {useRef} from 'react';

export default function UrlForm({links, onCreate = f => f}){
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
    console.log(response)
    await onCreate();
  }

  const submit = e => {
    e.preventDefault();
    const newLinkUrl = linkUrl.current.value;
    const newLinkSlug = linkSlug.current.value;
    //const jsonTest = JSON.stringify({linkUrl: newLinkUrl, slug: newLinkSlug})
    //console.log(jsonTest)
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
                <label htmlFor="slug" className="col-form-label">http://{process.env.HOST}/</label>
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