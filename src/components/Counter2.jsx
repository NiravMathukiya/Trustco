import { useEffect, useState, useRef } from 'react'

function CountUp({ end, duration = 2000, label, suffix }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        const percentage = progress / duration
        setCount(Math.floor(end * percentage))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  return (
    <div ref={countRef} className="text-center mx-auto ">
      <div className="text-xl  text-primary mb-2 mx-auto text-center gap-4 justify-center ">
        <p className='text-5xl font-bold text-center'>{count}<span className='text-4xl '>{suffix}</span> </p>


      </div>
      <div className="text-gray-600  text-xs md:text-lg">{label}</div>
    </div>
  )
}

export default function StatCounter2() {
  const stats = [
    { value: 15, label: "Year's of experince", suffix: ' ' },
    { value: 23, label: 'satisfied clients around world', suffix: 'K+' },
    { value: 22, label: 'project completed in 22 countries', suffix: ' ' }
  ]

  return (
    <div className="grid grid-cols-3 gap-8 md:grid-cols-3 w-100 mx-4 text-center  py-16">
      {stats.map((stat, index) => (
        <CountUp
          key={index}
          end={parseFloat(stat.value)}
          label={stat.label}
          suffix={stat.suffix}
        />
      ))}
    </div>
  )
}