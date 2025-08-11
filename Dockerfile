FROM node:18-alpine AS development 
ARG NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:18-alpine AS production

ARG NODE_ENV=production
ARG NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/index.js" ]