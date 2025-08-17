# Stage 1: Build the application
FROM node:24 AS builder

# Set the working directory
WORKDIR /app

# Copy package configuration files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the frontend application
RUN npm run build

# Stage 2: Production image
FROM node:24-slim

# Set the working directory
WORKDIR /app

# Copy dependencies and package files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Copy the built frontend assets and server source code
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/server ./src/server

# The host the app runs on
ENV HOST 0.0.0.0

# Expose the port the app runs on
EXPOSE 3000

# The command to run the application
CMD ["npx", "tsx", "src/server/index.ts"]
