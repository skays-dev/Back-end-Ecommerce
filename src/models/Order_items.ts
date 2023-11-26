import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Product from "./Products";
import Order from "./Orders";

const Order_item = sequelize.define("order_item", {
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
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

export default Order_item;
