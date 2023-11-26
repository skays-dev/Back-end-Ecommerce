import Sequelize from "sequelize";

import sequelize from "../utils/db";
import AdminUser from "./Admin_user";
import Discount from "./Discounts";
import Cart from "./Carts";
import Wishlist from "./Wishlists";
import Order_item from "./Order_items";
import Categories from "./Categories";
import Brands from "./Brands";
import Product_details from "./Product_details";
import Reviews from "./Reviews";

const Product = sequelize.define("product", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

// Product and Card Relationships
Product.hasMany(Cart, {
    foreignKey: "productId",
    as: "carts"
});

Cart.belongsTo(Product, {
    foreignKey: 'productId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Product and Wishlist Relationships
Product.hasMany(Wishlist, {
    foreignKey: "productId",
    as: "wishlists"
});

Wishlist.belongsTo(Product, {
    foreignKey: 'productId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Product and Order_item Relationships
Product.hasMany(Order_item, {
    foreignKey: "productId",
    as: "Order_items"
});

Order_item.belongsTo(Product, {
    foreignKey: 'productId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Product and Discount Relationships
Product.hasMany(Reviews, {
    foreignKey: "productId",
    as: "reviews"
});

Reviews.belongsTo(Product, {
    foreignKey: 'productId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Product;
