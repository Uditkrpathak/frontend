import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-2xl mx-4 mt-16 text-white bg-purple-400 shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto rounded-2xl">
      {/* Cover Image */}
      <div className="h-32 overflow-hidden rounded-t-lg">
        <img
          className="object-cover object-top w-full"
          src="https://i.pinimg.com/736x/ce/bc/f0/cebcf0b47749da763a274714eada34a1.jpg"
          alt="Mountain"
        />
      </div>

      {/* Profile Picture */}
      <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
        <img
          className="object-cover object-center h-32"
          src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"
          alt="profile pic"
        />
      </div>

      {/* User Details */}
      <div className="mt-2 text-center">
        <h2 className="font-semibold">Nikhil Sharma</h2>
        <p className="text-white">Student of Super60</p>
      </div>

      {/* Stats */}
      <ul className="flex items-center justify-around py-4 mt-2 text-gray-700">
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <div>2k</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <svg
            className="w-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
          </svg>
          <div>10k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <svg
            className="w-4 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>
          <div>15</div>
        </li>
      </ul>

      {/* Follow Button */}
      <div className="p-4 mx-8 mt-2 border-t">
        <button className="block w-1/2 px-6 py-2 mx-auto font-semibold text-purple-500 bg-purple-200 rounded-full hover:shadow-lg">
          Back
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
