
//  Any variable used by more than one function (unless the initial one calls 
//  the secondary one) are global and need to defined externally

//**global variables

    var disableLit           = "disable";
    var enableLit            = "enable";

    var buttonOneLit         = 'rollDice';
    var buttonTwoLit         = 'clearAllBets';
    var buttonThreeLit       = 'restart';

    var specifiedButtonId    = ' ';    
    var newInformation       = ' ';

    var dataInput            = '---';
    var characterString      = '12345'

    var upperLimit           = 0;
  
    var betIdIndex           = 00;
    var diceIndex            = 00;
    var totalDiceImages      =  7

    var description          = '---- ';
    var response             = ' ';
    var numericAmount        = 00; 

    var die01                = 00;
    var die02                = 00;
    var counter              = 00;
    var total                = 00;

    var tumbles01            = 00;
    var tumbles02            = 00;
    var maxTumbles           = 00;
    var activate             = '';

    var betNumber03          = 00;
    var betNumber04          = 00;
    var newBet               = 00;
    var defaultBet           =  5.00;
    var specifiedID          = ' ';
    var ID                   = '  ';
    var betID                = ' ';
    var getBet               = true;
 
//
//
//**coding begins here
//
//  
    initializeSession(); 

    document.getElementById('bet03Left').checked = false; 
    document.getElementById('bet03Right').checked = false; 

//
//  Three controlling buttons
//
    var buttonOne      	    = document.getElementById(buttonOneLit);
        buttonOne.onclick   = function()   
        {  
         document.getElementById('msg').innerHTML = ' ';  
         initiateRoll();

        };

    var buttonTwo      	    = document.getElementById(buttonTwoLit);
        buttonTwo.onclick   = function()   
        {  
          alert('Change bet button clicked');

        };

    var buttonThree    	    = document.getElementById(buttonThreeLit);
        buttonThree.onclick = function()   
        {  
          alert('Thanks! Please come again!');
          initializeSession(); 
        };

// Enter bets on numbers, doubles, and combinations

// Enter bet on numbers 3, 4, 5, 6, 8, 9, or 10, left or right
                  
// Enter bet on number 3, left or right
              
   var threeLeft   	    = document.getElementById('bet03Left');
       threeLeft.onclick    = function()
       { ID                 = '03'; 
         adjustButtons1();    };
    var threeRight   	    = document.getElementById('bet03Right');
       threeRight.onclick   = function ()
       { ID                 = '03'; 
         adjustButtons1();    };
    
// Enter bet on number 4, left or right
            
   var fourLeft   	    = document.getElementById('bet04Left');
       fourLeft.onclick     = function()
       { ID                 = '04';   
         adjustButtons1();    };
   var fourRight   	    = document.getElementById('bet04Right');
       fourRight.onclick    = function ()
       { ID                 = '04';   
         adjustButtons1();    };    
  
// Enter bet on number 5, left or right
               
   var fiveLeft   	    = document.getElementById('bet05Left');
       fiveLeft.onclick     = function()
       { ID                 = '05';
         adjustButtons1();            };
   var fiveRight   	    = document.getElementById('bet05Right');
       fiveRight.onclick    = function ()
       { ID                 = '05';
         adjustButtons1();     }
    
// Enter bet on number 6, left or right
               
   var sixLeft   	    = document.getElementById('bet06Left');
       sixLeft.onclick      = function()
       { ID                 = '06';
         adjustButtons1();            };
   var sixRight   	    = document.getElementById('bet06Right');
       sixRight.onclick     = function ()
       { ID                 = '06';
         adjustButtons1();          
       };    
  
// Enter bet on number 8, left or right
               
   var eightLeft   	    = document.getElementById('bet08Left');
       eightLeft.onclick    = function()
       { ID                 = '08';
         adjustButtons1();            };
   var eightRight   	    = document.getElementById('bet08Right');
       eightRight.onclick   = function ()
       { ID                 = '08';
         adjustButtons1();           
       }
    
// Enter bet on number 9, left or right
               
   var nineLeft   	    = document.getElementById('bet09Left');
       nineLeft.onclick     = function()
       { ID                 = '09';
         adjustButtons1();            };
   var nineRight   	    = document.getElementById('bet09Right');
       nineRight.onclick    = function ()
       { ID                 = '09';
         adjustButtons1();          
       };    
  
