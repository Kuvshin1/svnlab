from fastapi import APIRouter, Depends
from services.auth.repository import decodeJWT
from services.auth.bearer import JWTBearer
from services.scv.service import listItem, getFileContent, addNewFile, removeItem

routerSCV = APIRouter(
    prefix="/scv",
    responses={404: {"description": "Not found"}},
    dependencies=[Depends(JWTBearer())]
)


@routerSCV.get('/getList')
async def getList(link, token: str = Depends(JWTBearer())):
    tokenContent = decodeJWT(token)
    return (listItem(tokenContent['login'], link))


@routerSCV.get('/getContent')
async def getContent(link, pathToFile, token: str = Depends(JWTBearer())):
    tokenContent = decodeJWT(token)
    return getFileContent(pathToFile, tokenContent['login'], link)


@routerSCV.get('/addFile')
async def addFile(link, comment, pathToFileInLocalStorage, pathToFileInRemoteStorage='', token: str = Depends(JWTBearer())):
    tokenContent = decodeJWT(token)
    return addNewFile(comment, pathToFileInLocalStorage, tokenContent['login'], link, pathToFileInRemoteStorage)


@routerSCV.get('/remove')
async def remove(link, comment, pathToFileInRemoteStorage, token: str = Depends(JWTBearer())):
    tokenContent = decodeJWT(token)
    return removeItem(comment, pathToFileInRemoteStorage,  tokenContent['login'], link)
