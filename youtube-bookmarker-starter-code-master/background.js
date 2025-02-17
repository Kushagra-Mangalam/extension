chrome.tabs.OnUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url && tab.url.includes('https://www.youtube.com/watch')) {

      const queryparameter=tab.url.split("?")[1];
      const urlparameter=new URLSearchParams(queryparameter);
      
      console.log(urlparameter);
      chrome.tabs.sendMessage(tabId, {
          type:"NEW",
          videoId: urlparameter.get("v")  
      // chrome.tabs.executeScript(tabId, {file: 'content.js'}, function() {
      //     console.log('INJECTED');
      // });
  });
}});