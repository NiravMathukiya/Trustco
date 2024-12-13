export default function Headingtextofherosection({ text, highlightedText }) {
    return (
      <h1 className="text-2xl w-1/2 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        {text}{" "}
        <span className="text-yellow-400">{highlightedText}</span>
      </h1>
    )
  }
  
  