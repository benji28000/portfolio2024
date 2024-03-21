import React, {useEffect, useState} from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        // Active le mode sticky si le défilement dépasse 80 pixels. Ajustez selon vos besoins.
        if (window.scrollY > 80) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${isSticky ? 'bg-black bg-opacity-75' : 'bg-black'} fixed top-0 w-full z-50 text-white py-5 shadow-lg transition-opacity duration-300 ease-in-out`}>
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Nom à gauche */}
                    <div className="text-2xl font-bold">
                        <a href="/" className="flex items-center">
                            Benjamin Perez
                        </a>
                    </div>
                    {/* Liens de la navbar pour les écrans larges */}
                    <div className="hidden md:flex items-center space-x-6 text-lg">
                        <a href="#presentation" className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded transition duration-300">Presentation</a>
                        <a href="#competences" className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded transition duration-300">Compétences</a>
                        <a href="#formations" className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded transition duration-300">Formations</a>
                        <a href="#contact" className="py-2 px-4 hover:bg-blue-500 hover:text-white rounded transition duration-300">Contact</a>
                    </div>
                    {/* Bouton du menu mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-blue-500 focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Menu mobile, affiché en fonction de l'état isOpen */}
            <div className={`${isOpen ? 'menu-open' : 'menu-hidden'} md:hidden`}>
                <a href="#presentation" className="block py-3 px-4 text-lg text-white hover:bg-blue-500 hover:text-white">Présentation</a>
                <a href="#competences" className="block py-3 px-4 text-lg text-white hover:bg-blue-500 hover:text-white">Compétences</a>
                <a href="#formations" className="block py-3 px-4 text-lg text-white hover:bg-blue-500 hover:text-white">Formations</a>
                <a href="#contact" className="block py-3 px-4 text-lg text-white hover:bg-blue-500 hover:text-white">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;