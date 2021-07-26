({
	doInit : function(component, event, helper) {
		let action = component.get("c.getChars");
        action.setCallback(this, function(response) {
            component.set("v.charList", response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})
