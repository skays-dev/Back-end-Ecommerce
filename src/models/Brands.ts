import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Product from "./Products";
import Discount from "./Discounts";

const Brands = sequelize.define("brands", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nameBrand: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    underscored: true,
});

Brands.hasMany(Product, {
    foreignKey: 'brandId',
    as: "product"
});

Product.belongsTo(Brands, {
    foreignKey: "brandId",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Brands;