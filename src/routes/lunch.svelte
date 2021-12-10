
<section>
    <ul>
        <li>Lunch!</li>

    </ul>
</section>


<style>

    /* .menu-item-pic-wrpr background-color */
    /* #f8f4ef */

    /* subtitle color */
    /* #5d5b5b */
    /* subtitle */
    /* margin-top: 0.25rem !important; */
    /* font-size: 0.8125rem !important; */

    /* title color */
    /* #525252 */

    /* title */
    /* font-size: 1.25rem !important; */
    /*     line-height: 1.25 !important; */

    /* soup or salad badge */
    /*     margin-top: 1.5rem !important; */

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
    /* li.active {
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
	} */
</style>