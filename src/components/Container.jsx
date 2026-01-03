import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Container({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar Component */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-h-screen md:ml-64 transition-all duration-300">
                {/* Navbar */}
                <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

                {/* Page Content */}
                <main className="flex-1 p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}