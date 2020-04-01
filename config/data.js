import React, { Component } from 'react';

export const WeeksData = [
    {
        "title": "Woche 1",
        "descritpion": "Starte deine Challenge!",
        "logo": require("../assets/images/week1/week1-logo.jpg"),
        "workouts": [
            {
                "title": "Workout: Kraft Beine",
                "descritpion": "Power für die Beine",
                "logo": require("../assets/images/week1/beine_logo.jpeg"),
                "warmup": 1,
                "cooldown": 2,
                "excercises": [
                    {
                        "title": "Squats",
                        "descritpion": "dynamisch und halten",
                        "repetitions": "1 Minute dynamisch, anschließend 1 Minute halten",
                        "videoUrl": "cyber-academy/videos/week1/w1-1.mp4",
                    }, {
                        "title": "Lunges",
                        "descritpion": "dynamisch und halten",
                        "repetitions": "1 Minute dynamisch, anschließend 1 Minute halten",
                        "videoUrl": "cyber-academy/videos/week1/w1-2.mp4",
                    }, {
                        "title": "Einbeiniges Wadenheben",
                        "descritpion": "",
                        "repetitions": "pro Bein jeweils für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w1-3.mp4",
                    }, {
                        "title": "Aus dem Stehen nach vorne fallen lassen und mit beiden Beinen abfangen",
                        "descritpion": "",
                        "repetitions": "pro Bein jeweils für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w3-3.mp4",
                    }, {
                        "title": "Einbeinstand - 'hand-touches' zum Boden",
                        "descritpion": "",
                        "repetitions": "pro Seite jeweils für 1.5 Minuten",
                        "videoUrl": "cyber-academy/videos/week1/w1-5.mp4",
                    }, {
                        "title": "Seitarmstütz, oberes Bein heben",
                        "descritpion": "dynamisch",
                        "repetitions": "pro Bein jeweils für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w1-6.mp4",
                    }
                ],
            }, {
                "title": "Workout: Kraft Oberkörper",
                "descritpion": "Power für den Oberkörper",
                "logo": require("../assets/images/week1/oberkr_logo.jpeg"),
                "warmup": 2,
                "cooldown": 1,
                "excercises": [
                    {
                        "title": "Liegestütz",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w2-1.mp4",
                    }, {
                        "title": "Spiderman Liegestütz",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/spiderman_l.mp4",
                    }, {
                        "title": "Vom Unterarmstütz in den Liegestütz drücken",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w2-3.mp4",
                    }, {
                        "title": "Dips am Stuhl",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w2-4.mp4",
                    }, {
                        "title": "Side-by-Side Liegestütz am Stuhl",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w2-5.mp4",
                    }, {
                        "title": "Aktive Pause: Russian Twist",
                        "descritpion": "",
                        "repetitions": "für 2 Minuten",
                        "videoUrl": "cyber-academy/videos/week1/w4-7-1.mp4",
                    }, {
                        "title": "Einarmige Liegestütze an der Wand",
                        "descritpion": "",
                        "repetitions": "pro Seite jeweils für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w2-7.mp4",
                    }, {
                        "title": '"Crunch"',
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w4-7-2.mp4",
                    }, {
                        "title": "Mountain Climbers",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/mountainClimbers.mp4",
                    },
                ],
            }, {
                "title": "Workout: Sprungkraft",
                "descritpion": "höher, schneller, weiter ...",
                "logo": require("../assets/images/week1/sprung_logo.jpeg"),
                "warmup": 1,
                "cooldown": 2,
                "excercises": [
                    {
                        "title": "Kniehebelauf auf der Stelle",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w3-1.mp4",
                    }, {
                        "title": "Anfersen auf der Stelle",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w3-2.mp4",
                    }, {
                        "title": "Aus dem Stehen nach vorne fallen lassen in den Ausfallschritt",
                        "descritpion": "",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w3-3.mp4",
                    }, {
                        "title": "Squat-Jumps",
                        "descritpion": "Maximale Power, dafür mehr Zeit lassen",
                        "repetitions": "für 1 Minute",
                        "videoUrl": "cyber-academy/videos/week1/w3-4.mp4",
                    }, {
                        "title": "Seitliche Einbeinsprünge in den Einbeinstand R->L->R",
                        "descritpion": "So schnell wie möglich abspringen und nach dem letzten Sprung 3 Sekunden halten",
                        "repetitions": "2x5 von rechts, 2x5 von links",
                        "videoUrl": "cyber-academy/videos/week1/w3-5.mp4",
                    }, {
                        "title": "Counter Movement Jumps",
                        "descritpion": "Athletischer Stand, hol mit einer Kniebeuge schwung und spring so hoch du kannst. Hände fest an der Hüfte.",
                        "repetitions": "3x5 (maximale Power)",
                        "videoUrl": "cyber-academy/videos/week1/w3-6.mp4",
                    }, {
                        "title": "Drop Jumps",
                        "descritpion": "Starte auf einer Erhöhung, mach einen Schritt nach vorne und lass dich fallen. Nur die Fußballen berühren den Boden! Kurze Kontaktzeiten!",
                        "repetitions": "3x10",
                        "videoUrl": "cyber-academy/videos/week1/w3-7.mp4",
                    }, {
                        "title": "Landung auf einem Bein üben",
                        "descritpion": "Leichter Sprung und auf einem Bein landen und stabil stehen.",
                        "repetitions": "Pro Seite: 1x10",
                        "videoUrl": "cyber-academy/videos/week1/w3-8.mp4",
                    },
                ]
            }, {
                "title": "Workout: Stabilisation",
                "descritpion": '"Prevention"',
                "logo": require("../assets/images/week1/stabi_logo.jpeg"),
                "warmup": 1,
                "cooldown": 1,
                "excercises": [
                    {
                        "title": "Unterarmstütz",
                        "descritpion": "",
                        "repetitions": "halte für 1 Minute",
                        "imageUrl": require("../assets/images/week1/oberkr_logo.jpeg"),
                    }, {
                        "title": "Seitarmstütz",
                        "descritpion": "",
                        "repetitions": "halte für 1 Minute",
                        "imageUrl": require("../assets/images/week1/stabi_logo.jpeg"),
                    }, {
                        "title": "Rückarmstütz",
                        "descritpion": "",
                        "repetitions": "halte für 1 Minute",
                        "imageUrl": require("../assets/images/week1/w4-3.jpeg"),
                    }, {
                        "title": "Schwebesitz",
                        "descritpion": "",
                        "repetitions": "halte für 1 Minute",
                        "imageUrl": require("../assets/images/week1/w4-4.jpeg"),
                    }, {
                        "title": "Standwaage, dynamisch",
                        "descritpion": "",
                        "repetitions": "pro Seite jeweils für 1 Minute ",
                        "videoUrl": "cyber-academy/videos/week1/w4-5.mp4",
                    }, {
                        "title": "Buchstaben X-Y-X-I-T-X-X",
                        "descritpion": "in Bauchlage",
                        "repetitions": "halte jeweils für 10 Sekunden",
                        "videoUrl": "cyber-academy/videos/week1/w4-6.mp4",
                    }, {
                        "title": "Bauch: Russian Twist",
                        "descritpion": "",
                        "repetitions": "40x",
                        "videoUrl": "cyber-academy/videos/week1/w4-7-1.mp4",
                    }, {
                        "title": "Bauch: Crunches",
                        "descritpion": "",
                        "repetitions": "40x",
                        "videoUrl": "cyber-academy/videos/week1/w4-7-2.mp4",
                    }, {
                        "title": "Bauch: Cross-Over Crunch",
                        "descritpion": "",
                        "repetitions": "40x",
                        "videoUrl": "cyber-academy/videos/week1/w4-7-3.mp4",
                    }, {
                        "title": "Bauch: V-Sits",
                        "descritpion": "",
                        "repetitions": "20x",
                        "videoUrl": "cyber-academy/videos/week1/w4-7-4.mp4",
                    },
                ]
            }, {
                "title": "Weekend CHALLENGE!",
                "descritpion": '3 Runden - Wie lange brauchst du? Teile deine Zeit und ein Video von einer Runde im Teamchat!"',
                "warmup": 1,
                "cooldown": 2,
                "excercises": [
                    {
                        "title": "Mountain Climbers",
                        "descritpion": "",
                        "repetitions": "50x",
                        "videoUrl": "cyber-academy/videos/week1/mountainClimbers.mp4",
                    }, {
                        "title": "Squat-Jumps",
                        "descritpion": "Spring so hoch du kannst!",
                        "repetitions": "10x",
                        "videoUrl": "cyber-academy/videos/week1/ch-2.mp4",
                    }, {
                        "title": "Lunch-Jumps",
                        "descritpion": "Spring so hoch du kannst!",
                        "repetitions": "10x",
                        "videoUrl": "cyber-academy/videos/week1/ch-3.mp4",
                    }, {
                        "title": "Lat-Jumps",
                        "descritpion": "Spring so hoch du kannst!",
                        "repetitions": "10x je Seite",
                        "videoUrl": "cyber-academy/videos/week1/w3-5.mp4",
                    }, {
                        "title": "Mountain Climbers",
                        "descritpion": "",
                        "repetitions": "50x",
                        "videoUrl": "cyber-academy/videos/week1/mountainClimbers.mp4",
                    },
                ]
            }
        ]
    }
];

