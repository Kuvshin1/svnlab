from fastapi import APIRouter, HTTPException, status
from services.auth.repository import signJWT
from services.auth.service import authSvn

routerAuth = APIRouter(
    prefix="/auth",
    responses={404: {"description": "Not found"}},
)


@routerAuth.post("/login", status_code=status.HTTP_200_OK)
async def login(link, login, password):
    allow = authSvn(link, login, password)
    if not allow:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
        )
    return signJWT(login, link)
