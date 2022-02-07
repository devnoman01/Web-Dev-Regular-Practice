const body = document.body;
body.style.backgroundColor='lightcyan';
body.style.color='green';

const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    blog.setAttribute('style', 'color:blue;width:50%;marginTop=10px;marginBottom=10px;padding:1rem');
}
document.querySelectorAll('.blog');

const secondTitle = document.getElementById('second-title');
const secondTitleParent = secondTitle.parentNode;
console.log(secondTitleParent);

const parentOfParent = secondTitle.parentNode.parentNode;
console.log(parentOfParent);

const blog1Elements = document.getElementById('blog-1');
const childOBlog1 = blog1Elements.childNodes;
console.log(childOBlog1);