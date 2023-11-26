import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Product from "./Products";

const Categories = sequelize.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nameCategory: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    underscored: true,
});


Categories.hasMany(Product, {
    foreignKey: 'categoryId',
    as: "product"
});

Product.belongsTo(Categories, {
    foreignKey: "categoryId",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Categories;
