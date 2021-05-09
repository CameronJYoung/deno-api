import { Application, Router, RouterContext, Relationships } from "./deps.ts";

//route imports
import postRoutes from './app/routes/posts.ts'
import userRoutes from './app/routes/users.ts'

//db and model imports
import db from './app/config/db.ts'
import {User} from './app/models/User.ts'
import {Post} from './app/models/Post.ts'

//init model relationships
Relationships.belongsTo(Post, User);

//init db with models
db.link([User, Post]);
await db.sync({ drop: true });

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
app.use(userRoutes.prefix('/api/users').routes());
app.use(router.allowedMethods());

// Listen for requests
console.log(`API started on 'http://localhost:${port}/api'`);
await app.listen({ port: port });
