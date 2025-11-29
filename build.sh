#!/bin/bash

# Build the Docker image
echo "Building HOMA AI Pitch Deck Docker image..."
docker build -t homa-pitch-deck .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "To run the application:"
    echo "  docker run -p 8080:80 --env-file .env.local homa-pitch-deck"
    echo ""
    echo "Or using docker-compose:"
    echo "  docker-compose up -d"
    echo ""
    echo "Then visit: http://localhost:8080"
else
    echo "❌ Build failed!"
    exit 1
fi
