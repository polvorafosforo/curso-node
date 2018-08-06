var app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = function configuraExpress(){
    console.log("Carregando módulo 'configuraExpress'");
    return app;
};