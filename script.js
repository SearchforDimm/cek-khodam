const khodamForm = document.getElementById("khodamForm");
const image = document.getElementById("khodamImage");
const result = document.getElementById("result");
const khodamName = document.getElementById("khodamName");
khodamForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const listKhodam = [
        { name: 'Dimas Hotwil', image: './src/hotwil.jpg' },
        { name: 'Kelinci Banyuwangi 😋', image: './src/kelinci.jpg' },
        { name: 'Bayu Kokonut?!!? ', image: './src/bayu.jpg' },
        { name: 'masamba main lage lage?', image: './src/masamba-lage.jpg'},
        { name: 'jaki ikus', image: './src/jaki.jpg' },
        { name: 'samsul fumiIkehhhh', image: './src/syamsul.jpg' },
        { name: 'Adam AirWangi 🤔', image: './src/adam.jpg' }
    ]

    const randomizeKhodam = listKhodam[Math.floor(Math.random() * listKhodam.length)];


    khodamName.textContent = `Khodam Anda Adalah ${randomizeKhodam.name}`;
    image.src = randomizeKhodam.image;
    image.style.display = "block";
    result.style.display = "block";
})