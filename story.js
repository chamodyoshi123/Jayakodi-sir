



function closeVideo() {
  document.getElementById('fullscreen-video').classList.add('hidden');
  const video = document.getElementById('video-player');
  video.pause();
  video.currentTime = 0;
}