                      
//  Any variable used by more than one function (unless the initial one calls 
//  the secondary one) are global and need to defined externally

//**global variables

    var jokerInDeck          = ' ';

    var cardDirectory        = 'standard';
    var standardDirectory    = 'standard';		
    var specialDirectory     = 'swimsuit';
    var additionalDirectory  = 'Gulf_War';
    var harryPotterDirectory = 'Harry_Potter';

    var removeTable          = false;    

    var result               = [];     //list of totalRequested random numbers from 
                                       //1 to upperLimit;  converted to cards
    var currentHand          = [];     //hand containing currently active cards
    var totalInHand          =  5;     //standard number for a video poker hand

    var sessionTotal         =  00;    //indicates winnings (plus) or losses (negative)
    var sessionTotalForm     = "$0.00";
    var tokenAmount          =  5; 

    var checkBoxChange       = " "     //value either "enable" or "disable"
    var disableLit           = "disable";
    var enableLit            = "enable";

    var specifiedButtonId    = "  ";    
    var newInformation       = "  ";
    var highCardString       = ' ';

    var selectedJoker        = 00;
    var handDescriptionLit   = "handDescription";
    var totalFieldLit        = "totalField";
    var btnLit               = "btn";
    var checkLit             = "check";
    var cardLit              = "card";
    var cardRowLit           = "cardRow";

    var indicateHand         = '--';
    var handId               = '00';
    var description          = '  ';
    var response             = ' ';
    var useSpecialDeck       = false;

    var lastOne              = ' ';
    var deck1Lit             = 'deck1';
    var deck2Lit             = 'deck2';
    var deck3Lit             = 'deck3';
    var deck4Lit             = 'deck4';
    var deck5Lit             = 'deck5';

//
//
//**coding begins here
//
//  

    initializeSession(); 

//
//  Three controlling buttons
//
    var buttonOne      	    = document.getElementById(btnLit + 1);
        buttonOne.onclick   = function()   
        {      
          displayInformation(handDescriptionLit, "|");

           if ( handId                  != '00' ) 
              { document.getElementById('hand' + handId).style.backgroundColor = "seagreen";
                document.getElementById('odds' + handId).style.backgroundColor = "yellow ";
              } 
   
	   createResultArray(); 
           selectedJoker     = 00;
           displayCurrentHand();
           displayInformation(btnLit + 1, " ");
           disableButton(btnLit + 1);
           enableButton(btnLit + 2); 
           disableButton(btnLit + 4);
           setCheckBoxes(enableLit);        //enables checkboxes functionality 
           determineDiscards();             //enables player to indicate discards  
        };

    var buttonTwo      	    = document.getElementById(btnLit + 2);
        buttonTwo.onclick   = function()   
        {  
           replaceDiscards();

           setCheckBoxes(disableLit);                //disables Checkboxes for now
             
           displayCurrentHand();                     //displays kept and new cards
	   identifyHand();

           displayInformation(handDescriptionLit, handDefined);
           displayInformation(totalFieldLit,sessionTotal);
           enableButton(btnLit + 1);
           displayInformation(btnLit + 1, "Play Again?");
           disableButton(btnLit + 2);
           enableButton(btnLit + 4);
        };

    var buttonThree    	    = document.getElementById(btnLit + 3);
        buttonThree.onclick = function()   
        {  
           displayInformation(handDescriptionLit,  "Thanks! Please come again!");
           displayInformation(btnLit + 1, "Start");
           enableButton(btnLit + 1);
           enableButton(btnLit + 4);

           sessionTotal     = 00;
           displayInformation(totalFieldLit,sessionTotal);

           if ( handId                  != '00' ) 
              { document.getElementById('hand' + handId).style.backgroundColor = "seagreen";
                document.getElementById('odds' + handId).style.backgroundColor = "yellow ";
              }  
   
	   initializeSession();
        };

    var buttonFour         = document.getElementById(btnLit + 4);
        buttonFour.onclick = function() 
        {  
           obtainWager( ) 
        };

