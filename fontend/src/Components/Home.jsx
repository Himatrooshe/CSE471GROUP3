import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-body bg-gray-900 text-white h-[100vh] font-[Gorestka]">
      <header className="text-center py-8">
        <img src="/path/to/logo.png" alt="AnimeFlix Logo" className="mx-auto mb-4" />
        <nav className="flex justify-center space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/movies" className="hover:text-gray-300">Movies</a>
          <a href="/tv-series" className="hover:text-gray-300">TV Series</a>
          <a href="/most-popular" className="hover:text-gray-300">Most Popular</a>
          <a href="/top-airing" className="hover:text-gray-300">Top Airin</a>
          <a href="/manga" className="hover:text-gray-300">Mangaaa</a>
        </nav>
      </header>
      <main className="container mx-auto flex flex-col justify-start">
      <div class="bg-white bg-opacity-10 backdrop-blur-md rounded-[4rem] p-6">
        <div className="flex flex-row justify-between text-start mb-4 mx-5 mt-5">
          
          <ul className="list-none flex flex-col gap-2">
          <div className="flex justify-start mb-4">
          <input type="text" placeholder="Search..." className="p-2 rounded-l-md rounded-r-md border border-gray-300 focus:outline-none focus:border-pink-500" />
          <button className="bg-pink-500 hover:bg-blue-600 text-white p-2 ml-2 rounded-r-xl rounded-l-xl">Search</button>
        </div>
        <h2 className="text-lg font-bold font-[Gorestka]">Top Searches</h2>
            <li className=""><a href="#" className="hover:underline font-[Gorestka]">Solo Leveling</a></li>
            <li><a href="#" className="hover:underline">One Piece</a></li>
            <li><a href="#" className="hover:underline">Demon Slayer: Kimetsu no Yaiba Hashira Training Arc</a></li>
            <li><a href="#" className="hover:underline">Ninja Kamui</a></li>
            <li><a href="#" className="hover:underline">Classroom of the Elite naruto: Shippuden</a></li>
            <li><a href="#" className="hover:underline">Jujutsu Kaisen 2nd Season</a></li>
            <li><a href="#" className="hover:underline">Mashle: Magic and Muscles Season 2</a></li>
            <li><a href="#" className="hover:underline">Demon Slayer: The Hashira Meeting Arc</a></li>
            <li><a href="#" className="hover:underline">Mashle: Magic and Muscles</a></li>
          </ul>
          <div className="h-[30rem] w-[30rem] rounded-lg">
            <img 
            className="rounded-2xl"
            
            src="https://images5.alphacoders.com/120/thumb-1920-1209095.jpg"
            
            
            />
          </div>
        </div>
        </div>
        <div className="text-center">
          <button className="bg-pink-500 hover:bg-pink-700 text-white p-2 rounded-xl px-10 py-3 mt-1 font-[Gorestka] text-black text-bold text-xl">
            <Link to="/home">Watch Anime</Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
