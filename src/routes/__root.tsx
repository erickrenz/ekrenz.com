/// <reference types="vite/client" />

import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import appStyles from '~/styles/global.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        content:
          'A personal atlas about geography, culture, travel, food, wine, and exploration.',
      },
      { title: 'Eric Krenz' },
    ],
    links: [
      { rel: 'stylesheet', href: appStyles },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="min-h-full bg-[#ece9e1]">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-full bg-[#ece9e1] text-[#181715] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
