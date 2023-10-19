import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Firework from './Firework';

const happyBirthday = "HAPPY BIRTHDAY!"

const malak = "MALAK"

const messages = [
   "كل عام وانتي بخير مي، اتمنى لك الصحة والعافية.",

   "ياخي، انتي من الطف الناس يلي تعرفت عليهم في هذه السنة.",

   "لما اشوف شعار منك، حرفيا اترك كل شيء واجي اكلمك :)",

   `شكرا لك على كل شيء...
   على وجودك، على اهتمامك، انتي فعلا شخص رهيب`,

   "الله يحفظك ويوفقك في دراستك وحياتك ومستقبلك.",

   `اعرف انها هدية بسيطة جدا وماتكلف شيء، لكن للأسف هذا يلي اقدر اقدمه في الوقت الحالي.
   كان ودي ارسل لك هدية وكذا، لكن اتوقع بيكون شيء غريب مرا اذا سألت عن سكنك، فسويتلك هدية الكترونية بسيطة.`,

   "ان شاء الله تعجبك، ولو شوي بس.",

   "الصراحة، كنت ناوي اسوي اشياء اكثر مثل العاب والغاز واخلي موسيقى وكذا، لكن للأسف، بسبب ضيق الوقت بين الدراسة والشغل ماقدرت اسويها.",

   "وبس، هذي هي الهدية.",

   "شكرا لك على وجودك. اتمنى لك الخير والسعادة3>",
]




function App() {

  let [myage, setmyage] = useState(true)
  let [mypara, setmypara] = useState(true);


  
  let [numOfMessage, setnumOfMessage] = useState(1)

  let [mymessage, setmymessage] = useState(messages[0]);



  let myMainMessage = [""]

  setTimeout(() => {
    setmyage(false)
  }, 3200)


    setTimeout(() => {
      setmypara(false)
    },4250)

    
   

    const message = messages[numOfMessage];
    let i = 0;
    
    function logCharacters() {

      if (i < message.length) {
        myMainMessage.push(message[i]);
        setmymessage(myMainMessage.join(""));
 
        i++;
        setTimeout(logCharacters, 50);
        setnumOfMessage(numOfMessage + 1)
      } 

     
    }





  return (
    <div className="App">
    
    <div className="myMianAgeDiv">
       <div className="mainAge-div" id="age1" color=''> 1 </div>
       {myage ? <div className="mainAge-div" id="age2"> 6 </div> : <div className="mainAge-div" id="age3"> 7 </div>}
  
       {!mypara && 
       <div className='myMainPara-div'>
        <div>
          <p className='birthday-para' style={{ justifyContent:"center"}}>
            {happyBirthday.split("").map((letter, num) => <p id={ num > 9 ? 'myPara-'+(num - 9) : 'myPara-'+num}>{letter}</p>)}
          </p>
          <p className='birthday-para' id='para-2' style={{ justifyContent:"center"}}>
            {malak.split("").map((letter, num) => <p id={ num > 9 ? 'myPara-'+(num - 9) : 'myPara-'+num}>{letter}</p>)}
          </p>
        </div>

        <div className='myMessageDiv'>
        <p className='myPara1'>{mymessage} </p>

        {numOfMessage <= 9 && <button className="myButton" onClick={logCharacters}> التالي </button>}
        </div>

       
       
      </div>}
     
     
      </div>
      <Firework />
    </div>
  );
}

export default App;
