import SocialLinks from "./SocialMediaLinks"

export default function TeamMember({ image, name, role, socials }) {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600 mt-1">{role}</p>
            <SocialLinks {...socials} />
        </div>
    )
}