/*  card deck selection buttons  */

    var checkChoice1         = document.getElementById(deck1Lit);
        checkChoice1.onclick = function() 
        {  
           cardDirectory     = standardDirectory;
           removeDeckTable();
        };

    var checkChoice2         = document.getElementById(deck2Lit);
        checkChoice2.onclick = function() 
        {  
           cardDirectory     = specialDirectory;
           removeDeckTable(); 
        };

    var checkChoice3         = document.getElementById(deck3Lit);
        checkChoice3.onclick = function() 
        {  
           cardDirectory     = additionalDirectory;
           removeDeckTable(); 
        };


    var checkChoice5         = document.getElementById(deck4Lit);
        checkChoice5.onclick = function() 
        {  
           cardDirectory     = harryPotterDirectory;
           removeDeckTable(); 
        };

//
//  FUNCTIONS follow 
//
//****This function initializes variables prior to starting a new gambling session.

  function initializeSession() 
  {    
       useSpecialDeck                  = false;
       currentHand                     = [0,54,55,56,0];    //set to five turned down cards
       displayCurrentHand();                                //display that arrangement       

       response                        = ' '; 
       while (response                == ' '  )     
       { 
           response               = prompt('Do you wish to have a JOKER in the deck? \n <Y or N> ' );

           if   ( response            == 'Y' || response    == 'y'  || 
                  response            == 'N' || response    == 'n'   )
           {      if   (response      == 'Y' || response    == 'y'   )
                       {jokerInDeck    = true;   }
                  else {jokerInDeck    = false;  }
           }
           else { response             = ' ';    }                      
       }  

       if   (  jokerInDeck) 
            {  newInformation      = 'Pays 500 to 1  ';    
               document.getElementById('odds01').innerHTML = newInformation;
            }  
       else {  newInformation      = 'Not Possible';    
               document.getElementById('odds01').innerHTML = newInformation;
            }

        setCheckBoxes(disableLit);                  //prevents checking before Start
        disableButton(btnLit + 2);                  //disables Discard button (not needed);    

        obtainWager( );

// ***  Code to access alternate deck

         response                        = ' '; 
         while (response                == ' '  )     
         { 
             response                    = prompt('Do you wish to use a special deck? \n <Y or N> ' ); 
             if   ( response            == 'Y' || response          == 'y'  || 
                    response            == 'N' || response          == 'n'   )
             {     if   (response       == 'Y' || response          == 'y'   )
                        {useSpecialDeck  = true;    
                         getCardDeckChoice();                    
                        }
                   else {useSpecialDeck  = false;   
                         cardDirectory   = standardDirectory; 
                         currentHand     = [0,0,0,0,0];   //set card hand to initial display 
                         displayCurrentHand();             
                        }
             
             }

             else { response             = ' ';     }                      
         }  
  
//***

        displayInformation(handDescriptionLit, "To begin, click 'Start' Button");
  }

//****This function displays the menu for a card directory selection 

  function getCardDeckChoice() 
  { 
// 
//   disableButton(btnLit + 1);
//   disableButton(btnLit + 3);
//   disableButton(btnLit + 4);

   document.getElementById('deckChoices').style.display    = 'block';
   document.getElementById('controlButtons').style.display = 'none';
   removeTable  = true;
  }
  
//****This function removes the deck selection table

  function removeDeckTable() 
  {
   document.getElementById('deckChoices').style.display    = 'none';
   document.getElementById('controlButtons').style.display = 'block';
   removeTable  = false;
//   enableButton(btnLit + 1);
//   enableButton(btnLit + 3);
//   enableButton(btnLit + 4);

   currentHand           = [0,0,0,0,0];   //set card hand to initial display 
   displayCurrentHand();                  //display that arrangement   
  }
  
//****This function resets all the checkboxes to be unchecked and disabled

  function setCheckBoxes(checkboxChange) 
  { 
        var  tempId  = ' ';
        for ( i = 0;  i < totalInHand; i++ ) 
        { tempId = checkLit + '0' + i;
          document.getElementById(tempId).checked = false; 
          if   (checkboxChange   == disableLit ) 
          {     document.getElementById(tempId).disabled  = true;  }
          if   (checkboxChange   == enableLit  ) 
          {     document.getElementById(tempId).disabled  = false; }
        }  
   }
  
