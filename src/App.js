import Feed from "./components/Feed";
import Header from "./components/Header";
import Data from "./context/contextapi";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import VideoDetails from "./Seperate/VideoDetails";
import SearchResult from "./components/SearchResult";
import { SkeletonTheme } from "react-loading-skeleton";
const App=()=>{
    return<>
   
       <Data>
       <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/search/:searchedelement" element={<SearchResult/>}/>
        <Route path="/individual/:id" element={<VideoDetails/>}/>
        </Routes>
        </BrowserRouter>
        </SkeletonTheme>
        </Data>
    
   
    </>
}
export default App;