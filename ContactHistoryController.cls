public with sharing class ContactHistoryController {

    @AuraEnabled
    public static List<ContactHistory> getEmailUnsub(Id contactId) {
        // Perform isAccessible() checking first, then
        return [SELECT Id,
                ContactId,
                CreatedById,
                CreatedDate,
                Field,NewValue,
                OldValue 
                FROM ContactHistory 
                WHERE ContactId=:contactId];
    }
    
    
}