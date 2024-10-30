import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Sidebar from "./components/Sidebar";

const App = () => (
  <div className="min-h-screen flex relative">
    
    {/* Sidebar on the left */}
    <Sidebar />

    {/* Main content area with background gradient spanning the entire width */}
    <div className="flex-1">
      {/* Navbar floating at the top */}
      <Navbar />

      {/* Background gradient applied to cover entire area */}
      <div className="min-h-screen pl-[130px] gradient-bg-welcome flex flex-col"> {/* Reduced pt-20 to pt-10 */}
        
        {/* Add padding around all inner content */}
        <div className="ml-12 pl-10 mt-0"> {/* Optional: Add margin-top to fine-tune the position */}
          <Welcome />
        </div>
        
        <div className="ml-12 pl-10">
          <Services />
        </div>
        
        <div className="ml-12 pl-10">
          <Transactions />
        </div>
        
        <div className="ml-12 pl-10">
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;

/* 
  _    _               _____   _  __    _____               _  __  _______ 
 | |  | |     /\      / ____| | |/ /   |  __ \      /\     | |/ / |__   __|
 | |__| |    /  \    | |      | ' /    | |__) |    /  \    | ' /     | |   
 |  __  |   / /\ \   | |      |  <     |  ___/    / /\ \   |  <      | |   
 | |  | |  / ____ \  | |____  | . \    | |       / ____ \  | . \     | |   
 |_|  |_| /_/    \_\  \_____| |_|\_\   |_|      /_/    \_\ |_|\_\    |_|   
     
 
              "Empowering Innovation, One Hack at a Time!"
 
 
*/
 