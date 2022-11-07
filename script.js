const bars = document.getElementById('bars');
const close = document.getElementById('close');
const links = document.getElementById('links');
const header = document.getElementById('header');

bars.addEventListener('click', ()=>{
    bars.style.display = 'none';
    close.style.display = 'block';
    links.style.display = 'block';
    header.style.backgroundColor = '#020805';
})

close.addEventListener('click', ()=>{
    close.style.display = 'none';
    bars.style.display = 'block';
    links.style.display = 'none';
    header.style.backgroundColor = 'unset';
})