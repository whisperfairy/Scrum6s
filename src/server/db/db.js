/**
 *
 * db.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/8/18
 *
 * @内容 作用
 * @内容 作用
 */
const Sequelize = require('sequelize')
let db = null;
if (db == null) {
    db = new Sequelize('scrum6s', 'root', '123456', {
        host: '115.28.136.5',
        port: '13306',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });
    db
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}
exports.db = db;