//****This function generates the array result which holds totalRequested random numbers

  function createResultArray() 
  { 
    var totalRequested       = 10;
    var upperLimit           = 52;     //use 53 to include a joker; 52 otherwise.
    var matching             = false;
    var duplicatesAllowed    = false;  //specifies if duplicates are allowed

    if  (jokerInDeck)          { upperLimit = 53}; 
  
        for ( i = 0;  i < totalRequested; i++ ) 
        {  var randomNumber    =   getRandomNumber(upperLimit);

           if  (i              === 0) 
               {result[i]      =   parseInt(randomNumber);}

//         determines if any previous number matches current one  
           matching            = false; 
           for (j = 0;       j <  i && i > 0; j++ )  
           {   if ( result[j]  === parseInt(randomNumber) )
                    { matching =   true;            
                      j        =   i;     }
           } 
             
//      if matching and duplicatesAllowed, current variable written; otherwise discarded

          if   (  matching)
               {  if   ( duplicatesAllowed  )                 
                       { result[i]  = parseInt(randomNumber); }
                  else { i -= 1;                              }
               }                  
          else { result[i]  = parseInt(randomNumber);         } 	  
        }

//      transfers first totalInHand cards to currentHand array

        for ( i = 0;  i < totalInHand; i++ )  
        {   currentHand[i]  = result[i];   }
      
//***********
//***********
//>>>>>>Following line used to set up test hands;  overrides others
//       currentHand     = [53,53,53,53,53]; 

  }

//****This function, called by function createResultArray, generates a random number 
//****from 1 to upperLimit;

 function getRandomNumber (upperLimit)
   { var randomNumber = Math.floor( Math.random() * upperLimit) + 1;
     return randomNumber;
   }

//****This function examines the checkboxes to determine the indicated cards to discard
  function determineDiscards() 
  {
//**    These functions allow flipping the boolean value of the checkfields
   var  boxNumber              = 00; 
   var ckOne      	       = document.getElementById(checkLit + "00");
        ckOne.onchange         = function()  {  
        boxNumber              = 0; 
        indicateCardDiscarded (boxNumber);   };
   var ckTwo      	       = document.getElementById(checkLit + "01");
        ckTwo.onchange         = function()  {  
        boxNumber              = 1; 
        indicateCardDiscarded (boxNumber);   };      
   var ckThree      	       = document.getElementById(checkLit + "02");
        ckThree.onchange       = function()  {  
        boxNumber              = 2;
        indicateCardDiscarded (boxNumber);   }; 
   var ckFour      	       = document.getElementById(checkLit + "03");
        ckFour.onchange        = function()  {  
        boxNumber              = 3;
        indicateCardDiscarded (boxNumber);   }; 
   var ckFive      	       = document.getElementById(checkLit + "04");
        ckFive.onchange        = function()  { 
        boxNumber              = 4; 
        indicateCardDiscarded (boxNumber);   };         
  };

  function indicateCardDiscarded (boxNumber) {
    if   ( document.getElementById(checkLit + "0" + boxNumber).checked )
         { document.getElementById(cardLit  + "0" + boxNumber).style.backgroundColor 
            = "blue";      
         }
    else { document.getElementById(cardLit  + "0" + boxNumber).style.backgroundColor 
            = "lightblue"; 
         }
  };

//****This function replaces the discarded cards
  function replaceDiscards() 
  {   var  tempId  = ' ';
      for (i = 0;  i < totalInHand; i++ ) 
      {    tempId = checkLit  + '0' + i;   
           if   (  document.getElementById(tempId).checked )
                {  currentHand[i]    =  result[i + 5];     } 
      }
  };
   
