import { v4 as uuidv4 } from "uuid";

export const sampleData = [
  {
    id: uuidv4(),
    title: "BB - Betriebs-Berater",
    due: "22.02.2022",
    bucket: "Zeitschrift",
    status: "open",
    user: null,
  },
  {
    id: uuidv4(),
    title: "Rechtsprechungsdokument von LG Köln",
    due: "22.02.2022",
    bucket: "Recht",
    status: "open",
    user: "Erik",
  },
  {
    id: uuidv4(),
    title: "Corona Verordnung Saarland",
    due: "22.02.2022",
    bucket: "Verordnung",
    status: "progress",
    user: "Anna",
  },
  {
    id: uuidv4(),
    title: "Praxisreport Baurecht 2.02.22",
    due: "22.02.2022",
    bucket: "Kommentar",
    status: "progress",
    user: "Anna",
  },
  {
    id: uuidv4(),
    title: "BPatG Entscheidung",
    due: "22.02.2022",
    bucket: "Recht",
    status: "progress",
    user: "Kim",
  },
  {
    id: uuidv4(),
    title: "Document",
    due: "22.02.2022",
    bucket: "Kommentar",
    status: "progress",
    user: "Anna",
  },
  {
    id: uuidv4(),
    title: "Document",
    due: "22.02.2022",
    bucket: "Kommentar",
    status: "review",
    user: "Anna",
  },
  {
    id: uuidv4(),
    title: "Document",
    due: "22.02.2022",
    bucket: "Kommentar",
    status: "review",
    user: "Kim",
  },
  {
    id: uuidv4(),
    title: "Document",
    due: "22.02.2022",
    bucket: "Kommentar",
    status: "review",
    user: "Erik",
  },
  {
    id: uuidv4(),
    title: "Document",
    due: "22.02.2022",
    bucket: "Kommentar",
    status: "done",
    user: "Anna",
  },
  {
    id: uuidv4(),
    title: "Document",
    due: "22.02.2022",
    bucket: "Kommentar",
    status: "done",
    user: "Mike",
  },
];

/* save sampleData in localStorage */
export const storedData = localStorage.setItem(
  "data",
  JSON.stringify(sampleData)
);

export const listHeaderData = [
  {
    key: "title",
    header: "Document title",
  },
  {
    key: "bucket",
    header: "Art",
  },
  {
    key: "user",
    header: "Zuweisung",
  },
  {
    key: "due",
    header: "Fällig bis",
  },
  {
    key: "status",
    header: "Status",
  },
];

export const itemStatus = [
  { key: 0, status: "Open" },
  { key: 1, status: "In Progress" },
  { key: 2, status: "Review" },
  { key: 3, status: "Ready" },
];

export const boardGroupByStatus = [
  {
    name: "Open",
    items: sampleData.filter((item) => item.status === "open"),
  },
  {
    name: "Progress",
    items: sampleData.filter((item) => item.status === "progress"),
  },
  {
    name: "Review",
    items: sampleData.filter((item) => item.status === "review"),
  },
  {
    name: "Ready to Publish",
    items: sampleData.filter((item) => item.status === "done"),
  },
];

export const boardGroupByAssignment = [
  {
    name: "Nicht zugewiesen",
    items: sampleData.filter((item) => item.user === null),
  },
  {
    name: "Anna",
    items: sampleData.filter((item) => item.user === "Anna"),
  },
  {
    name: "Kim",
    items: sampleData.filter((item) => item.user === "Kim"),
  },
  {
    name: "Erik",
    items: sampleData.filter((item) => item.user === "Erik"),
  },
  {
    name: "Mike",
    items: sampleData.filter((item) => item.user === "Mike"),
  },
];
