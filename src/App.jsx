import React, { useState } from "react";

const priceYearly = {
  basic: 199.99,
  professional: 249.99,
  master: 399.99,
};
const priceMonthly = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99,
};

function App() {
  const [pricing, setPricing] = useState(0);

  const handleCheckBox = (e) => {
    const val = +e.target.value;
    if (val === 0) {
      setPricing(1);
    } else {
      setPricing(0);
    }
  };

  return (
    <>
      <div className="pricing">
        <h2>Our Pricing</h2>
        <div className="pricing__toggle">
          <p>Annually</p>
          <label className="form-switch">
            <input type="checkbox" onClick={handleCheckBox} value={pricing} />
            <i></i>
          </label>
          <p>Monthly</p>
        </div>
      </div>
      <div className="app">
        <div className="block block-color">
          <p>Basic</p>
          {pricing === 0 ? (
            <p className="block__amount">${priceYearly.basic}</p>
          ) : (
            <p className="block__amount">${priceMonthly.basic}</p>
          )}

          <div className="block__descriptions">
            <p>500 GB Storage </p>
            <p>2 Users Allowed</p>
            <p>Send up to 3 GB</p>
          </div>

          <button className="button button-background">LEARN MORE</button>
        </div>
        <div className="block block-middle">
          <div className="block">
            <p>Professional</p>
            {pricing === 0 ? (
              <p className="block__amount">${priceYearly.professional}</p>
            ) : (
              <p className="block__amount">${priceMonthly.professional}</p>
            )}
            <div className="block__descriptions">
              <p>1 TB Storage </p>
              <p>5 Users Allowed</p>
              <p>Send up to 10 GB</p>
            </div>
            <button className="button button-block-middle">LEARN MORE</button>
          </div>
        </div>
        <div className="block block-color">
          <p>Master</p>
          {pricing === 0 ? (
            <p className="block__amount">${priceYearly.master}</p>
          ) : (
            <p className="block__amount">${priceMonthly.master}</p>
          )}
          <div className="block__descriptions">
            <p>2 TB Storage </p>
            <p>10 Users Allowed</p>
            <p>Send up to 20 GB</p>
          </div>

          <button className="button button-background">LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default App;
