    //update the text of the <h1> element
  function setTitle(title) {
        let titleElement = document.getElementById("title");
        titleElement.textContent = title;
    }

    // update the text of the <p> element 
  function setDescription(description) {
    let descriptionElement = document.getElementById("text");
    descriptionElement.textContent = description;
  }
  
//   update the background color of the <body> element
  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
//   update the font color for all elements
  function setFontColor(color) {
    document.body.style.color = color;
  }
  

//   change the page theme to the theme provided
  function setTheme(theme) {
    if (theme === "dark") {
        setBackgroundColor("black");
        setFontColor("white");
    } else if (theme === "light") {
        setBackgroundColor("white");
        setFontColor("black");
    }
}
