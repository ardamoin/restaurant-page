import './style.css';
import curly from './curly.jpg';
import kid from './kid.jpg';
import Icon from './favicon.png';
import index from './index.js';
import menuFnc from './menu';

export default function about() {
    document.body.replaceChildren();
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = Icon;
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    const cultNValues = document.createElement('h1');
    cultNValues.textContent = "OUR CULTURE & VALUES";
    const links = document.createElement('div');
    links.classList.add('links');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    const aboutUs = document.createElement('a');
    const columns = document.createElement('div');
    columns.classList.add('columns');
    const column1 = document.createElement('div');
    const column2 = document.createElement('div');
    column1.classList.add('column');
    column2.classList.add('column');
    const quote1 = document.createElement('div');
    const quote2 = document.createElement('div');

    quote1.innerHTML = `We know how important it is to feed your family right, 
    and we hold those values near and dear to our heart. Every meal we feed you will be FLAVORFUL
    , WARM, FRESH, and filled with LOVE and CARE. That is our promise to you. <br><br>
    Our motto: "Los Pollos Hermanos! Taste the Family!"`;

    quote2.textContent = `Los Pollos Hermanos knows what family tastes like and we bring 
    that warmth and goodness into our food every single day. We always have something delicious 
    cooking, be it our crispy fried chicken, new spicy curly fries, or delicious dipping sauces.`;

    const Curly = new Image();
    Curly.classList.add('curly');
    const Kid = new Image();
    Kid.classList.add('kid');

    Curly.src = curly;
    Kid.src = kid;

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    aboutUs.textContent = 'About Us';

    home.addEventListener('click', index);
    menu.addEventListener('click', menuFnc);

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    links.appendChild(aboutUs);
    

    column1.appendChild(Curly);
    column1.appendChild(quote1);

    column2.appendChild(quote2);
    column2.appendChild(Kid);

    columns.appendChild(column1);
    columns.appendChild(column2);


    content.appendChild(cultNValues);
    content.appendChild(links);
    content.appendChild(columns);
    document.head.appendChild(iconLink)
    document.body.appendChild(content);

}
