
   // Apply random background color to all inline code elements
  const colors = ['#ffb86c', '#f1fa8c', '#6272a4', '#8be9fd', '#ff79c6', '#bd93f9'];

 
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

 
  window.onload = function() {
    const codeElements = document.querySelectorAll('code');
    codeElements.forEach((element) => {
      element.style.color = getRandomColor();
    });
  }

