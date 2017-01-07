parse
    = w:(varExp _?)*{
        return w;
    }
    
varExp = 'var' space word space? equal space? w:rightSide _ {
    var a = w;
    return a;
}


rightSide 
    =   signal
      / value
      / booleanExpr
      / string
      / char
      
signal = 'Signal(' space? v:value space? ')' {
}

value = [0-9]+ { return parseInt(text(), 10);}


boolean 
    = 'true'
    / 'false'
        
booleanExpr
    = w:(boolean (space c:booleanCombiner space b:boolean {return [c,b]})*) {
        var expression = "".concat(w).replace(/,/g,' ');
        return eval(expression);
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