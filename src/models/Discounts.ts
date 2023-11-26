import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Product from "./Products";


const Discount = sequelize.define("discount", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    discount_percent: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
}, {
    timestamps: true,
    underscored: true,
});

Discount.hasMany(Product, {
    foreignKey: 'discountId',
    as: "product"
});

Product.belongsTo(Discount, {
    foreignKey: "discountId",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});


export default Discount;
