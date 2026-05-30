import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { AtlasMap } from '~/components/AtlasMap'
import { featuredScenes, type FeaturedScene } from '~/data/featuredScenes'

const sceneArrowClassName =
  "fixed top-1/2 z-3 h-18 w-12 -translate-y-1/2 cursor-pointer rounded border border-transparent bg-transparent text-[#181715] before:absolute before:top-1/2 before:left-1/2 before:h-3.5 before:w-3.5 before:border-t-2 before:border-l-2 before:border-current before:content-[''] hover:border-[rgba(93,90,83,0.24)] hover:bg-[rgba(93,90,83,0.18)] focus-visible:border-[rgba(93,90,83,0.24)] focus-visible:bg-[rgba(93,90,83,0.18)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#181715] max-[760px]:h-14 max-[760px]:w-11"

const serifClassName = "[font-family:Georgia,'Times_New_Roman',serif]"

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const scene: FeaturedScene = featuredScenes[sceneIndex]

  useEffect(() => {
    setSceneIndex(Math.floor(Math.random() * featuredScenes.length))
  }, [])

  const showPreviousScene = () => {
    setSceneIndex((currentIndex) =>
      currentIndex === 0 ? featuredScenes.length - 1 : currentIndex - 1,
    )
  }

  const showNextScene = () => {
    setSceneIndex((currentIndex) =>
      currentIndex === featuredScenes.length - 1 ? 0 : currentIndex + 1,
    )
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        showPreviousScene()
      }

      if (event.key === 'ArrowRight') {
        showNextScene()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AtlasMap scene={scene} />

      <button
        type="button"
        className={`${sceneArrowClassName} left-4 before:-translate-x-[35%] before:-translate-y-1/2 before:-rotate-45 max-[760px]:left-3.5`}
        aria-label="Show previous featured scene"
        onClick={showPreviousScene}
      />

      <button
        type="button"
        className={`${sceneArrowClassName} right-4 before:-translate-x-[65%] before:-translate-y-1/2 before:rotate-[135deg] max-[760px]:right-3.5`}
        aria-label="Show next featured scene"
        onClick={showNextScene}
      />

      <section
        className="relative z-2 flex min-h-screen w-[min(560px,calc(100%-32px))] flex-col justify-center gap-6 py-14 pr-0 pl-[clamp(16px,6vw,88px)] max-[760px]:min-h-[100svh] max-[760px]:w-full max-[760px]:justify-end max-[760px]:gap-0 max-[760px]:p-3.5"
        aria-label="Featured place"
      >
        <div className="flex w-[min(100%,520px)] flex-col rounded border border-[rgba(24,23,21,0.14)] bg-[linear-gradient(90deg,rgba(246,244,237,0.96),rgba(246,244,237,0.82)),linear-gradient(180deg,rgba(127,36,49,0.08),transparent_44%)] px-8 py-[30px] shadow-[0_24px_72px_rgba(24,23,21,0.18)] backdrop-blur-[14px] max-[760px]:h-[33svh] max-[760px]:min-h-[220px] max-[760px]:w-full max-[760px]:justify-between max-[760px]:overflow-hidden max-[760px]:px-5 max-[760px]:py-[18px]">
          <div>
            <h1 className={`m-0 max-w-[10ch] ${serifClassName} text-[clamp(4rem,9vw,7rem)] leading-[0.88] font-medium max-[760px]:text-[clamp(2.9rem,13vw,3.75rem)]`}>
              Eric Krenz
            </h1>
            <p className="mt-[18px] max-w-[30rem] text-[0.88rem] leading-[1.55] font-bold tracking-[0.08em] text-[#181715] uppercase max-[760px]:mt-2.5 max-[760px]:text-[0.7rem] max-[760px]:leading-[1.38]">
              Software Engineer, World Traveller, Amateur Sommelier
            </p>
          </div>
          <div
            className="my-0 mt-[26px] mb-[22px] h-[3px] w-[86px] bg-[#7f2431] max-[760px]:mt-0 max-[760px]:mb-0 max-[760px]:h-0.5 max-[760px]:w-[72px]"
            aria-hidden="true"
          />
          <div>
            <p className="mb-2.5 text-[0.78rem] font-bold tracking-[0.12em] text-[#7f2431] uppercase max-[760px]:mb-1.5 max-[760px]:text-[0.68rem]">
              Featured place
            </p>
            <h2 className={`m-0 max-w-[14ch] ${serifClassName} text-[clamp(2rem,4vw,3.25rem)] leading-[0.96] font-medium max-[760px]:text-[clamp(1.45rem,6vw,2rem)]`}>
              {scene.title}
            </h2>
            <p className="mt-2.5 max-w-[30rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.35] text-[#5d5a53] max-[760px]:mt-1.5 max-[760px]:text-[0.94rem] max-[760px]:leading-[1.3]">
              {scene.subtitle}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
