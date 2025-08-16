const products = [
    {
        "id": 1,
        "name": "Classic Cotton T-Shirt",
        "category": "Tops",
        "description": "A comfortable, everyday t-shirt made from 100% organic cotton. Perfect for layering or wearing on its own.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 25.00,
        "image_url": "/images/tshirt.jpg"
        },

    {
        "id": 2,
        "name": "Slim Fit Jeans",
        "category": "Pants",
        "description": "These jeans are designed for a modern, slim silhouette with a touch of stretch for ultimate comfort.",
        "stars": 4,
        "availability": "IN_STOCK",
        "price": 65.50,
        "image_url": "/images/jeans1.webp"   
    },
        
    {
        "id": 3,
        "name": "Hooded Sweatshirt",
        "category": "Outerwear",
        "description": "Stay warm and stylish with this soft fleece-lined hoodie. Features a front pocket and adjustable drawstring hood.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 50.00,
        "image_url": "/images/hood1.jpg"
    },

    {
        "id": 4,
        "name": "Floral Summer Dress",
        "category": "Dresses",
        "description": "A lightweight and breathable dress with a vibrant floral print, perfect for sunny days.",
        "stars": 5,
        "availability": "OUT_OF_STOCK",
        "price": 45.00,
        "image_url": "/images/flora1.jpg"
    },

    {
        "id": 5,
        "name": "Leather Biker Jacket",
        "category": "Outerwear",
        "description": "Edgy and timeless, this genuine leather jacket will add a touch of cool to any outfit.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 250.00,
        "image_url": "/images/jacket.jpg"
    },

    {
        "id": 6,
        "name": "Basic Crewneck Sweater",
        "category": "Tops",
        "description": "A versatile knit sweater that's perfect for layering. Made from a soft wool blend.",
        "stars": 4,
        "availability": "IN_STOCK",
        "price": 55.00,
        "image_url": "/images/sweater1.jpg"
    },

    {
        "id": 7,
        "name": "Wide Leg Trousers",
        "category": "Pants",
        "description": "These stylish trousers feature a wide-leg cut and a high waist for a chic, comfortable look.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 70.00,
        "image_url": "images/wide.webp"
    },

    {
        "id": 8,
        "name": "Striped Polo Shirt",
        "category": "Tops",
        "description": "A classic polo shirt with a modern twist, featuring subtle horizontal stripes and a comfortable fit.",
        "stars": 4,
        "availability": "OUT_OF_STOCK",
        "price": 35.00,
        "image_url": "/images/polo.jpeg"   
    },

    {
        "id": 9,
        "name": "Denim Skirt",
        "category": "Skirts",
        "description": "This mini denim skirt is a wardrobe staple, easy to dress up or down for any occasion.",
        "stars": 4,
        "availability": "IN_STOCK",
        "price": 40.00,
        "image_url": "/images/denim.webp"
    },

    {
        "id": 10,
        "name": "Winter Parka Coat",
        "category": "Outerwear",
        "description": "Stay warm in the coldest weather with this insulated parka. Features a faux fur hood and multiple pockets.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 180.00,
        "image_url": "/images/wint1.jpg"
    },

    {
        "id": 11,
        "name": "High-Waisted Shorts",
        "category": "Pants",
        "description": "Perfect for summer, these shorts combine a high-waisted fit with a relaxed feel.",
        "stars": 4,
        "availability": "IN_STOCK",
        "price": 30.00,
        "image_url": "/images/short1.jpg"
    },

    {
        "id": 12,
        "name": "Silk Blouse",
        "category": "Tops",
        "description": "A luxurious and elegant blouse made from 100% pure silk. Perfect for a sophisticated look.",
        "stars": 5,
        "availability": "OUT_OF_STOCK",
        "price": 85.00,
        "image_url": "/images/silk.webp"
    },

    {
         "id": 13,
        "name": "Pleated Midi Skirt",
        "category": "Skirts",
        "description": "This flowy midi skirt features delicate pleats and an elastic waistband for a comfortable, stylish fit.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 50.00,
        "image_url": "/images/midi.webp"
    },

    {
        "id": 14,
        "name": "Athletic Joggers",
        "category": "Pants",
        "description": "Made from moisture-wicking fabric, these joggers are perfect for workouts or lounging.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 40.00,
        "image_url": "/images/joggers.webp"
    },

    {
        "id": 15,
        "name": "Wool Blend Peacoat",
        "category": "Outerwear",
        "description": "A classic double-breasted peacoat made from a warm wool blend, perfect for a refined look.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 160.00,
        "image_url": "/images/wool.jpg"
    },

    {
        "id": 16,
        "name": "V-Neck Sweater Dress",
        "category": "Dresses",
        "description": "This cozy sweater dress combines warmth with elegance, featuring a flattering V-neckline.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 60.00,
        "image_url": "/images/neck1.webp"
    },

    {
        "id": 17,
        "name": "Graphic Print T-Shirt",
        "category": "Tops",
        "description": "Express your style with this unique graphic t-shirt. Made from soft, breathable cotton.",
        "stars": 4,
        "availability": "IN_STOCK",
        "price": 28.00,
        "image_url": "/images/grahic1.webp"
    },

    {
        "id": 18,
        "name": "Maxi Skirt",
        "category": "Skirts",
        "description": "An elegant, full-length maxi skirt that flows beautifully with every step. Perfect for a bohemian look.",
        "stars": 5,
        "availability": "OUT_OF_STOCK",
        "price": 55.00,
        "image_url": "/images/maxi.webp"
    },

    {
        "id": 19,
        "name": "Cargo Shorts",
        "category": "Pants",
        "description": "Practical and comfortable, these shorts feature multiple pockets and a durable fabric. Ideal for outdoor activities.",
        "stars": 4,
        "availability": "IN_STOCK",
        "price": 42.00,
        "image_url": "/images/cargo.webp"
    },

    {
        "id": 20,
        "name": "Classic Trench Coat",
        "category": "Outerwear",
        "description": "A timeless trench coat with a belted waist and double-breasted design. Perfect for transitional weather.",
        "stars": 5,
        "availability": "IN_STOCK",
        "price": 190.00,
        "image_url": "/images/coat1.webp"
    },

    


];


export default products;