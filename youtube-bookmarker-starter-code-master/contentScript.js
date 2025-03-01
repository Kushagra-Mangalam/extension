(()=>{
    let YoutubeLeftControls, youtubePlayer;
    let currentVideo="";
    let currentVideoBookMarks=[];


    chrome.runtime.onMessage.addListener((obj , sender , response)=>{
        const {type , value , videoID }=obj;
        if (type=== "NEW"){
            currentVideo=videoID;
            newVideoLoaded();

        }
    });

    const newVideoLoaded = async ()=>{
      const bookmarkbtnExists =document.getElementsByClassName("bookmarkbtn")[0];

    if(!bookmarkbtnExists){
        const bookmarkbtn = document.createElement("img");


        bookmarkbtn.src=chrome.runtime.getURL("assets/bookmark.png");
        // bookmarkbtn.className = "ytp-button" + "bookmarkbtn";
        bookmarkbtn.className = "ytp-button bookmarkbtn";
        
        bookmarkbtn.title="click to bookmark this video";


        YoutubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
        youtubePlayer=document.getElementsByClassName("video-stream")[0];

        YoutubeLeftControls.appendChild(bookmarkbtn);
        bookmarkbtn.addEventListener("click",addNewBookmarkEventHandler);



    }
    }
    const addNewBookmarkEventHandler =() => {
        const currentTime = youtubePlayer.currentTime;
        const newBookmark ={
            time: currentTime,
            desc:"bookmark at " + getTime(currentTime),
        };

        console.log(newBookmark);

       chrome.storage.sync.set({
    [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time)),
});
    }
    newVideoLoaded();
    
})();

const getTime = (time) => {
    var date = new Date(0);
    date.setSeconds(time);

    return date.toISOString().substr(11, 8);
}