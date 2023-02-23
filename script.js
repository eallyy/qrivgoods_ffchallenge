function getSayfaIcerigi(sayi) {
  let icerik = '';

  switch (sayi) {
    case '1':
      icerik = '<h1>Sayfa 1</h1><p>Bu sayfa 1. sayfadır.</p>';
      break;
    case '2':
      icerik = '<h1>Sayfa 2</h1><p>Bu sayfa 2. sayfadır.</p>';
      break;
    case '3':
      icerik = '<h1>Sayfa 3</h1><p>Bu sayfa 3. sayfadır.</p>';
      break;
    default:
      icerik = '<h1>Sayfa Bulunamadı</h1><p>Aradığınız sayfa mevcut değil.</p>';
  }

  return icerik;
}

// URL'den sayıyı alarak ilgili içeriği gösterir.
const urlParams = new URLSearchParams(window.location.search);
const sayi = urlParams.get('challenge');

if (sayi) {
  const icerikDiv = document.getElementById('icerik');
  icerikDiv.innerHTML = getSayfaIcerigi(sayi);
} else {
  const icerikDiv = document.getElementById('icerik');
  icerikDiv.innerHTML = '<h1>Sayfa Bulunamadı</h1><p>Lütfen geçerli bir sayfa sayısı girin.</p>';
}