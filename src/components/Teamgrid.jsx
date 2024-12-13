import TeamMember from "./TeamMember"

export default function TeamGrid() {
    const teamMembers = [
        {
            name: "Amanda Waller",
            role: "Co-Founder",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        },
        {
            name: "Andrea Hirata",
            role: "Director of People",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        },
        {
            name: "Hosuh Yamada",
            role: "Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        },
        {
            name: "Sergio Tuino",
            role: "Art Director",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        },
        {
            name: "Jerry Watson",
            role: "Head of Marketing",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        },
        {
            name: "Bagaskara",
            role: "Human Resources",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        },
        {
            name: "Kartono Aji",
            role: "Designer",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        },
        {
            name: "Susan Payne",
            role: "Developer",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
            socials: {
                instagram: "#",
                website: "#",
                linkedin: "#"
            }
        }
    ]

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Amazing Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </section>
    )
}

