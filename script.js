let lowerLeft = document.querySelector(".lower-left");
let channel = document.querySelector(".channel");
let sendsControl = document.querySelector(".panel-sends-control")
let mainChannel = document.querySelector(".channel-main");

// create track channels
channel.remove();
for (let i = 0; i < 16; i++) {
    let newChannel = channel.cloneNode(true);
    if (i % 2 == 0) newChannel.style.backgroundColor = "#1c1c1c";
    lowerLeft.insertBefore(newChannel, sendsControl);
}

// create send channels
for (let i = 0; i < 8; i++) {
    let newChannel = channel.cloneNode(true);
    if (i % 2 == 0) newChannel.style.backgroundColor = "#1c1c1c";
    lowerLeft.insertBefore(newChannel, mainChannel);
}