import Sequelize from "sequelize";
import sequelize from "../utils/db";

import Order from "./Orders";
import Customer from "./Customers";


const Payment = sequelize.define("payment", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    payment_method: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});



Payment.hasOne(Order, {
    foreignKey: 'paymentId',
    as: "orders"
});

Order.belongsTo(Payment, {
    foreignKey: 'paymentId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Payment;
