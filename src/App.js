import React from "react";
import Logo from './components/Logo';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Chart from './components/Chart';

function App(){
  return (
      <>
      <div className="row">
      <div className="col-4">
         <Logo/>
      </div>
      <div className="col-8">
         <div className="row">
           <Banner/>
           </div>
           <div className="row">
             <div className="col-6">
              <Skills/>
             </div>
             <div className="col-6">
              <Chart/>
             </div>
           </div>
         </div>
      </div>
      </>
  );
}
export default App;