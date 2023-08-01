## Docker-контейнер для тестирования backend-модуля проекта
Для запуска сервера SVN необходимо запустить скрипт ```run.sh```.
Образ строится на основе Ubuntu.
После выполнения скрипта по адресу ```http://localhost/svn/SampleProject/``` появится заполненный репозиторий SVN.
Аутентификация по умолчанию: 
> username: user
> password: password

Внутри контейнера файлы репозитория хранятся в ```/home/svn```
P.S. Домашняя папка репозитория, назавание репозитория и аутентификационные данные меняются в Dockerfile.
Содержимое репозитория описано в ```repofill.sh```.