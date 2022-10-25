import { getLink } from '../lib/db'

import { useEffect } from 'react';

export async function getServerSideProps({params}) {
  const urlSlug = params.slug
  const link = await getLink(urlSlug);
  return {
    props: { link }, // will be passed to the page component as props
  }
}



function SlugPage({link}){
  useEffect((linkUrl) => {
    setTimeout(() => {
      window.location.href = link.linkUrl
    }, 1);
  });

  return (
    <div>
      <h1>Redirecting to {link.linkUrl}</h1>
    </div>
  );
};

export default SlugPage;