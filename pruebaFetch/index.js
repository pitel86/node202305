const getLibros = async() => {
    const response = await fetch('http://localhost:5000/libros');
    const resJson = await response.json();

    console.log(resJson);
}

console.log(getLibros())