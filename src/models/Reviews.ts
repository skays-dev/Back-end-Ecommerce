import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Product from "./Products";
import Customer from "./Customers";

const Reviews = sequelize.define("reviews", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

export default Reviews;
