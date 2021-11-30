
<script context='module'>
    export const load = async ({ fetch }) => {
        const res = await fetch( 'index.json' );
        const data = await res.json();

        return {
            props: {
                data
            }
        }
    }
</script>

<script type='ts'>
    import { time } from './stores';
    import UpNext from './upnext.svelte';
    import { onMount } from 'svelte';

    let ArcadePhysics, Game, Scene, Sprite;
	let Phaser;
    let mounted = false;
    let velocityX = 25;
    let velocityY = -10;
    let santa;

	onMount(async () => {
		const module = await import('phaser');
		Phaser = module.default;
		const module2 = await import('svelte-phaser');
        ({ArcadePhysics, Game, Scene, Sprite} = module2);
        mounted = true;
        // Phaser.Physics.Arcade.World.wrap( santa );
	});

    function preload( scene ) {
        scene.load.spritesheet(
            'santa',
            '/santa.png',
            {
                frameWidth: 91,
                frameHeight: 37
            }
        )
    }

    function create( scene ) {
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
        summary: string
    }

    export let data: {
        eventsByDay?: {
            (arg: string): Event[]
        }
    } = {};

    const currentDay = new Date().toString().split(' ')[0];

    $: currentMs = Date.now();
    time.subscribe(val => currentMs=Number(val));
</script>


<svelte:head>
	<title>C43 Events</title>
</svelte:head>


<section>
    <ul>
        {#each Object.entries(data.eventsByDay) as [day, events], idx (day)}
        <li class='day-label'>{#if day !== currentDay}{ day }{:else}{formatter.format($time)}{/if}</li>
        {#each events as event}
        <li
            class:starting={(event.startMs - 600000) <= currentMs && (event.startMs + 300000) >= currentMs}
            class:active={event.startMs <= currentMs && event.endMs >= currentMs}
            class:hidden={event.endMs <= currentMs}
        >

            {#if 
                event.startMs > currentMs && 
                (event.startMs - 270000) >= currentMs && 
                (event.startMs - 601000) >= currentMs &&
                day === currentDay
            }
            <UpNext />
            {/if}
            
            <span class='event'>{ event.summary }</span>
            <span class='time'>{ event.start } - { event.end }</span>
        </li>
        {/each}
        {/each}
    </ul>
</section>


{#if mounted}
<Game 
    width={400} 
    height={400} 
    render={{pixelArt: true, transparent: true}}
    physics={{default: 'arcade'}}
>
    <Scene key="main" {preload} {create}>
        <Sprite instance={santa} name='santa' x={-91} y={250} animation='santa/default'>
            <ArcadePhysics {velocityX} {velocityY} />
        </Sprite>
    </Scene>
</Game>
{/if}


<style>
    :global(canvas) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }

    section {
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
        color: #140058;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        min-width: 725px;
        padding: 10px 25px;
        width: 40%;
        background-color: rgba(255,255,255,0.85);
    }
    li.active {
        position: relative;
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