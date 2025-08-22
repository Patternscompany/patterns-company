import React from 'react';

var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/cross-line2.png');
var whatWeDoImg = require('./../../images/services/what-we-do.png'); // 👈 replace with your image path

class WhatWeDo2 extends React.Component {
    render() {
        return (
            <>
                <div
                    className="section-full mobile-page-padding bg-white p-t80 p-b50 bg-repeat overflow-hide"
                    style={{ backgroundImage: 'url(' + bgimg1 + ')' }}
                >
                    <div className="container">
                        {/* Heading */}
                        <div className="large-title-block text-center">
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div
                                        className="sx-separator bg-white bg-moving bg-repeat-x"
                                        style={{ backgroundImage: 'url(' + bgimg2 + ')' }}
                                    >
                                        <h3 className="sep-line-one">What We Do</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Below Heading */}
                        <div className="section-content text-center">
                            <img
                                src={whatWeDoImg}
                                alt="What We Do"
                                style={{ maxWidth: "100%", borderRadius: "12px" }}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default WhatWeDo2;
