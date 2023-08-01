docker build -t svn .
docker run -d --name svn-server -p 80:80 svn
docker exec svn-server ./repofill.sh