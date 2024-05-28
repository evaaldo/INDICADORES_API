"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
// Public route
exports.router.get("/", (request, response) => { return response.status(200).json({ message: "Working on main route..." }); });
