________________________________________Web Analysis Extension
 
Description
The Web Analysis Extension is a Chrome browser extension designed to provide summaries and major points from web pages. It utilizes the power of the OpenAI GPT-3.5 Turbo API for content summarization and extraction.
Table of Contents
•	Installation
•	Usage
•	Code Explanation
•	Contributing
•	License
•	Acknowledgments
•	Contact
Installation
Follow these steps to install the Web Analysis Extension:
1.	Download the Extension
•	Clone or download this repository to your local machine.
2.	Enable Developer Mode in Chrome
•	Open Google Chrome.
•	Navigate to chrome://extensions/.
•	Enable "Developer mode" located in the top right corner of the page.
3.	Load the Extension
•	Click on the "Load unpacked" button.
•	Select the folder where you cloned or downloaded the extension source code.
•	The extension should now be installed.
4.	Configure the OpenAI API
•	You'll need an API key from OpenAI for content summarization. Replace apiKey in popup.js with your actual API key.
5.	Reload Your Browser
•	Close and reopen Google Chrome to ensure the extension functions properly.
Usage
Once the extension is installed, you can use it as follows:
1.	Browse a Web Page
•	Navigate to any web page in Google Chrome.
2.	Activate the Extension
•	Click the extension icon in the Chrome toolbar (the extension icon is displayed as a small icon in the upper right corner of the browser).
3.	Choose an Option
•	A popup will appear with two options: "Provide Summary" and "Provide Major Points."
4.	Generate Content
•	Click either option to generate a summary or major points from the web page content.
5.	View the Result
•	The result will be displayed in a box on the popup. You can copy the generated content or use it as needed.
Code Explanation
manifest.json
•	This file defines the extension's metadata, permissions, and behavior.
background.js
•	Handles messages from the content script and sets the popup based on the active tab.
•	Stores the URL from the content script in Chrome local storage.
content.js
•	Content script injected into web pages. Sends the current URL to the background script.
popup.html
•	HTML file for the extension's popup.
•	Contains buttons for generating summaries and major points and a result display area.
popup.js
•	JavaScript logic for the popup:
•	Retrieves the URL from local storage.
•	Extracts content from the web page.
•	Uses the OpenAI API to generate summaries and major points.
•	Displays the generated content in the popup.
Acknowledgments
•	This extension utilizes the OpenAI GPT-3.5 Turbo API for content summarization.
Contact
For questions or feedback, please contact Anuj Singh at anujsingh21092000@gmail.com.

