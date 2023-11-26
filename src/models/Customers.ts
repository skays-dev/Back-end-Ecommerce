import Sequelize from "sequelize";

import sequelize from "../utils/db";
import AdminUser from "./Admin_user";
import Shipment from "./Shipments";
import Order from "./Orders";
import Payment from "./Payments";
import Cart from "./Carts";
import Wishlist from "./Wishlists";
import Reviews from "./Reviews";


const Customer = sequelize.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    verifyEmail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    remember_token: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    verifyPhone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo_profile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

// Customer and shipment relationships
Customer.hasOne(Shipment, {
    foreignKey : 'customerId',
    as: 'shipment'
});

Shipment.belongsTo(Customer, {
    foreignKey: 'customerId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Customer and shipment relationships
Customer.hasMany(Order, {
    foreignKey : 'customerId',
    as :'orders'
});

Order.belongsTo(Customer, {
    foreignKey: 'customerId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Customer and payment relationship
Customer.hasMany(Payment, {
    foreignKey:'customerId',
    as:'payments'
});

Payment.belongsTo(Customer, {
    foreignKey: 'customerId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Customer and cart relationship
Customer.hasMany(Cart , {
    foreignKey : 'customerId',
    as: 'carts'
});

Cart.belongsTo(Customer , {
    foreignKey : 'customerId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Customer and wishlist relationship
Customer.hasMany(Wishlist , {
    foreignKey : 'customerId',
    as: 'wishlists'
});

Wishlist.belongsTo(Customer , {
    foreignKey : 'customerId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Customer and reviews relationship
Customer.hasMany(Reviews, {
    foreignKey : 'customerId',
    as : 'reviews'
});

Reviews.belongsTo(Customer, {
    foreignKey: 'customerId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});


export default Customer;
