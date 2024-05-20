import React, {useRef} from 'react';
import htmlIcon from '../assets/images/html-5.svg';
import JavaIcon from '../assets/images/Java.svg';
import jsIcon from '../assets/images/JS.svg';
import phpIcon from '../assets/images/php.svg';
import pythonIcon from '../assets/images/python.svg';
import reactIcon from '../assets/images/react.svg';
import symfonyIcon from '../assets/images/symfony.svg';
import jsonIcon from '../assets/images/json.svg';
import tailwindIcon from '../assets/images/tailwind.svg';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const skillIcons = [htmlIcon, phpIcon, jsIcon, JavaIcon, pythonIcon, reactIcon, symfonyIcon, jsonIcon, tailwindIcon];

const ProgressBar = ({language, proficiency, colorClass}) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-{#44E5E7} font-semibold">{language}</span>
                <span className="text-[#44E5E7] font-semibold">{proficiency}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                    className={`h-4 rounded-full ${colorClass}`}
                    style={{width: `${proficiency}%`}}
                ></div>
            </div>
        </div>
    );
};

const Competences = () => {
    const skills = [
        {name: 'HTML-CSS', level: 70},
        {name: 'PHP', level: 70},
        {name: 'JS', level: 50},
        {name: 'Java', level: 60},
        {name: 'Python', level: 50}
    ];

    const frameworks = [
        {name: 'ReactJS', level: 60},
        {name: 'Symfony', level: 80},
        {name: 'JavaFX', level: 70},
        {name: 'JWT', level: 60},
        {name: 'TailwindCSS', level: 40}
    ];

    const scrollContainer = useRef(null);

    const goLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    const goRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({
                left: 200, // Ajustez cette valeur
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div   className="bg-[#173753] bg-center flex flex-col justify-between">


            <div className="text-[#44E5E7] p-5 mx-5 md:mx-20 flex-grow">
                    <h2 className="text-4xl font-bold mb-6">Compétences</h2>
                    <div className="flex flex-col md:flex-row md:space-x-10">
                        <div className="flex-1">
                            <h3 className="text-3xl mb-3">Langages</h3>
                            {skills.map((skill) => (
                                <ProgressBar language={skill.name} proficiency={skill.level} key={skill.name}
                                             colorClass="bg-[#2892D7]"/>
                            ))}
                        </div>
                        <div className="flex-1 mt-5 md:mt-0">
                            <h3 className="text-3xl mb-3">Frameworks</h3>
                            {frameworks.map((framework) => (
                                <ProgressBar language={framework.name} proficiency={framework.level}
                                             key={framework.name}
                                             colorClass="bg-[#2892D7]"/>
                            ))}
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="relative flex items-center justify-center">
                            <button onClick={goLeft} aria-label="Précédent"
                                    className="w-12 h-12 bg-neutral-900 border-3 rounded-full flex justify-center items-center hover:bg-green-600">
                                <FontAwesomeIcon icon={faArrowLeft} className="text-white"/>
                            </button>
                            <div className="flex overflow-x-scroll hide-scroll-bar max-w-96" ref={scrollContainer}>
                                <div className="flex flex-nowrap">
                                    {skillIcons.map((icon, index) => (
                                        <img key={index} src={icon} alt="Compétence"
                                             className="inline-block w-20 h-20 mx-2 rounded-lg"/>
                                    ))}
                                </div>
                            </div>
                            <button onClick={goRight} aria-label="Suivant"
                                    className="w-12 h-12 bg-neutral-900 border-3 rounded-full ml-4 hover:bg-green-600">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#00BFFF] -mb-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                    <path fill="#173753" fill-opacity="1" d="M0,224L120,202.7C240,181,480,139,720,133.3C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            </div>

        </>
    );
}

export default Competences;
