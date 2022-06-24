import './App.css';
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import {GardenElement} from './components/GardenElement'
import {StructureElement} from './components/StructureElement'

function App() {
   const [backround, setBackground] = useState('#569A24');
   const [addableElement, setAddableElement ] = useState('apple');
   const [addableStructure, setAddableStructure ] = useState('house');
   const [ gardenElements, setGardenElements ] = useState([]);
   
   let defaultElements = [
      {
        name: 'apple',
        x: 570,
        y: 80
      },
      {
        name: 'avocado',
        x: 570,
        y: 300
      },
      {
        name: 'beet',
        x: 570,
        y: 400
      },
      {
        name: 'corn',
        x: 570,
        y: 500
      },
   ];

   const populateElements = () => {
      var elements = defaultElements.map((element, index) => {
        
        return <GardenElement type={element.name} key={index} x={element.x} y ={element.y}/>
      });
      setGardenElements(elements);
   }


   const changeBackground = (e) => {

    setBackground(e.target.value);
    // console.log(e.target.value);
   }
   const changeAddableElement = (e) => {
      setAddableElement(e.target.value);

      // addElement();
   }
   const addElement = () => {
      let existing = gardenElements;
      existing.push(<GardenElement type={addableElement} key={existing.length+1} x={50} y ={50}/>)
      // existingText.push(<li>{addableElement}</li>);
      setGardenElements([...existing]);
      
   }
   const changeAddableStructure = (e) => {
      setAddableStructure(e.target.value);
   }
   const addStructure = () => {
      alert('add structure'+ addableStructure);
   }
   useEffect(() => {

    populateElements();

   }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          POC for Garden Planner
        </p>
        <ul>
        </ul>
      </header>
        <div class="flex bg-gray-200">
          <div class=" m-2">
            <strong>GardenElement</strong>
            <select class="rounded-md p-2 m-3 bg-white" onChange={changeAddableElement}>
              <option value="apple">Apple</option>
              <option value="avocado">Avacado</option>
              <option value="banana">Banana</option>
              <option value="beet">Beet</option>
              <option value="broccoli">Broccoli</option>
              <option value="cabbage">Cabbage</option>
              <option value="carrot">Carrot</option>
              <option value="cauliflower">cauliflower</option>
              <option value="cherries">cherries</option>


            </select>
            <button class="bg-green-700 text-gray-200 p-2 rounded-md" onClick={addElement}>Add</button>
          </div>
        {/*texture*/}
          <div class=" m-2">
            <strong>Texture</strong>
            <select class="rounded-md p-2 m-3 bg-white" onChange={changeBackground}>
              <option value="#569A24">Grass</option>
              <option value="#E5B08F">Dryland</option>
              <option value="#B0813E">Sand</option>              
            </select>
          </div>
        {/*texture end*/}
      {/*buildings*/}
          <div class=" m-2">
            <strong>Structures</strong>
            <select class="rounded-md p-2 m-3 bg-white" onChange={changeAddableStructure}>
              <option value="house">House</option>
            </select>
            <button class="bg-green-700 text-gray-200 p-2 rounded-md" onClick={addStructure}>Add</button>
          </div>
          <div class=" m-3">
              <button class="bg-red-700 text-gray-200 p-2 m-2 rounded-md">Export to Image</button>
          </div>
        {/*end buildings*/}

        </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect width={window.innerWidth} height={window.innerHeight} fill={backround}/>
        </Layer>
        <Layer>
            
          <StructureElement type="house" />
          {gardenElements}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
