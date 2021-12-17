
<script context='module'>
    export const load = async ({ fetch }) => {
        const res = await fetch( 'memberspotlight.json' );
        const data = await res.json();

        return {
            props: {
                data
            }
        }
    }
</script>

<script type='ts'>

    import base from '../lib/base';
    import { fly } from 'svelte/transition';
    export let data;

    
    let activeIdx = 0;
    setInterval(
      () => {
        if ( activeIdx < data.length-1 ) {
          activeIdx++;
        } else {
          activeIdx = 0;
        }
      },
      10000
    )

    // {
    //     "<INLINE_OBJECT_ID>": {
    //         "inlineObjectProperties": {
                // "embeddedObject": {
                    // "imageProperties": {"contentUri": "", "cropProperties": {}}
                // }
    // },
    //         "objectId": ""
    //     }
    // }
    let inlineObjects = {};

    data.forEach(dataItem => {
      if ( dataItem.data.inlineObjects ) {
        Object.keys( dataItem.data.inlineObjects ).forEach( inlineObjectId => {
          inlineObjects[ inlineObjectId ] = dataItem.data.inlineObjects[ inlineObjectId ];
        })
      }
    })

    // element: {inlineObjectElement?, textRun}
    function formatElement( element, title: string ) {
        
        if ( element.inlineObjectElement ) {
            let { inlineObjectElement } = element;

            let { contentUri } = inlineObjects[ inlineObjectElement.inlineObjectId ]
                .inlineObjectProperties
                .embeddedObject
                .imageProperties;

            // Avoid Google rate limit by using local images in production
            let isProd = process.env.NODE_ENV != 'development';
            if ( isProd )  contentUri = `${ base }/${ title.toLowerCase().replace(/\s/g, '_') }.png`;

            return `
            <img src='${contentUri}' alt='ICON' height='58' style='border-radius: 50%; position: absolute; right: 25px; bottom: 25px;' />
            `;
        }

        return `<p class='content'>${element.textRun.content}</p>`;
    }
</script>

<iframe src='/c43' title='C43' style='border-width: 0; height: 100vh; position: absolute; top: 0; width: 100%;'></iframe>

