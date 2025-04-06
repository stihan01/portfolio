FROM node:18-alpine
WORKDIR /usr/server/app

COPY ./package.json ./
RUN npm install
COPY ./ .
RUN npm run build
ENV NODE_ENV=production
CMD ["npm", "run" ,"start"] # will launch the remix app when we run this Docker image.
