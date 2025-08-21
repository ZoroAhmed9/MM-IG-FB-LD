@@ .. @@
   const loadAllCredentials = async () => {
     if (!currentUser) return;

     try {
       const { success, data } = await getCredentials(currentUser.uid);
       if (success && data) {
         const credentialsMap: any = {};
         data.forEach((cred: any) => {
           credentialsMap[cred.type] = cred;
         });
         setStoredCredentials(credentialsMap);
         
         // Check if current platform has credentials
         const hasPlatformCreds = !!credentialsMap[platform];
         setHasCredentials(hasPlatformCreds);
       } else {
         setHasCredentials(false);
       }
     } catch (error) {
       console.error('Error loading credentials:', error);
       setHasCredentials(false);
     }
   };