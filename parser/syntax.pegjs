parse
    = w:(varExp _?)*{
        console.log(rootNode);
        return w;
    }
    / operation
    
operation
    = 'fold'
    / map
    / filter

fold = 'fold'//TODO

filter = 'filter' space? '(' space? '(' lambda ')' space var space signal space? ')' _

map = 'map' space? '(' space? '(' lambda ')' signal 

lambda
  = name space? '(' (words space)* ')' space body

body = space// TODO

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
        console.log(w);
        var expression = "".concat(w).replace(/,/g,' ');
        // if (w[1]) {
        //   //Boolean arithmetic

        // } 

        // else {}
        var boolNode = {
          name: "Bool",
          value: eval(expression),// TODO: subtree of boolean operations
          children: []
        }

        return boolNode;
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