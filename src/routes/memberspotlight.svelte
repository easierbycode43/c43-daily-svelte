
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

    ({ inlineObjects } = data);

    // element: {inlineObjectElement?, textRun}
    function formatElement( element ) {
        
        if ( element.inlineObjectElement ) {
            let { inlineObjectElement } = element;

            
            let { contentUri } = inlineObjects[ inlineObjectElement.inlineObjectId ]
                .inlineObjectProperties
                .embeddedObject
                .imageProperties;

            return `
            <h2 class='icon'><img src='${contentUri}' alt='ICON' height='192' style='border-radius: 50%;' /></h2>
            <h2 class='title'>${data.title}</h2>
            `;
        }

        return `<span class='content'>${element.textRun.content}</span>`;
    }
</script>


<section id='wrpr'>
<section class='spotlight'>
{#each data.body.content as contentItem}
    
    <!-- if contentItem has paragraph display it's text / image -->
    {#if contentItem.paragraph}
    <!-- paragraph: { elements: [{}, {}] } -->
    {#each contentItem.paragraph.elements as element}

    <!-- element: {inlineObjectElement?, textRun} -->
    {#if element.inlineObjectElement || (element.textRun && element.textRun.content !== "\n")}
    {@html formatElement( element ) }
    {/if}

    {/each}
    {/if}
{/each}
</section>
</section>


<style>
    #wrpr {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .spotlight {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 35%;
        padding: 0 0.83em 0.83em;
        background-color: rgba(0, 0, 0, 0.55);
        border-radius: 6px;
        color: #fafcfe;
    }

    :global(h2.icon, h2.title) {
        margin-bottom: 0;
    }

    :global(.spotlight .content) {
        line-height: 28px;
        text-align: center;
        text-shadow: 0 1px rgb(0 0 0 / 65%);
    }
</style>