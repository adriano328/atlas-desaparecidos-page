FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Servir com Nginx
FROM nginx:alpine

COPY --from=builder /app/dist/consulta-desaparecidos /usr/share/nginx/html

# Remove configuração default e adiciona a nossa
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf