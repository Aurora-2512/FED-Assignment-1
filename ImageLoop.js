const pagodas=[
    {id: 1, image:"image/Shwezigone.jpg", name:"Shwezigone"},
    {id: 2, image:"image/Ananda.jpg", name: "Ananda"},
    {id: 3, image:"image/Bupaya.jpg",name:"Bupaya"},
    {id: 4, image:"image/Sulamani.jpg",name:"Sulamani"},
    {id: 5, image:"image/Thatbyinnyu.jpg",name:"Thatbyinnyu"},
    {id: 6, image:"image/Lawkanandar.jpg",name:"Lawkanandar"}
];
const grid=document.querySelector("#productGrid")

pagodas.forEach(pagodas=> {
    const item=document.createElement('div');
    item.className = 'pagoda-item';
    item.innerHTML =
    `
        <img src="${pagodas.image}" alt="Pagoda Image" >
        <div>
            <div class="name">${pagodas.name}</div>
        </div>
    `;
    grid.appendChild(item);
})

const scenery=[
    {id: 1, image:"image/balloons-over-bagan-temples.jpg",name:"Balloons"},
    {id: 2, image:"image/Yote thay.jpg",name:"Puppets"},
    {id: 3, image:"image/Sunset bagan.jpg",name:"Sunset"},
    {id: 4, image:"image/Nyaung oo wet market.jpg",name:"Wet Market"},
    {id: 5, image:"image/souvenir.jpg",name:"Souvenir"},
    {id: 6, image:"image/horse_cart.jpg",name:"Horse-Cart"}
];

const box=document.querySelector("#sceneryGrid")

scenery.forEach(scenery=> {
    const item=document.createElement('div');
    item.className = 'scenery-item';
    item.innerHTML =
    `
        <img src="${scenery.image}" alt="Scenery Image" />
        <div>
            <div class="name">${scenery.name}</div>
        </div>
    `;
    box.appendChild(item);
})

const food=[
    {id: 1, image:"image/Mont hin gar.jpg",name:"Mont Hin Gar"},
    {id: 2, image:"image/Tea-leaf salad.jpg",name:"Tea-Leaf Salad"},
    {id: 3, image:"image/Kaut nyin paung.jpg",name:"Kaut Nyin Paung"},
    {id: 4, image:"image/Pone yay gyi.jpg",name:"Pone Yay Gyi"},
    {id: 5, image:"image/Mont pyr tha lat.jpg",name:"Mont Pyar Tha Let"},
    {id: 6, image:"image/Mont Lin Mayar.jpg",name:"Mont Lin Mayar"}];
    
const square=document.querySelector("#square")

food.forEach(food=>{
    const item=document.createElement('div');
    item.className='food-item';
    item.innerHTML=
    `
        <img src= "${food.image}" alt="food image"/>
        <div>
            <div class="name">${food.name}</div>
        </div>
    `;
    square.appendChild(item);
})



