import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PostLists from "./pages/PostLists"
import PostList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"
import DefoultLayout from "./layout/DefoultLayout"




export default function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route Component={DefoultLayout}>

            <Route path="/" Component={HomePage} />
            <Route path="/PostLists" Component={PostLists} />
            <Route path="/PostLists" Component={PostList} />
            <Route path="/ChiSiamo" Component={ChiSiamo} />

          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

