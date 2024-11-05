let list_post = [
    {
        id: 1,
        titre: "morroco",
        img: "./img/morroco.png",
        description: "morroco descrition",
    },
    {
        id: 2,
        titre: "algeria",
        img: "./img/algeria.png",
        description: "algeria description",
    },
    {
        id: 3,
        titre: "egypt",
        img: "./img/egypt.png",
        description: "egypt description",
    },
    {
        id: 4,
        titre: "tunes",
        img: "./img/tunes.png",
        description: "tunes description",
    },
    {
        id: 5,
        titre: "mauritania",
        img: "./img/mauritania.png",
        description: "mauritania description",
    },
];

let list_like = [];
let list_disLike = [];

list_length = list_post.length;

const postContainer = document.getElementById("posts-container");
const Msg_like_dislike = document.querySelector(".like-dislike-msg");

let compteur = 0;
changeCentent(compteur);



function changeCentent(compteur) {

    postContainer.innerHTML = `
    <div class="post" id="${list_post[compteur].id}">
     <img src="${list_post[compteur].img}">
     <h3 class="post-title">${list_post[compteur].titre}</h3>
     <p class="post-des">${list_post[compteur].description}</p>  
    </div>
`;
}

function Like() {
    list_like.push(list_post[compteur]);
    compteur++;
    changeCentent(compteur);

    if (compteur + 1 === list_length) {
        document.getElementById("like").disabled = true;
        postContainer.innerHTML = `<h1>No more post</h1>`
        postContainer.style.marginBottom = "50px";
    }



    console.log(list_like);

    document.getElementById(compteur + 1).classList.add("moveRight");

    Msg_like_dislike.innerHTML = "You like this post";
    Msg_like_dislike.style.color = "green";

    setTimeout(() => {
        Msg_like_dislike.innerHTML = "";
    }, 1000);

}

function Dislike() {
    list_disLike.push(list_post[compteur]);
    compteur++;
    changeCentent(compteur);
    if (compteur + 1 === list_length) {
        document.getElementById("dislike").disabled = true;
        postContainer.innerHTML = `<h1>No more post</h1>`
        postContainer.style.marginBottom = "50px";
    }



    console.log(list_disLike);

    document.getElementById(compteur + 1).classList.add("moveLeft");

    Msg_like_dislike.innerHTML = "You dislike this post";
    Msg_like_dislike.style.color = "red";

    setTimeout(() => {
        Msg_like_dislike.innerHTML = "";
    }, 1000);
}


let show_history = document.getElementById("show-history");


function Like_History() {

    show_history.innerHTML = "";

    list_like.forEach(element => {
        show_history.innerHTML += `
        <div class="post" id="${element.id}">
        <h3 class="post-title">${element.titre}</h3>
        <p class="post-des">${element.description}</p>  
       </div>
        `
    });
}

function Dislike_History() {

    show_history.innerHTML = "";

    list_disLike.forEach(element => {
        show_history.innerHTML += `
        <div class="post" id="${element.id}">
        <h3 class="post-title">${element.titre}</h3>
        <p class="post-des">${element.description}</p>  
       </div>
        `
    });
}   