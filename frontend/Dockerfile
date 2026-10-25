#build stage

from node:22-alpine AS build

workdir /app

copy package*.json ./

run npm install

copy . .

run npm run build


# Production stage

from node:22-alpine

workdir /app

run npm install -g serve

copy --from=build /app/dist ./dist

expose 3000

cmd ["serve","-s","dist","-l","3000"]
