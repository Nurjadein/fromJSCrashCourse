const companies = [
  {
    name: "Global Chemicals",
    category: "Enterprise",
    start: 1981,
    end: 2003,
  },
  {
    name: "Meta",
    category: "Technology",
    start: 2009,
    end: "present",
  },
  {
    name: "Regent",
    category: "Enterprise",
    start: 1991,
    end: 2000,
  },
  {
    name: "Instagram",
    category: "Technology",
    start: 2011,
    end: "present",
  },
  {
    name: "Twitter",
    category: "Technology",
    start: 2010,
    end: "present",
  },
  {
    name: "ITSMarawi",
    category: "Technology",
    start: 2019,
    end: "present",
  },
  {
    name: "Friendster",
    category: "Technology",
    start: 2002,
    end: 2010,
  },
  {
    name: "The Company",
    category: "Enterprise",
    start: 1994,
    end: 2003,
  },
  {
    name: "Saban",
    category: "Show Business",
    start: 1992,
    end: 2018,
  },
];

const ages = [33, 43, 56, 78, 35, 67, 12, 34, 32, 43, 15, 69, 45];

//forEach
companies.forEach((c) => console.log(c.name));

// filter
const matureEnough = ages.filter((a) => a >= 35);
console.log("🚀 🚀 matureEnough", matureEnough);

const techCompany = companies.filter((c) => c.category == "Technology");
console.log("🚀 🚀 techCompany", techCompany);

const Y2kCompanies = companies.filter((c) => c.start >= 2000);
console.log("🚀 🚀 Y2kCompanies", Y2kCompanies);

const lastedTenYears = companies.filter((c) => c.end - c.start >= 10);
console.log("🚀 🚀 lastedTenYears", lastedTenYears);

//map
const companyNames = companies.map(
  (c) => `${c.name} [${c.start}] - [${c.end}]`
);
console.log("🚀 🚀 companyNames", companyNames);

const agesSquarRoot = ages.map((a) => Math.sqrt(a));
console.log("🚀 🚀 agesSquarRoot", agesSquarRoot);

const ageMap = ages.map((a) => Math.sqrt(a)).map((a) => a * 2);
console.log("🚀 🚀 ageMap", ageMap);

//sort
const soretdCompaniesByStartAscending = companies.sort(
  (a, b) => a.start - b.start
);
console.log(
  "🚀 🚀 soretdCompaniesByStartAscending",
  soretdCompaniesByStartAscending
);

const soretdCompaniesByStartDescending = companies.sort(
  (a, b) => b.start - a.start
);
console.log(
  "🚀 🚀 soretdCompaniesByStartDescending",
  soretdCompaniesByStartDescending
);

//reduce
const agesSum = ages.reduce((total, age) => total + age, 0);
console.log("🚀 🚀 agesSum", agesSum);

//if end Year is no type of string like "present"
const totalYears = companies.reduce(
  (total, c) => (typeof c.end != "string" ? total + (c.end - c.start) : 0),

  0
);
console.log("🚀 🚀 totalYears", totalYears);

//combined methods
const combined = ages
  .map((a) => a * 2)
  .filter((a) => a >= 35)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log("🚀 🚀 combined", combined);
