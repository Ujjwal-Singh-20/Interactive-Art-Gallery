const artworks = [
    { id: 1, title: "Starry Night", src: "starry-night.jpg", category: "Paintings", description: "A painting by Vincent van Gogh." },
    { id: 2, title: "Mona Lisa", src: "mona-lisa.jpg", category: "Paintings", description: "A painting by Leonardo da Vinci." },
    { id: 3, title: "Edgar Degas, The Little Fourteen-Year-Old Dancer", src: "Edgar Degas, The Little Fourteen-Year-Old Dancer.jpg", category: "Sculpture", description: "While Impressionist master Edgar Degas is best known as a painter, he also worked in sculpture, producing what was arguably the most radical effort of his oeuvre. Degas fashioned The Little Fourteen-Year-Old Dancer out of wax (from which subsequent bronze copies were cast after his death in 1917), but the fact that Degas dressed his eponymous subject in an actual ballet costume (complete with bodice, tutu and slippers) and wig of real hair caused a sensation when Dancer debuted at the Sixth Impressionist Exhibition of 1881 in Paris. Degas elected to cover most of his embellishments in wax to match the rest of girl’s features, but he kept the tutu, as well as a ribbon tying backing her hair, as they were, making the figure one of the first examples of found-object art. Dancer was the only sculpture that Degas exhibited in his lifetime; after his death, some 156 more examples were found languishing in his studio." },
    { id: 4, title: "Laocoön and His Sons", src: "Laocoön and His Sons.jpg", category: "Sculpture", description: "Perhaps the most famous sculpture of Roman antiquity, Laocoön and His Sons was originally unearthed in Rome in 1506 and moved to the Vatican, where it resides to this day. It is based on the myth of a Trojan priest killed along with his sons by sea serpents sent by the sea god Poseidon as retribution for Laocoön’s attempt to expose the ruse of the Trojan Horse. Originally installed in the palace of Emperor Titus, this life-size figurative grouping, attributed to a trio of Greek sculptors from the Island of Rhodes, is unrivaled as a study of human suffering." },
    { id: 5, title: "Fahrelnissa Zeid", src: "Fahrelnissa Zeid.jpg", category: "Abstract-art", description: "Turkish artist Fahrelnissa Zeid was one of the first women to enter art school in Istanbul and is lauded for her large-scale abstract paintings. Distinguished by their dazzling, kaleidoscopic patterns, her paintings blend elements from Byzantine, Arab, Persian and European influences. References to mosaics, stained-glass windows and Islamic architecture abound in works such as Fight Against Abstraction (1947). A key figure in Western European and Middle Eastern Modernism, Fahrelnissa was heavily involved in the ​​avant-garde art movements in Istanbul, pre-war Berlin and post-war Paris." },
    { id: 6, title: "Wassily Kandinsky", src: "Wassily Kandinsky.jpg", category: "Abstract-art", description: "An early pioneer of European Abstract Art, Russian-born artist Wassily Kandinsky wanted to free art from the confines of mere depiction. Instead, he aspired to use colours, lines, shapes and gestural marks to create a unique visual language capable of expressing ideas and arousing emotion in onlookers, much in the same way music stirs listeners. His pieces, such as Cossacks (1910), linked musical tones to colours, resulting in melodic and moving painterly displays." },
    { id: 7, title: "Fabiola Morcillo, digital art at the crossroads of time", src: "Fabiola Morcillo, digital art at the crossroads of time.jpg", category: "Digital-art", description: "Also known as “1989,” Fabiola Morcillo is an artist who works by instinct. She combines various artistic influences of the 19th century and is inspired by Vaporwave, a movement that emerged in the 2010s that mixes music and art. Her work offers a pop universe rich in symbols. As fascinating as it is soothing, what delight it is for the eyes!" },
    { id: 8, title: "La Robotte, the digital art of the living", src: "La Robotte, the digital art of the living.jpg", category: "Digital-art", description: "Whether it’s digital work, 2D animation or paintings, the artist La Robotte gives us an eyeful with each new creation. Very intense, her work gambols between the worlds of natural science and the one of imaginary. Thanks to an artistic technique of scientific precision, she offers spectators a dreamlike journey, beyond reality. If La Robotte brings so much to contemporary digital art, it is because of an incredibly dualistic and surrealist approach. Anchored in a very concrete life yet floating in a mirific universe, her creations are simply breathtaking." }
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

document.querySelectorAll('#filter-container button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterArtworks(category);
    });
});

function filterArtworks(category) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = '';
    const filteredArtworks = artworks.filter(artwork => category === 'all' || artwork.category === category);
    filteredArtworks.forEach(artwork => {
        const div = document.createElement('div');
        div.className = 'artwork-thumbnail';
        div.innerHTML = `<img src="${artwork.src}" alt="${artwork.title}"><p>${artwork.title}</p>`;
        div.addEventListener('click', () => displayArtworkDetails(artwork));
        galleryContainer.appendChild(div);
    });
}

document.getElementById('add-artwork-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const src = document.getElementById('src').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    
    const newArtwork = { id: artworks.length + 1, title, src, category, description };
    artworks.push(newArtwork);
    displayArtworks();
    document.getElementById('add-artwork-form').reset();
});


displayArtworks();
