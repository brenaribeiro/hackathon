window.addEventListener('load', () =>{
    registerSw()

}
)
async function registerSw(){
    if ('service worker' in navigator){
        try{
            await navigator.serviceworker.register('./sw.js')
        } catch (e){
            console.log ('Sw register failed');
        }
    }
}