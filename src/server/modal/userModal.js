/**
 *
 * userModal.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/8/18
 *
 * @内容 作用
 * @内容 作用
 */
const {db}= require('../db/db');
const Sequelize = require( 'sequelize');
const user =db.define('user', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});
exports.user=user;
