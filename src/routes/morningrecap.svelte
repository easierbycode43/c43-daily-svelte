<script context='module'>
    export const load = async ({ fetch }) => {
        const res = await fetch( 'morningrecap.json' );
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
</script>