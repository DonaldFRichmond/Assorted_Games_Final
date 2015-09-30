
//  Any variable used by more than one function (unless the initial one calls 
//  the secondary one) are global and need to defined externally

//**global variables

    var disableLit           = "disable";
    var enableLit            = "enable";

    var buttonOneLit         = 'spinButton';
    var buttonTwoLit         = 'changeBet';
    var buttonThreeLit       = 'restart';

    var specifiedButtonId    = ' ';    
    var newInformation       = ' ';

    var dataInput            = 'joker';
    var characterString      = '1234567'

    var upperLimit           = 6;

    var betIdIndex           = 00;
    var requestedBetId       = '';  
    var cardIndex            = 00;
    var maxCardIndex         = 53;

    var description          = ' ';
    var response             = ' ';
    var numericAmount        =  5000; 

    var partialRotations     =  1;
 
//
//
//**coding begins here
//
//  

    var activate        = setInterval(function() { rotateWheel(); }, 100); 

    initializeSession(); 

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
                                                    
                  
   var num0              = document.getElementById('betNum0');
        num0.onclick     = function()  
        {  
          requestedBetId = 'betNum0';
          markBet();
        }        
  
   var num00      	 = document.getElementById('betNum00');
        num00.onclick    = function()  
        {  
          requestedBetId = 'betNum00';
          markBet();
        }        
  
  
   var num0102	      	 = document.getElementById('bet0102');
        bet0102.onclick  = function()  
        {  
          requestedBetId = 'bet0102';
          markBet();
        }        
  
//
//  FUNCTIONS follow 
//
//
//****This function marks or unmarks a bet based on its id.

  function markBet( )
  {
//       requestedBetId = returnBetId(betIdIndex);
   if    (  document.getElementById(requestedBetId).checked         )   
         {  document.getElementById(requestedBetId).style.border = "1px solid white";
            document.getElementById(requestedBetId).checked = false;                  }
   else  {  document.getElementById(requestedBetId).style.border = "5px solid white";
            document.getElementById(requestedBetId).checked = true;                   }
 
   alert('Bet status ' + document.getElementById(requestedBetId).checked );  
  }


//****This function initializes variables prior to starting a new gambling session.

  function initializeSession() 
  {    
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


  function rotateWheel() 
  { 

   // array of partial file names of card images
   // Files found in directory 'images/all_cards/'.  All files have the extension .jpg
   //**

    var wheelImagesIndexMax  = 36;
    var wheelImage          = [     "dummy",

//        "testwheel01", "testwheel02", "testwheel03", "testwheel04",
//        "testwheel05", "testwheel06", "testwheel07", "testwheel08",
  
        "wheelImage000",    "wheelImage010",    "wheelImage020",    "wheelImage030",    
        "wheelImage040",    "wheelImage050",    "wheelImage060",    "wheelImage070",    
        "wheelImage080",    "wheelImage090",    "wheelImage100",    "wheelImage110",    
        "wheelImage120",    "wheelImage130",    "wheelImage140",    "wheelImage150",    
        "wheelImage160",    "wheelImage170",    "wheelImage180",    "wheelImage190",    
        "wheelImage200",    "wheelImage210",    "wheelImage220",    "wheelImage230",    
        "wheelImage240",    "wheelImage250",    "wheelImage260",    "wheelImage270",    
        "wheelImage280",    "wheelImage290",    "wheelImage300",    "wheelImage310",    
        "wheelImage320",    "wheelImage330",    "wheelImage340",    "wheelImage350"
     ];
//**   
   
    partialRotations     ++;
    if  (  partialRotations   > 36 )
        {  partialRotations   =  1  };

//        newInformation        =   '<img src="images/wheelimages/'   
//                              +   'black'
//
//                              +   'white'  
//                              +   '.jpg"  alt ="Photograph"   >'  

//        document.getElementById('wheelLG').innerHTML = newInformation;

        newInformation        =   '<img src="images/wheelimages/'   
                              +    wheelImage[partialRotations]  
                              +   '.jpg"  alt ="Photograph"   >'  

        document.getElementById('wheelLG').innerHTML = newInformation;
        document.getElementById('wheelSM').innerHTML = newInformation;

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
//****This function tests whether the parameter contains only numeric characters
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

//BEGIN FUNCTION         
  function returnBetId(betIdIndex)
  {
    var totalBetIds         = 154;
    var requestedBetId      = '';

    var betId               = [ "dummy",
   "betNum0" , "betNum00", "bet1st18", "bet2nd18", "betBlack", "betRed" , "betOdd"  , "betEven" ,          
   "bet1st12", "bet2nd12", "bet3rd12", "betCol1" , "betCol2" , "betCol3",
 
   "betNum01", "betNum02", "betNum03", "betNum04", "betNum05", "betNum06", "betNum07", "betNum08", "betNum09",
   "betNum10", "betNum11", "betNum12", "betNum13", "betNum14", "betNum15", "betNum16", "betNum17", "betNum18",
   "betNum19", "betNum20", "betNum21", "betNum22", "betNum23", "betNum24", "betNum25", "betNum26", "betNum27",
   "betNum28", "betNum29", "betNum30", "betNum31", "betNum32", "betNum33", "betNum34", "betNum35", "betNum36",

   "bet0102", "bet0203", "bet0103", "bet0104", "bet0105", "bet0205", "bet0206", "bet0306", "bet0106",
   "bet0405", "bet0506", "bet0406", "bet0407", "bet0408", "bet0508", "bet0509", "bet0609", "bet0306",  
   "bet0708", "bet0809", "bet0709", "bet0710", "bet0711", "bet0811", "bet0812", "bet0912", "bet0712",
   "bet1011", "bet1112", "bet1012", "bet1013", "bet1014", "bet1114", "bet1115", "bet1215", "bet1015",
   "bet1314", "bet1415", "bet1315", "bet1316", "bet1317", "bet1417", "bet1418", "bet1518", "bet1318",
   "bet1617", "bet1718", "bet1618", "bet1619", "bet1620", "bet1720", "bet1721", "bet1821", "bet1621",  
   "bet1920", "bet2021", "bet1921", "bet1922", "bet1923", "bet2023", "bet2024", "bet2124", "bet1924",
   "bet2223", "bet2324", "bet2224", "bet2225", "bet2226", "bet2326", "bet2327", "bet2427", "bet2227",
   "bet2526", "bet2627", "bet2527", "bet2528", "bet2529", "bet2629", "bet2630", "bet2730", "bet2530",
   "bet2829", "bet2930", "bet2830", "bet2831", "bet2832", "bet2932", "bet2933", "bet3033", "bet2833",
   "bet3132", "bet3233", "bet3133", "bet3134", "bet3135", "bet3235", "bet3236", "bet3336", "bet3136",
   "bet3435", "bet3536", "bet3336"     
           ];
   requestedBetId      = betId[betIdIndex];
   return requestedBetId;    

  } 
//END FUNCTION 

   