const products = [
    { p_name:"product1",p_qty:3,p_price:50,pgst:5},
    {p_name:"product2",p_qty:1,p_price:120,pgst:5},
    {p_name:"product3",p_qty:6,p_price:90,pgst:18},
    {p_name:"product4",p_qty:4,p_price:30,pgst:5},
    {p_name:"product5",p_qty:2,p_price:60,pgst:12},
    {p_name:"product6",p_qty:3,p_price:150,pgst:5}
];
console.log("products with amount>100:");
console.log(products.filter(product =>product.p_price*product.p_qty>100));
console.log("products with GST 5 and p_qty<5:");
console.log(products.filter(product =>product.pgst === 5 && product.p_qty<5));
