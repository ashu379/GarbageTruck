// src/components/Lower.jsx
import React from 'react';
import background from '../media/background.jpg';

const Lower = () => {
    return (
        <div className="bottom-section">
            <div className="bottom-image">
                <img src={background} alt="Hero Image" />
            </div>

            <div className="hired-steps">
                <h1>How you will be Hired?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed?</p>

                <div className="content-box">
                    <div className="inner-box">
                        <img src="./images/logo1.png" alt="document-logo" />
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos error laborum quasi minus aspernatur. Nostrum.
                        </p>
                    </div>

                    <div className="inner-box">
                        <img src="./images/logo2.png" alt="document-logo" />
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos error laborum quasi minus aspernatur. Nostrum.
                        </p>
                    </div>

                    <div className="inner-box">
                        <img src="./images/logo3.png" alt="document-logo" />
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos error laborum quasi minus aspernatur. Nostrum.
                        </p>
                    </div>

                    <div className="inner-box">
                        <img src="./images/logo4.png" alt="document-logo" />
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos error laborum quasi minus aspernatur. Nostrum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lower;
