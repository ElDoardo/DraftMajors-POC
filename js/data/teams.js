import { Player } from "../domain/Player.js";
import { Coach } from "../domain/Coach.js";
import { Team } from "../domain/Team.js";
import { Role, CoachSpecialty} from "../domain/enums.js";

export const teams = [
    // 1. SK Gaming - ESL One Cologne 2016
    new Team({
        id: 1,
        name: "SK Gaming",
        major: "ESL One Cologne 2016",
        players: [
            new Player({
                id: 1,
                nickName: "FalleN",
                fullName: "Gabriel Toledo",
                country: "Brazil",
                mechanical: 94,
                tactical: 98,
                presence: 93,
                primaryRole: Role.AWPER,
                secondaryRole: Role.SUPPORT,
                igl: true
            }),
            new Player({
                id: 2,
                nickName: "fer",
                fullName: "Fernando Alvarenga",
                country: "Brazil",
                mechanical: 94,
                tactical: 86,
                presence: 93,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 3,
                nickName: "coldzera",
                fullName: "Marcelo David",
                country: "Brazil",
                mechanical: 98,
                tactical: 96,
                presence: 97,
                primaryRole: Role.LURKER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 4,
                nickName: "fnx",
                fullName: "Lincoln Lau",
                country: "Brazil",
                mechanical: 86,
                tactical: 87,
                presence: 88,
                primaryRole: Role.RIFLER,
                secondaryRole: Role.SUPPORT,
                igl: false
            }),
            new Player({
                id: 5,
                nickName: "TACO",
                fullName: "Epitácio de Melo",
                country: "Brazil",
                mechanical: 85,
                tactical: 90,
                presence: 89,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.ENTRY,
                igl: false
            })
        ],
        coach: new Coach({
            id: 101,
            nickName: "zews",
            fullName: "Wilton Prado",
            country: "Brazil",
            overall: 90,
            specialty: CoachSpecialty.TACTICAL
        })
    }),

    // 2. Astralis - FACEIT Major London 2018
    new Team({
        id: 2,
        name: "Astralis",
        major: "FACEIT Major London 2018",
        players: [
            new Player({
                id: 6,
                nickName: "gla1ve",
                fullName: "Lukas Rossander",
                country: "Denmark",
                mechanical: 86,
                tactical: 98,
                presence: 92,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.RIFLER,
                igl: true
            }),
            new Player({
                id: 7,
                nickName: "device",
                fullName: "Nicolai Reedtz",
                country: "Denmark",
                mechanical: 97,
                tactical: 95,
                presence: 96,
                primaryRole: Role.AWPER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 8,
                nickName: "dupreeh",
                fullName: "Peter Rasmussen",
                country: "Denmark",
                mechanical: 93,
                tactical: 90,
                presence: 93,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.AWPER,
                igl: false
            }),
            new Player({
                id: 9,
                nickName: "Magisk",
                fullName: "Emil Reif",
                country: "Denmark",
                mechanical: 93,
                tactical: 94,
                presence: 92,
                primaryRole: Role.RIFLER,
                secondaryRole: Role.ENTRY,
                igl: false
            }),
            new Player({
                id: 10,
                nickName: "Xyp9x",
                fullName: "Andreas Højsleth",
                country: "Denmark",
                mechanical: 84,
                tactical: 96,
                presence: 90,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.LURKER,
                igl: false
            })
        ],
        coach: new Coach({
            id: 102,
            nickName: "zonic",
            fullName: "Danny Sørensen",
            country: "Denmark",
            overall: 98,
            specialty: CoachSpecialty.TACTICAL
        })
    }),

    // 3. Natus Vincere - PGL Major Stockholm 2021
    new Team({
        id: 3,
        name: "Natus Vincere",
        major: "PGL Major Stockholm 2021",
        players: [
            new Player({
                id: 11,
                nickName: "s1mple",
                fullName: "Oleksandr Kostyliev",
                country: "Ukraine",
                mechanical: 100,
                tactical: 98,
                presence: 99,
                primaryRole: Role.AWPER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 12,
                nickName: "b1t",
                fullName: "Valeriy Vakhovskiy",
                country: "Ukraine",
                mechanical: 95,
                tactical: 88,
                presence: 90,
                primaryRole: Role.RIFLER,
                secondaryRole: Role.ENTRY,
                igl: false
            }),
            new Player({
                id: 13,
                nickName: "electronic",
                fullName: "Denis Sharipov",
                country: "Russia",
                mechanical: 94,
                tactical: 92,
                presence: 93,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 14,
                nickName: "Perfecto",
                fullName: "Ilya Zalutskiy",
                country: "Russia",
                mechanical: 85,
                tactical: 92,
                presence: 90,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 15,
                nickName: "Boombl4",
                fullName: "Kirill Mikhailov",
                country: "Russia",
                mechanical: 83,
                tactical: 87,
                presence: 85,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.SUPPORT,
                igl: true
            })
        ],
        coach: new Coach({
            id: 103,
            nickName: "B1ad3",
            fullName: "Andrij Ghorodensjkyj",
            country: "Ukraine",
            overall: 96,
            specialty: CoachSpecialty.PERFORMANCE
        })
    }),

    // 4. Fnatic - ESL One Cologne 2015
    new Team({
        id: 4,
        name: "Fnatic",
        major: "ESL One Cologne 2015",
        players: [
            new Player({
                id: 16,
                nickName: "flusha",
                fullName: "Robin Rönnquist",
                country: "Sweden",
                mechanical: 92,
                tactical: 97,
                presence: 93,
                primaryRole: Role.LURKER,
                secondaryRole: Role.SUPPORT,
                igl: false
            }),
            new Player({
                id: 17,
                nickName: "JW",
                fullName: "Jesper Wecksell",
                country: "Sweden",
                mechanical: 92,
                tactical: 87,
                presence: 94,
                primaryRole: Role.AWPER,
                secondaryRole: Role.ENTRY,
                igl: false
            }),
            new Player({
                id: 18,
                nickName: "olofmeister",
                fullName: "Olof Gustafsson",
                country: "Sweden",
                mechanical: 98,
                tactical: 95,
                presence: 98,
                primaryRole: Role.RIFLER,
                secondaryRole: Role.AWPER,
                igl: false
            }),
            new Player({
                id: 19,
                nickName: "KRIMZ",
                fullName: "Freddy Johansson",
                country: "Sweden",
                mechanical: 90,
                tactical: 95,
                presence: 91,
                primaryRole: Role.RIFLER,
                secondaryRole: Role.SUPPORT,
                igl: false
            }),
            new Player({
                id: 20,
                nickName: "pronax",
                fullName: "Markus Wallsten",
                country: "Sweden",
                mechanical: 76,
                tactical: 90,
                presence: 80,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.RIFLER,
                igl: true
            })
        ],
        coach: new Coach({
            id: 104,
            nickName: "vuggo",
            fullName: "Viktor Jendeby",
            country: "Sweden",
            overall: 84,
            specialty: CoachSpecialty.TACTICAL
        })
    }),

    // 5. FaZe Clan - PGL Major Antwerp 2022
    new Team({
        id: 5,
        name: "FaZe Clan",
        major: "PGL Major Antwerp 2022",
        players: [
            new Player({
                id: 21,
                nickName: "karrigan",
                fullName: "Finn Andersen",
                country: "Denmark",
                mechanical: 82,
                tactical: 95,
                presence: 87,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.SUPPORT,
                igl: true
            }),
            new Player({
                id: 22,
                nickName: "rain",
                fullName: "Håvard Nygaard",
                country: "Norway",
                mechanical: 94,
                tactical: 89,
                presence: 96,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 23,
                nickName: "broky",
                fullName: "Helvijs Saukants",
                country: "Latvia",
                mechanical: 93,
                tactical: 90,
                presence: 93,
                primaryRole: Role.AWPER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 24,
                nickName: "ropz",
                fullName: "Robin Kool",
                country: "Estonia",
                mechanical: 96,
                tactical: 95,
                presence: 91,
                primaryRole: Role.LURKER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 25,
                nickName: "Twistzz",
                fullName: "Russel Van Dulken",
                country: "Canada",
                mechanical: 96,
                tactical: 90,
                presence: 93,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.RIFLER,
                igl: false
            })
        ],
        coach: new Coach({
            id: 105,
            nickName: "RobbaN",
            fullName: "Robert Dahlström",
            country: "Sweden",
            overall: 91,
            specialty: CoachSpecialty.LEADERSHIP
        })
    }),

    // 6. Virtus.pro - EMS One Katowice 2014
    new Team({
        id: 6,
        name: "Virtus.pro",
        major: "EMS One Katowice 2014",
        players: [
            new Player({
                id: 26,
                nickName: "pashaBiceps",
                fullName: "Jarosław Jarząbkowski",
                country: "Poland",
                mechanical: 92,
                tactical: 87,
                presence: 94,
                primaryRole: Role.AWPER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 27,
                nickName: "Byali",
                fullName: "Paweł Bieliński",
                country: "Poland",
                mechanical: 93,
                tactical: 86,
                presence: 91,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 28,
                nickName: "Snax",
                fullName: "Janusz Pogorzelski",
                country: "Poland",
                mechanical: 95,
                tactical: 96,
                presence: 94,
                primaryRole: Role.LURKER,
                secondaryRole: Role.AWPER,
                igl: false
            }),
            new Player({
                id: 29,
                nickName: "Neo",
                fullName: "Filip Kubski",
                country: "Poland",
                mechanical: 89,
                tactical: 92,
                presence: 89,
                primaryRole: Role.RIFLER,
                secondaryRole: Role.SUPPORT,
                igl: false
            }),
            new Player({
                id: 30,
                nickName: "TaZ",
                fullName: "Wiktor Wojtas",
                country: "Poland",
                mechanical: 83,
                tactical: 89,
                presence: 86,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.RIFLER,
                igl: true
            })
        ],
        coach: new Coach({
            id: 106,
            nickName: "kuben",
            fullName: "Jakub Gurczyński",
            country: "Poland",
            overall: 87,
            specialty: CoachSpecialty.LEADERSHIP
        })
    }),

    // 7. Cloud9 - ELEAGUE Major Boston 2018
    new Team({
        id: 7,
        name: "Cloud9",
        major: "ELEAGUE Major Boston 2018",
        players: [
            new Player({
                id: 31,
                nickName: "Tarik",
                fullName: "Tarik Celik",
                country: "United States",
                mechanical: 91,
                tactical: 91,
                presence: 94,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.RIFLER,
                igl: true
            }),
            new Player({
                id: 32,
                nickName: "Stewie2K",
                fullName: "Jake Yip",
                country: "United States",
                mechanical: 92,
                tactical: 88,
                presence: 93,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.AWPER,
                igl: false
            }),
            new Player({
                id: 33,
                nickName: "autimatic",
                fullName: "Timothy Ta",
                country: "United States",
                mechanical: 94,
                tactical: 92,
                presence: 93,
                primaryRole: Role.LURKER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 34,
                nickName: "RUSH",
                fullName: "Will Wierzba",
                country: "United States",
                mechanical: 84,
                tactical: 88,
                presence: 86,
                primaryRole: Role.SUPPORT,
                secondaryRole: Role.ENTRY,
                igl: false
            }),
            new Player({
                id: 35,
                nickName: "Skadoodle",
                fullName: "Tyler Latham",
                country: "United States",
                mechanical: 89,
                tactical: 89,
                presence: 89,
                primaryRole: Role.AWPER,
                secondaryRole: Role.SUPPORT,
                igl: false
            })
        ],
        coach: new Coach({
            id: 107,
            nickName: "valens",
            fullName: "Soham Chowdhury",
            country: "United States",
            overall: 88,
            specialty: CoachSpecialty.TACTICAL
        })
    }),

    // 8. Team Vitality - BLAST.tv Paris Major 2023
    new Team({
        id: 8,
        name: "Team Vitality",
        major: "BLAST.tv Paris Major 2023",
        players: [
            new Player({
                id: 36,
                nickName: "ZywOo",
                fullName: "Mathieu Herbaut",
                country: "France",
                mechanical: 99,
                tactical: 97,
                presence: 98,
                primaryRole: Role.AWPER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 37,
                nickName: "apEX",
                fullName: "Dan Madesclaire",
                country: "France",
                mechanical: 83,
                tactical: 90,
                presence: 88,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.SUPPORT,
                igl: true
            }),
            new Player({
                id: 38,
                nickName: "Spinx",
                fullName: "Lotan Giladi",
                country: "Israel",
                mechanical: 93,
                tactical: 91,
                presence: 92,
                primaryRole: Role.LURKER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 39,
                nickName: "Magisk",
                fullName: "Emil Reif",
                country: "Denmark",
                mechanical: 90,
                tactical: 92,
                presence: 91,
                primaryRole: Role.RIFLER,
                secondaryRole: Role.RIFLER,
                igl: false
            }),
            new Player({
                id: 40,
                nickName: "dupreeh",
                fullName: "Peter Rasmussen",
                country: "Denmark",
                mechanical: 88,
                tactical: 87,
                presence: 89,
                primaryRole: Role.ENTRY,
                secondaryRole: Role.SUPPORT,
                igl: false
            })
        ],
        coach: new Coach({
            id: 108,
            nickName: "zonic",
            fullName: "Danny Sørensen",
            country: "Denmark",
            overall: 97,
            specialty: CoachSpecialty.LEADERSHIP
        })
    })
];