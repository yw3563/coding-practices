const charactersList = document.getElementById('pictureList');
const searchBar = document.getElementById('searchBar');
let tattooPictures = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredPictures = tattooPictures.filter((pictures) => {
        return (
            pictures.name.toLowerCase().includes(searchString) ||
            pictures.house.toLowerCase().includes(searchString)
        );
    });
    displayPictures(filteredPictures);
});

const loadPictures = async () => {
    try {
        const res = await fetch('pictures.json');
        tattooPictures = await res.json();
        displayPictures(tattooPictures);
    } catch (err) {
        console.error(err);
    }
};

const displayPictures = (pictures) => {
    const htmlString = pictures
        .map((pictures) => {
            return `
            <li class="picture">
                <h2>${pictures.name}</h2>
                <p>Catagory: ${pictures.catagory}</p>
                <img src="${pictures.image}"></img>
            </li>
        `;
        })
        .join('');
    picturesList.innerHTML = htmlString;
};

loadPictures();
