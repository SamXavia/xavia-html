var example = ['better world', 'better web', 'better video', 'better community'];

textSequence(0);
function textSequence(i) {

            if (example.length > i) {
                    setTimeout(function() {
                        document.getElementById("sequence").innerHTML = example[i];
                        textSequence(++i);
                    }, 2500); // 2.5s (in milliseconds)

                } else if (example.length == i) { // Loop
                    textSequence(0);
                }
            }
