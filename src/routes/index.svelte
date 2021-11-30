
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


<section style='display:flex'>
	<div class='bg'>
        <ul>
            {#each Object.entries(data.eventsByDay) as [day, events], idx (day)}
            {#if day !== currentDay}<li class='day-label'>{ day }</li>{:else}<li class='day-label'>{formatter.format($time)}</li>{/if}
            {#each events as event}
            <li
                class:starting={(event.startMs - 600000) <= currentMs && (event.startMs + 300000) >= currentMs}
                class:active={event.startMs <= currentMs && event.endMs >= currentMs}
            >
                {#if event.startMs <= currentMs && event.endMs >= currentMs}
                <span style="
                height: 10px;
                width: 10px;
                position: absolute;
                background-color: #1e8e3e;
                border-radius: 50%;
                border: 1px solid #fff;
                top: 32.5px;
                "></span>
                {/if}
                <span class='event'>{ event.summary }</span>
                <span class='time'>{ event.start } - { event.end }</span>
            </li>
            {/each}
            {/each}
        </ul>
	</div>

    <!-- <h1 class="clock">
        {formatter.format($time)}
    </h1> -->
</section>


<style>
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
        margin-bottom: 10px;
        min-width: 700px;
        padding: 10px 25px;
        position: relative;
        width: 40%;
        background-color: rgba(255,255,255,0.85);
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
        line-height: 55px;
        font-size: 36px;
        margin-left: 20px; 
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

    .bg {
        background-size: cover; height: 100vh; min-width: 100%;
    }
	.time {
		font-family: monospace;
	}
</style>