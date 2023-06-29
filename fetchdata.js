const carContainer = document.querySelector('.car-container')


const fetchCars= async()=>{
    const response= await fetch('http://localhost:8080')
    const data = await response.json();
    
    data.map(car =>{
        const carCard=document.createElement('div')
        carCard.classList.add('car-card')
        carCard.innerHTML=`
            <div><img src="${car.image}"/></div>
            <h2>${car.title}</h2>
            ${car.genres.map(genre => `<p class=""> $genre</p>`).join('')}
        `

        carContainer.appendChild(carCard)
    })
}

fetchCars()