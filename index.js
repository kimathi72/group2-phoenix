//@author Group2-phoenix 



staircase = (num) => {       //define arrow function 'staircase' that console logs a number of steps depending on the 'num' passed in as an argument. 


    
    let step = "#";  // define step variable to represent a string of character '#'
    
    for (let count = 0; count<=num; count++){      //create a for loop: as long as counter 'count' is equal to or less than the 'num' of steps  
        console.log(step +"\n");    //console.log 'step' hence prints "#" string
        step = step + "#"; //concatinate "#"to string 'step'


        


        

        
    }
    let closeTag = "The number of steps is " + num ; 
    return closeTag;



}

console.log(staircase(30)); 



// manipulateDom = () => {
//     let rootDiv = document.getElementById('root').appendChild(stairsForm).appendChild(enterNum);
//     rootDiv.style.height = "80%";
//     rootDiv.style.width = "80%";
//     rootDiv.style.textAlign = "center";

//     let stairsForm = document.createElement('form');
//     stairsForm.setAttribute('id', "stairsForm");
//     stairsForm.style.margin = '10px';
//     stairsForm.style.padding = '10px';
//     stairsForm.style.color = 'white';
//     stairsForm.style.backgroundcolor = "grey";

    

    
  


//     let enterNum = document.createElement("TEXTAREA").value = "enter the number of steps";
//     let submit = document.createElement("INPUT");
//     submit.setAttribute("type", "submit");
    

    
//     stairsForm.appendChild(submit);



    
    
    



// }

// manipulateDom();