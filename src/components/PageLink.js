import { pageLinks } from '../data';

const PageLink = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLink;