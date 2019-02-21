//script3 Pyramide de Mario

let height = prompt ("Welcome dans la pyramide ! Combien d'étages veux-tu ? Donne un nombre entre 1 et 25, stp :");
  alert(height)

console.log(" Tu as demandé " + height + " étages. Voici ta pyramide !");

for (var i = 1; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '#';
    }
    
    console.log(row);
}
