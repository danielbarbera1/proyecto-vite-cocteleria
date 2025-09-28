import './style.css'
import navbar from './components/navbar.js';
import section, { categorias } from './components/section.js';
import footer from './components/footer.js';

// Renderiza el HTML base primero
document.querySelector('#app').innerHTML = `
<div>
  ${navbar()}
  <section id="renderDrinks"></section>
  ${footer()}
</div>
`

// Luego carga la data y renderiza
const cargaapi = async () => {
  try {
    const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    if (resp.status === 200) {
      const datos = await resp.json()
      document.querySelector('#renderDrinks').innerHTML = section(datos.drinks)
      categorias(); // Ahora sí existe #renderPastilla en el DOM
    } else if (resp.status === 401) {
      console.log('sin conexion')
    } else if (resp.status === 404) {
      console.log('no existe el coctel')
    } else {
      console.log('error fatal')
    }
  } catch (error) {
    console.log(error)
  }
}

cargaapi()
