FROM node:18 as builder

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV BACKEND_BASE_URL=https://colordepartment.la/api/v1

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
