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
    <div ref={countRef} className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function StatCounter() {
  const stats = [
    { value: 65, label: 'Generate sales', suffix:"M" },
    { value: 58, label: 'Grew revenue', suffix: '%' },
    { value: 12, label: 'Countries' },
    { value: 16, label: 'Grew customers', suffix: 'k+' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
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