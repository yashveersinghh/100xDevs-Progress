import { Hono } from 'hono'
import { saveContentToFile } from 'hono/ssg';

const app = new Hono()

async function authMiddleware(c:any, next:any){
  if(c.req.header("Authorization")){
    //validation
    await next()
  }
  else{
    return c.text("Unauthorized", 401)
  }
}
app.use(authMiddleware)

app.get('/',authMiddleware, async(c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
