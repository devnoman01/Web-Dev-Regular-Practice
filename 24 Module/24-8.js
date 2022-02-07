const body = document.body;
body.style.backgroundColor='lightcyan';
body.style.color='green';

//  creating list element
const li = document.createElement('li');
li.innerText = 'Blog-5';

//  where to add created element
const ul = document.getElementById('blog-list');

//  appending new element
ul.appendChild(li);

//  add article
const article = document.createElement('article');
article.classList.add('blog');

//  Method-1
//  creating h3 for article
const h3 = document.createElement('h3');
h3.innerText = 'Blog-5';
//  creating p for article
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias iste repellendus tempora illo magni est sed! Beatae dicta commodi omnis.';
//  adding elements inside article
article.appendChild(h3);
article.appendChild(p);

/*
//  Method-2
article.innerHTML = `
<h3>Blog-5</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias iste repellendus tempora illo magni est sed! Beatae dicta commodi omnis.</p>
`
*/

//  finding parent of article
const blogSection = document.getElementById('blogs');
//  adding article inside section
blogSection.appendChild(article);


const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    blog.setAttribute('style', 'color:blue;width:50%;padding:1rem;border:2px solid;');
}
document.querySelectorAll('.blog');