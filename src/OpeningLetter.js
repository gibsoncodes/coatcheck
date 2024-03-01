import React, { useEffect, useState } from 'react'

import slime from "./caro-slime.jpeg"
import sp1 from "./subPhotos/IMG_1600.jpg"
import sp2 from "./subPhotos/IMG_1602.jpg"
import sp3 from "./subPhotos/IMG_1603.jpg"
import sp4 from "./subPhotos/IMG_1604.jpg"
import sp5 from "./subPhotos/IMG_1605.jpg"
import sp6 from "./subPhotos/IMG_1606.jpg"
import sp7 from "./subPhotos/IMG_1617.jpg"
import carolineSub from "./subPhotos/carolinesub.jpg"






const letter2 = "I am sitting in my closet office after being corresponded to from a none too lazy, and striking blonde, over 150 miles away. In the time It took me to read her replies I could have watched a striking average of 83 TikTok. It's the second, formidable, but ultimately less intentional time I have used the word. So this striking blonde who's over 150 miles away and 3000 feet more elevated than I am, she's going to read these very words so I better make their arrangements most worth her while. This can be easier said than done, but there are multiple things that will aid the striking blonde's correspondent, myself, who, by the way, is over 150 miles away, 3000 feet less elevated, and probably is 10-15 degrees warmer. <br><br/> 1. This mug of hot, black joe. <br><br/> 2. My fear of being boring. <br><br/> 3. When I think of her, it feels worthwhile. <br><br/> 4. (Caroline Smiles) <br><br/> So I'm here and she is well, there, and I'm typing this letter which will be transported by larger, then smaller vehicles, up highways and windy hills and grades so steep they have to tell you. They are going to need some gas and some slim jims and a mug of hot, black joe because I want no issues with transport. The blue and red knob turns, the odometer will move some 150 miles and some gum might help towards the end there too. Sardined in with far too many Dollar Tree or Dollar Store take your pick cookie cutter postcards with dogs and cats and plays on words that had them stumped in their store of choice as to which one their dearly beloved would get the biggest kick out of. This might be the biggest kick yet they think, over a 6 lick envelope. I don't want to be too cynical though, so let's just say they serve a purpose, maybe for a non striking blonde, but not the purpose of the striking blonde's correspondent. Sardined in with the aforementioned it'll make its way through the mail ecosystem and remarkably arrive into the busy lady's hands, so as I said It better be worth her while. <br> <br/> Two things have been established in previous letters; that the third page is the one more so about expressing my feelings to the striking blonde, and secondly that that is my weak point. Striking is far too ambiguous and lacks personality, so it hardly counts. It is true that I find it harder to express feelings than other topics, but the crux lies in that I cannot make point blank flattery feel authentic. Not to discredit point blank flattery, I'm sure it's nice to be on the receiving end of something… right on target, so direct. But if I, pardon my language, called her pulchritudinous, I would betray my Inner Gangster, and if I betrayed my Inner Gangster I couldn't live with myself. So I have to find a way to express, without an IG betrayal, what people feel they need to express when they are in my situation, because despite the asphalt, and the metal signs, and all of the Dollar Tree and Dollar Store's between us, I do feel the need to at least tell her she's striking."
const headerArr = [
    "",
    "D",
    "De",
    "Dea",
    "Dear",
    "Dear B",
    "Dear Bo",
    "Dear Bo",

    "Dear Boz",

    "Dear B",
    "Dear",
    "Dear C",
    "Dear Ca",
    "Dear Car",
    "Dear Caro",
    "Dear Carol",
    "Dear Caroli",
    "Dear Carolin",
    "Dear Caroline",
    "Dear Caroline,",
    "Dear Caroline,",
    "Dear Caroline,",
    "Dear Caroline,",
    "Dear Caroline",
    "Dear Carolin",
    "Dear Caroli",
    "Dear Carol",
    "Dear Caro",
    "Dear Car",
    "Dear Ca",
    "Dear C",
    "Dear",
    "Deare",
    "Deares",
    "Dearest",
    "Dearest C",
    "Dearest Ca",
    "Dearest Car",
    "Dearest Caro",
    "Dearest Caros",
    "Dearest Carosl",
    "Dearest Carosli",
    "Dearest Caroslim",
    "Dearest Caroslime",
    "Dearest Caro",
]
const text = "No Letter No Boone, double bummer. I can’t change the weather but I can program a (hopefully) cutesy, comparable mail simulator. You deserved a letter and I really liked one of the things I wrote but I needed to spruce things up to maintain that letter feeling, a text doc just doesn’t cut it, so here we are, kapow. The first page of the lost letter was mostly just replies, shock of feeding your dog a whole raw chicken wing, and a brief detail of how I’m actually somewhat of a (socially) anxious person. I remember writing this: “Sometimes I wonder if you think I'm doing too much, regarding the letters or origami, but I think you’re cool, and we have climbing, and words like bozo, so I can hardly help it. I also debated sending the blue sheet that I wrote for the same reason, but I do like it alot, and hey I’ve got to stay relevant somehow.” I wrote big blue first on the computer so easy transfer. Also originally included was the BLT BLUEPRINT! Two small stickers that I created at work with a label maker. One said bozo and the other said bozo o clock, I thought you might be able to get some use out of them. Other than that all you missed out on was a tiny piece of crumpled up paper that said “Tiny piece of crumpled up paper”. So click the next button when your ready. Oh I also wrote this: “Road 2 Oil Baron. I don’t know what makes a good one, but it would be really badass of you to become one” \n\n\n\n I think I signed this one #freethug riley"
const OpeningLetter = () => {

    
    const [displayText, setDisplayText] = useState('');
    const [headerText, setHeaderText] = useState("");
    const [index, setIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false);
    const [headIndex, setHeadIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);


    const handleIndex = (dir) => {
        if (dir === "left") {
            setLetterIndex(prev => prev - 1)
        } else {
            setLetterIndex(prev => prev + 1)
        }

    }
  
    useEffect(() => {
        if (startTyping) {

            const interval = setInterval(() => {
              if (index < text.length) {
                setDisplayText(prevText => {
                    // Check if the current character is a newline
                    if (text[index] === '\n') {
                      // If it is a newline, append a <br> tag
                      return prevText + '<br />';
                    } else {
                      // Otherwise, append the character
                      return prevText + text[index];
                    }
                  });            
                setIndex(prevIndex => prevIndex + 1);
              } else {
                clearInterval(interval);
              }
            }, 60); // Adjust typing speed as needed
            return () => clearInterval(interval);
        }

        if (!startTyping) {
            const interval = setInterval(() => {
                if (headIndex <= headerArr.length -1) {
                    setHeaderText(headerArr[headIndex])
                    setHeadIndex(prevIndex => prevIndex + 1)
                } else {
                    setStartTyping(true)
                }
              }, 200); // Adjust typing speed as needed
              return () => clearInterval(interval);
        }
    
      }, [index, startTyping, headIndex]);

  return (
    <div className='letter-view'>
        {letterIndex === 0 &&
        <div className='page'>
            <div className='flex-row align'>
            <p id={startTyping ? "ph-slime" : "nukl"} className='page-header'>{headerText}</p>
            <span>{startTyping && <img className="slime-txt" src={slime}></img>}</span>
            </div>
            <p className='page-text' dangerouslySetInnerHTML={{ __html: displayText }}/>
        </div>
        }
        {letterIndex === 2 &&
        <div id="page2" className='page'>
            <h2 className='l2-center'>A Decent Amount of Time <br/> <span className='smaller'>and other, surmountable, statistics</span><br></br><br></br><span className='author'>by Riley Gibson</span></h2>
            <p className='page-text' dangerouslySetInnerHTML={{ __html: letter2 }}/>
        </div>
        }
        {letterIndex === 3 &&
        <div id="page2" className='page'>
            <p className='page-text'>Thats Everything. </p>
        </div>
        }
        {letterIndex === 1 &&
        <div className='page'>
            <h1 className='blt-title'>BLT BLUEPRINT!</h1>
            <p className='page-text'>This is in response to the blt photo you sent me and general hubbub around the sub.</p>
            
            <h2 className='step'>STEP 1: Bread</h2>
            <div className='photo-box'>
                <img className='sub-photo' src={sp1}></img>
            </div>
            <p className='page-text'>It all starts with the bread baby! I want you to go to the one in Boone and tell them to temp the tomatoes and also that Riley from Brier Creek (They'll Know) says his Grandma scores bread better than them.<br></br><br></br>Check out that color, Little Bit of color gives a lot of flavor. MMM MMM</p>
            <br></br>
            <h2 className='step'>STEP 2: Bacon</h2>
            <div className='photo-box'>
                <img className='sub-photo' src={sp2}></img>
            </div>
            <p className='page-text'>Grade A Applewood Smoked Bacon. Pile it High, not too crispy or whats the point. Some say its not a sub without the bacon... I dare say they are right in this case.</p>
            <br></br>
            <h2 className='step'>STEP 3: Lettuce and Tomato</h2>
            <div className='photo-box'>
                <img className='sub-photo' src={sp3}></img>
            </div>
            <p className='page-text'>Lots of fresh lettuce. Not much to say there. 3 Ripe but firm beautiful red tomatoes.</p>
            <br></br>
            <h2 className='step'>STEP 4: Mayo</h2>
            <div className='photo-box'>
                <img className='sub-photo' src={sp4}></img>
            </div>
            <p className='page-text'>Mayo quanitity can make or break the BLT. Not too much but not so little that it's dry, and always always an even coating (watch those ends).</p>
            <br></br>
            <h2 className='step'>STEP 5 (Optional): </h2>
            <div className='photo-box'>
                <img className='sub-photo' src={sp5}></img>
            </div>
            <p className='page-text'>This unorthodox but highly effective step is my little secret. Tons of black pepper and jalepenos. Really gives it some legs.</p>
            <br></br>
            <h2 className='step'>STEP 6: Ready For Consumption </h2>
            <div className='photo-box'>
                <img className='sub-photo' src={sp6}></img>
            </div>
            <p className='page-text'>Put the top on and go to town. <br></br>My favorite lines when giving customers their subs or after checking out.<br></br>What are you going to do with that?<br></br>That. My good sir. Is a busdown.<br></br>(Capital Riot era) That sub's gonna hit like a rubber bullet. <br></br>(audibly go MM MMMM MMM MMM MMM MMMMM MMMMMMM MM   MM)</p>
            <br></br>
            <br></br>
            <div className='flex-row'>
            <div className='photo-box'>
                <img className='sub-photo' src={sp7}></img>
            </div>
            <div className='photo-box'>
                <img style={{width: "87%"}} className='sub-photo' src={carolineSub}></img>
            </div>
            </div>
            <br></br>
            <p className='page-text'>I wanted to give the BLT another try. It had been a long time since I had one, so I needed to re-evaluate it. <br></br>The results are in. In fact when I sent this in the letter I said it was actually pretty good, and that I was too harsh re. it being your favorite, but still not a favorite of mine. However I have had 3 more since then. Maybe its coming back. Makes a good breakfast sub for when I open, and thats the only time I can get the bacon and the bread just right cause these bozos dont know how to do perfection.<br></br>I also said "Is you demolishing a giant BLT hot..? Sounds about right."</p>

       </div>
        }

        <div className='flex-row bbl'>
            {letterIndex !== 0 && <div className='arrow-left' onClick={() => handleIndex("left")}>back a page</div>}
            {letterIndex !== 3 && <div className='arrow-right' onClick={() => handleIndex("right")}>next page</div>}
        </div>

    </div>
  )
}

export default OpeningLetter