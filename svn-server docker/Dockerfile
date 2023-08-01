FROM ubuntu:18.04

ARG PROJECT_NAME=SampleProject
ARG PROJECT_ROOT=/home/svn
ARG PROJECT_PATH=${PROJECT_ROOT}/${PROJECT_NAME}


RUN apt-get update && \
    apt-get install -y subversion apache2 libapache2-mod-svn libsvn-dev && \
    a2enmod dav && \
    a2enmod dav_svn && \
    mkdir -p ${PROJECT_PATH} && \
    svnadmin create ${PROJECT_PATH} && \
    groupadd subversion && \
    usermod -a -G subversion www-data && \
    usermod -a -G subversion root && \
    chown -R www-data:subversion ${PROJECT_PATH} && \
    chmod -R g+rws ${PROJECT_PATH} && \
    htpasswd -b -c /etc/subversion/passwd user password
    
COPY dav_svn.conf /etc/apache2/mods-enabled/
COPY startup.sh /
COPY repofill.sh /

RUN chmod +x /startup.sh
RUN chmod +x /repofill.sh

EXPOSE 80

ENTRYPOINT ["/startup.sh"]
CMD ["./repofill.sh"]

	


