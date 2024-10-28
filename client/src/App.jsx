// App.js
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Sidebar from "./components/Sidebar";

const App = () => (
  <div className="min-h-screen flex">
    <Sidebar />
    <div className="flex-1 ml-60"> {/* Adjusted margin to make space for sidebar */}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  </div>
);

export default App;
