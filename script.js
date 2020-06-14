// fontSelector();

function fontSelector() {
    let fonts = ["Germania One", "Abril Fatface", "Astloch", "Ranga", "Righteous", "Shrikhand", "Rubik"];
    let shuffledArray = shuffle(fonts);
    assignFont(shuffledArray);
};
  
function assignFont(array) {
    links = document.getElementsByClassName("title");
    for(let i = 0; i < links.length; i++) {
      links[i].style.fontFamily = array[i];
    }
};
  
function shuffle(array) {
      var m = array.length, t, i;
    
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    
      return array;
};

function showPreview(event) {
    thisId = event.currentTarget.parentElement.id;
    section = document.getElementById(`${thisId}`);
    subsection = section.childNodes[3];
    element = event.currentTarget;

    if (element.classList.contains("flip") == false) {
        console.log("open");
        subsection.classList.add("transition");
        event.currentTarget.classList.add("flip");
    } else {
        console.log("closed");
        subsection.classList.remove("transition");
        event.currentTarget.classList.remove("flip");
    }
};