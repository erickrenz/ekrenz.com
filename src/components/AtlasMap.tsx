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
      className="atlas-map"
      aria-label={`Map centered on ${scene.title}`}
    />
  )
}
