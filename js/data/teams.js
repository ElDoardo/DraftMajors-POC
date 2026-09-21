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
            new Player({ id: 1, nickName: "FalleN", fullName: "Gabriel Toledo", country: "Brazil", mechanical: 94, tactical: 98, presence: 93, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 2, nickName: "fer", fullName: "Fernando Alvarenga", country: "Brazil", mechanical: 94, tactical: 86, presence: 93, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 3, nickName: "coldzera", fullName: "Marcelo David", country: "Brazil", mechanical: 98, tactical: 96, presence: 97, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 4, nickName: "fnx", fullName: "Lincoln Lau", country: "Brazil", mechanical: 86, tactical: 87, presence: 88, primaryRole: Role.RIFLER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 5, nickName: "TACO", fullName: "Epitácio de Melo", country: "Brazil", mechanical: 85, tactical: 90, presence: 89, primaryRole: Role.SUPPORT, secondaryRole: Role.ENTRY, igl: false })
        ],
        coach: new Coach({ id: 101, nickName: "zews", fullName: "Wilton Prado", country: "Brazil", overall: 90, specialty: CoachSpecialty.TACTICAL })
    }),

    // 2. Astralis - FACEIT Major London 2018
    new Team({
        id: 2,
        name: "Astralis",
        major: "FACEIT Major London 2018",
        players: [
            new Player({ id: 6, nickName: "gla1ve", fullName: "Lukas Rossander", country: "Denmark", mechanical: 86, tactical: 98, presence: 92, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 7, nickName: "device", fullName: "Nicolai Reedtz", country: "Denmark", mechanical: 97, tactical: 95, presence: 96, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 8, nickName: "dupreeh", fullName: "Peter Rasmussen", country: "Denmark", mechanical: 93, tactical: 90, presence: 93, primaryRole: Role.ENTRY, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 9, nickName: "Magisk", fullName: "Emil Reif", country: "Denmark", mechanical: 93, tactical: 94, presence: 92, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 10, nickName: "Xyp9x", fullName: "Andreas Højsleth", country: "Denmark", mechanical: 84, tactical: 96, presence: 90, primaryRole: Role.SUPPORT, secondaryRole: Role.LURKER, igl: false })
        ],
        coach: new Coach({ id: 102, nickName: "zonic", fullName: "Danny Sørensen", country: "Denmark", overall: 98, specialty: CoachSpecialty.TACTICAL })
    }),

    // 3. Natus Vincere - PGL Major Stockholm 2021
    new Team({
        id: 3,
        name: "Natus Vincere",
        major: "PGL Major Stockholm 2021",
        players: [
            new Player({ id: 11, nickName: "s1mple", fullName: "Oleksandr Kostyliev", country: "Ukraine", mechanical: 100, tactical: 98, presence: 99, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 12, nickName: "b1t", fullName: "Valeriy Vakhovskiy", country: "Ukraine", mechanical: 95, tactical: 88, presence: 90, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 13, nickName: "electronic", fullName: "Denis Sharipov", country: "Russia", mechanical: 94, tactical: 92, presence: 93, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 14, nickName: "Perfecto", fullName: "Ilya Zalutskiy", country: "Russia", mechanical: 85, tactical: 92, presence: 90, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 15, nickName: "Boombl4", fullName: "Kirill Mikhailov", country: "Russia", mechanical: 83, tactical: 87, presence: 85, primaryRole: Role.ENTRY, secondaryRole: Role.SUPPORT, igl: true })
        ],
        coach: new Coach({ id: 103, nickName: "B1ad3", fullName: "Andrij Ghorodensjkyj", country: "Ukraine", overall: 96, specialty: CoachSpecialty.PERFORMANCE })
    }),

    // 4. Fnatic - ESL One Cologne 2015
    new Team({
        id: 4,
        name: "Fnatic",
        major: "ESL One Cologne 2015",
        players: [
            new Player({ id: 16, nickName: "flusha", fullName: "Robin Rönnquist", country: "Sweden", mechanical: 92, tactical: 97, presence: 93, primaryRole: Role.LURKER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 17, nickName: "JW", fullName: "Jesper Wecksell", country: "Sweden", mechanical: 92, tactical: 87, presence: 94, primaryRole: Role.AWPER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 18, nickName: "olofmeister", fullName: "Olof Gustafsson", country: "Sweden", mechanical: 98, tactical: 95, presence: 98, primaryRole: Role.RIFLER, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 19, nickName: "KRIMZ", fullName: "Freddy Johansson", country: "Sweden", mechanical: 90, tactical: 95, presence: 91, primaryRole: Role.RIFLER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 20, nickName: "pronax", fullName: "Markus Wallsten", country: "Sweden", mechanical: 76, tactical: 90, presence: 80, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true })
        ],
        coach: new Coach({ id: 104, nickName: "vuggo", fullName: "Viktor Jendeby", country: "Sweden", overall: 84, specialty: CoachSpecialty.TACTICAL })
    }),

    // 5. FaZe Clan - PGL Major Antwerp 2022
    new Team({
        id: 5,
        name: "FaZe Clan",
        major: "PGL Major Antwerp 2022",
        players: [
            new Player({ id: 21, nickName: "karrigan", fullName: "Finn Andersen", country: "Denmark", mechanical: 82, tactical: 95, presence: 87, primaryRole: Role.ENTRY, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 22, nickName: "rain", fullName: "Håvard Nygaard", country: "Norway", mechanical: 94, tactical: 89, presence: 96, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 23, nickName: "broky", fullName: "Helvijs Saukants", country: "Latvia", mechanical: 93, tactical: 90, presence: 93, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 24, nickName: "ropz", fullName: "Robin Kool", country: "Estonia", mechanical: 96, tactical: 95, presence: 91, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 25, nickName: "Twistzz", fullName: "Russel Van Dulken", country: "Canada", mechanical: 96, tactical: 90, presence: 93, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 105, nickName: "RobbaN", fullName: "Robert Dahlström", country: "Sweden", overall: 91, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 6. Virtus.pro - EMS One Katowice 2014
    new Team({
        id: 6,
        name: "Virtus.pro",
        major: "EMS One Katowice 2014",
        players: [
            new Player({ id: 26, nickName: "pashaBiceps", fullName: "Jarosław Jarząbkowski", country: "Poland", mechanical: 92, tactical: 87, presence: 94, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 27, nickName: "Byali", fullName: "Paweł Bieliński", country: "Poland", mechanical: 93, tactical: 86, presence: 91, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 28, nickName: "Snax", fullName: "Janusz Pogorzelski", country: "Poland", mechanical: 95, tactical: 96, presence: 94, primaryRole: Role.LURKER, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 29, nickName: "Neo", fullName: "Filip Kubski", country: "Poland", mechanical: 89, tactical: 92, presence: 89, primaryRole: Role.RIFLER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 30, nickName: "TaZ", fullName: "Wiktor Wojtas", country: "Poland", mechanical: 83, tactical: 89, presence: 86, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true })
        ],
        coach: new Coach({ id: 106, nickName: "kuben", fullName: "Jakub Gurczyński", country: "Poland", overall: 87, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 7. Cloud9 - ELEAGUE Major Boston 2018
    new Team({
        id: 7,
        name: "Cloud9",
        major: "ELEAGUE Major Boston 2018",
        players: [
            new Player({ id: 31, nickName: "Tarik", fullName: "Tarik Celik", country: "United States", mechanical: 91, tactical: 91, presence: 94, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 32, nickName: "Stewie2K", fullName: "Jake Yip", country: "United States", mechanical: 92, tactical: 88, presence: 93, primaryRole: Role.ENTRY, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 33, nickName: "autimatic", fullName: "Timothy Ta", country: "United States", mechanical: 94, tactical: 92, presence: 93, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 34, nickName: "RUSH", fullName: "Will Wierzba", country: "United States", mechanical: 84, tactical: 88, presence: 86, primaryRole: Role.SUPPORT, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 35, nickName: "Skadoodle", fullName: "Tyler Latham", country: "United States", mechanical: 89, tactical: 89, presence: 89, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 107, nickName: "valens", fullName: "Soham Chowdhury", country: "United States", overall: 88, specialty: CoachSpecialty.TACTICAL })
    }),

    // 8. Team Vitality - BLAST.tv Paris Major 2023
    new Team({
        id: 8,
        name: "Team Vitality",
        major: "BLAST.tv Paris Major 2023",
        players: [
            new Player({ id: 36, nickName: "ZywOo", fullName: "Mathieu Herbaut", country: "France", mechanical: 99, tactical: 97, presence: 98, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 37, nickName: "apEX", fullName: "Dan Madesclaire", country: "France", mechanical: 83, tactical: 90, presence: 88, primaryRole: Role.ENTRY, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 38, nickName: "Spinx", fullName: "Lotan Giladi", country: "Israel", mechanical: 93, tactical: 91, presence: 92, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 39, nickName: "Magisk", fullName: "Emil Reif", country: "Denmark", mechanical: 90, tactical: 92, presence: 91, primaryRole: Role.RIFLER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 40, nickName: "dupreeh", fullName: "Peter Rasmussen", country: "Denmark", mechanical: 88, tactical: 87, presence: 89, primaryRole: Role.ENTRY, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 108, nickName: "zonic", fullName: "Danny Sørensen", country: "Denmark", overall: 97, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 9. Ninjas in Pyjamas - ESL One Cologne 2014
    new Team({
        id: 9, name: "Ninjas in Pyjamas", major: "ESL One Cologne 2014",
        players: [
            new Player({ id: 41, nickName: "f0rest", fullName: "Patrik Lindberg", country: "Sweden", mechanical: 96, tactical: 88, presence: 92, primaryRole: Role.RIFLER, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 42, nickName: "GeT_RiGhT", fullName: "Christopher Alesund", country: "Sweden", mechanical: 95, tactical: 93, presence: 95, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 43, nickName: "Xizt", fullName: "Richard Landström", country: "Sweden", mechanical: 85, tactical: 94, presence: 88, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 44, nickName: "friberg", fullName: "Adam Friberg", country: "Sweden", mechanical: 88, tactical: 85, presence: 90, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 45, nickName: "Fifflaren", fullName: "Robin Johansson", country: "Sweden", mechanical: 78, tactical: 87, presence: 85, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 109, nickName: "pita", fullName: "Faruk Pita", country: "Sweden", overall: 85, specialty: CoachSpecialty.TACTICAL })
    }),

    // 10. Team LDLC - DreamHack Winter 2014
    new Team({
        id: 10, name: "Team LDLC", major: "DreamHack Winter 2014",
        players: [
            new Player({ id: 46, nickName: "Happy", fullName: "Vincent Schopenhauer", country: "France", mechanical: 88, tactical: 92, presence: 90, primaryRole: Role.LURKER, secondaryRole: Role.AWPER, igl: true }),
            new Player({ id: 47, nickName: "shox", fullName: "Richard Papillon", country: "France", mechanical: 95, tactical: 90, presence: 94, primaryRole: Role.RIFLER, secondaryRole: Role.LURKER, igl: false }),
            new Player({ id: 48, nickName: "kioShiMa", fullName: "Fabien Fiey", country: "France", mechanical: 90, tactical: 85, presence: 88, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 49, nickName: "NBK-", fullName: "Nathan Schmitt", country: "France", mechanical: 89, tactical: 91, presence: 89, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 50, nickName: "SmithZz", fullName: "Edouard Dubourdeaux", country: "France", mechanical: 84, tactical: 86, presence: 85, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 110, nickName: "MoMan", fullName: "Emmanuel Marquez", country: "France", overall: 82, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 11. Fnatic - DreamHack Winter 2013
    new Team({
        id: 11, name: "Fnatic", major: "DreamHack Winter 2013",
        players: [
            new Player({ id: 51, nickName: "pronax", fullName: "Markus Wallsten", country: "Sweden", mechanical: 75, tactical: 92, presence: 80, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 52, nickName: "JW", fullName: "Jesper Wecksell", country: "Sweden", mechanical: 93, tactical: 85, presence: 92, primaryRole: Role.AWPER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 53, nickName: "flusha", fullName: "Robin Rönnquist", country: "Sweden", mechanical: 91, tactical: 95, presence: 90, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 54, nickName: "schneider", fullName: "Andreas Lindberg", country: "Sweden", mechanical: 88, tactical: 82, presence: 85, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 55, nickName: "Devilwalk", fullName: "Jonatan Lundberg", country: "Sweden", mechanical: 78, tactical: 85, presence: 82, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 111, nickName: "cArn", fullName: "Patrik Sättermon", country: "Sweden", overall: 86, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 12. Team EnVyUs - DreamHack Open Cluj-Napoca 2015
    new Team({
        id: 12, name: "Team EnVyUs", major: "DreamHack Open Cluj-Napoca 2015",
        players: [
            new Player({ id: 56, nickName: "Happy", fullName: "Vincent Schopenhauer", country: "France", mechanical: 87, tactical: 91, presence: 89, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 57, nickName: "kennyS", fullName: "Kenny Schrub", country: "France", mechanical: 98, tactical: 88, presence: 96, primaryRole: Role.AWPER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 58, nickName: "NBK-", fullName: "Nathan Schmitt", country: "France", mechanical: 89, tactical: 93, presence: 91, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 59, nickName: "apEX", fullName: "Dan Madesclaire", country: "France", mechanical: 92, tactical: 85, presence: 90, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 60, nickName: "kioShiMa", fullName: "Fabien Fiey", country: "France", mechanical: 88, tactical: 86, presence: 85, primaryRole: Role.RIFLER, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 112, nickName: "Next", fullName: "Jordan Savelli", country: "France", overall: 83, specialty: CoachSpecialty.PERFORMANCE })
    }),

    // 13. Luminosity Gaming - MLG Columbus 2016
    new Team({
        id: 13, name: "Luminosity Gaming", major: "MLG Columbus 2016",
        players: [
            new Player({ id: 61, nickName: "FalleN", fullName: "Gabriel Toledo", country: "Brazil", mechanical: 93, tactical: 97, presence: 92, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 62, nickName: "fer", fullName: "Fernando Alvarenga", country: "Brazil", mechanical: 93, tactical: 85, presence: 91, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 63, nickName: "coldzera", fullName: "Marcelo David", country: "Brazil", mechanical: 97, tactical: 95, presence: 96, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 64, nickName: "fnx", fullName: "Lincoln Lau", country: "Brazil", mechanical: 87, tactical: 88, presence: 89, primaryRole: Role.RIFLER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 65, nickName: "TACO", fullName: "Epitácio de Melo", country: "Brazil", mechanical: 84, tactical: 89, presence: 88, primaryRole: Role.SUPPORT, secondaryRole: Role.ENTRY, igl: false })
        ],
        coach: new Coach({ id: 113, nickName: "zews", fullName: "Wilton Prado", country: "Brazil", overall: 89, specialty: CoachSpecialty.TACTICAL })
    }),

    // 14. Astralis - ELEAGUE Major Atlanta 2017
    new Team({
        id: 14, name: "Astralis", major: "ELEAGUE Major Atlanta 2017",
        players: [
            new Player({ id: 66, nickName: "gla1ve", fullName: "Lukas Rossander", country: "Denmark", mechanical: 85, tactical: 97, presence: 90, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 67, nickName: "device", fullName: "Nicolai Reedtz", country: "Denmark", mechanical: 96, tactical: 94, presence: 95, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 68, nickName: "dupreeh", fullName: "Peter Rasmussen", country: "Denmark", mechanical: 92, tactical: 88, presence: 92, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 69, nickName: "Kjaerbye", fullName: "Markus Kjærbye", country: "Denmark", mechanical: 91, tactical: 85, presence: 88, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 70, nickName: "Xyp9x", fullName: "Andreas Højsleth", country: "Denmark", mechanical: 85, tactical: 95, presence: 91, primaryRole: Role.SUPPORT, secondaryRole: Role.LURKER, igl: false })
        ],
        coach: new Coach({ id: 114, nickName: "zonic", fullName: "Danny Sørensen", country: "Denmark", overall: 96, specialty: CoachSpecialty.TACTICAL })
    }),

    // 15. Gambit Esports - PGL Major Kraków 2017
    new Team({
        id: 15, name: "Gambit Esports", major: "PGL Major Kraków 2017",
        players: [
            new Player({ id: 71, nickName: "Zeus", fullName: "Danylo Teslenko", country: "Ukraine", mechanical: 79, tactical: 95, presence: 92, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 72, nickName: "AdreN", fullName: "Dauren Kystaubayev", country: "Kazakhstan", mechanical: 90, tactical: 89, presence: 90, primaryRole: Role.RIFLER, secondaryRole: Role.LURKER, igl: false }),
            new Player({ id: 73, nickName: "HObbit", fullName: "Abay Khassenov", country: "Kazakhstan", mechanical: 91, tactical: 88, presence: 89, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 74, nickName: "mou", fullName: "Rustem Telepov", country: "Kazakhstan", mechanical: 87, tactical: 85, presence: 86, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 75, nickName: "Dosia", fullName: "Mikhail Stolyarov", country: "Russia", mechanical: 84, tactical: 87, presence: 88, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 115, nickName: "kane", fullName: "Mykhailo Blagin", country: "Ukraine", overall: 85, specialty: CoachSpecialty.TACTICAL })
    }),

    // 16. Astralis - IEM Katowice Major 2019
    new Team({
        id: 16, name: "Astralis", major: "IEM Katowice Major 2019",
        players: [
            new Player({ id: 76, nickName: "gla1ve", fullName: "Lukas Rossander", country: "Denmark", mechanical: 87, tactical: 99, presence: 94, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 77, nickName: "device", fullName: "Nicolai Reedtz", country: "Denmark", mechanical: 97, tactical: 96, presence: 97, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 78, nickName: "dupreeh", fullName: "Peter Rasmussen", country: "Denmark", mechanical: 93, tactical: 91, presence: 94, primaryRole: Role.ENTRY, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 79, nickName: "Magisk", fullName: "Emil Reif", country: "Denmark", mechanical: 94, tactical: 95, presence: 93, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 80, nickName: "Xyp9x", fullName: "Andreas Højsleth", country: "Denmark", mechanical: 86, tactical: 97, presence: 92, primaryRole: Role.SUPPORT, secondaryRole: Role.LURKER, igl: false })
        ],
        coach: new Coach({ id: 116, nickName: "zonic", fullName: "Danny Sørensen", country: "Denmark", overall: 99, specialty: CoachSpecialty.TACTICAL })
    }),

    // 17. Astralis - StarLadder Major Berlin 2019
    new Team({
        id: 17, name: "Astralis", major: "StarLadder Major Berlin 2019",
        players: [
            new Player({ id: 81, nickName: "gla1ve", fullName: "Lukas Rossander", country: "Denmark", mechanical: 87, tactical: 99, presence: 95, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 82, nickName: "device", fullName: "Nicolai Reedtz", country: "Denmark", mechanical: 97, tactical: 96, presence: 97, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 83, nickName: "dupreeh", fullName: "Peter Rasmussen", country: "Denmark", mechanical: 92, tactical: 91, presence: 94, primaryRole: Role.ENTRY, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 84, nickName: "Magisk", fullName: "Emil Reif", country: "Denmark", mechanical: 94, tactical: 95, presence: 94, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 85, nickName: "Xyp9x", fullName: "Andreas Højsleth", country: "Denmark", mechanical: 85, tactical: 97, presence: 93, primaryRole: Role.SUPPORT, secondaryRole: Role.LURKER, igl: false })
        ],
        coach: new Coach({ id: 117, nickName: "zonic", fullName: "Danny Sørensen", country: "Denmark", overall: 99, specialty: CoachSpecialty.TACTICAL })
    }),

    // 18. Outsiders - IEM Rio Major 2022
    new Team({
        id: 18, name: "Outsiders", major: "IEM Rio Major 2022",
        players: [
            new Player({ id: 86, nickName: "Jame", fullName: "Dzhami Ali", country: "Russia", mechanical: 91, tactical: 96, presence: 92, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 87, nickName: "FL1T", fullName: "Evgenii Lebedev", country: "Russia", mechanical: 93, tactical: 89, presence: 88, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 88, nickName: "Qikert", fullName: "Alexey Golubev", country: "Kazakhstan", mechanical: 86, tactical: 92, presence: 89, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 89, nickName: "n0rb3r7", fullName: "David Danielyan", country: "Russia", mechanical: 88, tactical: 87, presence: 87, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 90, nickName: "fame", fullName: "Petr Bolyshev", country: "Russia", mechanical: 90, tactical: 88, presence: 86, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 118, nickName: "dastan", fullName: "Dastan Akbayev", country: "Kazakhstan", overall: 91, specialty: CoachSpecialty.TACTICAL })
    }),

    // 19. Natus Vincere - PGL Major Copenhagen 2024
    new Team({
        id: 19, name: "Natus Vincere", major: "PGL Major Copenhagen 2024",
        players: [
            new Player({ id: 91, nickName: "Aleksib", fullName: "Aleksi Virolainen", country: "Finland", mechanical: 84, tactical: 96, presence: 93, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 92, nickName: "b1t", fullName: "Valeriy Vakhovskiy", country: "Ukraine", mechanical: 95, tactical: 90, presence: 94, primaryRole: Role.RIFLER, secondaryRole: Role.LURKER, igl: false }),
            new Player({ id: 93, nickName: "jL", fullName: "Justinas Lekavicius", country: "Lithuania", mechanical: 93, tactical: 88, presence: 95, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 94, nickName: "iM", fullName: "Mihai Ivan", country: "Romania", mechanical: 91, tactical: 87, presence: 89, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 95, nickName: "w0nderful", fullName: "Ihor Zhdanov", country: "Ukraine", mechanical: 94, tactical: 88, presence: 90, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 119, nickName: "B1ad3", fullName: "Andrij Ghorodensjkyj", country: "Ukraine", overall: 98, specialty: CoachSpecialty.TACTICAL })
    }),

    // 20. Team Liquid - ESL One Cologne 2016 (Vice-Campeões)
    new Team({
        id: 20, name: "Team Liquid", major: "ESL One Cologne 2016",
        players: [
            new Player({ id: 96, nickName: "Hiko", fullName: "Spencer Martin", country: "United States", mechanical: 88, tactical: 92, presence: 91, primaryRole: Role.LURKER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 97, nickName: "EliGE", fullName: "Jonathan Jablonowski", country: "United States", mechanical: 94, tactical: 88, presence: 90, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 98, nickName: "nitr0", fullName: "Nick Cannella", country: "United States", mechanical: 89, tactical: 90, presence: 89, primaryRole: Role.ENTRY, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 99, nickName: "s1mple", fullName: "Oleksandr Kostyliev", country: "Ukraine", mechanical: 98, tactical: 85, presence: 94, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 100, nickName: "jdm64", fullName: "Josh Marzano", country: "United States", mechanical: 87, tactical: 82, presence: 85, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 120, nickName: "peacemaker", fullName: "Luis Tadeu", country: "Brazil", overall: 86, specialty: CoachSpecialty.TACTICAL })
    }),

    // 21. Natus Vincere - MLG Columbus 2016 (Vice-Campeões)
    new Team({
        id: 21, name: "Natus Vincere", major: "MLG Columbus 2016",
        players: [
            new Player({ id: 121, nickName: "Zeus", fullName: "Danylo Teslenko", country: "Ukraine", mechanical: 81, tactical: 94, presence: 91, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 122, nickName: "Edward", fullName: "Ioann Sukhariev", country: "Ukraine", mechanical: 88, tactical: 89, presence: 88, primaryRole: Role.SUPPORT, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 123, nickName: "seized", fullName: "Denis Kostin", country: "Russia", mechanical: 87, tactical: 88, presence: 85, primaryRole: Role.SUPPORT, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 124, nickName: "flamie", fullName: "Egor Vasilyev", country: "Russia", mechanical: 93, tactical: 85, presence: 87, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 125, nickName: "GuardiaN", fullName: "Ladislav Kovács", country: "Slovakia", mechanical: 97, tactical: 90, presence: 95, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 126, nickName: "starix", fullName: "Sergey Ischuk", country: "Ukraine", overall: 89, specialty: CoachSpecialty.TACTICAL })
    }),

    // 22. Virtus.pro - ELEAGUE Major Atlanta 2017 (Vice-Campeões)
    new Team({
        id: 22, name: "Virtus.pro", major: "ELEAGUE Major Atlanta 2017",
        players: [
            new Player({ id: 127, nickName: "Snax", fullName: "Janusz Pogorzelski", country: "Poland", mechanical: 94, tactical: 95, presence: 96, primaryRole: Role.LURKER, secondaryRole: Role.AWPER, igl: false }),
            new Player({ id: 128, nickName: "Neo", fullName: "Filip Kubski", country: "Poland", mechanical: 88, tactical: 94, presence: 93, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 129, nickName: "TaZ", fullName: "Wiktor Wojtas", country: "Poland", mechanical: 84, tactical: 91, presence: 90, primaryRole: Role.SUPPORT, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 130, nickName: "pashaBiceps", fullName: "Jarosław Jarząbkowski", country: "Poland", mechanical: 90, tactical: 86, presence: 92, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 131, nickName: "byali", fullName: "Paweł Bieliński", country: "Poland", mechanical: 91, tactical: 85, presence: 88, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 132, nickName: "kuben", fullName: "Jakub Gurczyński", country: "Poland", overall: 89, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 23. Immortals - PGL Major Kraków 2017 (Vice-Campeões)
    new Team({
        id: 23, name: "Immortals", major: "PGL Major Kraków 2017",
        players: [
            new Player({ id: 133, nickName: "HEN1", fullName: "Henrique Teles", country: "Brazil", mechanical: 92, tactical: 84, presence: 90, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 134, nickName: "LUCAS1", fullName: "Lucas Teles", country: "Brazil", mechanical: 87, tactical: 88, presence: 89, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 135, nickName: "boltz", fullName: "Ricardo Prass", country: "Brazil", mechanical: 89, tactical: 90, presence: 88, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 136, nickName: "steel", fullName: "Lucas Lopes", country: "Brazil", mechanical: 85, tactical: 91, presence: 92, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 137, nickName: "kNgV-", fullName: "Vito Giuseppe", country: "Brazil", mechanical: 93, tactical: 82, presence: 87, primaryRole: Role.AWPER, secondaryRole: Role.ENTRY, igl: false })
        ],
        coach: new Coach({ id: 138, nickName: "zakk", fullName: "Rafael Fernandes", country: "Brazil", overall: 86, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 24. FaZe Clan - ELEAGUE Major Boston 2018 (Vice-Campeões)
    new Team({
        id: 24, name: "FaZe Clan", major: "ELEAGUE Major Boston 2018",
        players: [
            new Player({ id: 139, nickName: "karrigan", fullName: "Finn Andersen", country: "Denmark", mechanical: 82, tactical: 96, presence: 92, primaryRole: Role.ENTRY, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 140, nickName: "rain", fullName: "Håvard Nygaard", country: "Norway", mechanical: 93, tactical: 88, presence: 91, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 141, nickName: "NiKo", fullName: "Nikola Kovač", country: "Bosnia and Herzegovina", mechanical: 98, tactical: 92, presence: 95, primaryRole: Role.RIFLER, secondaryRole: Role.LURKER, igl: false }),
            new Player({ id: 142, nickName: "GuardiaN", fullName: "Ladislav Kovács", country: "Slovakia", mechanical: 94, tactical: 91, presence: 93, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 143, nickName: "olofmeister", fullName: "Olof Gustafsson", country: "Sweden", mechanical: 90, tactical: 93, presence: 92, primaryRole: Role.SUPPORT, secondaryRole: Role.LURKER, igl: false })
        ],
        coach: new Coach({ id: 144, nickName: "RobbaN", fullName: "Robert Dahlström", country: "Sweden", overall: 90, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 25. ENCE - IEM Katowice Major 2019 (Vice-Campeões)
    new Team({
        id: 25, name: "ENCE", major: "IEM Katowice Major 2019",
        players: [
            new Player({ id: 145, nickName: "Aleksib", fullName: "Aleksi Virolainen", country: "Finland", mechanical: 83, tactical: 95, presence: 90, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 146, nickName: "allu", fullName: "Aleksi Jalli", country: "Finland", mechanical: 90, tactical: 89, presence: 88, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 147, nickName: "sergej", fullName: "Jere Salo", country: "Finland", mechanical: 93, tactical: 86, presence: 87, primaryRole: Role.RIFLER, secondaryRole: Role.LURKER, igl: false }),
            new Player({ id: 148, nickName: "Aerial", fullName: "Jani Jussila", country: "Finland", mechanical: 88, tactical: 84, presence: 85, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 149, nickName: "xseveN", fullName: "Sami Laasanen", country: "Finland", mechanical: 84, tactical: 90, presence: 86, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 150, nickName: "Twista", fullName: "Slaava Räsänen", country: "Finland", overall: 87, specialty: CoachSpecialty.TACTICAL })
    }),

    // 26. AVANGAR - StarLadder Major Berlin 2019 (Vice-Campeões)
    new Team({
        id: 26, name: "AVANGAR", major: "StarLadder Major Berlin 2019",
        players: [
            new Player({ id: 151, nickName: "Jame", fullName: "Dzhami Ali", country: "Russia", mechanical: 89, tactical: 94, presence: 90, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 152, nickName: "qikert", fullName: "Alexey Golubev", country: "Kazakhstan", mechanical: 88, tactical: 90, presence: 87, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 153, nickName: "buster", fullName: "Timur Tulepov", country: "Kazakhstan", mechanical: 90, tactical: 86, presence: 85, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 154, nickName: "SANJI", fullName: "Sanjar Kuliev", country: "Uzbekistan", mechanical: 82, tactical: 91, presence: 84, primaryRole: Role.SUPPORT, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 155, nickName: "AdreN", fullName: "Dauren Kystaubayev", country: "Kazakhstan", mechanical: 85, tactical: 90, presence: 88, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 156, nickName: "dastan", fullName: "Dastan Akbayev", country: "Kazakhstan", overall: 88, specialty: CoachSpecialty.TACTICAL })
    }),

    // 27. G2 Esports - PGL Major Stockholm 2021 (Vice-Campeões)
    new Team({
        id: 27, name: "G2 Esports", major: "PGL Major Stockholm 2021",
        players: [
            new Player({ id: 157, nickName: "nexa", fullName: "Nemanja Isaković", country: "Serbia", mechanical: 87, tactical: 92, presence: 89, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 158, nickName: "huNter-", fullName: "Nemanja Kovač", country: "Bosnia and Herzegovina", mechanical: 93, tactical: 89, presence: 91, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 159, nickName: "NiKo", fullName: "Nikola Kovač", country: "Bosnia and Herzegovina", mechanical: 99, tactical: 92, presence: 96, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false }),
            new Player({ id: 160, nickName: "AmaNEk", fullName: "François Delaunay", country: "France", mechanical: 86, tactical: 88, presence: 85, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 161, nickName: "JaCkz", fullName: "Audric Jug", country: "France", mechanical: 89, tactical: 84, presence: 88, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 162, nickName: "maLeK", fullName: "Damien Marcel", country: "France", overall: 89, specialty: CoachSpecialty.PERFORMANCE })
    }),

    // 28. Heroic - IEM Rio Major 2022 (Vice-Campeões)
    new Team({
        id: 28, name: "Heroic", major: "IEM Rio Major 2022",
        players: [
            new Player({ id: 163, nickName: "cadiaN", fullName: "Casper Møller", country: "Denmark", mechanical: 88, tactical: 96, presence: 97, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 164, nickName: "stavn", fullName: "Martin Lund", country: "Denmark", mechanical: 94, tactical: 90, presence: 91, primaryRole: Role.RIFLER, secondaryRole: Role.LURKER, igl: false }),
            new Player({ id: 165, nickName: "TeSeS", fullName: "René Madsen", country: "Denmark", mechanical: 91, tactical: 88, presence: 87, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 166, nickName: "sjuush", fullName: "Rasmus Beck", country: "Denmark", mechanical: 87, tactical: 91, presence: 86, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 167, nickName: "jabbi", fullName: "Jakob Nygaard", country: "Denmark", mechanical: 92, tactical: 87, presence: 89, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false })
        ],
        coach: new Coach({ id: 168, nickName: "Xizt", fullName: "Richard Landström", country: "Sweden", overall: 92, specialty: CoachSpecialty.TACTICAL })
    }),

    // 29. GamerLegion - BLAST.tv Paris Major 2023 (Vice-Campeões)
    new Team({
        id: 29, name: "GamerLegion", major: "BLAST.tv Paris Major 2023",
        players: [
            new Player({ id: 169, nickName: "siuhy", fullName: "Kamil Szkaradek", country: "Poland", mechanical: 85, tactical: 95, presence: 92, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 170, nickName: "iM", fullName: "Mihai Ivan", country: "Romania", mechanical: 93, tactical: 86, presence: 90, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 171, nickName: "isak", fullName: "Isak Fahlén", country: "Sweden", mechanical: 86, tactical: 89, presence: 85, primaryRole: Role.SUPPORT, secondaryRole: Role.LURKER, igl: false }),
            new Player({ id: 172, nickName: "acoR", fullName: "Frederik Gyldstrand", country: "Denmark", mechanical: 89, tactical: 85, presence: 86, primaryRole: Role.AWPER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 173, nickName: "Keoz", fullName: "Nicolas Dgus", country: "Belgium", mechanical: 84, tactical: 87, presence: 85, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false })
        ],
        coach: new Coach({ id: 174, nickName: "ash", fullName: "Ashley Battye", country: "United Kingdom", overall: 87, specialty: CoachSpecialty.TACTICAL })
    }),

    // 30. FaZe Clan - PGL Major Copenhagen 2024 (Vice-Campeões)
    new Team({
        id: 30, name: "FaZe Clan", major: "PGL Major Copenhagen 2024",
        players: [
            new Player({ id: 175, nickName: "karrigan", fullName: "Finn Andersen", country: "Denmark", mechanical: 81, tactical: 96, presence: 94, primaryRole: Role.ENTRY, secondaryRole: Role.SUPPORT, igl: true }),
            new Player({ id: 176, nickName: "rain", fullName: "Håvard Nygaard", country: "Norway", mechanical: 91, tactical: 89, presence: 93, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 177, nickName: "broky", fullName: "Helvijs Saukants", country: "Latvia", mechanical: 94, tactical: 91, presence: 94, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 178, nickName: "ropz", fullName: "Robin Kool", country: "Estonia", mechanical: 95, tactical: 96, presence: 92, primaryRole: Role.LURKER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 179, nickName: "frozen", fullName: "David Čerňanský", country: "Slovakia", mechanical: 94, tactical: 92, presence: 91, primaryRole: Role.RIFLER, secondaryRole: Role.SUPPORT, igl: false })
        ],
        coach: new Coach({ id: 180, nickName: "NEO", fullName: "Filip Kubski", country: "Poland", overall: 91, specialty: CoachSpecialty.LEADERSHIP })
    }),

    // 31. MOUZ - PGL Major Copenhagen 2024 (Destaque Play-offs)
    new Team({
        id: 31, name: "MOUZ", major: "PGL Major Copenhagen 2024",
        players: [
            new Player({ id: 181, nickName: "siuhy", fullName: "Kamil Szkaradek", country: "Poland", mechanical: 86, tactical: 96, presence: 93, primaryRole: Role.SUPPORT, secondaryRole: Role.RIFLER, igl: true }),
            new Player({ id: 182, nickName: "torzsi", fullName: "Ádám Torzsás", country: "Hungary", mechanical: 91, tactical: 87, presence: 88, primaryRole: Role.AWPER, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 183, nickName: "xertioN", fullName: "Dorian Berman", country: "Israel", mechanical: 92, tactical: 88, presence: 90, primaryRole: Role.ENTRY, secondaryRole: Role.RIFLER, igl: false }),
            new Player({ id: 184, nickName: "Jimpphat", fullName: "Jimi Salo", country: "Finland", mechanical: 94, tactical: 91, presence: 89, primaryRole: Role.LURKER, secondaryRole: Role.SUPPORT, igl: false }),
            new Player({ id: 185, nickName: "Brollan", fullName: "Ludvig Brolin", country: "Sweden", mechanical: 92, tactical: 86, presence: 88, primaryRole: Role.RIFLER, secondaryRole: Role.ENTRY, igl: false })
        ],
        coach: new Coach({ id: 186, nickName: "sycrone", fullName: "Dennis Nielsen", country: "Denmark", overall: 90, specialty: CoachSpecialty.TACTICAL })
    })
];