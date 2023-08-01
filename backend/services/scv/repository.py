import svn
import svn.remote
from pymongo import MongoClient
from config import config


def joinString(*values, delimeter='/'):
    print(delimeter.join(values))
    return delimeter.join(values)


def getPassword(login):
    client = MongoClient(config.HOST)
    db = client.svn.users
    return db.find_one({'login': login})['password']


def createConnectionToRepository(link, login, password):
    return svn.remote.RemoteClient(link, username=login, password=password)


def runRepoCommand(repoConnector: svn.remote.RemoteClient, command, values=[]):
    try:
        repoReply = repoConnector.run_command(command, values)
    except svn.exception.SvnException:
        return None
    return repoReply
