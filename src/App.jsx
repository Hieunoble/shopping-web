import { Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './assets/route'
import { DefauLayout } from './assets/components/Layout'
import { Fragment } from 'react'
import './App.scss'


function App() {
  // const [count, setCount] = useState(0)


  return (
    <div className='App'>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component

          let Layout = DefauLayout

          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />)
        })}
      </Routes>
    </div>
  )
}

export default App
