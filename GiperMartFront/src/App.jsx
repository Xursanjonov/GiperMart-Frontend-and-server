import React from "react"
import { Routes, Route } from "react-router-dom"
import { MainLayout } from './layout/main-layout'
import { router } from "./router/router"
import { nanoid } from "nanoid"
import { NotFound } from "./components/notFound/notfound"
import { ShopSingle } from "./pages/shop/components/shopSingle"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          {router?.map(route => (
            <Route key={nanoid()} index={route.index ? false : true} path={route.path} element={route.component} />
          ))}
        <Route path="shopSingle/:id" element={<ShopSingle />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
