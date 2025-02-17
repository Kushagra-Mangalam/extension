// Content script

(() => {
    let youtubeleftcontrols , youtubeplayers;
    let currentvide ="";
    chrome.runtime.onmessage.addListener((obj, sender, sendResponse) => {
        const{type,value,videoID}=obj;
        if(type==="NEW"){
            currentvide=videoID;
            newVideoLoaded();
        }
    });
     const newVideoLoaded = () => {
        const bookmarkButton = document.getElementsByClassName("ytp-bookmark-button")[0];

        console.log(bookmarkButton);
     }
})();

