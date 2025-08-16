FROM node:18-alpine AS development 
ARG NODE_ENV=development

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY tsoa.json ./

# Install ALL dependencies (including devDependencies for TypeScript)
RUN npm install

# Copy source code
COPY src ./src

RUN mkdir -p public/swagger src/routes

# Generate swagger and build
RUN npm run swagger
RUN npm run build

FROM node:18-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application and generated swagger files
COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/src/swagger ./src/swagger

# Expose port
EXPOSE 3000

# Start the application
CMD [ "node", "dist/index.js" ]