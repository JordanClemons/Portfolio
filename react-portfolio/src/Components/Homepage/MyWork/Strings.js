export const projects = [['Preferify', 'A React App using Spotify\'s official API to curate personalized playlists.', '/images/preferify.png'], 
    ['Calendarify', 'An application that lets you collobarate and plan events with your team.', '/images/calendarify.png'], 
    ['Online Tic-Tac-Toe', 'Play with friends in Tic-Tac-Toe in realtime anywhere in the world.', '/images/tic-tac-toe.jpeg'],
    ['Web Server', 'A complete webserver with websocket communications. Without any libraries.', '/images/python.png'],
    ['Functional Interpreter', 'An interpreter build to handle basic logical expressions. Created with OCaml.', '/images/OCaml.png']
]

export const education = [['Degree', 'University at Buffalo', 'Computer Science BS 2021', 'GPA ~ 3.4', 'Deans List'], 
    ['Courses', [["Web Applications", "A"], ["Interface Design", "A"],["Data Models", "A"],["Robotics Algorithms", "A"],
    ["Operating Systems", "A-"],["Blockchain", "A"],["Software Engineering", "A"], ["Programming Languages", "B+"],
    ["Software Quality", "A"], ["Computation Theory", "B+"]
    ]]]

export const depth = [
    ['Preferify', '/images/preferify.png', 'https://www.preferify.app/', 'https://github.com/JordanClemons/preferify-react',
        [['Spotify API', '/images/spotify-logo.png'], ['Node.js', '/images/node-logo.png'], ['React', 'images/react-logo.png']],
    'Preferify is a web application that connects to your Spotify account to show you your top songs of any time period. You can make a playlist out your Preferify list and even share it on Twitter. Preferify was created to work on your desktop as well as mobile device.'
        ],
    ['Calendarify', '/images/calendarify.png', '', 'https://github.com/FultonLin/Cse312Proj',
        [['MongoDB', 'images/mongo-logo.png'], ['Flask', 'images/flask-logo.png'], ['SocketIO', 'images/socket-io-logo.png'],
            ['React', 'images/react-logo.png'], ['Docker', 'images/docker-logo.png']],
        'Calendarify is an application with secure account registration that allows you to collaborate with different groups. You can communicate and direct message members of your group in real time via websockets. You are also able to create events within the calendar for your team to see.'
        ],
    ['Online Tic-Tac-Toe', '/images/tic-tac-toe.jpeg', 'https://io-tic-tac-toe.herokuapp.com/', 
        'https://github.com/JordanClemons/tic-tac-toe-multiplayer',
            [['Node.js', '/images/node-logo.png'], ['SocketIO', 'images/socket-io-logo.png'], ['React', 'images/react-logo.png']],
        'Play Tic-tac-toe with your friends anywhere in the world. This game is in real time with the use of websockets. Keep playing and the game will keep track of your score. Whether you are on desktop or mobile, you can still enjoy the game.'
        ],
    ['Web Server', '/images/python.png', '', 'https://github.com/JordanClemons/Web-Server',
        [['Python', '/images/python.png']], 
    'A complete webserver without any frameworks. This server handles websocket communications by parsing through the bytes and following the websocket protocol. Image requests are also handled by intense HTTP parsing. Everything is done without a library which requires a lot of manual work.'
    ],
    ['Functional Interpreter', '/images/OCaml.png', '' , 'https://github.com/JordanClemons/Functional-Interpreter',
        [['OCaml', '/images/OCaml.png']],
    'A program that can handle various logical expressions. These expressions can be complex, nested and combined. Created completely with functional programming.'
    ]
]