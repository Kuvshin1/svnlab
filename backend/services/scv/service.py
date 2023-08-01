import svn
import svn.remote
import os
from .repository import getPassword, createConnectionToRepository, runRepoCommand, joinString
from config import config


def listItem(login, link):
    link = joinString(config.REPO_LINK_PREFIX, link)
    repoConnector = createConnectionToRepository(
        link, login, getPassword(login))
    return runRepoCommand(repoConnector, 'list', [link])


def getFileContent(pathToFile, login, link):
    link = joinString(config.REPO_LINK_PREFIX, link, pathToFile)
    repoConnector = createConnectionToRepository(
        link, login, getPassword(login))
    return runRepoCommand(repoConnector, 'cat', [link])


def addNewFile(comment, pathToFileInLocalStorage, login, link, pathToFileInRemoteStorage):
    if pathToFileInRemoteStorage == '':
        pathToFileInRemoteStorage = link
    else:
        pathToFileInRemoteStorage = joinString(
            config.REPO_LINK_PREFIX, link, pathToFileInRemoteStorage)
    if not os.path.exists(pathToFileInLocalStorage):
        return {'error': 'file not exist'}
    elif not os.path.isfile(pathToFileInLocalStorage):
        return {'error': 'it`s not a file'}
    else:

        fileName = pathToFileInLocalStorage.split('\\')[-1]

        repoConnector = createConnectionToRepository(
            link, login, getPassword(login))

        pathToFileInRemoteStorage = joinString(
            pathToFileInRemoteStorage, fileName)

        return runRepoCommand(repoConnector, 'import', ['-m', comment, pathToFileInLocalStorage, pathToFileInRemoteStorage])


def removeItem(comment, pathToFileInRemoteStorage,  login, link):
    repoConnector = createConnectionToRepository(
        link, login, getPassword(login))
    link = joinString(config.REPO_LINK_PREFIX, link, pathToFileInRemoteStorage)
    return runRepoCommand(repoConnector, 'delete', ['-m', comment, link])