// Enter bet on number 10, left or right
               
   var tenLeft   	    = document.getElementById('bet10Left');
       tenLeft.onclick      = function()
       { ID                 = '10';
         adjustButtons1();            };
   var tenRight   	    = document.getElementById('bet10Right');
       tenRight.onclick     = function ()
       { ID                 = '10';
         adjustButtons1();           
       }

// Enter bet on double 2
               
   var double02   	    = document.getElementById('double02');
       double02.onclick     = function()
       { betID              = 'double02';
         adjustButtons2();            };
  
// Enter bet on double 4
               
   var double04   	    = document.getElementById('double04');
       double04.onclick     = function()
       { betID              = 'double04';
         adjustButtons2();            };
  
// Enter bet on double 6
               
   var double06   	    = document.getElementById('double06');
       double06.onclick     = function()
       { betID              = 'double06';
         adjustButtons2();            };
  
// Enter bet on double 8
               
   var double08   	    = document.getElementById('double08');
       double08.onclick     = function()
       { betID              = 'double08';
         adjustButtons2();            };
  
// Enter bet on double 10
               
   var double10   	    = document.getElementById('double10');
       double10.onclick     = function()
       { betID              = 'double10';
         adjustButtons2();            };
  
// Enter bet on double 12
               
   var double12   	    = document.getElementById('double12');
       double12.onclick     = function()
       { betID              = 'double12';
         adjustButtons2();            };
      
// Enter bet on doubles
               
   var doubles   	    = document.getElementById('doubles');
       doubles.onclick      = function()
       { betID              = 'doubles';
         adjustButtons2();            };

// Enter bet on number11
               
   var number11   	    = document.getElementById('number11');
       number11.onclick     = function()
       { betID              = 'number11';
         adjustButtons2();            };
  
// Enter bet on number07
               
   var number07   	    = document.getElementById('number07');
       number07.onclick     = function()
       { betID              = 'number07';
         adjustButtons2();            };
  
// Enter bet on craps
               
   var craps    	    = document.getElementById('craps');
       craps.onclick        = function()
       { betID              = 'craps';
         adjustButtons2();            };
  
// Enter bet on leftField
               
   var leftField    	    = document.getElementById('leftField');
       leftField.onclick    = function()
       { betID              = 'leftField';
         getBet             = false;   
         adjustButtons2();                
         betID              = 'rightField';
         adjustButtons2();
                   };
  
// Enter bet on rightField
               
   var rightField    	    = document.getElementById('rightField');
       rightField.onclick   = function()
       { betID              = 'rightField';
         getBet             = false;
         adjustButtons2();     
         betID              = 'leftField';
         adjustButtons2();                 
                };

// Enter bet on number 03 (small Table)
               
   var bet03ST   	    = document.getElementById('bet03ST');
       bet03ST.onclick      = function()
       { betID              = 'bet03ST';
         adjustButtons2();  };

// Enter bet on number 04 (small Table)
               
   var bet04ST   	    = document.getElementById('bet04ST');
       bet04ST.onclick      = function()
       { betID              = 'bet04ST';
         adjustButtons2();  };
           
// Enter bet on number 05 (small Table)
               
   var bet05ST   	    = document.getElementById('bet05ST');
       bet05ST.onclick      = function()
       { betID              = 'bet05ST';
         adjustButtons2();  };

// Enter bet on number 06 (small Table)
               
   var bet06ST   	    = document.getElementById('bet06ST');
       bet06ST.onclick      = function()
       { betID              = 'bet06ST';
         adjustButtons2();  };

// Enter bet on number 08 (small Table)
               
   var bet08ST   	    = document.getElementById('bet08ST');
       bet08ST.onclick      = function()
       { betID              = 'bet08ST';
         adjustButtons2();  };
           
// Enter bet on number 09 (small Table)
               
   var bet09ST   	    = document.getElementById('bet09ST');
       bet09ST.onclick      = function()
       { betID              = 'bet09ST';
         adjustButtons2();  };

