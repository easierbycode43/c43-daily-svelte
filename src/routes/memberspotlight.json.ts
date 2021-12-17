
import { docs_v1, google as google$1 } from 'googleapis';
import credentials from './credentials.json';
import token from './token-docs.json';


/**
 * 11:00:00 AM -> 11:00
 */
function formatDate( str ) {
  return new Date( str ).toLocaleTimeString().split(/\:\d+\s\w+$/)[0];
}


/**
 * Get each testimonial document listed in [DOCUMENT_IDS].
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
 function getTestimonialDocuments( auth, done ) {

    let DOCUMENT_IDS = [
      '1Os7hIb2AEZ0l0gA53zNFAixQ8y5knDWwVHs_jXxQ0n4',
      '1lQD9K7_MS6Mtf43aYEPs9K2fQz4Ga0J4EtKhB5MsrGI',
      '1l56Z_QM6N4PU2x_uW4ZTs4UTkWhlbprO_0-_qS_YlAU',
      '1IH1HzPQtJL-egQen3uRMlr4g295d5C2tGGNntTkY6EM',
      '1hcO5wtILeqzFwIly39M6XFdeCXwRa0bTXM7XtFbGmcY',
      '1iaPQDtRx7iZ07M_3N96SrsMv9G_Bmz4eE5XdmRo5jOY',
      '1Nv1_Ab4QYViz0b2HTHvIJfQE7cjaphipBdNxi7Uwji0',
      '1jwFLsXq_3CaT8mH9Wp7eDJhvUoAswPe7iztinS7IYIw'
    ];

    const doc = google$1.docs({ version: 'v1', auth });

    let responseArr: [
      {
        title?: string,
        body?: object,
        documentStyle?: object,
        namedStyles?: object,
        lists?: object,
        revisionId?: string,
        suggestionsViewMode?: string,
        positionedObjects?: object,
        documentId?: string
      }
    ] | any[] = [];
    
    let $docPromises: Promise<docs_v1.Schema$Document>[] = [];

    for ( let documentId of DOCUMENT_IDS ) {
      let docPromise = doc.documents.get(
        {
            documentId
        }
      );

      $docPromises.push( docPromise );
    }

    Promise.all( $docPromises ).then(
      ( documentArray ) => {
        done({
          body: documentArray
        })
      },
      () => {}
    )

}


export async function get() {
    let done;
    let p = new Promise(resolve => done = resolve);
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google$1.auth.OAuth2(
        client_id, 
        client_secret, 
        redirect_uris[0]
    );
  
    oAuth2Client.setCredentials(token);
    getTestimonialDocuments(oAuth2Client, done);
  
    
    return p;
  }