export interface Player {
  id: string;
  sno: number;
  legalName: string;
  jerseyName: string;
  jerseyNumber: number;
  dob: string;
  age: number;
  bloodGroup: string;
  phone: string;
  email: string;
  aadharPan: string;
  locality: string;
  education: string;
  profession: string;
  kitSize: string;
  jerseyType: string;
  playerType: string;
  dues: {
    total: number;
    paid: number;
    due: number;
    history: Array<{
      date: string;
      total: number;
      paid: number;
      due: number;
    }>;
  };
  tournamentOverview: {
    total: number;
    paid: number;
    due: number;
    matches: number;
    remainingPool: number;
    settlement: string;
  };
  image?: string;
  stats?: {
    runs: number;
    wickets: number;
    matches: number;
  };
}

export interface Match {
  id: string;
  date: string;
  opponent: string;
  venue: string;
  streamUrl?: string;
  scorecardUrl?: string;
  result?: string;
  status: "upcoming" | "live" | "completed";
  topPerformers?: Array<{
    playerId: string;
    playerName: string;
    runs?: number;
    wickets?: number;
    mom: boolean;
  }>;
}

export interface Tournament {
  id: string;
  name: string;
  season: string;
  totalCollected: number;
  totalOutstanding: number;
  settledCount: number;
  pendingCount: number;
}

export interface MerchandiseProduct {
  id: string;
  name: string;
  type: "jersey" | "cap" | "hoodie" | "scarf";
  price: number;
  sizes: string[];
  stock: number;
  image?: string;
}

