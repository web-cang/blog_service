'use strict';

const Controller = require('egg').Controller;

class adminHomeController extends Controller {
    async index() {
        this.ctx.body = 'hi egg'
    }
    async login() {
        const resLogin = await this.service.admin.login.findUser();
        if (resLogin) {
            const openId = new Date().getTime();
            this.ctx.session.openId = { openId };
            this.ctx.body = { data: '登录成功', openId: openId };

        } else {
            this.ctx.body = { data: '登录失败' };
        }

    }

    async type() {
        const resType = await this.service.type.findType();
        if (resType) {
            this.ctx.body = { data: resType };
        } else {
            this.ctx.body = { data: 'Service Error' };
        }
    }

    async getArticle() {
        const resArticle = await this.service.article.findArticle();
        if (resArticle) {
            this.ctx.body = { data: resArticle };
        } else {
            this.ctx.body = { data: 'Service Error' };
        }
    }

    async addArticle() {
        const resArticle = await this.service.article.addArticle();
        const insertId = resArticle._id;
        if (resArticle) {
            this.ctx.body = { data: resArticle, insertId: insertId };
        } else {
            this.ctx.body = { data: 'Service Error' };
        }
    }

    async updateArticle() {
        const resUpdateArticle = await this.service.article.updateArticle();
        const insertId = resUpdateArticle._id;
        if (resUpdateArticle) {
            console.log(resUpdateArticle)
            this.ctx.body = { data: resUpdateArticle, insertId: insertId };
        } else {
            this.ctx.body = { data: 'Service Error' };
        }
    }

    async deleteArticle() {
        const resDeleteArticle = await this.service.article.deleteArticleById();

        if (resDeleteArticle) {
            this.ctx.body = { success: true }
        } else {
            this.ctx.body = { success: false }
        }
    }
}
module.exports = adminHomeController;