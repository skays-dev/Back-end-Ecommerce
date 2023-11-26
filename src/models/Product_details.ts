import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Product from "./Products";

const Product_details = sequelize.define("product_details", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    input_html: {
        type: Sequelize.JSON,
        allowNull: false,
    }
}, {
    timestamps: true,
    underscored: true,
});


Product_details.hasOne(Product, {
    foreignKey: 'productDetails',
    as: "product"
});

Product.belongsTo(Product_details, {
    foreignKey: "productDetails",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Product_details;
