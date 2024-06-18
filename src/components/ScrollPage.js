import React from 'react';
import { data } from '../farmakoData';
import Card from './Card';

function ScrollPage(props) {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center mt-8">
                {data && data.map((project, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <Card {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScrollPage;
