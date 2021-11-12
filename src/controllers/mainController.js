const fs = require("fs");
const path = require("path");

module.exports = {
  index: (req, res) => {
    return res.render("index", { title: "Home" });
  },
  login: (req, res) => {
    return res.render("login", { title: "Login" });
  },
  register: (req, res) => {
    return res.render("register", { title: "Register" });
  },
  admin: (req, res) => {
    let administradores = ['Ada','Greta','Vim','Tim'];
    return res.render("admin", { title: "Administrador" },administradores);    
  },
};
