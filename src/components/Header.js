import React from 'react';

function Header(props) {
    return (
        <>
            <header className="w-[100%] h-[50px]  border-b-2 border-spacing-40 text-xl mt-8 font-mono flex justify-between flex-row ">
                <div>
                    <span className="font-mono ">farmako</span>
                </div>
                <div className="w-[30%] flex flex-row justify-between ">
                    <span>home</span>
                    <span>delivery</span>
                    <span>abdm</span>
                </div>
            </header>

        </>

    );
}

export default Header;