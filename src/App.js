import './App.css';
import Header from './components/Header';
import ModelY from './assets/assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/assets/Desktop-SolarPanels.jpeg'
import Accessories from './assets/assets/Desktop-Accessories.jpg'
import ModelS from './assets/assets/Desktop-ModelS.jpeg'
import Model3 from './assets/assets/Desktop-Model3.jpeg'
import ModelX from './assets/assets/Desktop-ModelX.jpeg'
import SolarRoof from './assets/assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
      <Item
          title='Lowest Cost Solar Panels in America'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item
          title='Model S'
          desc='$69,420'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model 3'
          desc='Schedule a Touchless Test Drive'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
          id='model3'
        />
        <Item
          title='Model x'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model Y'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Solar for New Roofs'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Accessories'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Accessories}
          leftBtnTxt='SHOP NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
        />

      </div>
    </div>
  );
}

export default App;
