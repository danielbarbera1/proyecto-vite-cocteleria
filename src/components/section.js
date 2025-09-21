import card from "./card"


const section = () => {
    return`    <section class="bg-gray-100 py-auto" >
        <div class="container mx-auto px-4" >
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-gray-800">TIPO DE COCTELES</h2>
                <p class="mt-2 text-lg text-gray-600">Descurbre Todo Tipo De Sabores.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               ${card()} 
               ${card()} 
               ${card()} 
               ${card()} 
               ${card()} 
               ${card()} 
               ${card()} 
               ${card()} 
               ${card()} 
            </div>
        </div>
    </section>`
}

export default section