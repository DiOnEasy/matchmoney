const progressBar = document.querySelector('.progress-bar');
        
let progress = 0;

const interval = setInterval(() => {
  progress += 1;
  
  if (progress >= 100) {
    clearInterval(interval);
    document.querySelector('.preloader').classList.add('hidden');
  }
  
  progressBar.style.width = `${progress}%`;
}, 100);