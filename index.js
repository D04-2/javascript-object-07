"use strict";

// Aufgabenstellung

//Gestern hast du ein Objekt mit einem Bankkonto geschrieben.
//Nun soll der Kunde einzahlen und auszahlen können.
//Schreibe dazu Objekt-Methoden
//Auszahlen soll natürlich nur funktionieren, wenn das Dispo nicht überzogen wird.

const konto = {
  nameOfBank: "Sparkasse Berlin Ost",
  accountOwner: "Chuck",
  iban: "DE01 2345 6789 0000 1111 2222",
  blz: "ABCDEFGH123",
  sold: 1000,
  dispo: 450,
};

console.log(konto);
console.log();

konto.nameOfBank = "Sparkasse Berlin West";
konto.sold += 100;
konto.dispo += 50;

console.log(konto);
console.log();

const einzahlen = (kontostand, betrag) => {
  return (kontostand += betrag);
};

konto.einzahlen = function () {};

const auszahlen = (kontostand, betrag, dispo) => {
  if (kontostand - betrag < -dispo) {
    return `Auszahlung wird abgelehn!! Du hast dein Dispo überzogen`;
  } else {
    return (kontostand -= betrag);
  }
};

console.log(konto.sold);

// konto.sold = auszahlen(konto.sold, 500, konto.dispo);
// konto.sold = auszahlen(konto.sold, 500, konto.dispo);
// konto.sold = auszahlen(konto.sold, 500, konto.dispo);
// konto.sold = auszahlen(konto.sold, 500, konto.dispo);
console.log(konto.sold);

// konto.sold = einzahlen(konto.sold, 400);
konto.sold = auszahlen(konto.sold, 1500, konto.dispo);
konto.sold = auszahlen(konto.sold, 100, konto.dispo);
konto.sold = auszahlen(konto.sold, 1, konto.dispo);
console.log(konto.sold);
