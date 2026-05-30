import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { AtlasMap } from '~/components/AtlasMap'
import { featuredScenes, type FeaturedScene } from '~/data/featuredScenes'

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
        className="scene-arrow scene-arrow-left"
        aria-label="Show previous featured scene"
        onClick={showPreviousScene}
      />

      <button
        type="button"
        className="scene-arrow scene-arrow-right"
        aria-label="Show next featured scene"
        onClick={showNextScene}
      />

      <section
        className="relative z-2 flex min-h-screen w-[min(560px,calc(100%-32px))] flex-col justify-center gap-6 py-14 pr-0 pl-[clamp(16px,6vw,88px)] max-[760px]:min-h-[100svh] max-[760px]:w-full max-[760px]:justify-end max-[760px]:gap-0 max-[760px]:p-3.5"
        aria-label="Featured place"
      >
        <div className="w-[min(100%,520px)] rounded border border-[rgba(24,23,21,0.14)] bg-[linear-gradient(90deg,rgba(246,244,237,0.96),rgba(246,244,237,0.82)),linear-gradient(180deg,rgba(127,36,49,0.08),transparent_44%)] px-8 py-[30px] shadow-[0_24px_72px_rgba(24,23,21,0.18)] backdrop-blur-[14px] max-[760px]:flex max-[760px]:h-[33svh] max-[760px]:min-h-[220px] max-[760px]:w-full max-[760px]:flex-col max-[760px]:justify-center max-[760px]:overflow-hidden max-[760px]:px-5 max-[760px]:py-4">
          <h1 className="m-0 max-w-[10ch] font-serif text-[clamp(4rem,9vw,7rem)] leading-[0.88] font-medium max-[760px]:text-[clamp(2.45rem,12vw,3.35rem)]">
            Eric Krenz
          </h1>
          <p className="mt-[18px] max-w-[30rem] text-[0.88rem] leading-[1.55] font-bold tracking-[0.08em] text-(--text) uppercase max-[760px]:mt-2 max-[760px]:text-[0.68rem] max-[760px]:leading-[1.35]">
            Software Engineer, World Traveller, Amateur Sommelier
          </p>
          <div
            className="my-0 mt-[26px] mb-[22px] h-[3px] w-[86px] bg-(--accent) max-[760px]:mt-3 max-[760px]:mb-2.5 max-[760px]:h-0.5 max-[760px]:w-16"
            aria-hidden="true"
          />
          <p className="mb-2.5 text-[0.78rem] font-bold tracking-[0.12em] text-(--accent) uppercase max-[760px]:mb-1.5 max-[760px]:text-[0.66rem]">
            Featured place
          </p>
          <h2 className="m-0 max-w-[14ch] font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[0.96] font-medium max-[760px]:text-[clamp(1.35rem,6vw,2rem)]">
            {scene.title}
          </h2>
          <p className="mt-2.5 max-w-[30rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.35] text-(--muted) max-[760px]:mt-1.5 max-[760px]:text-[0.92rem] max-[760px]:leading-[1.28]">
            {scene.subtitle}
          </p>
        </div>
      </section>
    </main>
  )
}
