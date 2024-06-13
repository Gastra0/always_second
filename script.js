// script.js
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('lightgallery');
    const imagesPerLoad = 20; // Adjust based on the number of images you want to load initially
    let imagesLoaded = 0;

    // Fetch image filenames from the JSON file
    fetch('gallery/images.json')
        .then(response => response.json())
        .then(imageFilenames => {
            function loadImages() {
                const imagesToLoad = imageFilenames.slice(imagesLoaded, imagesLoaded + imagesPerLoad);
                imagesToLoad.forEach(filename => {
                    const a = document.createElement('a');
                    a.href = `gallery/${filename}`;
                    a.dataset.src = `gallery/${filename}`;
                    a.dataset.subHtml = `<h4>${filename}</h4>`;
                    a.innerHTML = `<img src="gallery/${filename}" alt="${filename}">`;
                    gallery.appendChild(a);
                });
                imagesLoaded += imagesPerLoad;
                lightGallery(gallery, {
                    thumbnail: true,
                    animateThumb: false,
                    showThumbByDefault: false,
                    zoom: true,
                    fullScreen: true,
                    share: true,
                    autoplay: true
                });
            }

            loadImages(); // Initial load

            // Add more images as the user scrolls
            window.addEventListener('scroll', () => {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight && imagesLoaded < imageFilenames.length) {
                    loadImages();
                }
            });
        })
        .catch(error => console.error('Error loading image filenames:', error));
});