export const PLAYERS: Player[] = [
  {
    id: "uid_001",
    sno: 1,
    legalName: "Nikhil Kumar",
    jerseyName: "Nikhil",
    jerseyNumber: 5,
    dob: "1993-08-09",
    age: 31,
    bloodGroup: "O+",
    phone: "9958389057",
    email: "nkmishra107@gmail.com",
    aadharPan: "",
    locality: "Khora",
    education: "Graduate",
    profession: "Software Engineer",
    kitSize: "M/32",
    jerseyType: "Half sleeves",
    playerType: "Batting AR",
    dues: {
      total: 2000,
      paid: 2000,
      due: 0,
      history: [
        { date: "2024-06-30", total: 564, paid: 564, due: 0 },
        { date: "2024-07-15", total: 600, paid: 600, due: 0 },
        { date: "2024-08-01", total: 836, paid: 836, due: 0 },
      ],
    },
    tournamentOverview: {
      total: 1000,
      paid: 1000,
      due: 0,
      matches: 3,
      remainingPool: 183,
      settlement: "Adjusted in Match Fees",
    },
    stats: {
      runs: 256,
      wickets: 0,
      matches: 5,
    },
  },
  {
    id: "uid_002",
    sno: 2,
    legalName: "Sanchit Saxena",
    jerseyName: "Sanchit",
    jerseyNumber: 7,
    dob: "1994-05-12",
    age: 30,
    bloodGroup: "B+",
    phone: "9876543210",
    email: "sanchit.saxena@email.com",
    aadharPan: "",
    locality: "Mayur Vihar",
    education: "Graduate",
    profession: "Business Analyst",
    kitSize: "L/34",
    jerseyType: "Full sleeves",
    playerType: "Bowling AR",
    dues: {
      total: 1800,
      paid: 1200,
      due: 600,
      history: [
        { date: "2024-06-30", total: 564, paid: 564, due: 0 },
        { date: "2024-07-15", total: 600, paid: 400, due: 200 },
        { date: "2024-08-01", total: 636, paid: 236, due: 400 },
      ],
    },
    tournamentOverview: {
      total: 1200,
      paid: 800,
      due: 400,
      matches: 4,
      remainingPool: 250,
      settlement: "Pending",
    },
    stats: {
      runs: 120,
      wickets: 8,
      matches: 4,
    },
  },
  {
    id: "uid_003",
    sno: 3,
    legalName: "Rachit Sharma",
    jerseyName: "Rachit",
    jerseyNumber: 23,
    dob: "1996-02-20",
    age: 28,
    bloodGroup: "A+",
    phone: "9123456789",
    email: "rachit.sharma@email.com",
    aadharPan: "",
    locality: "Noida",
    education: "Graduate",
    profession: "Consultant",
    kitSize: "M/32",
    jerseyType: "Half sleeves",
    playerType: "Batsman",
    dues: {
      total: 2000,
      paid: 2000,
      due: 0,
      history: [
        { date: "2024-06-30", total: 564, paid: 564, due: 0 },
        { date: "2024-07-15", total: 600, paid: 600, due: 0 },
        { date: "2024-08-01", total: 836, paid: 836, due: 0 },
      ],
    },
    tournamentOverview: {
      total: 1500,
      paid: 1500,
      due: 0,
      matches: 5,
      remainingPool: 300,
      settlement: "Adjusted in Match Fees",
    },
    stats: {
      runs: 420,
      wickets: 0,
      matches: 6,
    },
  },
  {
    id: "uid_004",
    sno: 4,
    legalName: "Manish Patel",
    jerseyName: "Manish",
    jerseyNumber: 11,
    dob: "1995-07-18",
    age: 29,
    bloodGroup: "O-",
    phone: "8765432109",
    email: "manish.patel@email.com",
    aadharPan: "",
    locality: "Moradabad",
    education: "Graduate",
    profession: "Manager",
    kitSize: "L/34",
    jerseyType: "Full sleeves",
    playerType: "Bowler",
    dues: {
      total: 1600,
      paid: 1000,
      due: 600,
      history: [
        { date: "2024-06-30", total: 564, paid: 400, due: 164 },
        { date: "2024-07-15", total: 600, paid: 350, due: 250 },
        { date: "2024-08-01", total: 436, paid: 250, due: 186 },
      ],
    },
    tournamentOverview: {
      total: 1000,
      paid: 600,
      due: 400,
      matches: 3,
      remainingPool: 200,
      settlement: "Pending",
    },
    stats: {
      runs: 80,
      wickets: 12,
      matches: 4,
    },
  },
  {
    id: "uid_005",
    sno: 5,
    legalName: "Vikas Kumar",
    jerseyName: "Vikas",
    jerseyNumber: 3,
    dob: "1992-11-25",
    age: 32,
    bloodGroup: "AB+",
    phone: "7654321098",
    email: "vikas.kumar@email.com",
    aadharPan: "",
    locality: "Delhi",
    education: "Graduate",
    profession: "Entrepreneur",
    kitSize: "XL/36",
    jerseyType: "Full sleeves",
    playerType: "All-Rounder",
    dues: {
      total: 2200,
      paid: 2200,
      due: 0,
      history: [
        { date: "2024-06-30", total: 564, paid: 564, due: 0 },
        { date: "2024-07-15", total: 700, paid: 700, due: 0 },
        { date: "2024-08-01", total: 936, paid: 936, due: 0 },
      ],
    },
    tournamentOverview: {
      total: 1600,
      paid: 1600,
      due: 0,
      matches: 6,
      remainingPool: 400,
      settlement: "Adjusted in Match Fees",
    },
    stats: {
      runs: 350,
      wickets: 10,
      matches: 7,
    },
  },
  {
    id: "uid_006",
    sno: 6,
    legalName: "Rohan Singh",
    jerseyName: "Rohan",
    jerseyNumber: 9,
    dob: "1997-03-14",
    age: 27,
    bloodGroup: "B-",
    phone: "6543210987",
    email: "rohan.singh@email.com",
    aadharPan: "",
    locality: "Gurgaon",
    education: "Bachelor",
    profession: "Developer",
    kitSize: "M/32",
    jerseyType: "Half sleeves",
    playerType: "Wicket Keeper",
    dues: {
      total: 1400,
      paid: 700,
      due: 700,
      history: [
        { date: "2024-06-30", total: 564, paid: 300, due: 264 },
        { date: "2024-07-15", total: 400, paid: 200, due: 200 },
        { date: "2024-08-01", total: 436, paid: 200, due: 236 },
      ],
    },
    tournamentOverview: {
      total: 900,
      paid: 400,
      due: 500,
      matches: 2,
      remainingPool: 100,
      settlement: "Pending",
    },
    stats: {
      runs: 150,
      wickets: 0,
      matches: 3,
    },
  },
  {
    id: "uid_007",
    sno: 7,
    legalName: "Vipin Verma",
    jerseyName: "Vipin",
    jerseyNumber: 15,
    dob: "1998-01-08",
    age: 26,
    bloodGroup: "A-",
    phone: "5432109876",
    email: "vipin.verma@email.com",
    aadharPan: "",
    locality: "Faridabad",
    education: "Bachelor",
    profession: "Sales Executive",
    kitSize: "S/30",
    jerseyType: "Half sleeves",
    playerType: "Batsman",
    dues: {
      total: 1200,
      paid: 800,
      due: 400,
      history: [
        { date: "2024-06-30", total: 564, paid: 400, due: 164 },
        { date: "2024-07-15", total: 400, paid: 300, due: 100 },
        { date: "2024-08-01", total: 236, paid: 100, due: 136 },
      ],
    },
    tournamentOverview: {
      total: 800,
      paid: 500,
      due: 300,
      matches: 2,
      remainingPool: 80,
      settlement: "Pending",
    },
    stats: {
      runs: 180,
      wickets: 2,
      matches: 3,
    },
  },
  {
    id: "uid_008",
    sno: 8,
    legalName: "Lucky Sharma",
    jerseyName: "Lucky",
    jerseyNumber: 21,
    dob: "1999-09-12",
    age: 25,
    bloodGroup: "O+",
    phone: "4321098765",
    email: "lucky.sharma@email.com",
    aadharPan: "",
    locality: "Khora",
    education: "Bachelor",
    profession: "Student",
    kitSize: "M/32",
    jerseyType: "Half sleeves",
    playerType: "Bowler",
    dues: {
      total: 1000,
      paid: 500,
      due: 500,
      history: [
        { date: "2024-06-30", total: 564, paid: 300, due: 264 },
        { date: "2024-07-15", total: 200, paid: 100, due: 100 },
        { date: "2024-08-01", total: 236, paid: 100, due: 136 },
      ],
    },
    tournamentOverview: {
      total: 600,
      paid: 300,
      due: 300,
      matches: 1,
      remainingPool: 50,
      settlement: "Pending",
    },
    stats: {
      runs: 45,
      wickets: 6,
      matches: 2,
    },
  },
  {
    id: "uid_009",
    sno: 9,
    legalName: "Lalit Kumar",
    jerseyName: "Lalit",
    jerseyNumber: 19,
    dob: "1994-04-22",
    age: 30,
    bloodGroup: "B+",
    phone: "3210987654",
    email: "lalit.kumar@email.com",
    aadharPan: "",
    locality: "Mayur Vihar",
    education: "Graduate",
    profession: "HR Manager",
    kitSize: "L/34",
    jerseyType: "Full sleeves",
    playerType: "All-Rounder",
    dues: {
      total: 1900,
      paid: 1200,
      due: 700,
      history: [
        { date: "2024-06-30", total: 564, paid: 400, due: 164 },
        { date: "2024-07-15", total: 600, paid: 400, due: 200 },
        { date: "2024-08-01", total: 736, paid: 400, due: 336 },
      ],
    },
    tournamentOverview: {
      total: 1200,
      paid: 800,
      due: 400,
      matches: 4,
      remainingPool: 150,
      settlement: "Pending",
    },
    stats: {
      runs: 280,
      wickets: 7,
      matches: 5,
    },
  },
  {
    id: "uid_010",
    sno: 10,
    legalName: "Arjun Mehta",
    jerseyName: "Arjun",
    jerseyNumber: 6,
    dob: "1996-06-30",
    age: 28,
    bloodGroup: "AB-",
    phone: "2109876543",
    email: "arjun.mehta@email.com",
    aadharPan: "",
    locality: "Noida",
    education: "Graduate",
    profession: "Accountant",
    kitSize: "M/32",
    jerseyType: "Full sleeves",
    playerType: "Batsman",
    dues: {
      total: 1700,
      paid: 1000,
      due: 700,
      history: [
        { date: "2024-06-30", total: 564, paid: 350, due: 214 },
        { date: "2024-07-15", total: 600, paid: 350, due: 250 },
        { date: "2024-08-01", total: 536, paid: 300, due: 236 },
      ],
    },
    tournamentOverview: {
      total: 1100,
      paid: 600,
      due: 500,
      matches: 3,
      remainingPool: 200,
      settlement: "Pending",
    },
    stats: {
      runs: 310,
      wickets: 0,
      matches: 4,
    },
  },
];

