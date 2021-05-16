//script here

const video = document.getElementById('video');
const buttonForStarting = document.getElementById('button');


async function getScreenContent(){
    try{
       let whatsOnMyScreen = await navigator.mediaDevices.getDisplayMedia(); 
       video.srcObject = whatsOnMyScreen;
       video.loadedmetadata, function(){
           video.onplay()
       }
    } catch (error){
        //catch any error here
    } 
}

buttonForStarting.addEventListener('click', async function(){
    buttonForStarting.disabled = true;
    await video.requestPictureInPicture();
    video.play();
    buttonForStarting.disabled = false;
})

getScreenContent();