//****This function modifies HTML to display the cards in the current currentHand array.  
//****It obtains each index from currentHand array, uses that to obtain the 
//****currentCardImage value from the getCardImage array, and subsequently builds
//****HTMLCardRow which it uses to replace part of the website's HTML and display 
//****the new cards 
//****card  00 is the back of the cards
//****cards 01 thru 52 are the faces of the cards
//****cards 53 thru 64 are the dozen different joker cards 
  
  function displayCurrentHand() 
  { 
    var HTMLCardRow          = ' ';
    var currentCardImage     = '---';
    var cardImage            = '---';
    var cardIndex            = 00;
    
    for (i = 0;  i < totalInHand; i++ )
    {   cardIndex                        = parseInt(currentHand[i]);
        if    (  cardIndex              != 53 )                           //indicates not a joker card
              {  currentCardImage        = getCardImage(cardIndex);    }
        else  {  if   ( useSpecialDeck   ) 
                      { selectedJoker            =  1 ;                }  //Special decks have 1 joker       
                 else {  if   ( selectedJoker   ==  00  )                        
                              { cardIndex        =  parseInt(getRandomNumber(12) + 1); 
                                if (  cardIndex  <  1  || cardIndex > 12 )
                                   {  cardIndex  =  1 ; }
                                selectedJoker    =  cardIndex;                         }  // 1 - 12      
                      }
                 currentCardImage                =  getJokerImage(selectedJoker); 
                      
              }                         
        HTMLCardRow                             +=  makeDataElement(currentCardImage );
    }

    document.getElementById(cardRowLit).innerHTML = HTMLCardRow;
  }

//****This function, using the cardIndex value, obtains currentCardImage 
//****from the cardsInDeck array. It is called by function displayCurrentHand
//****Note:  Each different deck is placed in a different folder.
//           These folders have the same file names for corresponding cards 

 function getCardImage(cardIndex)
  {
// array of partial file names of card images
//**
    var cardIndexMax         = 55;
    var cardsInDeck          = [
        "0000Back", 
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
        "0414SpadesAC",   "joker placeholder", 
        "0000Back"  ,     "0000Back",       "0000Back"  ];
//**    "LetterR",        "LetterT",        "LetterW"    ];
//**
//**
    currentCardImage      = cardsInDeck[cardIndex];
    return currentCardImage;    
  } 

//****This function, using the cardIndex value, obtains currentCardImage 
//****from the jokers array.  It is called by function displayCurrentHand 

 function getJokerImage(cardIndex)
  {
// array of partial file names of joker images
//**
    var jokerIndexMax        = 12;
    var jokers               = [ "dummy",
        "9901Joker",      "9902Joker",      "9903Joker",     "9904Joker", 
        "9905Joker",      "9906Joker",      "9907Joker",     "9908Joker", 
        "9909Joker",      "9910Joker",      "9911Joker",     "9912Joker"   ];
//**
    currentCardImage      = jokers[cardIndex];
    return currentCardImage;    
  }  
  
//****This function builds the DataElement using currentCardImage
//****It is called by function displayCurrentHand

  function makeDataElement(cardImage)
  {      
      var dataBegin1             = '<td  id = "card0'      ;
      var dataBegin2             = '"  >  <img src = "decks/'    ;
      var cardFileType           = '.jpg"'                 ;   
      var dataEnd                = ' alt = "" > </td>'     ;

      var dataElement            = dataBegin1    + i    + dataBegin2         
                                 + cardDirectory + '/'  + cardImage + cardFileType + dataEnd;

      return dataElement;       
  }

//****This function identifies what kind of poker hand the final five cards indicate 
//****and reveals what it pays 

