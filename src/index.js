// write your code here
const ramenList = document.querySelector('#ramen-menu')
const ramenDetails = document.querySelector('#ramen-detail')
const form = document.querySelector('#ramen-form')


document.addEventListener("DOMContentLoaded"), () => {
    console.log(ramenList);
    fetch (`http://localhost:3000/ramens`)
     .then (res => res.json())
     .then(ramen => buildRamenImgHTML(ramen));

     const handleSubmit = () => {
        let name = "";
        let restaurant = "";
        let image = ""; 
        let rating = 0;
        let comment = "";


        e.preventDefault();
        console.log("submit!");
        const nameInput = document.querySelector("#new-name");
        name = nameInput.value

        const restInput = document.querySelector("#new-restuarant");
        restaurant = restInput.value
        
        const ImgInput = document.querySelector("#new-image");
        img = imgInput.value
        
        const ratingInput = document.querySelector("#new-rating");
        rating = ratingInput.value

        const commentInput = document.querySelector("#new-comment");
        comment = commentInput.value

        const newRamen = {name, restaurant, image, rating, comment};
        buildRamenImgHTML([newRamen]);

    };

    form.addEventListener("submit", handleSubmit);
}


const buildRamenImgHTML = (ramenArr) => {
    ramenArr.forEach((ramen) => {  
    const image = document.createElement("img");
    Image.src = ramen.image;
    image.addEventListener('click', () => {
        const imgPlaceholder = document.querySelector(".detail-image");
        imgPlaceholder.src = ramen.image;
        const name = document.querySelector(".name")
        const rest = document.querySelector(".restuarant")
        name.innerText = ramen.name;
        rest.innerText = ramen.rating;

        const rating = document.querySelector("#rating-display")
        rating.innerText = ramen.rating;

        const comment = document.querySelector("#comment-display")
        comment.innerText = ramen.comment;
    

    })
    ramenList.append(image);
    })};


   
// document.addEventListener("DOMContentLoaded", function() {
//     fetch (`http://localhost:3000/ramens`)
//     .then (res => res.json())
//     .then (ramens => ramens.forEach(ramen => ramenRater(ramen)))

// })


// // initial render
// // get data and render our ramen to the DOM

// const ramenRater = (ramen) => {
//     const li = document.createElement('li')
//     li.addEventListener("click", () => {
//         details.innerHTML = " ";

//         const img = document.createElement("img")
//         const title = document.createElement("h4")
//         const userList = document.createElement("ul");
//         const btn = document.createElemenet("button")
//         btn.innerText = "LIKE";
//         btn.addEventListener("click", () => 
//         ramen.img.push(img))
//         fetch('http://localhost:3000/ramens/${ramens.id}', {
//             method: "PATCH",
//             contentType: "Application/json",
//             body: ramen.user
//         })
//     })}