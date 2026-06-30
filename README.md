# Liverpool FC Fan-made Website

## Overview
A simple fan-made website about **Liverpool Football Club** with sections for **Home**, **About**, **Trophy Room**, **Stadium**, and **History**.

## Features
- **Trophy Room gallery**: loads trophy cards from `data/images.json`
- **Scroll fade-in animation**: elements reveal as you scroll
- **Stadium image switcher**: change the main stadium image using buttons
- **Mobile trophy page**: `trophy-mobile.html` for viewing trophies on smaller screens

## Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **JSON** (data source for trophies)
- **Font Awesome** (icons via CDN)

## How to Run
Because the Trophy Room uses `fetch()` to load `data/images.json`, it’s best to run with a local server.

- **VS Code Live Server**:
  - Open the project folder in VS Code
  - Right-click `index.html` → **Open with Live Server**

## Entry files 
- Main page: `index.html`
- Trophy-only page: `trophy-mobile.html`

