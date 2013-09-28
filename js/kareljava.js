/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var kareljava = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"CLASS":4,"PROG":5,"BEGIN":6,"def_list":7,"(":8,")":9,"block":10,"END":11,"EOF":12,"expr_list":13,"def":14,"DEF":15,"line":16,"var":17,"expr":18,"FORWARD":19,";":20,"LEFT":21,"PICKBUZZER":22,"LEAVEBUZZER":23,"HALT":24,"call":25,"cond":26,"loop":27,"repeat":28,"integer":29,"IF":30,"term":31,"ELSE":32,"WHILE":33,"REPEAT":34,"OR":35,"and_term":36,"AND":37,"not_term":38,"NOT":39,"clause":40,"IFZ":41,"bool_fun":42,"IFNFWALL":43,"IFFWALL":44,"IFNLWALL":45,"IFLWALL":46,"IFNRWALL":47,"IFRWALL":48,"IFWBUZZER":49,"IFNWBUZZER":50,"IFBBUZZER":51,"IFNBBUZZER":52,"IFW":53,"IFN":54,"IFE":55,"IFS":56,"IFNW":57,"IFNN":58,"IFNE":59,"IFNS":60,"NUM":61,"INC":62,"DEC":63,"VAR":64,"$accept":0,"$end":1},
terminals_: {2:"error",4:"CLASS",5:"PROG",6:"BEGIN",8:"(",9:")",11:"END",12:"EOF",15:"DEF",19:"FORWARD",20:";",21:"LEFT",22:"PICKBUZZER",23:"LEAVEBUZZER",24:"HALT",30:"IF",32:"ELSE",33:"WHILE",34:"REPEAT",35:"OR",37:"AND",39:"NOT",41:"IFZ",43:"IFNFWALL",44:"IFFWALL",45:"IFNLWALL",46:"IFLWALL",47:"IFNRWALL",48:"IFRWALL",49:"IFWBUZZER",50:"IFNWBUZZER",51:"IFBBUZZER",52:"IFNBBUZZER",53:"IFW",54:"IFN",55:"IFE",56:"IFS",57:"IFNW",58:"IFNN",59:"IFNE",60:"IFNS",61:"NUM",62:"INC",63:"DEC",64:"VAR"},
productions_: [0,[3,10],[3,9],[10,3],[7,2],[7,1],[14,6],[14,7],[13,2],[13,1],[18,4],[18,4],[18,4],[18,4],[18,4],[18,2],[18,1],[18,1],[18,1],[18,1],[18,1],[25,3],[25,4],[26,6],[26,8],[27,6],[28,6],[31,3],[31,1],[36,3],[36,1],[38,2],[38,1],[40,4],[40,1],[40,3],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[29,1],[29,1],[29,4],[29,4],[17,1],[16,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    	var program = $$[$0-2].concat([['LINE', yylineno], ['HALT']]);
    	var functions = {};
    	
    	for (var i = 0; i < $$[$0-6].length; i++) {
    		if (functions[$$[$0-6][i][0]]) {
    			throw "Function redefinition: " + $$[$0-6][i][0];
    		}
    		
    		functions[$$[$0-6][i][0]] = program.length;
    		program = program.concat($$[$0-6][i][1]);
    	}
    	
    	for (var i = 0; i < program.length; i++) {
    		if (program[i][0] == 'CALL') {
    			if (!functions[program[i][1]]) {
    				throw "Unknown function: " + program[i][1];
    			}
    			
    			program[i].push(program[i][1]);
    			program[i][1] = functions[program[i][2]];
    		} else if (program[i][0] == 'PARAM' && program[i][1] != 0) {
			throw "Unknown variable: " + program[i][1];
    		}
    	}
    	
    	return program;
    
break;
case 2: return $$[$0-2].concat([['HALT']]); 
break;
case 3: this.$ = $$[$0-1]; 
break;
case 4: this.$ = $$[$0-1].concat($$[$0]); 
break;
case 5: this.$ = $$[$0]; 
break;
case 6: this.$ = [[$$[$0-3], $$[$0-4].concat($$[$0]).concat([['RET']])]]; 
break;
case 7:
    	var result = $$[$0-5].concat($$[$0]).concat([['RET']]);
    	for (var i = 0; i < result.length; i++) {
    		if (result[i][0] == 'PARAM') {
    			if (result[i][1] == $$[$0-2]) {
    				result[i][1] = 0;
    			} else {
				throw "Unknown variable: " + $$[$0-2];
    			}
    		}
    	}
    	this.$ = [[$$[$0-4], result]];
    
break;
case 8: this.$ = $$[$0-1].concat($$[$0]); 
break;
case 9: this.$ = $$[$0]; 
break;
case 10: this.$ = [['LINE', yylineno], ['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT'], ['EZ', 'WALL'], ['FORWARD']]; 
break;
case 11: this.$ = [['LINE', yylineno], ['LEFT']]; 
break;
case 12: this.$ = [['LINE', yylineno], ['WORLDBUZZERS'], ['EZ', 'WORLDUNDERFLOW'], ['PICKBUZZER']]; 
break;
case 13: this.$ = [['LINE', yylineno], ['BAGBUZZERS'], ['EZ', 'BAGUNDERFLOW'], ['LEAVEBUZZER']]; 
break;
case 14: this.$ = [['LINE', yylineno], ['HALT']]; 
break;
case 15: this.$ = $$[$0-1]; 
break;
case 16: this.$ = $$[$0]; 
break;
case 17: this.$ = $$[$0]; 
break;
case 18: this.$ = $$[$0]; 
break;
case 19: this.$ = $$[$0]; 
break;
case 20: this.$ = []; 
break;
case 21: this.$ = [['LINE', yylineno], ['LOAD', 0], ['CALL', $$[$0-2]], ['LINE', yylineno]]; 
break;
case 22: this.$ = [['LINE', yylineno]].concat($$[$0-1]).concat([['CALL', $$[$0-3]], ['LINE', yylineno]]); 
break;
case 23: this.$ = $$[$0-2].concat($$[$0-4]).concat([['JZ', $$[$0].length]]).concat($$[$0]); 
break;
case 24: this.$ = $$[$0-4].concat($$[$0-6]).concat([['JZ', 1 + $$[$0-2].length]]).concat($$[$0-2]).concat([['JMP', $$[$0].length]]).concat($$[$0]); 
break;
case 25: this.$ = $$[$0-2].concat($$[$0-4]).concat([['JZ', 1 + $$[$0].length]]).concat($$[$0]).concat([['JMP', -1 -($$[$0-2].length + 1 + $$[$0].length + 1)]]); 
break;
case 26: this.$ = $$[$0-2].concat($$[$0-4]).concat([['DUP'], ['JLEZ', $$[$0].length + 2]]).concat($$[$0]).concat([['DEC'], ['JMP', -1 -($$[$0].length + 4)], ['POP']]); 
break;
case 27: this.$ = $$[$0-2].concat($$[$0]).concat([['OR']]); 
break;
case 28: this.$ = $$[$0]; 
break;
case 29: this.$ = $$[$0-2].concat($$[$0]).concat([['AND']]); 
break;
case 30: this.$ = $$[$0]; 
break;
case 31: this.$ = $$[$0].concat([['NOT']]); 
break;
case 32: this.$ = $$[$0]; 
break;
case 33: this.$ = $$[$0-1].concat([['NOT']]); 
break;
case 34: this.$ = $$[$0]; 
break;
case 35: this.$ = $$[$0-1]; 
break;
case 36: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 37: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['MASK'], ['AND']]; 
break;
case 38: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 39: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTL'], ['MASK'], ['AND']]; 
break;
case 40: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND'], ['NOT']]; 
break;
case 41: this.$ = [['WORLDWALLS'], ['ORIENTATION'], ['ROTR'], ['MASK'], ['AND']]; 
break;
case 42: this.$ = [['WORLDBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 43: this.$ = [['WORLDBUZZERS'], ['NOT']]; 
break;
case 44: this.$ = [['BAGBUZZERS'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 45: this.$ = [['BAGBUFFERS'], ['NOT']]; 
break;
case 46: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ']]; 
break;
case 47: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ']]; 
break;
case 48: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ']]; 
break;
case 49: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ']]; 
break;
case 50: this.$ = [['ORIENTATION'], ['LOAD', 0], ['EQ'], ['NOT']]; 
break;
case 51: this.$ = [['ORIENTATION'], ['LOAD', 1], ['EQ'], ['NOT']]; 
break;
case 52: this.$ = [['ORIENTATION'], ['LOAD', 2], ['EQ'], ['NOT']]; 
break;
case 53: this.$ = [['ORIENTATION'], ['LOAD', 3], ['EQ'], ['NOT']]; 
break;
case 54: this.$ = [['PARAM', $$[$0]]]; 
break;
case 55: this.$ = [['LOAD', parseInt(yytext)]]; 
break;
case 56: this.$ = $$[$0-1].concat([['INC']]); 
break;
case 57: this.$ = $$[$0-1].concat([['DEC']]); 
break;
case 58: this.$ = yytext; 
break;
case 59: this.$ = [['LINE', yylineno]]; 
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:[1,4]},{5:[1,6],7:5,14:7,15:[1,8]},{5:[1,9],14:10,15:[1,8]},{8:[1,11]},{5:[2,5],15:[2,5]},{16:12,64:[2,59]},{8:[1,13]},{5:[2,4],15:[2,4]},{9:[1,14]},{17:15,64:[1,16]},{9:[1,17]},{6:[1,19],10:18},{8:[1,20]},{8:[2,58],9:[2,58]},{6:[1,19],10:21},{11:[1,22]},{6:[1,19],10:34,13:23,17:36,18:24,19:[1,25],20:[1,35],21:[1,26],22:[1,27],23:[1,28],24:[1,29],25:30,26:31,27:32,28:33,30:[1,37],33:[1,38],34:[1,39],64:[1,16]},{9:[1,40],17:41,64:[1,16]},{11:[1,42]},{12:[1,43]},{6:[1,19],10:34,11:[1,44],17:36,18:45,19:[1,25],20:[1,35],21:[1,26],22:[1,27],23:[1,28],24:[1,29],25:30,26:31,27:32,28:33,30:[1,37],33:[1,38],34:[1,39],64:[1,16]},{6:[2,9],11:[2,9],19:[2,9],20:[2,9],21:[2,9],22:[2,9],23:[2,9],24:[2,9],30:[2,9],33:[2,9],34:[2,9],64:[2,9]},{8:[1,46]},{8:[1,47]},{8:[1,48]},{8:[1,49]},{8:[1,50]},{20:[1,51]},{6:[2,16],11:[2,16],19:[2,16],20:[2,16],21:[2,16],22:[2,16],23:[2,16],24:[2,16],30:[2,16],32:[2,16],33:[2,16],34:[2,16],64:[2,16]},{6:[2,17],11:[2,17],19:[2,17],20:[2,17],21:[2,17],22:[2,17],23:[2,17],24:[2,17],30:[2,17],32:[2,17],33:[2,17],34:[2,17],64:[2,17]},{6:[2,18],11:[2,18],19:[2,18],20:[2,18],21:[2,18],22:[2,18],23:[2,18],24:[2,18],30:[2,18],32:[2,18],33:[2,18],34:[2,18],64:[2,18]},{6:[2,19],11:[2,19],19:[2,19],20:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19],30:[2,19],32:[2,19],33:[2,19],34:[2,19],64:[2,19]},{6:[2,20],11:[2,20],19:[2,20],20:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],30:[2,20],32:[2,20],33:[2,20],34:[2,20],64:[2,20]},{8:[1,52]},{8:[2,59],16:53},{8:[2,59],16:54},{8:[2,59],16:55},{6:[1,19],10:56},{9:[1,57]},{12:[1,58]},{1:[2,2]},{5:[2,3],6:[2,3],11:[2,3],15:[2,3],19:[2,3],20:[2,3],21:[2,3],22:[2,3],23:[2,3],24:[2,3],30:[2,3],32:[2,3],33:[2,3],34:[2,3],64:[2,3]},{6:[2,8],11:[2,8],19:[2,8],20:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],30:[2,8],33:[2,8],34:[2,8],64:[2,8]},{9:[1,59]},{9:[1,60]},{9:[1,61]},{9:[1,62]},{9:[1,63]},{6:[2,15],11:[2,15],19:[2,15],20:[2,15],21:[2,15],22:[2,15],23:[2,15],24:[2,15],30:[2,15],32:[2,15],33:[2,15],34:[2,15],64:[2,15]},{9:[1,64],17:66,29:65,61:[1,67],62:[1,68],63:[1,69],64:[1,16]},{8:[1,70]},{8:[1,71]},{8:[1,72]},{5:[2,6],15:[2,6]},{6:[1,19],10:73},{1:[2,1]},{20:[1,74]},{20:[1,75]},{20:[1,76]},{20:[1,77]},{20:[1,78]},{20:[2,21]},{9:[1,79]},{9:[2,54]},{9:[2,55]},{8:[1,80]},{8:[1,81]},{8:[1,89],31:82,36:83,38:84,39:[1,85],40:86,41:[1,87],42:88,43:[1,90],44:[1,91],45:[1,92],46:[1,93],47:[1,94],48:[1,95],49:[1,96],50:[1,97],51:[1,98],52:[1,99],53:[1,100],54:[1,101],55:[1,102],56:[1,103],57:[1,104],58:[1,105],59:[1,106],60:[1,107]},{8:[1,89],31:108,36:83,38:84,39:[1,85],40:86,41:[1,87],42:88,43:[1,90],44:[1,91],45:[1,92],46:[1,93],47:[1,94],48:[1,95],49:[1,96],50:[1,97],51:[1,98],52:[1,99],53:[1,100],54:[1,101],55:[1,102],56:[1,103],57:[1,104],58:[1,105],59:[1,106],60:[1,107]},{17:66,29:109,61:[1,67],62:[1,68],63:[1,69],64:[1,16]},{5:[2,7],15:[2,7]},{6:[2,10],11:[2,10],19:[2,10],20:[2,10],21:[2,10],22:[2,10],23:[2,10],24:[2,10],30:[2,10],32:[2,10],33:[2,10],34:[2,10],64:[2,10]},{6:[2,11],11:[2,11],19:[2,11],20:[2,11],21:[2,11],22:[2,11],23:[2,11],24:[2,11],30:[2,11],32:[2,11],33:[2,11],34:[2,11],64:[2,11]},{6:[2,12],11:[2,12],19:[2,12],20:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],30:[2,12],32:[2,12],33:[2,12],34:[2,12],64:[2,12]},{6:[2,13],11:[2,13],19:[2,13],20:[2,13],21:[2,13],22:[2,13],23:[2,13],24:[2,13],30:[2,13],32:[2,13],33:[2,13],34:[2,13],64:[2,13]},{6:[2,14],11:[2,14],19:[2,14],20:[2,14],21:[2,14],22:[2,14],23:[2,14],24:[2,14],30:[2,14],32:[2,14],33:[2,14],34:[2,14],64:[2,14]},{20:[2,22]},{17:66,29:110,61:[1,67],62:[1,68],63:[1,69],64:[1,16]},{17:66,29:111,61:[1,67],62:[1,68],63:[1,69],64:[1,16]},{9:[1,112],35:[1,113]},{9:[2,28],35:[2,28],37:[1,114]},{9:[2,30],35:[2,30],37:[2,30]},{8:[1,89],40:115,41:[1,87],42:88,43:[1,90],44:[1,91],45:[1,92],46:[1,93],47:[1,94],48:[1,95],49:[1,96],50:[1,97],51:[1,98],52:[1,99],53:[1,100],54:[1,101],55:[1,102],56:[1,103],57:[1,104],58:[1,105],59:[1,106],60:[1,107]},{9:[2,32],35:[2,32],37:[2,32]},{8:[1,116]},{9:[2,34],35:[2,34],37:[2,34]},{8:[1,89],31:117,36:83,38:84,39:[1,85],40:86,41:[1,87],42:88,43:[1,90],44:[1,91],45:[1,92],46:[1,93],47:[1,94],48:[1,95],49:[1,96],50:[1,97],51:[1,98],52:[1,99],53:[1,100],54:[1,101],55:[1,102],56:[1,103],57:[1,104],58:[1,105],59:[1,106],60:[1,107]},{9:[2,36],35:[2,36],37:[2,36]},{9:[2,37],35:[2,37],37:[2,37]},{9:[2,38],35:[2,38],37:[2,38]},{9:[2,39],35:[2,39],37:[2,39]},{9:[2,40],35:[2,40],37:[2,40]},{9:[2,41],35:[2,41],37:[2,41]},{9:[2,42],35:[2,42],37:[2,42]},{9:[2,43],35:[2,43],37:[2,43]},{9:[2,44],35:[2,44],37:[2,44]},{9:[2,45],35:[2,45],37:[2,45]},{9:[2,46],35:[2,46],37:[2,46]},{9:[2,47],35:[2,47],37:[2,47]},{9:[2,48],35:[2,48],37:[2,48]},{9:[2,49],35:[2,49],37:[2,49]},{9:[2,50],35:[2,50],37:[2,50]},{9:[2,51],35:[2,51],37:[2,51]},{9:[2,52],35:[2,52],37:[2,52]},{9:[2,53],35:[2,53],37:[2,53]},{9:[1,118],35:[1,113]},{9:[1,119]},{9:[1,120]},{9:[1,121]},{6:[1,19],10:34,17:36,18:122,19:[1,25],20:[1,35],21:[1,26],22:[1,27],23:[1,28],24:[1,29],25:30,26:31,27:32,28:33,30:[1,37],33:[1,38],34:[1,39],64:[1,16]},{8:[1,89],36:123,38:84,39:[1,85],40:86,41:[1,87],42:88,43:[1,90],44:[1,91],45:[1,92],46:[1,93],47:[1,94],48:[1,95],49:[1,96],50:[1,97],51:[1,98],52:[1,99],53:[1,100],54:[1,101],55:[1,102],56:[1,103],57:[1,104],58:[1,105],59:[1,106],60:[1,107]},{8:[1,89],38:124,39:[1,85],40:86,41:[1,87],42:88,43:[1,90],44:[1,91],45:[1,92],46:[1,93],47:[1,94],48:[1,95],49:[1,96],50:[1,97],51:[1,98],52:[1,99],53:[1,100],54:[1,101],55:[1,102],56:[1,103],57:[1,104],58:[1,105],59:[1,106],60:[1,107]},{9:[2,31],35:[2,31],37:[2,31]},{17:66,29:125,61:[1,67],62:[1,68],63:[1,69],64:[1,16]},{9:[1,126],35:[1,113]},{6:[1,19],10:34,17:36,18:127,19:[1,25],20:[1,35],21:[1,26],22:[1,27],23:[1,28],24:[1,29],25:30,26:31,27:32,28:33,30:[1,37],33:[1,38],34:[1,39],64:[1,16]},{6:[1,19],10:34,17:36,18:128,19:[1,25],20:[1,35],21:[1,26],22:[1,27],23:[1,28],24:[1,29],25:30,26:31,27:32,28:33,30:[1,37],33:[1,38],34:[1,39],64:[1,16]},{9:[2,56]},{9:[2,57]},{6:[2,23],11:[2,23],19:[2,23],20:[2,23],21:[2,23],22:[2,23],23:[2,23],24:[2,23],30:[2,23],32:[1,129],33:[2,23],34:[2,23],64:[2,23]},{9:[2,27],35:[2,27],37:[1,114]},{9:[2,29],35:[2,29],37:[2,29]},{9:[1,130]},{9:[2,35],35:[2,35],37:[2,35]},{6:[2,25],11:[2,25],19:[2,25],20:[2,25],21:[2,25],22:[2,25],23:[2,25],24:[2,25],30:[2,25],32:[2,25],33:[2,25],34:[2,25],64:[2,25]},{6:[2,26],11:[2,26],19:[2,26],20:[2,26],21:[2,26],22:[2,26],23:[2,26],24:[2,26],30:[2,26],32:[2,26],33:[2,26],34:[2,26],64:[2,26]},{6:[1,19],10:34,17:36,18:131,19:[1,25],20:[1,35],21:[1,26],22:[1,27],23:[1,28],24:[1,29],25:30,26:31,27:32,28:33,30:[1,37],33:[1,38],34:[1,39],64:[1,16]},{9:[2,33],35:[2,33],37:[2,33]},{6:[2,24],11:[2,24],19:[2,24],20:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[2,24],30:[2,24],32:[2,24],33:[2,24],34:[2,24],64:[2,24]}],
defaultActions: {43:[2,2],58:[2,1],64:[2,21],66:[2,54],67:[2,55],79:[2,22],120:[2,56],121:[2,57]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore */
break;
case 1:/* ignore */
break;
case 2:/* ignore */
break;
case 3: return 4; 
break;
case 4: return 5; 
break;
case 5: return 15; 
break;
case 6: return 15; 
break;
case 7: return 24; 
break;
case 8: return 21; 
break;
case 9: return 19; 
break;
case 10: return 22; 
break;
case 11: return 23; 
break;
case 12: return 33; 
break;
case 13: return 34; 
break;
case 14: return 63; 
break;
case 15: return 62; 
break;
case 16: return 41; 
break;
case 17: return 43; 
break;
case 18: return 44; 
break;
case 19: return 45; 
break;
case 20: return 46; 
break;
case 21: return 47; 
break;
case 22: return 48; 
break;
case 23: return 49; 
break;
case 24: return 50; 
break;
case 25: return 51; 
break;
case 26: return 52; 
break;
case 27: return 54; 
break;
case 28: return 56; 
break;
case 29: return 55; 
break;
case 30: return 53; 
break;
case 31: return 58; 
break;
case 32: return 60; 
break;
case 33: return 59; 
break;
case 34: return 57; 
break;
case 35: return 32; 
break;
case 36: return 30; 
break;
case 37: return 39; 
break;
case 38: return 39; 
break;
case 39: return 35; 
break;
case 40: return 37; 
break;
case 41: return 37; 
break;
case 42: return 8; 
break;
case 43: return 9; 
break;
case 44: return 6; 
break;
case 45: return 11; 
break;
case 46: return 20; 
break;
case 47: return 61; 
break;
case 48: return 64; 
break;
case 49: return 12; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/[^\n]*)/,/^(?:\/(\*([^*]|\*[^/])*\*)\/)/,/^(?:class\b)/,/^(?:program\b)/,/^(?:define\b)/,/^(?:void\b)/,/^(?:turnoff\b)/,/^(?:turnleft\b)/,/^(?:move\b)/,/^(?:pickbeeper\b)/,/^(?:putbeeper\b)/,/^(?:while\b)/,/^(?:iterate\b)/,/^(?:pred\b)/,/^(?:succ\b)/,/^(?:iszero\b)/,/^(?:frontIsClear\b)/,/^(?:frontIsBlocked\b)/,/^(?:leftIsClear\b)/,/^(?:leftIsBlocked\b)/,/^(?:rightIsClear\b)/,/^(?:rightIsBlocked\b)/,/^(?:nextToABeeper\b)/,/^(?:notNextToABeeper\b)/,/^(?:anyBeepersInBeeperBag\b)/,/^(?:noBeepersInBeeperBag\b)/,/^(?:facingNorth\b)/,/^(?:facingSouth\b)/,/^(?:facingEast\b)/,/^(?:facingWest\b)/,/^(?:notFacingNorth\b)/,/^(?:notFacingSouth\b)/,/^(?:notFacingEast\b)/,/^(?:notFacingWest\b)/,/^(?:else\b)/,/^(?:if\b)/,/^(?:!)/,/^(?:¬)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:&)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:[0-9]+)/,/^(?:[a-zA-Z][a-zA-Z0-9_]*)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = kareljava;
exports.Parser = kareljava.Parser;
exports.parse = function () { return kareljava.parse.apply(kareljava, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}