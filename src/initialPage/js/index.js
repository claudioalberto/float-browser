
document.querySelector('#button-search').addEventListener('click', (e) => {
  e.preventDefault()
  let term = document.querySelector('#input-search-term').value
  let validationUrl = new RegExp("^((http(s?):\/\/(www.)?[a-z]+.com\)|(magnet:\?xt=urn:btih:))")
  let newUrl
  // console.log(validationUrl.test(term))
  if (validationUrl.test(term)) {
    newUrl = term
  }
  else {
    let termCustom = term.normalize('NFD')
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
      .split(' ')
    newUrl = 'https://google.com/search?q='
    termCustom.forEach((element, index) => {
      newUrl += index != 0 ? '+' + element : element
    });
  }


  console.log(newUrl)
  window.location.href = newUrl
})