// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// // import { sign } from 'react';

// function App() {
//   const [disp, setdisp] = useState('');
//   const [fval, setfval] = useState('');
//   const [sign, setsign] = useState('');

//   const calc = (s) => {
//     setsign(s);
//     setfval(disp);
//     setdisp();
//   }

//   const ans = () => {
//     if (sign=='+') {
//       setdisp(parseFloat(fval)+parseFloat(disp));
//     }
//   }
//   return (
//     <div className="App">
//       <input type="text" name=""id='' value={disp} /><br />
//       <input type="button" value="1" onClick={() => { setdisp(disp + 1) }} />
//       <input type="button" value="2" onClick={() => { setdisp(disp + 2) }} />
//       <input type="button" value="3" onClick={() => { setdisp(disp + 3) }} /><br />
//       <input type="button" value="4" onClick={() => { setdisp(disp + 4) }} />
//       <input type="button" value="5" onClick={() => { setdisp(disp + 5) }} />
//       <input type="button" value="6" onClick={() => { setdisp(disp + 6) }} /><br />
//       <input type="button" value="7" onClick={() => { setdisp(disp + 7) }} />
//       <input type="button" value="8" onClick={() => { setdisp(disp + 8) }} />
//       <input type="button" value="9" onClick={() => { setdisp(disp + 9) }} /><br />
//       <input type="button" value="+" onClick={() => { calc('+') }} />
//       <input type="button" value="-" onClick={() => { calc('-') }} />
//       <input type="button" value="=" onClick={() => {ans() }} /><br/>
//       <input type="button" value="*" onClick={() => { calc('*') }} />
//       <input type="button" value="/" onClick={() => { calc('/') }} />
//       <input type="button" value="." onClick={() => { calc('.') }} />
 



//     </div>
//   );
// }

// export default App;


// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: "0",
//       equation: ""
//     }
//     this.numInput = this.numInput.bind(this);
//     this.operInput = this.operInput.bind(this);
//     this.decInput = this.decInput.bind(this);
//     this.clearInput = this.clearInput.bind(this);
//     this.calculate = this.calculate.bind(this);
//   }

//   numInput(e) {
//     if (this.state.equation.match(/[0-9\.]$/) && !this.state.equation.includes("=")) {
//       if (this.state.equation.match(/[+\-*\/]/) == null) {
//         let val = this.state.equation + e.currentTarget.value;
//         this.setState({
//           display: val,
//           equation: val
//         });
//       } else {
//         this.setState({
//           display: this.state.display + e.currentTarget.value,
//           equation: this.state.equation + e.currentTarget.value
//         });
//       }
//     } else if (this.state.equation.match(/[+\-*\/]$/)) {
//       let val = this.state.equation + e.currentTarget.value;
//       this.setState({
//         display: e.currentTarget.value,
//         equation: val
//       });
//     } else if (this.state.display === "0" && e.currentTarget.value !== "0" || this.state.equation.includes("=")) {
//       this.setState({
//         display: e.currentTarget.value,
//         equation: e.currentTarget.value
//       });
//     }
//   }

//   operInput(e) {
//     if (this.state.equation.includes("=")) {
//       let val = this.state.display;
//       val += e.currentTarget.value;
//       this.setState({
//         equation: val
//       });
//     } else {
//       if (this.state.equation != "" && this.state.equation.match(/[*\-\/+]$/) == null) {
//         let val = this.state.equation;
//         val += e.currentTarget.value;
//         this.setState({
//           equation: val
//         });
//       } else if (this.state.equation.match(/[*\-\/+]$/) != null) {
//         let val = this.state.equation;
//         val = val.substring(0, (val.length - 1));
//         val += e.currentTarget.value;
//         this.setState({
//           equation: val
//         });
//       }
//     }
//   }

//   decInput(e) {
//     if (this.state.equation == "" || this.state.equation.includes("=")) {
//       let val = '0.';
//       this.setState({
//         display: val,
//         equation: val
//       });
//     } else if (this.state.equation.match(/[+\-*\/]$/)) {
//       let val = '0.';
//       this.setState({
//         display: val,
//         equation: this.state.equation + val
//       });
//     } else if (!this.state.display.includes(".")) {
//       this.setState({
//         display: this.state.display + e.currentTarget.value,
//         equation: this.state.equation + e.currentTarget.value
//       });
//     }
//   }

//   clearInput() {
//     this.setState({
//       display: "0",
//       equation: ""
//     });
//   }

