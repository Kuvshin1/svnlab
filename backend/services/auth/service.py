import svn
import svn.remote
from config import config
from .repository import auth


def authSvn(link, login, password):
    auth(link, login, password)
    r = svn.remote.RemoteClient(link, username=login, password=password)
    try:
        r.info()
    except svn.exception.SvnException:
        return None
    return r.info()
