import logo from '../images/logo.svg';
// import { pageLinks, socialLinks } from '../data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        
        <PageLink parentClass='nav-links' itemClass='nav-link' />
        <SocialLink parentClass='nav-icons' itemClass='nav-icon'/>

        {/* <ul className='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul> */}

        {/* <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const {id, href, icon} = link
            return (
              <li key={id}>
                <a 
                  href={href} 
                  target='_blank' 
                  rel='noreferrer'
                  className='nav-icon'>
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  )
}

export default Navbar;