// Enter bet on number 10 (small Table)
               
   var bet10ST   	    = document.getElementById('bet10ST');
       bet10ST.onclick      = function()
       { betID              = 'bet10ST';
         adjustButtons2();  };

   var double02ST   	    = document.getElementById('double02ST');
       double02ST.onclick   = function()
       { betID              = 'double02ST';
         adjustButtons2();  };

   var double04ST   	    = document.getElementById('double04ST');
       double04ST.onclick   = function()
       { betID              = 'double04ST';
         adjustButtons2();  };

   var double06ST   	    = document.getElementById('double06ST');
       double06ST.onclick   = function()
       { betID              = 'double06ST';
         adjustButtons2();  };

   var double08ST   	    = document.getElementById('double08ST');
       double08ST.onclick   = function()
       { betID              = 'double08ST';
         adjustButtons2();  };

   var double10ST   	    = document.getElementById('double10ST');
       double10ST.onclick   = function()
       { betID              = 'double10ST';
         adjustButtons2();  };

   var double12ST   	    = document.getElementById('double12ST');
       double12ST.onclick   = function()
       { betID              = 'double12ST';
         adjustButtons2();  };
                                            
// Enter bet on doubles (small Table)
               
   var doublesST   	    = document.getElementById('doublesST');
       doublesST.onclick    = function()
       { betID              = 'doublesST';
         adjustButtons2();  };
 
//  'number11ST', 'number07ST', 'crapsST',    'fieldST'    
    
// Enter bet on number 11 (small Table)
               
   var number11ST   	    = document.getElementById('number11ST');
       number11ST.onclick   = function()
       { betID              = 'number11ST';
         adjustButtons2();  };

// Enter bet on number 07 (small Table)
               
   var number07ST   	    = document.getElementById('number07ST');
       number07ST.onclick   = function()
       { betID              = 'number07ST';
         adjustButtons2();  };
  
// Enter bet on 2,3, or 11 (small Table)
               
   var crapsST   	    = document.getElementById('crapsST');
       crapsST.onclick      = function()
       { betID              = 'crapsST';
         adjustButtons2();  };

// Enter bet on the field (small Table)
               
   var fieldST   	    = document.getElementById('fieldST');
       fieldST.onclick      = function()
       { betID              = 'fieldST';
         adjustButtons2();  };
        
