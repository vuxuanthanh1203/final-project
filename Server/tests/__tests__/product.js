const queryData = require('../../data/queryData');

describe('getAllProducts', () => {
    // test('get all products', async () => {
    //     const products = await queryData.getAllProducts();
    //     expect(products).toHaveLength(11);
    // })
})

describe('getProductById', () => {
    test('get product by id', async () => {
        const productTest = {
            "id": 3,
            "name": "Solid Gold Petite Micropave",
            "product_img": "https://fakestoreapi.com/img/61sbMiUnoGL.AC_UL640_QL65_ML3_.jpg",
            "short_description": "Satisfaction Guaranteed. Return or exchange any order within 30 days",
            "slug": "solid-gold-petite-micropave",
            "category_id": 2
        }
        const product = await queryData.getProductById(3);
        expect(product).toMatchObject(productTest);
    })
})


describe('createProduct', () => {
    test('Create a new product', async () => {
        const productTest = {
            "name": "product test 4",
            "slug": "product-test-4",
            "short_description": "Your perfect pack for everyday use and walks in the forest",
            "product_img": "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg",
            "category_id": 1,
        }

        await queryData.createProduct(productTest);
        const product = await queryData.getProductById(14);
        expect(product).toMatchObject(productTest);
    })
})

describe('updateProduct', () => {
    test('update Product', async () => {
        const productTest = {
            "name": "test update2",
            "slug": "product-test-3",
            "short_description": "Your perfect pack for everyday use and walks in the forest",
            "product_img": "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500_.jpg",
            "category_id": 1,
        }

        await queryData.updateProduct({ id: 11, name: "test update2" });
        const product = await queryData.getProductById(11);
        expect(product).toMatchObject(productTest);
    })
})

describe('deleteProduct', () => {
    test('delete Product', async () => {
        await queryData.deleteProduct({ id: 10 });
        const product = await queryData.getProductById(10);
        expect(product).toBeNull();
    })
})