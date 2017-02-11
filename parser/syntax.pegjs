parse
    = w:(varExp _?)*{
        return w;
    }
    
varExp = 'var' space w:word space? equal space? r:rightSide _ {
    var leftNode = {
      name: w.join(""),
      children: []
    }
    var equalNode = {
      name: "=",
      value: "=",
      children: [leftNode, r]
    }
    return equalNode;
}


rightSide 
    =   signal
      / value
      / booleanExpr
      / string
      / char
      
signal = 'Signal(' space? v:value space? ')' {
  var node = {
    name: "Signal",
    value: v,
    children: []
  }
  return node
  //Create Node but need the leftVal to store the node name.
}

value = [0-9]+ { return parseInt(text(), 10);}


boolean 
    = 'true'
    / 'false'
        
booleanExpr
    = w:(boolean (space c:booleanCombiner space b:boolean {return [c,b]})*) {
        var expression = "".concat(w).replace(/,/g,' ');
        var boolNode = {
          name: "Bool",
          value: eval(expression),
          children: []
        }
      } 
    
booleanCombiner
    = '&&'
    / '||'

string
    = ['"] (charContent)+ ['"]

char
    = ['"] charContent? ['"]

charContent = [a-zA-Z0-9]

word = letter+

space = [ ]

letter = [a-zA-Z0-9]
_ 'whitespace'
  = [ \t\n\r]*
equal = '='