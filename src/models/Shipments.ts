import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Customer from "./Customers";
import Order from "./Orders";

const Shipment = sequelize.define("shipment", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    address_line1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address_line2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    postal_code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    verifyPhone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});



Shipment.hasMany(Order, {
    foreignKey: 'customerId',
    as: 'orders'
});

Order.belongsTo(Shipment, {
    foreignKey: 'shipmentId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Shipment;
