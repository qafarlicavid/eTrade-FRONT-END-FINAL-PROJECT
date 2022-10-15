
//


function GetProducts() {
    let product = JSON.parse(localStorage.getItem('product'));
    let item = '';
    
    product.forEach(pr => {
        console.log(pr);

      let sum =parseFloat(pr.Price.slice(1))*parseFloat(pr.Count)

        item += `
        <tr>
        <td class="product-remove"><i class="fa-solid fa-xmark remove"></i></td>
        <td class="product-thumbnail"><img src=${pr.Img} alt="Digital Product"></td>
        <td class="product-title">${pr.Name}</td>
        <td class="product-price">${pr.Price}</td>
        <td class="product-quantity">
            
                <input type="number" value="${pr.Count}">
            
        </td>
        <td class="product-subtotal">${sum}</td>
    </tr>
        `
       
    })
    
    
    document.querySelector('#body').innerHTML = item;

}

GetProducts();

let products = JSON.parse(localStorage.getItem('product'));

let inputs = document.querySelectorAll('input')
inputs.forEach(inp => {
    inp.onchange = function (e) {
        if(e.target.value >= 1){
            price = e.target.parentElement.parentElement.children[3].innerText;
            console.log(price);
            sum = e.target.parentElement.parentElement.children[5];
            sum.innerText = e.target.value * parseFloat(price.slice(1) )
        }
        else{
            e.target.value=1
        }


        // price = e.target.parentElement.parentElement.children[3].innerText;
        // console.log(price);
        // sum = e.target.parentElement.parentElement.children[5];
        // sum.innerText = e.target.value * parseFloat(price.slice(1) )
        
    }
})



//RemoveProduct

let remover = document.querySelectorAll(".remove")

for (var i = 0; i <= remover.length; i++) {
    remover[i].onclick = function () {
        this.parentElement.parentElement.remove();
    }
}



////// DIQQET !!! /////

//Remove edende LocalStorage-den silmeni yazmiram, chunki demishdiniz onsuz onu back-de hell eliyesiz

//Yeni ki, Remove edir ama refresh edende tekrar productlar qayidir.

