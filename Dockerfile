# Dockerfile for Next.js frontend
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Remove the npm run build command from here

EXPOSE 3000
# Change the CMD to run the Next.js app using the Railway command
CMD ["npx", "railway", "run", "npm", "dev"]
