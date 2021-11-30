
import { google as google$1 } from 'googleapis';
import credentials from './credentials.json';
import token from './token.json';


/**
 * 11:00:00 AM -> 11:00
 */
function formatDate( str ) {
  return new Date( str ).toLocaleTimeString().split(/\:\d+\s\w+$/)[0];
}

/**
 * Lists the next 10 events on specified calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth, done) {
  const calendar = google$1.calendar({version:'v3', auth});
  calendar.events.list(
    {
      // calendarId: 'c_75qtobj06a3aj28nfut0mdjhdc@group.calendar.google.com',
      calendarId: 'c_qsb1jc6cf0p3to0b99on7arf9g@group.calendar.google.com',
      timeMin: (new Date()).toISOString(),
      maxResults: 9,
      singleEvents: true,
      orderBy: 'startTime',
    }, 
    
    ( err, res ) => {
      if (err) return done({ body: { err: '!! kaboom !!' } });

      let eventsByDay = {};
      let latestDayName = '';

      res.data.items.forEach((value, index, array) => {
        let dayName = new Date( value.start.dateTime || value.start.date ).toString().split(' ')[0];

        if ( dayName !== latestDayName ) {
          latestDayName = dayName;
          eventsByDay[ latestDayName ] = eventsByDay[ latestDayName ] || [];
        }

        let arr = eventsByDay[ dayName ];

        arr.push({
          end: formatDate( value.end.dateTime || value.end.date ),
          endMs: Number( new Date( value.end.dateTime || value.end.date ) ),
          start: formatDate( value.start.dateTime || value.start.date ),
          startMs: Number( new Date( value.start.dateTime || value.start.date ) ),
          summary: value.summary
        })
      })

      done({
          body: {
            eventsByDay
          }
      })
    }
  );
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
  listEvents(oAuth2Client, done);

  
  return p;
}