//   calculate() {
//     if (this.state.equation.includes("=")) {
//       let val = `${this.state.display} = ${this.state.display}`;
//       this.setState({
//         equation: val
//       });
//     } else if (this.state.equation != "" && this.state.equation.match(/[+\-*\/]/) != null && this.state.equation.match(/[+\-*\/]$/) == null) {
//       let result = Number.isInteger(eval(this.state.equation)) ? eval(this.state.equation) : parseFloat(eval(this.state.equation).toFixed(5));
//       let val = this.state.equation;
//       val += ` = ${result}`;
//       this.setState({
//         display: result,
//         equation: val
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="container">
//         <Display equation={this.state.equation} display={this.state.display} />
//         <Button id="clear" value="clear" display="AC" class="row-3 col-1" click={this.clearInput} />
//         <Button id="sign" value="+/-" display="±" class="row-3 col-2" />
//         <Button id="percent" value="%" display="%" class="row-3 col-3" /><br/>
//         <Button id="divide" value="/" display="÷" class="oper row-3 col-4" click={this.operInput} />
//         <Button id="seven" value="7" display="7" class="num row-4 col-1" click={this.numInput} />
//         <Button id="eight" value="8" display="8" class="num row-4 col-2" click={this.numInput} /><br/>
//         <Button id="nine" value="9" display="9" class="num row-4 col-3" click={this.numInput} />
//         <Button id="multiply" value="*" display="×" class="oper row-4 col-4" click={this.operInput} />
//         <Button id="four" value="4" display="4" class="num row-5 col-1" click={this.numInput} /><br/>
//         <Button id="five" value="5" display="5" class="num row-5 col-2" click={this.numInput} />
//         <Button id="six" value="6" display="6" class="num row-5 col-3" click={this.numInput} />
//         <Button id="subtract" value="-" display="−" class="oper row-5 col-4" click={this.operInput} /><br/>
//         <Button id="one" value="1" display="1" class="num row-6 col-1" click={this.numInput} />
//         <Button id="two" value="2" display="2" class="num row-6 col-2" click={this.numInput} />
//         <Button id="three" value="3" display="3" class="num row-6 col-3" click={this.numInput} /><br/>
//         <Button id="add" value="+" display="+" class="oper row-6 col-4" click={this.operInput} />
//         <Button id="zero" value="0" display="0" class="num row-7 col-1-2" click={this.numInput} />
//         <Button id="zero" value="0" display="0" class="num row-7 col-1-2" click={this.numInput} />

//         <Button id="decimal" value="." display="." class="num row-7 col-3" click={this.decInput} />
//         <Button id="equals" value="=" display="=" class="oper row-7 col-4" click={this.calculate} />
//       </div>
//     );
//   }
// }

// const Display = props => <div id="calc-display" className="row-1-2 col-1-4"><span id="eq">{props.equation}</span><span id="dis">{props.display}</span></div>;

// const Button = props => <button type="button" id={props.id} value={props.value} className={props.class} onClick={props.click}>{props.display}</button>;

// export default App;


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [b1,setb1] = useState('');
  const [b2,setb2] = useState('');
  const [b3,setb3] = useState('');
  const [b4,setb4] = useState('');
  const [b5,setb5] = useState('');
  const [b6,setb6] = useState('');
  const [b7,setb7] = useState('');
  const [b8,setb8] = useState('');
  const [b9,setb9] = useState('');
  
  const [All] = useState('');


   

  const [cnt,setcnt]=useState(0);
  const btn1 = () =>{
    if(cnt%2==0)
    {
      setb1('X');
      setcnt(cnt+1)

      alert("X is winner")

    }else
    {
      setb1('O');
      setcnt(cnt+1)

      alert("0 is winner")

    }
     if (cnt == 9) {
      alert("match is darw")
  }
  }
  const btn2 = () =>{
    if(cnt%2==0)
    {
      setb2('X');
      setcnt(cnt+1)

      // alert("X is winner")

    }else
    {
      setb2('O');
      setcnt(cnt+1)

      // alert("0 is winner")

    }
     if (cnt == 9) {
      // alert("match is darw")
  }
  }
  const btn3 = () =>{
    if(cnt%2==0)
    {
      setb3('X');
      setcnt(cnt+1)

      // alert("X is winner")

    }else
    {
      setb3('O');
      setcnt(cnt+1)

      // alert("0 is winner")

    }
     if (cnt == 9) {
      // alert("match is darw")
  }
  }
  const btn4 = () =>{
    if(cnt%2==0)
    {
      setb4('X');
      setcnt(cnt+1)
    }else
    {
      setb4('O');
      setcnt(cnt+1)
    }
  }
  const btn5 = () =>{
    if(cnt%2==0)
    {
      setb5('X');
      setcnt(cnt+1)
    }else
    {
      setb5('O');
      setcnt(cnt+1)
    }
  }
  const btn6 = () =>{
    if(cnt%2==0)
    {
      setb6('X');
      setcnt(cnt+1)
    }else
    {
      setb6('O');
      setcnt(cnt+1)
    }
  }
  const btn7 = () =>{
    if(cnt%2==0)
    {
      setb7('X');
      setcnt(cnt+1)
    }else
    {
      setb7('O');
      setcnt(cnt+1)
    }
  }
  const btn8 = () =>{
    if(cnt%2==0)
    {
      setb8('X');
      setcnt(cnt+1)
    }else
    {
      setb8('O');
      setcnt(cnt+1)
    }
  }
  const btn9 = () =>{
    if(cnt%2==0)
    {
      setb9('X');
      setcnt(cnt+1)
    }else
    {
      setb9('O');
      setcnt(cnt+1)
    }
  }
  return (
    <div className="App">

     <input type="button" value={b1} onClick={btn1}/>
     
     <input type="button" value={b2} onClick={btn2}/>
     <input type="button" value={b3} onClick={btn3}/><br/>
     <input type="button" value={b4} onClick={btn4}/>
     <input type="button" value={b5} onClick={btn5}/>
     <input type="button" value={b6} onClick={btn6}/><br/>
     <input type="button" value={b7} onClick={btn7}/>
     <input type="button" value={b8} onClick={btn8}/>
     <input type="button" value={b9} onClick={btn9}/><br/>

     <input type="button" value="clr" onclick="clr('');"></input>

    </div>
  );
}

export default App;


