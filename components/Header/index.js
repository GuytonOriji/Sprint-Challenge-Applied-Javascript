// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const header_ = document.querySelector(".header-container")

function Header() {
    //creating elements & setting class names
    let header = document.createElement("div")
    header.classList.add("header")
    
    let date_ = document.createElement("span")
    date_.classList.add("date")
    date_.textContent='SMARCH 28, 2019'//think you mean march but Ima leave it

    let h1_ = document.createElement("h1")
    h1_.textContent='Lambda Times'
    let temp_ = document.createElement("span")
    temp_.classList.add("temp")
    temp_.textContent='98°'

    //creating elements & setting class names

    //appending elements
    header.append(date_)
    header.append(h1_)
    header.append(temp_)
    //appending elements

    return header

}

header_.append(Header())