function menutab() {
    let div = document.createElement('div');
    div.classList.add('content');

    const menuItems = [
        { name: 'Burger', price: '$8.99' },
        { name: 'Pizza', price: '$12.99' },
        { name: 'Pasta', price: '$10.99' },
        { name: 'Salad', price: '$7.99' },
        { name: 'Sandwich', price: '$6.99' },
        { name: 'Steak', price: '$15.99' },
        { name: 'Sushi', price: '$13.99' },
        { name: 'Tacos', price: '$9.99' }
    ];

    menuItems.forEach(item => {
        let foodDiv = document.createElement('div');
        foodDiv.classList.add('section');

        let foodItem = document.createElement('p');
        foodItem.textContent = `Item: ${item.name}`;

        let price = document.createElement('p');
        price.textContent = `Price: ${item.price}`;

        foodDiv.appendChild(foodItem);
        foodDiv.appendChild(price);
        div.appendChild(foodDiv);
    });

    return div;
}

export default menutab;