// NOTE:  Having these variables within function forgoes need to initialize them each time

  function identifyHand () 
  { 
    handDefined              = "--";
    var payoff               = 00;  //indicates payoff of a winning hand  

    var totalClubs           = 00;  //max value is totalInHand value
    var totalDiamonds        = 00;  //max value is totalInHand value
    var totalHearts          = 00;  //max value is totalInHand value
    var totalSpades          = 00;  //max value is totalInHand value
    var jokerPresent         = false;
//16 total ranks, 00 thru 15. Ace low (01) thru Ace high (14).  00 and 15 not used
    var totalEachRank        = [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00];
    var totalPairs           = 00;  //max value is 2
    var totalTrios           = 00;  //max value is 1, more than 1 not possible
    var totalQuartets        = 00;  //max value is 1, more than 1 not possible
    var totalQuintets        = 00;  //max value is 1, more than 1 not possible
    var indSuit              = 00;  //values: clubs 1; diamonds 2; hearts 3; spades 4
    var indRank              = 00;  //values: a = 1 or 14, 2 = 2 thru K = 13;
    var highCard             = 00;
    var lowCard              = 00;
//    var highCardString       = '  ';

    var randomValue          = 00;
    var highestRankplus1     = 15;  //Note:  Highest rank is 14 for Ace
    var totalinSequence      = 00;  //totalinSequence = 5 indicates a straight
   
    var inRank               = 00;
    var outRank              = 00;
    var pointerRank01        = 00;  //indicates rank of 1st pair
    var pointerRank02        = 00;  //indicates rank of 2nd pair
    var pointerRank          = 00;  //indicates rank of trio, quartet, or quintet
    var pointerSuit          = 00;  //indicates suit of flush
    var temp                 = 00;

//  following boolean variables indicate whether certain card hands found

    var fiveofaKind          = false;  //Note:  not possible with standard deck  
    var royalFlush           = false;
    var straightFlush        = false;
    var fourofaKind          = false;  
    var flush                = false;
    var fullHouse            = false;
    var straight             = false;
    var aceLowStraight       = false; 
    var bustedStraight       = false;
    var bustedFlush          = false;      
    var threeofaKind         = false;  
    var twoPairs             = false;  
    var twoofaKind           = false;
  
    var zeroPairsFound       = true;  

//  used to determine rank;  necessary for cards over 11 (i.e., J=11, Q=12, K=13 A=14)
    var rank                 = 00; 
    var rank01               = 00; 
    var rank02               = 00; 
 
//  Identifies each card by its suit (1-4) or rank (2-14).  Aces are 1 or 14.
//  The joker has neither rank or suit but can assume any desired one.

    for (i = 0;  i < totalInHand; i++ )
    {   randomValue              = currentHand[i];
        if    ( randomValue     == 53  )
              { jokerPresent     = true;   }
        else  
        {     indSuit            = parseInt(Math.floor( ( randomValue - 1) / 13) + 1);
              indRank            = parseInt((randomValue + 1) - ( ( indSuit - 1) * 13 ));
              if (indSuit      === 1)  {totalClubs       += 1; }   
	      if (indSuit      === 2)  {totalDiamonds    += 1; } 
	      if (indSuit      === 3)  {totalHearts      += 1; } 
              if (indSuit      === 4)  {totalSpades      += 1; }

              totalEachRank[indRank] +=  1;
              if (indRank      === 14) {totalEachRank[1] += 1; }
        }
    }

//  Five of any suit indicates a flush;  four of any suit indicates a blusted flush

    if  ( totalClubs == 5 || totalDiamonds == 5 || totalHearts == 5 || totalSpades == 5 )
        { flush              = true; }
    if  ( totalClubs == 4 || totalDiamonds == 4 || totalHearts == 4 || totalSpades == 4 )
        { bustedFlush        = true; }

     if ( flush || bustedFlush)
        { if (totalClubs    > 3) {pointerSuit = 1; }
          if (totalDiamonds > 3) {pointerSuit = 2; } 
          if (totalHearts   > 3) {pointerSuit = 3; } 
          if (totalSpades   > 3) {pointerSuit = 4; }
        }
   
//  Counts cards in ranks so quintets, quartets, trios, or pairs are established

    for (i = 2;  i < highestRankplus1;  i++ ) 
    {   
        if  (totalEachRank[i]  == 5) { totalQuintets   = 1; pointerRank = i; } 
        if  (totalEachRank[i]  == 4) { totalQuartets   = 1; pointerRank = i; } 
	if  (totalEachRank[i]  == 3) { totalTrios      = 1; pointerRank = i; } 
        if  (totalEachRank[i]  == 2)  
        {   totalPairs         += 1; 
            if   (  zeroPairsFound   )
                 {  zeroPairsFound = false;   
                    pointerRank01  = i; } 
            else {  pointerRank02  = i; } 
        }  
    }

//    alert( 'totalEachRank = ' + totalEachRank );

//  Checks for a straight (i.e, five cards in a row) 
//  or busted straight (4 cards arranged so that a different 5th one would make a straight)  

//  straight not possible if any duplicate cards are found
    if  (   totalPairs        == 0 && totalTrios     == 0  &&
            totalQuartets     == 0 && totalQuintets  == 0  )

        for   (i = 1; i < 11; i++  ) 
        {  temp  = parseInt(totalEachRank[i    ] ) +
                   parseInt(totalEachRank[i + 1] ) +               
                   parseInt(totalEachRank[i + 2] ) +
                   parseInt(totalEachRank[i + 3] ) +
                   parseInt(totalEachRank[i + 4] ) ;
           if (temp           == 4)   // 5 adjacent ranks have 4 cards, i.e., busted straight
              {  if (   parseInt(totalEachRank[i + 5])  == 0  ) 
                     {  bustedStraight  = true;               }
              }   
           if (temp           == 5)         //5 adjacent ranks have 5 cards, i.e., straight 
              {  straight      = true; bustedStraight  = false;
                 if  ( i      == 1  )  {aceLowStraight = true;  }     
                 i             = 12; 
              }
         }

//    finds highest single card in hand

      for ( i = highestRankplus1 - 1; i > 1; i-- )            
      {   if ( totalEachRank[i] == 1  ) 
             { highCard          = i;   
               i                 = 1; }
      }
                
//     Determines ranks over 10 (returned variable is outRank)

       rank                     = determineRank(pointerRank);

       if  ( pointerRank01      < pointerRank02  )
           { temp               = pointerRank01;
             pointerRank01      = pointerRank02; 
             pointerRank02      = temp;          }

       rank01                   = determineRank(pointerRank01);
       rank02                   = determineRank(pointerRank02);

//     Ranks highest Card in hand; 
//     as determineRank function is shared, highestCard MUST be determined last

       determineRank(highCard);

       if ( aceLowStraight) 
       {    if   (   totalEachRank[5] = 1)   
                 { highCardString = "Five High "; }
            else { highCardString = "Four High "; }
       }  
 
//     Assigns handDefined field 

    if (  jokerPresent    ) 
    //  reset variables to indicate joker's influence 
       {  
    // bustedStraight becomes a straight; joker fills the vacant empty slot of the 5
       if  (  bustedStraight)   
           {  straight         = true;
              temp  = parseInt(totalEachRank[1] ) +
                      parseInt(totalEachRank[2] ) +               
                      parseInt(totalEachRank[3] ) +
                      parseInt(totalEachRank[4] ) +
                      parseInt(totalEachRank[5] ) ;
              if    (temp   ==  4  ) 
              {     if   (  totalEachRank[5] == 0 ) 
                         {  highCardString = "4 card high "; }
                    else {  highCardString = "5 card high "; } 
              } 
           }
    // a quartet plus a joker becomes a quintet 
          if (totalQuartets   ==  1  )  
             { totalQuintets   =  1;
               totalQuartets   =  0; }
    // a hand with only four cards of a suit plus a joker becomes a flush   
          if  (  bustedFlush) 
              {  flush         = true; } 
   // a trio with a joker and an odd card becomes a quartet (accompanying pair not possible) 
          if ( totalTrios         ==  1  )  
             { totalTrios          =  0;  
               totalQuartets       =  1; }
   // two pair and a joker becomes a full house (the two higher matching cards becomes a trio)
          if   (  totalPairs      ==  2  )  
               {  totalTrios       =  1;  
                  totalPairs       =  1;  
                  rank             =  rank01; 
                  rank01           =  rank02;  
                  rank02           =  ' ';     }
   // one pair, a joker,and two odd cards becomes a trio 
          else {   if   (  totalPairs  ==  1  )  
                        {  totalTrios   =  1;  
                           rank         =  rank01;
                           totalPairs   =  0;  
                           rank01       =  0;  
                           rank02       =  0;   }
  // with four odd cards and a joker the joker makes the highcard becomes a pair 
                   else {  totalPairs   =  1;
                           pointerRank01 = highCard;  
                           rank01       =  highCard;  
                           rank02       =  0;   }
               }
     }

    handId                      = '00';

    if (  totalQuintets        == 1                  ) 
       {  fiveofaKind           = true;     // five of a kind is possible only with a joker.
          handId                = '01';
          handDefined           = "FIVE " + rank + "s";
          payoff                = 500;
       } 

     if (  flush                 && straight          )  
       {  if  (  totalEachRank[10]  == 1 &&  totalEachRank[11] == 1 &&
                 totalEachRank[12]  == 1 &&  totalEachRank[13] == 1 &&
                 totalEachRank[14]  == 1 )  // Verifies top five cards are present 
              {  royalFlush     = true; 
                 handDefined    = "Royal FLUSH";  //a Royal Flush does not use a joker
                 handId         = '02';
                 payoff         = 250;
              }   
          else
              {  straightFlush  = true;
                 handDefined    = highCardString + "STRAIGHT FLUSH";
                 handId         = '03';
                 payoff         =  50;
              } 
       }
    if (  totalQuartets        == 1                  ) 
       {  fourofaKind           = true;
          handId                = '04'; 
          handDefined           = "FOUR " + rank + "s";
          payoff                =  25;
       } 
    if (  totalTrios           == 1     && totalPairs == 1   )
       {  fullHouse             = true;
          handId                = '05';  
	  handDefined           = "FULL HOUSE, " + rank   + "s over " 
                                                 + rank01 + "s";
          payoff                =   9; 
       }

    if (  flush  && !straight  )
       {  handId                = '06'; 
          payoff                =   6; 
          if (pointerSuit      == 1) {handDefined = highCardString + "Flush, all Clubs";    }
          if (pointerSuit      == 2) {handDefined = highCardString + "Flush, all Diamonds"; }
          if (pointerSuit      == 3) {handDefined = highCardString + "Flush, all Hearts";   }
          if (pointerSuit      == 4) {handDefined = highCardString + "Flush, all of Spades";}  
       } 

    if (  straight              && !flush            )            
       {  handId                = '07';
          handDefined           =   highCardString + "Straight";
          payoff                =   4; 
       }

    if (  totalTrios      == 1  && !fullHouse        )
       {  handId                = '08';
          threeofaKind          = true;   
	  handDefined           = "Three " + rank + "s";
          payoff                =   3; 
       } 
     
    if (  totalPairs           == 2  )
       {  handId                = '09';
          twoPairs              = true;   
	  handDefined           = "Two Pairs, " + rank01 + "s and " + rank02 + "s";
          payoff                =   2; 
       }
 
    if (  totalPairs               == 1 && !fullHouse    && handDefined == '--' )
       {  
          if  ( pointerRank01       > 10                  )        
          {     twoofaKind          = true;
                handId              = '10';    
                payoff              =   1;    
                if ( pointerRank01 == 11)
                   { handDefined    = "A Pair of Jacks";  } 
                if ( pointerRank01 == 12)
                   { handDefined    = "A Pair of Queens"; } 
                if ( pointerRank01 == 13)
                   { handDefined    = "A Pair of Kings";  }
                if ( pointerRank01 == 14)
                   { handDefined    = "A Pair of Aces";   } 
          }
          else { handDefined        = "A Pair of " + rank01 + "s"; 
                 payoff             = 0;                  }
       }
 
    if     ( handDefined           == "--" && bustedFlush && bustedStraight   )
           { handDefined            = 'Busted Flush & Straight '  ;
             payoff                 =  0 ;  }
 
    if     ( handDefined           == "--" && bustedFlush    )
           { handDefined            = 'Busted Flush '  ;  
             payoff                 =  0 ;}
 
    if     ( handDefined           == "--" && bustedStraight )
           { handDefined            = 'Busted Straight '  ;  
             payoff                 =  0 ;}
 
//  catch all for any undefined hand
    if  (  handDefined             ==  '--' ) 
        {  payoff                   =  0 ;
           handDefined              = highCardString;     }

    handDefined                    +=  "-- pays " + payoff; 
   
    if   ( payoff                 ===  1 )
         { handDefined             += " time";  }
    else { handDefined             += " times"; }   
 
    if   (   payoff                == 0)
         {   sessionTotal          -= tokenAmount;   }
    else   
         {   sessionTotal          += ( tokenAmount * payoff );  }

 
    if   ( handId                  != '00' ) 
         { document.getElementById('hand' + handId).style.backgroundColor = "white";
           document.getElementById('odds' + handId).style.backgroundColor = "white"; } 
            
//   
//        alert("totalQuartets    = " + totalQuartets);
//        alert("totalTrios       = " + totalTrios);
//        alert("totalPairs       = " + totalPairs);
//        alert("pointerRank      = " + pointerRank);
//        alert("pointerRank01    = " + pointerRank01);
//        alert("pointerRank02    = " + pointerRank02);
//        alert("pointerSuit      = " + pointerSuit);
//        if   (flush)       {alert("Flush detected");    }
//        if   (straight)    {alert("straight detected"); }  
//        alert ("FINAL Hand Defined  = " + handDefined );
 }

