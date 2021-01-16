const HttpStatus = require("http-status");
const mockData = require('../files/mockData')

exports.getResources = async (ctx) => {
    const resources = mockData.resources
    ctx.status = HttpStatus.OK;
    ctx.body = resources;
};

exports.getActions = async (ctx) => {
    const actions = mockData.actions
    ctx.status = HttpStatus.OK;
    ctx.body = actions;
};

