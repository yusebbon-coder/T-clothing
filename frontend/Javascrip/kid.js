const productt = [
        {
        id : 32,
        brand : "T-COLECTION",
        name : "Newborn Baby Clothes",
        category : "Clothes",
        for : "kid",
        price : 0,
        oldprice :5.89,
        discount :0,
        ratting : 3.9,
        review : 2.8,
        size : ["0-1"],
        color : ["Blue","White"],
        besseller : false,
        news : false,
        description : "Find a selection of newborn baby clothes at H&M. Browse comfortable outfits for newborn baby boys and girls aged 0 to 9 months. Shop now.",
        image : "https://i.pinimg.com/1200x/8c/bb/f1/8cbbf149bc506aa017fa71f9d4f9537b.jpg",
        smailimage : [
            "https://i.pinimg.com/1200x/8c/bb/f1/8cbbf149bc506aa017fa71f9d4f9537b.jpg",
            "https://i.pinimg.com/736x/63/60/6b/63606b612eed96f9649176079d1ba585.jpg"        
        ]
    },
     {
        id : 33,
        brand : "T-COLECTION",
        name : "Brown SummerCasual",
        category : "Casual",
        for : "kid",
        price : 0,
        oldprice :4.89,
        discount :0,
        ratting : 3.9,
        review : 2.8,
        size : ["1-2","2-3","3-4","4-5","5-6"],
        color : ["Brown","Blue"],
        besseller : false,
        news : false,
        description : "Toddler Boys' 3D Textured Fabric Shirt & Shorts Set,Shades Of Brown,Summer,Casual,City Break Minimalist Fashion Street Style For Vacation- Baby Boys Sets at SHEIN.",
        image : "https://i.pinimg.com/1200x/19/3f/9a/193f9a0c81b3917a06fd68d5ce29f53c.jpg",
        smailimage : [
            "https://i.pinimg.com/1200x/19/3f/9a/193f9a0c81b3917a06fd68d5ce29f53c.jpg",
            "https://i.pinimg.com/1200x/51/50/c9/5150c9e6540f7b8747ed1b646c863078.jpg"        
        ]
    },
     {
        id : 34,
        brand : "T-COLECTION",
        name : "Jordan Kids' Jersey ",
        category : "T-Shirt",
        for : "kid",
        price : 0,
        oldprice :5.89,
        discount :0,
        ratting : 4.9,
        review : 3.8,
        size : ["1-2","2-3","3-4","4-5","5-6","6-7"],
        color : ["Blue","Red"],
        besseller : false,
        news : false,
        description : "Jordan Kids' Jersey & Shorts Set available at",
        image : "https://i.pinimg.com/1200x/41/a0/49/41a0494f2388911559d5ff728be9cc09.jpg",
        smailimage : [
            "https://i.pinimg.com/1200x/41/a0/49/41a0494f2388911559d5ff728be9cc09.jpg",
            "https://i.pinimg.com/736x/0d/bd/da/0dbdda29fcb7754f6d188f7f6dcc98e4.jpg"      
        ]
    },
     {
        id : 35,
        brand : "T-COLECTION",
        name : "NICK Shose",
        category : "Shose",
        for : "kid",
        price : 0,
        oldprice :2.89,
        discount :0,
        ratting : 4.9,
        review : 3.8,
        size : ["1-2","2-3","3-4"],
        color : ["Black"],
        besseller : false,
        news : false,
        description : "Lightweight and stylish sneakers designed for everyday comfort, casual outfits, and active streetwear.",
        image : "https://i.pinimg.com/736x/ee/4b/b3/ee4bb3af14fa175454a49420fe0df946.jpg",
        smailimage : [
            "https://i.pinimg.com/736x/ee/4b/b3/ee4bb3af14fa175454a49420fe0df946.jpg",
            "https://i.pinimg.com/1200x/03/66/5a/03665a3b55a432edb179a0da1d24ef12.jpg"      
        ]
    },
     {
        id : 36,
        brand : "T-COLECTION",
        name : "Baby DressShirts",
        category : "Dress",
        for : "kid",
        price : 0,
        oldprice :3.89,
        discount :0,
        ratting : 4.9,
        review : 3.8,
        size : ["1-2","2-3","3-4","4-5","5-6"],
        color : ["Blue"],
        besseller : false,
        news : false,
        description : "Lightweight and stylish sneakers designed for everyday comfort, casual outfits, and active streetwear.",
        image : "https://i.pinimg.com/1200x/36/93/32/36933246c6160ebdcde0112dcdd776e9.jpg",
        
    },
     {
        id : 36,
        brand : "T-COLECTION",
        name : "T-Shirt hellblauGestreift",
        category : "T-shirt",
        for : "kid",
        price : 0,
        oldprice :4.89,
        discount :0,
        ratting : 4.9,
        review : 3.8,
        size : ["1-2","2-3","3-4","4-5","5-6"],
        color : ["Blue"],
        besseller : false,
        news : false,
        description : "Hellblaues Streifenshirt für Kinder und Erwachsene",
        image : "https://i.pinimg.com/736x/d4/a9/96/d4a996839990dfc9ee2a1325a7beedd3.jpg",
        
    },
]
const kidproduct = productt.filter(product => product.for === "kid");
const productkid = document.getElementById("kid");
if(productkid){
    productkid.innerHTML = kidproduct.map(product =>{
return  `
    <div class="w-full h-full shadow-sm max-w-sm mt-2">        
    <div class="relative  w-full aspect-[3/4] overflow-hidden">
            <img src="${product.image}" alt="image" class="w-full h-full object-cover">
                <p class="px-1 py-1 md:px-3 md:py-2 bg-black text-white absolute bottom-0">New Arrivals</p>
        </div>
        <div class="py-2">
            <div class="flex justify-between">
                <p class="text-xs md:text-sm font-semibold">${product.brand}</p>
                <i class="fa-regular fa-heart text-xl"></i>
            </div>
            <h2 class="text-sm tracking-tight font-medium py-1">${product.name}</h2>
            <h2 class="text-sm tracking-tight font-medium py-1 text-red-600">$${product.oldprice}</h2>
        </div>
    </div>
  `;
    }).join("");
}