//****This function determines the rank of the value passed to it.

  function determineRank(inRank)
  {      
       if  ( inRank          < 11  )
           { outRank         = inRank.toString();  
             highCardString  = outRank + " high "; 
           }
       else
           {   if ( inRank  == 11) 
                  {outRank   = "J"; highCardString   =  "Jack high ";  }
               if ( inRank  == 12) 
                  {outRank   = "Q"; highCardString   =  "Queen high "; }
               if ( inRank  == 13) 
                  {outRank   = "K"; highCardString   =  "King high ";  }
               if ( inRank  == 14) 
                  {outRank   = "A"; highCardString   =  "Ace high ";   }
           }

//     
       return outRank;    
  }   

  function obtainWager( )
  {
        tokenAmount             = 00;
        tokenAmountString       = "  ";
        while (tokenAmount < 5)
        {  
           tokenAmount = Math.floor(prompt("Five Dollar mininum bet, whole numbers only.  \n What will your repeated wager be? ") );
           tokenAmount          = parseInt(tokenAmount);
           tokenAmountString    = tokenAmount.toString();
           IsItNumeric(tokenAmountString);
        }  
  }

  function IsItNumeric(tokenAmountString)
   {   var strValidChars = "0123456789";
       var strChar       = " ";
 
       if   (  tokenAmountString.length  == 0   )
            {  tokenAmount                = 0;  }
       else {  for (i = 0; i < tokenAmountString.length; i++  )
                   { strChar = tokenAmountString.charAt(i);
                     if (strValidChars.indexOf(strChar) == -1 )
                        {  tokenAmount     =  0;              
                           i               = tokenAmountString.length  }
                   }
            } 
   }

