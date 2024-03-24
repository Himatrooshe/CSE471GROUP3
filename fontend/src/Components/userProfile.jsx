function userProfile() {
    
    const movies = [
        { id: 1, title: "Movie 1", imageUrl: "/path/to/movie1.jpg" },
        { id: 2, title: "Movie 2", imageUrl: "/path/to/movie2.jpg" },
        { id: 3, title: "Movie 3", imageUrl: "/path/to/movie3.jpg" },
        { id: 4, title: "Movie 4", imageUrl: "/path/to/movie4.jpg" },
        { id: 5, title: "Movie 5", imageUrl: "/path/to/movie5.jpg" },
        { id: 6, title: "Movie 6", imageUrl: "/path/to/movie6.jpg" }
    ];

    return (
        <div className="container mx-auto flex flex-wrap justify-center">
            {movies.map(movie => (
                <Link to={`/movie/${movie.id}`} key={movie.id} className="w-1/4 p-4">
                    <div className="bg-gray-800 rounded-md overflow-hidden">
                        <img src={movie.imageUrl} alt={movie.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default userProfile;