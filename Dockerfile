FROM nginx
COPY ./dist /usr/share/nginx/html

#FROM node:latest

#RUN npm install -g http-server

#RUN mkdir /www
#WORKDIR /www

#COPY ./dist /www

EXPOSE 5059
#CMD ["http-server", "-p", "5059"]