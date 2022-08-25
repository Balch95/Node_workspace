function charGenerate(stringlenght) {
    var string = "";
    var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < stringlenght; i++){
      string += character.charAt(Math.floor(Math.random() * character.length));
    }
    
    return string;
  }

module.exports = charGenerate;
