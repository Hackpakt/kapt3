import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Sidebar from "./components/Sidebar";

const App = () => (
  <div className="min-h-screen flex">
    <Sidebar />
    <div className="flex-1 ml-60"> {/* Make space for sidebar */}
      <Navbar /> {/* Navbar will now go below Sidebar */}
      <div className="gradient-bg-welcome mt-16"> {/* Add margin to avoid overlap */}
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  </div>
);

export default App;
