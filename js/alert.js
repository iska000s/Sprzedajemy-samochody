export function alert () {

const buttonsCall = document.querySelectorAll('.call');
const alertdiv = document.querySelector(".alert");
const butoonOk = document.querySelector(".callOk");

const telephone = '111-111-111';

buttonsCall.forEach(element => {
    const onClickCall = () =>  {
        if(alertdiv.style = "display: none"){
            console.log("wyświetl alert")
            alertdiv.style = "display: flex; position: fixed; top: 30%; align-self: center; background: white; width: 50%; height: 30%; z-index: 50; align-items: center; justify-content: center; flex-direction: column; border-color: blue; border-width: 5px; border-radius: 20px; box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1)";
        } else{
            console.log("DIS")
        }
    }
    element.addEventListener("click", onClickCall);
    const onClickButton = () => {
            alertdiv.style = "display: none";
    }
    butoonOk.addEventListener("click", onClickButton);
});



}
