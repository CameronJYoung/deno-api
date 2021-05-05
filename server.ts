import { Application, Router, RouterContext, Model } from "./deps.ts";

//route imports
import postRoutes from './app/routes/posts.ts'

//db and model imports
import db from './app/config/db.ts'
import modelArray from './app/models/index.ts'

//init db with models
db.link(modelArray);
await db.sync({ drop: false });

//setup oak app
const port = 8080;
const app = new Application();
const router = new Router();

// Routes
router.get('/api', (context: RouterContext) => {
	context.response.body = { message: "Cameron's Deno API!!!" } // example route
});

app.use(router.routes());
app.use(postRoutes.prefix('/api/posts').routes());
app.use(router.allowedMethods());

// Listen for requests
console.log(`API started on 'http://localhost:${port}/api'`);
await app.listen({ port: port });
