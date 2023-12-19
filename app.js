// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby merging twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humbler pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thunder cats lumber sexual blue bottle. Disrupt glossier gas pump deep v vice freeze hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flex it well irony, vape toys unicorn. Glossier tattooed 8-bit, down town waistcoat offal activated charcoal slow-carb toys hell of pabst raclette post-ironic jianbing down town.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humble brag, toys pok pok heirloom fashion axe cray stump town down town actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const images = document.querySelector('img#person-img');
const anchor = document.querySelector('a#anchor--tag');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const id = document.querySelector('.id');

//If you html && css was just a way of styling the document, and you want to load the request from an ajax file, a server or even a json file; you can use this event listener below
// window.addEventListener('DOMContentLoaded', ()=> {
//   author.textContent = reviews[0]["name"];
//   job.textContent = reviews[0]["job"];
//   info.textContent = reviews[0]["text"];
// })

// Random Number
const randomArr = () => {
  return Math.floor(Math.random() * reviews.length);
}

const currentPerson = (showNumber) => {
  //Making sure that the function for each button  click is not repeated
  author.textContent = reviews[showNumber]["name"];
  job.textContent = reviews[showNumber]["job"];
  info.textContent = reviews[showNumber]["text"];
  images.src = reviews[showNumber]["img"];  
  anchor.href = reviews[showNumber]["img"];
  id.textContent = reviews[showNumber]["id"];
}

let currentItem = 0;

//Script for the random button
randomBtn.addEventListener('click', () => {
  currentItem = randomArr();
  currentPerson(currentItem);
})

//Show Next Person
nextBtn.addEventListener('click', () => {
  currentItem++;
  //console.log(currentItem);
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
    //console.log("Yeah")
  }
  currentPerson(currentItem);

});

// //Show Prev Person
prevBtn.addEventListener('click', () => {
  currentItem--;
  //console.log(currentItem);
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
    //console.log("Yeah")
  }
  currentPerson(currentItem);

});