from pydantic import BaseSettings


class Config(BaseSettings):
    # Prod-версия
    #REPO_LINK_PREFIX: str = "https://svnhub.ru:7890/svn"
    # Версия для тестирования
    REPO_LINK_PREFIX: str = "http://127.0.0.1/svn"
    # Переменные аутентификации
    KEEP_ALIVE_TOKEN: int = 31536000
    JWT_SECRET: str = "so_secret_key"
    JWT_ALGORITHM: str = "HS256"
    # Переменные базы данных (потенциально тут ещё должен быть логин и пароль для БД)
    HOST: str = "127.0.0.1"


config = Config()
