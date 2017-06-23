FROM httpd:2.4
COPY ./dist/ /usr/local/apache2/htdocs/
RUN echo 'ServerName localhost' >> /usr/local/apache2/conf/httpd.conf

#FROM node:latest

#RUN npm install -g http-server

#RUN mkdir /www
#WORKDIR /www

#COPY ./dist /www

EXPOSE 5059
#CMD ["http-server", "-p", "5059"]