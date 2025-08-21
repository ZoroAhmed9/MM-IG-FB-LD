import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';

@@ .. @@
      console.log('📋 Loading user credentials from Firestore...');
      const userId = context.auth.uid;
      const admin = require('firebase-admin');
      const db = admin.firestore();
      
      // Load Facebook Page credentials
      const facebookCredDoc = await db.collection('users').doc(userId).collection('credentials').doc('facebook').get();
      if (!facebookCredDoc.exists) {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Facebook Page credentials not found. Please add them in Credential Vault.'
        );
      }
      const facebookCreds = facebookCredDoc.data();
      
      // Load Facebook Ads credentials
      const adsCredDoc = await db.collection('users').doc(userId).collection('credentials').doc('facebook_ads').get();
      if (!adsCredDoc.exists) {
        throw new functions.https.HttpsError(
          'failed-precondition',
          'Facebook Ads credentials not found. Please add them in Credential Vault.'
        );
      }
      const adsCreds = adsCredDoc.data();
      
      // Load Instagram credentials (optional)
      const instagramCredDoc = await db.collection('users').doc(userId).collection('credentials').doc('instagram').get();
      const instagramCreds = instagramCredDoc.exists ? instagramCredDoc.data() : null;
      
      console.log('✅ Credentials loaded successfully');