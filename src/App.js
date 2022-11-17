import React, { useState, Component } from "react";
import Navigation from "./components/navigation/Navigation"
import FaceRecognition from './components/facerecognition/FaceRecognition'
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";

// Clarifai API
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: 'a1f4face13fa48c781901f001a17c679'
});

function App() {

  const [state, setState] = useState({
    input: '',
    imageUrl: ''
  })

  const onInputChange = (event) => {
    setState(prevState => (
      {
      ...prevState, 
      input: event.target.value
    }))
  }

  const onButtonSubmit = () => {
    setState(prevState => ({
      ...prevState,
      imageUrl: prevState.input
    }))

    console.log(state.imageUrl)

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        state.input)
      .then((response) => {
        console.log(response)
      },
      function(err) {
        console.log(err)
      }
    )
  }

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
         />
      <FaceRecognition imageUrl={state.imageUrl}/>
    </div>
  );
}

export default App;
