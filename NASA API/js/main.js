let key = "SRtXBlplnNoSXvpjVt4FE6HibtDZD7owzXafoSMz";
let day,month,year,date;
let id = document.querySelector('#text');
day = new Date().getDate();
month = new Date().getMonth()+1;
year = new Date().getFullYear();
date = `${year}-${month}-${day}`;
async function API() {
    let link = `https://api.nasa.gov/planetary/apod?api_key=${key}&&thumbs=true&date=${date}`;
    //console.log(link);
    let response = await fetch(link);
    response = await response.json();
    

    document.querySelector('img').src = `${response.hdurl}`;
    document.querySelector('p').innerHTML = `${response.explanation}`;
}
id.addEventListener("change", () => {
    date = id.value;
    console.log(date);
    API();
})

API();