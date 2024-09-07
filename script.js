const links = document.querySelectorAll(".termos a");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null,event.target.href )
}

async function fetchPage(url) {
  const pageResponde = await fetch(url);
  const pageContent = await pageResponde.text();
  replaceContent(pageContent)
}

function replaceContent(newText){
  const newHtml = document.createElement('div')
  newHtml.innerHTML = newText

  const oldContent =  document.querySelector('.content')
  const newContent = newHtml.querySelector('.content')

  oldContent.innerHTML = newContent.innerHTML
  document.title = newHtml.querySelector('title').innerText

  
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
