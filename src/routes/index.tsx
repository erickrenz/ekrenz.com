import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { AtlasMap } from '~/components/AtlasMap'
import { featuredScenes, type FeaturedScene } from '~/data/featuredScenes'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [scene, setScene] = useState<FeaturedScene>(featuredScenes[0])

  useEffect(() => {
    const nextScene =
      featuredScenes[Math.floor(Math.random() * featuredScenes.length)]

    setScene(nextScene)
  }, [])

  return (
    <main className="home">
      <AtlasMap scene={scene} />

      <section className="intro" aria-label="Featured place">
        <p className="eyebrow">Personal atlas</p>
        <h1>Eric Krenz</h1>
        <p className="summary">
          Geography, culture, travel, food, wine, and exploration through
          places that keep pulling me back.
        </p>
        <div className="place">
          <p className="place-label">Featured scene</p>
          <h2>{scene.title}</h2>
          <p>{scene.subtitle}</p>
        </div>
      </section>
    </main>
  )
}
