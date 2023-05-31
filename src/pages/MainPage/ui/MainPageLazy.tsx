import { lazy } from 'react'

export const MainPageLazy = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./MainPage')) }, 500)
}))
