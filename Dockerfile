# Dockerfile da Mini Loja
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY src/ ./src/
EXPOSE 8080
USER node
CMD ["node_modules/.bin/serve", "src", "-l", "8080"]
