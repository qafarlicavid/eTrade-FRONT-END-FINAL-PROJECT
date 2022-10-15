

//slider
$('.cards').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.cards2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.cardsE').slick({
  rows:2,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//

$('.cardss').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.spans').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.dd1').hide()
        $('.dd2').hide()
        
$('.exc').click(function(){
  $('.dd2').slideToggle()
  $('.dd1').hide()

 
})
$('.lang').click(function(){
  $('.dd1').slideToggle()
  $('.dd2').hide()

 
})

////basket
// if(localStorage.getItem('product') === null) {
//   localStorage.setItem('product',JSON.stringify([]))
// }   


// let cards = document.querySelectorAll(".card");

//   let idCounter = 1;

//   cards.forEach(card => {
//     card.setAttribute('id',`${idCounter}`)
//     idCounter++;
//   })

//   if(localStorage.getItem('product') === null) {
//     localStorage.setItem('product',JSON.stringify([]))
//   }   
  


//   function GetProduct() {

//     let product = JSON.parse(localStorage.getItem('product'));

//     let add = document.querySelectorAll(".pink");

//     add.forEach(addbtn => {
//       addbtn.onclick = function(e) {
//         e.preventDefault();

//         let productImg = this.parentElement.parentElement.children[0].src;
//         let productName = this.parentElement.parentElement.parentElement.children[2].children[0].innerHTML
//         let productPrice = this.parentElement.parentElement.parentElement.children[2].children[1].children[1].innerHTML
//         let productId = this.parentElement.parentElement.parentElement.id
//         console.log(productId);
// //img name price id

//         let existproduct = product.find(pr => pr.Id===productId);

//         if(existproduct===undefined){

//           product.push({
//             Id:productId ,
//             Img:productImg,
//             Name:productName,
//             Price:productPrice,
//             Count:1
  
//            })
//         }
//         else{
//           existproduct.Count+=1;
//         }

//         localStorage.setItem('product',JSON.stringify(product));


//         CountProduct();
//       }
//     })

//   }
// function CountProduct() {
//     let product = JSON.parse(localStorage.getItem('product'));
//     document.getElementById('pr-count').innerHTML = product.length
// }

// CountProduct();
  
// GetProduct();