import './style.css'
import navbar from './components/navbar.js';
import section from './components/section.js';
import footer from './components/footer.js';
// La URL de la API 
const apiUrl = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';



document.querySelector('#app').innerHTML = `
  <div>
    ${navbar()}
    ${section()}
    ${footer()}
  </div>
  
  <div>
   fetch()
  </div>
`

