FROM node:20.13.1

WORKDIR /code/
COPY package*.json .
RUN npm install --legacy-peer-deps
# COPY ./src ./src
# COPY ./public ./public
EXPOSE 5173

CMD ["npm", "run", "dev"]