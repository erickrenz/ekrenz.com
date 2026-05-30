import { useEffect, useRef } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import type { FeaturedScene } from '~/data/featuredScenes'

type AtlasMapProps = {
  scene: FeaturedScene
}

const mobileQuery = '(max-width: 760px)'

const atlasMapClassName =
  "absolute inset-0 bg-[#d9ddd7] after:absolute after:inset-0 after:z-1 after:pointer-events-none after:content-[''] after:bg-[linear-gradient(90deg,rgba(236,233,225,0.92),rgba(236,233,225,0.2)_52%,rgba(236,233,225,0.04)),linear-gradient(0deg,rgba(236,233,225,0.58),transparent_42%)] max-[760px]:after:bg-[linear-gradient(0deg,rgba(236,233,225,0.94),rgba(236,233,225,0.34)_72%,rgba(236,233,225,0.08)),linear-gradient(90deg,rgba(236,233,225,0.48),transparent)]"

export function AtlasMap({ scene }: AtlasMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<Map | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return
    }

    mapRef.current = new Map({
      target: containerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat(scene.center),
        zoom: scene.zoom,
        minZoom: 3,
        maxZoom: 18,
      }),
    })

    return () => {
      mapRef.current?.setTarget(undefined)
      mapRef.current = null
    }
  }, [scene.center, scene.zoom])

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileQuery)

    const updateMapFrame = () => {
      const map = mapRef.current
      const view = map?.getView()

      if (!map || !view) {
        return
      }

      view.padding = mediaQuery.matches
        ? [0, 0, Math.round(window.innerHeight / 3), 0]
        : [0, 0, 0, 0]
      map.updateSize()
    }

    updateMapFrame()
    window.addEventListener('resize', updateMapFrame)
    mediaQuery.addEventListener('change', updateMapFrame)

    return () => {
      window.removeEventListener('resize', updateMapFrame)
      mediaQuery.removeEventListener('change', updateMapFrame)
    }
  }, [])

  useEffect(() => {
    const view = mapRef.current?.getView()

    if (!view) {
      return
    }

    view.animate({
      center: fromLonLat(scene.center),
      zoom: scene.zoom,
      duration: 600,
    })
  }, [scene.center, scene.zoom])

  return (
    <div
      ref={containerRef}
      className={atlasMapClassName}
      aria-label={`Map centered on ${scene.title}`}
    />
  )
}
