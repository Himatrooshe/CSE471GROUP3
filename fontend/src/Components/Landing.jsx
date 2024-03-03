import React from "react";
import { useState,useEffect,useRef } from "react";

function Landing() {

    const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };

    const closeModal = () => {
        setIsModalOpen(false);
      };

      const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);
    return (
<>

<header className="flex flex-row justify-between px-5 py-6 gap-2 bg-gray-900 text-white ">

    <button className="text-bold font-[Gorestka] text-bold hover:underline">
        Hi Anime
    </button>
    <button className="text-bold font-[Gorestka] text-bold hover:underline">
       Home
    </button>
    <button className="text-bold font-[Gorestka] text-bold hover:underline">
        Playlist
    </button>
    <button className="text-bold font-[Gorestka] text-bold hover:underline">
        Movies
    </button>
        <button className="text-bold font-[Gorestka] text-bold px-4 py-2 bg-pink-400 hover:bg-pink-600 rounded-r-[20rem] rounded-l-[20rem]"
        onClick={openModal}
        >
            Login
        </button>   

</header>


            <div className="flex flex-col bg-gray-800 h-[100vh]">
                <div className="mt-[10rem] mx-10 text-bold font[Gorestka] ">

                    <h1 className="text-2xl text-pink-500">#Spotlight</h1>
                    <h1 className="mt-5 text-white font-[Gorestka] text-7xl">
                        Dungeons & Dragons
                    </h1>
                    <div className="flex flex-row gap-5 mt-5 text-white font-[Gorestka] text-lg">
                    <p>TV</p>
                    <p>23 Min</p>
                    <p>21st January, 2024</p>

                    </div>
                    <p className="text-white font-[Gorestka] w-[30rem] mt-5 text-lg">A beautiful series of letters is encapsulated in this ‘Gorestka’ font. Neat lettering is perfect for writing needs that are modern and pleasing to the eye. There is a Modern impression but still looks Elegant when …

</p>
<div className="flex flex-row gap-10 mt-5">
    <button className="px-6 py-2 bg-pink-300 rounded-r-[20rem] rounded-l-[20rem] font-[Gorestka] text-xl">Watch Now</button>
    <button className="px-6 py-2 bg-gray-300 rounded-r-[20rem] rounded-l-[20rem] font-[Gorestka] text-xl">Details</button>


</div>

                </div>
            </div>

            {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
<div ref={modalRef} className="fixed top-0 left-0 w-full h-full flex justify-center items-center" onClick={closeModal}>
  <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
  <div className="bg-white p-8 rounded-lg relative z-10">
    <button className="absolute top-0 right-0 m-4 text-gray-600" onClick={closeModal}>
      Close
    </button>
    <h2 className="text-2xl font-[Gorestka] mb-4">Login</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-[Gorestka] mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-[Gorestka] mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button className="bg-pink-500 text-white font-[Gorestka] px-4 py-2 rounded-md" type="submit">
        Login
      </button>
    </form>
  </div>
</div>

        </div>
      )}
</>


        );
    }
    
    export default Landing;
    