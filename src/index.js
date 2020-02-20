
async function fetchData() {
    const response = await fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=520bf969179e416aa2c3608591647a76');
    const data = await response.json();
    console.log(data);
    let display = document.getElementById('display');
    let newsHtml = "";
    data.articles.map(function (article) {
     let news=` 
     <div  id="news-container">
     <ul id="news-articles">
     
        <li class="article"><img class="article-img" src="${article.urlToImage}" alt="article-img"></li>
        <li class="article"><h2 class="article-title">${article.title}</h2></li>
        <li class="article"><p class="article-description">${article.description}</p></li>
        <li class="article"><span class="article-author">${article.author}</span></li>
        <li class="article"><a class="article-link" href="${article.url}" target="_blank">see more</a></li>
    
     </ul>
     </div>
       `;
        newsHtml += news;
    });
    display.innerHTML = newsHtml;
};


fetchData();