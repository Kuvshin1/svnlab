# svnlab
## Frontend

В данном проекте находится web-клиент приложения.
### Требования:
1. [NodeJS v14](https://nodejs.org/en/download/package-manager/)
2. Пакетный менеджер [Yarn](https://yarnpkg.com/getting-started/install)
### Технологии
1. Базовый фреймворк [NextJS](https://nextjs.org/docs)
2. Фреймворк для стилей [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)

### Начало работы
1. Переходим в папку с проектом:
```
cd frontend
```

2. Устанавливаем зависимости:
```
yarn install
```

### Сборка и запуск
```
  yarn dev
    Запуск в режиме разработки.

  yarn build
    Сборка проекта в режиме продакшн.

  yarn start
    Запуск собранного проекта в режиме продакшн.
```

### Перед каждым коммитом надо проверить код на _code-style_:
```
  yarn lint
```

## Backend

### Требования:
1. [Python 3.8+](https://www.python.org/downloads/release/python-380/)
2. Пакетный менеджер pip3 ([Linux](https://linuxize.com/post/how-to-install-pip-on-ubuntu-20.04/), [Windows](https://www.activestate.com/resources/quick-reads/how-to-install-and-use-pip3/))

### Технологии
1. Базовый фреймворк [FastAPI](https://fastapi.tiangolo.com)

### Начало работы
1. Переходим в папку с проектом:
```
cd backend
```

2. Устанавливаем зависимости:
```
pip install -r requirements.txt
```

3. После добавления новых зависимостей надо обновить `requirements.txt`:
```
pip3 freeze > requirements.txt
```

### Сборка и запуск
```
  python3 -m uvicorn main:app --reload
    Запуск в режиме разработки.
  uvicorn main:app --reload
    Если первый вариант не запускает сервер

  python3 -m uvicorn main:app
    Сборка проекта в режиме продакшн.
```

### Структура проекта
```
├──backend
|  ├──main.py         # главный файл для запуска
|  ├──dependencies.py # общие зависимости
|  └──routers         # папка с роутерами
|  |  ├──authentication.py # реализация модуля роутинга
|  |  └──...
|  └──services        # папка с реализацией сервисов
|     └──...          # TODO: структура еще в разработке
```