//
//  FUNCTIONS follow 
//
//****This function initializes variables prior to starting a new gambling session.
  
  function initializeSession() 
  {           
       dataInput                      = getDieImage(4);
       specifiedID                    = 'firstDie';
       HTMLElement                    = assembleHTMLElement(dataInput);
       document.getElementById(specifiedID).innerHTML = HTMLElement;
       specifiedID                    = 'largeLeftDie';
       HTMLElement                    = assembleHTMLElement(dataInput);
       document.getElementById(specifiedID).innerHTML = HTMLElement;

       dataInput                      = getDieImage(3);
       specifiedID                    = 'secondDie';
       HTMLElement                    = assembleHTMLElement(dataInput);
       document.getElementById(specifiedID).innerHTML = HTMLElement;
       specifiedID                    = 'largeRightDie';
       HTMLElement                    = assembleHTMLElement(dataInput);
       document.getElementById(specifiedID).innerHTML = HTMLElement;
 
       response                        = 'y'; 
       while (response                == ' '  )     
       { 
           response                    = prompt('Enter Y or N'   ); 
           if   ( response            == 'Y' || response    == 'y'  || 
                  response            == 'N' || response    == 'n'   )
           {      response            == 'valid';

//                if   (response      == 'Y' || response    == 'y'   )
//                     {jokerInDeck    = true;   }
//                else {jokerInDeck    = false;  }

           }
           else { response             = ' ';    }                      
       }  
  }


  function initiateRoll()
{
    total                 =  00;
    maxTumbles            =  00;
    counter               =  1;
  
    upperLimit            =  15;
    tumbles01             =  5 + getRandomNumber(upperLimit);
    tumbles02             =  5 + getRandomNumber(upperLimit);

    if   (  tumbles01     > tumbles02  )
         {  maxTumbles    = tumbles01  }
    else {  maxTumbles    = tumbles02  }

    upperLimit            =  6;
    activate              =  setInterval( function() { rowDice(); }, 250);

}
  
  function rowDice()  
    {  if  ( counter      <= tumbles01  )  
       {     die01         = 1 + getRandomNumber(upperLimit);}
       if  ( counter      <= tumbles02  )
       {     die02         = 1 + getRandomNumber(upperLimit);}

       total               = die01 + die02;
 
       dataInput     = getDieImage(die01);                          //dateInput is name without extension.
       HTMLElement   = assembleHTMLElement(dataInput);
       document.getElementById('firstDie').innerHTML = HTMLElement; 
       document.getElementById('largeLeftDie').innerHTML = HTMLElement; 

       dataInput     = getDieImage(die02);
       HTMLElement   = assembleHTMLElement(dataInput);
       document.getElementById('secondDie').innerHTML = HTMLElement;
       document.getElementById('largeRightDie').innerHTML = HTMLElement;  

       counter  ++;

       if  (  counter   >  maxTumbles) 
           {  clearInterval(activate);        //     deactivates repeating interval

// Next line for testing dice results
//     die01 = 06;  die02 = 06;  total = 12;

              if  ( total         ==  2  )
              {     dataInput     = getDieImage(7); 
                    HTMLElement   = assembleHTMLElement(dataInput);
                    document.getElementById('firstDie').innerHTML  = HTMLElement;
                    document.getElementById('largeLeftDie').innerHTML  = HTMLElement; 
                    dataInput     = getDieImage(8);
                    HTMLElement   = assembleHTMLElement(dataInput);
                    document.getElementById('secondDie').innerHTML = HTMLElement;
                    document.getElementById('largeRightDie').innerHTML  = HTMLElement; 
                    document.getElementById('msg').innerHTML = 'Double ones, SNAKE EYES!!!' 
              }

              if   (total  ==  3)     { document.getElementById('msg').innerHTML = '  3        ' }  ;
 
              if   (       total   ==  4    ) 
              {    if   (  die01   == die02 )     
                        {  document.getElementById('msg').innerHTML = '  Double twos  ';         }
                   else {  document.getElementById('msg').innerHTML = '  4            ';         }
              }     
   
              if  (total  ==  5)     { document.getElementById('msg').innerHTML = '  5         ' }  ; 


              if   (       total   ==  6    ) 
              {    if   (  die01   == die02 )     
                        {  document.getElementById('msg').innerHTML = '  Double threes ';        }
                   else {  document.getElementById('msg').innerHTML = '  6            ';         }
              }     
  
              if  (total  ==  7)     { document.getElementById('msg').innerHTML = 'LUCKY 7!!!  ' }  ;  

              if   (       total   ==  8    ) 
              {    if   (  die01   == die02 )     
                        {  document.getElementById('msg').innerHTML = '  Double fours ';         }
                   else {  document.getElementById('msg').innerHTML = '  8            ';         }
              }     

              if  (total  ==  9)     { document.getElementById('msg').innerHTML = '  9         ' }  ; 

              if   (       total   ==  10    ) 
              {    if   (  die01   == die02 )     
                        {  document.getElementById('msg').innerHTML = '  Double fives ';         }
                   else {  document.getElementById('msg').innerHTML = ' 10            ';         }
              }     

              if  (total  == 11)     { document.getElementById('msg').innerHTML = ' 11         ' }  ; 

              if  ( total         ==  12 )
              {     dataInput     = getDieImage(9);
                    HTMLElement   = assembleHTMLElement(dataInput);
                    document.getElementById('firstDie').innerHTML  = HTMLElement; 
                    document.getElementById('largeLeftDie').innerHTML  = HTMLElement; 
                    document.getElementById('secondDie').innerHTML = HTMLElement;
                    document.getElementById('largeRightDie').innerHTML  = HTMLElement; 
                    document.getElementById('msg').innerHTML = 'Double sixes, BOX CARS!!!' 
              }
           }  
    }

  function  adjustButtons1()
  { 
    if   (  document.getElementById('bet' + ID + 'Left').checked    ||         
            document.getElementById('bet' + ID + 'Right').checked       )   
//          cancels a previously made bet
         {  document.getElementById('bet' + ID + 'Left').style.border  = "2px solid white";
            document.getElementById('bet' + ID + 'Right').style.border = "2px solid white ";
            document.getElementById('bet' + ID + 'Left').checked       = false;  
            document.getElementById('bet' + ID + 'Right').checked      = false;
            newBet  = 00;              
         }
//          establishes a new bet
   else  {  document.getElementById('bet' + ID + 'Left').style.border  = "thick solid yellow";
            document.getElementById('bet' + ID + 'Right').style.border = "thick solid yellow ";
            document.getElementById('bet' + ID + 'Left').checked       = true;
            document.getElementById('bet' + ID + 'Right').checked      = true;
            setBet();
         }
  } 

  function  adjustButtons2()
  { 
   if    (  document.getElementById(betID).checked       )   
//          cancels a previously made bet
         {  document.getElementById(betID).style.border  = "2px solid white";
            document.getElementById(betID).checked       = false;
            newBet  = 00;              
         }
//          establishes a new bet
  else   {  document.getElementById(betID).style.border  = "thick solid yellow";
            document.getElementById(betID).checked       = true;
            if  ( getBet ) 
            {    setBet();  }
            getBet = true;
         }                 
  } 

  function  setBet()
  { 
   newBet  = prompt('Enter the bet for number--minimum bet is $5 ');

   allNumeric = IsItNumeric(newBet);
   if (   !allNumeric   || newBet      <  defaultBet   ) 
      {   newBet      =  defaultBet;  }   
   newBet             = parseInt(newBet);
   numericAmountForm  = formatNumericAmount( newBet );
//        alert ('newBet = ' + numericAmountForm );

   if  (  ID == '03')   {  betNumber03  = newBet;  } 
   if  (  ID == '04')   {  betNumber04  = newBet;  }
   if  (  ID == '05')   {  betNumber05  = newBet;  }
   if  (  ID == '06')   {  betNumber06  = newBet;  }
   if  (  ID == '08')   {  betNumber08  = newBet;  }
   if  (  ID == '09')   {  betNumber09  = newBet;  }
   if  (  ID == '10')   {  betNumber10  = newBet;  }

    alert( 'newBet = ' + newBet + ';  ID = ' + ID );

   }         

