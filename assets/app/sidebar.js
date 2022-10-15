

var menu = document.querySelector('.menu')

var sidebar = document.querySelector('.sidebar')

menu.addEventListener('click',function() {
        sidebar.classList.add('active2')
})

document.querySelector('.close').onclick = () => {
        sidebar.classList.remove('active2')
}

///
