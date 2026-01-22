// Products Database - Verified Images
const allProducts = [
    // ============================
    // MEN'S COLLECTION
    // ============================
    {
        id: 'm101',
        name: 'Executive Oxford Shirt',
        brand: 'LuxeMen',
        price: 1499,
        oldPrice: 2499,
        discount: 40,
        category: 'men',
        subcategory: 'shirts',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80',
        images: [
            'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
            'https://images.unsplash.com/photo-1620012253295-c15cc3fe15c4?w=800&q=80'
        ],
        description: 'Impeccably tailored Oxford shirt for the modern professional. Crafted from breathable cotton with a crisp finish.',
        rating: 4.8,
        reviews: 45,
        stock: 30
    },
    {
        id: 'm102',
        name: 'Urban Street Hoodie',
        brand: 'StreetVibe',
        price: 1299,
        oldPrice: 1999,
        discount: 35,
        category: 'men',
        subcategory: 'sweaters',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80'],
        description: 'Stay warm and stylish with this premium fleece hoodie.',
        rating: 4.6,
        reviews: 32,
        stock: 25
    },
    {
        id: 'm103',
        name: 'Classic Chino Pants',
        brand: 'Basics',
        price: 1899,
        oldPrice: 2499,
        discount: 24,
        category: 'men',
        subcategory: 'pants',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80'],
        description: 'Versatile chinos that bridge the gap between casual and formal.',
        rating: 4.5,
        reviews: 67,
        stock: 15
    },
    {
        id: 'm104',
        name: 'Rugged Denim Jacket',
        brand: 'DenimCo',
        price: 2999,
        oldPrice: 3999,
        discount: 25,
        category: 'men',
        subcategory: 'jackets',
        image: 'https://i.pinimg.com/474x/57/1f/1c/571f1c2ce678e524774343283e4d4eae.jpg',
        images: ['https://i.pinimg.com/474x/57/1f/1c/571f1c2ce678e524774343283e4d4eae.jpg'],
        description: 'A timeless staple. Heavyweight accents and durable stitching.',
        rating: 4.9,
        reviews: 120,
        stock: 12
    },
    {
        id: 'm105',
        name: 'Premium Cotton Polo',
        brand: 'Gentleman',
        price: 999,
        oldPrice: 1599,
        discount: 37,
        category: 'men',
        subcategory: 'tshirts',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80'],
        description: 'Soft pique cotton polo shirt with a refined collar.',
        rating: 4.4,
        reviews: 89,
        stock: 40
    },
    {
        id: 'm106',
        name: 'Slim Fit Blazer',
        brand: 'LuxeMen',
        price: 4999,
        oldPrice: 6999,
        discount: 28,
        category: 'men',
        subcategory: 'shirts',
        image: 'https://i.pinimg.com/474x/1a/e9/c9/1ae9c940491fe431813e4ce66a7b4976.jpg',
        images: ['https://i.pinimg.com/474x/1a/e9/c9/1ae9c940491fe431813e4ce66a7b4976.jpg'],
        description: 'Sharp silhouette blazer for the modern man.',
        rating: 4.7,
        reviews: 55,
        stock: 10
    },
    {
        id: 'm107',
        name: 'Active Running Shorts',
        brand: 'Sporty',
        price: 799,
        oldPrice: 1299,
        discount: 38,
        category: 'men',
        subcategory: 'shorts',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80'],
        description: 'Lightweight performance shorts with moisture-wicking technology.',
        rating: 4.5,
        reviews: 78,
        stock: 22
    },
    {
        id: 'm108',
        name: 'Vintage Leather Jacket',
        brand: 'Retro',
        price: 5499,
        oldPrice: 7999,
        discount: 31,
        category: 'men',
        subcategory: 'jackets',
        image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80'],
        description: 'Genuine leather jacket with a distressed finish.',
        rating: 4.8,
        reviews: 90,
        stock: 8
    },

    // ============================
    // WOMEN'S COLLECTION
    // ============================
    {
        id: 'w101',
        name: 'Silky Floral Dress',
        brand: 'Elegance',
        price: 2499,
        oldPrice: 3499,
        discount: 28,
        category: 'women',
        subcategory: 'dresses',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80'],
        description: 'Flowing floral dress that captures the essence of spring.',
        rating: 4.9,
        reviews: 156,
        stock: 20
    },
    {
        id: 'w102',
        name: 'High-Waist Jeans',
        brand: 'DenimCo',
        price: 1899,
        oldPrice: 2599,
        discount: 27,
        category: 'women',
        subcategory: 'pants',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80'],
        description: 'Classic high-waist denim offering both style and comfort.',
        rating: 4.6,
        reviews: 98,
        stock: 25
    },
    {
        id: 'w103',
        name: 'Bohemian Summer Top',
        brand: 'BohoChic',
        price: 999,
        oldPrice: 1499,
        discount: 33,
        category: 'women',
        subcategory: 'tops',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80'],
        description: 'Airy and light top with intricate boho patterns.',
        rating: 4.5,
        reviews: 112,
        stock: 30
    },
    {
        id: 'w104',
        name: 'Formal Office Blazer',
        brand: 'BossLady',
        price: 3499,
        oldPrice: 4999,
        discount: 30,
        category: 'women',
        subcategory: 'jackets',
        image: 'https://i.pinimg.com/474x/77/57/50/7757508c2699a5ffd1ebd344e9de03eb.jpg',
        images: ['https://i.pinimg.com/474x/77/57/50/7757508c2699a5ffd1ebd344e9de03eb.jpg'],
        description: 'Command attention in this tailored blazer.',
        rating: 4.8,
        reviews: 75,
        stock: 15
    },
    {
        id: 'w105',
        name: 'Traditional Silk Saree',
        brand: 'Ethnic',
        price: 4999,
        oldPrice: 7999,
        discount: 37,
        category: 'women',
        subcategory: 'ethnic',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80'],
        description: 'Exquisite silk saree with hand-woven borders.',
        rating: 4.7,
        reviews: 88,
        stock: 12
    },
    {
        id: 'w106',
        name: 'Casual Knit Sweater',
        brand: 'Comfy',
        price: 1599,
        oldPrice: 2299,
        discount: 30,
        category: 'women',
        subcategory: 'sweaters',
        image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd0a77?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1620799140188-3b2a02fd0a77?w=800&q=80'],
        description: 'Warm and cozy knit sweater, perfect for layering.',
        rating: 4.6,
        reviews: 67,
        stock: 22
    },
    {
        id: 'w107',
        name: 'Designer Evening Gown',
        brand: 'Luxe',
        price: 7999,
        oldPrice: 12000,
        discount: 33,
        category: 'women',
        subcategory: 'dresses',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80'],
        description: 'Elegance personified. A gown that makes every evening special.',
        rating: 5.0,
        reviews: 42,
        stock: 5
    },
    {
        id: 'w108',
        name: 'Yoga Activewear Set',
        brand: 'FitLife',
        price: 2199,
        oldPrice: 2999,
        discount: 26,
        category: 'women',
        subcategory: 'tops',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80'],
        description: 'Breathable and stretchable activewear for your daily yoga sessions.',
        rating: 4.7,
        reviews: 130,
        stock: 28
    },

    // ============================
    // KIDS COLLECTION
    // ============================
    {
        id: 'k101',
        name: 'Playful Denim Overalls',
        brand: 'LittleStars',
        price: 1299,
        oldPrice: 1799,
        discount: 27,
        category: 'kids',
        subcategory: 'pants',
        image: 'https://images.unsplash.com/photo-1519238263496-61437aeb1134?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1519238263496-61437aeb1134?w=800&q=80'],
        description: 'Cute and durable overalls for active play.',
        rating: 4.8,
        reviews: 65,
        stock: 35
    },
    {
        id: 'k102',
        name: 'Colorful Cotton Tee',
        brand: 'FunWear',
        price: 599,
        oldPrice: 899,
        discount: 33,
        category: 'kids',
        subcategory: 'tshirts',
        image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80'],
        description: 'Bright and cheery t-shirt made from soft organic cotton.',
        rating: 4.5,
        reviews: 80,
        stock: 50
    },
    {
        id: 'k103',
        name: 'Party Princess Dress',
        brand: 'FairyTale',
        price: 1999,
        oldPrice: 2999,
        discount: 33,
        category: 'kids',
        subcategory: 'dresses',
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80'],
        description: 'A dress fit for a princess, perfect for birthdays and parties.',
        rating: 4.9,
        reviews: 95,
        stock: 18
    },
    {
        id: 'k104',
        name: 'Cozy Winter Jacket',
        brand: 'WarmKids',
        price: 2499,
        oldPrice: 3499,
        discount: 28,
        category: 'kids',
        subcategory: 'jackets',
        image: 'https://images.unsplash.com/photo-1557876889-8d8f76435422?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1557876889-8d8f76435422?w=800&q=80'],
        description: 'Keep them warm and bundled up with this insulated jacket.',
        rating: 4.7,
        reviews: 50,
        stock: 25
    },
    {
        id: 'k105',
        name: 'Summer Shorts Set',
        brand: 'BeachKid',
        price: 899,
        oldPrice: 1299,
        discount: 30,
        category: 'kids',
        subcategory: 'shorts',
        image: 'https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=800&q=80'],
        description: 'Ready for the beach! A comfortable shorts set for sunny days.',
        rating: 4.6,
        reviews: 70,
        stock: 30
    },
    {
        id: 'k106',
        name: 'School Essentials Uniform',
        brand: 'SmartKid',
        price: 1499,
        oldPrice: 1999,
        discount: 25,
        category: 'kids',
        subcategory: 'uniforms',
        image: 'https://images.unsplash.com/photo-1476718408413-acf6d7d96a7e?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1476718408413-acf6d7d96a7e?w=800&q=80'],
        description: 'Durable school uniform that stands up to the playground.',
        rating: 4.4,
        reviews: 45,
        stock: 60
    },
    {
        id: 'k107',
        name: 'Superhero Pajama Set',
        brand: 'DreamBig',
        price: 799,
        oldPrice: 1199,
        discount: 33,
        category: 'kids',
        subcategory: 'tshirts',
        image: 'https://images.unsplash.com/photo-1595166708170-49270da6a84d?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1595166708170-49270da6a84d?w=800&q=80'],
        description: 'Dreams are better in superhero pajamas. Soft and snug.',
        rating: 4.8,
        reviews: 110,
        stock: 40
    },
    {
        id: 'k108',
        name: 'Junior Sports Hoodie',
        brand: 'ActiveIn',
        price: 1199,
        oldPrice: 1699,
        discount: 29,
        category: 'kids',
        subcategory: 'sweaters',
        image: 'https://images.unsplash.com/photo-1614945484855-46f9012f5a56?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1614945484855-46f9012f5a56?w=800&q=80'],
        description: 'Sporty hoodie for the future athlete.',
        rating: 4.6,
        reviews: 88,
        stock: 30
    },

    // ============================
    // ACCESSORIES COLLECTION
    // ============================
    {
        id: 'a101',
        name: 'Classic Leather Watch',
        brand: 'Timeless',
        price: 2999,
        oldPrice: 4999,
        discount: 40,
        category: 'men',
        subcategory: 'accessories',
        type: 'watch',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'],
        description: 'Timeless elegance. A classic leather watch that pairs with everything.',
        rating: 4.8,
        reviews: 150,
        stock: 25
    },
    {
        id: 'a102',
        name: 'Luxury Handbag',
        brand: 'Vogue',
        price: 3499,
        oldPrice: 5999,
        discount: 41,
        category: 'women',
        subcategory: 'accessories',
        type: 'bag',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80'],
        description: 'Statement handbag for the fashion-forward woman.',
        rating: 4.9,
        reviews: 90,
        stock: 15
    },
    {
        id: 'a103',
        name: 'Aviator Sunglasses',
        brand: 'RayPro',
        price: 1999,
        oldPrice: 2999,
        discount: 33,
        category: 'men',
        subcategory: 'accessories',
        type: 'sunglasses',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80'],
        description: 'Cool and protective. Classic aviators never go out of style.',
        rating: 4.5,
        reviews: 180,
        stock: 40
    },
    {
        id: 'a104',
        name: 'Minimalist Silver Necklace',
        brand: 'Shine',
        price: 1299,
        oldPrice: 1999,
        discount: 35,
        category: 'women',
        subcategory: 'accessories',
        type: 'jewelry',
        image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=800&q=80'],
        description: 'Delicate silver necklace to add a touch of sparkle.',
        rating: 4.7,
        reviews: 130,
        stock: 35
    },
    {
        id: 'a105',
        name: 'Leather Belt Set',
        brand: 'Formal',
        price: 899,
        oldPrice: 1499,
        discount: 40,
        category: 'men',
        subcategory: 'accessories',
        type: 'belt',
        image: 'https://images.unsplash.com/photo-1624223359990-8c0a3112697d?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1624223359990-8c0a3112697d?w=800&q=80'],
        description: 'Essential leather belt set for the well-dressed man.',
        rating: 4.4,
        reviews: 95,
        stock: 45
    },
    {
        id: 'a106',
        name: 'Kids School Backpack',
        brand: 'TinyTravel',
        price: 999,
        oldPrice: 1599,
        discount: 37,
        category: 'kids',
        subcategory: 'accessories',
        type: 'bag',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'],
        description: 'Sturdy and colorful backpack for school days.',
        rating: 4.6,
        reviews: 70,
        stock: 30
    },
    {
        id: 'a107',
        name: 'Winter Wool Scarf',
        brand: 'Cozy',
        price: 699,
        oldPrice: 1099,
        discount: 36,
        category: 'women',
        subcategory: 'accessories',
        type: 'scarf',
        image: 'https://images.unsplash.com/photo-1520908695049-faad1023c025?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1520908695049-faad1023c025?w=800&q=80'],
        description: 'Wrap yourself in warmth with this soft wool scarf.',
        rating: 4.5,
        reviews: 110,
        stock: 50
    },
    {
        id: 'a108',
        name: 'Travel Wallet',
        brand: 'Nomad',
        price: 799,
        oldPrice: 1299,
        discount: 38,
        category: 'men',
        subcategory: 'accessories',
        type: 'wallet',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80',
        images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80'],
        description: 'Keep your documents safe and organized while traveling.',
        rating: 4.7,
        reviews: 85,
        stock: 40
    }
