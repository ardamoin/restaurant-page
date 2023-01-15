import './style.css';
import Icon from './favicon.png';
import Menu from './menu.jpg';
import index from '.';
import about from './about';
import contactFnc from './contact';

export default function menuFnc() {
    document.body.replaceChildren();
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = Icon;
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Menu";
    const links = document.createElement('div');
    links.classList.add('links');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    const aboutUs = document.createElement('a');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    const menuImg = new Image();
    menuImg.src = Menu;
    menuDiv.appendChild(menuImg);

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    aboutUs.textContent = 'About Us';

    home.addEventListener('click', index);
    contact.addEventListener('click', contactFnc);
    aboutUs.addEventListener('click', about);

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    links.appendChild(aboutUs);

    content.appendChild(menuHeader);
    content.appendChild(links);
    content.appendChild(menuDiv);
    document.head.appendChild(iconLink);
    document.body.appendChild(content);
}