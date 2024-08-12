import './style.css';
import hometab from './home.js';
import menutab from './menu.js';


const homebtn=document.querySelector('.home');
const menubtn=document.querySelector('.menu');

homebtn.addEventListener('click',()=>{
    document.body.innerHTML = '';
    document.body.appendChild(homebtn);
    document.body.appendChild(menubtn);
    document.querySelector('body').appendChild(hometab());
});

menubtn.addEventListener('click',()=>{
    document.body.innerHTML = '';
    document.body.appendChild(homebtn);
    document.body.appendChild(menubtn);
    document.querySelector('body').appendChild(menutab());
});