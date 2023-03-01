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
      // Challenges
      customTextPicked = 'Congratulations. With the discount code N3JYYZW01KRM, you can purchase Purrfect Print at a fixed price of 30GBP for 24 hours. Click on the logo above to reach the store!';
      image1.src = './contents/1_good.jpg';
      image2.src = './contents/1_bad.jpg';
      break;
    case '2':
      customTextPicked = 'Congratulations. With the discount code N3JYYZW01KRM, you can purchase Purrfect Print at a fixed price of 30GBP for 24 hours. Click on the logo above to reach the store!';
      image1.src = './contents/2_good.gif';
      image2.src = './contents/2_bad.gif';
      break;
    case '3':
      customTextPicked = 'Congratulations. With the discount code N3JYYZW01KRM, you can purchase Purrfect Print at a fixed price of 30GBP for 24 hours. Click on the logo above to reach the store!';
      image1.src = './contents/3_good.gif';
      image2.src = './contents/3_bad.gif';
      break;
    case '5':
      customTextPicked = 'Congratulations. With the discount code N3JYYZW01KRM, you can purchase Purrfect Print at a fixed price of 30GBP for 24 hours. Click on the logo above to reach the store!';
      image1.src = './contents/5_good.gif';
      image2.src = './contents/5_bad.gif';
      break;
    case '6':
      customTextPicked = 'Congratulations. With the discount code N3JYYZW01KRM, you can purchase Purrfect Print at a fixed price of 30GBP for 24 hours. Click on the logo above to reach the store!';
      image1.src = './contents/6_good.gif';
      image2.src = './contents/6_bad.gif';
      break;
    case '10':
      customTextPicked = 'Congratulations. With the discount code N3JYYZW01KRM, you can purchase Purrfect Print at a fixed price of 30GBP for 24 hours. Click on the logo above to reach the store!';
      image1.src = './contents/10_good.jpg';
      image2.src = './contents/10_bad.jpg';
      break;
  }

  const customText = document.getElementById('custom-text');
  const images = document.getElementById('images');

  // 2/5 image2
  if (randomNumber(1, 5) <= 2) {
    image2.style.display = 'block';
    customText.style.display = 'none';
    image1.style.display = 'none';
    
  }
  // 2/5 image1
  else if (randomNumber(1, 5) <= 4) {
    image1.style.display = 'block';
    customText.style.display = 'none';
    image2.style.display = 'none';
  }
  // 1/5 text
  else {
    customText.textContent = customTextPicked;
    images.style.display = 'none';
  }
}
