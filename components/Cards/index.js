// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardParent = document.querySelector(".cards-container")



axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(stuff=>{
    let artz = stuff.data.articles
    let artzNameArray = Object.getOwnPropertyNames(artz)
// console.log(artz);


let card;
let headline;
let author;

let imgContainer;
let byAuth;

let img;
artzNameArray.forEach(arr=>{
        // console.log(arr);
        // <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
// console.log(artz[arr]);
                artz[arr].forEach(obj=>{
                    
                    card = document.createElement("div")
                    card.classList.add("card")
                    
                    headline = document.createElement("div")
                    headline.classList.add("headline")
                    headline.textContent=obj.headline

                    author = document.createElement("div")
                    author.classList.add("author")
                    
                    imgContainer = document.createElement("div")
                    imgContainer.classList.add("img-container")

                    byAuth = document.createElement("span")
                    byAuth.textContent=`By ${obj.authorName}`

                    img = document.createElement("img")
                    img.src=obj.authorPhoto

                    card.append(headline)
                    card.append(author)

                    author.append(imgContainer)
                    author.append(byAuth)

                    imgContainer.append(img)
// console.log(card);

 cardParent.append(card)
 
                })//end of for loop
        
    })//end of forEAch
})//end of axios\then



