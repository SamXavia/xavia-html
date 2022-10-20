var landingswitchtext = ['world', 'web', 'video', 'community', 'service', 'home'];

textSequence(0);
function textSequence(i) {

            if (landingswitchtext.length > i) {
                    setTimeout(function() {
                        document.getElementById("landing-text-switch").innerHTML = landingswitchtext[i];
                        textSequence(++i);
                    }, 2500); // 2.5s (in milliseconds)

                } else if (landingswitchtext.length == i) { // Loop
                    textSequence(0);
                }
            }
