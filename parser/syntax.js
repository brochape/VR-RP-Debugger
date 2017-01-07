parse
    = (varExp _?)*
    
varExp = 'var' space word space? equal space? rightSide _


rightSide 
    =   signal
      / value
      / booleanExpr
      / string
      / char
      
signal = 'Signal(' space? v:value space? ')' {
    console.log(v);
}

value = [0-9]+ { return parseInt(text(), 10);}


boolean 
    = 'true'
    / 'false'
        
booleanExpr
    = w:(boolean (space c:booleanCombiner space b:boolean {return [c,b]})*) {
        return 0;
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
  = [\t\n\r]*
equal = '='