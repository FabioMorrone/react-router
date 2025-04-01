import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PostList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"
import DefoultLayout from "./layout/DefoultLayout"




export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefoultLayout />}>
            <Route path='/' Component={HomePage} />
            <Route path='/PostList' Component={PostList} />
            <Route path='/ChiSiamo' Component={ChiSiamo} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

