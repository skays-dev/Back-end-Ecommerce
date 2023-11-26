import Sequelize from "sequelize";

import sequelize from "../utils/db";
import Customer from "./Customers";
import Payment from "./Payments";
import Shipment from "./Shipments";
import Coupon from "./Coupons";
import Deliver from "./Delivers";
import Order_item from "./Order_items";


const Order = sequelize.define("order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    totalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

Order.hasMany(Order_item, {
    foreignKey: 'orderId',
    as: 'order_items'
});

Order_item.belongsTo(Order , {
    foreignKey : 'orderId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
})

export default Order;
