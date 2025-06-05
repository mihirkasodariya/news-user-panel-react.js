
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articles = [
  {
    date: "February 12, 2025",
    category: "ARTIFICIALINTELLIGENCE",
    title: "The AI Revolution: Transforming Digital Commu...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hkHSehHTxkxZZaQgVO2PjxeEH170tx.png",
    link: "#",
  },
  {
    date: "February 12, 2025",
    category: "ARTIFICIALINTELLIGENCE",
    title: "YouTube's AI Revolution: Transforming Global ...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hkHSehHTxkxZZaQgVO2PjxeEH170tx.png",
    link: "#",
  },
  {
    date: "February 12, 2025",
    category: "MACHINELEARNING",
    title: "The Reality Behind DeepSeek's AI Model: Innov...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hkHSehHTxkxZZaQgVO2PjxeEH170tx.png",
    link: "#",
  },
  {
    date: "February 12, 2025",
    category: "MACHINELEARNING",
    title: "The Evolution of AI in Predicting Sports Outc...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hkHSehHTxkxZZaQgVO2PjxeEH170tx.png",
    link: "#",
  },
]

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-7 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-1 shadow-lg transition-all hover:bg-gray-50"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  )
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-7 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-1 shadow-lg transition-all hover:bg-gray-50"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  )
}

export function FeaturedSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="relative px-8">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="px-3">
            <div to={article.link}>
              <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <img src={article.image || "/placeholder.svg"} alt={article.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <span className={`text-xs px-2 py-1 rounded ${article.category === "MACHINELEARNING" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 text-lg font-semibold">{article.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
