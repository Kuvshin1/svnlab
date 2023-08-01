from fastapi import APIRouter, Depends
from services.auth.repository import decodeJWT
from services.auth.bearer import JWTBearer

routerUser = APIRouter(
    prefix="/user",
    responses={404: {"description": "Not found"}},
    dependencies=[Depends(JWTBearer())]
)


@routerUser.get('/getUserInfo')
async def getUserInfo(token: str = Depends(JWTBearer())):
    tokenContent = decodeJWT(token)
    return tokenContent['login']
