import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import OpeningLetter from './OpeningLetter';
import woodBG from "./cc-bg.jpeg"

function App() {

    const [openingAnim, setOpeningAnim] = useState("initial")
    const [password, setPassword] = useState("");
    const [openMailboxes, setOpenMailboxes] = useState([]);
    const [letterAnim, setLetterAnim] = useState(false);
    const [letterText, setLetterText] = useState(false);

    useEffect(() => {
        if (password.toLowerCase() === "coatcheck" || password.toLowerCase() === "coat check") {
            setOpeningAnim("begin");
        }
    }, [password])

    const openMailbox = (num) => {
        setOpenMailboxes(prev => {
            const copy = [...prev];
            if (copy.indexOf(num) === -1) {
                return [...copy, num];
            } else {
                copy.splice(copy.indexOf(num), 1);
            }
            return [...copy];
        })
    }
    const startLetterAnim = () => {
        setLetterAnim(true);
        setTimeout(() => {
            setLetterText(true);
        }, 4000);
    }

    const openLetter = () =>{
        setOpeningAnim("closed")
    }
  return (
    <React.Fragment>
    {openingAnim !== "closed" && <div className="App">
        {openingAnim === "initial" && <h3 className='pass'>Hint: A joke you liked a lott on climb day 1.</h3>}
        {openingAnim === "initial" && <input className='pass' onChange={(e) => setPassword(e.target.value)}></input>}
        {openingAnim === "begin" && 
        <div className='main'>
            <div className='mailbox-container flex-row align-center'>
                <div id={openMailboxes.indexOf(1) !== -1 ? "mailbox-open" : "nullbox"} className='mailbox'>
                    <h3 className='mailbox-txt'>440 A</h3>
                    {openMailboxes.indexOf(1) !== -1 && <h3 className='mailbox-inner-txt'>nothing good</h3>}
                    <div onClick={() => openMailbox(1)} className='mailbox-top-detail'></div>
                    {openMailboxes.indexOf(1) !== -1 && <div className='m1'><div onClick={() => openMailbox(1)} className='mailbox-bottom-detail'></div></div>}
                </div>
                <div id={openMailboxes.indexOf(2) !== -1 ? "mailbox-open" : "nullbox"} className='mailbox'>
                    <h3 className='mailbox-txt'>440 B</h3>
                    {openMailboxes.indexOf(2) !== -1 && <h3 className='mailbox-inner-txt'>Jack Shit</h3>}
                    <div onClick={() => openMailbox(2)} className='mailbox-top-detail'></div>
                    {openMailboxes.indexOf(2) !== -1 && <div className='m2'><div onClick={() => openMailbox(2)} className='mailbox-bottom-detail'></div></div>}

                </div>
                <div id={openMailboxes.indexOf(3) !== -1 ? "mailbox-open" : "nullbox"} className='mailbox'>
                    <h3 className='mailbox-txt'>440 C</h3>
                    {openMailboxes.indexOf(3) !== -1 && <div onClick={startLetterAnim} id={letterAnim ? "letterSpin" : "foodsasd"} className='letter-in-box'>
                        <div className='letter-detail-l'></div>
                        <div className='letter-detail-r'></div>
                        {letterText && <p className='return-add'>Riley Gibson <br/> 7770 Acc blvd <br/> Brier Creek!, NC, 27617</p>}
                        {letterText && <p className='send-add'>Caroline Fowlkes <br/> 440 Oak St. <br/> Boonetown, NC, 28607</p>}
                        {letterText && <p onClick={openLetter} className='stamp'>^-^</p>}
                    </div>}
                    <div onClick={() => openMailbox(3)} className='mailbox-top-detail'></div>
                    {openMailboxes.indexOf(3) !== -1 && <div className='m3'><div onClick={() => openMailbox(3)} className='mailbox-bottom-detail'></div></div>}

                </div>
            </div>
            <div className='mailbox-lower'>
                <div className='l-lower-mailbox'></div>
                <div className='r-lower-mailbox'></div>
                <div className='lower-mailbox'></div>
                <div className='b-lower-mailbox'></div>
            </div>

        </div>
        }
    </div>
    }
    {openingAnim === "closed" && <div className='App'>
        <img  className="wood-bg" src={woodBG}></img>
        <OpeningLetter />
    </div>
    }
    </React.Fragment>
  );
}

export default App;
