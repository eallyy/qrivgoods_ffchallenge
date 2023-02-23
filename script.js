if (!new URLSearchParams(window.location.search).get('challenge')) {
  window.location.replace("https://qrivgoods.com");
}

customTextPicked = '';
customImage1 = '';
customImage2 = '';

// Random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random content creator
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const challenge = urlParams.get('challenge');

  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');

  switch (challenge) {
    case '1':
      // Challenge = 1
      customTextPicked = 'Demo text';
      image1.src = 'https://via.placeholder.com/500x500?text=Image+13';
      image2.src = 'https://via.placeholder.com/500x500?text=Image+23';
      break;
  }

  const customText = document.getElementById('custom-text');
  const images = document.getElementById('images');

  // 1/3 text
  if (randomNumber(1, 3) === 1) {
    customText.textContent = customTextPicked;
    images.style.display = 'none';
  }
  // 1/3 image1
  else if (randomNumber(1, 3) === 2) {
    image1.style.display = 'block';
    customText.style.display = 'none';
    image2.style.display = 'none';
  }
  // 1/3 image2
  else {
    image2.style.display = 'block';
    customText.style.display = 'none';
    image1.style.display = 'none';
  }
}