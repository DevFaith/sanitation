// src/App.js

import React from 'react';
import Image4 from './assets/image4.jpg';

function App() {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${Image4})` }}
        >
            <div className="max-w-md mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <header className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Water Conservation and Sewage Management</h1>
                    <p className="text-gray-600 mb-4">
                        Dial <span className="font-bold">*123#</span> to access learning materials on water conservation and sewage management.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Join our WhatsApp group for more discussions: 
                        <a 
                            href="https://chat.whatsapp.com/YOUR_INVITE_LINK" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="underline text-blue-500"
                        >
                            Join WhatsApp Group
                        </a>
                    </p>
                </header>
            </div>
        </div>
    );
}

export default App;
