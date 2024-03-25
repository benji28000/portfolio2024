import React, {useEffect, useState} from "react";
import Carousel from "./common/experienceCarousel"
import backgroundImage from "../assets/images/backgroud-img.svg";

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
    ];
    const [animateModal, setAnimateModal] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const openModal = (experience) => {
        setSelectedExperience(experience);
        setModalOpen(true);
        setTimeout(() => setAnimateModal(true), 10); // Active l'animation après un court délai
    };

    const closeModal = () => {
        setAnimateModal(false);
        setTimeout(() => {
            setModalOpen(false);
            setSelectedExperience(null);
        }, 300);
    };

    useEffect(() => {
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
        <div className="bg-[#00BFFF]">
            <div className="text-[#173753] p-5 flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-32 justify-center items-center">
                <div className="flex-1 max-w-3xl px-4 md:px-0">
                    <h1 className="text-4xl mb-6">Formations</h1>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {formations.map((formation, index) => (
                            <li key={index} className="mb-10 ml-6">
                                <div
                                    className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time
                                    className="mb-1 text-sm font-normal leading-none text-[#173753] break-words">{formation.annee}</time>
                                <h3 className="text-lg font-semibold break-words">{formation.titre}</h3>
                                <p className="text-base font-normal text-[#173753] break-words">{formation.etablissement}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex-1 max-w-3xl px-4 md:px-0 mt-10 md:mt-0">
                    <h1 className="text-4xl mb-6">Expériences Professionnelles</h1>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {experiences.map((experience, index) => (
                            <li key={index} className="mb-10 ml-6">
                                <div
                                    className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <time
                                    className="mb-1 text-sm font-normal leading-none text-[#173753] break-words">{experience.annee}</time>
                                <h3 className="text-lg font-semibold break-words">{experience.poste}</h3>
                                <p className="text-base font-normal text-[#173753] break-words">{experience.entreprise}</p>
                                <p className="mt-2 text-sm text-[#173753] break-words">{experience.details}</p>
                                <button
                                    className="text-[#44E5E7] bg-black border border-black rounded-md px-4 py-2 mt-4 hover:bg-green-500 hover:border-green-500 hover:text-white transition"
                                    onClick={() => openModal(experience)}
                                >
                                    Voir Détails
                                </button>
                            </li>
                        ))}
                    </ol>
                    {modalOpen && (
                        <div
                            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 ${animateModal ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300 ease-out`}
                            style={{zIndex: 1000}}>
                            <div className="bg-[#2892D7] overflow-auto rounded-lg shadow-lg max-w-lg w-full mx-auto p-5"
                                 style={{
                                     transform: animateModal ? 'translateY(0)' : 'translateY(-50px)',
                                     transition: 'transform 300ms ease-out',
                                 }}>
                                <h2 className="text-2xl font-bold break-words">{selectedExperience?.poste}</h2>
                                <p className="break-words">{selectedExperience?.annee}</p>
                                <p className="break-words">{selectedExperience?.entreprise}</p>
                                <p className="break-words">{selectedExperience?.details}</p>
                                <Carousel/>
                                <button onClick={closeModal}
                                        className="mt-4 bg-red-500 text-[#44E5E7] rounded px-4 py-2 hover:bg-red-700 transition-colors duration-200 ease-in-out">
                                    Fermer
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mb-2">
                <path fill="#173753" fill-opacity="1"
                      d="M0,256L120,245.3C240,235,480,213,720,218.7C960,224,1200,256,1320,272L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>
    );
};

export default FormationsExperiences;
