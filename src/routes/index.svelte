
<script context='module'>
    export const load = async ({ fetch }) => {
        const res = await fetch( 'index.json' );
        const data = await res.json();

        const res2 = await fetch( 'morningrecap.json' );
        const data2 = await res2.json();

        return {
            props: {
                data,
                data2
            }
        }
    }
</script>

<script type='ts'>
    import { time } from './stores';
    import UpNext from './upnext.svelte';
    import { onMount } from 'svelte';
    import base from '../lib/base';
    import Joinmeet from './joinmeet.svelte';
    import getFlairUrl from '../lib/flair';

    let ArcadePhysics, Game, Scene, Sprite;
	let Phaser;
    let mounted = false;
    let velocityX = 25;
    let velocityY = -10;
    let santa: Phaser.GameObjects.Sprite;
    let santaIntroComplete = false;
    let scene: Phaser.Scene;

    let TV_MODE = false;
    
    onMount(async () => {
        
        TV_MODE = new URL(window.location.href).searchParams.get('mode') == 'TV';

        if ( !TV_MODE )  document.body.style.background = "unset";

		const module = await import('phaser');
		Phaser = module.default;
		const module2 = await import('svelte-phaser');
        ({ArcadePhysics, Game, Scene, Sprite} = module2);
        mounted = true;

        // TV_MODE = new URL(window.location.href).searchParams.get('mode') == 'TV';
        
        // SANTA
        // Phaser.Physics.Arcade.World.wrap( santa );
        // DRJ:HACK - hide game after 25s (temp fix for flicker issue)
        setTimeout(
            () => {
                scene.time.addEvent({
                    delay: 25000,
                    callback: () => {
                        santaIntroComplete = true;
                    }
                })
            },
            1000
        )
	});

    let santaSpriteUrl = `${base}/santa.png`;

    function preload( scene ) {
        scene.load.spritesheet(
            'santa',
            santaSpriteUrl,
            {
                frameWidth: 91,
                frameHeight: 37
            }
        )
    }

    function create( scene: Phaser.Scene ) {
        scene.anims.create({
            key: 'santa/default',
            frames: scene.anims.generateFrameNumbers('santa'),
            frameRate: 20,
            repeat: -1
        })
    }

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
    });
    
    interface Event {
        end: string, 
        endMs: number, 
        start: string,
        startMs: number, 
        summary: string,
        hangoutLink: string | null
    }

    export let data: {
        eventsByDay?: {
            (arg: string): Event[]
        }
    } = {};

    export let data2;

    let inlineObjects;

    ({ inlineObjects } = data2);

    const dt = new Date();

    const currentDate = `${dt.getMonth() + 1}/${dt.getDate()}`;

    const currentDay = new Date().toString().split(' ')[0];

    $: currentMs = Date.now();
    time.subscribe(val => currentMs=Number(val));

    // element: {inlineObjectElement?, textRun}
    function formatElement( element ) {
        
        if ( element.inlineObjectElement ) {
            let { inlineObjectElement } = element;

            
            let { contentUri } = inlineObjects[ inlineObjectElement.inlineObjectId ]
                .inlineObjectProperties
                .embeddedObject
                .imageProperties;

            return `<img src='${contentUri}' height='192' /></h2>`;
        }

        return `<span>${element.textRun.content}</span>`;
    }
</script>


<svelte:head>
	<title>C43 Events</title>
</svelte:head>


