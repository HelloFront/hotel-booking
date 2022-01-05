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
        let map;
        const svgMarker = {
            path: "M4.021 10.688c1.208.172 2.51 1.312 2.979 1.781v-10.514c0-1.08.92-1.955 2-1.955s2 .875 2 1.955v6.058c0 .784.814.885.919.103.216-1.604 2.519-1.817 2.693.399.043.546.726.655.866.027.326-1.444 2.501-1.458 2.758.758.066.579.796.696.848.034.051-.67.281-.934.607-.934 1.098 0 2.309 2.019 2.309 4.41 0 4.295-3 4.306-3 11.19h-10c-.332-3.942-3.462-7.431-6.271-10.241-.488-.488-.729-1.052-.729-1.564 0-.93.759-1.688 2.021-1.507z",
            fillColor: "rgb(0, 0, 0)",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 180,
            scale: 1.5,
        }
        const opt = {
            center : {
                lat: +this.dataset.lat,
                lng: +this.dataset.lon
            },
            zoom: 15
        }
        loader.load().then(() => {
            map = new google.maps.Map(this.closest('.wrapper').lastElementChild, opt);
                new google.maps.Marker({
                    position: opt.center,
                    map,
                    icon: svgMarker
                  });

                this.closest('.wrapper').lastElementChild.classList.toggle('active');
                if(this.closest('.wrapper').lastElementChild.classList.contains('active')) {
                    this.innerText = 'Скрыть карту';
                } else this.innerText = 'Показать на карте';
          });
        }
}

export default showMap