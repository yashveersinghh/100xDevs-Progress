let state = {
    count: 0
}
function onButtonPress() {
    state.count += 1;
    buttonComponentReRender()
}
function buttonComponentReRender(){
    document.getElementById("buttonParent").innerHTML = "";
    const component = buttonComponent(state.count);
    document.getElementById("buttonParent").appendChild(component);
}

function buttonComponent(count){
    const button = document.createElement("button");
    button.innerHTML = `Counter ${count}`;
    button.setAttribute("onClick", `onButtonPress()`);
    return button;
}
buttonComponentReRender();