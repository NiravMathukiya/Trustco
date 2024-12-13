import React from 'react'
import { Users , LayoutList , Globe , Headphones , Cloud , Zap , Video } from 'lucide-react'; 

const integrations = [
    { icon: <Users size={32} />, alt: 'Microsoft Teams' },
    { icon: <LayoutList size={32} />, alt: 'Trello' },
    { icon: <Globe size={32} />, alt: 'Google' },
    { icon: <Headphones size={32} />, alt: 'Zendesk' },
    { icon: <Cloud size={32} />, alt: 'Azure' },
    { icon: <Zap size={32} />, alt: 'Zapier' },
    { icon: <Video size={32} />, alt: 'Zoom' },
];

const Integrationcardmain = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Integrate with your existing<br />tools in a few clicks.
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Over 250+ integrations
                        </p>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-7 gap-4 md:gap-6 mb-8">
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
                            >
                                {integration.icon}
                                {/* <img
                                    alt={integration.alt}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                /> */}
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm">
                            See all apps and extensions
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Integrationcardmain



const IntegrationCard = ({ icon, alt }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
            <img src={icon} alt={alt} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
        </div>
    );
};    