import React from 'react';
import ClassCounter from '../src/components/classComponents/ClassCounter';
import HookCounter from  '../src/components/hooks/useState/HookCounter';
import HookCounterTwo from '../src/components/hooks/useState/HookCounterTwo';
import HookCounterThree from '../src/components/hooks/useState/HookCounterThree';
import HookCounterFour from '../src/components/hooks/useState/HookCounterFour';
import DisplayJSONData from '../src/components/displayJSONData/displayJSONData';
import DisplayDataURL from '../src/components/displayJSONData/displayDataURL'
import ImageGallery from '../src/components/imageGallery/imageGallery';
// Import for useEffect Examples
import UseEffectExampleOne from '../src/components/hooks/useEffect/useEffectExampleOne';
import CounterExampleClass from '../src/components/hooks/useEffect/counterExampleClass';
import UseEffectExampleTwo from '../src/components/hooks/useEffect/useEffectExampleTwo'
import ClassCompMouseOverIncrmt from '../src/components/hooks/useEffect/classCompMouseOverIncrmt';
import UseEffectExampleThree from '../src/components/hooks/useEffect/useEffectExampleThree';
import UseEffectExpleThreeContainer from '../src/components/hooks/useEffect/useEffectExpleThreeContainer';
import UseEffectExampleFour from '../src/components/hooks/useEffect/useEffectExampleFour';
import UseEffectFetchDataAxiosGetCall from './components/hooks/useEffect/useEffectFetchDataAxiosGetCall';
import UseEffectFetchDataAxiosPostCall from './components/hooks/useEffect/useEffectFetchDataAxiosPostCall';
import UseEffectFetchDataAxiosGetOnBtnClick from './components/hooks/useEffect/useEffectFetchDataAxiosGetOnBtnClick';

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <div >
      <Router>
           <div className="router-main-container">
            <div className="router-left-menu-section">
              <div>
                <Link to="/">Class Counter Examples</Link>
              </div>
              <div>
              <Link to="/">Hooks Counter Examples</Link>
              </div>
              <div>
                <Link to="/HookCounterTwo">HookCounterTwo</Link>
              </div>
              <div>
                <Link to="/HookCounterThree">HookCounterThree</Link>
              </div>
              <div>
                <Link to="/HookCounterFour">Hook Counter Four @Hooks</Link>
              </div>
              <div>
                <Link to="/DisplayJSONData">Display JSON Data</Link>
              </div>
              <div>
                <Link to="/DisplayDataURL">Display Data URL fetch</Link>
              </div>
              <div>
                <Link to="/ImageGallery">Image Gallery Examples</Link>
              </div>
              <h6>UseEffect Section</h6>
              <div>
                <Link to="/CounterExampleClass">1. Update the Browser title using class component</Link>
              </div>
              <div>
                <Link to="/UseEffectExampleOne">2. Counter using UseEffect</Link>
              </div>
              <div>
                <Link to="/UseEffectExampleTwo">3. Update the Browser title using UseEffect</Link>
              </div>
              <div>
                <Link to="/ClassCompMouseOverIncrmt">4. Class comp to increment counter on mouse over on screen</Link>
              </div>
              <div>
                <Link to="/UseEffectExampleThree">5. useEffect to increment counter on mouse over on screen</Link>
              </div>
              <div>
                <Link to="/UseEffectExampleThree">6. useEffect to increment counter on mouse over on screen</Link>
              </div>
              <div>
                <Link to="/UseEffectExpleThreeContainer">7. useEffect with cleanup using useEffect</Link>
              </div>
              <div>
                <Link to="/UseEffectExampleFour">8. useEffect for setTimeout examples</Link>
              </div>
              <div>
                <Link to="/UseEffectFetchDataAxiosGetCall">9. useEffect for Data Fetching using Axios Get Call</Link>
              </div>
              <div>
                <Link to="/UseEffectFetchDataAxiosPostCall">10. useEffect for Data Fetching using Axios Post Call</Link>
              </div>
              <div>
                <Link to="/UseEffectFetchDataAxiosGetOnBtnClick">11. useEffect for Data Fetching using Axios get call on Button click </Link>
              </div>
              <h6>UseContext Section</h6>
              <div>
                <Link to="/UseEffectFetchDataAxiosGetOnBtnClick">1. UseContext Example 1 </Link>
              </div>
            </div>
            <div className="router-right-menu-section">
            <Switch>
              <Route exact path='/' component={ClassCounter}></Route>
              <Route exact path='/about' component={HookCounter}></Route>
              <Route exact path='/HookCounterTwo' component={HookCounterTwo}></Route>
              <Route exact path='/HookCounterThree' component={HookCounterThree}></Route>
              <Route exact path='/HookCounterFour' component={HookCounterFour}></Route>
              <Route exact path='/DisplayJSONData' component={DisplayJSONData}></Route>
              <Route exact path='/DisplayDataURL' component={DisplayDataURL}></Route>
              <Route exact path='/ImageGallery' component={ImageGallery}></Route>
              <Route exact path='/CounterExampleClass' component={CounterExampleClass}></Route>
              <Route exact path='/UseEffectExampleOne' component={UseEffectExampleOne}></Route>
              <Route exact path='/UseEffectExampleTwo' component={UseEffectExampleTwo}></Route>
              <Route exact path='/ClassCompMouseOverIncrmt' component={ClassCompMouseOverIncrmt}></Route>
              <Route exact path='/UseEffectExampleThree' component={UseEffectExampleThree}></Route>
              <Route exact path='/UseEffectExpleThreeContainer' component={UseEffectExpleThreeContainer}></Route>
              <Route exact path='/UseEffectExampleFour' component={UseEffectExampleFour}></Route>
              <Route exact path='/UseEffectFetchDataAxiosGetCall' component={UseEffectFetchDataAxiosGetCall}></Route>
              <Route exact path='/UseEffectFetchDataAxiosPostCall' component={UseEffectFetchDataAxiosPostCall}></Route>
              <Route exact path='/UseEffectFetchDataAxiosGetOnBtnClick' component={UseEffectFetchDataAxiosGetOnBtnClick}></Route>
              <Route exact path='/UseEffectFetchDataAxiosGetOnBtnClick' component={UseEffectFetchDataAxiosGetOnBtnClick}></Route>
            </Switch>
            </div>
          </div>
       </Router>
       </div>
    <hr/>
      This is basic idea about react Hooks
      <div>
      <hr/>
      <hr/>
      </div>
    </div>
  );
}

export default App;
