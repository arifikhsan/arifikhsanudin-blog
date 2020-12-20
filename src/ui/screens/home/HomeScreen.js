import React from "react"
import PageLayout from "../../layouts/page-layout"
import SEO from "../../components/seo"
import BackgroundParticle from "./BackgroundParticle"
import anime from "animejs"
import { isServerSide } from "../../../utils/utils"

const HomeScreen = ({ location, siteTitle, locale }) => {

  const animeLetter = (letters) => {
    return [...letters].map((letter, index) => (
      <span key={index} className="letter">
        {letter}
      </span>
    ))
  }

  letterAnimation()

  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Homepage" />
      <BackgroundParticle />
      <div className="flex items-center justify-center h-full py-20 md:w-full">
        <div className="flex flex-col justify-center h-full py-6 -mt-8 md:text-center sm:mt-0 md:py-12">
          <div className="py-3 text-gray-900 font-display">
            <h1
              id="title"
              className="text-3xl font-bold tracking-tight text-gray-700"
            >
              Hello, my name is
            </h1>
            <h1
              id="name"
              className="mt-8 text-5xl font-black tracking-wide sm:text-6xl"
            >
              {animeLetter("Arif Ikhsanudin")}
            </h1>
          </div>
          <div className="mt-8 text-2xl font-medium text-gray-800">
            <h2 id="todo">
              I am a <span className="font-bold">confident</span> Ruby on Rails
              Backend Developer
            </h2>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

const letterAnimation = () => {
  if (isServerSide()) return null

  anime
    .timeline({ loop: false })

    .add({
      targets: "#title",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: (el, i) => 150 * (i + 1),
    })

    .add({
      targets: "#name .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: (el, i) => 150 * (i + 1),
    })

    .add({
      targets: "#todo",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: (el, i) => 150 * (i + 1),
    })
}

export default HomeScreen
