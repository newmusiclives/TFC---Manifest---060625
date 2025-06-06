import { Route, Routes as RouterRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const Layout = lazy(() => import('./components/Layout'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
)

export const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </RouterRoutes>
    </Suspense>
  )
}
