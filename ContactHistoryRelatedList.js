({
	// Load historyRecords from Salesforce
doInit: function(component, event, helper) {

    // Create the action
    var action = component.get("c.getEmailUnsub");
	action.setParams({
            "contactId": component.get("v.recordId")
        });
        
    // Add callback behavior for when response is received
    action.setCallback(this, function(response) {
        var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            component.set("v.historyRecords", response.getReturnValue());
        }
        else {
            console.log("Failed with state: " + state);
        }
    });

    // Send action off to be executed
    $A.enqueueAction(action);
}
})