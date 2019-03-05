import renderToDom from './render-to-dom.js'
import makeMessage from './make-massage.js'

const waitTime = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Pasaron 3 sec.');
    }, 3000)
})


 export const firstMessage =  'holaasaaaaaaa';
 export const  delayedMessage = async () =>{
        const message = await waitTime;
        console.log(message)      
        renderToDom(makeMessage(message))
    }
