
import { google as google$1 } from 'googleapis';
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
        // '1iSaPAq7ZWrb3OZDetBK59Rm8GWnbrQNLtmtoeNnBpTI'
        '1OqV22UO8N2jgzQRerExx1vDkMFNVB46iV1dUNHo2An8'
    ];

    const doc = google$1.docs({ version: 'v1', auth });

    let responseArr: [
      {
        title: string,
        body: object,
        documentStyle: object,
        namedStyles: object,
        lists: object,
        revisionId: string,
        suggestionsViewMode: string,
        positionedObjects: object,
        documentId: string
      }
    ] | [] = [];
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
          // {
          //   res: {
          //     config: {
          //       url: 'https://docs.googleapis.com/v1/documents/1iSaPAq7ZWrb3OZDetBK59Rm8GWnbrQNLtmtoeNnBpTI',
          //       method: 'GET',
          //       userAgentDirectives: [Array],
          //       paramsSerializer: [Function (anonymous)],
          //       headers: [Object],
          //       params: {},
          //       validateStatus: [Function (anonymous)],
          //       retry: true,
          //       responseType: 'json'
          //     },
          //     data: {
          //       title: 'Freddy Krueger: Most prolific killer',
          //       body: [Object],
          //       documentStyle: [Object],
          //       namedStyles: [Object],
          //       lists: [Object],
          //       revisionId: 'ALm37BXmNGfUfJQF6vPaMzl-chfruQbRIwEZ5y6D1h7EJ340U8A2G3dhLhp7pgrSW-o_BaoK8CPrRkmK1Z09gw',
          //       suggestionsViewMode: 'SUGGESTIONS_INLINE',
          //       positionedObjects: [Object],
          //       documentId: '1iSaPAq7ZWrb3OZDetBK59Rm8GWnbrQNLtmtoeNnBpTI'
          //     },
          //     headers: {
          //       'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
          //       'cache-control': 'private',
          //       connection: 'close',
          //       'content-encoding': 'gzip',
          //       'content-type': 'application/json; charset=UTF-8',
          //       date: 'Fri, 10 Dec 2021 22:41:24 GMT',
          //       server: 'ESF',
          //       'transfer-encoding': 'chunked',
          //       vary: 'Origin, X-Origin, Referer',
          //       'x-content-type-options': 'nosniff',
          //       'x-frame-options': 'SAMEORIGIN',
          //       'x-xss-protection': '0'
          //     },
          //     status: 200,
          //     statusText: 'OK',
          //     request: {
          //       responseURL: 'https://docs.googleapis.com/v1/documents/1iSaPAq7ZWrb3OZDetBK59Rm8GWnbrQNLtmtoeNnBpTI'
          //     }
          //   }
          // }

          // done({
          //   body: {
          //     responseArr
          //   }
          // })
          done({
            body: res.data
          })
        })
    })

    
  
    // done({
    //     body: [
    //         {
    //             "icon": "http://res.cloudinary.com/hud9ala09/image/upload/v1537917316/oukaemdpve3dx7uiwozd.jpg",
    //             "name": "Kim",
    //             "summary": "Kimberly's life was turned upside-down after a severe accident injured her daughters. Thanks to Fresh Start, she found the confidence to go back to school and start a new career."
    //         }
    //     ]
    // })

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