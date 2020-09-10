<!doctype html>
<html>
<title>Discord Chat Box</title>
<head>

    <style>
        div {
            
        }
        
        .fadeout {
            opacity: 1;
            -webkit-transition: opacity 1000ms linear;
            transition: opacity 1000ms linear;
        }
        body {
            font-family: Arial;
            background-color: #23214a;
            color: #ffffff;
            font-weight: bold;
            margin: 0px;
            height: 100%;
            overflow: hidden
        }

        #messagecontainer {
            position: absolute;
            left: 50px;
            bottom: 50px;
        }


        .flyin {
            -webkit-animation: test1 .2s linear;
            
           
        }

        @-webkit-keyframes test1 {
            0% {
                -webkit-transform: translateX(75%);
            }

            100% {
                -webkit-transform: translateX(0%);
            }
        }
        .fade-out {
            animation: fade 2s;
            -webkit-animation: fade .5s;
            -moz-animation: fade .5s;
        }

        /* Animate opacity */
        @keyframes fade {
            from {
                opacity: 1
            }

            to {
                opacity: 0
            }
        }

        @-moz-keyframes fade {
            from {
                opacity: 1
            }

            to {
                opacity: 0
            }
        }

        @-webkit-keyframes fade {
            from {
                opacity: 1
            }

            to {
                opacity: 0
            }
        }


    </style>
</head>

<body>
    <div id="messagecontainer" width ="100px" height="50px"></div>
    <form action="">
        
    </form>
    <!-- <script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>-->

    <script src="/socket.io/socket.io.js"></script>
    <script>
        var duration = 10000
            socket = io()
            socket.on("discordmessage", (color, user, content) => {
                recal(color, user, content)
            })
        socket.on("duration", res => {
            duration = res
        })
        function recal(color, user, content) {
            var element = document.createElement("p")
            element.className = "flyin"
            var spanelement = document.createElement("span")
            spanelement.appendChild(document.createTextNode(user + ': '))
            element.appendChild(spanelement)

            element.innerHTML = '<span style = "color:' + color+ ';font-weight:bold">' + user + ': </span>' + content

            var x = document.getElementById('messagecontainer')
            x.appendChild(element)


            setTimeout(function () {
            element.classList.add('fade-out');
                element.onanimationend = (e) => {
                    if (e.srcElement.classList.contains('fade-out')) {
                        element.parentNode.removeChild(element);
                    }

                }
                }, duration)
            ;


        }

    </script>
</body>
</html>

