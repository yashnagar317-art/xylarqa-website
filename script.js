// Replace with your API Key
const API_KEY = 'AIzaSyDjrMl2URve7wOfLEPBfNaCnwwGzdM01Cs'; // <-- yahan apni API key daalo
const CHANNEL_ID = 'UCRZsScVrI0DDex4_5qeq9-g';
const MAX_RESULTS = 12;

const videoGrid = document.getElementById('video-grid');

fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`)
  .then(response => response.json())
  .then(data => {
    const videos = data.items;
    videos.forEach(video => {
      if(video.id.kind === "youtube#video"){
        const videoId = video.id.videoId;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        videoGrid.appendChild(iframe);
      }
    });
  })
  .catch(err => console.error("Error fetching videos: ", err));
