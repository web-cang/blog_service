'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
    // 查找全部
    async findArticle() {
        try {
            const article = await this.ctx.model.Article.find();
            return article;
        } catch (error) {
            this.ctx.body = JSON.stringify(error);
        }
    }

    //根据id来查找文章
    async findArticleById() {
        const id = this.ctx.params.id;
        try {
            const articleId = await this.ctx.model.Article.findById(id);
            return articleId;
        } catch (error) {
            this.ctx.body = JSON.stringify(error);
        }
    }

    // 新增文章
    async addArticle() {
        console.log(this.ctx.request.body);
        const newArticle = this.ctx.request.body;
        try {
            const article = await this.ctx.model.Article(newArticle);
            article.save();
            return article;
        } catch (error) {
            this.ctx.body = JSON.stringify(error);
        }
    }

    // 修改文章
    async updateArticle() {
        const olderArticle = this.ctx.request.body;
        console.log(olderArticle)
        try {
            const article = await this.ctx.model.Article.updateOne({ _id: olderArticle._id }, {
                title: this.ctx.request.body.title,
                content: this.ctx.request.body.content,
                introduce: this.ctx.request.body.introduce,
                typeId: this.ctx.request.body.typeId,
                createTime: this.ctx.request.body.createTime,
            })
            return article;
        } catch (error) {
            this.ctx.body = JSON.stringify(error)
        }
    }

    async deleteArticleById() {
        console.log(this.ctx.params.id)
        const id = this.ctx.params.id;
        try {
            const resDeleteArticle = await this.ctx.model.Article.findByIdAndDelete({ _id: id });
            console.log(resDeleteArticle);
            return resDeleteArticle;
        } catch (error) {
            this.ctx.body = JSON.stringify(error);
        }
    }
}
module.exports = ArticleService;