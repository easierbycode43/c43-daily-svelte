
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
    import base from '../lib/base';

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
    });
    
    interface Event {
        end: string, 
        start: string, 
        summary: string
    }

    export let data: {
        eventsByDay?: {
            (arg: string): Event[]
        }
    } = {};
</script>


<svelte:head>
	<title>C43 Events</title>
</svelte:head>


<section>
	<div class='bg' style="background-image: url({ base }/bg.png)">
        <ul>
            {#each Object.entries(data.eventsByDay) as [day, events], idx (day)}
            {#if idx !== 0}<li class='day-label'>{ day }</li>{/if}
            {#each events as event}
            <li>
                <span class='event'>{ event.summary }</span>
                <span class='time'>{ event.start } - { event.end }</span>
            </li>
            {/each}
            {/each}
        </ul>
	</div>

    <h1 class="clock">
        {formatter.format($time)}
    </h1>
</section>


<style>
    section {
        display: flex;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-decoration: none;
    }
    li {
        border-radius: 6px;
        box-shadow: 0 1px #47008b;
        color: #140058;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5px;
        min-width: 700px;
        padding: 25px;
        width: 40%;
        background-color: rgba(255,255,255,0.65);
    }
    li span.event {
        font-family: 'Open Sans Condensed';
        font-size: 40px;
        font-weight: 600;
        letter-spacing: 1.5px;
        margin-bottom: 0; 
        margin-left: 20px;
        text-shadow: 0 1px white;
    }
    li span.time {
        line-height: 43px;
        font-size: 36px;
        margin-left: 20px; 
        margin-top: 0;
        text-shadow: 0 1px white;
    }
    li.day-label {
        margin-top: 25px;
        text-transform: uppercase;
        text-shadow: 0 1px rgb(255 255 255 / 75%);
        background-color: rgba(255, 255, 255, 0.65);
        border-radius: 6px 6px 0 0;
        line-height: 2;
        padding: 0 25px;
        min-width: unset;
        width: auto;
        margin-bottom: 0;
        box-shadow: none;
    }

    .bg {
        background-size: cover; height: 100vh; min-width: 100%;
    }
    .clock {
        position:absolute;bottom: 25px;right: 25px;font-size: 96px;color: white;font-family: 'Open Sans Condensed';font-weight: 400;text-shadow: 2px 4px #47008b;margin-bottom: 0; white-space: nowrap;
    }
	.time {
		font-family: monospace;
	}
</style>