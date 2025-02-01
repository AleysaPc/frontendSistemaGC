import { Navigation } from "../components/Navigation"; //4
import Sidebar from "../Sidebar/Sidebar";
import Header from "../components/Headers";

function Home (){
    return(
       <><Header /><Sidebar /><Navigation />
       </>
    )
}
export default Home;