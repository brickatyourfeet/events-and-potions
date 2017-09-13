var items = []
var lis = document.querySelectorAll('li')
for (var i = 0; i < lis.length; i++) {
  var li = lis[i]
  li.addEventListener('click', function (event) {
    var li = event.target
    if (li.nodeName === 'I') li = li.parentElement

    li.className = 'selected'

    var item = li.textContent.trim()
    items.push(item)

    var info = document.querySelector('.alert.alert-info span')
    info.textContent = items.join(', ')
  })
}

var button = document.getElementById('mix')
button.addEventListener('click', function () {
  var selected = document.querySelectorAll('.selected')
  for (var i = 0; i < selected.length; i++) {
    selected[i].className = ''
  }

  var info = document.querySelector('.alert.alert-info span')
  info.textContent = 'Nothing is selected yet.'

  if (items.includes('Snakewood')) button.style.color = 'brown'
  if (items.includes('Cypress')) button.style.color = 'white'
  if (items.includes('Lavender')) button.style.color = 'indigo'
  if (items.includes('Mandrake')) button.style.backgroundColor = 'beige'
  if (items.includes('Datura')) button.style.backgroundColor = 'aqua'
  if (items.includes('Yarrow Root')) button.style.backgroundColor = 'magenta'

  var container = document.querySelector('.main')
  if (items.includes('Twice Blessed Water')) container.style.borderStyle = 'dashed'
  if (items.includes('Honeywater')) container.style.borderStyle = 'dotted'
  if (items.includes('Leech Juice')) container.style.borderStyle = 'solid'
  if (items.includes('Syrup of Arnica')) container.style.backgroundColor = 'beige'
  if (items.includes('Morning Dew')) container.style.backgroundColor = 'aqua'
  if (items.includes('Wormwood Essence')) container.style.backgroundColor = 'magenta'

  var container = document.querySelector('body')
  if (items.includes('Horned slug')) container.style.background = 'red'
  if (items.includes('Eel Eye')) container.style.background = 'yellow'
  if (items.includes('Cockroach')) container.style.background = 'green'
  if (items.includes('Cat Hair')) container.style.background = 'blue'
  if (items.includes('Crow Feathers')) container.style.background = 'maroon'
  if (items.includes('Toe of Frog')) container.style.background = 'orange'

  items.splice(0, items.length)
})
