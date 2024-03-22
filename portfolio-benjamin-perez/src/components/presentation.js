import React from 'react';
import myPhoto from '../assets/images/Benjamin.png';

const Presentation = () => {
    return (
        <div className="bg-neutral-900 h-screen flex flex-col justify-between">
            <div className="text-white p-5 mx-4 md:mx-20 flex-grow">
                {/* Utilisation de flex-col pour la disposition en colonne par défaut et flex-row pour les écrans moyens et plus grands */}
                <div className="flex flex-col md:flex-row items-center justify-between h-full">
                    {/* Pour la photo, on supprime la contrainte de largeur sur les petits écrans pour qu'elle prenne toute la largeur disponible */}
                    <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
                        <img src={myPhoto} alt="Benjamin Perez" style={{
                            maxWidth: '100%', // S'assure que l'image ne dépasse pas sa conteneur
                            height: 'auto'
                        }}/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">Développeur web fullstack</h2>
                        <p>
                            Je suis actuellement étudiant en deuxième année de BTS SIO option Slam.
                            Je compte poursuivre mes études jusqu'en master MIAGE et devenir développeur fullstack.
                        </p>
                        {/* Liens des réseaux sociaux et le reste du contenu... */}
                    </div>
                </div>
            </div>
            {/* Votre élément SVG reste inchangé */}
            <div className="w-full -mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1F51FF" fillOpacity="1"
                          d="M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,144C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>
            </div>
        </div>
    );
};

export default Presentation;
