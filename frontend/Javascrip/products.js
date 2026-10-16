const products = [
    {
        id : 1,
        brand : "T-COLECTION",
        name : "Collar Sweater Polo",
        category : "polo shirt",
        for : "men",
        price : 0,
        oldprice :24.50,
        discount :0,
        ratting : 4.9,
        review : 3.8,
        size : ["S","M","L","XL","XXL"],
        color : ["Green"],
        besseller : true,
        news : true,
        description : "Lightweight short-sleeve sweater polo in our luxe sweater-knit fabric and relaxed-fit silhouette, featuring on-trend tipping details, no-button Johnny collar and banded hem and cuf",
        image : "https://i.pinimg.com/736x/0c/f8/d3/0cf8d311f5acfe42cba6c01042fb2c44.jpg",
        smailimage : [
            "https://i.pinimg.com/736x/2b/50/7e/2b507ef608a3aadafc8f9e05e36eaeb4.jpg",
            "https://i.pinimg.com/736x/0c/f8/d3/0cf8d311f5acfe42cba6c01042fb2c44.jpg"
        ],
    },
     {
        id : 2,
        brand : "T-COLECTION",
        name : "Elegant Casual Knit Top",
        category : "Elegant",
        for : "men",
        price : 0,
        oldprice :22.30,
        discount :0,
        ratting : 4.8,
        review : 3.6,
        size : ["S","M","L","XL"],
        color : ["Black","White"],
        besseller : true,
        news : false,
        description : "A stylish and comfortable knit top designed with a clean, modern look. Perfect for everyday wear, casual outings, and easy-to-style outfits.",
        image : "https://i.pinimg.com/736x/62/bc/63/62bc63c44eeb246d3267434e11843f2d.jpg",
        smailimage : [
            "https://i.pinimg.com/736x/45/43/c3/4543c30bbfeae2bc6c9a0eb5f3c078d8.jpg",
            "https://i.pinimg.com/736x/62/bc/63/62bc63c44eeb246d3267434e11843f2d.jpg"
        ],
    },
      {
        id : 3,
        brand : "T-COLECTION",
        name : "Elegant Oversized Casual Shirt",
        category : "Elegant",
        for : "men",
        price : 0,
        oldprice :18.30,
        discount :0,
        ratting : 4.8,
        review : 3.6,
        size : ["S","M","L","XL","XXL"],
        color : ["Gray"],
        besseller : true,
        news : false,
        description : "A modern oversized shirt with a relaxed silhouette and effortless style. Perfect for creating a clean, comfortable look for everyday wear.",
        image : "https://i.pinimg.com/1200x/b9/80/e8/b980e8dcd1104679376ada5f5958887a.jpg",
        smailimage : [
            "https://i.pinimg.com/1200x/b9/80/e8/b980e8dcd1104679376ada5f5958887a.jpg"
        ],
    },
      {
        id : 4,
        brand : "T-COLECTION",
        name : "Classic Relaxed Fit Shirt",
        category : "shirt",
        for : "men",
        price : 0,
        oldprice :19.99,
        discount :0,
        ratting : 4.9,
        review : 3.9,
        size : ["S","M","L"],
        color : ["Blue"],
        besseller : false,
        news : true,
        description : "A timeless relaxed-fit shirt designed for a clean and effortless look. Its simple style makes it easy to pair with jeans, trousers, or shorts for everyday outfits.",
        image : "https://i.pinimg.com/1200x/19/e4/ac/19e4accffbdac9800284eed33902484d.jpg",
        smailimage : [
            "https://i.pinimg.com/736x/6c/52/b8/6c52b8fb9f7a3e5081c4dbd380460ef4.jpg",
            "https://i.pinimg.com/1200x/19/e4/ac/19e4accffbdac9800284eed33902484d.jpg"
        ],
    },
     {
        id : 5,
        brand : "T-COLECTION",
        name : "Classic Straight-Leg Jeans",
        category : "Straight-Leg",
        for : "men",
        price : 0,
        oldprice :15.99,
        discount :0,
        ratting : 4.9,
        review : 3.9,
        size : ["S","M","L","XL"],
        color : ["White","Orange"],
        besseller : false,
        news : true,
        description : "Classic straight-leg jeans with a relaxed, timeless silhouette. Easy to style with T-shirts, shirts, or jackets for a clean everyday casual look.",
        image : "https://i.pinimg.com/736x/d2/1b/28/d21b289cde287ce14af6c00c39b2c193.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/d2/1b/28/d21b289cde287ce14af6c00c39b2c193.jpg",
           "https://i.pinimg.com/1200x/32/03/32/320332c66fa08501c5df11845a8d5ec7.jpg"
        ],
    },
     {
        id : 6,
        brand : "T-COLECTION",
        name : "Classic Long-Sleeve Casual Shirt",
        category : "Long-Sleev",
        for : "men",
        price : 0,
        oldprice :21.99,
        discount :0,
        ratting : 4.9,
        review : 3.9,
        size : ["S","M","L","XL","XXL"],
        color : ["White","Brown"],
        besseller : false,
        news : true,
        description : "A versatile long-sleeve shirt with a clean, timeless design. Comfortable and easy to style with jeans, trousers, or chinos for a polished everyday look.",
        image : "https://i.pinimg.com/736x/9e/22/ab/9e22ab93af566239603740ff3341ee37.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/9e/22/ab/9e22ab93af566239603740ff3341ee37.jpg",
           "https://i.pinimg.com/1200x/6e/0f/f1/6e0ff1be772219ecc74192d81ed7600c.jpg"
        ],
    },
      {
        id : 7,
        brand : "T-COLECTION",
        name : "Essential Long-Sleeve Polo",
        category : "Long-Sleev",
        for : "men",
        price : 0,
        oldprice :17.99,
        discount :0,
        ratting : 4.8,
        review : 3.7,
        size : ["S","M","L","XL"],
        color : ["Brown","Black","White"],
        besseller : false,
        news : true,
        description : "A timeless long-sleeve polo shirt designed with a clean collar and relaxed fit. Perfect for casual and smart-casual outfits, easily paired with jeans, chinos, or trousers.",
        image : "https://i.pinimg.com/1200x/d5/86/0c/d5860c00c6ee7c280f2699592aa3f483.jpg",
        smailimage : [
           "https://i.pinimg.com/1200x/d5/86/0c/d5860c00c6ee7c280f2699592aa3f483.jpg",
           "https://i.pinimg.com/1200x/df/eb/34/dfeb34624b288df968025a19e839cc94.jpg",
           "https://i.pinimg.com/736x/8e/53/06/8e5306166864269d7c460c821244df92.jpg"
        ],
    },
      {
        id : 8,
        brand : "T-COLECTION",
        name : "Classic Casual Sneakers",
        category : "Nick",
        for : "men",
        price : 0,
        oldprice :17.99,
        discount :0,
        ratting : 4.8,
        review : 3.7,
        size : ["36","38","40","42","44","46"],
        color : ["gray","White","Black"],
        besseller : false,
        news : false,
        description : "A stylish pair of casual sneakers with a clean, versatile design. Comfortable for everyday wear and easy to pair with jeans, trousers, or casual outfits.",
        image : "https://i.pinimg.com/736x/ed/99/c2/ed99c230015d709ef8da4a719a6489d7.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/ed/99/c2/ed99c230015d709ef8da4a719a6489d7.jpg",
           "https://i.pinimg.com/1200x/7e/70/5d/7e705ddeb2f0c0789b3b78e448548224.jpg",
           "https://i.pinimg.com/1200x/a7/0a/93/a70a939cbf6906eb4dceb188041a9d0d.jpg",
           "https://i.pinimg.com/1200x/35/69/1e/35691e5842b6948deedf64150fe012cc.jpg"
        ],
    },
     {
        id : 9,
        brand : "T-COLECTION",
        name : "Wide-Leg Casual Jeans",
        category : "Baggy Jeans",
        for : "men",
        price : 0,
        oldprice :24.99,
        discount :0,
        ratting : 4.9,
        review : 4.5,
        size : ["S","M","L","XL","XXL","3XL"],
        color : ["Blue","Gray"],
        besseller : false,
        news : true,
        description : "A modern pair of baggy jeans featuring a loose, relaxed silhouette for all-day comfort. Perfect for creating casual streetwear looks with T-shirts, hoodies, or oversized shirts.",
        image : "https://i.pinimg.com/736x/56/16/4e/56164ed6f8822092f0b95cdcecc36c62.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/56/16/4e/56164ed6f8822092f0b95cdcecc36c62.jpg",
           "https://i.pinimg.com/736x/eb/da/6d/ebda6d903c5550825fef6d0871a7cf1a.jpg",
           "https://i.pinimg.com/736x/48/c0/f1/48c0f1c942155b5919908417b230ec60.jpg"
        ],
    },
     {
        id : 10,
        brand : "T-COLECTION",
        name : "Straight-Leg Denim Jeans",
        category : "Jean",
        for : "men",
        price : 0,
        oldprice :15.99,
        discount :0,
        ratting : 4.9,
        review : 4.5,
        size : ["S","M","L","XL"],
        color : ["Gray"],
        besseller : false,
        news : false,
        description : "A versatile pair of classic denim jeans with a clean, timeless fit. Designed for everyday comfort and easy styling with T-shirts, shirts, hoodies, or sneakers.",
        image : "https://i.pinimg.com/736x/cc/70/f8/cc70f8b359a1d6e06a6df2aa4077c0d3.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/cc/70/f8/cc70f8b359a1d6e06a6df2aa4077c0d3.jpg"
        ],
    },
     {
        id : 11,
        brand : "T-COLECTION",
        name : "Casual Long-Sleeve Shirt",
        category : "Long-Sleev",
        for : "men",
        price : 0,
        oldprice :18.99,
        discount :0,
        ratting : 4.9,
        review : 4.5,
        size : ["S","M","L","XL","2xl"],
        color : ["Gray","Black"],
        besseller : false,
        news : true,
        description : "A versatile long-sleeve shirt with a clean and timeless design. Comfortable for everyday wear and easy to pair with jeans, trousers, or chinos.",
        image : "https://i.pinimg.com/736x/f9/44/f4/f944f42b5939c997536eb99289bfc03d.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/f9/44/f4/f944f42b5939c997536eb99289bfc03d.jpg",
           "https://i.pinimg.com/1200x/a2/22/56/a222564f28ec04a74d8c7e9cff7622c6.jpg"
        ],
    },
     {
        id : 12,
        brand : "T-COLECTION",
        name : "Boxy fit Long-Sleev",
        category : "Long-Sleev",
        for : "men",
        price : 0,
        oldprice :19.92,
        discount :0,
        ratting : 4.9,
        review : 4.5,
        size : ["S","M","L"],
        color : ["White"],
        besseller : false,
        news : false,
        description : "Keep it clean and stylish with the loose fit embroidered T-shirt — a versatile white streetwear essential perfect for school, outings, festivals, and everyday casual outfits. - Minimal clean aesthetic - Contrast embroidery detail - Relaxed loose fit comfort - Perfect everyday streetwear tee Tap to explore this casual essential.",
        image : "https://i.pinimg.com/736x/7e/26/e5/7e26e5db2d545cb6bb7bfdc1d00f6da1.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/7e/26/e5/7e26e5db2d545cb6bb7bfdc1d00f6da1.jpg",
           "https://i.pinimg.com/736x/da/d1/87/dad1872c60318593bfedab5aa1ca5491.jpg"
        ],
    },
     {
        id : 13,
        brand : "T-COLECTION",
        name : "Zip-up Hoodie",
        category : "hoodie",
        for : "men",
        price : 0,
        oldprice :25.10,
        discount :0,
        ratting : 4.7,
        review : 4.8,
        size : ["XS","S","M","L","XL"],
        color : ["Blue","Pink"],
        besseller : false,
        news : true,
        description : "",
        image : "https://i.pinimg.com/736x/6c/15/94/6c159483692f882a1ffecf861448364e.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/6c/15/94/6c159483692f882a1ffecf861448364e.jpg",
           "https://i.pinimg.com/736x/bf/16/5b/bf165b06b6885d3f8649acafd1031a6a.jpg",
           "https://i.pinimg.com/736x/7a/9d/f5/7a9df5e96f71150e7e2c164ea707c123.jpg",
           "https://i.pinimg.com/736x/7b/9f/e1/7b9fe10c0c72157aa68370458ec6a0a1.jpg"
        ],
    },
     {
        id : 14,
        brand : "T-COLECTION",
        name : "Short Sleeve T-Shirt",
        category : "Vintage ",
        for : "men",
        price : 0,
        oldprice :21.10,
        discount :0,
        ratting : 4.7,
        review : 4.8,
        size : ["XS","S","M","L","XL","XXL"],
        color : ["Yellow","White"],
        besseller : false,
        news : false,
        description : "A comfortable short-sleeve T-shirt designed with a clean, modern look. Made for everyday wear, it pairs effortlessly with jeans, trousers, or shorts.",
        image : "https://i.pinimg.com/1200x/b5/71/37/b57137102a0148dc159096aca0364f4e.jpg",
        smailimage : [
           "https://i.pinimg.com/1200x/b5/71/37/b57137102a0148dc159096aca0364f4e.jpg",
           "https://i.pinimg.com/1200x/6d/2c/2a/6d2c2a0c7bd53a28972e194b575720f2.jpg"
        ],
    },
     {
        id : 15,
        brand : "T-COLECTION",
        name : "Quarter Zip Polo T-Shirt",
        category : "Polo ",
        for : "men",
        price : 0,
        oldprice :23.14,
        discount :0,
        ratting : 4.6,
        review : 5.9,
        size : ["XS","S","M","L"],
        color : ["Brown","Black"],
        besseller : false,
        news : false,
        description : "Elevate your casual wardrobe with the AVIX Men's Quarter Zip Polo T-Shirt, a stylish and versatile piece that effortlessly blends comfort with contemporary fashion. Crafted in a rich brown hue, this short-sleeve polo features an eye-catching textured diamond pattern across the entire fabric, giving it a sophisticated, three-dimensional look that sets it apart from ordinary polo shirts",
        image : "https://i.pinimg.com/736x/c1/e2/23/c1e223182184d629c7884225fcef939c.jpg",
        smailimage : [
           "https://i.pinimg.com/736x/c1/e2/23/c1e223182184d629c7884225fcef939c.jpg",
           "https://i.pinimg.com/736x/09/6f/a1/096fa193e7f90347b7233a781ab141c1.jpg"
        ],
    },
     {
        id : 16,
        brand : "T-COLECTION",
        name : "wide leg jeans",
        category : "Baggy Jeans ",
        for : "men",
        price : 0,
        oldprice :18.34,
        discount :0,
        ratting : 4.6,
        review : 5.9,
        size : ["XS","S","M","L"],
        color : ["gray"],
        besseller : false,
        news : false,
        description : "Clean and aesthetic men’s streetwear outfit featuring an oversized white sweatshirt, ultra-wide charcoal baggy jeans, silver accessories, and a relaxed Y2K-inspired look. Perfect for casual street style, everyday outfits, and modern men’s fashion inspiration. men’s fashion, men’s streetwear, Y2K fashion, baggy jeans outfit, white sweatshirt outfit, oversized sweatshirt, wide leg jeans, men’s casual outfit, aesthetic outfit, Korean streetwear, urban fashion,",
        image : "https://i.pinimg.com/1200x/b8/32/b9/b832b93a14ffb5a7981713e608b43e8d.jpg",
        smailimage : [
           "https://i.pinimg.com/1200x/b8/32/b9/b832b93a14ffb5a7981713e608b43e8d.jpg",
           "https://i.pinimg.com/736x/b2/1e/35/b21e35054849dd1e68c6cdc7a0e2bbf2.jpg"
        ],
    },
]
 const Best = products.filter(product =>{return product.news === true;});
 const seller = document.getElementById("Bestseller");
 if(seller){
 seller.innerHTML = Best.map( product =>{
     return `
    <div class="w-full h-full shadow-sm max-w-sm mt-2">        <div class="relative  w-full aspect-[3/4] overflow-hidden">
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
//for men cart
const men = products.filter(product => product.for === "men");
const productmen = document.getElementById("men");
if(productmen){
productmen.innerHTML = men.map(product =>{
    return  `
    <div class="w-full h-full shadow-sm max-w-sm mt-2">        <div class="relative  w-full aspect-[3/4] overflow-hidden">
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