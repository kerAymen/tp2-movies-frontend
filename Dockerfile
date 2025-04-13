# STAGE 1
FROM node:20-alpine AS build
WORKDIR /build
COPY package*.json ./
RUN ["npm", "install"]
COPY . .
run ["npm", "run", "build"]


# STAGE 2
FROM nginx:1.25.1-alpine AS prod
COPY --from=build /build/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]