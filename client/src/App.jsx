import React from 'react';
import Image5 from './assets/image5.webp';

function App() {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: `url(${Image5})` }}
        >
            <div className="max-w-md mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <header className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Water Conservation and Sewage Management</h1>
                    <p className="text-gray-600 mb-4">
                        Dial <span className="font-bold">*384*20887#</span> to access learning materials on water conservation and sewage management.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Join our WhatsApp group for more discussions: 
                        <a 
                            href="https://chat.whatsapp.com/F1Q4iipPja0Bj3ss75eQ1L" 
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
