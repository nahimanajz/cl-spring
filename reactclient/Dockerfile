FROM node:14-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .

RUN npm run build 
# DEPloy app with NGIX
FROM nginx:1.19-alpine
COPY --from=build /app/build /uer/share/ngix/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off"]

