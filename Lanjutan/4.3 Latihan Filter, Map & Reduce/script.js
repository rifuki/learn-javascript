// Catch all element
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

// Select only inside "JAVASCRIPT LANJUTAN"
let jsLanjut = videos
  .filter((video) => {
    //textContent, innerText, innerHTML
    return video.textContent.includes("JAVASCRIPT LANJUTAN");
  })

  // Get durasi each video
  .map((video) => {
    return video.dataset.duration;
  })

  // Change duration to integer, and convert minute to second
  .map((video) => {
    const parts = video.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // sum all second
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

// Change format to hour : minute : second
const hour = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - hour * 3600;
const minute = Math.floor(jsLanjut / 60);
const second = (jsLanjut = jsLanjut - minute * 60);

// Save in DOM
const pDuration = document.querySelector(".total-durasi");
pDuration.textContent = `${hour} Hours, ${minute} Minutes, ${second} Seconds`;
const totalVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pTotalVideo = document.querySelector(".jumlah-video");
pTotalVideo.textContent = `${totalVideo} Videos`;
