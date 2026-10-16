const category = [
    {
        id : 1,
        name : "Men outfite",
        image :"https://i.pinimg.com/736x/38/43/ac/3843acbe0f262fae04658d3ddcee5288.jpg",
    },
     {
        id : 2,
        name : "Wo-men outfit",
        image :"https://i.pinimg.com/1200x/b3/c5/02/b3c502729c91923c56130636b7f7a96d.jpg",
    },
     {
        id : 3,
        name : "Kid outfit",
        image :"https://i.pinimg.com/736x/35/ea/a6/35eaa6410b6eca4ace59215abce1c29e.jpg",
    },
];
const productcategory = document.getElementById("category");
productcategory.innerHTML = category.map(product =>{
    return`
        <div class="w-40 h-full shadow mx-4 mt-6">
                <img src="${product.image}" alt="image" class="w-full aspect-[3/4] object-cover"/>
                <div class="">
                    <h2 class="text-lg font-semibold">${product.name}</h2>
                    <a href="">view products <i class="fa-solid fa-arrow-right" style="color: rgb(1, 0, 7);"></i></a>
                </div>
        </div>
    `;
}).join("");