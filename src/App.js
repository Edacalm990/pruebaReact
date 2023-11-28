import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boton:0,
    };
  }
  add() {
    let r=this.state.boton+1;
    this.setState({boton:r});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.boton}</h2>
          <Botoncillo click={()=>this.add()}></Botoncillo>
          <Botoncillo click={()=>this.add()}></Botoncillo>
          <Botoncillo click={()=>this.add()}></Botoncillo>
          <Botoncillo click={()=>this.add()}></Botoncillo>
          <Botoncillo click={()=>this.add()}></Botoncillo>
        </header>
      </div>
    );
  }
}
function Botoncillo(props) {
  const [pulsado, setpulsado] = useState(false);
  const [color, setColor] = useState('secondary')
  let clase='btn btn-'+color;
  function pulsar(){
    if(!pulsado) {
      props.click();
      setColor('danger');
    }
    setpulsado(true);
  }

  return (
    <button type='button' className={clase} onClick={()=>pulsar()}></button>
  );
}
export default App;

