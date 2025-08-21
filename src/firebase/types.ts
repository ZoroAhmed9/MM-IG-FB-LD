@@ .. @@
 export interface UserCredentials {
+  id?: string;
   platform: string;
   accessToken: string;
   pageId?: string;
+  instagramUserId?: string;
+  linkedInUserId?: string;
+  adAccountId?: string;
+  campaignId?: string;
   expiryDate?: string;
   type: string;
   userId: string;
   createdAt?: any;
   updatedAt?: any;
 }