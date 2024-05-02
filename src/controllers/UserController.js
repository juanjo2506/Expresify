const {validationResult} = require("express-validator");
const fs = require("fs")
const db = require("../../database/models")

const profileController = {

  homeProfile: async (req, res) => {
    try{
      const products = await db.Products.findAll();
      res.render('profile', { products });

    }catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
  }
  },

    register: (req, res) => {
        res.render('register');
    },
    proccesRegister: (req, res) => {
       const Validation = validationResult(req);

       if (Validation.errors.length > 0) {
        return res.render('register',{
            errors: Validation.mapped(), oldData: req.body
        });
      }
      return res.send("registro exitoso")
    },

    login: (req, res) => {
        res.render('login');
    },

    getProducts: (req, res) => {
      const products = global.products;
      res.render('profile', { products });
    },


    // Creacion de productos en profile
      
      addProduct: (req, res) => {
/*         const { productName, productDescription, productPrice, productImage } = req.body; */
        let products = global.products
      
        const newProduct = {
          id: products.length + 1,
          name: req.body.name,
          description: parseInt(req.body.description),
          price: req.body.price,
          image: req.body.productImage,
        };
      
        products.push(newProduct);
      
        res.redirect('/user/profile');
      },
      
      editProductPage: (req, res) => {
        const productId = req.params.id;
        const product = products.find((p) => p.id === parseInt(productId));
      
        res.render('editProductUser', { product });
      },
      
      editProduct: (req, res) => {
        const productId = req.params.id;
        const { productName, productDescription, productImage } = req.body;
      
        const editedProduct = {
          id: parseInt(productId),
          name: productName,
          description: productDescription,
          image: productImage,
        };
      
        const index = products.findIndex((p) => p.id === parseInt(productId));
        products[index] = editedProduct;
      
        res.redirect('/user/profile');
      },
      
      deleteProduct: (req, res) => {
        const productId = req.params.id;
        const index = products.findIndex((p) => p.id === parseInt(productId));
      
        if (index !== -1) {
          products.splice(index, 1);
        }
      
        res.redirect('/user/profile');
    }
};


module.exports = profileController;