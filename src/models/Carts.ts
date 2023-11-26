import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Customer from "./Customers";
import Product from "./Products";

const Cart = sequelize.define("admin_user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

export default Cart;
