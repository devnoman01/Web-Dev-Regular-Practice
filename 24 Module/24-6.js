const body = document.body;
body.style.backgroundColor='lightcyan';
body.style.color='green';

const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    blog.style.width='50%';
    blog.style.marginTop='10px';
    blog.style.marginBottom='10px';
    blog.style.padding='1rem';
    blog.style.border='2px solid green'
    blog.style.borderRadius='20px';
}