export const warmups = {
    1: [{
        "title": '"Francesco"',
        "description": "",
        "repetitions": "",
        "videoUrl": "cyber-academy/videos/week1/warm-upProgramm.mp4",
    },
    ],
    2: [
        {
            "title": "Hüftkreisen",
            "description": "",
            "repetitions": "20 Sekunden pro Seite",
            "videoUrl": "cyber-academy/videos/week1/wu-2-1.mp4",
        },
        {
            "title": "Berühre deine Füße und dann strecken",
            "description": "",
            "repetitions": "15x",
            "videoUrl": "cyber-academy/videos/week1/wu-2-2.mp4",
        },
        {
            "title": "Rotiere deinen Oberkörper im Stehen",
            "description": "",
            "repetitions": "für 1 Minute",
            "videoUrl": "cyber-academy/videos/week1/wu-2-3.mp4",

        },
        {
            "title": "Rotiere deinen Oberkörper zu den Füßen",
            "description": "",
            "repetitions": "für 1 Minute",
            "videoUrl": "cyber-academy/videos/week1/wu-2-4.mp4",
        },
        {
            "title": "Schulterrotation",
            "description": "",
            "repetitions": "für 1 Minute",
            "videoUrl": "cyber-academy/videos/week1/wu-2-5.mp4",
        },
        {
            "title": "Schulter zu- und aufziehen",
            "description": "",
            "repetitions": "für 1 Minute",
            "videoUrl": { uri: "" },
        },
        {
            "title": "Oberkörperotation im Liegestütz",
            "description": "",
            "repetitions": "für 1 Minute",
            "videoUrl": "cyber-academy/videos/week1/wu-2-7.mp4",
        },
        {
            "title": "Leichte Bauchmuskeldehnung",
            "description": "",
            "repetitions": "für 1 Minute",
            "videoUrl": "cyber-academy/videos/week1/wu-2-8.mp4",
        },
    ],
}
export const cooldowns = {
    1: [
        {
            "title": "Wadendehnung im Stehen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-1-1.jpeg"),
        },
        {
            "title": "Oberschenkelrückseite im Sitzen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-1-2.jpeg"),
        },
        {
            "title": "Adduktorendehnung",
            "description": "Breitbeiniger Stand und Hüfte zur Seite schieben",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-1-3.jpeg"),
        },
        {
            "title": "Oberschenkeldehnung im Stehen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-1-4.jpeg"),
        },
        {
            "title": "Hüftdehnung im Liegen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-1-5.jpeg"),
        },
        {
            "title": "Abduktorendehnung im Liegen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-1-6.jpeg"),

        },
        {
            "title": "Füße berühren im Stehen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "videoUrl": "cyber-academy/videos/week1/cd-1-7.mp4",
        },
        {
            "title": "Rotatorische Ausführung: Füße berühren im Stehen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "videoUrl": "cyber-academy/videos/week1/cd-1-8.mp4",
        },
        {
            "title": "Breitbeinige Adduktorendehnung im Sitzen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-1-9.jpeg"),
        },
    ],
    2: [
        {
            "title": "Arme frontal zur Seite ziehen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-2-1.jpeg"),

        },
        {
            "title": "Arme über dem Kopf zur Seite ziehen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-2-2.jpeg"),
        },
        {
            "title": "Schulterrotation in entgegengesetzte Richtung mit gestreckten Armen",
            "description": "",
            "repetitions": "für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-2-3.jpeg"),
        },
        {
            "title": "Einseitige Brustmuskulaturdehnung",
            "description": "",
            "repetitions": "pro Seite für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-2-4.jpeg"),
        },
        {
            "title": "Latissimusdehnung im Stehen",
            "description": "",
            "repetitions": "pro Seite für 30 Sekunden halten",
            "imageUrl": require("../assets/images/week1/cd-2-5.jpeg"),
        },
    ],
};
