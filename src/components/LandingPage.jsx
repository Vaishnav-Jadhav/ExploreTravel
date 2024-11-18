import '../components/LandingPage.css';
import NavBar from './NavBar';
import Main from './Main';



function LandingPage()
 {

  return(
     <>
       <div className='LandingPage w-full h-[670px] pt-10 font-["Neue_Montreal"]'>
        <NavBar/>
        <Main/>
       </div>
     </>
    
  )
}

export default LandingPage