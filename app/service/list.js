'use strict';

const Service = require('egg').Service;

class ListService extends Service {

    async findList() {
        const id = this.ctx.params.id;
        try {
            const resList = await this.ctx.model.Article.find({ typeId: id });
            return resList;
        } catch (error) {
            this.ctx.body = JSON.stringify(error);
        }
    }
}

module.exports = ListService;