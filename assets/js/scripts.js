const searchForm= document.getElementById('searchForm');
const searchBtn= document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput').value

$('#searchBtn').on('click', function() {
    event.preventDefault();
    userSearchQuery = $('#searchInput').val().trim();
    let result = userSearchQuery.replace(/ /g, '+');
    console.log('click');
    console.log(result)

    const queryURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=fanagyvzNBJEy679E0INmietTxoVFMEThbIvpeId';

    $.ajax({
        url: queryURL,
        method: 'GET',
    })
        .then(function (response) {
            console.log(response.data)
        });
});