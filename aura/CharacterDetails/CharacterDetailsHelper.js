({
	fetchCharDetails : function(component) {
		var action = component.get('c.getDetails');
        
        action.setCallback(this, (function(response) {
            var status = response.getState();
            if (status === "SUCCESS"){
                console.log("HELLO");

               

            }
            else if(status === "INCOMPLETE"){
            	console.log("Server is not responding!");
            }
            else if(status === "ERROR"){
            	console.log("ERROR: " + errorMessage);
            }           
    	})); 
    },
    handleSubmit : function(component) {
		var action = component.get('c.getDetails');
        
        action.setCallback(this, (function(response) {
            var status = response.getState();
            if (status === "SUCCESS"){
                console.log('It works!');
            }
            else if(status === "INCOMPLETE"){
            	console.log("Server is not responding!");
            }
            else if(status === "ERROR"){
            	console.log("ERROR: " + errorMessage);
            }           
    	}));
    },
    Randomize : function(component, char) {
        const arr1 = ['Warrior', 'Wizard', 'Rogue', 'Paladin', 'Druid'];
        const arr2 = ['Staff', 'Sword', 'Hammer', 'Fork', 'Ax'];
        const arr3 = ['Fast', 'Strong', 'Smart', 'Charismatic', 'Wise'];
        const arr4 = ['Kills', 'Teaches', 'Loves', 'Ruins', 'Supports'];
        const arr5 = ['Moutains', 'Oceans', 'Forest', 'Underworld', 'Flatland'];
        
        let num1 = Math.floor(Math.random() * (5));
        let num2 = Math.floor(Math.random() * (5));
        let num3 = Math.floor(Math.random() * (5));
        let num4 = Math.floor(Math.random() * (5));
        let num5 = Math.floor(Math.random() * (5));
        
        let val1 = arr1[num1];
        let val2 = arr2[num2];
        let val3 = arr3[num3];
        let val4 = arr4[num4];
        let val5 = arr5[num5];
        let string = `A mighty ${val1} who comes from the ${val5}. One who ${val4} all the enemies using a ${val2}. Very ${val3}.`;
        

        component.set("v.Descrip",string);
        let action = component.get("c.updateChar");
        action.setParams({"charId":component.get("v.CharId"), "random":string});
        action.setCallback(this, (function(response) {
			console.log(response.getReturnValue());
        }));
        $A.enqueueAction(action);
    },
})
