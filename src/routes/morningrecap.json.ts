
import { google as google$1 } from 'googleapis';
import credentials from './credentials.json';
import token from './token-docs.json';


/**
 * Get each testimonial document listed in [DOCUMENT_IDS].
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
 function getTestimonialDocuments( auth, done ) {

    let DOCUMENT_IDS = [
        // '1iSaPAq7ZWrb3OZDetBK59Rm8GWnbrQNLtmtoeNnBpTI'
        // '1OqV22UO8N2jgzQRerExx1vDkMFNVB46iV1dUNHo2An8'
        '184GnnDN1n0rgGnuNZWKvPsrmfHYXDJXLsn6Vn334UIY'
    ];

    const doc = google$1.docs({ version: 'v1', auth });

    // let responseArr: [
    //   {
    //     title: string,
    //     body: object,
    //     documentStyle: object,
    //     namedStyles: object,
    //     lists: object,
    //     revisionId: string,
    //     suggestionsViewMode: string,
    //     positionedObjects: object,
    //     documentId: string
    //   }
    // ] | [] = [];
    [ DOCUMENT_IDS ].forEach( ( documentId, idx ) => {
    doc.documents.get(
        {
            documentId: DOCUMENT_IDS[idx]
        },
        
        ( err, res ) => {
            
          if (err) {
            console.log({ err });
            return done({ body: { err } });
          }

          // res.data.items.forEach((value, index, array) => {
          //   // format each document in the response

          //   // add to response array
          //   // responseArr.push( value )
          // })

          console.log({ res });

          done({
            body: res.data
          })
        })
    })


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