function playVideo(videoURL) {
    var mainVideo = document.getElementById("mainVideo");
    mainVideo.src = videoURL;
    mainVideo.play();
}