//function allnumeric(tokenAmount)  
//  {  
//      var numbers = /^[0-9]+$/;         // [0-9]; 
//      alert('parseInt of tokenAmount = ' + parseInt(tokenAmount) );
//      tokenAmount                    = parseInt(tokenAmount);

//    if   ( ! tokenAmount.value.match(numbers)   )  
//      if   ( !isNumeric(tokenAmount)   )  
//           { alert('Please input numeric characters only');  
//             tokenAmount = 0;                               }  
//  }   

//****This function enables specified Button  
  function enableButton(specifiedButtonId) 
  {   
      document.getElementById(specifiedButtonId).disabled = false;
  }

//****This function disables specified Button 
  function disableButton(specifiedButtonId) 
  {     
      document.getElementById(specifiedButtonId).disabled = true;
  }

//****This function changes the information on a specfied button. 
//****NOTE: some buttons are used as screens 
  function displayInformation(specifiedButtonId, newInformation) 
  { 
      sessionTotalForm              = ".00";      

      if  ( specifiedButtonId      == totalFieldLit )
          { newInformation          = formatSessionTotal(sessionTotalForm);  }

      document.getElementById(specifiedButtonId).innerHTML = newInformation; 
  }
           
  function formatSessionTotal()
  { 
      var negativeAmount        =   false;
      if  (  sessionTotal       <   0      )
          {  negativeAmount     =   true;  }
  
      if    (  negativeAmount     )
            {  document.getElementById(totalFieldLit).style.color = "red"   ; 
               document.getElementById(totalFieldLit).style.backgroundColor = "coral" ; }
      else  {  document.getElementById(totalFieldLit).style.color = "black" ; 
               document.getElementById(totalFieldLit).style.backgroundColor = "white" ; }

      var winningsString        =     Math.abs(sessionTotal).toString(); 
      var counter               =   0; 
      for ( i = winningsString.length - 1;  i >= 0; i-- )            
      {   counter ++;                   
          sessionTotalForm      = winningsString.charAt(i) + sessionTotalForm;
          if   (    counter    ==  3  &&  i > 0    )
               {    sessionTotalForm  = "," + sessionTotalForm; 
                    counter     =  0;                                }          
      }     
      sessionTotalForm          =  "$ " + sessionTotalForm;     
      if   ( negativeAmount     )
           { sessionTotalForm   =  "( " + sessionTotalForm + " )";   }
      else { sessionTotalForm   =         sessionTotalForm + "  ";   } 
      return sessionTotalForm;

  }