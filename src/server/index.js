/**
 *
 * index.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/8/18
 *
 * @内容 作用
 * @内容 作用
 */
const koa =require('koa');
const koaBody =require('koa-bodyparser');
const koaRouter =require('koa-router');
const send = require('koa-send');
const cors = require('kcors');
const app = new koa();
const router = new koaRouter();

const user = require('./modal/userModal').user;
router.get('/api/user',async function (ctx,next){
  const Users= await user.findAll();
  ctx.body={
      Users
  };
})
router.put('/api/user',async function (ctx,next){
    await user.create({ username: ctx.request.body.username,password:ctx.request.body.password });
    ctx.body={
        status:200
    }
})
app.use(async function (ctx, next) {
    const start = new Date();
    await next();
    const end =new Date();
    const ms  = end - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
    const start = new Date();
    await next();

    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
app.use(cors());
app.use(koaBody())
// response
app.use(router.routes());
app.use(router.allowedMethods())
app.listen(3001);