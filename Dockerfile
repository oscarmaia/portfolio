FROM node:20.11.1-alpine AS build
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
WORKDIR /app
COPY --from=build /app/build /usr/share/nginx/
EXPOSE 80
EXPOSE 443
COPY nginx.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]