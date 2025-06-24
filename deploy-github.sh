#!/bin/bash

# GitHub Pages Deployment Script for Login All Tools
# This script prepares and deploys the compile_output to GitHub Pages

echo "🚀 Starting GitHub Pages deployment for Login All Tools..."

# Set variables
REPO_URL="https://github.com/techit45/Login-All-Tools.git"
BRANCH="main"
BUILD_DIR="."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the compile_output directory."
    exit 1
fi

echo "📝 Updating last modified date..."
# Update the last updated date in index.html
current_date=$(date +%Y-%m-%d)
sed -i '' "s/Last updated: <span id=\"lastUpdate\">.*<\/span>/Last updated: <span id=\"lastUpdate\">$current_date<\/span>/" index.html

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add remote origin if not exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adding remote origin..."
    git remote add origin $REPO_URL
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Login All Tools to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://techit45.github.io/Login-All-Tools/"
echo "⏳ Note: It may take a few minutes for GitHub Pages to update."

# Instructions for enabling GitHub Pages
echo ""
echo "📋 To enable GitHub Pages (if not already enabled):"
echo "1. Go to https://github.com/techit45/Login-All-Tools/settings/pages"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Select 'main' branch and '/ (root)' folder"
echo "4. Click 'Save'"