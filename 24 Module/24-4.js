console.log(document.getElementsByTagName('h3'));
console.log(document.getElementsByTagName('article'));
const blogTitles = document.getElementsByTagName('h3');
for(const titles of blogTitles){
    console.log(titles.innerText);
}