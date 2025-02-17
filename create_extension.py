import os
import json

# Define the directory structure
folders = ["extension", "extension/icons"]
files = {
    "extension/manifest.json": {
        "manifest_version": 3,
        "name": "My Extension",
        "version": "1.0",
        "description": "A simple browser extension",
        "permissions": ["storage", "activeTab"],
        "background": {
            "service_worker": "background.js"
        },
        "content_scripts": [
            {
                "matches": ["<all_urls>"],
                "js": ["content.js"]
            }
        ],
        "action": {
            "default_popup": "popup.html",
            "default_icon": {
                "16": "icons/icon16.png",
                "48": "icons/icon48.png",
                "128": "icons/icon128.png"
            }
        }
    },
    "extension/background.js": "// Background script\nconsole.log('Background script running');",
    "extension/content.js": "// Content script\nconsole.log('Content script running');",
    "extension/popup.html": """<!DOCTYPE html>
<html>
<head>
    <title>Popup</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hello, Extension!</h1>
    <script src="popup.js"></script>
</body>
</html>""",
    "extension/popup.js": "// Popup script\nconsole.log('Popup loaded');",
    "extension/styles.css": "body { font-family: Arial, sans-serif; }",
    "extension/icons/icon16.png": "",
    "extension/icons/icon48.png": "",
    "extension/icons/icon128.png": "",
}

# Create folders
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create files
for file_path, content in files.items():
    with open(file_path, "w", encoding="utf-8") as file:
        if file_path.endswith(".json"):
            json.dump(content, file, indent=4)
        else:
            file.write(content)

print("Extension boilerplate created successfully!")
