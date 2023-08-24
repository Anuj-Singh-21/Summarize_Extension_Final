


document.addEventListener("DOMContentLoaded", function () {
  const summaryBtn = document.getElementById("summaryBtn");
  const majorPointsBtn = document.getElementById("majorPointsBtn");
  const resultDiv = document.getElementById("result");

  summaryBtn.addEventListener("click", async () => {
    try {
      const summary = await getSummary();
      resultDiv.innerText = summary;
    } catch (error) {
      console.error('Error:', error);
      resultDiv.innerText = 'An error occurred while generating the summary.';
    }
  });

  majorPointsBtn.addEventListener("click", async () => {
    try {
      const majorPoints = await getMajorPoints();
      resultDiv.innerText = majorPoints;
    } catch (error) {
      console.error('Error:', error);
      resultDiv.innerText = 'An error occurred while generating major points.';
    }
  });



 

  let globalUrl; // Declare the global variable

  async function getUrlFromStorage() {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get("popupUrl", result => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          const urlFromContent = result.popupUrl;
          resolve(urlFromContent);
        }
      });
    });
  }
  
  (async () => {
    try {
      globalUrl = await getUrlFromStorage();
      if (globalUrl) {
        console.log(globalUrl); // Use the globalUrl value
      }
    } catch (error) {
      console.error("Error retrieving data from storage:", error);
    }
  })();
  
 

  async function extractContentFromLink(link) {
    try {
      const response = await fetch(link);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const htmlContent = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
  
      const paragraphs = Array.from(doc.querySelectorAll('p')).map(paragraph => paragraph.textContent);
      const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => heading.textContent);
  
      const content = headings.concat(paragraphs); // Combine headings and paragraphs
  
      return content;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  
  let extractedContent;

  
    
 

  // ChatGPT API.
  const apiKey = 'API_KEY_HERE'; // Replace with your actual API key
  const model = 'gpt-3.5-turbo';

  async function sendMessageToChatGPT(customInput, fileContent) {
    const apiUrl = `https://api.openai.com/v1/chat/completions`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: 'You are a helpful assistant that transfers data.' },
          { role: 'user', content: customInput },
          { role: 'user', content: fileContent }
        ]
      })
    });

    const responseBody = await response.json();
    return responseBody.choices[0].message.content;
  }




  async function getSummary() {
    try {
      globalUrl = await getUrlFromStorage();
      console.log(globalUrl);
      const targetLink = globalUrl;
      extractedContent = await extractContentFromLink(targetLink);
      extractedContent = JSON.stringify(extractedContent);
      console.log(typeof(extractedContent));
      const customInput = "Summarize the following data: ";
      const fileContent = extractedContent;
      const generatedResponse = await sendMessageToChatGPT(customInput, fileContent);
      return generatedResponse; // This line doesn't make sense, consider returning generatedResponse instead
    } catch (error) {
      console.error('Error:', error);
    }
  }

  
  async function getMajorPoints() {
    try {
      globalUrl = await getUrlFromStorage();
      console.log(globalUrl);
      const targetLink = globalUrl;
      extractedContent = await extractContentFromLink(targetLink);
      extractedContent = JSON.stringify(extractedContent);
      console.log(typeof(extractedContent));
      const customInput = "Provide major Points for the following data: ";
      const fileContent = extractedContent;
      const generatedResponse = await sendMessageToChatGPT(customInput, fileContent);
      return generatedResponse; // This line doesn't make sense, consider returning generatedResponse instead
    } catch (error) {
      console.error('Error:', error);
    }
  }
});



