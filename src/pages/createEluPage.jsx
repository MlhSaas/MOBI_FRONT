import React from 'react';
import EluCard from '../components/EluCard';
import myProfile from '../assets/images/myProfile.png';
import Layout from '../components/Layout';

const CreateEluPage = () => {
  const elus = Array(10).fill({
    name: 'Mache Voutsa',
    username: 'Stevie',
    avatar: myProfile,
  });

  return (
    <Layout>
      <h1 className="page-title">Créer un élu</h1>
      <div className="elu-grid">
        {elus.map((elu, index) => (
          <EluCard key={index} {...elu} />
        ))}
      </div>
    </Layout>
  );
};

export default CreateEluPage;
