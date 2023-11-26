import Sequelize from "sequelize";

import sequelize from "../utils/db";

import Customer from "./Customers";
import Deliver from "./Delivers";
import Product from "./Products";
import Coupon from "./Coupons";

const AdminUser = sequelize.define("admin_user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    remember_token: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo_profile: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
}, {
    timestamps: true,
    underscored: true,
});

// Admin and Customer relationship
AdminUser.hasMany(Customer, {
    foreignKey : 'adminId',
    as : 'customers'
});

Customer.belongsTo(AdminUser, {  
    foreignKey: 'adminId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Admin and Deliver relationship
AdminUser.hasMany(Deliver ,{
    foreignKey : 'adminId',
    as : 'delivers'
});

Deliver.belongsTo(AdminUser, {
    foreignKey: 'adminId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Admin and Product relationship
AdminUser.hasMany(Product , {
    foreignKey : 'adminId',
    as : 'products'
});

Product.belongsTo(AdminUser, {
    foreignKey: "adminId",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

// Admin and Coupon relationship
AdminUser.hasMany(Coupon , {
    foreignKey : 'adminId',
    as : 'coupons'
});

Coupon.belongsTo(AdminUser, {
    foreignKey: "adminId",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default AdminUser;
