parse
    = (varExp _?)*
    
varExp = 'var' space name space? equal space? rightSide


rightSide 
    =   signal
      / value
      / booleanExpr
      
signal = 'Signal(' space? value space? ')' {
    
}

value = v:[0-9]+ { return v;}


boolean 
    = 'True'
    / 'False'
        
booleanExpr
    = boolean (space booleanCombiner space boolean)*
    
booleanCombiner
    = 'or'
    / 'and'

name = letter+

space = [ ]

letter = [a-zA-Z0-9]
_ 'whitespace'
  = [\t\n\r]*
equal = '='