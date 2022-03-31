let collection = document.getElementsByName("result")

function userEvents(currentValue, currentIndex){
    console.log(currentValue, currentIndex);
    currentValue.addEventListener('click', function () {
         this.classList.toggle('choosen');
    })
}



collection.forEach(
    function (currentValue, currentIndex){
        userEvents(currentValue, currentIndex);
    }
)