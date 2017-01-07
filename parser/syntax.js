parse
    = (varExp _?)*
    
varExp = 'var' space word space? equal space? rightSide _


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

string
    = '"' (charContent)+ '"'

char
    = '"' charContent? '"'

charContent = [a-zA-Z0-9]

word = letter+

space = [ ]

letter = [a-zA-Z0-9]
_ 'whitespace'
  = [\t\n\r]*
equal = '='