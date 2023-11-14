# Javascript1_kontrola_DIC

*Napište funkci na kontrolu DIČ.*

Všimněte si, že knihovna `validator.js` v době vzniku tohoto zadání neumí ověřit platnost českého DIČ (daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například

- CZ123456789
- CZ1234567890

Postupujte dle následujících kroků:

1. Vytvořte prázdnou stránku s JavaScriptem a knihovnou `validator.js`.
2. Vytvořte funkci `isDIC` s jedním parametrem `inputStr`, což bude řetězec, který chceme zkontrolovat.
3. Jako první ve funkci zkontrolujte, jestli je vstupní řetězce kratší než 11 znaků. V takovém případě nemá smysl dál nic dělat, protože vstup evidentně není DIČ. Vraťte tady z funkce `false`. Tím naše funkce končí. Všimněte si, že takto používáme vzor *časný návrat*.
4. Dále ve funkci zkontrolujte, jestli je vstupní řetězce delší než 12 znaků. V takovém případě opět vraťte `false`.
5. Dále si ve funkce do proměnné `prefix` uložte první dva znaky vstupního řetězce.
6. Pomocí podmínky zkontrolujte, že proměnná `prefix` obsahuje přesně znaky `CZ`. Pokud ne, ihned vraťte `false`.
7. Do promměné `digits` si uložte část vstupního řetězce od třetího znaku dále.
8. Použijte metodu `validator.isInt`, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. Pokud metoda vrátí `false`, ihned také vraťte `false`.
9. Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit `true`.
10. Vyzoušejte svoji funkci na různých vstupech a ověřte, že funguje. Nezapomeňte ověřit platná i neplatná DIČ.

**Příklady platných DIČ:**
- CZ123456789
- CZ1234567890

**Příklady neplatných DIČ:**
- 123
- ABC
- 1234567890
- 001234567890
- 1234567890CZ
- CZ12345678901
- CZ12345678
- CZA12345678
