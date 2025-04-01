import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={homePage} />
          <Route path='/PostList' Component={PostList} />
          <Route path='/ChiSiamo' Component={Lista} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
