/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


//BRB HAVE AN EMERGENCY.....

const caroParent = document.querySelector(".carousel-container")
let imgz = document.querySelectorAll(".carousel-container img")
  function creationOfCarousel(){
          let caro = document.createElement("div")
          caro.classList.add("carousel")

          let l_btn = document.createElement("div")
          l_btn.classList.add("left-button")
          l_btn.textContent= " < "
              l_btn.addEventListener("click", function(e){
                e.target.style=`
                
                -webkit-animation:slideLeft 1s linear infinite;
                animation:slideLeft 1s linear infinite;
                
                `   
                console.log(e.target.style);
                  
              })

          let r_btn = document.createElement("div")
          r_btn.classList.add("right-button")
          r_btn.textContent= " > "
          r_btn.addEventListener("click", function(e){
                
          })


          let mountainImg = document.createElement("img")
          mountainImg.src='./assets/carousel/mountains.jpeg'

          let computerImg = document.createElement("img")
          computerImg.src='./assets/carousel/computer.jpeg'

          let treesImg = document.createElement("img")
          treesImg.src='./assets/carousel/trees.jpeg'

          let turntableImg = document.createElement("img")
          turntableImg.src='./assets/carousel/turntable.jpeg'

          caro.append(l_btn)
          caro.append(mountainImg)
          caro.append(computerImg)
          caro.append(treesImg)
          caro.append(turntableImg)
          caro.append(r_btn)
// console.log(caro);

        return caro
 }



 caroParent.append(creationOfCarousel())