//=========================================================================
//=========================================================================
//===================== NONE SHALL PASS! ==================================
//=========================================================================
//=========================================================================
//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function enables a button (by setting disabled to false!!)
//*
//*   INPUT    :   specifiedButtonId
//*   RETURNED :        
//*
//BEGIN FUNCTION  
//****This function enables specified Button  
  function enableButton(specifiedButtonId) 
  {   
      document.getElementById(specifiedButtonId).disabled = false;
  }
//  END FUNCTION

//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function disables a button (by setting disabled to true)
//*
//*   INPUT    :   specifiedButtonId
//*   RETURNED :        
//*
//BEGIN FUNCTION      

//****This function disables specified Button 
  function disableButton(specifiedButtonId) 
  {     
      document.getElementById(specifiedButtonId).disabled = true;
  }
//  END FUNCTION

//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function takes the dataInput value and assembles an HTML element
//*
//*   INPUT    :   dataInput 
//*   RETURNED :   HTMLElement      
//*
//BEGIN FUNCTION  
  function assembleHTMLElement(dataInput)   
  {      
      var dataBegin1                   = '<img src ='                  ;
      var diceDirectory                = '"images/dice/'               ;
      var diceFileType                 = '.bmp"'                       ;
      var dataEnd                      = ' class = "dice"   alt="" >'  ;
      var dataEndLG                    = ' class = "diceLG" alt="" >'  ;
 
      var HTMLElement                  = dataBegin1   + diceDirectory 
                                       + dataInput 
                                       + diceFileType; 

      if    ( specifiedID  == 'largeLeftDie'  || specifiedID == 'largeRightDie' )
            { HTMLElement += dataEndLG;    }
      else  { HTMLElement += dataEnd;      } 


      return HTMLElement;       
  }
//  END FUNCTION
    
//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function generates a random number from 0 to upperLimit - 1
//*   (add 1 to avoid getting a result of 0)
//*
//*   INPUT    :   upperLimit   (Integer, highest desired value - 1)
//*   RETURNED :   randomNumber (randomly generated value of 0 to upperLimit - 1)      
//*
//BEGIN FUNCTION
 function getRandomNumber (upperLimit)
   { var randomNumber = Math.floor( Math.random() * upperLimit);
     return randomNumber;
   }
//  END FUNCTION
 
