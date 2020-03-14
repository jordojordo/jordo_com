# FROM mhart/alpine-node:11 AS builder
# WORKDIR /app
# COPY . .
# RUN npm install react-scripts -g --silent
# RUN yarn install
# RUN yarn run build

# FROM mhart/alpine-node
# RUN yarn global add serve
# WORKDIR /app
# COPY --from=builder /app/build .
# CMD ["serve", "-p", "80", "-s", "."]doc

FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . .

RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
