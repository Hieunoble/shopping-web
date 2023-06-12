import { Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './assets/route'
import { DefauLayout } from './assets/components/Layout'
import { Fragment, useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'


function App() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((storeData) => {
        const arrayStore = [...storeData.data]
        // console.log(arrayStore);
        setProductList(arrayStore)
        return storeData
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }, [])


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
