'use strict';

const Service = require('egg').Service

class TypeService extends Service {
    async findType() {
        try {
            const resType = await this.ctx.model.Type.find()
            return resType;
        } catch (error) {
            this.ctx.body = JSON.stringify(error)
        }
    }
}

module.exports = TypeService;