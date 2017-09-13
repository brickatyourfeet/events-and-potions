// Tasks:
// document.getElementById
// Find just the title
var title = document.getElementById('title')
// what is happening
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
var clickCounter = 0

title.addEventListener('click', changeTitleColor)
function changeTitleColor () {
  console.log(colors[clickCounter], clickCounter)
  title.style.color = colors[clickCounter]
  if (colors[clickCounter] === colors[colors.length - 1]) {
    clickCounter = 0
  } else {
    clickCounter++
  }
}

var lis = document.querySelectorAll('li')
for (var i = 0; i < lis.length; i++) {
  var li = lis[i]
  li.addEventListener('click', function (event) {
    // Grab the thing we are clicking on that is attached to event (the target).
    // It has an object of style and a property of color that we are manually setting
    // to be the color blue. This ends up in the style property on the element itself.
    event.target.style.color = 'blue'
    event.target.className += ' selected'

    var selectedItems = document.querySelectorAll('.selected')

    var myItemsAsAString = ''

    for (var j = 0; j < selectedItems.length; j++) {
      myItemsAsAString += selectedItems[j].textContent.trim() + ' '
    }

    document.querySelector('.alert.alert-info span').textContent = myItemsAsAString
  })
}














// Change the text of the title
// - Choose Your Magical Ingredients
title.textContent = 'Choose Your Magical Ingredients'
// title.innerHTML = 'Choose Your <b>Magical Ingredients</b>'
// Change the style of the title
// Overriding styles
// title.style = 'background-color: purple;'
// title.style = 'color: orange;'

// Setting specific styles
// title.style.backgroundColor = 'purple'
// title.style.color = 'orange'
// Add a class to the title
// - Add a class of .princess-font to the title
title.className = 'princess-font'
// Add more classes with `+=` and a space
// title.className += ' highlighted'

// document.querySelectorAll
// Find all the list items
var allListItems = document.querySelectorAll('li')
// Find all list items of a specific list
// var plants = document.querySelector('.plants')
// Add a class of .green to all .plants list items
var plants = document.querySelectorAll('.plants li i')
for (var i = 0; i < plants.length; i++) {
  plants[i].className += ' green'
}
// Add a class of .blue to all .liquids list items
var liquids = document.querySelectorAll('.liquids li i')
for (var i = 0; i < liquids.length; i++) {
  liquids[i].className += ' blue'
}
// Add a class of .red to all .animal-parts list items
var animalParts = document.querySelectorAll('.animal-parts li i')
for (var i = 0; i < animalParts.length; i++) {
  animalParts[i].className += ' red'
}

// document.createElement
// Create a new ingredient from scratch!
// var li = document.createElement('li')
// li.textContent = 'Eye of Newt'
// Add it to one of the lists at the top
// var ul = document.querySelector('ul')
// ul.prepend(li)
// Add it to one of the lists at the bottom
// ul.append(li)
// Add it to one of the lists in the middle
// element.remove()
// Find and remove specific items
// document.querySelectorAll('li')[8].remove()
