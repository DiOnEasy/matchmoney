const progressBar = document.querySelector('.progress-bar');
        
let progress = 0;

const interval = setInterval(() => {
  progress += Math.random() * 10;
  
  if (progress >= 100) {
    clearInterval(interval);
    document.querySelector('.preloader').classList.add('hidden');
  }
  
  progressBar.style.width = `${progress}%`;
}, 100);