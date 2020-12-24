'use strict';

module.exports = (app) => {
    const { router, controller } = app;
    var adminauth = app.middleware.adminauth();
    router.get('/index', controller.admin.home.index);
    router.post('/login', controller.admin.home.login);
    router.get('/getType', controller.admin.home.type);
    router.get('/getArticle', controller.admin.home.getArticle)
    router.post('/saveArticle', controller.admin.home.addArticle)
    router.post('/updateArticle', controller.admin.home.updateArticle)
    router.get('/deleteArticle/:id', controller.admin.home.deleteArticle)
}