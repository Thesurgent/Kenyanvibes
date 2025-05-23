// Main App Component
     function App() {
       // Mock data for recommendations (to be replaced with AI-driven API calls)
       const restaurantResults = [
         { name: "La Villa", location: "Kitisuru", cuisine: "Italian", price: "Moderate", vibe: "Cozy for dates" },
         { name: "Mama Oliech", location: "Kilimani", cuisine: "Kenyan", price: "Affordable", vibe: "Authentic local" },
       ];
       const budgetBuyResults = [
         { name: "Athleisure Set", vendor: "Mood Over the Moon", price: "KSh 2,500", deal: "30% off" },
         { name: "Tecno Spark 20", vendor: "Jumia", price: "KSh 12,000", deal: "Flash sale" },
       ];

       // Handle form submissions (mock for now, will connect to AI backend)
       const handleEatSubmit = (e) => {
         e.preventDefault();
         // TODO: Call AI API with form data (budget, cuisine, location)
         alert("Finding restaurants... (Mock: Check console for results)");
         console.log("Mock AI Output:", restaurantResults);
       };

       const handleBuySubmit = (e) => {
         e.preventDefault();
         // TODO: Call AI API with form data (budget, category)
         alert("Finding deals... (Mock: Check console for results)");
         console.log("Mock AI Output:", budgetBuyResults);
       };

       return (
         <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-500 text-gray-800">
           {/* Navbar */}
           <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
             <div className="max-w-7xl mx-auto flex justify-between items-center">
               <h1 className="text-2xl font-bold text-blue-600">KenyaVibeHub</h1>
               <div className="space-x-4">
                 <a href="#eat" className="text-blue-600 hover:underline">Eat</a>
                 <a href="#buy" className="text-blue-600 hover:underline">Buy</a>
               </div>
             </div>
           </nav>

           {/* Hero Section */}
           <header className="text-center py-12 px-4">
             <img src="images/hero.jpg" alt="Nairobi Vibe" className="w-full h-64 object-cover rounded-lg mb-4" />
             <h2 className="text-4xl font-extrabold text-white mb-4">Make Choices Easy with KenyaVibeHub</h2>
             <p className="text-lg text-white">Find the best places to eat and budget buys in Nairobi, powered by AI.</p>
           </header>

           {/* Where to Eat Section */}
           <section id="eat" className="max-w-4xl mx-auto py-8 px-4">
             <h3 className="text-2xl font-bold text-white mb-6">Where to Eat in Nairobi</h3>
             <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
               <form onSubmit={handleEatSubmit} className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700">Budget</label>
                   <select className="mt-1 w-full p-2 border rounded-md">
                     <option>Affordable (KSh 500-1,500)</option>
                     <option>Moderate (KSh 1,500-3,000)</option>
                     <option>Premium (KSh 3,000+)</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700">Cuisine</label>
                   <select className="mt-1 w-full p-2 border rounded-md">
                     <option>Kenyan</option>
                     <option>Italian</option>
                     <option>Swahili</option>
                     <option>Other</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700">Location</label>
                   <input type="text" placeholder="e.g., Westlands" className="mt-1 w-full p-2 border rounded-md" />
                 </div>
                 <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                   Find Restaurants
                 </button>
               </form>
             </div>
             {/* Mock Results */}
             <div className="grid gap-4 md:grid-cols-2">
               {restaurantResults.map((restaurant, index) => (
                 <div key={index} className="card bg-white rounded-lg shadow-md p-4">
                   <img src="images/item.jpg" alt={restaurant.name} className="w-full h-32 object-cover rounded-md mb-2" />
                   <h4 className="text-lg font-semibold">{restaurant.name}</h4>
                   <p className="text-sm text-gray-600">{restaurant.location}</p>
                   <p className="text-sm text-gray-600">{restaurant.cuisine} • {restaurant.price}</p>
                   <p className="text-sm text-blue-600">{restaurant.vibe}</p>
                 </div>
               ))}
             </div>
             {/* TODO: Replace with dynamic results from AI API */}
           </section>

           {/* Best Budget Buys Section */}
           <section id="buy" className="max-w-4xl mx-auto py-8 px-4">
             <h3 className="text-2xl font-bold text-white mb-6">Best Budget Buys This Week</h3>
             <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
               <form onSubmit={handleBuySubmit} className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700">Budget</label>
                   <input type="text" placeholder="e.g., KSh 5,000" className="mt-1 w-full p-2 border rounded-md" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700">Category</label>
                   <select className="mt-1 w-full p-2 border rounded-md">
                     <option>Clothing</option>
                     <option>Electronics</option>
                     <option>Groceries</option>
                     <option>Other</option>
                   </select>
                 </div>
                 <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
                   Find Deals
                 </button>
               </form>
             </div>
             {/* Mock Results */}
             <div className="grid gap-4 md:grid-cols-2">
               {budgetBuyResults.map((buy, index) => (
                 <div key={index} className="card bg-white rounded-lg shadow-md p-4">
                   <img src="images/item.jpg" alt={buy.name} className="w-full h-32 object-cover rounded-md mb-2" />
                   <h4 className="text-lg font-semibold">{buy.name}</h4>
                   <p className="text-sm text-gray-600">{buy.vendor}</p>
                   <p className="text-sm text-gray-600">{buy.price}</p>
                   <p className="text-sm text-blue-600">{buy.deal}</p>
                 </div>
               ))}
             </div>
             {/* TODO: Replace with dynamic results from AI API */}
           </section>

           {/* Footer */}
           <footer className="bg-white py-4 text-center">
             <p className="text-gray-600">© 2025 KenyaVibeHub. Made for Kenyans, by Kenyans.</p>
           </footer>
         </div>
       );
     }

     ReactDOM.render(<App />, document.getElementById("root"));
