"use strict";

const bankKonto = {
  vorName: "Chuck",
  iban: "DE01 2345 6789 0000 1111 2222",
  bankLeiZahl: "ABCDEFGH123",
  bank: "Sparkasse Berlin Ost",
  kontostand: 1100,
  dispo: 550,
  einZahlen: function (betrag) {
    this.kontostand += betrag;
    if (this.kontostand >= 0 && this.dispo < 550) {
      this.dispo = 550;
    }
    console.log(
      `You have ${this.kontostand} € on your account. Your dispo is ${this.dispo} €.`
    );
  },
  ausZahlen: function (betrag) {
    const ZahlungLimit = this.kontostand + this.dispo;
    if (betrag <= this.kontostand) {
      this.kontostand -= betrag;
      console.log(
        `You have ${this.kontostand} € on your account. Your dispo is ${this.dispo} €.`
      );
    } else if (betrag >= this.kontostand && betrag <= ZahlungLimit) {
      this.kontostand -= betrag;
      this.dispo = ZahlungLimit - betrag;
      console.log(
        `You have ${this.kontostand} € on your account. Your dispo is ${this.dispo} €.`
      );
    } else if (betrag > ZahlungLimit) {
      console.log(
        `You can not withdraw more than your Limit. I can give you only ${ZahlungLimit} €.`
      );
    }
  },
};

bankKonto.ausZahlen(1500);

bankKonto.einZahlen(500);

bankKonto.ausZahlen(400);

bankKonto.einZahlen(300);

bankKonto.ausZahlen(600);
