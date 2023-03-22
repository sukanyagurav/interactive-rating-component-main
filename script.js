const ratingContainer =document.querySelector('.rating-container');
const cardContainer =document.querySelector('.card-container');
const ratings = document.querySelectorAll('.rating');
const error=document.querySelector('.error');
const form = document.getElementById('form');
const btn = document.querySelector('#btn');
let selectedRating;
ratingContainer.addEventListener('click',(e)=>{
    error.classList.remove('active')
    if(e.target.parentNode.classList.contains('rating')){
        removeActiveRating();
        e.target.parentNode.classList.add('active')
        
        if(e.target.nextElementSibling){
            selectedRating = e.target.nextElementSibling.innerHTML;
        }
        else{
            selectedRating=e.target.innerHTML;
        }
      
    }
    
    
})

function removeActiveRating(){
    ratings.forEach((rating)=>{
        rating.classList.remove('active');
    })
}
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(selectedRating){
        
    const restore=cardContainer.innerHTML;
       cardContainer.innerHTML=`
       <div class="thanksContainer">
       <div class="thanksImg">
        <img src="images/illustration-thank-you.svg" alt="">
      </div>
        <h3 class="selected-rating">You selected ${selectedRating} out of 5 </h3>

        <div class="rating__description">
          <h2>Thank you!</h2>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
            
        </div>
        </div>
       `
       setTimeout(() => {
        document.location.reload();
      }, 6000);
    }   
    else{
        error.classList.add('active')
    }
})