import Sequelize from "sequelize";

import sequelize from "../utils/db";
import AdminUser from "./Admin_user";
import Order from "./Orders";

const Deliver = sequelize.define("deliver", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo_profile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    verifyEmail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    remember_token: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    country: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    underscored: true,
});

Deliver.hasMany(Order, {
    foreignKey: 'deliverId',
    as: 'orders'
});

Order.belongsTo(Deliver, {
    foreignKey: 'deliverId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    constraints: true
});

export default Deliver;
