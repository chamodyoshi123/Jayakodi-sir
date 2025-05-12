window.addEventListener('DOMContentLoaded', () => {
  const label = document.querySelector('.instructions-button .label');
  setTimeout(() => {
    label.style.display = 'none';
  }, 2000);
});

function goToStory() {
  window.location.href = 'story.html';
}

document.querySelector('.instructions-button').addEventListener('click', () => {
  window.location.href = 'instructions.html';
});