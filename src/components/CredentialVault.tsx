@@ .. @@
   const loadSavedCredentials = async () => {
     if (!currentUser) return;
     
     try {
       const result = await getCredentials(currentUser.uid);
       const credentials = result.data || [];
       setSavedCredentials(credentials);
       
       // Auto-load Facebook credentials if they exist
       const facebookCred = credentials.find(cred => cred.type === 'facebook');
       if (facebookCred) {
         setAccessToken(facebookCred.accessToken || '');
         setPageId(facebookCred.pageId || '');
         setExpiryDate(facebookCred.expiryDate || '');
       }
       
       // Auto-load Instagram credentials if they exist
       const instagramCred = credentials.find(cred => cred.type === 'instagram');
       if (instagramCred) {
         setInstagramAccessToken(instagramCred.accessToken || '');
         setInstagramUserId(instagramCred.instagramUserId || '');
       }
       
       // Auto-load LinkedIn credentials if they exist
       const linkedInCred = credentials.find(cred => cred.type === 'linkedin');
       if (linkedInCred) {
         setLinkedInAccessToken(linkedInCred.accessToken || '');
         setLinkedInUserId(linkedInCred.linkedInUserId || '');
       }
     } catch (error) {
       console.error('Error loading credentials:', error);
     }
   };