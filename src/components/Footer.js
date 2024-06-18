import React from 'react';

function Footer(props) {
    return (
        <div className="flex w-[100%] p-4 mt-24 justify-around flex-row">
            <div className="flex flex-col gap-3">
                <span>Home</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
            </div>

            <div className="text-white">
                <h2 className="text-lg font-semibold mb-2">Download Us </h2>
                <div className="flex flex-col">
                    <a href="#" className="hover:text-gray-200 mb-2">Play Store</a>
                    <a href="#" className="hover:text-gray-200">App Store</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;