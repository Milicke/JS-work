async function API() {
    let link = "https://api.nasa.gov/planetary/apod?api_key=";
    let key = "SRtXBlplnNoSXvpjVt4FE6HibtDZD7owzXafoSMz";
    let response = await fetch(link+`${key}`);
    response = await response.json();
    //console.log(response);
    document.querySelector('body').style.backgroundImage = `url(${response.hdurl})`;
    document.querySelector('h3').innerHTML = `${response.copyright}`;
    document.querySelector('h2').innerHTML = `${response.title}`;
    document.querySelector('p').innerHTML = `${response.explanation}`;
    document.querySelector('span').innerHTML = `${response.date}`;
}
API();