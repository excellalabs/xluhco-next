export default function LinksList({links}){

  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <a href={`${process.env.HOST}/${link.shortId}`}>
            {`${process.env.HOST}/${link.shortId} (${link.url})`}
          </a>
        </li>
      ))}
    </ul>
  );
}