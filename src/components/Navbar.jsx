function Navbar({ onMenuClick, children }) {
    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Left: Toggler & Mobile Brand */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onMenuClick}
                            className="p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 focus:outline-none transition md:hidden"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Wrapper to ensure spacing on desktop if we hide the toggler */}
                        <div className="md:hidden">
                            <h1 className="text-lg font-bold text-gray-900">MyPorto</h1>
                        </div>
                    </div>

                    {/* Right Side Actions / Children */}
                    <div className="flex items-center space-x-4">
                        {children}
                        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;