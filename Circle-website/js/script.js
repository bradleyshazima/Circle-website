const searchBtn = document.getElementsByClassName('searchBtn');

searchBtn.onclick = () => {
    if(searchBtn.classList.contains('active')) {
        searchBtn.classList.remove('active');
    }
    else {
        searchBtn.classList.add('active');
    }
}