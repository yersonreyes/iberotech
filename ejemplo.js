const data = [
  { name: "lucho", date: "2020-12-22" },
  { name: "lucho", date: "2025-12-02" },
  { name: "lucho", date: "2020-12-23" },
  { name: "lucho", date: "2020-11-21" },
  { name: "lucho", date: "2010-12-22" },
];

function compare(a, b) {
  if (new Date(a.date) < new Date(b.date)) {
    return -1;
  }
  if (new Date(a.date) > new Date(b.date)) {
    return 1;
  }
  return 0;
}

const newData = data.slice().sort(compare);

console.log(newData);
