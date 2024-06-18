import Header from "./components/Header";
import ScrollPage from "./components/ScrollPage";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Questions from "./components/questions";


function App() {
  return (

   <div className="w-[80%] h-[200px]   mx-auto">
     <Header/>
       <Main/>
       <ScrollPage/>
       <Questions/>
       <Footer/>
   </div>
  );
}

export default App;
