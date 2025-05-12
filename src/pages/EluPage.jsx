import React from 'react';
import EluCard from '../components/EluCard';
import myProfile from '../assets/images/myProfile.png';

const EluPage = () => {
  const elus = Array(10).fill({
    name: 'Mache Voutsa',
    username: 'Stevie',
    avatar: myProfile,
  });

  return (

      <div className="elu-grid">
          <h1 className="page-title">Page des élus</h1>

          {elus.map((elu, index) => (
              <EluCard key={index} {...elu} />
          ))}
      </div>
  );
};

export default EluPage;
