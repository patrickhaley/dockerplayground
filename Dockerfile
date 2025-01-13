# Base stage for all environments
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache curl

# Development stage
FROM base AS development
RUN npm install --include=dev
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]

# Staging stage
FROM base AS staging
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:staging"]

# Production stage
FROM base AS production
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:prod"] 