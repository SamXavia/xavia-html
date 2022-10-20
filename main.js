var switch1 = ['world', 'web', 'video', 'community', 'services'];

textSequence(0);
function textSequence(i) {

            if (example.length > i) {
                    setTimeout(function() {
                        document.getElementById("landing-text-switch").innerHTML = switch1[i];
                        textSequence(++i);
                    }, 2500); // 2.5s (in milliseconds)

                } else if (example.length == i) { // Loop
                    textSequence(0);
                }
            }
