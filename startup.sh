#!/bin/bash

# Navigate to the directory where the server entry point is
cd server

# Start the Astro SSR server
exec node entry.mjs
