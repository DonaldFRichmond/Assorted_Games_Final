
//  Any variable used by more than one function (unless the initial one calls 
//  the secondary one) are global and need to defined externally

//**global variables

    var disableLit           = "disable";
    var enableLit            = "enable";

    var buttonOneLit         = 'rollDice';
    var buttonTwoLit         = 'changeBet';
    var buttonThreeLit       = 'restart';

    var specifiedButtonId    = ' ';    
    var newInformation       = ' ';

    var dataInput            = 'joker';
    var characterString      = '1234567'

    var upperLimit           = 6;
  
    var cardIndex            = 00;
    var maxCardIndex         = 53;

    var description          = ' ';
    var response             = ' ';
    var numericAmount        =  5000; 
 
//
//
//**coding begins here
//
//  
 
    initializeSession(); 

    HTMLElement = assembleHTMLElement(dataInput);
    alert('HTML Element = ' + HTMLElement);

    randomNumber = getRandomNumber(upperLimit);
    alert('randomNumber = ' + randomNumber);

    currentCardImage = getCardImage(52);
    alert('currentCardImage = ' + currentCardImage);

    allNumeric = IsItNumeric(characterString);
    alert ('String = ' + characterString + ';  allNumeric = ' + allNumeric );

    characterString  = '123# ';
    allNumeric = IsItNumeric(characterString);
    alert ('String = ' + characterString + ';  allNumeric = ' + allNumeric );


    numericAmountForm = formatNumericAmount(numericAmount);
    alert ('Amount = ' + numericAmount + ';  numericAmountForm = ' + numericAmountForm );
    positiveAmount   =  isItPositive(numericAmount)
    alert ('Positive = ' + positiveAmount );
 
    numericAmount  = -1400;
    numericAmountForm = formatNumericAmount(numericAmount);
    alert ('Amount = ' + numericAmount + ';  numericAmountForm = ' + numericAmountForm );    
    positiveAmount   =  isItPositive(numericAmount)
    alert ('Positive = ' + positiveAmount );
 
 
//
//  Three controlling buttons
//
    var buttonOne      	    = document.getElementById(buttonOneLit);
        buttonOne.onclick   = function()   
        {  
          alert('Roll Dice button clicked');
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

//
//  FUNCTIONS follow 
//
//****This function initializes variables prior to starting a new gambling session.

  function initializeSession() 
  {    
       response                        = ' '; 
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
      var dataBegin1                   = '<td  id = "card0'      ;
      var dataBegin2                   = '"  >  <img src ='      ;
      var cardDirectory                = '"images/all_cards/'    ;
      var cardFileType                 = '.jpg"'                 ;   
      var dataEnd                      = ' alt = "" > </td>'     ;
 
      var HTMLElement                  = dataBegin1    + 'i '         + dataBegin2         
                                       + cardDirectory 
                                       + dataInput 
                                       + cardFileType + dataEnd;
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
//****This function obtains a cardImage from the array
//*
//*   INPUT    :   cardIndex (integer from 1 to number of cards in deck)  
//*   RETURNED :   currentCardImage (file name excluding ext) 
//*
//BEGIN FUNCTION    
 function getCardImage(cardIndex)
  {
   // array of partial file names of card images
   // Files found in directory 'images/all_cards/'.  All files have the extension .jpg
   //**

    var cardIndexMax         = 65;
    var cardsInDeck          = [
        "0000Green",
        "0102Clubs02",    "0103Clubs03",    "0104Clubs04",    "0105Clubs05",
        "0106Clubs06",    "0107Clubs07",    "0108Clubs08",    "0109Clubs09",
        "0110Clubs10",    "0111ClubsJA",    "0112ClubsQU",    "0113ClubsKI",
        "0114ClubsAC",
        "0202Diamonds02", "0203Diamonds03", "0204Diamonds04", "0205Diamonds05",
        "0206Diamonds06", "0207Diamonds07", "0208Diamonds08", "0209Diamonds09",
        "0210Diamonds10", "0211DiamondsJA", "0212DiamondsQU", "0213DiamondsKI",
        "0214DiamondsAC",
        "0302Hearts02",   "0303Hearts03",   "0304Hearts04",   "0305Hearts05",
        "0306Hearts06",   "0307Hearts07",   "0308Hearts08",   "0309Hearts09",
        "0310Hearts10",   "0311HeartsJA",   "0312HeartsQU",   "0313HeartsKI",
        "0314HeartsAC",
        "0402Spades02",   "0403Spades03",   "0404Spades04",   "0405Spades05",
        "0406Spades06",   "0407Spades07",   "0408Spades08",   "0409Spades09",
        "0410Spades10",   "0411SpadesJA",   "0412SpadesQU",   "0413SpadesKI",
        "0414SpadesAC",   
        "9901Joker",      "9902Joker",      "9903Joker",     "9904Joker", 
        "9905Joker",      "9906Joker",      "9907Joker",     "9908Joker", 
        "9909Joker",      "9910Joker",      "9911Joker",     "9912Joker",
        "9999AllGreen",   "9999Green",      "9999R", "9999T", "9999W"   
     ];
//**   
       currentCardImage      = cardsInDeck[cardIndex];
       return currentCardImage;    
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
   {   var strValidChars = "0123456789";
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
  {   var numericAmountForm     = ''; 
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
   