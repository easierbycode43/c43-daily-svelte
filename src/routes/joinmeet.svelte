<script>
    import { onMount } from 'svelte';

    let hidden = false;
    
    onMount(async () => {
        
        // hide if TV_MODE
        hidden = new URL(window.location.href).searchParams.get('mode') == 'TV';
    })
</script>


<span class:hidden>
    <img src="https://ssl.gstatic.com/calendar/images/conferenceproviders/logo_meet_2020q4_192px.svg" alt="JOIN">
    <small>JOIN</small>
</span>


<style>
    small {
        font-family: 'Open Sans Condensed';
        font-size: 18px;
        font-weight: 600;
    }
    span {
        font-size: 40px;
        display: flex;
        flex-direction: column;
        line-height: 27.5px;
        right: -43px;
        border-radius: 25%;
        text-align: center;
        padding: 0 5px;
        position: absolute;
        text-shadow: 0 1px #1e8e3e;
    }
    span > img {
        height: 27.5px;
    }
    .hidden {
        display: none;
    }
</style>