const initialState = [
	{
        id:1,
        name: "Suporte para Notebook, OCTOO, Uptable, UP-BL", 
        price: 49, 
        image: "https://m.media-amazon.com/images/I/51OYxPCZ9TL._AC_SL1500_.jpg"
    },
	{
        id:2,
        name: "HyperX Gaming Headset Cloud Flight Wireless", 
        price: 749, 
        image: "https://m.media-amazon.com/images/I/71ap89elAuL._AC_SL1428_.jpg"
    },

    {   id:3,
        name: "Mouse Pad Professional Gaming, Havit", 
        price: 38.90,
        image:'https://m.media-amazon.com/images/I/418WwgA4tjL._AC_.jpg'
    },

    {
        id:4,
        name: "HyperX Teclado Gamer HyperX Alloy Core RGB, ABNT2", 
        price: 239,
        image:'https://m.media-amazon.com/images/I/61au1sF-vNL._AC_SL1000_.jpg'
    },

    {
        id:5,
        name:'Mouse Gamer Logitech G203 LIGHTSYNC RGB',
        price: 115,
        image:'https://m.media-amazon.com/images/I/71OrygkkeOL._AC_SL1500_.jpg'
    },

    {
        id:6,
        name:'Monitor Gamer Ultrawide LG Led 25 Full Hd IPS 1ms',
        price:900,
        image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTH3L4q2vHOxn6GG-FuxU4T5A4n8kcAXNPHCDErlmBtBHuJugreM8PQ-1o9Hsz1nGDRotvse7f6l0_PuWwQdUwfXupz8H9RpW41J1KobUVzqiywXmHyJcrc&usqp=CAE'
    }

]

export const productsReducer = (state = initialState, action) => {
    switch(action.type){
        
        default:
            return state
    }
}