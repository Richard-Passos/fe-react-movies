/* Logic */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../../pages/detail/Detail";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import Home from "../../pages/home/Home";

export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}