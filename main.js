var vm = new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, name: 'iPhone 11', price: 699, count: 1 },
            { id: 2, name: 'iPhone 11 Pro', price: 999, count: 1 },
            { id: 3, name: 'iPhone 11 Pro Max', price: 1099, count: 1 },
        ],
    },
    methods: {  
        totalPrice: function () {
            var num = 0
            for (var i = 0; i < this.products.length; i++) {
                num += this.products[i].count * this.products[i].price
            }
            return num
        },
    },
})
