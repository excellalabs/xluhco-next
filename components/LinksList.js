export default function LinksList({links}){

  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <a href={`${process.env.HOST}/${link.slug}`}>
            {`${process.env.HOST}/${link.slug} (${link.url})`}
          </a>
        </li>
      ))}
    </ul>
  );
}