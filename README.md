# UPSC Reader

A Chrome Extension that extracts and displays PIB (Press Information Bureau) articles in a clean, distraction-free reading interface.

## Overview

PIB articles are often displayed inside embedded frames and surrounded by navigation menus, search panels, region selectors, and other page elements that can make focused reading difficult.

UPSC Reader simplifies the reading experience by extracting the actual article content and presenting it in a dedicated reader view.

## Features

* Chrome Extension (Manifest V3)
* One-click Reader Mode
* Full-screen reading overlay
* Extracts article content from PIB iframe pages
* Removes dependency on the original page layout while reading
* Clean and readable article presentation
* Close button to return to the original page

## Project Structure

```text
PIB_UPSC/

├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles.css
└── lib/
    └── readability.js
```

## How It Works

1. User opens a PIB article page.
2. User clicks the extension icon.
3. The extension sends a message to the content script.
4. The content script locates the PIB article iframe.
5. Article content is extracted from the iframe document.
6. A full-screen overlay is injected into the page.
7. The extracted article is displayed in a clean reader interface.

## Technologies Used

* JavaScript
* HTML
* CSS
* Chrome Extension Manifest V3

## Installation

1. Clone this repository.

```bash
git clone <repository-url>
```

2. Open Chrome and navigate to:

```text
chrome://extensions
```

3. Enable **Developer Mode**.

4. Click **Load unpacked**.

5. Select the project folder.

6. Open a PIB article and click the extension icon.

## Current Functionality

* Reader Mode activation through extension popup
* Overlay-based article display
* PIB iframe content extraction
* Basic reader interface with custom styling
* Close overlay and return to the original page

## License

This project is intended for educational and personal use.
