
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

    export let data;

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
    let inlineObjects;

    function formatData( dataObj ) {
        ({ inlineObjects } = dataObj);
        console.log( dataObj );
        return JSON.stringify( dataObj );
    }

    // element: {inlineObjectElement?, textRun}
    function formatElement( element ) {
        
        if ( element.inlineObjectElement ) {
            let { inlineObjectElement } = element;

            // return JSON.stringify(
            //     inlineObjects[ inlineObjectElement.inlineObjectId ]
            //         .inlineObjectProperties
            //         .embeddedObject
            //         .imageProperties
            //         .contentUri
            // );

            
            let { contentUri } = inlineObjects[ inlineObjectElement.inlineObjectId ]
                .inlineObjectProperties
                .embeddedObject
                .imageProperties;

            // return contentUri;
            return `
            <h2 style='margin-bottom: 0;'><img src='${contentUri}' alt='ICON' height='192' /></h2>
            <h2>${data.title}</h2>
            `;
        }

        // return JSON.stringify( element.textRun.content );
        // return element.textRun.content;
        return `<span style='color: #3e3e3e; line-height: 28px;'>${element.textRun.content}</span>`;
    }
</script>


<pre style='display: none;'>
    {formatData(data)}
</pre>

<section id='wrpr'>
<section style='align-items: center; display: flex; flex-direction: column; width: 35%;'>
{#each data.body.content as contentItem}
    
    <!-- if contentItem has paragraph display it's text / image -->
    {#if contentItem.paragraph}
    <!-- <p>{ formatData(contentItem.paragraph) }</p> -->

    <!-- paragraph: { elements: [{}, {}] } -->
    {#each contentItem.paragraph.elements as element}

    <!-- element: {inlineObjectElement?, textRun} -->
    {#if element.inlineObjectElement || (element.textRun && element.textRun.content !== "\n")}
    <!-- <p>{ formatElement( element ) }</p> -->
    {@html formatElement( element ) }
    {/if}

    {/each}

    {/if}

    <!-- <p>{ formatData(contentItem) }</p> -->
{/each}
</section>
</section>


<style>
    #wrpr {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>