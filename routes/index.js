var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');
var Order = require('../models/order');

router.get('/', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'DigitalCrafts Gamers!', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/title_asc', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find().sort({name_lower: 'asc'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/title_desc', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find().sort({name_lower: 'desc'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/price_asc', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find().sort({price: 'asc'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/NES', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'NES'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/N64', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'N64'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/SNES', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'SNES'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/genesis', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'Genesis'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/gg', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'Game Gear'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/gb', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'Gameboy'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/gbc', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'Gameboy Color'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/gba', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'Gameboy Advance'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/gc', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'Gamecube'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/ps2', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'PS2'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/ps1', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'PSOne'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/xbox', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'Xbox'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});
router.get('/pc', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({console: 'PC'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/price_desc', function (req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find().sort({price: 'desc'}).exec(function(err, docs) {
        console.log(docs);
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
    });
});

router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});

router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
   if (!req.session.cart) {
       return res.render('shop/shopping-cart', {products: null});
   }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout', isLoggedIn, function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
        "sk_test_oYGNStvRrU3XtXdnnobrqWRG"
    );

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/checkout');
        }
        var order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    });
});

router.get('/add', function(req, res) {
    res.render('index.hbs')
    // console.log(token);
});

router.post('/add_game', function(req, res) {
    var p = new Product({
        imagePath: req.body.imagePath,
        name: req.body.game,
        name_lower: req.body.name_lower,
        description: req.body.desc,
        console: req.body.console,
        genre: req.body.genre,
        rating: req.body.rating,
        inStockQuantity: req.body.quantity,
        price: req.body.price
    });
    console.log('game is ');
    console.log(req.body.game);
    p.save(function(err) {
        if (err)
            throw err;
        else
            console.log('saved product successfully...');
    });
    res.render('index.hbs')
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}
