const artworks = [
    { id: 1, title: "Starry Night", src: "starry-night.jpg", category: "Paintings", description: "A painting by Vincent van Gogh." },
    { id: 2, title: "Mona Lisa", src: "mona-lisa.jpg", category: "Paintings", description: "A painting by Leonardo da Vinci." }
];

function displayArtworks() {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = '';
    artworks.forEach(artwork => {
        const div = document.createElement('div');
        div.className = 'artwork-thumbnail';
        div.innerHTML = `<img src="${artwork.src}" alt="${artwork.title}"><p>${artwork.title}</p>`;
        div.addEventListener('click', () => displayArtworkDetails(artwork));
        galleryContainer.appendChild(div);
    });
}

function displayArtworkDetails(artwork) {
    const detailsContainer = document.getElementById('artwork-details');
    detailsContainer.innerHTML = `
        <h2>${artwork.title}</h2>
        <img src="${artwork.src}" alt="${artwork.title}">
        <p>${artwork.description}</p>
    `;
    detailsContainer.style.display = 'block';
}


displayArtworks();
