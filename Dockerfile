# 1) Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy only package manifests first, install deps
COPY html/package*.json ./
RUN npm ci

# Copy the rest of your source, build it
COPY html/ ./
RUN npm run build

# 2) Serve stage
FROM nginx:1.27.5-alpine
# Remove default static assets (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to linked services (Dokploy will handle external routing)
EXPOSE 80
