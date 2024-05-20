import React from 'react';
import myPhoto from '../assets/images/Benjamin.png';

const Presentation = () => {
    return (

        <div    className="bg-[#00BFFF] bg-center flex flex-col justify-between">



        <div className="  flex flex-col justify-between">
                <div className="text-[#1B4353] p-5 mx-4 md:mx-20 flex-grow">
                    <div className="flex flex-col md:flex-row items-center justify-between h-full">
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
                            <div className="flex mt-5 space-x-10">
                                <a href="https://github.com/benji28000" target={"_blank"} rel={"noreferrer"}
                                   className="hover:text-white">
                                    {/* Icône GitHub */}
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                         viewBox="0 0 48 48">
                                        <path
                                            d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/benjamin-perez-dev/" target={"_blank"}
                                   rel={"noreferrer"} className="hover:text-gray-600">
                                    {/* Icône LinkedIn */}
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                         viewBox="0 0 48 48">
                                        <path fill="#0288D1"
                                              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                                        <path fill="#FFF"
                                              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                    </svg>
                                </a>
                            </div>



                        </div>

                    </div>


                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mb-2">
                <path fill="#173753" fill-opacity="1" d="M0,96L120,85.3C240,75,480,53,720,48C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>

)
    ;
};

export default Presentation;