<section id='wrpr'>
{#each data as d, idx}
{#if idx == activeIdx}
<section class='bubble left {idx}' in:fly="{{ x: 200, duration: 2000, delay: 800 }}" out:fly="{{ x: -2000, duration: 750 }}">
{#each d.data.body.content as contentItem}
    
    <!-- if contentItem has paragraph display it's text / image -->
    {#if contentItem.paragraph}
    <!-- paragraph: { elements: [{}, {}] } -->
    {#each contentItem.paragraph.elements as element}

    <!-- element: {inlineObjectElement?, textRun} -->
    {#if element.inlineObjectElement || (element.textRun && element.textRun.content !== "\n")}
    {@html formatElement( element, d.data.title.replace('Testimonials - ', '') ) }
    {/if}

    {/each}
    {/if}
{/each}
</section>
{/if}
{/each}
</section>


<style lang="scss">
#wrpr { margin-top: 25px; }

:global(body) {
  background: unset;
  overflow-y: scroll !important;
}

$radius: 25px;

:global(.bubble) {

  box-shadow: inset 0 2px 0 rgb(64 84 178 / 70%), -5px -4px 25px rgb(0 0 0 / 30%);
  
  margin: 0 auto;
  padding: 25px;
  width: 35%;

  -webkit-mask-image:
    radial-gradient(#fff ($radius - 0.5), #fff0 $radius), // Top left corner
    radial-gradient(#fff ($radius - 0.5), #fff0 $radius), // Top right corner
    radial-gradient(#fff ($radius - 0.5), #fff0 $radius), // Bottom left corner
    radial-gradient(#fff ($radius - 0.5), #fff0 $radius), // Bottom right corner
    linear-gradient(#fff, #fff), // Horizontal gradient
    linear-gradient(#fff, #fff), // Vertical gradient
    url('data:image/svg+xml;utf8,<svg width="39" height="25" viewBox="0 0 39 25" xmlns="http://www.w3.org/2000/svg"><path d="M38.4998 24.5C27.6998 22.1 22.9998 7.5 21.9998 0.5C11.8331 1.83333 -6.30022 6.3 2.49978 13.5C13.4998 22.5 21.9998 24.5 38.4998 24.5Z" /></svg>'); // Bottom right icon
  -webkit-mask-position:
    0 0, // Top left corner
    100% 0, // Top right corner
    0 100%, // Bottom left corner
    100% 100%, // Bottom right corner
    0 $radius, // Horizontal gradient
    $radius 0, // Vertical gradient
    100% 100%; // Bottom right icon
  -webkit-mask-size: ($radius * 2) ($radius * 2),
  // Top left corner  
  ($radius * 2) ($radius * 2),
  // Top right corner  
  ($radius * 2) ($radius * 2),
  // Bottom left corner  
  ($radius * 2) ($radius * 2),
  // Bottom right corner  
  100% calc(100% - #{$radius * 2}),
  // Horizontal gradient  
  calc(100% - #{$radius * 2}) 100%,
  // Vertical gradient 
  calc(39px / 2) calc(25px / 2); // Bottom right icon
  -webkit-mask-repeat: no-repeat;
  margin-bottom: 15px;
  max-width: 60%;
  width: fit-content !important;

  // font-size: 0; // Prevent white space under the images
  @media (max-width: 600px) {
    max-width: 80%;
  }

  &.right {
    margin-left: auto;
    background: #549EF5;
    color: white;
  }

  &.left {
    background: #E9E9EB;
    mask-image:
      radial-gradient(#fff, #fff ($radius - 0.5), transparent $radius), // Top left radius
      radial-gradient(#fff, #fff ($radius - 0.5), transparent $radius), // Top right radius
      radial-gradient(#fff, #fff ($radius - 0.5), transparent $radius), // Bottom left radius
      radial-gradient(#fff, #fff ($radius - 0.5), transparent $radius), // Bottom right radius
      linear-gradient(#fff, #fff), // Horizontal gradient
      linear-gradient(#fff, #fff), // Vertical gradient
      url('data:image/svg+xml;utf8,<svg width="39" height="24" viewBox="0 0 39 24" xmlns="http://www.w3.org/2000/svg"><path d="M0.000217438 24C10.8002 21.6 15.5002 7 16.5002 0C26.6669 1.33333 44.8002 5.8 36.0002 13C25.0002 22 16.5002 24 0.000217438 24Z" /></svg>'); // Bottom left icon
    mask-position:
      0 0, // Top left radius
      100% 0, // Top right radius
      0 100%, // Bottom left radius
      100% 100%, // Bottom right radius
      0 $radius, // Horizontal gradient
      $radius 0, // Vertical gradient
      0 100%; // Bottom right icon
  }

  img {
    max-width: 100%;
  }

  p {
    position: relative;
    font-size: 18px;
    line-height: 1.2;
    font-family: sans-serif;
    padding: 15px 15px;
    margin: 0;
    letter-spacing: 0.02em;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
}

:global(.bubble) {
  position: relative;
}

:global(.bubble .content) {
  font-family: 'Open Sans Condensed', 'Arial Narrow', serif;
  line-height: 28px;
  font-size: 24px;
  line-height: 40px;
  position: relative;
}

:global(.bubble p:first-of-type.content) {
  text-indent: 100px;

  &::before {
    content: '\201C';
    font-family: serif;
    font-style: normal;
    font-weight: 700;
    position: absolute;
    font-size: 175px;
    top: 0px;
    left: -105px;
    color: #4054b2;
    text-shadow: 7px 14px 10px rgb(0 0 0 / 10%);
  }
}

:global(.bubble p:last-of-type.content) {
  color: #4054b2;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  text-shadow: 0 1px 1px rgb(255 255 255 / 70%);
  margin-bottom: 0;
}

:global(.bubble h2:first-of-type) {
  margin-top: 0;
}
</style>