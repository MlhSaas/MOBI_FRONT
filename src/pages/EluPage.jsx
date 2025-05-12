import React from 'react';
import EluCard from '../components/EluCard';
import myProfile from '../assets/images/myProfile.png';
import Layout from '../components/Layout';

const EluPage = () => {
  const elus = Array(10).fill({
    name: 'Mache Voutsa',
    username: 'Stevie',
    avatar: myProfile,
  });

  return (
    <Layout>
      <h1 className="page-title">Page des élus</h1>
      <div className="elu-grid">
        {elus.map((elu, index) => (
          <EluCard key={index} {...elu} />
        ))}
      </div>
    </Layout>
  );
};

export default EluPage;
