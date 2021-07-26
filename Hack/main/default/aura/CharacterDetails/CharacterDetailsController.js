({
	fetchCharDetails : function(component, event, helper) {
		helper.fetchCharDetails(component);
	},
    handleSubmit : function(component, event, helper) {
    	helper.handleSubmit(component);
        alert("You have changed a skill value!");
	},
	fireReturn: function(component){

		let eve = component.getEvent("ctto");
        eve.setParams({"out" : true})
        eve.fire();
        console.log("sent");
	},
	setValue : function(component, event, helper){
		console.log("ahoy " + event.getParam("record"));
		component.set("v.CharId", event.getParam("record"));
        console.log("received 2"); //+ component.get("v.CharId"));

		
	},

	Randomize : function(component, event, helper) {
        let char = component.get("v.char");
        helper.Randomize(component, char);
        
    }
})
