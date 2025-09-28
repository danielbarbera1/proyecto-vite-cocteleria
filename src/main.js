import './style.css'
import navbar from './components/navbar.js';
import section, { categorias } from './components/section.js';
import footer from './components/footer.js';

let allDrinks = []; // Variable global para todos los cócteles

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
      allDrinks = datos.drinks; // Guarda todos los cócteles
      document.querySelector('#renderDrinks').innerHTML = section(allDrinks)
      await categorias(); // Espera a que se rendericen las pastillas

      // Agrega el evento click a cada pastilla
      document.querySelectorAll('[data-ingrediente]').forEach(pastilla => {
        pastilla.addEventListener('click', (e) => {
          const ingrediente = pastilla.getAttribute('data-ingrediente').toLowerCase().trim();
          const filtrados = allDrinks.filter(drink =>
            (drink.strIngredient1 && drink.strIngredient1.toLowerCase().trim() === ingrediente) ||
            (drink.strIngredient2 && drink.strIngredient2.toLowerCase().trim() === ingrediente) ||
            (drink.strIngredient3 && drink.strIngredient3.toLowerCase().trim() === ingrediente)
          );
          document.querySelector('#renderDrinks').innerHTML = section(filtrados);
        });
      });
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
