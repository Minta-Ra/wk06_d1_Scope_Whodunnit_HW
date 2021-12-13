
// //Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);
//   // Predicted verdict: 'Miss Scarlet'
  
//   //Episode 2
//   const murderer = 'Professor Plum';
  
//   const changeMurderer = function() {
//    murderer === 'Mrs. Peacock';
//   }
  
//   const declareMurderer = function() {
//    return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   // Predicted verdict: 'Professor Plum'
  
//   //Episode 3
//   let murderer = 'Professor Plum';
  
//   const declareMurderer = function() {
//    // new vawiable for murderer which lives only inside of this function
//    let murderer = 'Mrs. Peacock';
//    return `The murderer is ${murderer}.`;
//   }
  
//   const firstVerdict = declareMurderer();
//   console.log('First Verdict: ', firstVerdict);
  
//   const secondVerdict = `The murderer is ${murderer}.`;
//   console.log('Second Verdict: ', secondVerdict);
//   // Predicted firstVerdict: 'Mrs. Peacock'
//   // Predicted secondVerdict: 'Professor Plum'
  
//   //Episode 4
//   let suspectOne = 'Miss Scarlet';
//   let suspectTwo = 'Professor Plum';
//   let suspectThree = 'Mrs. Peacock';
  
//   const declareAllSuspects = function() {
//    let suspectThree = 'Colonel Mustard';
//    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
//   }
  
//   const suspects = declareAllSuspects();
//   console.log(suspects);
//   console.log(`Suspect three is ${suspectThree}.`);
//   // Predicted suspects: 'Miss Scarlet', 'Professor Plum', 'Colonel Mustard'
//   // Predicted suspect three: 'Mrs. Peacock'
  
//   //Episode 5
//   const scenario = {
//    murderer: 'Miss Scarlet',
//    room: 'Kitchen',
//    weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//    scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//    return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);
//   // Predicted verdict weapon: 'Revolver'
  
//   //Episode 6
//   let murderer = 'Colonel Mustard';
  
//   const changeMurderer = function() {
//    murderer = 'Mr. Green';
  
//    const plotTwist = function() {
//      murderer = 'Mrs. White';
//    }
  
//    plotTwist();
//   }
  
//   const declareMurderer = function () {
//    return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   // Predicted verdict: 'Mrs. White'
  
//   //Episode 7
//   //1
//   let murderer = 'Professor Plum';
//   //skip
//   const changeMurderer = function() {
//    // 3
//    murderer = 'Mr. Green';
//    //skip
//    const plotTwist = function() {
//      // 5
//      let murderer = 'Colonel Mustard';
//      // skip
//      const unexpectedOutcome = function() {
//        // 7
//        murderer = 'Miss Scarlet';
//      }
//      // 6
//      unexpectedOutcome();
//    }
//    // 4
//    plotTwist();
//   }
  
//   // skip
//   const declareMurderer = function() {
//    return `The murderer is ${murderer}.`;
//   }
//   // 2
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   // Predicted verdict: 'Mr. Green'

  //Episode 8
  // Const scenario is an object. Const means it needs to be an object, but properties can be changed
  // Same with const arrays
  const scenario = {
   murderer: 'Mrs. Peacock',
   room: 'Conservatory',
   weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
   scenario.murderer = 'Mrs. Peacock';
   scenario.room = 'Dining Room';
  
   const plotTwist = function(room) {
     if (scenario.room === room) {
       scenario.murderer = 'Colonel Mustard';
     }
  
     const unexpectedOutcome = function(murderer) {
       if (scenario.murderer === murderer) {
         scenario.weapon = 'Candle Stick';
       }
     }
  
     unexpectedOutcome('Colonel Mustard');
   }
  
   plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
   return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);
  // Predicted verdict: 'Candle Stick'
  
//   // Episode 9
//   let murderer = 'Professor Plum';
 
//   if (murderer === 'Professor Plum') {
//    let murderer = 'Mrs. Peacock';
//   }
  
//   const declareMurderer = function() {
//    return `The murderer is ${murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);
//   // Predicted verdict: 'Professor Plum'