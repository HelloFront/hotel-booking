const getData = () => {
    return fetch('https://hotel-3961b-default-rtdb.europe-west1.firebasedatabase.app/hotels.json') 
        .then(res => res.json())
}

export default getData