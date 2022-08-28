function nbYear(p0, percent, aug, p, years = 0) {
  do {
    p0 = Math.floor(p0 * (percent / 100 + 1) + aug);
    years++;
  } while (p0 < p);
  return years;
}

console.log(nbYear(2004050.2672907438, 0.25, 1, 2000000));
