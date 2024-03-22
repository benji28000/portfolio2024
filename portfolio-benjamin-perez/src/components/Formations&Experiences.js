import React, {useEffect, useState} from "react";
import Carousel from "./common/experienceCarousel"

const FormationsExperiences = () => {
    const formations = [
        {
            annee: "2022 - 2024",
            titre: "BTS SIO, spécialisation développement informatique (SLAM)",
            etablissement: "Lycée Fulbert",
        },
        {
            annee: "2020 - 2022",
            titre: "Baccalauréat S, spécialité Mathématiques et NSI",
            etablissement: "Filière Générale Scientifique, Mention Très Bien",
        },
        // Ajoutez d'autres formations ici...
    ];

    const experiences = [
        {
            annee: "1ère année BTS SIO (4 semaines)",
            poste: "Création d'un plugin WordPress pour e-commerce",
            entreprise: "Stage",
            details: "Création d’un plugin WordPress (PHP) permettant de créer sa boutique e-commerce. Présentation des notions relatives à mon projet durant plusieurs réunions avec l’ensemble du personnel. Résolutions de problèmes techniques.",
        },
        {
            annee: "2ème année BTS SIO (8 semaines)",
            poste: "Développement d'une application web (ReactJS/Symfony)",
            entreprise: "NetBizup - CM101",
            details: "Création d’une application web en ReactJS/Symfony qui permet de mener des analyses financière et extra-financière d’entreprises.",
        },
        // Ajoutez d'autres expériences ici...
    ];
    const [animateModal, setAnimateModal] = useState(false);

    // État pour gérer le modal ouvert/fermé et les détails de l'expérience sélectionnée
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const openModal = (experience) => {
        setSelectedExperience(experience);
        setModalOpen(true);
        setTimeout(() => setAnimateModal(true), 10); // Active l'animation après un court délai
    };

    // Gère la fermeture du modal avec animation
    const closeModal = () => {
        setAnimateModal(false);
        setTimeout(() => {
            setModalOpen(false);
            setSelectedExperience(null);
        }, 300); // Retarde la fermeture du modal jusqu'à ce que l'animation soit terminée
    };

    useEffect(() => {
        // Assure que le modal se ferme lorsque l'utilisateur appuie sur la touche Échap
        const closeOnEscapeKeyDown = (e) => {
            if ((e.charCode || e.keyCode) === 27) {
                closeModal();
            }
        };
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    return (
        <div className="bg-neutral-900 text-white p-5 flex flex-col md:flex-row md:justify-center gap-10">
            <div className="flex-1 md:w-3/4">
                <h1 className="text-4xl mb-6">Formations</h1>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {formations.map((formation, index) => (
                        <li key={index} className="mb-10 ml-6">
                            <div
                                className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <time
                                className="mb-1 text-sm font-normal leading-none text-gray-400">{formation.annee}</time>
                            <h3 className="text-lg font-semibold">{formation.titre}</h3>
                            <p className="text-base font-normal text-gray-500">{formation.etablissement}</p>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Colonne des expériences */}
            <div className="flex-1 mt-10 md:mt-10 md:w-3/4">
                <h1 className="text-4xl mb-6">Expériences Professionnelles</h1>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {experiences.map((experience, index) => (
                        <li key={index} className="mb-10 ml-6">
                            <div
                                className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <time
                                className="mb-1 text-sm font-normal leading-none text-gray-400">{experience.annee}</time>
                            <h3 className="text-lg font-semibold">{experience.poste}</h3>
                            <p className="text-base font-normal text-gray-500">{experience.entreprise}</p>
                            <p className="mt-2 text-sm text-gray-400">{experience.details}</p>
                            <button
                                className="text-neon-blue bg-transparent border border-neon-blue rounded-md px-4 py-2 mt-4 hover:bg-neon-blue hover:text-white transition"
                                onClick={() => openModal(experience)}
                            >
                                Voir Détails
                            </button>
                        </li>
                    ))}
                </ol>
                {modalOpen && (
                    <div style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: animateModal ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
                        opacity: animateModal ? 1 : 0,
                        transition: 'transform 300ms ease-out, opacity 300ms ease-out',
                        zIndex: 1000,
                        padding: '20px',
                        borderRadius: '10px',
                        width: '80%',
                        maxWidth: '600px',
                        color: 'black',
                        maxHeight: '80%',
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                    }}>
                        <div className={"bg-neon-blue"} style={{ padding: '20px', borderRadius: '10px' }}>
                            <h2 className="text-2xl font-bold">{selectedExperience?.poste}</h2>
                            <p>{selectedExperience?.annee}</p>
                            <p>{selectedExperience?.entreprise}</p>
                            <p>{selectedExperience?.details}</p>
                            <Carousel />


                            <button className="mt-4" onClick={closeModal}>Fermer</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormationsExperiences;
