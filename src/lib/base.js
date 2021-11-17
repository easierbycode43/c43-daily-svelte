
const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/c43-daily-svelte';


export default base;