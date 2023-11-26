import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Product from "./Products";
import Customer from "./Customers";

const Wishlist = sequelize.define("wishlist", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
}, {
    timestamps: true,
    underscored: true,
});

export default Wishlist;
