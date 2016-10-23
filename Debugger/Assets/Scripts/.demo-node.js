var Elm = require("./.elmAST.js");
var elm = Elm.Main.worker();

/* When an Elm snippet has been parsed, output JSON repr to the <pre> */
elm.ports.replyJsonAst.subscribe(console.log);
elm.ports.parseElmCode.send("f : Int -> Int");
