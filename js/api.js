const requestUrl = 'https://api.unsplash.com/search/photos?query=quokka-water-bottles&client_id=lRkZOGZxdjdeciqlUKhN8aEr1VV5G4glkVx_W-bsPNE';
const imageButton = document.querySelector('.imageButton');
const imageGallery = document.querySelector('.imageGallery');

    imageButton.addEventListener('click', async () => {
      let randomImage = await newImage();
      imageGallery.src = randomImage;
    });

    async function newImage() {
      let randomNumber = Math.floor(Math.random() * 10);
      return fetch(requestUrl)
        .then((response) => response.json.parse())
        .then((data) => {
          let allImages = data.results[randomNumber];
          return allImages.urls.regular;
        });
    }