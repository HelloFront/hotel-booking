import getData from "./getData";
import showMap from "./showMap";

const renderItems = () => {
    const outItems = document.querySelector('.items');

    getData().then(res => {
        res.forEach(item => {
            outItems.insertAdjacentHTML('beforeend', `
            <div class="item">
            <div class="wrapper">
                <div>
                    <div class="left-side">
                        <img src="${item.img}" alt="icon-hotel">
                        <div class="info">
                            <div class="top">
                                <p class="name">${item.name}</p>
                                <p class="location">${item.location}</p>
                                <p class="description">
                                    ${item.description}
                                </p>
                            </div>
                            <button class="showMap" data-lat="${item.lat}" data-lon="${item.lon}">Показать на карте</button>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="stars" data-stars="${item.stars}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                        <p class="testimonial">${item.testimonials} отзыва</p>
                    </div>
                </div>
                <div id="map" class="map"></div>
            </div>
        </div>`)
        });

        const allStars = document.querySelectorAll('.stars');
        
        allStars.forEach(item => {
            for(let i = 0; i < +item.dataset.stars; i++) {
                item.children[i].style.fill = 'orange'
            }
        });
        showMap()
    })
}

export default renderItems