//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function obtains a diceImage from the array
//*
//*   INPUT    :   diceIndex (integer from 1 to number of cards in deck)  
//*   RETURNED :   currentDiceImage (file name excluding ext) 
//*
//BEGIN FUNCTION    
 function getDieImage(diceIndex)
  {
   // array of partial file names of die images
   // Files found in directory 'images/dice/'.  All files have the extension .jpg
   //**

    var diceImage     = [ "  ", 
                          "die0160", "die0260", "die0360", 
                          "die0460", "die0560", "die0660",
                          "lefteye", "righteye", "boxcar"  ];
    currentDiceImage  = diceImage[diceIndex];
    return currentDiceImage;    
  } 
//END FUNCTION 
 
//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function tests whether the parameter contains only numeric characters
//*
//*   INPUT    :   characterString   
//*   RETURNED :   allNumeric  = true or allNumeric = false 
//*
//BEGIN FUNCTION    
  function IsItNumeric(characterString)
   {   var strValidChars = "0123456789.";
       var strChar       = " ";
       var allNumeric    = true;
 
       if   (  characterString.length   == 0                 )
            {  allNumeric                = false;            }
       else {  for (i = 0; i < characterString.length; i++  )
                   { strChar = characterString.charAt(i);
                     if (strValidChars.indexOf(strChar) == -1 )
                        {  allNumeric    = false;              
                           i             = characterString.length  }
                   }
            }
 
       return  allNumeric; 
   }
//END   FUNCTION  
  
//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function takes a numeric amount and converts it into dollar format.   
//****If the amount is negative, parenthesis are placed around it
//*
//*   INPUT    :   numericAmount  
//*   RETURNED :   numericAmountForm (numeric value in dollar format)      
//*
//BEGIN FUNCTION         
  function formatNumericAmount(numericAmount)
  {   
      var numericAmountForm     = ''; 
      var negativeAmt           =   false;
      if  (  numericAmount      <   0      )
          {  negativeAmt        =   true   }
  
      var winningsString        =     Math.abs(numericAmount).toString(); 
      var counter               =   0; 
      for ( i = winningsString.length - 1;  i >= 0; i-- )            
      {   counter ++;                   
          numericAmountForm      = winningsString.charAt(i) + numericAmountForm;
          if   (    counter    ==  3  &&  i > 0    )
               {    numericAmountForm  = "," + numericAmountForm; 
                    counter     =  0;                                }          
      }     
      numericAmountForm          =  "$ " + numericAmountForm;     
      if   ( negativeAmt         )
           { numericAmountForm   =  "( " + numericAmountForm + " )";   }
      else { numericAmountForm   =         numericAmountForm + "  ";   } 
      
      return numericAmountForm;
  }
//END   FUNCTION  
   
//=========================================================================
//  GENERAL PURPOSE FUNCTION
//=========================================================================
//****This function takes the field numericAmount and returns boolean 
//****variable positiveAmount
//****If numericAmount is positive, positiveAmount is true. 
//****If numericAmount is negative, positiveAmount is false; 
//*
//*   INPUT    :   numericAmount  
//*   RETURNED :   positiveAmount      
//*
//BEGIN FUNCTION         
  function isItPositive(numericAmount)
  {   var positiveAmount        =   true;
      if  (  numericAmount      <   0       )
          {  positiveAmount     =   false;  }

      return positiveAmount;
  }
//END   FUNCTION  


//BEGIN FUNCTION         
  function returnBetId(betIdIndex)
  {
    var totalBetIds         = 154;
    var requestedBetId      = '';

    var betId               = [ 'dummy', 
  'bet03Left',  'bet04Left',  'bet05Left',  'bet06Left',  'bet08Left',  'bet09Left',  'bet10Left', 
  'bet03Right', 'bet04Right', 'bet05Right', 'bet06Right', 'bet08Right', 'bet09Right', 'bet10Right',
  'double02',   'double04',   'double06',   'double08',   'double10',   'double12',    
  'doubles',    'number11',   'number07',   'craps',      'leftField',  'rightField',
 
  'bet03ST',    'bet04ST',    'bet05ST',    'bet06ST',    'bet08ST',    'bet09ST',    'bet10ST', 
  'double02ST', 'double04ST', 'double06ST', 'double08ST', 'double10ST', 'double12ST',    
  'doublesST',  'number11ST', 'number07ST', 'crapsST',    'fieldST'          
           ];


   requestedBetId      = betId[betIdIndex];
   return requestedBetId;    

  } 
//END FUNCTION 






