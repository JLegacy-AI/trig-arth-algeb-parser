{
  function makeBinary(left, operator, right) {
    return { type: 'BinaryExpression', operator, left, right };
  }

  function makeNumber(value) {
    return { type: 'Number', value };
  }

  function makeVariable(name) {
    return { type: 'Variable', name };
  }

  function makeFunction(name, argument) {
    return { type: 'Function', name, argument };
  }
}

start
  = expression

expression
  = left:term _ operator:("+" / "-" / "^") _ right:expression { return makeBinary(left, operator, right); }
  / term

term
  = left:factor _ operator:("*" / "/") _ right:term { return makeBinary(left, operator, right); }
  / factor

factor
  = "(" _ expr:expression _ ")" { return expr; }
  / functionCall
  / number
  / variable

functionCall
  = name:("sin" / "cos" / "tan") _ "(" _ argument:expression _ ")" { return makeFunction(name, argument); }

number
  = value:[0-9]+ { return makeNumber(value); }

variable
  = name:[a-zA-Z] { return makeVariable(name); }

_ "whitespace"
  = [ \t\n\r]*