,
{
    "id": "m200",
    "name": "Red Modern Jacket",
    "brand": "Aur\u00e9a",
    "price": 2386,
    "oldPrice": 3787,
    "discount": 37,
    "category": "men",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Modern Jacket. Crafted from premium materials with attention to detail.",
    "rating": 3.6,
    "reviews": 135,
    "stock": 48
},
{
    "id": "m201",
    "name": "Blue Classic Short",
    "brand": "Aur\u00e9a",
    "price": 3953,
    "oldPrice": 4441,
    "discount": 11,
    "category": "men",
    "subcategory": "shorts",
    "image": "https://images.unsplash.com/photo-1509551383103-0f8cd465d6e5?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1509551383103-0f8cd465d6e5?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Classic Short. Crafted from premium materials with attention to detail.",
    "rating": 4.3,
    "reviews": 34,
    "stock": 53
},
{
    "id": "m202",
    "name": "Black Urban Jacket",
    "brand": "Aur\u00e9a",
    "price": 1301,
    "oldPrice": 2710,
    "discount": 52,
    "category": "men",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Urban Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.3,
    "reviews": 59,
    "stock": 11
},
{
    "id": "m203",
    "name": "White Vintage Short",
    "brand": "Urban",
    "price": 1038,
    "oldPrice": 1384,
    "discount": 25,
    "category": "men",
    "subcategory": "shorts",
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Vintage Short. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 269,
    "stock": 19
},
{
    "id": "m204",
    "name": "Green Sleek Tshirt",
    "brand": "LuxeMen",
    "price": 1105,
    "oldPrice": 1227,
    "discount": 10,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Sleek Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 170,
    "stock": 98
},
{
    "id": "m205",
    "name": "Navy Cozy Short",
    "brand": "LuxeMen",
    "price": 4553,
    "oldPrice": 6070,
    "discount": 25,
    "category": "men",
    "subcategory": "shorts",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Cozy Short. Crafted from premium materials with attention to detail.",
    "rating": 4.9,
    "reviews": 126,
    "stock": 73
},
{
    "id": "m206",
    "name": "Beige Stylish Short",
    "brand": "Urban",
    "price": 936,
    "oldPrice": 1318,
    "discount": 29,
    "category": "men",
    "subcategory": "shorts",
    "image": "https://images.unsplash.com/photo-1548624149-1f6f5ba7c297?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1548624149-1f6f5ba7c297?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Stylish Short. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 274,
    "stock": 27
},
{
    "id": "m207",
    "name": "Grey Premium Shirt",
    "brand": "LuxeMen",
    "price": 4485,
    "oldPrice": 7119,
    "discount": 37,
    "category": "men",
    "subcategory": "shirts",
    "image": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Grey Premium Shirt. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 250,
    "stock": 41
},
{
    "id": "m208",
    "name": "Yellow Elegant Jacket",
    "brand": "Aur\u00e9a",
    "price": 836,
    "oldPrice": 1266,
    "discount": 34,
    "category": "men",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Yellow Elegant Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 292,
    "stock": 52
},
{
    "id": "m209",
    "name": "Purple Casual Jacket",
    "brand": "Urban",
    "price": 3887,
    "oldPrice": 4798,
    "discount": 19,
    "category": "men",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Purple Casual Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.4,
    "reviews": 108,
    "stock": 16
},
{
    "id": "m210",
    "name": "Pink Formal Tshirt",
    "brand": "Aur\u00e9a",
    "price": 2242,
    "oldPrice": 4076,
    "discount": 45,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Pink Formal Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 230,
    "stock": 9
},
{
    "id": "m211",
    "name": "Brown Sporty Tshirt",
    "brand": "Aur\u00e9a",
    "price": 1401,
    "oldPrice": 1843,
    "discount": 24,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1527719327859-ac2235025a8c?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1527719327859-ac2235025a8c?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Brown Sporty Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 3.7,
    "reviews": 133,
    "stock": 50
},
{
    "id": "m212",
    "name": "Teal Chic Tshirt",
    "brand": "Gentleman",
    "price": 880,
    "oldPrice": 1692,
    "discount": 48,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1601333762716-4881759aa186?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1601333762716-4881759aa186?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Teal Chic Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.3,
    "reviews": 58,
    "stock": 72
},
{
    "id": "m213",
    "name": "Maroon Retro Short",
    "brand": "Urban",
    "price": 1178,
    "oldPrice": 1354,
    "discount": 13,
    "category": "men",
    "subcategory": "shorts",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Maroon Retro Short. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 161,
    "stock": 46
},
{
    "id": "m214",
    "name": "Orange Bold Shirt",
    "brand": "Gentleman",
    "price": 4335,
    "oldPrice": 6105,
    "discount": 29,
    "category": "men",
    "subcategory": "shirts",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Orange Bold Shirt. Crafted from premium materials with attention to detail.",
    "rating": 4.2,
    "reviews": 265,
    "stock": 58
},
{
    "id": "m215",
    "name": "Olive Minimalist Short",
    "brand": "LuxeMen",
    "price": 2417,
    "oldPrice": 5754,
    "discount": 58,
    "category": "men",
    "subcategory": "shorts",
    "image": "https://images.unsplash.com/photo-1620012253295-c15cc3fe15c4?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1620012253295-c15cc3fe15c4?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Olive Minimalist Short. Crafted from premium materials with attention to detail.",
    "rating": 3.8,
    "reviews": 60,
    "stock": 23
},
{
    "id": "m216",
    "name": "Charcoal Modern Tshirt",
    "brand": "LuxeMen",
    "price": 3042,
    "oldPrice": 6472,
    "discount": 53,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Charcoal Modern Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 122,
    "stock": 37
},
{
    "id": "m217",
    "name": "Cream Classic Shirt",
    "brand": "LuxeMen",
    "price": 2830,
    "oldPrice": 5549,
    "discount": 49,
    "category": "men",
    "subcategory": "shirts",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Cream Classic Shirt. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 54,
    "stock": 76
},
{
    "id": "m218",
    "name": "Red Urban Tshirt",
    "brand": "LuxeMen",
    "price": 2137,
    "oldPrice": 2887,
    "discount": 26,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1520591799316-6b30425429aa?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1520591799316-6b30425429aa?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Urban Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.2,
    "reviews": 286,
    "stock": 58
},
{
    "id": "m219",
    "name": "Blue Vintage Shirt",
    "brand": "LuxeMen",
    "price": 1245,
    "oldPrice": 1431,
    "discount": 13,
    "category": "men",
    "subcategory": "shirts",
    "image": "https://images.unsplash.com/photo-1583391733958-e02447d6d5ef?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1583391733958-e02447d6d5ef?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Vintage Shirt. Crafted from premium materials with attention to detail.",
    "rating": 3.8,
    "reviews": 296,
    "stock": 70
},
{
    "id": "m220",
    "name": "Black Sleek Tshirt",
    "brand": "Urban",
    "price": 2580,
    "oldPrice": 4777,
    "discount": 46,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1593032465175-d5ab691856c2?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1593032465175-d5ab691856c2?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Sleek Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 48,
    "stock": 13
},
{
    "id": "m221",
    "name": "White Cozy Tshirt",
    "brand": "LuxeMen",
    "price": 4134,
    "oldPrice": 5167,
    "discount": 20,
    "category": "men",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Cozy Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 265,
    "stock": 62
},
{
    "id": "m222",
    "name": "Green Stylish Shirt",
    "brand": "Gentleman",
    "price": 3573,
    "oldPrice": 4106,
    "discount": 13,
    "category": "men",
    "subcategory": "shirts",
    "image": "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Stylish Shirt. Crafted from premium materials with attention to detail.",
    "rating": 3.5,
    "reviews": 43,
    "stock": 63
},
{
    "id": "m223",
    "name": "Navy Premium Shirt",
    "brand": "Aur\u00e9a",
    "price": 2548,
    "oldPrice": 5925,
    "discount": 57,
    "category": "men",
    "subcategory": "shirts",
    "image": "https://images.unsplash.com/photo-1626557981101-aae6f84aa6af?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1626557981101-aae6f84aa6af?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Premium Shirt. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 42,
    "stock": 95
},
{
    "id": "m224",
    "name": "Beige Elegant Sweater",
    "brand": "LuxeMen",
    "price": 2901,
    "oldPrice": 7252,
    "discount": 60,
    "category": "men",
    "subcategory": "sweaters",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Elegant Sweater. Crafted from premium materials with attention to detail.",
    "rating": 4.2,
    "reviews": 126,
    "stock": 78
},
{
    "id": "w200",
    "name": "Red Modern Pant",
    "brand": "Aur\u00e9a",
    "price": 2817,
    "oldPrice": 5121,
    "discount": 45,
    "category": "women",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1581338834647-b0fb40704e5d?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1581338834647-b0fb40704e5d?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Modern Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 206,
    "stock": 40
},
{
    "id": "w201",
    "name": "Blue Classic Jacket",
    "brand": "BohoChic",
    "price": 4726,
    "oldPrice": 5907,
    "discount": 20,
    "category": "women",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1551488831-00ddcb6bb4db?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1551488831-00ddcb6bb4db?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Classic Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 250,
    "stock": 47
},
{
    "id": "w202",
    "name": "Black Urban Jacket",
    "brand": "Elegance",
    "price": 3909,
    "oldPrice": 9534,
    "discount": 59,
    "category": "women",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1529892355399-2c02b4e2b0d1?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1529892355399-2c02b4e2b0d1?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Urban Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 105,
    "stock": 43
},
{
    "id": "w203",
    "name": "White Vintage Dress",
    "brand": "Vogue",
    "price": 2030,
    "oldPrice": 2475,
    "discount": 18,
    "category": "women",
    "subcategory": "dresses",
    "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Vintage Dress. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 57,
    "stock": 50
},
{
    "id": "w204",
    "name": "Green Sleek Sweater",
    "brand": "Elegance",
    "price": 2040,
    "oldPrice": 3000,
    "discount": 32,
    "category": "women",
    "subcategory": "sweaters",
    "image": "https://images.unsplash.com/photo-1502716119720-b23a03971e5c?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1502716119720-b23a03971e5c?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Sleek Sweater. Crafted from premium materials with attention to detail.",
    "rating": 4.4,
    "reviews": 89,
    "stock": 64
},
{
    "id": "w205",
    "name": "Navy Cozy Dress",
    "brand": "BohoChic",
    "price": 4162,
    "oldPrice": 5075,
    "discount": 18,
    "category": "women",
    "subcategory": "dresses",
    "image": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Cozy Dress. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 265,
    "stock": 68
},
{
    "id": "w206",
    "name": "Beige Stylish Top",
    "brand": "Aur\u00e9a",
    "price": 3773,
    "oldPrice": 6085,
    "discount": 38,
    "category": "women",
    "subcategory": "tops",
    "image": "https://images.unsplash.com/photo-1562542082-4fc16bc1be73?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1562542082-4fc16bc1be73?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Stylish Top. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 293,
    "stock": 21
},
{
    "id": "w207",
    "name": "Grey Premium Jacket",
    "brand": "BohoChic",
    "price": 3841,
    "oldPrice": 5261,
    "discount": 27,
    "category": "women",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1620799140188-3b2a02fd0a77?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1620799140188-3b2a02fd0a77?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Grey Premium Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 293,
    "stock": 71
},
{
    "id": "w208",
    "name": "Yellow Elegant Dress",
    "brand": "BohoChic",
    "price": 3956,
    "oldPrice": 5071,
    "discount": 22,
    "category": "women",
    "subcategory": "dresses",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25977d?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1490481651871-ab68de25977d?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Yellow Elegant Dress. Crafted from premium materials with attention to detail.",
    "rating": 4.9,
    "reviews": 147,
    "stock": 5
},
{
    "id": "w209",
    "name": "Purple Casual Pant",
    "brand": "BohoChic",
    "price": 2631,
    "oldPrice": 5481,
    "discount": 52,
    "category": "women",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Purple Casual Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 187,
    "stock": 90
},
{
    "id": "w210",
    "name": "Pink Formal Jacket",
    "brand": "Aur\u00e9a",
    "price": 3138,
    "oldPrice": 5505,
    "discount": 43,
    "category": "women",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1544957992-20bb04e27097?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1544957992-20bb04e27097?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Pink Formal Jacket. Crafted from premium materials with attention to detail.",
    "rating": 3.7,
    "reviews": 94,
    "stock": 70
},
{
    "id": "w211",
    "name": "Brown Sporty Pant",
    "brand": "Vogue",
    "price": 4398,
    "oldPrice": 6871,
    "discount": 36,
    "category": "women",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1515886657613-9090f6e7e6e1?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1515886657613-9090f6e7e6e1?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Brown Sporty Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.1,
    "reviews": 257,
    "stock": 68
},
{
    "id": "w212",
    "name": "Teal Chic Top",
    "brand": "BohoChic",
    "price": 3516,
    "oldPrice": 4236,
    "discount": 17,
    "category": "women",
    "subcategory": "tops",
    "image": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Teal Chic Top. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 34,
    "stock": 82
},
{
    "id": "w213",
    "name": "Maroon Retro Sweater",
    "brand": "Elegance",
    "price": 3461,
    "oldPrice": 4024,
    "discount": 14,
    "category": "women",
    "subcategory": "sweaters",
    "image": "https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Maroon Retro Sweater. Crafted from premium materials with attention to detail.",
    "rating": 4.2,
    "reviews": 104,
    "stock": 54
},
{
    "id": "w214",
    "name": "Orange Bold Jacket",
    "brand": "BohoChic",
    "price": 2944,
    "oldPrice": 4146,
    "discount": 29,
    "category": "women",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1485462026408-5f9f00e0bef6?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1485462026408-5f9f00e0bef6?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Orange Bold Jacket. Crafted from premium materials with attention to detail.",
    "rating": 3.8,
    "reviews": 277,
    "stock": 97
},
{
    "id": "w215",
    "name": "Olive Minimalist Kurta",
    "brand": "Vogue",
    "price": 2237,
    "oldPrice": 2796,
    "discount": 20,
    "category": "women",
    "subcategory": "ethnic",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Olive Minimalist Kurta. Crafted from premium materials with attention to detail.",
    "rating": 3.6,
    "reviews": 131,
    "stock": 61
},
{
    "id": "w216",
    "name": "Charcoal Modern Pant",
    "brand": "BohoChic",
    "price": 4511,
    "oldPrice": 6940,
    "discount": 35,
    "category": "women",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1509319117937-de4f874b4787?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1509319117937-de4f874b4787?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Charcoal Modern Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 272,
    "stock": 48
},
{
    "id": "w217",
    "name": "Cream Classic Top",
    "brand": "Aur\u00e9a",
    "price": 3754,
    "oldPrice": 7987,
    "discount": 53,
    "category": "women",
    "subcategory": "tops",
    "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Cream Classic Top. Crafted from premium materials with attention to detail.",
    "rating": 3.6,
    "reviews": 55,
    "stock": 57
},
{
    "id": "w218",
    "name": "Red Urban Sweater",
    "brand": "BohoChic",
    "price": 2771,
    "oldPrice": 3338,
    "discount": 17,
    "category": "women",
    "subcategory": "sweaters",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Urban Sweater. Crafted from premium materials with attention to detail.",
    "rating": 4.4,
    "reviews": 162,
    "stock": 56
},
{
    "id": "w219",
    "name": "Blue Vintage Pant",
    "brand": "Aur\u00e9a",
    "price": 3165,
    "oldPrice": 7912,
    "discount": 60,
    "category": "women",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1544925587-d7ac5827b5e3?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1544925587-d7ac5827b5e3?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Vintage Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 83,
    "stock": 31
},
{
    "id": "w220",
    "name": "Black Sleek Kurta",
    "brand": "Elegance",
    "price": 955,
    "oldPrice": 2329,
    "discount": 59,
    "category": "women",
    "subcategory": "ethnic",
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Sleek Kurta. Crafted from premium materials with attention to detail.",
    "rating": 3.6,
    "reviews": 218,
    "stock": 6
},
{
    "id": "w221",
    "name": "White Cozy Sweater",
    "brand": "Aur\u00e9a",
    "price": 2305,
    "oldPrice": 3658,
    "discount": 37,
    "category": "women",
    "subcategory": "sweaters",
    "image": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Cozy Sweater. Crafted from premium materials with attention to detail.",
    "rating": 3.8,
    "reviews": 157,
    "stock": 51
},
{
    "id": "w222",
    "name": "Green Stylish Kurta",
    "brand": "BohoChic",
    "price": 1884,
    "oldPrice": 3364,
    "discount": 44,
    "category": "women",
    "subcategory": "ethnic",
    "image": "https://images.unsplash.com/photo-1544957992-5f44c93e17ad?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1544957992-5f44c93e17ad?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Stylish Kurta. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 30,
    "stock": 52
},
{
    "id": "w223",
    "name": "Navy Premium Pant",
    "brand": "Vogue",
    "price": 1201,
    "oldPrice": 1520,
    "discount": 21,
    "category": "women",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Premium Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 138,
    "stock": 79
},
{
    "id": "w224",
    "name": "Beige Elegant Pant",
    "brand": "Vogue",
    "price": 957,
    "oldPrice": 1876,
    "discount": 49,
    "category": "women",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1581338834647-b0fb40704e5d?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1581338834647-b0fb40704e5d?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Elegant Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 252,
    "stock": 32
},
{
    "id": "k200",
    "name": "Red Modern Dress",
    "brand": "TinyTrends",
    "price": 1182,
    "oldPrice": 2230,
    "discount": 47,
    "category": "kids",
    "subcategory": "dresses",
    "image": "https://images.unsplash.com/photo-1476718408413-acf6d7d96a7e?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1476718408413-acf6d7d96a7e?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Modern Dress. Crafted from premium materials with attention to detail.",
    "rating": 3.8,
    "reviews": 273,
    "stock": 100
},
{
    "id": "k201",
    "name": "Blue Classic Short",
    "brand": "LittleStars",
    "price": 1661,
    "oldPrice": 2076,
    "discount": 20,
    "category": "kids",
    "subcategory": "shorts",
    "image": "https://images.unsplash.com/photo-1612782938995-45ac7fda14f5?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1612782938995-45ac7fda14f5?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Classic Short. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 227,
    "stock": 93
},
{
    "id": "k202",
    "name": "Black Urban Uniform",
    "brand": "LittleStars",
    "price": 2345,
    "oldPrice": 2726,
    "discount": 14,
    "category": "kids",
    "subcategory": "uniforms",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Urban Uniform. Crafted from premium materials with attention to detail.",
    "rating": 5.0,
    "reviews": 285,
    "stock": 98
},
{
    "id": "k203",
    "name": "White Vintage Jacket",
    "brand": "FunWear",
    "price": 2104,
    "oldPrice": 2475,
    "discount": 15,
    "category": "kids",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Vintage Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.4,
    "reviews": 196,
    "stock": 62
},
{
    "id": "k204",
    "name": "Green Sleek Dress",
    "brand": "LittleStars",
    "price": 2650,
    "oldPrice": 3081,
    "discount": 14,
    "category": "kids",
    "subcategory": "dresses",
    "image": "https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Sleek Dress. Crafted from premium materials with attention to detail.",
    "rating": 4.9,
    "reviews": 188,
    "stock": 60
},
{
    "id": "k205",
    "name": "Navy Cozy Jacket",
    "brand": "TinyTrends",
    "price": 1799,
    "oldPrice": 3270,
    "discount": 45,
    "category": "kids",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Cozy Jacket. Crafted from premium materials with attention to detail.",
    "rating": 3.7,
    "reviews": 22,
    "stock": 89
},
{
    "id": "k206",
    "name": "Beige Stylish Jacket",
    "brand": "FunWear",
    "price": 2113,
    "oldPrice": 2817,
    "discount": 25,
    "category": "kids",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1502086280116-1308e08eacea?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1502086280116-1308e08eacea?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Stylish Jacket. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 78,
    "stock": 54
},
{
    "id": "k207",
    "name": "Grey Premium Pant",
    "brand": "TinyTrends",
    "price": 1991,
    "oldPrice": 4424,
    "discount": 55,
    "category": "kids",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1515488042361-ee3f4b56b4a5?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1515488042361-ee3f4b56b4a5?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Grey Premium Pant. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 267,
    "stock": 7
},
{
    "id": "k208",
    "name": "Yellow Elegant Uniform",
    "brand": "FunWear",
    "price": 2222,
    "oldPrice": 2848,
    "discount": 22,
    "category": "kids",
    "subcategory": "uniforms",
    "image": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Yellow Elegant Uniform. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 17,
    "stock": 76
},
{
    "id": "k209",
    "name": "Purple Casual Uniform",
    "brand": "LittleStars",
    "price": 3475,
    "oldPrice": 4695,
    "discount": 26,
    "category": "kids",
    "subcategory": "uniforms",
    "image": "https://images.unsplash.com/photo-1545934536-05d83b2b7baf?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1545934536-05d83b2b7baf?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Purple Casual Uniform. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 289,
    "stock": 54
},
{
    "id": "k210",
    "name": "Pink Formal Uniform",
    "brand": "FunWear",
    "price": 2219,
    "oldPrice": 4823,
    "discount": 54,
    "category": "kids",
    "subcategory": "uniforms",
    "image": "https://images.unsplash.com/photo-1557876889-8d8f76435422?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1557876889-8d8f76435422?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Pink Formal Uniform. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 208,
    "stock": 67
},
{
    "id": "k211",
    "name": "Brown Sporty Jacket",
    "brand": "TinyTrends",
    "price": 4765,
    "oldPrice": 8215,
    "discount": 42,
    "category": "kids",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1514027555121-0fdbeeb0c8ae?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1514027555121-0fdbeeb0c8ae?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Brown Sporty Jacket. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 19,
    "stock": 65
},
{
    "id": "k212",
    "name": "Teal Chic Tshirt",
    "brand": "TinyTrends",
    "price": 1186,
    "oldPrice": 1944,
    "discount": 39,
    "category": "kids",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1605733513767-c6e5c7c02e37?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1605733513767-c6e5c7c02e37?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Teal Chic Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 142,
    "stock": 39
},
{
    "id": "k213",
    "name": "Maroon Retro Jacket",
    "brand": "TinyTrends",
    "price": 3317,
    "oldPrice": 5622,
    "discount": 41,
    "category": "kids",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1515488042361-ee3f4b56b4a5?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1515488042361-ee3f4b56b4a5?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Maroon Retro Jacket. Crafted from premium materials with attention to detail.",
    "rating": 3.7,
    "reviews": 195,
    "stock": 46
},
{
    "id": "k214",
    "name": "Orange Bold Uniform",
    "brand": "TinyTrends",
    "price": 4439,
    "oldPrice": 6341,
    "discount": 30,
    "category": "kids",
    "subcategory": "uniforms",
    "image": "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Orange Bold Uniform. Crafted from premium materials with attention to detail.",
    "rating": 5.0,
    "reviews": 209,
    "stock": 99
},
{
    "id": "k215",
    "name": "Olive Minimalist Pant",
    "brand": "FunWear",
    "price": 1163,
    "oldPrice": 1352,
    "discount": 14,
    "category": "kids",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Olive Minimalist Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.9,
    "reviews": 61,
    "stock": 38
},
{
    "id": "k216",
    "name": "Charcoal Modern Uniform",
    "brand": "TinyTrends",
    "price": 4973,
    "oldPrice": 9563,
    "discount": 48,
    "category": "kids",
    "subcategory": "uniforms",
    "image": "https://images.unsplash.com/photo-1519238263496-61437aeb1134?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1519238263496-61437aeb1134?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Charcoal Modern Uniform. Crafted from premium materials with attention to detail.",
    "rating": 3.8,
    "reviews": 286,
    "stock": 24
},
{
    "id": "k217",
    "name": "Cream Classic Pant",
    "brand": "TinyTrends",
    "price": 2859,
    "oldPrice": 3486,
    "discount": 18,
    "category": "kids",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Cream Classic Pant. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 190,
    "stock": 33
},
{
    "id": "k218",
    "name": "Red Urban Tshirt",
    "brand": "LittleStars",
    "price": 2466,
    "oldPrice": 2935,
    "discount": 16,
    "category": "kids",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1519340333755-56e9c1667877?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1519340333755-56e9c1667877?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Urban Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.4,
    "reviews": 155,
    "stock": 63
},
{
    "id": "k219",
    "name": "Blue Vintage Jacket",
    "brand": "LittleStars",
    "price": 3137,
    "oldPrice": 7295,
    "discount": 57,
    "category": "kids",
    "subcategory": "jackets",
    "image": "https://images.unsplash.com/photo-1526830430842-e14c09ef58fe?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1526830430842-e14c09ef58fe?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Vintage Jacket. Crafted from premium materials with attention to detail.",
    "rating": 3.6,
    "reviews": 246,
    "stock": 17
},
{
    "id": "k220",
    "name": "Black Sleek Tshirt",
    "brand": "TinyTrends",
    "price": 1867,
    "oldPrice": 3734,
    "discount": 50,
    "category": "kids",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1542910120-9b6a7b5c19ae?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1542910120-9b6a7b5c19ae?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Sleek Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.1,
    "reviews": 198,
    "stock": 87
},
{
    "id": "k221",
    "name": "White Cozy Dress",
    "brand": "LittleStars",
    "price": 4356,
    "oldPrice": 5377,
    "discount": 19,
    "category": "kids",
    "subcategory": "dresses",
    "image": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Cozy Dress. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 69,
    "stock": 41
},
{
    "id": "k222",
    "name": "Green Stylish Tshirt",
    "brand": "LittleStars",
    "price": 4665,
    "oldPrice": 5980,
    "discount": 22,
    "category": "kids",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1536700503339-1e527b81e96c?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1536700503339-1e527b81e96c?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Stylish Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.4,
    "reviews": 87,
    "stock": 78
},
{
    "id": "k223",
    "name": "Navy Premium Pant",
    "brand": "TinyTrends",
    "price": 3034,
    "oldPrice": 5618,
    "discount": 46,
    "category": "kids",
    "subcategory": "pants",
    "image": "https://images.unsplash.com/photo-1491013516836-7b7f080ba7c2?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1491013516836-7b7f080ba7c2?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Premium Pant. Crafted from premium materials with attention to detail.",
    "rating": 3.7,
    "reviews": 64,
    "stock": 83
},
{
    "id": "k224",
    "name": "Beige Elegant Tshirt",
    "brand": "TinyTrends",
    "price": 3932,
    "oldPrice": 8936,
    "discount": 56,
    "category": "kids",
    "subcategory": "tshirts",
    "image": "https://images.unsplash.com/photo-1476718408413-acf6d7d96a7e?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1476718408413-acf6d7d96a7e?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Elegant Tshirt. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 62,
    "stock": 13
},
{
    "id": "a200",
    "name": "Red Modern Watch",
    "brand": "Luxe",
    "price": 1058,
    "oldPrice": 2159,
    "discount": 51,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Modern Watch. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 111,
    "stock": 81,
    "type": "watch"
},
{
    "id": "a201",
    "name": "Blue Classic Bag",
    "brand": "Aur\u00e9a",
    "price": 820,
    "oldPrice": 1078,
    "discount": 24,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Classic Bag. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 250,
    "stock": 9,
    "type": "bag"
},
{
    "id": "a202",
    "name": "Black Urban Sunglasses",
    "brand": "Vogue",
    "price": 2368,
    "oldPrice": 3819,
    "discount": 38,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1556306535-38febf6782d7?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1556306535-38febf6782d7?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Urban Sunglasses. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 94,
    "stock": 97,
    "type": "sunglasses"
},
{
    "id": "a203",
    "name": "White Vintage Wallet",
    "brand": "Classic",
    "price": 2935,
    "oldPrice": 4316,
    "discount": 32,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Vintage Wallet. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 12,
    "stock": 91,
    "type": "wallet"
},
{
    "id": "a204",
    "name": "Green Sleek Belt",
    "brand": "Vogue",
    "price": 1212,
    "oldPrice": 1377,
    "discount": 12,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Sleek Belt. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 145,
    "stock": 100,
    "type": "belt"
},
{
    "id": "a205",
    "name": "Navy Cozy Hat",
    "brand": "Aur\u00e9a",
    "price": 2960,
    "oldPrice": 6727,
    "discount": 56,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1543163521-1d500617c1c2?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1543163521-1d500617c1c2?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Cozy Hat. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 209,
    "stock": 7,
    "type": "accessories"
},
{
    "id": "a206",
    "name": "Beige Stylish Scarf",
    "brand": "Aur\u00e9a",
    "price": 3098,
    "oldPrice": 4623,
    "discount": 33,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Stylish Scarf. Crafted from premium materials with attention to detail.",
    "rating": 3.6,
    "reviews": 29,
    "stock": 71,
    "type": "scarf"
},
{
    "id": "a207",
    "name": "Grey Premium Bracelet",
    "brand": "Aur\u00e9a",
    "price": 2780,
    "oldPrice": 4711,
    "discount": 41,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1562542082-4fc16bc1be73?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1562542082-4fc16bc1be73?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Grey Premium Bracelet. Crafted from premium materials with attention to detail.",
    "rating": 3.5,
    "reviews": 257,
    "stock": 76,
    "type": "accessories"
},
{
    "id": "a208",
    "name": "Yellow Elegant Watch",
    "brand": "Aur\u00e9a",
    "price": 3934,
    "oldPrice": 4420,
    "discount": 11,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Yellow Elegant Watch. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 169,
    "stock": 21,
    "type": "watch"
},
{
    "id": "a209",
    "name": "Purple Casual Bag",
    "brand": "Classic",
    "price": 939,
    "oldPrice": 1618,
    "discount": 42,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Purple Casual Bag. Crafted from premium materials with attention to detail.",
    "rating": 4.0,
    "reviews": 268,
    "stock": 23,
    "type": "bag"
},
{
    "id": "a210",
    "name": "Pink Formal Sunglasses",
    "brand": "Vogue",
    "price": 3017,
    "oldPrice": 4436,
    "discount": 32,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1611312449412-6cefb5d127bb?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1611312449412-6cefb5d127bb?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Pink Formal Sunglasses. Crafted from premium materials with attention to detail.",
    "rating": 4.1,
    "reviews": 92,
    "stock": 64,
    "type": "sunglasses"
},
{
    "id": "a211",
    "name": "Brown Sporty Wallet",
    "brand": "Vogue",
    "price": 2613,
    "oldPrice": 3266,
    "discount": 20,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1616627067743-c698f9195a6b?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1616627067743-c698f9195a6b?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Brown Sporty Wallet. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 71,
    "stock": 6,
    "type": "wallet"
},
{
    "id": "a212",
    "name": "Teal Chic Belt",
    "brand": "Aur\u00e9a",
    "price": 1376,
    "oldPrice": 2023,
    "discount": 32,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1565766345206-8e3e0cc8d89c?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1565766345206-8e3e0cc8d89c?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Teal Chic Belt. Crafted from premium materials with attention to detail.",
    "rating": 3.5,
    "reviews": 219,
    "stock": 74,
    "type": "belt"
},
{
    "id": "a213",
    "name": "Maroon Retro Hat",
    "brand": "Classic",
    "price": 1433,
    "oldPrice": 1610,
    "discount": 11,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Maroon Retro Hat. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 32,
    "stock": 52,
    "type": "accessories"
},
{
    "id": "a214",
    "name": "Orange Bold Scarf",
    "brand": "Vogue",
    "price": 1979,
    "oldPrice": 4397,
    "discount": 55,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1585068072529-a2d663770c85?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1585068072529-a2d663770c85?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Orange Bold Scarf. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 273,
    "stock": 98,
    "type": "scarf"
},
{
    "id": "a215",
    "name": "Olive Minimalist Bracelet",
    "brand": "Classic",
    "price": 2532,
    "oldPrice": 3288,
    "discount": 23,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1509941943102-37d5c5c79f81?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1509941943102-37d5c5c79f81?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Olive Minimalist Bracelet. Crafted from premium materials with attention to detail.",
    "rating": 4.5,
    "reviews": 88,
    "stock": 32,
    "type": "accessories"
},
{
    "id": "a216",
    "name": "Charcoal Modern Watch",
    "brand": "Classic",
    "price": 3439,
    "oldPrice": 4525,
    "discount": 24,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Charcoal Modern Watch. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 34,
    "stock": 7,
    "type": "watch"
},
{
    "id": "a217",
    "name": "Cream Classic Bag",
    "brand": "Vogue",
    "price": 3230,
    "oldPrice": 7021,
    "discount": 54,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1572537511059-b5a2fd8bdb74?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1572537511059-b5a2fd8bdb74?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Cream Classic Bag. Crafted from premium materials with attention to detail.",
    "rating": 4.8,
    "reviews": 224,
    "stock": 82,
    "type": "bag"
},
{
    "id": "a218",
    "name": "Red Urban Sunglasses",
    "brand": "Luxe",
    "price": 4329,
    "oldPrice": 4919,
    "discount": 12,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Red Urban Sunglasses. Crafted from premium materials with attention to detail.",
    "rating": 3.6,
    "reviews": 119,
    "stock": 60,
    "type": "sunglasses"
},
{
    "id": "a219",
    "name": "Blue Vintage Wallet",
    "brand": "Luxe",
    "price": 1086,
    "oldPrice": 2129,
    "discount": 49,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1566150905281-9a27c027bb40?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1566150905281-9a27c027bb40?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Blue Vintage Wallet. Crafted from premium materials with attention to detail.",
    "rating": 3.5,
    "reviews": 47,
    "stock": 78,
    "type": "wallet"
},
{
    "id": "a220",
    "name": "Black Sleek Belt",
    "brand": "Vogue",
    "price": 3587,
    "oldPrice": 5124,
    "discount": 30,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1614016258649-fa8f76dc8ed6?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1614016258649-fa8f76dc8ed6?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Black Sleek Belt. Crafted from premium materials with attention to detail.",
    "rating": 4.2,
    "reviews": 75,
    "stock": 87,
    "type": "belt"
},
{
    "id": "a221",
    "name": "White Cozy Hat",
    "brand": "Vogue",
    "price": 3234,
    "oldPrice": 5575,
    "discount": 42,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1591348122002-93f71fc71305?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1591348122002-93f71fc71305?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our White Cozy Hat. Crafted from premium materials with attention to detail.",
    "rating": 4.6,
    "reviews": 59,
    "stock": 11,
    "type": "accessories"
},
{
    "id": "a222",
    "name": "Green Stylish Scarf",
    "brand": "Vogue",
    "price": 4577,
    "oldPrice": 7757,
    "discount": 41,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1547949537-4a65fc62fdac?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1547949537-4a65fc62fdac?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Green Stylish Scarf. Crafted from premium materials with attention to detail.",
    "rating": 4.7,
    "reviews": 40,
    "stock": 6,
    "type": "scarf"
},
{
    "id": "a223",
    "name": "Navy Premium Bracelet",
    "brand": "Classic",
    "price": 2201,
    "oldPrice": 5368,
    "discount": 59,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Navy Premium Bracelet. Crafted from premium materials with attention to detail.",
    "rating": 3.5,
    "reviews": 65,
    "stock": 68,
    "type": "accessories"
},
{
    "id": "a224",
    "name": "Beige Elegant Watch",
    "brand": "Vogue",
    "price": 4768,
    "oldPrice": 10836,
    "discount": 56,
    "category": "accessories",
    "subcategory": "accessories",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    "images": [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    ],
    "description": "Experience the perfect blend of style and comfort with our Beige Elegant Watch. Crafted from premium materials with attention to detail.",
    "rating": 3.9,
    "reviews": 281,
    "stock": 75,
    "type": "watch"
}
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allProducts;
}
