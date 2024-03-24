import React from "react";

function Landing() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <video controls className="w-full mb-4">
                <source src="/path/to/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="text-center text-white mb-4">
                <h2 className="text-2xl font-bold text-black">Anime Title</h2>
                <p className="text-lg text-black">Release Date: January 1, 2023</p>
                <p className="text-lg text-black">Episode Number: 1</p>
            </div>
            <div className="text-center text-white">
                <textarea placeholder="Write your comment here..." className="w-full h-32 p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"></textarea>
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md mt-2">Submit Comment</button>
            </div>
        </div>
    );
}

export default Landing;
