FROM node:18

FROM node:12-slim AS build


WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

CMD ["node", "server.js"]