({

    Randomize : function(component) {
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
        let healthpool = Math.floor(Math.random() * (100 - 10) + 10);

       component.set("v.Details",string);
       component.set("v.abscore1",Math.floor(Math.random() * (100)));
       
       component.set("v.abscore2",Math.floor(Math.random() * (20 - 3) + 3));
       component.set("v.abscore3",Math.floor(Math.random() * (20 - 3) + 3));
       component.set("v.abscore4",Math.floor(Math.random() * (20 - 3) + 3));
       component.set("v.abscore5",Math.floor(Math.random() * (20 - 3) + 3));
       component.set("v.abscore6",Math.floor(Math.random() * (20 - 3) + 3));
       component.set("v.abscore7",healthpool);
       component.set("v.abscore11",healthpool);
       component.set("v.abscore8",Math.floor(Math.random() * (10 - 3 ) + 3));
       component.set("v.abscore9",Math.floor(Math.random() * (300 - 35) + 35));
       
       
	}




})
