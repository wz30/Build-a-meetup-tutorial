import bodyParser from 'body-parser'
import morgan from 'morgan'

export default app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(morgan('dev')) //showing log info in terminal GET / 404 5.402 ms - 139""
};