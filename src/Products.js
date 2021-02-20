// List of Drinks
const Products = [
    {
        id: '51d2fae6cc9bff111580d8d0',
        name: "Diet Coke",
        value: 1.25,
        type: "Drink",
        imageUrl: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/2/1/21011-01_2_1.jpg",
        quantity: 10,
        size: "300 ml"
    },
    {
        id: '54dec12b613cd9670418e9b8',
        name: "Sprite",
        value: 1.25,
        type: "Drink",
        imageUrl: "https://olivetreecatering.com.au/wp-content/uploads/2018/11/sprite-final.jpg",
        quantity: 10,
        size: "300 ml"
    },
    {
        id: '51c546e397c3e6efadd5ea6f',
        name: "Dr. Pepper",
        value: 1.25,
        type: "Drink",
        imageUrl: "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/9fcd01277fbd9c87484f31df983439505c12c8d4_square959340_1.jpg?v=1601834696",
        quantity: 10,
        size: "300 ml"
    },
    {
        id: '5bfe44010dc5023626f4b2a5',
        name: "Mountain Dew",
        value: 1.25,
        type: "Drink",
        imageUrl: "https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/122250/122250_p?pgw=1&pgwact=1",
        quantity: 10,
        size: "300 ml"
    },
    {
        id: '51c3b68a97c3e6d8d3b44380',
        name: "Dasani",
        value: 1.0,
        type: "Drink",
        imageUrl: "https://www.coca-cola.com.my/content/dam/journey/my/en/private/brands/hero-598x336/Dasani.rendition.320.179.png",
        quantity: 10,
        size: "236 ml"
    },
    {
        id: '5de75e85bbe0c0a46e0a559d',
        name: "Fanta",
        value: 1.25,
        type: "Drink",
        imageUrl: "https://www.coca-cola.ie/content/dam/one/ie/en/product/fanta-sleek-400-600.jpg",
        quantity: 10,
        size: "236 ml"
    },
    {
        id: '51d37f3ccc9bff5553aaaa3c',
        name: "Red Bull",
        value: 2.25,
        type: "Drink",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lKJHnzAKo70Sw8KFPSjBIV4KMd5Dwvkaow&usqp=CAU",
        quantity: 10,
        size: "250 ml"
    },
    {
        id: '51c3cb1797c3e6d8d3b4dfb4',
        name: "Gatorade",
        value: 2.00,
        type: "Drink",
        imageUrl: "https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/197559/197559_p_wipo?pgw=1&pgwact=1",
        quantity: 10,
        size: "250 ml"
    },
    {
        id: '51d2fee3cc9bff111580f491',
        name: "Doritos",
        value: 0.75,
        type: "Snack",
        imageUrl: "https://www.auchan.ro/public/images/h72/h70/h00/doritos-nachos-cu-gust-branza-100-g-8896112197662.jpg",
        quantity: 10,
        size: "180 g"
    },
    {
        id: '51d2fefdcc9bff111580f539',
        name: "Cheetos",
        value: 0.75,
        type: "Snack",
        imageUrl: "https://cdn.shopify.com/s/files/1/2141/9909/products/CheetosCrunchy_8ac03f31-d325-4404-b4e9-a9d5dd594e31_1024x.png?v=1595412987",
        quantity: 10,
        size: "180 g"
    },
    {
        id: '51d2f8f4cc9bff111580cbf9',
        name: "Lays Original",
        value: 0.75,
        type: "Snack",
        imageUrl: "https://images.heb.com/is/image/HEBGrocery/001865742",
        quantity: 10,
        size: "180 g"
    },
    {
        id: '586b4f0981b542fb48b181a6',
        name: "Pringles",
        value: 0.75,
        type: "Snack",
        imageUrl: "https://pics.drugstore.com/prodimg/482595/900.jpg",
        quantity: 10,
        size: "0.7 oz"
    },
    {
        id: '51d2fe8bcc9bff111580f1ee',
        name: "Snickers",
        value: 1.00,
        type: "Snack",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51xX0c3bqTL._SX679_.jpg",
        quantity: 10,
        size: "1.9 oz"
    },
    {
        id: '5df0a087d4bcbefe1cd29f0c',
        name: "Skittles",
        value: 1.00,
        type: "Snack",
        imageUrl: "https://www.economycandy.com/wp-content/uploads/2019/07/products-Skittles-Original-1.jpg",
        quantity: 10,
        size: "1.4 oz"
    },
    {
        id: '51d2ffa6cc9bff111580f8a8',
        name: "Pop Tarts",
        value: 1.50,
        type: "Snack",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91xYMt8WjOL._SL1500_.jpg",
        quantity: 10,
        size: "1.7 oz"
    },
    {
        id: '5388e39488c491b95fc07649',
        name: "Beef Jerky",
        value: 2.50,
        type: "Snack",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91Tw1fy4jTL._SL1500_.jpg",
        quantity: 10,
        size: "1.7 oz"
    },
]

export default Products