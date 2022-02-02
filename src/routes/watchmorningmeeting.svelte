<script lang='ts'>
    import { onMount } from 'svelte';
    import base from '../lib/base';

    let videoWrap, videoEl, playCtrl, closeCtrl;
    
    function initEvents() {
		playCtrl.addEventListener('click', play);
		closeCtrl.addEventListener('click', hide);
		videoEl.addEventListener('canplaythrough', allowPlay);
		videoEl.addEventListener('ended', hide);
	}

	function allowPlay() {
		document.body.classList.add('video-loaded');
	}

	function play() {
		videoEl.currentTime = 0;
		videoWrap.classList.remove('video-wrap--hide');
		videoWrap.classList.add('video-wrap--show');
		setTimeout(function() {videoEl.play();}, 600);
	}

	function hide() {
        videoWrap.classList.remove('video-wrap--show');
        videoWrap.classList.add('video-wrap--hide');
		videoEl.pause();
	}

    onMount(async () => {
        videoWrap = document.querySelector('.video-wrap'),
		videoEl = videoWrap.querySelector('video'),
		playCtrl = document.querySelector('.action--play'),
		closeCtrl = document.querySelector('.action--close');

        initEvents();
    })
</script>

<button class="action action--hidden action--play">
    <i style='text-shadow: 0 1px #1e8e3e'>▻</i><span class="action__label">Watch Morning Meeting</span>
</button>

<div class="video-wrap">
    <div class="video-inner">
        <video class="video-player" src="{base}/clubhouse.mp4" poster="{base}/clubhouse.png" preload="auto">
            <track kind='captions' />
            <source src="{base}/clubhouse.webm" type='video/webm; codecs="vp8.0, vorbis"'>
            <source src="{base}/clubhouse.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'>
            <p>Sorry, but your browser does not support this video format.</p>
        </video>
        <button class="action action--close"><i style='font-style: unset'>✖</i><span class="action__label action__label--hidden">Close preview</span></button>
    </div>
</div>

<style global>
    .video-wrap {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
    }

    .video-wrap--show {
        pointer-events: auto;
    }

    .video-inner {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        opacity: 0;
        background: black;
    }

    .video-wrap--show .video-inner {
        opacity: 1;
    }

    .video-player {
        position: absolute;
        top: 50%;
        width: 100%;
        -webkit-transform: translate3d(0,-50%,0);
        transform: translate3d(0,-50%,0);
    }

    /* Button */
    .action {
        cursor: pointer;
        font-size: 18px;
        position: relative;
        overflow: hidden;
        margin: 0;
        padding: 13px;
        color: #212529;
        border: 2px solid rgba(0,0,0,0.5);
        border-radius: 40px;
        background-color: rgba(255,255,255,0.65);
        flex: none;
    }

    .action:focus {
        outline: none;
    }

    .action__label {
        display: inline-block;
        margin: 0 0 0 0.75em;
    }

    .action__label--hidden {
        position: absolute;
        top: 200%;
    }

    .action--play {
        display: block;
        margin: 0 0 1em;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s 0.1s;
    }

    .video-loaded .action--play {
        opacity: 1;
        pointer-events: auto;
    }

    .action--close {
        line-height: 1;
        position: absolute;
        z-index: 1000;
        top: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        padding: 0;
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        transform: scale3d(0.7,0.7,1);
    }

    .video-wrap--show .action--close {
        opacity: 1;
        transition-delay: 1.2s;
        transform: scale3d(1,1,1);
    }

    @media screen and (min-width: 25em) {
        .video-inner {
            width: 30vw;
            height: 30vw;
            transform: scale3d(0.1,0.1,1) rotate3d(0,0,1,-5deg);
        }
        .video-wrap--show .video-inner {
            opacity: 0;
            animation: showVideo-1 1.25s forwards;
        }
        .video-wrap--hide .video-inner {
            animation: hideVideo 1.25s forwards;
        }
        .video-player {
            left: 50%;
            width: auto;
            height: 100vh;
            transition: transform 1s;
            transform: translate3d(-50%,-50%,0) scale3d(0.7,0.7,1) rotate3d(0,0,1,5deg);
        }
        .video-wrap--show .video-player,
        .video-wrap--hide .video-player {
            transform: translate3d(-50%,-50%,0) scale3d(1,1,1);
        }
    }

    /* This is the same as an aspect ratio of 16/9.
    Here we take the viewport height as main measure
    and size the video-inner accordingly.
    The video itself will use the viewport width as main 
    measure so that we ensure a filling of the screen.
    */
    @media screen and (min-width: 25em) and (min-aspect-ratio: 1280/720) {
        .video-inner {
            width: 30vh;
            height: 30vh;
        }
        .video-wrap--show .video-inner {
            animation: showVideo-2 1.25s forwards;
        }
        .video-player {
            width: 100vw;
            height: auto;
        }	
    }

    /* Animation for showing the video wrapper */
    @keyframes showVideo-1 {
        50% {
            width: 50vw;
            height: 50vw;
            opacity: 1;
            transform: scale3d(0.5,0.5,1) rotate3d(0,0,1,-5deg);
        }
        100% {
            width: 100vw;
            height: 100vh;
            opacity: 1;
            transform: scale3d(1,1,1) rotate3d(0,0,1,0deg);
        }
    }

    /* Alternate animation for showing the video wrapper */
    @keyframes showVideo-2 {
        50% {
            width: 50vh;
            height: 50vh;
            opacity: 1;
            transform: scale3d(0.5,0.5,1) rotate3d(0,0,1,-5deg);
        }
        100% {
            width: 100vw;
            height: 100vh;
            opacity: 1;
            transform: scale3d(1,1,1) rotate3d(0,0,1,0deg);
        }
    }

    /* Animation for hiding the video wrapper */
    @keyframes hideVideo {
        0% {
            width: 100vw;
            height: 100vh;
            opacity: 1;
            transform: scale3d(1,1,1) rotate3d(0,0,1,0deg);
        }
        100% {
            width: 100vw;
            height: 100vh;
            opacity: 0;
            transform: scale3d(1,1,1) rotate3d(0,0,1,0deg);
        }
    }
</style>