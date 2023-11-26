import https from "https";
import path from "path";

import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import multer from "multer";
import sequelize from "./utils/db";


// Models
import AdminUser from "./models/Admin_user";

// controllers

// routes

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const fileFilter = (req: any, file: any, cb: any): void => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(bodyParser.json());

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    const status: number = error.statusCode || 500;
    const message: string = error.message;
    const data: any = error.data;
    res.status(status).json({ message: message });
});

sequelize
    .sync()
    .then(result => {
        return AdminUser.findByPk(1);
    })
    .then(admin => {
        if(!admin) {
            return AdminUser.create({ userName: 'admin', password: '123', first_name: 'admin name', last_name: 'admin last name', email: 'example@gmail.com', phone: '0659295575' })
        }
        return admin;
    })
    .then(admin => {
        app.listen(8080);
        console.log(admin)
    })
    .catch(error => {
        console.log(error);
    });
