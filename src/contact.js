import './style.css';
import Icon from './favicon.png';
import index from '.';
import about from './about';
import menuFnc from './menu';


export default function contactFnc() {
    document.body.replaceChildren();
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = Icon;
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Info";
    const links = document.createElement('div');
    links.classList.add('links');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    const aboutUs = document.createElement('a');
    const phone = document.createElement('div');
    const email = document.createElement('div');
    const address = document.createElement('div');
    phone.classList.add('info');
    email.classList.add('info');
    address.classList.add('info');

    phone.textContent = "Phone: (505) 146-0195";
    email.textContent = "Email: info@lospolloshermanos.com";
    address.textContent = "Address: 12000 – 12100 Coors Rd SW, Albuquerque, New Mexico 87045";

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    aboutUs.textContent = 'About Us';

    home.addEventListener('click', index);
    menu.addEventListener('click', menuFnc);
    aboutUs.addEventListener('click', about);

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    links.appendChild(aboutUs);

    content.appendChild(contactHeader);
    content.appendChild(links);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(address);

    document.head.appendChild(iconLink);
    document.body.appendChild(content);
    
}

contactFnc();