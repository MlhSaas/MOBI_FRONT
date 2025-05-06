import React from 'react';
import eluImg from '../assets/images/elu.png';

const EluCard = ({ name, username, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border mr-3"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
      </div>
      <img src={eluImg} alt="I Voted" className="w-full rounded-md mb-4" />
      <div className="flex justify-around text-lg text-gray-700">
        <span>❤️</span>
        <span>💬</span>
        <span>✏️</span>
        <span>⋮</span>
      </div>
    </div>
  );
};

export default EluCard;