<section>

    {#if !TV_MODE}
    <div class='date-notes'>
        <!-- date header -->
        <p class='date-header'>{currentDate} • {formatter.format($time)}</p>

        <!-- notes -->
        <p class='notes-header'>NOTES</p>

        <p class='notes'>
            {#each data2.body.content as contentItem}
    
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
        </p>
    </div>
    {/if}

    <ul>
        {#each Object.entries(data.eventsByDay) as [day, events], idx (day)}
        {#if TV_MODE}<li class='day-label'>{#if day !== currentDay}{ day }{:else}{formatter.format($time)}{/if}</li>{/if}
        {#each events as event}
        {#if getFlairUrl(event.summary) !== null}
        <li
            class:starting={(event.startMs - 600000) <= currentMs && (event.startMs + 300000) >= currentMs}
            class:active={event.startMs <= currentMs && event.endMs >= currentMs}
            class:hidden={(!TV_MODE && day !== currentDay) || event.endMs <= currentMs}
            style='background: url({getFlairUrl(event.summary)}); background-size: cover; background-position-y: center;'
            class={TV_MODE ? 'event-wrpr-tv flair' : 'event-wrpr flair'}
        >
            <!-- if more than 10 mins away, and less than 50 mins, show UpNext -->
            {#if 
                event.startMs > ( currentMs + ((10*60) * 1000) ) && 
                event.startMs <= ( currentMs + ((50*60) * 1000) ) &&
                TV_MODE
            }
            <UpNext />
            {/if}
            
            <span
                class='event'
            >
                { event.summary }
            </span>
            
            <span class='time'>{ event.start } - { event.end }</span>

            <!-- if Google Meet link, AND *not* TV_MODE, show join button -->
            {#if event.hangoutLink}
            <Joinmeet href={event.hangoutLink} />
            {/if}
        </li>
        {:else}
        <li
            class:starting={(event.startMs - 600000) <= currentMs && (event.startMs + 300000) >= currentMs}
            class:active={event.startMs <= currentMs && event.endMs >= currentMs}
            class:hidden={(!TV_MODE && day !== currentDay) || event.endMs <= currentMs}
            class={TV_MODE ? 'event-wrpr-tv' : 'event-wrpr'}
        >

            <!-- if more than 10 mins away, and less than 50 mins, show UpNext -->
            {#if 
                event.startMs > ( currentMs + ((10*60) * 1000) ) && 
                event.startMs <= ( currentMs + ((50*60) * 1000) ) &&
                TV_MODE
            }
            <UpNext />
            {/if}
            
            <span
                class='event'
            >
                { event.summary }
            </span>
            
            <span class='time'>{ event.start } - { event.end }</span>

            <!-- if Google Meet link, AND *not* TV_MODE, show join button -->
            {#if event.hangoutLink}
            <Joinmeet href={event.hangoutLink} />
            {/if}
        </li>
        {/if}
        {/each}
        {/each}
    </ul>
</section>


{#if mounted && !santaIntroComplete}
<Game 
    width={400} 
    height={400} 
    render={{pixelArt: true, transparent: true}}
    physics={{default: 'arcade'}}
>
    <Scene key="main" {preload} {create} bind:instance={scene}>
        <Sprite bind:instance={santa} name='santa' x={-91} y={250} animation='santa/default'>
            <ArcadePhysics {velocityX} {velocityY} />
        </Sprite>
    </Scene>
</Game>
{/if}


<style>

    :global(canvas) {
        pointer-events: none;
    }

    .event-wrpr {
        position: relative;
    }

    .event-wrpr-tv {
        position: static;
    }

    .notes {
        padding-top: 10pt;
        margin-left: 36pt;
    }

    .date-notes {
        background-color: #5d3a37;
        color: white;
        padding: 0 25px;
        border-radius: 6px;
        margin-bottom: 10px;
        margin-top: 1em;
        text-shadow: 0 1px black;
    }

    .date-header {
        font-family: 'monospace';
        font-size: 36pt;
        margin: 0.5em 0;
    }

    .notes-header {
        font-size: 14pt;
        margin-bottom: 0.67em;
    }

    :global(canvas) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }

    section {
        align-items: center;
        display: flex; 
        flex-direction: column;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100vh;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    li {
        border-radius: 6px;
        box-shadow: 0 1px #47008b;
        /* color: #140058; */
        color: #472187;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        min-width: 725px;
        padding: 10px 25px;
        width: 40%;
        background-color: rgba(255,255,255,0.85);
    }
    li.hidden {
        display: none;
    }
    li span.event {
        font-family: 'Open Sans Condensed';
        font-size: 40px;
        font-weight: 600;
        letter-spacing: 1.5px;
        margin-bottom: 0; 
        text-shadow: 0 1px white;
    }
    li span.time {
        line-height: 55px;
        font-size: 36px;
        margin-top: 0;
        text-shadow: 0 1px white;
    }
    li.flair span.event, li.flair span.time {
        color: white;   
        text-shadow: 0 1px black;
    }
    li.flair span.time {
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        box-shadow: rgb(0, 0, 0 / 45%);
        padding: 0 7px;
    }
    li span.event, li span.time {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    li.day-label {
        margin-top: 25px;
        text-transform: uppercase;
        text-shadow: 0 1px rgb(255 255 255 / 75%);
        background-color: rgba(255, 255, 255, 0.85);
        border-radius: 6px 6px 0 0;
        line-height: 2;
        padding: 0 25px;
        min-width: unset;
        width: auto;
        margin-bottom: 0;
        box-shadow: none;
        font-family: monospace;
        font-size: 18px;
    }
    li.active span {
        text-shadow: 0 1px #004e00;
    }

	.time {
		font-family: monospace;
	}
</style>