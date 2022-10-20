var example = ['world', 'web', 'video', 'community', 'service'];

textSequence(0);
function textSequence(i) {

            if (example.length > i) {
                    setTimeout(function() {
                        document.getElementById("landing-text-switch").innerHTML = example[i];
                        textSequence(++i);
                    }, 2500); // 2.5s (in milliseconds)

                } else if (example.length == i) { // Loop
                    textSequence(0);
                }
            }
