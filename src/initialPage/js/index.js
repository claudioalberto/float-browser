import config from '../../config.js'

document.querySelector('#button-search').addEventListener('click', (e) => {
  e.preventDefault()
  let term = document.querySelector('#input-search-term').value
  console.log(window)
})