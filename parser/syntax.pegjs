parse
    = w:(statement _?)*{
        return w;
    }

statement
    = varExp
    / operation
    / import

import = "activate" space signal:word {
  var signalNode = {
    name: "signal",
    value: "".concat(signal).replace(/,/g,''),
    children: []
  }
  return {
    name: "signalActivation",
    value: "signalActivation",
    children: [signalNode]
  }

}
    
operation
    = fold
    / map
    / filter

//fold(signal operator initValue)
fold = 'fold' space? '(' space? signal:word space op:operator space initVal:int space?')'{
  var leftNode={
    name: "signal",
    value: "".concat(signal).replace(/,/g,''),
    children: []
  }

  var middleNode = {
    name: "operand",
    value: op,
    children: []
  }

  var rightNode = {
    name: "initValue",
    value: initVal[0],
    children: []
  }
  return {
    name: "fold",
    value: "fold",
    children: [leftNode,middleNode,rightNode]
  }
}//TODO

filter = 'filter' space? '(' space? lam:lambda space signal:word space initVal:word space? ')' _{

  var middleNode = {
    name: "initValue",
    value: initVal[0],
    children: []
  }

  var rightNode = {
    name: "signal",
    value: "".concat(signal).replace(/,/g,''),
    children: []
  }

  lam.children[0].value = lam.children[0].value[0][0][0]; //Can only have one arg

  return {
    name: "filter",
    value: "filter",
    children: [lam,middleNode,rightNode]
  }
}

//map(signal operator initValue)
map = 'map' space? '(' space? lam:lambda space? signal:word space? ')' _ {


  var rightNode = {
    name: "signal",
    value: "".concat(signal).replace(/,/g,''),
    children: []
  }
  lam.children[0].value = lam.children[0].value[0][0][0];
  return {
    name: "map",
    value: "map",
    children: [lam,rightNode]
  }

} 

lambda
  = '(' space? w:(word space?)* space?')' space? "=>" space?'(' space? a:word space? o:operator space? b:word space?')'  {
    var leftNode = {
      name: "param",
      value: w,
      children: []
    }

    return {
      name: "lambda",
      value: "lambda",
      children: [leftNode,a+o+b]
    };
  }




operand
    = int
    / word


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

operator
    = calculusOperator
    / comparisonOperator

calculusOperator
    = '+'
    / '-'
    / '/'
    / '*'

comparisonOperator
    = '>'
    / '<'
    / '=='
    / '>='
    / '<='
    / '!='

int= [0-9]+

charContent = [a-zA-Z0-9]

word = letter+

space = [ ]

letter = [a-zA-Z0-9]
_ 'whitespace'
  = [ \t\n\r]*
equal = '='