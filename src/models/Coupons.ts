import Sequelize from "sequelize";

import sequelize from "../utils/db";
import AdminUser from "./Admin_user";
import Order from "./Orders";


const Coupon = sequelize.define("coupon", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    activer: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    expired_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

Coupon.hasOne(Order, {
    foreignKey: "couponId",
    as: "orders"
});

Order.belongsTo(Coupon, {
    foreignKey: 'couponId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Coupon;
