
window.addEventListener("load", () => {
// import '../styles/index.css';


    let input= document.getElementById('search');
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
      
            fetchData(e.target.value);
      
         }
        })
        async function fetchData(inputKey) {
            const response = await fetch(`http://newsapi.org/v2/top-headlines?q=${inputKey}&sortBy=popularity&apiKey=520bf969179e416aa2c3608591647a76`);
            // if (this.status === 4) {
            const data = await response.json();
            console.log(data);
    
            let display = document.getElementById('main-news-container');
            let newsHtml = "";
            data.articles.map(function (article) {
                let news = ` 
             <div id="news-container">
             
             <ul id="news-articles">
             <li class="article">
             <img class="article-img" src="${article.urlToImage}" alt="article-img">
             <h2 class="article-title">${article.title}</h2>
             <p class="article-description">${article.description}</p>
            <span class="article-author">${article.author}</span>
            <a class="article-link" href="${article.url}" target="_blank">see more</a>
            </li>
             </ul>
           
             </div>
               `;
                newsHtml += news;
            });
            display.innerHTML = newsHtml;
            if (data.articles.length === 0) {
                document.getElementById('msg').innerHTML ='No article was found based on the search.';
                e.preventDefault();
              }
        };
      
       
        input.addEventListener("input", e=> {
            const inputKey = input.value;
            if(inputKey==''){
                document.getElementById('msg').innerHTML= ""
                fetchData('india');
            }
            else{
                fetchData(inputKey);
                e.preventDefault();
            }
    
        });
    
        fetchData('india');
    
        //************** color theme *************/
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
          
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
        
        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            else {        document.documentElement.setAttribute('data-theme', 'light');
                  localStorage.setItem('theme', 'light');
            }    
        }
        
        toggleSwitch.addEventListener('change', switchTheme, false);
    
        addCSS('style.css');

        // Include CSS file
        function addCSS(index){
         var head = document.getElementsByTagName('head')[0];
        
         var style = document.createElement('link');
         style.href = filename;
         style.type = 'text/css';
         style.rel = 'stylesheet';
         head.append(style);
        }
    });
    