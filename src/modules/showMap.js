import { Loader } from "@googlemaps/js-api-loader"

const showMap = () => {
    const allBtns = document.querySelectorAll('.showMap');
    const loader = new Loader({
    apiKey: "AIzaSyAfuceu5axVHt2tf7vM3kWWsyuu4A2Dq5Y",
    version: "weekly",
    });
      

    allBtns.forEach(item => {
        item.addEventListener('click', show)
    }); 

    function show () {
        const opt = {
            center : {
                lat: +this.dataset.lat,
                lng: +this.dataset.lon
            },
            zoom: 15
        }
        loader.load().then(() => {
            let map = new google.maps.Map(this.closest('.wrapper').lastElementChild, opt);
                new google.maps.Marker({
                    position: opt.center,
                    map
                  });

                this.closest('.wrapper').lastElementChild.classList.toggle('active');
                
                if(this.closest('.wrapper').lastElementChild.classList.contains('active')) {
                    this.innerText = 'Скрыть карту';
                } else this.innerText = 'Показать на карте';
          });
        }
}

export default showMap