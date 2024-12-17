const string = "Malmö, located in the southern part of Sweden, is a dynamic city known for its multicultural atmosphere and innovative spirit. As the third-largest city in Sweden, Malmö is a bustling hub of activity with a rich history dating back to the 13th century. The city is famous for its modern architectural marvels, such as the Turning Torso, which is the tallest building in Scandinavia and a symbol of Malmö's forward-thinking design. Malmö is also home to a diverse culinary scene, offering everything from traditional Swedish cuisine to international delicacies, reflecting its vibrant immigrant community. The city's extensive parklands, including Kungsparken and Pildammsparken, provide beautiful green spaces for relaxation and recreation. Malmö's location by the Öresund Strait makes it a gateway to Denmark, with the iconic Öresund Bridge connecting it to Copenhagen. This strategic position has fostered a strong economic and cultural exchange between the two cities. The city's commitment to sustainability is evident in its numerous eco-friendly initiatives and green buildings. Whether you're exploring the historic Malmöhus Castle, enjoying the lively atmosphere of Lilla Torg, or attending one of the many festivals and events, Malmö offers a unique blend of old-world charm and contemporary living.";


function nFirstLetter(l, text) {
    text = text.split(" ");

    let count = 0;
    for (let word of text) {
        if (word[0].toLowerCase() === l.toLowerCase()) {
            count++
        }
    }

    return count;
}

console.log(nFirstLetter("s", string));