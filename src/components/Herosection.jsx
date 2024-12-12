import { useEffect, useState } from 'react'
import { Star, Play } from 'lucide-react'
import girl from "../images/girl.png"
import girl2 from "../images/girl2.jpg"
import girl3 from "../images/girl3.jpg"
import Herosectiontext from './Herosectiontext'

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="relative min-h-[600px] w-full overflow-hidden bg-white px-4 py-20">
            {/* Floating Profile imgs */}
            <div className="hidden md:flex absolute inset-0">
                <div
                    className={`absolute left-[10%] top-[20%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-x-[-100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div
                    className={`absolute right-[15%] top-[15%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-x-[100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl2}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div
                    className={`absolute bottom-[30%] left-[15%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-y-[100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl3}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div
                    className={`absolute bottom-[25%] right-[10%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-y-[100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
            </div>

            {/* Main Content */}
            <Herosectiontext />
            <div className="hidden md:flex absolute inset-0">
                <div
                    className={`absolute left-[10%] top-[20%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-x-[-100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div
                    className={`absolute right-[15%] top-[15%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-x-[100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl2}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div
                    className={`absolute bottom-[30%] left-[15%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-y-[100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl3}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
                <div
                    className={`absolute bottom-[25%] right-[10%] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'translate-y-[100px] opacity-0'
                        }`}
                >
                    <img
                        src={girl}
                        alt="Team member"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>

    )
}

