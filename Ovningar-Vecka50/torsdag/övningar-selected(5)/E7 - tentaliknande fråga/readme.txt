

Koda en funktion twoDice() som "kastar" två tärningar tills den får två sexor.
Funktionen returnerar en array med alla kast. Alltså en array av objekt med strukturen:
{
  die1: 2, // ett random värde av: 1, 2, 3, 4, 5 eller 6
  die2: 6, // ett random värde av: 1, 2, 3, 4, 5 eller 6
}
där die1 och die2 var värden som tärningarna fick.
Så sista elementet i arrayen måste alltid vara 
{
  die1: 6,
  die2: 6,
}


Variant:
Samma som ovan men funktionen ska kasta tärningarna tills den får två likadana värden.


Variant:
Samma som ovan men det handlar om tärningar med 100 sidor (så siffror mellan 1 och 100) och funktionen ska kasta tärningar tills det att den får två värden som ligger efter varandra. (som E2)
