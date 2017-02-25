parse
    = w:(statement _?)*{
        return w;
    }

statement
    = varExp
    / operation
    
operation
    = fold
    / map
    / filter

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
    value: initVal,
    children: []
  }
  return {
    name: "fold",
    value: "fold",
    children: [leftNode,middleNode,rightNode]
  }
}//TODO

filter = 'filter' space? '(' space? lam:lambda space initVal:word space signal:word space? ')' _{

  var middleNode = {
    name: "initValue",
    value: parseInt(initVal.join(""), 10),
    children: []
  }

  var rightNode = {
    name: "signal",
    value: "".concat(signal).replace(/,/g,''),
    children: []
  }
  return {
    name: "filter",
    value: "filter",
    children: [lam,middleNode,rightNode]
  }
}

map = 'map' space? '(' space? lam:lambda signal:word space? ')' _ {


  var rightNode = {
    name: "signal",
    value: signal,
    children: []
  }
  return {
    name: "map",
    value: "map",
    children: [lam,rightNode]
  }

} 

lambda
  = '(' space? w:(word space?)* space?')' space? "=>" space?'(' space? b:simpleBody space?')'  {
    var leftNode = {
      name: "param",
      value: w,
      children: []
    }

    return {
      name: "lambda",
      value: "lambda",
      children: [leftNode,b]
    };
  }


simpleBody 
    = left:operand space operator:operator space right:operand {
      var leftNode  = {
        name: "leftOperand",
        value: left,
        children: []
      }

      var rightNode = {
        name: "rightOperand",
        value: right,
        children: []

      }

        return {
          name: "body",
          value: operator,
          children: [leftNode,rightNode]
        }
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