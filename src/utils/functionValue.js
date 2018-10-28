const addToCart = (cart,item,quantity) => {
    cart.items.push({
        item,
        quantity,
    });
    return cart;
}


const originalCart = {
    items: []
}

const cart = addToCart(originalCart, {name: 'xo', price: '1299'}, 1);

console.log(originalCart);


//=================


function changeProps(obj) {

    obj.newProps = 'newProps';
}


let person = {
    name: 'xiaoming',
    age : 19
}

changeProps(person);

console.log(person);
