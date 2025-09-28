const tablet = (drinks) => {
    return drinks.map(drink => `
        <div class="bg-white rounded-full shadow-md px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center cursor-pointer"
            data-ingrediente="${drink.strIngredient1}">
            <img src="https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(drink.strIngredient1)}-small.png" 
                 alt="${drink.strIngredient1}" class="w-8 h-8 mr-2 rounded-full border" />
            <span class="font-medium text-gray-800">${drink.strIngredient1}</span>
            <span class="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">12</span>
        </div>
    `).join('');
}

export default tablet