export const MATCHES: Match[] = [
  {
    id: "match_2025_06_30",
    date: "2025-06-30",
    opponent: "Rivals CC",
    venue: "Mayur Vihar Ground",
    streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    scorecardUrl: "/scorecards/match_2025_06_30.pdf",
    result: "Dark Hunters won by 12 runs",
    status: "completed",
    topPerformers: [
      { playerId: "uid_003", playerName: "Rachit Sharma", runs: 56, mom: true },
      { playerId: "uid_001", playerName: "Nikhil Kumar", runs: 42, mom: false },
      { playerId: "uid_004", playerName: "Manish Patel", wickets: 3, mom: false },
    ],
  },
  {
    id: "match_2025_07_15",
    date: "2025-07-15",
    opponent: "Delhi Warriors",
    venue: "Noida Stadium",
    streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    status: "upcoming",
    topPerformers: [],
  },
  {
    id: "match_2025_08_01",
    date: "2025-08-01",
    opponent: "Elite XI",
    venue: "Gurgaon Sports Complex",
    streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    status: "upcoming",
    topPerformers: [],
  },
  {
    id: "match_2025_07_02",
    date: "2025-07-02",
    opponent: "Phoenix Cricket Club",
    venue: "Mayur Vihar Ground",
    streamUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    scorecardUrl: "/scorecards/match_2025_07_02.pdf",
    result: "Dark Hunters won by 8 wickets",
    status: "completed",
    topPerformers: [
      { playerId: "uid_005", playerName: "Vikas Kumar", runs: 78, wickets: 2, mom: true },
      { playerId: "uid_002", playerName: "Sanchit Saxena", wickets: 4, mom: false },
    ],
  },
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: "tour_2024_monsoon",
    name: "Monsoon Premier League 2024",
    season: "2024",
    totalCollected: 18000,
    totalOutstanding: 4200,
    settledCount: 8,
    pendingCount: 2,
  },
  {
    id: "tour_2024_winter",
    name: "Winter Championship 2024",
    season: "2024",
    totalCollected: 22000,
    totalOutstanding: 1800,
    settledCount: 9,
    pendingCount: 1,
  },
];

export const MERCHANDISE: MerchandiseProduct[] = [
  {
    id: "merch_001",
    name: "Dark Hunters Jersey - Full Sleeves",
    type: "jersey",
    price: 999,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 50,
  },
  {
    id: "merch_002",
    name: "Dark Hunters Jersey - Half Sleeves",
    type: "jersey",
    price: 799,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 75,
  },
  {
    id: "merch_003",
    name: "Dark Hunters Cap",
    type: "cap",
    price: 399,
    sizes: ["One Size"],
    stock: 100,
  },
  {
    id: "merch_004",
    name: "Dark Hunters Hoodie",
    type: "hoodie",
    price: 1499,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 30,
  },
  {
    id: "merch_005",
    name: "Dark Hunters Scarf",
    type: "scarf",
    price: 499,
    sizes: ["One Size"],
    stock: 60,
  },
];
