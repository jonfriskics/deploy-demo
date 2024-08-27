FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache git && \
    git clone https://github.com/jonfriskics/deploy-demo.git . && \
    apk del git

RUN npm install

RUN npm install pm2 -g

COPY ecosystem.config.js .

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]