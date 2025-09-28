const tablet = (drinks) => {
    return drinks.map(drinks =>`<!-- Lista de categorías en formato pastillas -->
   
                
                    <!-- Pastilla Clásicos -->
                    <div class="bg-white rounded-full shadow-md px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center">
                        <span class="text-xl mr-2">🍸</span>
                        <span class="font-medium text-gray-800">${drinks.strIngredient1}</span>
                        
                        <span class="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">12</span>
                    </div>
                    
                    
                    `).join('');
}

export default tablet

