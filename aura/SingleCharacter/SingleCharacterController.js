({
	seeDescription : function(component, event, helper) {
		let bool = component.get("v.out");
        bool == false ? component.set("v.out", true) : component.set("v.des", false);
        
        let eve = component.getEvent("ctto");
        eve.setParams({"out" : false})
        eve.fire();
        console.log("sent");

        //let eve2 = component.getEvent("SendCharIdEvent");
        let eve2 = $A.get("e.c:SendCharIdEvent");
        eve2.setParams({"record": component.get("v.char.Id")})
        eve2.fire();
        console.log("sent " + component.get("v.char.Id"));
    
        
	},
    Randomize : function(component, event, helper) {
        let char = component.get("v.char");
        helper.Randomize(component, char);
        
    }
    
})
