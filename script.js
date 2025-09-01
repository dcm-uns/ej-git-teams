fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('moviesBody');
        data.forEach(movie => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.name}</td>
                <td>${movie.year}</td>
                <td>${movie.category}</td>
                <td>${movie.director}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));


function icono(){
    return " &hearts; "
}