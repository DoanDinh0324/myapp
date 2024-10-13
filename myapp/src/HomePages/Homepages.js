import React from 'react';
import Footer from '../components/Footer/Footer';
import ProductMain from '../components/ProductMain/Productmain';
import ProductTop from '../components/ProductTop/Productop';

const Homepages = () => {
  return (
    <div
      style={{
        paddingLeft: '90px',
        background: `
          linear-gradient(180deg, #0C003C 0%, #BFFFAF 100%),
          linear-gradient(165deg, #480045 25%, #E9EAAF 100%),
          linear-gradient(145deg, #480045 25%, #E9EAAF 100%),
          linear-gradient(300deg, rgba(233, 223, 255, 0) 0%, #AF89FF 100%),
          linear-gradient(90deg, #45EBA5 0%, #45EBA5 30%, #21ABA5 30%, #21ABA5 60%, #1D566E 60%, #1D566E 70%, #163A5F 70%, #163A5F 100%)
        `,
        backgroundBlendMode: 'overlay, overlay, overlay, multiply, normal',
        backgroundAttachment: 'scroll',
      }}
    >
      <ProductTop />
      <ProductMain />
      <Footer />
    </div>
  );
};

export default Homepages;
