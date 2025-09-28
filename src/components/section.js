import card from "./card"
import tablet from "./tablet"

const categorias = async ()=> {
  try{
    const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    if(resp.status=== 200){
      const datos = await resp.json()
    document.querySelector('#renderPastilla').innerHTML = tablet(datos.drinks)
    }else if (resp.status === 401) {
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



const section = (drinks) => {
    return `    <section class="bg-gray-100 py-auto" >
        <div class="container mx-auto px-4" >
            <div class="text-center  p-10 ">
                <h2 class="text-3xl font-bold text-gray-800">TIPO DE COCTELES</h2>
                <p class="mt-2 text-lg text-gray-600">Descurbre Todo Tipo De Sabores.</p>
            </div>
            
            <div class="mb-12">
                <div class="flex flex-wrap justify-center gap-3">
                    <div id="renderPastilla" ></div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               ${drinks.map(drink => card(drink)).join('')


        }  
            </div>
        </div>
    </section>`
}

export { categorias }
export default section


