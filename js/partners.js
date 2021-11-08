const cardsRestaurants = document.querySelector('.cards-restaurants');



const renderItems = (data) => {
data.forEach((item) => {
    const { image, kitchen, name, price, products, stars, time_of_delivery } = item;
    const link = document.createElement('a');
    link.setAttribute('href', '/cafePage.html');
    link.classList.add('card');
    link.classList.add('card-restaurant');
    link.dataset.products = products;
    link.innerHTML = `
    <img src="${image}" alt="${name} class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${name}</h3>
								<span class="card-tag tag">${time_of_delivery} мин</span>
							</div>
							<div class="card-info">
								<div class="rating">
									${stars}
								</div>
								<div class="price">${price}</div>
								<div class="category">${kitchen}</div>
							</div>
						</div>
    `
link.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('restaurant', JSON.stringify(item));
    window.location.href = '/cafePage.html';
})


cardsRestaurants.append(link);
});
}


fetch('../db/partners.json')
.then((response) => response.json())
.then((data) => {
    renderItems(data)
})
.catch((error) => {
    console.log(error);
})