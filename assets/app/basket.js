let cards = document.querySelectorAll(".card");

  let idCounter = 1;

  cards.forEach(card => {
    card.setAttribute('id',`${idCounter}`)
    idCounter++;
  })

  if(localStorage.getItem('product') === null) {
    localStorage.setItem('product',JSON.stringify([]))
  }   
  


  function GetProduct() {

    let product = JSON.parse(localStorage.getItem('product'));

    let add = document.querySelectorAll(".pink");

    add.forEach(addbtn => {
      addbtn.onclick = function(e) {
        e.preventDefault();

        let productImg = this.parentElement.parentElement.children[0].src;
        let productName = this.parentElement.parentElement.parentElement.children[2].children[0].innerHTML
        let productPrice = this.parentElement.parentElement.parentElement.children[2].children[1].children[1].innerHTML
        let productId = this.parentElement.parentElement.parentElement.id
        console.log(productId);
//img name price id

        let existproduct = product.find(pr => pr.Id===productId);

        if(existproduct===undefined){

          product.push({
            Id:productId ,
            Img:productImg,
            Name:productName,
            Price:productPrice,
            Count:1
  
           })
        }
        else{
          existproduct.Count+=1;
        }

        localStorage.setItem('product',JSON.stringify(product));


        CountProduct();
      }
    })

  }
function CountProduct() {
    let product = JSON.parse(localStorage.getItem('product'));
    document.getElementById('pr-count').innerHTML = product.length
}

CountProduct();
  
GetProduct();