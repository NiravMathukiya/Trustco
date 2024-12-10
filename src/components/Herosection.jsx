import { useEffect, useState } from 'react'
import { Star, Play } from 'lucide-react'
import girl from "../images/girl.png"
import girl2 from "../images/girl2.jpg"
import girl3 from "../images/girl3.jpg"

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
            <div className="relative mx-auto max-w-4xl text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    Find High-Potential
                    <br />
                    Customers with{' '}
                    <span className="text-[#0f766e]">Trustco.</span>
                </h1>
                <p className="mb-8 text-lg text-muted-foreground">
                    We provide sales teams and professionals with the knowledge, skill and
                    <br />
                    discipline they need to be 10x more successful.
                </p>
                <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className=" py-2 px-3  rounded-3xl bg-[#0f766e] hover:bg-[#115e59]">
                        Get Started
                    </button>
                    <button className="gap-2 flex items-center">
                        {/* <div className="h-6 w-6 rounded-full bg-[#0f766e]" /> */}
                        <Play className='h-8  w-8 py-2 px-2 rounded-full bg-[#0f766e]' /> Check Our Video
                    </button>
                </div>

                {/* Trustpilot Rating */}
                <div className="flex items-center justify-center gap-2">
                    <Star  
                        className="h-5 w-5 fill-current text-[#4abd36]"
                    />
                    TrustPilot
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="h-4 w-4 fill-current text-yellow-400"
                            />
                        ))}
                    </div>
                    <span className="text-sm font-medium">
                        +900+ 5 Stars
                    </span>
                </div>
            </div>
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

