FROM node:14.15.4-alpine3.10

COPY ./ /app

RUN cd /app && yarn && yarn build

EXPOSE 8000

WORKDIR /app/

CMD ["yarn", "start"]
