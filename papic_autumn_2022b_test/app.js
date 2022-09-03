const Koa = require('koa');
const Router = require('koa-router');
const staticfile = require('koa-static')
const bodyParser = require('koa-body');

const router = new Router();
// const { Sequelize, DataTypes } = require('sequelize')

// const formdata = new Sequelize('formdata', 'root', 'ahY4deiFie7aichoophairahpha7ier0', {
// 	host: 'localhost',
// 	dialect: 'mysql',
//     pool: {
// 		max: 5,
// 		min: 0,
// 		idle: 30000
// 	}
// })

// const Recruitment = formdata.define('papic_autumn2022', {
// 	name: DataTypes.STRING,
// 	sex: DataTypes.STRING,
// 	origin: DataTypes.STRING,
// 	birthday: DataTypes.STRING,
// 	major: DataTypes.STRING,
// 	class: DataTypes.STRING,
// 	dorm: DataTypes.STRING,
// 	number: DataTypes.STRING,
// 	phone: DataTypes.STRING,
// 	qq: DataTypes.STRING,
// 	mail: DataTypes.STRING,
// 	personality: DataTypes.TEXT,
// 	reason: DataTypes.STRING,
// 	want: DataTypes.TEXT,
// 	skill: DataTypes.TEXT,
// 	adjustment: DataTypes.STRING,
// 	department: DataTypes.TEXT,
// 	abilities: DataTypes.TEXT,
//     path: DataTypes.STRING
// }, {
// 	timestamps: false,
// 	freezeTableName: true
// })

// Recruitment.sync({ force: true })


const app = new Koa()
app.use(bodyParser())
router.post('/submit', bodyParser(), async (ctx, next) => {
	try {
		const body = ctx.request.body
		console.log(body);
		// await Recruitment.create({
		// 	name: body.form.name,
		// 	sex: body.form.sex,
		// 	origin:body.form.origin,
		// 	birthday: body.form.birthday,
		// 	major: body.form.major,
		// 	class: body.form.class,
		// 	dorm: body.form.dorm,
		// 	number: body.form.number,
		// 	phone: body.form.phone,
		// 	qq: body.form.qq,
		// 	mail: body.form.mail,
		// 	personality: body.form.personality,
		// 	reason: body.form.reason,
		// 	want: body.form.want,
		// 	skill: body.form.skill,
		// 	adjustment: body.form.adjustment,
        //     department:body.form.department,
		// 	abilities: body.form.abilities,
		// })
		ctx.body = {
			message: 'success'
		}
		 await next()
	} catch (e) {
		ctx.body = {
			message: 'error'
		}
	}
})

app.use(async (ctx,next) =>{
	ctx.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
		'Access-Control-Allow-Credentials': 'true'
	})
	ctx.response.status = 200
	await next()
})

app.use(staticfile('public'))


app.use(router.routes())
app.listen(9981);
