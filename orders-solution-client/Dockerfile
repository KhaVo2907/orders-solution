FROM node:10.9 as builder
ARG BUILD_MODE
ARG CONFIG_MODE

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@latest
COPY . /app
RUN ng build orders $BUILD_MODE $CONFIG_MODE

FROM nginx:1.15.0
EXPOSE 80
COPY default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/orders/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]