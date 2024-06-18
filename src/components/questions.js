import farmakoData from '../questiondata';
import { useState } from "react";

function Questions(props) {
    const [single, setSingle] = useState(null);

    function handleClick(id) {
        setSingle(id === single ? null : id);
    }

    return (
        <div className="max-w-lg mt-20 mx-auto ">
            <h1 className="text-3xl font-bold mb-6">FAQ</h1>
            {farmakoData.map((item) => (
                <div key={item.id} className="border border-gray-300 rounded-lg mb-2">
                    <div className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100" onClick={() => handleClick(item.id)}>
                        <span className="text-lg font-medium text-gray-800">{item.title}</span>

                    </div>
                    {single === item.id && (
                        <div className="px-4 py-3 border-t border-gray-300">
                            <p className="text-white">{item.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Questions;
