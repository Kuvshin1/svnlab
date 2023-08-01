from fastapi import FastAPI
from routers import authentication, scv, users

app = FastAPI()

app.include_router(authentication.routerAuth)
app.include_router(scv.routerSCV)
app.include_router(users.routerUser)
