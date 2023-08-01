import jwt
import time
from pymongo import MongoClient
from config import config


def decodeJWT(token):
    try:
        decoded_token = jwt.decode(
            token, config.JWT_SECRET, algorithms=[config.JWT_ALGORITHM])
        return decoded_token if decoded_token["expires"] >= time.time() else None
    except:
        return {}


def signJWT(login, repoPath):
    payload = {
        "login": login,
        "expires": time.time() + config.KEEP_ALIVE_TOKEN
    }
    token = jwt.encode(payload, config.JWT_SECRET,
                       algorithm=config.JWT_ALGORITHM)

    return {
        "access_token": token
    }


def auth(link, login, password):
    client = MongoClient(config.HOST)
    db = client.svn.users
    if db.find_one({'login': login}) == None:
        db.insert_one({'login': login, "password": password})
