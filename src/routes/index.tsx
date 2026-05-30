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
        className="relative z-2 flex min-h-screen w-[min(520px,calc(100%-32px))] flex-col justify-center gap-[22px] py-14 pr-0 pl-[clamp(16px,6vw,88px)] max-[760px]:w-[min(calc(100%-28px),520px)] max-[760px]:justify-end max-[760px]:py-9 max-[760px]:pr-0 max-[760px]:pl-3.5"
        aria-label="Featured place"
      >
        <p className="text-[0.76rem] font-bold tracking-[0.12em] text-(--accent) uppercase">
          Personal atlas
        </p>
        <h1 className="max-w-[10ch] font-serif text-[clamp(4rem,11vw,8rem)] leading-[0.88] font-medium max-[760px]:text-[clamp(3.5rem,20vw,5rem)]">
          Eric Krenz
        </h1>
        <p className="max-w-[34rem] text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.55] text-(--muted)">
          Geography, culture, travel, food, wine, and exploration through
          places that keep pulling me back.
        </p>
        <div className="mt-[18px] w-[min(100%,410px)] rounded border border-(--line) border-l-4 border-l-(--accent) bg-(--surface) px-5 py-[18px] shadow-[var(--shadow)] backdrop-blur-md max-[760px]:w-full">
          <p className="text-[0.76rem] font-bold tracking-[0.12em] text-(--accent) uppercase">
            Featured scene
          </p>
          <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] leading-none font-medium">
            {scene.title}
          </h2>
          <p className="mt-2.5 leading-[1.45] text-(--muted)">
            {scene.subtitle}
          </p>
        </div>
      </section>
    </main>
  )
}
