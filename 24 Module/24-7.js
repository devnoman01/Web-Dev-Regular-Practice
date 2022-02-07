const body = document.body;
body.style.backgroundColor='lightcyan';
body.style.color='green';

const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    blog.setAttribute('style', 'color:blue;width:50%;marginTop=10px;marginBottom=10px;padding:1rem');
}

document.querySelectorAll('.blog');