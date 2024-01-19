 

// setInterval(()=>{
//   one.style.animation = 'slideInLeft 3s ease-in-out';
//   two.style.animation = 'slideInRight 3s ease-in-out';
//   console.log('hello');
// }, 2000);


const ques = document.querySelector('.qel');
const quesInput = document.querySelector('.email');
const sent = document.querySelector('.sent');


const nothing = document.querySelector('.nothing');
const notSent = document.querySelector('.not-sent');


const ct = document.querySelectorAll('.ct');
const con = document.querySelectorAll('.ct-con');




// Function to run to display popup in the contact page.

const bar = document.getElementById('bar');
const del = document.getElementById('del');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');

function openPopUp(){
 popup.style.display = 'grid';
 overlay.style.display = 'block';
}



function closePopUp(){
  popup.style.display = 'none';
  overlay.style.display = 'none';
}




/// Routing

const global = {
  currentPage: window.location.pathname,
  search: {
      term: '',
      type: '',
      page: 1,
      totalPages: 1,
      totalResults: 0,
  }
};

function init(){
  switch (global.currentPage){
  case '/index.html':
    ques.addEventListener('submit',(e)=>{
      e.preventDefault();
      if(quesInput.value !== ''){
        sent.style.display = 'block';
        setTimeout(()=>{
          sent.style.display = 'none'
        },2300);
      } else if(quesInput.value === ''){
        nothing.style.display = 'block';
        setTimeout(()=>{
          nothing.style.display = 'none'
        },2300);
      } else{
        notSent.style.display = 'block';
        setTimeout(()=>{
          notSent.style.display = 'none'
        },2300);
      }
      quesInput.value = '';
    })
    
  break;
case '/about.html':

  break
case '/services.html':

  break
case '/contact.html':
 bar.addEventListener('click',openPopUp);
 del.addEventListener('click',closePopUp);

 function run(e) {
  e.target.firstElementChild.firstElementChild.style.color = 'white';
}

ct.forEach((c)=>{
  c.addEventListener('mouseenter',run);
  console.log("It worked, Oshey Ohhh");
})
  break
    }

  }
    
    init();
  