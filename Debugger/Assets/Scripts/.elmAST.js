// JavaScript source code
(function () {
    'use strict';

    function F2(fun) {
        function wrapper(a) { return function (b) { return fun(a, b); }; }
        wrapper.arity = 2;
        wrapper.func = fun;
        return wrapper;
    }

    function F3(fun) {
        function wrapper(a) {
            return function (b) { return function (c) { return fun(a, b, c); }; };
        }
        wrapper.arity = 3;
        wrapper.func = fun;
        return wrapper;
    }

    function F4(fun) {
        function wrapper(a) {
            return function (b) {
                return function (c) {
                    return function (d) { return fun(a, b, c, d); };
                };
            };
        }
        wrapper.arity = 4;
        wrapper.func = fun;
        return wrapper;
    }

    function F5(fun) {
        function wrapper(a) {
            return function (b) {
                return function (c) {
                    return function (d) { return function (e) { return fun(a, b, c, d, e); }; };
                };
            };
        }
        wrapper.arity = 5;
        wrapper.func = fun;
        return wrapper;
    };

    function F6(fun) {
        function wrapper(a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        }
        wrapper.arity = 6;
        wrapper.func = fun;
        return wrapper;
    }

    function F7(fun) {
        function wrapper(a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) { return fun(a, b, c, d, e, f, g); };
                            };
                        };
                    };
                };
            };
        }
        wrapper.arity = 7;
        wrapper.func = fun;
        return wrapper;
    }

    function F8(fun) {
        function wrapper(a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        }
        wrapper.arity = 8;
        wrapper.func = fun;
        return wrapper;
    }

    function F9(fun) {
        function wrapper(a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        }
        wrapper.arity = 9;
        wrapper.func = fun;
        return wrapper;
    }

    function A2(fun, a, b) {
        return fun.arity === 2
          ? fun.func(a, b)
          : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.arity === 3
          ? fun.func(a, b, c)
          : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.arity === 4
          ? fun.func(a, b, c, d)
          : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.arity === 5
          ? fun.func(a, b, c, d, e)
          : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.arity === 6
          ? fun.func(a, b, c, d, e, f)
          : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.arity === 7
          ? fun.func(a, b, c, d, e, f, g)
          : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.arity === 8
          ? fun.func(a, b, c, d, e, f, g, h)
          : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.arity === 9
          ? fun.func(a, b, c, d, e, f, g, h, i)
          : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }

    //import Native.Utils //

    var _elm_lang$core$Native_Basics = function () {

        function div(a, b) {
            return (a / b) | 0;
        }
        function rem(a, b) {
            return a % b;
        }
        function mod(a, b) {
            if (b === 0) {
                throw new Error('Cannot perform mod 0. Division by zero error.');
            }
            var r = a % b;
            var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

            return m === b ? 0 : m;
        }
        function logBase(base, n) {
            return Math.log(n) / Math.log(base);
        }
        function negate(n) {
            return -n;
        }
        function abs(n) {
            return n < 0 ? -n : n;
        }

        function min(a, b) {
            return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
        }
        function max(a, b) {
            return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
        }
        function clamp(lo, hi, n) {
            return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
                ? lo
                : _elm_lang$core$Native_Utils.cmp(n, hi) > 0
                    ? hi
                    : n;
        }

        var ord = ['LT', 'EQ', 'GT'];

        function compare(x, y) {
            return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
        }

        function xor(a, b) {
            return a !== b;
        }
        function not(b) {
            return !b;
        }
        function isInfinite(n) {
            return n === Infinity || n === -Infinity;
        }

        function truncate(n) {
            return n | 0;
        }

        function degrees(d) {
            return d * Math.PI / 180;
        }
        function turns(t) {
            return 2 * Math.PI * t;
        }
        function fromPolar(point) {
            var r = point._0;
            var t = point._1;
            return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
        }
        function toPolar(point) {
            var x = point._0;
            var y = point._1;
            return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
        }

        return {
            div: F2(div),
            rem: F2(rem),
            mod: F2(mod),

            pi: Math.PI,
            e: Math.E,
            cos: Math.cos,
            sin: Math.sin,
            tan: Math.tan,
            acos: Math.acos,
            asin: Math.asin,
            atan: Math.atan,
            atan2: F2(Math.atan2),

            degrees: degrees,
            turns: turns,
            fromPolar: fromPolar,
            toPolar: toPolar,

            sqrt: Math.sqrt,
            logBase: F2(logBase),
            negate: negate,
            abs: abs,
            min: F2(min),
            max: F2(max),
            clamp: F3(clamp),
            compare: F2(compare),

            xor: F2(xor),
            not: not,

            truncate: truncate,
            ceiling: Math.ceil,
            floor: Math.floor,
            round: Math.round,
            toFloat: function (x) { return x; },
            isNaN: isNaN,
            isInfinite: isInfinite
        };

    }();
    //import //

    var _elm_lang$core$Native_Utils = function () {

        // COMPARISONS

        function eq(x, y) {
            var stack = [];
            var isEqual = eqHelp(x, y, 0, stack);
            var pair;
            while (isEqual && (pair = stack.pop())) {
                isEqual = eqHelp(pair.x, pair.y, 0, stack);
            }
            return isEqual;
        }


        function eqHelp(x, y, depth, stack) {
            if (depth > 100) {
                stack.push({ x: x, y: y });
                return true;
            }

            if (x === y) {
                return true;
            }

            if (typeof x !== 'object') {
                if (typeof x === 'function') {
                    throw new Error(
                        'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
                        + ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
                        + ' which describes why it is this way and what the better version will look like.'
                    );
                }
                return false;
            }

            if (x === null || y === null) {
                return false
            }

            if (x instanceof Date) {
                return x.getTime() === y.getTime();
            }

            if (!('ctor' in x)) {
                for (var key in x) {
                    if (!eqHelp(x[key], y[key], depth + 1, stack)) {
                        return false;
                    }
                }
                return true;
            }

            // convert Dicts and Sets to lists
            if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin') {
                x = _elm_lang$core$Dict$toList(x);
                y = _elm_lang$core$Dict$toList(y);
            }
            if (x.ctor === 'Set_elm_builtin') {
                x = _elm_lang$core$Set$toList(x);
                y = _elm_lang$core$Set$toList(y);
            }

            // check if lists are equal without recursion
            if (x.ctor === '::') {
                var a = x;
                var b = y;
                while (a.ctor === '::' && b.ctor === '::') {
                    if (!eqHelp(a._0, b._0, depth + 1, stack)) {
                        return false;
                    }
                    a = a._1;
                    b = b._1;
                }
                return a.ctor === b.ctor;
            }

            // check if Arrays are equal
            if (x.ctor === '_Array') {
                var xs = _elm_lang$core$Native_Array.toJSArray(x);
                var ys = _elm_lang$core$Native_Array.toJSArray(y);
                if (xs.length !== ys.length) {
                    return false;
                }
                for (var i = 0; i < xs.length; i++) {
                    if (!eqHelp(xs[i], ys[i], depth + 1, stack)) {
                        return false;
                    }
                }
                return true;
            }

            if (!eqHelp(x.ctor, y.ctor, depth + 1, stack)) {
                return false;
            }

            for (var key in x) {
                if (!eqHelp(x[key], y[key], depth + 1, stack)) {
                    return false;
                }
            }
            return true;
        }

        // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
        // the particular integer values assigned to LT, EQ, and GT.

        var LT = -1, EQ = 0, GT = 1;

        function cmp(x, y) {
            if (typeof x !== 'object') {
                return x === y ? EQ : x < y ? LT : GT;
            }

            if (x instanceof String) {
                var a = x.valueOf();
                var b = y.valueOf();
                return a === b ? EQ : a < b ? LT : GT;
            }

            if (x.ctor === '::' || x.ctor === '[]') {
                while (x.ctor === '::' && y.ctor === '::') {
                    var ord = cmp(x._0, y._0);
                    if (ord !== EQ) {
                        return ord;
                    }
                    x = x._1;
                    y = y._1;
                }
                return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
            }

            if (x.ctor.slice(0, 6) === '_Tuple') {
                var ord;
                var n = x.ctor.slice(6) - 0;
                var err = 'cannot compare tuples with more than 6 elements.';
                if (n === 0) return EQ;
                if (n >= 1) {
                    ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
                    if (n >= 2) {
                        ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
                        if (n >= 3) {
                            ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
                            if (n >= 4) {
                                ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
                                if (n >= 5) {
                                    ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
                                    if (n >= 6) {
                                        ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
                                        if (n >= 7) throw new Error('Comparison error: ' + err);
                                    }
                                }
                            }
                        }
                    }
                }
                return EQ;
            }

            throw new Error(
                'Comparison error: comparison is only defined on ints, '
                + 'floats, times, chars, strings, lists of comparable values, '
                + 'and tuples of comparable values.'
            );
        }


        // COMMON VALUES

        var Tuple0 = {
            ctor: '_Tuple0'
        };

        function Tuple2(x, y) {
            return {
                ctor: '_Tuple2',
                _0: x,
                _1: y
            };
        }

        function chr(c) {
            return new String(c);
        }


        // GUID

        var count = 0;
        function guid(_) {
            return count++;
        }


        // RECORDS

        function update(oldRecord, updatedFields) {
            var newRecord = {};
            for (var key in oldRecord) {
                var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
                newRecord[key] = value;
            }
            return newRecord;
        }


        //// LIST STUFF ////

        var Nil = { ctor: '[]' };

        function Cons(hd, tl) {
            return {
                ctor: '::',
                _0: hd,
                _1: tl
            };
        }

        function append(xs, ys) {
            // append Strings
            if (typeof xs === 'string') {
                return xs + ys;
            }

            // append Lists
            if (xs.ctor === '[]') {
                return ys;
            }
            var root = Cons(xs._0, Nil);
            var curr = root;
            xs = xs._1;
            while (xs.ctor !== '[]') {
                curr._1 = Cons(xs._0, Nil);
                xs = xs._1;
                curr = curr._1;
            }
            curr._1 = ys;
            return root;
        }


        // CRASHES

        function crash(moduleName, region) {
            return function (message) {
                throw new Error(
                    'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
                    + 'The message provided by the code author is:\n\n    '
                    + message
                );
            };
        }

        function crashCase(moduleName, region, value) {
            return function (message) {
                throw new Error(
                    'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
                    + 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
                    + 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
                    + 'The message provided by the code author is:\n\n    '
                    + message
                );
            };
        }

        function regionToString(region) {
            if (region.start.line == region.end.line) {
                return 'on line ' + region.start.line;
            }
            return 'between lines ' + region.start.line + ' and ' + region.end.line;
        }


        // TO STRING

        function toString(v) {
            var type = typeof v;
            if (type === 'function') {
                var name = v.func ? v.func.name : v.name;
                return '<function' + (name === '' ? '' : ':') + name + '>';
            }

            if (type === 'boolean') {
                return v ? 'True' : 'False';
            }

            if (type === 'number') {
                return v + '';
            }

            if (v instanceof String) {
                return '\'' + addSlashes(v, true) + '\'';
            }

            if (type === 'string') {
                return '"' + addSlashes(v, false) + '"';
            }

            if (v === null) {
                return 'null';
            }

            if (type === 'object' && 'ctor' in v) {
                var ctorStarter = v.ctor.substring(0, 5);

                if (ctorStarter === '_Tupl') {
                    var output = [];
                    for (var k in v) {
                        if (k === 'ctor') continue;
                        output.push(toString(v[k]));
                    }
                    return '(' + output.join(',') + ')';
                }

                if (ctorStarter === '_Task') {
                    return '<task>'
                }

                if (v.ctor === '_Array') {
                    var list = _elm_lang$core$Array$toList(v);
                    return 'Array.fromList ' + toString(list);
                }

                if (v.ctor === '<decoder>') {
                    return '<decoder>';
                }

                if (v.ctor === '_Process') {
                    return '<process:' + v.id + '>';
                }

                if (v.ctor === '::') {
                    var output = '[' + toString(v._0);
                    v = v._1;
                    while (v.ctor === '::') {
                        output += ',' + toString(v._0);
                        v = v._1;
                    }
                    return output + ']';
                }

                if (v.ctor === '[]') {
                    return '[]';
                }

                if (v.ctor === 'Set_elm_builtin') {
                    return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
                }

                if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin') {
                    return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
                }

                var output = '';
                for (var i in v) {
                    if (i === 'ctor') continue;
                    var str = toString(v[i]);
                    var c0 = str[0];
                    var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
                    output += ' ' + (parenless ? str : '(' + str + ')');
                }
                return v.ctor + output;
            }

            if (type === 'object') {
                if (v instanceof Date) {
                    return '<' + v.toString() + '>';
                }

                if (v.elm_web_socket) {
                    return '<websocket>';
                }

                var output = [];
                for (var k in v) {
                    output.push(k + ' = ' + toString(v[k]));
                }
                if (output.length === 0) {
                    return '{}';
                }
                return '{ ' + output.join(', ') + ' }';
            }

            return '<internal structure>';
        }

        function addSlashes(str, isChar) {
            var s = str.replace(/\\/g, '\\\\')
                      .replace(/\n/g, '\\n')
                      .replace(/\t/g, '\\t')
                      .replace(/\r/g, '\\r')
                      .replace(/\v/g, '\\v')
                      .replace(/\0/g, '\\0');
            if (isChar) {
                return s.replace(/\'/g, '\\\'');
            }
            else {
                return s.replace(/\"/g, '\\"');
            }
        }


        return {
            eq: eq,
            cmp: cmp,
            Tuple0: Tuple0,
            Tuple2: Tuple2,
            chr: chr,
            update: update,
            guid: guid,

            append: F2(append),

            crash: crash,
            crashCase: crashCase,

            toString: toString
        };

    }();
    var _elm_lang$core$Basics$uncurry = F2(
        function (f, _p0) {
            var _p1 = _p0;
            return A2(f, _p1._0, _p1._1);
        });
    var _elm_lang$core$Basics$curry = F3(
        function (f, a, b) {
            return f(
                { ctor: '_Tuple2', _0: a, _1: b });
        });
    var _elm_lang$core$Basics$flip = F3(
        function (f, b, a) {
            return A2(f, a, b);
        });
    var _elm_lang$core$Basics$snd = function (_p2) {
        var _p3 = _p2;
        return _p3._1;
    };
    var _elm_lang$core$Basics$fst = function (_p4) {
        var _p5 = _p4;
        return _p5._0;
    };
    var _elm_lang$core$Basics$always = F2(
        function (a, _p6) {
            return a;
        });
    var _elm_lang$core$Basics$identity = function (x) {
        return x;
    };
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['<|'] = F2(
        function (f, x) {
            return f(x);
        });
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['|>'] = F2(
        function (x, f) {
            return f(x);
        });
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['>>'] = F3(
        function (f, g, x) {
            return g(
                f(x));
        });
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['<<'] = F3(
        function (g, f, x) {
            return g(
                f(x));
        });
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
    var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
    var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
    var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
    var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
    var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
    var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
    var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
    var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
    var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
    var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
    var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
    var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
    var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
    var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
    var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
    var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
    var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
    var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
    var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
    var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
    var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
    var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
    var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
    var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
    var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
    var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
    var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
    var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
    var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
    _elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
    var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
    var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
    var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
    var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
    var _elm_lang$core$Basics$radians = function (t) {
        return t;
    };
    var _elm_lang$core$Basics$GT = { ctor: 'GT' };
    var _elm_lang$core$Basics$EQ = { ctor: 'EQ' };
    var _elm_lang$core$Basics$LT = { ctor: 'LT' };
    var _elm_lang$core$Basics$Never = function (a) {
        return { ctor: 'Never', _0: a };
    };

    //import Native.Utils //

    var _elm_lang$core$Native_Debug = function () {

        function log(tag, value) {
            var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
            var process = process || {};
            if (process.stdout) {
                process.stdout.write(msg);
            }
            else {
                console.log(msg);
            }
            return value;
        }

        function crash(message) {
            throw new Error(message);
        }

        return {
            crash: crash,
            log: F2(log)
        };

    }();
    var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
    var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

    var _elm_lang$core$Maybe$withDefault = F2(
        function ($default, maybe) {
            var _p0 = maybe;
            if (_p0.ctor === 'Just') {
                return _p0._0;
            } else {
                return $default;
            }
        });
    var _elm_lang$core$Maybe$Nothing = { ctor: 'Nothing' };
    var _elm_lang$core$Maybe$oneOf = function (maybes) {
        oneOf:
            while (true) {
                var _p1 = maybes;
                if (_p1.ctor === '[]') {
                    return _elm_lang$core$Maybe$Nothing;
                } else {
                    var _p3 = _p1._0;
                    var _p2 = _p3;
                    if (_p2.ctor === 'Nothing') {
                        var _v3 = _p1._1;
                        maybes = _v3;
                        continue oneOf;
                    } else {
                        return _p3;
                    }
                }
            }
    };
    var _elm_lang$core$Maybe$andThen = F2(
        function (maybeValue, callback) {
            var _p4 = maybeValue;
            if (_p4.ctor === 'Just') {
                return callback(_p4._0);
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });
    var _elm_lang$core$Maybe$Just = function (a) {
        return { ctor: 'Just', _0: a };
    };
    var _elm_lang$core$Maybe$map = F2(
        function (f, maybe) {
            var _p5 = maybe;
            if (_p5.ctor === 'Just') {
                return _elm_lang$core$Maybe$Just(
                    f(_p5._0));
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });
    var _elm_lang$core$Maybe$map2 = F3(
        function (func, ma, mb) {
            var _p6 = { ctor: '_Tuple2', _0: ma, _1: mb };
            if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
                return _elm_lang$core$Maybe$Just(
                    A2(func, _p6._0._0, _p6._1._0));
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });
    var _elm_lang$core$Maybe$map3 = F4(
        function (func, ma, mb, mc) {
            var _p7 = { ctor: '_Tuple3', _0: ma, _1: mb, _2: mc };
            if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
                return _elm_lang$core$Maybe$Just(
                    A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });
    var _elm_lang$core$Maybe$map4 = F5(
        function (func, ma, mb, mc, md) {
            var _p8 = { ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md };
            if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
                return _elm_lang$core$Maybe$Just(
                    A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });
    var _elm_lang$core$Maybe$map5 = F6(
        function (func, ma, mb, mc, md, me) {
            var _p9 = { ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me };
            if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
                return _elm_lang$core$Maybe$Just(
                    A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });

    //import Native.Utils //

    var _elm_lang$core$Native_List = function () {

        var Nil = { ctor: '[]' };

        function Cons(hd, tl) {
            return { ctor: '::', _0: hd, _1: tl };
        }

        function fromArray(arr) {
            var out = Nil;
            for (var i = arr.length; i--;) {
                out = Cons(arr[i], out);
            }
            return out;
        }

        function toArray(xs) {
            var out = [];
            while (xs.ctor !== '[]') {
                out.push(xs._0);
                xs = xs._1;
            }
            return out;
        }


        function range(lo, hi) {
            var list = Nil;
            if (lo <= hi) {
                do {
                    list = Cons(hi, list);
                }
                while (hi-- > lo);
            }
            return list;
        }

        function foldr(f, b, xs) {
            var arr = toArray(xs);
            var acc = b;
            for (var i = arr.length; i--;) {
                acc = A2(f, arr[i], acc);
            }
            return acc;
        }

        function map2(f, xs, ys) {
            var arr = [];
            while (xs.ctor !== '[]' && ys.ctor !== '[]') {
                arr.push(A2(f, xs._0, ys._0));
                xs = xs._1;
                ys = ys._1;
            }
            return fromArray(arr);
        }

        function map3(f, xs, ys, zs) {
            var arr = [];
            while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
                arr.push(A3(f, xs._0, ys._0, zs._0));
                xs = xs._1;
                ys = ys._1;
                zs = zs._1;
            }
            return fromArray(arr);
        }

        function map4(f, ws, xs, ys, zs) {
            var arr = [];
            while (ws.ctor !== '[]'
                   && xs.ctor !== '[]'
                   && ys.ctor !== '[]'
                   && zs.ctor !== '[]') {
                arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
                ws = ws._1;
                xs = xs._1;
                ys = ys._1;
                zs = zs._1;
            }
            return fromArray(arr);
        }

        function map5(f, vs, ws, xs, ys, zs) {
            var arr = [];
            while (vs.ctor !== '[]'
                   && ws.ctor !== '[]'
                   && xs.ctor !== '[]'
                   && ys.ctor !== '[]'
                   && zs.ctor !== '[]') {
                arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
                vs = vs._1;
                ws = ws._1;
                xs = xs._1;
                ys = ys._1;
                zs = zs._1;
            }
            return fromArray(arr);
        }

        function sortBy(f, xs) {
            return fromArray(toArray(xs).sort(function (a, b) {
                return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
            }));
        }

        function sortWith(f, xs) {
            return fromArray(toArray(xs).sort(function (a, b) {
                var ord = f(a)(b).ctor;
                return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
            }));
        }

        return {
            Nil: Nil,
            Cons: Cons,
            cons: F2(Cons),
            toArray: toArray,
            fromArray: fromArray,
            range: range,

            foldr: F3(foldr),

            map2: F3(map2),
            map3: F4(map3),
            map4: F5(map4),
            map5: F6(map5),
            sortBy: F2(sortBy),
            sortWith: F2(sortWith)
        };

    }();
    var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
    var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
    var _elm_lang$core$List$sort = function (xs) {
        return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
    };
    var _elm_lang$core$List$drop = F2(
        function (n, list) {
            drop:
                while (true) {
                    if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
                        return list;
                    } else {
                        var _p0 = list;
                        if (_p0.ctor === '[]') {
                            return list;
                        } else {
                            var _v1 = n - 1,
                                _v2 = _p0._1;
                            n = _v1;
                            list = _v2;
                            continue drop;
                        }
                    }
                }
        });
    var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
    var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
    var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
    var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
    var _elm_lang$core$List$any = F2(
        function (isOkay, list) {
            any:
                while (true) {
                    var _p1 = list;
                    if (_p1.ctor === '[]') {
                        return false;
                    } else {
                        if (isOkay(_p1._0)) {
                            return true;
                        } else {
                            var _v4 = isOkay,
                                _v5 = _p1._1;
                            isOkay = _v4;
                            list = _v5;
                            continue any;
                        }
                    }
                }
        });
    var _elm_lang$core$List$all = F2(
        function (isOkay, list) {
            return _elm_lang$core$Basics$not(
                A2(
                    _elm_lang$core$List$any,
                    function (_p2) {
                        return _elm_lang$core$Basics$not(
                            isOkay(_p2));
                    },
                    list));
        });
    var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
    var _elm_lang$core$List$foldl = F3(
        function (func, acc, list) {
            foldl:
                while (true) {
                    var _p3 = list;
                    if (_p3.ctor === '[]') {
                        return acc;
                    } else {
                        var _v7 = func,
                            _v8 = A2(func, _p3._0, acc),
                            _v9 = _p3._1;
                        func = _v7;
                        acc = _v8;
                        list = _v9;
                        continue foldl;
                    }
                }
        });
    var _elm_lang$core$List$length = function (xs) {
        return A3(
            _elm_lang$core$List$foldl,
            F2(
                function (_p4, i) {
                    return i + 1;
                }),
            0,
            xs);
    };
    var _elm_lang$core$List$sum = function (numbers) {
        return A3(
            _elm_lang$core$List$foldl,
            F2(
                function (x, y) {
                    return x + y;
                }),
            0,
            numbers);
    };
    var _elm_lang$core$List$product = function (numbers) {
        return A3(
            _elm_lang$core$List$foldl,
            F2(
                function (x, y) {
                    return x * y;
                }),
            1,
            numbers);
    };
    var _elm_lang$core$List$maximum = function (list) {
        var _p5 = list;
        if (_p5.ctor === '::') {
            return _elm_lang$core$Maybe$Just(
                A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
        } else {
            return _elm_lang$core$Maybe$Nothing;
        }
    };
    var _elm_lang$core$List$minimum = function (list) {
        var _p6 = list;
        if (_p6.ctor === '::') {
            return _elm_lang$core$Maybe$Just(
                A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
        } else {
            return _elm_lang$core$Maybe$Nothing;
        }
    };
    var _elm_lang$core$List$indexedMap = F2(
        function (f, xs) {
            return A3(
                _elm_lang$core$List$map2,
                f,
                _elm_lang$core$Native_List.range(
                    0,
                    _elm_lang$core$List$length(xs) - 1),
                xs);
        });
    var _elm_lang$core$List$member = F2(
        function (x, xs) {
            return A2(
                _elm_lang$core$List$any,
                function (a) {
                    return _elm_lang$core$Native_Utils.eq(a, x);
                },
                xs);
        });
    var _elm_lang$core$List$isEmpty = function (xs) {
        var _p7 = xs;
        if (_p7.ctor === '[]') {
            return true;
        } else {
            return false;
        }
    };
    var _elm_lang$core$List$tail = function (list) {
        var _p8 = list;
        if (_p8.ctor === '::') {
            return _elm_lang$core$Maybe$Just(_p8._1);
        } else {
            return _elm_lang$core$Maybe$Nothing;
        }
    };
    var _elm_lang$core$List$head = function (list) {
        var _p9 = list;
        if (_p9.ctor === '::') {
            return _elm_lang$core$Maybe$Just(_p9._0);
        } else {
            return _elm_lang$core$Maybe$Nothing;
        }
    };
    var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
    _elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
    var _elm_lang$core$List$map = F2(
        function (f, xs) {
            return A3(
                _elm_lang$core$List$foldr,
                F2(
                    function (x, acc) {
                        return A2(
                            _elm_lang$core$List_ops['::'],
                            f(x),
                            acc);
                    }),
                _elm_lang$core$Native_List.fromArray(
                    []),
                xs);
        });
    var _elm_lang$core$List$filter = F2(
        function (pred, xs) {
            var conditionalCons = F2(
                function (x, xs$) {
                    return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
                });
            return A3(
                _elm_lang$core$List$foldr,
                conditionalCons,
                _elm_lang$core$Native_List.fromArray(
                    []),
                xs);
        });
    var _elm_lang$core$List$maybeCons = F3(
        function (f, mx, xs) {
            var _p10 = f(mx);
            if (_p10.ctor === 'Just') {
                return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
            } else {
                return xs;
            }
        });
    var _elm_lang$core$List$filterMap = F2(
        function (f, xs) {
            return A3(
                _elm_lang$core$List$foldr,
                _elm_lang$core$List$maybeCons(f),
                _elm_lang$core$Native_List.fromArray(
                    []),
                xs);
        });
    var _elm_lang$core$List$reverse = function (list) {
        return A3(
            _elm_lang$core$List$foldl,
            F2(
                function (x, y) {
                    return A2(_elm_lang$core$List_ops['::'], x, y);
                }),
            _elm_lang$core$Native_List.fromArray(
                []),
            list);
    };
    var _elm_lang$core$List$scanl = F3(
        function (f, b, xs) {
            var scan1 = F2(
                function (x, accAcc) {
                    var _p11 = accAcc;
                    if (_p11.ctor === '::') {
                        return A2(
                            _elm_lang$core$List_ops['::'],
                            A2(f, x, _p11._0),
                            accAcc);
                    } else {
                        return _elm_lang$core$Native_List.fromArray(
                            []);
                    }
                });
            return _elm_lang$core$List$reverse(
                A3(
                    _elm_lang$core$List$foldl,
                    scan1,
                    _elm_lang$core$Native_List.fromArray(
                        [b]),
                    xs));
        });
    var _elm_lang$core$List$append = F2(
        function (xs, ys) {
            var _p12 = ys;
            if (_p12.ctor === '[]') {
                return xs;
            } else {
                return A3(
                    _elm_lang$core$List$foldr,
                    F2(
                        function (x, y) {
                            return A2(_elm_lang$core$List_ops['::'], x, y);
                        }),
                    ys,
                    xs);
            }
        });
    var _elm_lang$core$List$concat = function (lists) {
        return A3(
            _elm_lang$core$List$foldr,
            _elm_lang$core$List$append,
            _elm_lang$core$Native_List.fromArray(
                []),
            lists);
    };
    var _elm_lang$core$List$concatMap = F2(
        function (f, list) {
            return _elm_lang$core$List$concat(
                A2(_elm_lang$core$List$map, f, list));
        });
    var _elm_lang$core$List$partition = F2(
        function (pred, list) {
            var step = F2(
                function (x, _p13) {
                    var _p14 = _p13;
                    var _p16 = _p14._0;
                    var _p15 = _p14._1;
                    return pred(x) ? {
                        ctor: '_Tuple2',
                        _0: A2(_elm_lang$core$List_ops['::'], x, _p16),
                        _1: _p15
                    } : {
                        ctor: '_Tuple2',
                        _0: _p16,
                        _1: A2(_elm_lang$core$List_ops['::'], x, _p15)
                    };
                });
            return A3(
                _elm_lang$core$List$foldr,
                step,
                {
                    ctor: '_Tuple2',
                    _0: _elm_lang$core$Native_List.fromArray(
                        []),
                    _1: _elm_lang$core$Native_List.fromArray(
                        [])
                },
                list);
        });
    var _elm_lang$core$List$unzip = function (pairs) {
        var step = F2(
            function (_p18, _p17) {
                var _p19 = _p18;
                var _p20 = _p17;
                return {
                    ctor: '_Tuple2',
                    _0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
                    _1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
                };
            });
        return A3(
            _elm_lang$core$List$foldr,
            step,
            {
                ctor: '_Tuple2',
                _0: _elm_lang$core$Native_List.fromArray(
                    []),
                _1: _elm_lang$core$Native_List.fromArray(
                    [])
            },
            pairs);
    };
    var _elm_lang$core$List$intersperse = F2(
        function (sep, xs) {
            var _p21 = xs;
            if (_p21.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                var step = F2(
                    function (x, rest) {
                        return A2(
                            _elm_lang$core$List_ops['::'],
                            sep,
                            A2(_elm_lang$core$List_ops['::'], x, rest));
                    });
                var spersed = A3(
                    _elm_lang$core$List$foldr,
                    step,
                    _elm_lang$core$Native_List.fromArray(
                        []),
                    _p21._1);
                return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
            }
        });
    var _elm_lang$core$List$takeReverse = F3(
        function (n, list, taken) {
            takeReverse:
                while (true) {
                    if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
                        return taken;
                    } else {
                        var _p22 = list;
                        if (_p22.ctor === '[]') {
                            return taken;
                        } else {
                            var _v23 = n - 1,
                                _v24 = _p22._1,
                                _v25 = A2(_elm_lang$core$List_ops['::'], _p22._0, taken);
                            n = _v23;
                            list = _v24;
                            taken = _v25;
                            continue takeReverse;
                        }
                    }
                }
        });
    var _elm_lang$core$List$takeTailRec = F2(
        function (n, list) {
            return _elm_lang$core$List$reverse(
                A3(
                    _elm_lang$core$List$takeReverse,
                    n,
                    list,
                    _elm_lang$core$Native_List.fromArray(
                        [])));
        });
    var _elm_lang$core$List$takeFast = F3(
        function (ctr, n, list) {
            if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                var _p23 = { ctor: '_Tuple2', _0: n, _1: list };
                _v26_5:
                    do {
                        _v26_1:
                            do {
                                if (_p23.ctor === '_Tuple2') {
                                    if (_p23._1.ctor === '[]') {
                                        return list;
                                    } else {
                                        if (_p23._1._1.ctor === '::') {
                                            switch (_p23._0) {
                                                case 1:
                                                    break _v26_1;
                                                case 2:
                                                    return _elm_lang$core$Native_List.fromArray(
                                                        [_p23._1._0, _p23._1._1._0]);
                                                case 3:
                                                    if (_p23._1._1._1.ctor === '::') {
                                                        return _elm_lang$core$Native_List.fromArray(
                                                            [_p23._1._0, _p23._1._1._0, _p23._1._1._1._0]);
                                                    } else {
                                                        break _v26_5;
                                                    }
                                                default:
                                                    if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
                                                        var _p28 = _p23._1._1._1._0;
                                                        var _p27 = _p23._1._1._0;
                                                        var _p26 = _p23._1._0;
                                                        var _p25 = _p23._1._1._1._1._0;
                                                        var _p24 = _p23._1._1._1._1._1;
                                                        return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? A2(
                                                            _elm_lang$core$List_ops['::'],
                                                            _p26,
                                                            A2(
                                                                _elm_lang$core$List_ops['::'],
                                                                _p27,
                                                                A2(
                                                                    _elm_lang$core$List_ops['::'],
                                                                    _p28,
                                                                    A2(
                                                                        _elm_lang$core$List_ops['::'],
                                                                        _p25,
                                                                        A2(_elm_lang$core$List$takeTailRec, n - 4, _p24))))) : A2(
                                                            _elm_lang$core$List_ops['::'],
                                                            _p26,
                                                            A2(
                                                                _elm_lang$core$List_ops['::'],
                                                                _p27,
                                                                A2(
                                                                    _elm_lang$core$List_ops['::'],
                                                                    _p28,
                                                                    A2(
                                                                        _elm_lang$core$List_ops['::'],
                                                                        _p25,
                                                                        A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)))));
                                                    } else {
                                                        break _v26_5;
                                                    }
                                            }
                                        } else {
                                            if (_p23._0 === 1) {
                                                break _v26_1;
                                            } else {
                                                break _v26_5;
                                            }
                                        }
                                    }
                                } else {
                                    break _v26_5;
                                }
                            } while (false);
                        return _elm_lang$core$Native_List.fromArray(
                            [_p23._1._0]);
                    } while (false);
                return list;
            }
        });
    var _elm_lang$core$List$take = F2(
        function (n, list) {
            return A3(_elm_lang$core$List$takeFast, 0, n, list);
        });
    var _elm_lang$core$List$repeatHelp = F3(
        function (result, n, value) {
            repeatHelp:
                while (true) {
                    if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
                        return result;
                    } else {
                        var _v27 = A2(_elm_lang$core$List_ops['::'], value, result),
                            _v28 = n - 1,
                            _v29 = value;
                        result = _v27;
                        n = _v28;
                        value = _v29;
                        continue repeatHelp;
                    }
                }
        });
    var _elm_lang$core$List$repeat = F2(
        function (n, value) {
            return A3(
                _elm_lang$core$List$repeatHelp,
                _elm_lang$core$Native_List.fromArray(
                    []),
                n,
                value);
        });

    var _elm_lang$core$Result$toMaybe = function (result) {
        var _p0 = result;
        if (_p0.ctor === 'Ok') {
            return _elm_lang$core$Maybe$Just(_p0._0);
        } else {
            return _elm_lang$core$Maybe$Nothing;
        }
    };
    var _elm_lang$core$Result$withDefault = F2(
        function (def, result) {
            var _p1 = result;
            if (_p1.ctor === 'Ok') {
                return _p1._0;
            } else {
                return def;
            }
        });
    var _elm_lang$core$Result$Err = function (a) {
        return { ctor: 'Err', _0: a };
    };
    var _elm_lang$core$Result$andThen = F2(
        function (result, callback) {
            var _p2 = result;
            if (_p2.ctor === 'Ok') {
                return callback(_p2._0);
            } else {
                return _elm_lang$core$Result$Err(_p2._0);
            }
        });
    var _elm_lang$core$Result$Ok = function (a) {
        return { ctor: 'Ok', _0: a };
    };
    var _elm_lang$core$Result$map = F2(
        function (func, ra) {
            var _p3 = ra;
            if (_p3.ctor === 'Ok') {
                return _elm_lang$core$Result$Ok(
                    func(_p3._0));
            } else {
                return _elm_lang$core$Result$Err(_p3._0);
            }
        });
    var _elm_lang$core$Result$map2 = F3(
        function (func, ra, rb) {
            var _p4 = { ctor: '_Tuple2', _0: ra, _1: rb };
            if (_p4._0.ctor === 'Ok') {
                if (_p4._1.ctor === 'Ok') {
                    return _elm_lang$core$Result$Ok(
                        A2(func, _p4._0._0, _p4._1._0));
                } else {
                    return _elm_lang$core$Result$Err(_p4._1._0);
                }
            } else {
                return _elm_lang$core$Result$Err(_p4._0._0);
            }
        });
    var _elm_lang$core$Result$map3 = F4(
        function (func, ra, rb, rc) {
            var _p5 = { ctor: '_Tuple3', _0: ra, _1: rb, _2: rc };
            if (_p5._0.ctor === 'Ok') {
                if (_p5._1.ctor === 'Ok') {
                    if (_p5._2.ctor === 'Ok') {
                        return _elm_lang$core$Result$Ok(
                            A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
                    } else {
                        return _elm_lang$core$Result$Err(_p5._2._0);
                    }
                } else {
                    return _elm_lang$core$Result$Err(_p5._1._0);
                }
            } else {
                return _elm_lang$core$Result$Err(_p5._0._0);
            }
        });
    var _elm_lang$core$Result$map4 = F5(
        function (func, ra, rb, rc, rd) {
            var _p6 = { ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd };
            if (_p6._0.ctor === 'Ok') {
                if (_p6._1.ctor === 'Ok') {
                    if (_p6._2.ctor === 'Ok') {
                        if (_p6._3.ctor === 'Ok') {
                            return _elm_lang$core$Result$Ok(
                                A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
                        } else {
                            return _elm_lang$core$Result$Err(_p6._3._0);
                        }
                    } else {
                        return _elm_lang$core$Result$Err(_p6._2._0);
                    }
                } else {
                    return _elm_lang$core$Result$Err(_p6._1._0);
                }
            } else {
                return _elm_lang$core$Result$Err(_p6._0._0);
            }
        });
    var _elm_lang$core$Result$map5 = F6(
        function (func, ra, rb, rc, rd, re) {
            var _p7 = { ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re };
            if (_p7._0.ctor === 'Ok') {
                if (_p7._1.ctor === 'Ok') {
                    if (_p7._2.ctor === 'Ok') {
                        if (_p7._3.ctor === 'Ok') {
                            if (_p7._4.ctor === 'Ok') {
                                return _elm_lang$core$Result$Ok(
                                    A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
                            } else {
                                return _elm_lang$core$Result$Err(_p7._4._0);
                            }
                        } else {
                            return _elm_lang$core$Result$Err(_p7._3._0);
                        }
                    } else {
                        return _elm_lang$core$Result$Err(_p7._2._0);
                    }
                } else {
                    return _elm_lang$core$Result$Err(_p7._1._0);
                }
            } else {
                return _elm_lang$core$Result$Err(_p7._0._0);
            }
        });
    var _elm_lang$core$Result$formatError = F2(
        function (f, result) {
            var _p8 = result;
            if (_p8.ctor === 'Ok') {
                return _elm_lang$core$Result$Ok(_p8._0);
            } else {
                return _elm_lang$core$Result$Err(
                    f(_p8._0));
            }
        });
    var _elm_lang$core$Result$fromMaybe = F2(
        function (err, maybe) {
            var _p9 = maybe;
            if (_p9.ctor === 'Just') {
                return _elm_lang$core$Result$Ok(_p9._0);
            } else {
                return _elm_lang$core$Result$Err(err);
            }
        });

    //import //

    var _elm_lang$core$Native_Platform = function () {


        // PROGRAMS

        function addPublicModule(object, name, main) {
            var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

            object['worker'] = function worker(flags) {
                return init(undefined, flags, false);
            }

            object['embed'] = function embed(domNode, flags) {
                return init(domNode, flags, true);
            }

            object['fullscreen'] = function fullscreen(flags) {
                return init(document.body, flags, true);
            };
        }


        // PROGRAM FAIL

        function mainIsUndefined(name) {
            return function (domNode) {
                var message = 'Cannot initialize module `' + name +
                    '` because it has no `main` value!\nWhat should I show on screen?';
                domNode.innerHTML = errorHtml(message);
                throw new Error(message);
            };
        }

        function errorHtml(message) {
            return '<div style="padding-left:1em;">'
                + '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
                + '<pre style="padding-left:1em;">' + message + '</pre>'
                + '</div>';
        }


        // PROGRAM SUCCESS

        function makeEmbed(moduleName, main) {
            return function embed(rootDomNode, flags, withRenderer) {
                try {
                    var program = mainToProgram(moduleName, main);
                    if (!withRenderer) {
                        program.renderer = dummyRenderer;
                    }
                    return makeEmbedHelp(moduleName, program, rootDomNode, flags);
                }
                catch (e) {
                    rootDomNode.innerHTML = errorHtml(e.message);
                    throw e;
                }
            };
        }

        function dummyRenderer() {
            return { update: function () { } };
        }


        // MAIN TO PROGRAM

        function mainToProgram(moduleName, wrappedMain) {
            var main = wrappedMain.main;

            if (typeof main.init === 'undefined') {
                var emptyBag = batch(_elm_lang$core$Native_List.Nil);
                var noChange = _elm_lang$core$Native_Utils.Tuple2(
                    _elm_lang$core$Native_Utils.Tuple0,
                    emptyBag
                );

                return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
                    init: function () { return noChange; },
                    view: function () { return main; },
                    update: F2(function () { return noChange; }),
                    subscriptions: function () { return emptyBag; }
                });
            }

            var flags = wrappedMain.flags;
            var init = flags
                ? initWithFlags(moduleName, main.init, flags)
                : initWithoutFlags(moduleName, main.init);

            return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
                init: init,
                view: main.view,
                update: main.update,
                subscriptions: main.subscriptions,
            });
        }

        function initWithoutFlags(moduleName, realInit) {
            return function init(flags) {
                if (typeof flags !== 'undefined') {
                    throw new Error(
                        'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
                        + 'This module does not take arguments though! You probably need to change the\n'
                        + 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
                    );
                }
                return realInit();
            };
        }

        function initWithFlags(moduleName, realInit, flagDecoder) {
            return function init(flags) {
                var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
                if (result.ctor === 'Err') {
                    throw new Error(
                        'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
                        + 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
                        + result._0
                    );
                }
                return realInit(result._0);
            };
        }


        // SETUP RUNTIME SYSTEM

        function makeEmbedHelp(moduleName, program, rootDomNode, flags) {
            var init = program.init;
            var update = program.update;
            var subscriptions = program.subscriptions;
            var view = program.view;
            var makeRenderer = program.renderer;

            // ambient state
            var managers = {};
            var renderer;

            // init and update state in main process
            var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function (callback) {
                var results = init(flags);
                var model = results._0;
                renderer = makeRenderer(rootDomNode, enqueue, view(model));
                var cmds = results._1;
                var subs = subscriptions(model);
                dispatchEffects(managers, cmds, subs);
                callback(_elm_lang$core$Native_Scheduler.succeed(model));
            });

            function onMessage(msg, model) {
                return _elm_lang$core$Native_Scheduler.nativeBinding(function (callback) {
                    var results = A2(update, msg, model);
                    model = results._0;
                    renderer.update(view(model));
                    var cmds = results._1;
                    var subs = subscriptions(model);
                    dispatchEffects(managers, cmds, subs);
                    callback(_elm_lang$core$Native_Scheduler.succeed(model));
                });
            }

            var mainProcess = spawnLoop(initApp, onMessage);

            function enqueue(msg) {
                _elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
            }

            var ports = setupEffects(managers, enqueue);

            return ports ? { ports: ports } : {};
        }


        // EFFECT MANAGERS

        var effectManagers = {};

        function setupEffects(managers, callback) {
            var ports;

            // setup all necessary effect managers
            for (var key in effectManagers) {
                var manager = effectManagers[key];

                if (manager.isForeign) {
                    ports = ports || {};
                    ports[key] = manager.tag === 'cmd'
                        ? setupOutgoingPort(key)
                        : setupIncomingPort(key, callback);
                }

                managers[key] = makeManager(manager, callback);
            }

            return ports;
        }

        function makeManager(info, callback) {
            var router = {
                main: callback,
                self: undefined
            };

            var tag = info.tag;
            var onEffects = info.onEffects;
            var onSelfMsg = info.onSelfMsg;

            function onMessage(msg, state) {
                if (msg.ctor === 'self') {
                    return A3(onSelfMsg, router, msg._0, state);
                }

                var fx = msg._0;
                switch (tag) {
                    case 'cmd':
                        return A3(onEffects, router, fx.cmds, state);

                    case 'sub':
                        return A3(onEffects, router, fx.subs, state);

                    case 'fx':
                        return A4(onEffects, router, fx.cmds, fx.subs, state);
                }
            }

            var process = spawnLoop(info.init, onMessage);
            router.self = process;
            return process;
        }

        function sendToApp(router, msg) {
            return _elm_lang$core$Native_Scheduler.nativeBinding(function (callback) {
                router.main(msg);
                callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
            });
        }

        function sendToSelf(router, msg) {
            return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
                ctor: 'self',
                _0: msg
            });
        }


        // HELPER for STATEFUL LOOPS

        function spawnLoop(init, onMessage) {
            var andThen = _elm_lang$core$Native_Scheduler.andThen;

            function loop(state) {
                var handleMsg = _elm_lang$core$Native_Scheduler.receive(function (msg) {
                    return onMessage(msg, state);
                });
                return A2(andThen, handleMsg, loop);
            }

            var task = A2(andThen, init, loop);

            return _elm_lang$core$Native_Scheduler.rawSpawn(task);
        }


        // BAGS

        function leaf(home) {
            return function (value) {
                return {
                    type: 'leaf',
                    home: home,
                    value: value
                };
            };
        }

        function batch(list) {
            return {
                type: 'node',
                branches: list
            };
        }

        function map(tagger, bag) {
            return {
                type: 'map',
                tagger: tagger,
                tree: bag
            }
        }


        // PIPE BAGS INTO EFFECT MANAGERS

        function dispatchEffects(managers, cmdBag, subBag) {
            var effectsDict = {};
            gatherEffects(true, cmdBag, effectsDict, null);
            gatherEffects(false, subBag, effectsDict, null);

            for (var home in managers) {
                var fx = home in effectsDict
                    ? effectsDict[home]
                    : {
                        cmds: _elm_lang$core$Native_List.Nil,
                        subs: _elm_lang$core$Native_List.Nil
                    };

                _elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
            }
        }

        function gatherEffects(isCmd, bag, effectsDict, taggers) {
            switch (bag.type) {
                case 'leaf':
                    var home = bag.home;
                    var effect = toEffect(isCmd, home, taggers, bag.value);
                    effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
                    return;

                case 'node':
                    var list = bag.branches;
                    while (list.ctor !== '[]') {
                        gatherEffects(isCmd, list._0, effectsDict, taggers);
                        list = list._1;
                    }
                    return;

                case 'map':
                    gatherEffects(isCmd, bag.tree, effectsDict, {
                        tagger: bag.tagger,
                        rest: taggers
                    });
                    return;
            }
        }

        function toEffect(isCmd, home, taggers, value) {
            function applyTaggers(x) {
                var temp = taggers;
                while (temp) {
                    x = temp.tagger(x);
                    temp = temp.rest;
                }
                return x;
            }

            var map = isCmd
                ? effectManagers[home].cmdMap
                : effectManagers[home].subMap;

            return A2(map, applyTaggers, value)
        }

        function insert(isCmd, newEffect, effects) {
            effects = effects || {
                cmds: _elm_lang$core$Native_List.Nil,
                subs: _elm_lang$core$Native_List.Nil
            };
            if (isCmd) {
                effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
                return effects;
            }
            effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
            return effects;
        }


        // PORTS

        function checkPortName(name) {
            if (name in effectManagers) {
                throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
            }
        }


        // OUTGOING PORTS

        function outgoingPort(name, converter) {
            checkPortName(name);
            effectManagers[name] = {
                tag: 'cmd',
                cmdMap: outgoingPortMap,
                converter: converter,
                isForeign: true
            };
            return leaf(name);
        }

        var outgoingPortMap = F2(function cmdMap(tagger, value) {
            return value;
        });

        function setupOutgoingPort(name) {
            var subs = [];
            var converter = effectManagers[name].converter;

            // CREATE MANAGER

            var init = _elm_lang$core$Native_Scheduler.succeed(null);

            function onEffects(router, cmdList, state) {
                while (cmdList.ctor !== '[]') {
                    var value = converter(cmdList._0);
                    for (var i = 0; i < subs.length; i++) {
                        subs[i](value);
                    }
                    cmdList = cmdList._1;
                }
                return init;
            }

            effectManagers[name].init = init;
            effectManagers[name].onEffects = F3(onEffects);

            // PUBLIC API

            function subscribe(callback) {
                subs.push(callback);
            }

            function unsubscribe(callback) {
                var index = subs.indexOf(callback);
                if (index >= 0) {
                    subs.splice(index, 1);
                }
            }

            return {
                subscribe: subscribe,
                unsubscribe: unsubscribe
            };
        }


        // INCOMING PORTS

        function incomingPort(name, converter) {
            checkPortName(name);
            effectManagers[name] = {
                tag: 'sub',
                subMap: incomingPortMap,
                converter: converter,
                isForeign: true
            };
            return leaf(name);
        }

        var incomingPortMap = F2(function subMap(tagger, finalTagger) {
            return function (value) {
                return tagger(finalTagger(value));
            };
        });

        function setupIncomingPort(name, callback) {
            var sentBeforeInit = [];
            var subs = _elm_lang$core$Native_List.Nil;
            var converter = effectManagers[name].converter;
            var currentOnEffects = preInitOnEffects;
            var currentSend = preInitSend;

            // CREATE MANAGER

            var init = _elm_lang$core$Native_Scheduler.succeed(null);

            function preInitOnEffects(router, subList, state) {
                var postInitResult = postInitOnEffects(router, subList, state);

                for (var i = 0; i < sentBeforeInit.length; i++) {
                    postInitSend(sentBeforeInit[i]);
                }

                sentBeforeInit = null; // to release objects held in queue
                currentSend = postInitSend;
                currentOnEffects = postInitOnEffects;
                return postInitResult;
            }

            function postInitOnEffects(router, subList, state) {
                subs = subList;
                return init;
            }

            function onEffects(router, subList, state) {
                return currentOnEffects(router, subList, state);
            }

            effectManagers[name].init = init;
            effectManagers[name].onEffects = F3(onEffects);

            // PUBLIC API

            function preInitSend(value) {
                sentBeforeInit.push(value);
            }

            function postInitSend(incomingValue) {
                var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
                if (result.ctor === 'Err') {
                    throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
                }

                var value = result._0;
                var temp = subs;
                while (temp.ctor !== '[]') {
                    callback(temp._0(value));
                    temp = temp._1;
                }
            }

            function send(incomingValue) {
                currentSend(incomingValue);
            }

            return { send: send };
        }

        return {
            // routers
            sendToApp: F2(sendToApp),
            sendToSelf: F2(sendToSelf),

            // global setup
            mainToProgram: mainToProgram,
            effectManagers: effectManagers,
            outgoingPort: outgoingPort,
            incomingPort: incomingPort,
            addPublicModule: addPublicModule,

            // effect bags
            leaf: leaf,
            batch: batch,
            map: F2(map)
        };

    }();

    //import Native.Utils //

    var _elm_lang$core$Native_Scheduler = function () {

        var MAX_STEPS = 10000;


        // TASKS

        function succeed(value) {
            return {
                ctor: '_Task_succeed',
                value: value
            };
        }

        function fail(error) {
            return {
                ctor: '_Task_fail',
                value: error
            };
        }

        function nativeBinding(callback) {
            return {
                ctor: '_Task_nativeBinding',
                callback: callback,
                cancel: null
            };
        }

        function andThen(task, callback) {
            return {
                ctor: '_Task_andThen',
                task: task,
                callback: callback
            };
        }

        function onError(task, callback) {
            return {
                ctor: '_Task_onError',
                task: task,
                callback: callback
            };
        }

        function receive(callback) {
            return {
                ctor: '_Task_receive',
                callback: callback
            };
        }


        // PROCESSES

        function rawSpawn(task) {
            var process = {
                ctor: '_Process',
                id: _elm_lang$core$Native_Utils.guid(),
                root: task,
                stack: null,
                mailbox: []
            };

            enqueue(process);

            return process;
        }

        function spawn(task) {
            return nativeBinding(function (callback) {
                var process = rawSpawn(task);
                callback(succeed(process));
            });
        }

        function rawSend(process, msg) {
            process.mailbox.push(msg);
            enqueue(process);
        }

        function send(process, msg) {
            return nativeBinding(function (callback) {
                rawSend(process, msg);
                callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
            });
        }

        function kill(process) {
            return nativeBinding(function (callback) {
                var root = process.root;
                if (root.ctor === '_Task_nativeBinding' && root.cancel) {
                    root.cancel();
                }

                process.root = null;

                callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
            });
        }

        function sleep(time) {
            return nativeBinding(function (callback) {
                var id = setTimeout(function () {
                    callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
                }, time);

                return function () { clearTimeout(id); };
            });
        }


        // STEP PROCESSES

        function step(numSteps, process) {
            while (numSteps < MAX_STEPS) {
                var ctor = process.root.ctor;

                if (ctor === '_Task_succeed') {
                    while (process.stack && process.stack.ctor === '_Task_onError') {
                        process.stack = process.stack.rest;
                    }
                    if (process.stack === null) {
                        break;
                    }
                    process.root = process.stack.callback(process.root.value);
                    process.stack = process.stack.rest;
                    ++numSteps;
                    continue;
                }

                if (ctor === '_Task_fail') {
                    while (process.stack && process.stack.ctor === '_Task_andThen') {
                        process.stack = process.stack.rest;
                    }
                    if (process.stack === null) {
                        break;
                    }
                    process.root = process.stack.callback(process.root.value);
                    process.stack = process.stack.rest;
                    ++numSteps;
                    continue;
                }

                if (ctor === '_Task_andThen') {
                    process.stack = {
                        ctor: '_Task_andThen',
                        callback: process.root.callback,
                        rest: process.stack
                    };
                    process.root = process.root.task;
                    ++numSteps;
                    continue;
                }

                if (ctor === '_Task_onError') {
                    process.stack = {
                        ctor: '_Task_onError',
                        callback: process.root.callback,
                        rest: process.stack
                    };
                    process.root = process.root.task;
                    ++numSteps;
                    continue;
                }

                if (ctor === '_Task_nativeBinding') {
                    process.root.cancel = process.root.callback(function (newRoot) {
                        process.root = newRoot;
                        enqueue(process);
                    });

                    break;
                }

                if (ctor === '_Task_receive') {
                    var mailbox = process.mailbox;
                    if (mailbox.length === 0) {
                        break;
                    }

                    process.root = process.root.callback(mailbox.shift());
                    ++numSteps;
                    continue;
                }

                throw new Error(ctor);
            }

            if (numSteps < MAX_STEPS) {
                return numSteps + 1;
            }
            enqueue(process);

            return numSteps;
        }


        // WORK QUEUE

        var working = false;
        var workQueue = [];

        function enqueue(process) {
            workQueue.push(process);

            if (!working) {
                setTimeout(work, 0);
                working = true;
            }
        }

        function work() {
            var numSteps = 0;
            var process;
            while (numSteps < MAX_STEPS && (process = workQueue.shift())) {
                if (process.root) {
                    numSteps = step(numSteps, process);
                }
            }
            if (!process) {
                working = false;
                return;
            }
            setTimeout(work, 0);
        }


        return {
            succeed: succeed,
            fail: fail,
            nativeBinding: nativeBinding,
            andThen: F2(andThen),
            onError: F2(onError),
            receive: receive,

            spawn: spawn,
            kill: kill,
            sleep: sleep,
            send: F2(send),

            rawSpawn: rawSpawn,
            rawSend: rawSend
        };

    }();
    var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
    var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
    var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
    var _elm_lang$core$Platform$Program = { ctor: 'Program' };
    var _elm_lang$core$Platform$Task = { ctor: 'Task' };
    var _elm_lang$core$Platform$ProcessId = { ctor: 'ProcessId' };
    var _elm_lang$core$Platform$Router = { ctor: 'Router' };

    var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
    var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
        _elm_lang$core$Native_List.fromArray(
            []));
    var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
    _elm_lang$core$Platform_Cmd_ops['!'] = F2(
        function (model, commands) {
            return {
                ctor: '_Tuple2',
                _0: model,
                _1: _elm_lang$core$Platform_Cmd$batch(commands)
            };
        });
    var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
    var _elm_lang$core$Platform_Cmd$Cmd = { ctor: 'Cmd' };

    var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
    var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
        _elm_lang$core$Native_List.fromArray(
            []));
    var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
    var _elm_lang$core$Platform_Sub$Sub = { ctor: 'Sub' };

    var _elm_lang$lazy$Native_Lazy = function () {

        function memoize(thunk) {
            var value;
            var isForced = false;
            return function (tuple0) {
                if (!isForced) {
                    value = thunk(tuple0);
                    isForced = true;
                }
                return value;
            };
        }

        return {
            memoize: memoize
        };

    }();

    var _elm_lang$lazy$Lazy$force = function (_p0) {
        var _p1 = _p0;
        return _p1._0(
            { ctor: '_Tuple0' });
    };
    var _elm_lang$lazy$Lazy$Lazy = function (a) {
        return { ctor: 'Lazy', _0: a };
    };
    var _elm_lang$lazy$Lazy$lazy = function (thunk) {
        return _elm_lang$lazy$Lazy$Lazy(
            _elm_lang$lazy$Native_Lazy.memoize(thunk));
    };
    var _elm_lang$lazy$Lazy$map = F2(
        function (f, a) {
            return _elm_lang$lazy$Lazy$lazy(
                function (_p2) {
                    var _p3 = _p2;
                    return f(
                        _elm_lang$lazy$Lazy$force(a));
                });
        });
    var _elm_lang$lazy$Lazy$map2 = F3(
        function (f, a, b) {
            return _elm_lang$lazy$Lazy$lazy(
                function (_p4) {
                    var _p5 = _p4;
                    return A2(
                        f,
                        _elm_lang$lazy$Lazy$force(a),
                        _elm_lang$lazy$Lazy$force(b));
                });
        });
    var _elm_lang$lazy$Lazy$map3 = F4(
        function (f, a, b, c) {
            return _elm_lang$lazy$Lazy$lazy(
                function (_p6) {
                    var _p7 = _p6;
                    return A3(
                        f,
                        _elm_lang$lazy$Lazy$force(a),
                        _elm_lang$lazy$Lazy$force(b),
                        _elm_lang$lazy$Lazy$force(c));
                });
        });
    var _elm_lang$lazy$Lazy$map4 = F5(
        function (f, a, b, c, d) {
            return _elm_lang$lazy$Lazy$lazy(
                function (_p8) {
                    var _p9 = _p8;
                    return A4(
                        f,
                        _elm_lang$lazy$Lazy$force(a),
                        _elm_lang$lazy$Lazy$force(b),
                        _elm_lang$lazy$Lazy$force(c),
                        _elm_lang$lazy$Lazy$force(d));
                });
        });
    var _elm_lang$lazy$Lazy$map5 = F6(
        function (f, a, b, c, d, e) {
            return _elm_lang$lazy$Lazy$lazy(
                function (_p10) {
                    var _p11 = _p10;
                    return A5(
                        f,
                        _elm_lang$lazy$Lazy$force(a),
                        _elm_lang$lazy$Lazy$force(b),
                        _elm_lang$lazy$Lazy$force(c),
                        _elm_lang$lazy$Lazy$force(d),
                        _elm_lang$lazy$Lazy$force(e));
                });
        });
    var _elm_lang$lazy$Lazy$apply = F2(
        function (f, x) {
            return _elm_lang$lazy$Lazy$lazy(
                function (_p12) {
                    var _p13 = _p12;
                    return A2(
                        _elm_lang$lazy$Lazy$force,
                        f,
                        _elm_lang$lazy$Lazy$force(x));
                });
        });
    var _elm_lang$lazy$Lazy$andThen = F2(
        function (a, callback) {
            return _elm_lang$lazy$Lazy$lazy(
                function (_p14) {
                    var _p15 = _p14;
                    return _elm_lang$lazy$Lazy$force(
                        callback(
                            _elm_lang$lazy$Lazy$force(a)));
                });
        });

    //import Maybe, Native.List, Native.Utils, Result //

    var _elm_lang$core$Native_String = function () {

        function isEmpty(str) {
            return str.length === 0;
        }
        function cons(chr, str) {
            return chr + str;
        }
        function uncons(str) {
            var hd = str[0];
            if (hd) {
                return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
            }
            return _elm_lang$core$Maybe$Nothing;
        }
        function append(a, b) {
            return a + b;
        }
        function concat(strs) {
            return _elm_lang$core$Native_List.toArray(strs).join('');
        }
        function length(str) {
            return str.length;
        }
        function map(f, str) {
            var out = str.split('');
            for (var i = out.length; i--;) {
                out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
            }
            return out.join('');
        }
        function filter(pred, str) {
            return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
        }
        function reverse(str) {
            return str.split('').reverse().join('');
        }
        function foldl(f, b, str) {
            var len = str.length;
            for (var i = 0; i < len; ++i) {
                b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
            }
            return b;
        }
        function foldr(f, b, str) {
            for (var i = str.length; i--;) {
                b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
            }
            return b;
        }
        function split(sep, str) {
            return _elm_lang$core$Native_List.fromArray(str.split(sep));
        }
        function join(sep, strs) {
            return _elm_lang$core$Native_List.toArray(strs).join(sep);
        }
        function repeat(n, str) {
            var result = '';
            while (n > 0) {
                if (n & 1) {
                    result += str;
                }
                n >>= 1, str += str;
            }
            return result;
        }
        function slice(start, end, str) {
            return str.slice(start, end);
        }
        function left(n, str) {
            return n < 1 ? '' : str.slice(0, n);
        }
        function right(n, str) {
            return n < 1 ? '' : str.slice(-n);
        }
        function dropLeft(n, str) {
            return n < 1 ? str : str.slice(n);
        }
        function dropRight(n, str) {
            return n < 1 ? str : str.slice(0, -n);
        }
        function pad(n, chr, str) {
            var half = (n - str.length) / 2;
            return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
        }
        function padRight(n, chr, str) {
            return str + repeat(n - str.length, chr);
        }
        function padLeft(n, chr, str) {
            return repeat(n - str.length, chr) + str;
        }

        function trim(str) {
            return str.trim();
        }
        function trimLeft(str) {
            return str.replace(/^\s+/, '');
        }
        function trimRight(str) {
            return str.replace(/\s+$/, '');
        }

        function words(str) {
            return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
        }
        function lines(str) {
            return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
        }

        function toUpper(str) {
            return str.toUpperCase();
        }
        function toLower(str) {
            return str.toLowerCase();
        }

        function any(pred, str) {
            for (var i = str.length; i--;) {
                if (pred(_elm_lang$core$Native_Utils.chr(str[i]))) {
                    return true;
                }
            }
            return false;
        }
        function all(pred, str) {
            for (var i = str.length; i--;) {
                if (!pred(_elm_lang$core$Native_Utils.chr(str[i]))) {
                    return false;
                }
            }
            return true;
        }

        function contains(sub, str) {
            return str.indexOf(sub) > -1;
        }
        function startsWith(sub, str) {
            return str.indexOf(sub) === 0;
        }
        function endsWith(sub, str) {
            return str.length >= sub.length &&
                str.lastIndexOf(sub) === str.length - sub.length;
        }
        function indexes(sub, str) {
            var subLen = sub.length;

            if (subLen < 1) {
                return _elm_lang$core$Native_List.Nil;
            }

            var i = 0;
            var is = [];

            while ((i = str.indexOf(sub, i)) > -1) {
                is.push(i);
                i = i + subLen;
            }

            return _elm_lang$core$Native_List.fromArray(is);
        }

        function toInt(s) {
            var len = s.length;
            if (len === 0) {
                return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
            }
            var start = 0;
            if (s[0] === '-') {
                if (len === 1) {
                    return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
                }
                start = 1;
            }
            for (var i = start; i < len; ++i) {
                var c = s[i];
                if (c < '0' || '9' < c) {
                    return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
                }
            }
            return _elm_lang$core$Result$Ok(parseInt(s, 10));
        }

        function toFloat(s) {
            var len = s.length;
            if (len === 0) {
                return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
            }
            var start = 0;
            if (s[0] === '-') {
                if (len === 1) {
                    return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
                }
                start = 1;
            }
            var dotCount = 0;
            for (var i = start; i < len; ++i) {
                var c = s[i];
                if ('0' <= c && c <= '9') {
                    continue;
                }
                if (c === '.') {
                    dotCount += 1;
                    if (dotCount <= 1) {
                        continue;
                    }
                }
                return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
            }
            return _elm_lang$core$Result$Ok(parseFloat(s));
        }

        function toList(str) {
            return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
        }
        function fromList(chars) {
            return _elm_lang$core$Native_List.toArray(chars).join('');
        }

        return {
            isEmpty: isEmpty,
            cons: F2(cons),
            uncons: uncons,
            append: F2(append),
            concat: concat,
            length: length,
            map: F2(map),
            filter: F2(filter),
            reverse: reverse,
            foldl: F3(foldl),
            foldr: F3(foldr),

            split: F2(split),
            join: F2(join),
            repeat: F2(repeat),

            slice: F3(slice),
            left: F2(left),
            right: F2(right),
            dropLeft: F2(dropLeft),
            dropRight: F2(dropRight),

            pad: F3(pad),
            padLeft: F3(padLeft),
            padRight: F3(padRight),

            trim: trim,
            trimLeft: trimLeft,
            trimRight: trimRight,

            words: words,
            lines: lines,

            toUpper: toUpper,
            toLower: toLower,

            any: F2(any),
            all: F2(all),

            contains: F2(contains),
            startsWith: F2(startsWith),
            endsWith: F2(endsWith),
            indexes: F2(indexes),

            toInt: toInt,
            toFloat: toFloat,
            toList: toList,
            fromList: fromList
        };

    }();

    //import Native.Utils //

    var _elm_lang$core$Native_Char = function () {

        return {
            fromCode: function (c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
            toCode: function (c) { return c.charCodeAt(0); },
            toUpper: function (c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
            toLower: function (c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
            toLocaleUpper: function (c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
            toLocaleLower: function (c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
        };

    }();
    var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
    var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
    var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
    var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
    var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
    var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
    var _elm_lang$core$Char$isBetween = F3(
        function (low, high, $char) {
            var code = _elm_lang$core$Char$toCode($char);
            return (_elm_lang$core$Native_Utils.cmp(
                code,
                _elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
                code,
                _elm_lang$core$Char$toCode(high)) < 1);
        });
    var _elm_lang$core$Char$isUpper = A2(
        _elm_lang$core$Char$isBetween,
        _elm_lang$core$Native_Utils.chr('A'),
        _elm_lang$core$Native_Utils.chr('Z'));
    var _elm_lang$core$Char$isLower = A2(
        _elm_lang$core$Char$isBetween,
        _elm_lang$core$Native_Utils.chr('a'),
        _elm_lang$core$Native_Utils.chr('z'));
    var _elm_lang$core$Char$isDigit = A2(
        _elm_lang$core$Char$isBetween,
        _elm_lang$core$Native_Utils.chr('0'),
        _elm_lang$core$Native_Utils.chr('9'));
    var _elm_lang$core$Char$isOctDigit = A2(
        _elm_lang$core$Char$isBetween,
        _elm_lang$core$Native_Utils.chr('0'),
        _elm_lang$core$Native_Utils.chr('7'));
    var _elm_lang$core$Char$isHexDigit = function ($char) {
        return _elm_lang$core$Char$isDigit($char) || (A3(
            _elm_lang$core$Char$isBetween,
            _elm_lang$core$Native_Utils.chr('a'),
            _elm_lang$core$Native_Utils.chr('f'),
            $char) || A3(
            _elm_lang$core$Char$isBetween,
            _elm_lang$core$Native_Utils.chr('A'),
            _elm_lang$core$Native_Utils.chr('F'),
            $char));
    };

    var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
    var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
    var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
    var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
    var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
    var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
    var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
    var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
    var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
    var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
    var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
    var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
    var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
    var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
    var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
    var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
    var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
    var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
    var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
    var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
    var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
    var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
    var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
    var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
    var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
    var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
    var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
    var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
    var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
    var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
    var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
    var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
    var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
    var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
    var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
    var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
    var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
    var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
    var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
    var _elm_lang$core$String$fromChar = function ($char) {
        return A2(_elm_lang$core$String$cons, $char, '');
    };
    var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

    //import Maybe, Native.List //

    var _elm_lang$core$Native_Regex = function () {

        function escape(str) {
            return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }
        function caseInsensitive(re) {
            return new RegExp(re.source, 'gi');
        }
        function regex(raw) {
            return new RegExp(raw, 'g');
        }

        function contains(re, string) {
            return string.match(re) !== null;
        }

        function find(n, re, str) {
            n = n.ctor === 'All' ? Infinity : n._0;
            var out = [];
            var number = 0;
            var string = str;
            var lastIndex = re.lastIndex;
            var prevLastIndex = -1;
            var result;
            while (number++ < n && (result = re.exec(string))) {
                if (prevLastIndex === re.lastIndex) break;
                var i = result.length - 1;
                var subs = new Array(i);
                while (i > 0) {
                    var submatch = result[i];
                    subs[--i] = submatch === undefined
                        ? _elm_lang$core$Maybe$Nothing
                        : _elm_lang$core$Maybe$Just(submatch);
                }
                out.push({
                    match: result[0],
                    submatches: _elm_lang$core$Native_List.fromArray(subs),
                    index: result.index,
                    number: number
                });
                prevLastIndex = re.lastIndex;
            }
            re.lastIndex = lastIndex;
            return _elm_lang$core$Native_List.fromArray(out);
        }

        function replace(n, re, replacer, string) {
            n = n.ctor === 'All' ? Infinity : n._0;
            var count = 0;
            function jsReplacer(match) {
                if (count++ >= n) {
                    return match;
                }
                var i = arguments.length - 3;
                var submatches = new Array(i);
                while (i > 0) {
                    var submatch = arguments[i];
                    submatches[--i] = submatch === undefined
                        ? _elm_lang$core$Maybe$Nothing
                        : _elm_lang$core$Maybe$Just(submatch);
                }
                return replacer({
                    match: match,
                    submatches: _elm_lang$core$Native_List.fromArray(submatches),
                    index: arguments[i - 1],
                    number: count
                });
            }
            return string.replace(re, jsReplacer);
        }

        function split(n, re, str) {
            n = n.ctor === 'All' ? Infinity : n._0;
            if (n === Infinity) {
                return _elm_lang$core$Native_List.fromArray(str.split(re));
            }
            var string = str;
            var result;
            var out = [];
            var start = re.lastIndex;
            while (n--) {
                if (!(result = re.exec(string))) break;
                out.push(string.slice(start, result.index));
                start = re.lastIndex;
            }
            out.push(string.slice(start));
            return _elm_lang$core$Native_List.fromArray(out);
        }

        return {
            regex: regex,
            caseInsensitive: caseInsensitive,
            escape: escape,

            contains: F2(contains),
            find: F3(find),
            replace: F4(replace),
            split: F3(split)
        };

    }();

    var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
    var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
    var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
    var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
    var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
    var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
    var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
    var _elm_lang$core$Regex$Match = F4(
        function (a, b, c, d) {
            return { match: a, submatches: b, index: c, number: d };
        });
    var _elm_lang$core$Regex$Regex = { ctor: 'Regex' };
    var _elm_lang$core$Regex$AtMost = function (a) {
        return { ctor: 'AtMost', _0: a };
    };
    var _elm_lang$core$Regex$All = { ctor: 'All' };

    var _Bogdanp$elm_combine$Combine$app = function (p) {
        var _p0 = p;
        if (_p0.ctor === 'Parser') {
            return _p0._0;
        } else {
            return _elm_lang$lazy$Lazy$force(_p0._0);
        }
    };
    var _Bogdanp$elm_combine$Combine$parse = F2(
        function (p, input) {
            return A2(
                _Bogdanp$elm_combine$Combine$app,
                p,
                { input: input, position: 0 });
        });
    var _Bogdanp$elm_combine$Combine$Context = F2(
        function (a, b) {
            return { input: a, position: b };
        });
    var _Bogdanp$elm_combine$Combine$RecursiveParser = function (a) {
        return { ctor: 'RecursiveParser', _0: a };
    };
    var _Bogdanp$elm_combine$Combine$rec = function (t) {
        return _Bogdanp$elm_combine$Combine$RecursiveParser(
            _elm_lang$lazy$Lazy$lazy(
                function (_p1) {
                    var _p2 = _p1;
                    return _Bogdanp$elm_combine$Combine$app(
                        t(
                            { ctor: '_Tuple0' }));
                }));
    };
    var _Bogdanp$elm_combine$Combine$Parser = function (a) {
        return { ctor: 'Parser', _0: a };
    };
    var _Bogdanp$elm_combine$Combine$primitive = _Bogdanp$elm_combine$Combine$Parser;
    var _Bogdanp$elm_combine$Combine$bimap = F3(
        function (fok, ferr, p) {
            return _Bogdanp$elm_combine$Combine$Parser(
                function (cx) {
                    var _p3 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
                    if (_p3._0.ctor === 'Ok') {
                        return {
                            ctor: '_Tuple2',
                            _0: _elm_lang$core$Result$Ok(
                                fok(_p3._0._0)),
                            _1: _p3._1
                        };
                    } else {
                        return {
                            ctor: '_Tuple2',
                            _0: _elm_lang$core$Result$Err(
                                ferr(_p3._0._0)),
                            _1: _p3._1
                        };
                    }
                });
        });
    var _Bogdanp$elm_combine$Combine$map = F2(
        function (f, p) {
            return A3(_Bogdanp$elm_combine$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
        });
    var _Bogdanp$elm_combine$Combine$mapError = _Bogdanp$elm_combine$Combine$bimap(_elm_lang$core$Basics$identity);
    var _Bogdanp$elm_combine$Combine$andThen = F2(
        function (p, f) {
            return _Bogdanp$elm_combine$Combine$Parser(
                function (cx) {
                    var _p4 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
                    if (_p4._0.ctor === 'Ok') {
                        return A2(
                            _Bogdanp$elm_combine$Combine$app,
                            f(_p4._0._0),
                            _p4._1);
                    } else {
                        return {
                            ctor: '_Tuple2',
                            _0: _elm_lang$core$Result$Err(_p4._0._0),
                            _1: _p4._1
                        };
                    }
                });
        });
    var _Bogdanp$elm_combine$Combine$sequence = function (ps) {
        var accumulate = F3(
            function (acc, ps, cx) {
                accumulate:
                    while (true) {
                        var _p5 = ps;
                        if (_p5.ctor === '[]') {
                            return {
                                ctor: '_Tuple2',
                                _0: _elm_lang$core$Result$Ok(
                                    _elm_lang$core$List$reverse(acc)),
                                _1: cx
                            };
                        } else {
                            var _p6 = A2(_Bogdanp$elm_combine$Combine$app, _p5._0, cx);
                            if (_p6._0.ctor === 'Ok') {
                                var _v6 = A2(_elm_lang$core$List_ops['::'], _p6._0._0, acc),
                                    _v7 = _p5._1,
                                    _v8 = _p6._1;
                                acc = _v6;
                                ps = _v7;
                                cx = _v8;
                                continue accumulate;
                            } else {
                                return {
                                    ctor: '_Tuple2',
                                    _0: _elm_lang$core$Result$Err(_p6._0._0),
                                    _1: _p6._1
                                };
                            }
                        }
                    }
            });
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                return A3(
                    accumulate,
                    _elm_lang$core$Native_List.fromArray(
                        []),
                    ps,
                    cx);
            });
    };
    var _Bogdanp$elm_combine$Combine$fail = function (ms) {
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                return {
                    ctor: '_Tuple2',
                    _0: _elm_lang$core$Result$Err(ms),
                    _1: cx
                };
            });
    };
    var _Bogdanp$elm_combine$Combine$succeed = function (r) {
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                return {
                    ctor: '_Tuple2',
                    _0: _elm_lang$core$Result$Ok(r),
                    _1: cx
                };
            });
    };
    var _Bogdanp$elm_combine$Combine$andMap = F2(
        function (lp, rp) {
            return A2(
                _Bogdanp$elm_combine$Combine$andThen,
                lp,
                function (f) {
                    return A2(
                        _Bogdanp$elm_combine$Combine$andThen,
                        rp,
                        function (x) {
                            return _Bogdanp$elm_combine$Combine$succeed(
                                f(x));
                        });
                });
        });
    var _Bogdanp$elm_combine$Combine$between = F3(
        function (lp, rp, p) {
            return A2(
                _Bogdanp$elm_combine$Combine$andMap,
                A2(
                    _Bogdanp$elm_combine$Combine$andMap,
                    A2(
                        _Bogdanp$elm_combine$Combine$map,
                        _elm_lang$core$Basics$flip(
                            function (_p7) {
                                return _elm_lang$core$Basics$always(
                                    _elm_lang$core$Basics$always(_p7));
                            }),
                        lp),
                    p),
                rp);
        });
    var _Bogdanp$elm_combine$Combine$skip = function (p) {
        return A2(
            _Bogdanp$elm_combine$Combine$andThen,
            p,
            _elm_lang$core$Basics$always(
                _Bogdanp$elm_combine$Combine$succeed(
                    { ctor: '_Tuple0' })));
    };
    var _Bogdanp$elm_combine$Combine$count = F2(
        function (n, p) {
            var accumulate = F2(
                function (x, acc) {
                    return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _Bogdanp$elm_combine$Combine$succeed(
                        _elm_lang$core$List$reverse(acc)) : A2(
                        _Bogdanp$elm_combine$Combine$andThen,
                        p,
                        function (res) {
                            return A2(
                                accumulate,
                                x - 1,
                                A2(_elm_lang$core$List_ops['::'], res, acc));
                        });
                });
            return A2(
                accumulate,
                n,
                _elm_lang$core$Native_List.fromArray(
                    []));
        });
    var _Bogdanp$elm_combine$Combine$string = function (s) {
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                if (A2(_elm_lang$core$String$startsWith, s, cx.input)) {
                    var len = _elm_lang$core$String$length(s);
                    var rem = A2(_elm_lang$core$String$dropLeft, len, cx.input);
                    var pos = cx.position + len;
                    return {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Ok(s),
                        _1: _elm_lang$core$Native_Utils.update(
                            cx,
                            { input: rem, position: pos })
                    };
                } else {
                    return {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Err(
                            _elm_lang$core$Native_List.fromArray(
                                [
                                    A2(
                                    _elm_lang$core$Basics_ops['++'],
                                    'expected ',
                                    _elm_lang$core$Basics$toString(s))
                                ])),
                        _1: cx
                    };
                }
            });
    };
    var _Bogdanp$elm_combine$Combine$parens = A2(
        _Bogdanp$elm_combine$Combine$between,
        _Bogdanp$elm_combine$Combine$string('('),
        _Bogdanp$elm_combine$Combine$string(')'));
    var _Bogdanp$elm_combine$Combine$braces = A2(
        _Bogdanp$elm_combine$Combine$between,
        _Bogdanp$elm_combine$Combine$string('{'),
        _Bogdanp$elm_combine$Combine$string('}'));
    var _Bogdanp$elm_combine$Combine$brackets = A2(
        _Bogdanp$elm_combine$Combine$between,
        _Bogdanp$elm_combine$Combine$string('['),
        _Bogdanp$elm_combine$Combine$string(']'));
    var _Bogdanp$elm_combine$Combine$regex = function (pattern) {
        var pattern$ = A2(_elm_lang$core$String$startsWith, '^', pattern) ? pattern : A2(_elm_lang$core$Basics_ops['++'], '^', pattern);
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                var _p8 = A3(
                    _elm_lang$core$Regex$find,
                    _elm_lang$core$Regex$AtMost(1),
                    _elm_lang$core$Regex$regex(pattern$),
                    cx.input);
                if ((_p8.ctor === '::') && (_p8._1.ctor === '[]')) {
                    var _p9 = _p8._0;
                    var len = _elm_lang$core$String$length(_p9.match);
                    var rem = A2(_elm_lang$core$String$dropLeft, len, cx.input);
                    var pos = cx.position + len;
                    return {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Ok(_p9.match),
                        _1: _elm_lang$core$Native_Utils.update(
                            cx,
                            { input: rem, position: pos })
                    };
                } else {
                    return {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Err(
                            _elm_lang$core$Native_List.fromArray(
                                [
                                    A2(
                                    _elm_lang$core$Basics_ops['++'],
                                    'expected input matching Regexp /',
                                    A2(_elm_lang$core$Basics_ops['++'], pattern$, '/'))
                                ])),
                        _1: cx
                    };
                }
            });
    };
    var _Bogdanp$elm_combine$Combine$while = function (pred) {
        var accumulate = F2(
            function (acc, cx) {
                accumulate:
                    while (true) {
                        var _p10 = _elm_lang$core$String$uncons(cx.input);
                        if (_p10.ctor === 'Just') {
                            var _p11 = _p10._0._0;
                            if (pred(_p11)) {
                                var pos = cx.position + 1;
                                var c = A2(_elm_lang$core$String$cons, _p11, '');
                                var _v11 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
                                    _v12 = _elm_lang$core$Native_Utils.update(
                                    cx,
                                    { input: _p10._0._1, position: pos });
                                acc = _v11;
                                cx = _v12;
                                continue accumulate;
                            } else {
                                return { ctor: '_Tuple2', _0: acc, _1: cx };
                            }
                        } else {
                            return { ctor: '_Tuple2', _0: acc, _1: cx };
                        }
                    }
            });
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                var _p12 = A2(accumulate, '', cx);
                var res = _p12._0;
                var cx$ = _p12._1;
                return {
                    ctor: '_Tuple2',
                    _0: _elm_lang$core$Result$Ok(res),
                    _1: cx$
                };
            });
    };
    var _Bogdanp$elm_combine$Combine$end = _Bogdanp$elm_combine$Combine$Parser(
        function (cx) {
            return _elm_lang$core$Native_Utils.eq(cx.input, '') ? {
                ctor: '_Tuple2',
                _0: _elm_lang$core$Result$Ok(
                    { ctor: '_Tuple0' }),
                _1: cx
            } : {
                ctor: '_Tuple2',
                _0: _elm_lang$core$Result$Err(
                    _elm_lang$core$Native_List.fromArray(
                        ['expected end of input'])),
                _1: cx
            };
        });
    var _Bogdanp$elm_combine$Combine$or = F2(
        function (lp, rp) {
            return _Bogdanp$elm_combine$Combine$Parser(
                function (cx) {
                    var res = A2(_Bogdanp$elm_combine$Combine$app, lp, cx);
                    var _p13 = res;
                    if (_p13._0.ctor === 'Ok') {
                        return res;
                    } else {
                        var res$ = A2(_Bogdanp$elm_combine$Combine$app, rp, cx);
                        var _p14 = res$;
                        if (_p14._0.ctor === 'Ok') {
                            return res$;
                        } else {
                            return {
                                ctor: '_Tuple2',
                                _0: _elm_lang$core$Result$Err(
                                    A2(_elm_lang$core$Basics_ops['++'], _p13._0._0, _p14._0._0)),
                                _1: cx
                            };
                        }
                    }
                });
        });
    var _Bogdanp$elm_combine$Combine$choice = function (xs) {
        return A3(
            _elm_lang$core$List$foldr,
            _Bogdanp$elm_combine$Combine$or,
            _Bogdanp$elm_combine$Combine$fail(
                _elm_lang$core$Native_List.fromArray(
                    [])),
            xs);
    };
    var _Bogdanp$elm_combine$Combine$optional = F2(
        function (res, p) {
            return A2(
                _Bogdanp$elm_combine$Combine$or,
                p,
                _Bogdanp$elm_combine$Combine$succeed(res));
        });
    var _Bogdanp$elm_combine$Combine$chainl = F2(
        function (p, op) {
            var accumulate = function (x) {
                return A2(
                    _Bogdanp$elm_combine$Combine$or,
                    A2(
                        _Bogdanp$elm_combine$Combine$andThen,
                        op,
                        function (f) {
                            return A2(
                                _Bogdanp$elm_combine$Combine$andThen,
                                p,
                                function (y) {
                                    return accumulate(
                                        A2(f, x, y));
                                });
                        }),
                    _Bogdanp$elm_combine$Combine$succeed(x));
            };
            return A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate);
        });
    var _Bogdanp$elm_combine$Combine$chainr = F2(
        function (p, op) {
            var accumulate = function (x) {
                return A2(
                    _Bogdanp$elm_combine$Combine$or,
                    A2(
                        _Bogdanp$elm_combine$Combine$andThen,
                        op,
                        function (f) {
                            return A2(
                                _Bogdanp$elm_combine$Combine$andThen,
                                A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate),
                                function (y) {
                                    return _Bogdanp$elm_combine$Combine$succeed(
                                        A2(f, x, y));
                                });
                        }),
                    _Bogdanp$elm_combine$Combine$succeed(x));
            };
            return A2(_Bogdanp$elm_combine$Combine$andThen, p, accumulate);
        });
    var _Bogdanp$elm_combine$Combine$maybe = function (p) {
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                var _p15 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
                if ((_p15.ctor === '_Tuple2') && (_p15._0.ctor === 'Ok')) {
                    return {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Ok(
                            _elm_lang$core$Maybe$Just(_p15._0._0)),
                        _1: _p15._1
                    };
                } else {
                    return {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing),
                        _1: cx
                    };
                }
            });
    };
    var _Bogdanp$elm_combine$Combine$many = function (p) {
        var accumulate = F2(
            function (acc, cx) {
                accumulate:
                    while (true) {
                        var _p16 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
                        if ((_p16.ctor === '_Tuple2') && (_p16._0.ctor === 'Ok')) {
                            var _p17 = _p16._1;
                            if (_elm_lang$core$Native_Utils.eq(cx, _p17)) {
                                return {
                                    ctor: '_Tuple2',
                                    _0: _elm_lang$core$List$reverse(acc),
                                    _1: cx
                                };
                            } else {
                                var _v17 = A2(_elm_lang$core$List_ops['::'], _p16._0._0, acc),
                                    _v18 = _p17;
                                acc = _v17;
                                cx = _v18;
                                continue accumulate;
                            }
                        } else {
                            return {
                                ctor: '_Tuple2',
                                _0: _elm_lang$core$List$reverse(acc),
                                _1: cx
                            };
                        }
                    }
            });
        return _Bogdanp$elm_combine$Combine$Parser(
            function (cx) {
                var _p18 = A2(
                    accumulate,
                    _elm_lang$core$Native_List.fromArray(
                        []),
                    cx);
                var res = _p18._0;
                var cx$ = _p18._1;
                return {
                    ctor: '_Tuple2',
                    _0: _elm_lang$core$Result$Ok(res),
                    _1: cx$
                };
            });
    };
    var _Bogdanp$elm_combine$Combine$many1 = function (p) {
        return A2(
            _Bogdanp$elm_combine$Combine$andMap,
            A2(
                _Bogdanp$elm_combine$Combine$map,
                F2(
                    function (x, y) {
                        return A2(_elm_lang$core$List_ops['::'], x, y);
                    }),
                p),
            _Bogdanp$elm_combine$Combine$many(p));
    };
    var _Bogdanp$elm_combine$Combine$skipMany1 = function (p) {
        return A2(
            _Bogdanp$elm_combine$Combine$andThen,
            _Bogdanp$elm_combine$Combine$many1(
                _Bogdanp$elm_combine$Combine$skip(p)),
            _elm_lang$core$Basics$always(
                _Bogdanp$elm_combine$Combine$succeed(
                    { ctor: '_Tuple0' })));
    };
    var _Bogdanp$elm_combine$Combine$sepBy1 = F2(
        function (sep, p) {
            return A2(
                _Bogdanp$elm_combine$Combine$andMap,
                A2(
                    _Bogdanp$elm_combine$Combine$map,
                    F2(
                        function (x, y) {
                            return A2(_elm_lang$core$List_ops['::'], x, y);
                        }),
                    p),
                _Bogdanp$elm_combine$Combine$many(
                    A2(
                        _Bogdanp$elm_combine$Combine$andMap,
                        A2(
                            _Bogdanp$elm_combine$Combine$map,
                            _elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
                            sep),
                        p)));
        });
    var _Bogdanp$elm_combine$Combine$sepBy = F2(
        function (sep, p) {
            return A2(
                _Bogdanp$elm_combine$Combine$or,
                A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p),
                _Bogdanp$elm_combine$Combine$succeed(
                    _elm_lang$core$Native_List.fromArray(
                        [])));
        });
    var _Bogdanp$elm_combine$Combine$sepEndBy1 = F2(
        function (sep, p) {
            return A2(
                _Bogdanp$elm_combine$Combine$andMap,
                A2(
                    _Bogdanp$elm_combine$Combine$map,
                    _elm_lang$core$Basics$always,
                    A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p)),
                _Bogdanp$elm_combine$Combine$maybe(sep));
        });
    var _Bogdanp$elm_combine$Combine$sepEndBy = F2(
        function (sep, p) {
            return A2(
                _Bogdanp$elm_combine$Combine$or,
                A2(_Bogdanp$elm_combine$Combine$sepEndBy1, sep, p),
                _Bogdanp$elm_combine$Combine$succeed(
                    _elm_lang$core$Native_List.fromArray(
                        [])));
        });
    var _Bogdanp$elm_combine$Combine$skipMany = function (p) {
        return A2(
            _Bogdanp$elm_combine$Combine$andThen,
            _Bogdanp$elm_combine$Combine$many(
                _Bogdanp$elm_combine$Combine$skip(p)),
            _elm_lang$core$Basics$always(
                _Bogdanp$elm_combine$Combine$succeed(
                    { ctor: '_Tuple0' })));
    };
    var _Bogdanp$elm_combine$Combine$manyTill = F2(
        function (p, end) {
            var accumulate = F2(
                function (acc, cx) {
                    accumulate:
                        while (true) {
                            var _p19 = A2(_Bogdanp$elm_combine$Combine$app, end, cx);
                            if (_p19._0.ctor === 'Ok') {
                                return {
                                    ctor: '_Tuple2',
                                    _0: _elm_lang$core$Result$Ok(
                                        _elm_lang$core$List$reverse(acc)),
                                    _1: _p19._1
                                };
                            } else {
                                var _p20 = A2(_Bogdanp$elm_combine$Combine$app, p, cx);
                                if ((_p20.ctor === '_Tuple2') && (_p20._0.ctor === 'Ok')) {
                                    var _v21 = A2(_elm_lang$core$List_ops['::'], _p20._0._0, acc),
                                        _v22 = _p20._1;
                                    acc = _v21;
                                    cx = _v22;
                                    continue accumulate;
                                } else {
                                    return {
                                        ctor: '_Tuple2',
                                        _0: _elm_lang$core$Result$Err(_p19._0._0),
                                        _1: _p19._1
                                    };
                                }
                            }
                        }
                });
            return _Bogdanp$elm_combine$Combine$Parser(
                accumulate(
                    _elm_lang$core$Native_List.fromArray(
                        [])));
        });

    var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
    _Bogdanp$elm_combine$Combine_Infix_ops['<|>'] = _Bogdanp$elm_combine$Combine$or;
    var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
    _Bogdanp$elm_combine$Combine_Infix_ops['*>'] = F2(
        function (lp, rp) {
            return A2(
                _Bogdanp$elm_combine$Combine$andMap,
                A2(
                    _Bogdanp$elm_combine$Combine$map,
                    _elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
                    lp),
                rp);
        });
    var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
    _Bogdanp$elm_combine$Combine_Infix_ops['<*'] = F2(
        function (lp, rp) {
            return A2(
                _Bogdanp$elm_combine$Combine$andMap,
                A2(_Bogdanp$elm_combine$Combine$map, _elm_lang$core$Basics$always, lp),
                rp);
        });
    var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
    _Bogdanp$elm_combine$Combine_Infix_ops['<?>'] = F2(
        function (p, m) {
            return A2(
                _Bogdanp$elm_combine$Combine$mapError,
                function (_p0) {
                    return _elm_lang$core$Native_List.fromArray(
                        [m]);
                },
                p);
        });
    var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
    _Bogdanp$elm_combine$Combine_Infix_ops['<$'] = function (res) {
        return _Bogdanp$elm_combine$Combine$map(
            function (_p1) {
                return res;
            });
    };
    var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'] = _Bogdanp$elm_combine$Combine$andMap;
    var _Bogdanp$elm_combine$Combine_Infix_ops = _Bogdanp$elm_combine$Combine_Infix_ops || {};
    _Bogdanp$elm_combine$Combine_Infix_ops['<$>'] = _Bogdanp$elm_combine$Combine$map;

    var _elm_lang$core$Dict$foldr = F3(
        function (f, acc, t) {
            foldr:
                while (true) {
                    var _p0 = t;
                    if (_p0.ctor === 'RBEmpty_elm_builtin') {
                        return acc;
                    } else {
                        var _v1 = f,
                            _v2 = A3(
                            f,
                            _p0._1,
                            _p0._2,
                            A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
                            _v3 = _p0._3;
                        f = _v1;
                        acc = _v2;
                        t = _v3;
                        continue foldr;
                    }
                }
        });
    var _elm_lang$core$Dict$keys = function (dict) {
        return A3(
            _elm_lang$core$Dict$foldr,
            F3(
                function (key, value, keyList) {
                    return A2(_elm_lang$core$List_ops['::'], key, keyList);
                }),
            _elm_lang$core$Native_List.fromArray(
                []),
            dict);
    };
    var _elm_lang$core$Dict$values = function (dict) {
        return A3(
            _elm_lang$core$Dict$foldr,
            F3(
                function (key, value, valueList) {
                    return A2(_elm_lang$core$List_ops['::'], value, valueList);
                }),
            _elm_lang$core$Native_List.fromArray(
                []),
            dict);
    };
    var _elm_lang$core$Dict$toList = function (dict) {
        return A3(
            _elm_lang$core$Dict$foldr,
            F3(
                function (key, value, list) {
                    return A2(
                        _elm_lang$core$List_ops['::'],
                        { ctor: '_Tuple2', _0: key, _1: value },
                        list);
                }),
            _elm_lang$core$Native_List.fromArray(
                []),
            dict);
    };
    var _elm_lang$core$Dict$foldl = F3(
        function (f, acc, dict) {
            foldl:
                while (true) {
                    var _p1 = dict;
                    if (_p1.ctor === 'RBEmpty_elm_builtin') {
                        return acc;
                    } else {
                        var _v5 = f,
                            _v6 = A3(
                            f,
                            _p1._1,
                            _p1._2,
                            A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
                            _v7 = _p1._4;
                        f = _v5;
                        acc = _v6;
                        dict = _v7;
                        continue foldl;
                    }
                }
        });
    var _elm_lang$core$Dict$merge = F6(
        function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
            var stepState = F3(
                function (rKey, rValue, _p2) {
                    stepState:
                        while (true) {
                            var _p3 = _p2;
                            var _p9 = _p3._1;
                            var _p8 = _p3._0;
                            var _p4 = _p8;
                            if (_p4.ctor === '[]') {
                                return {
                                    ctor: '_Tuple2',
                                    _0: _p8,
                                    _1: A3(rightStep, rKey, rValue, _p9)
                                };
                            } else {
                                var _p7 = _p4._1;
                                var _p6 = _p4._0._1;
                                var _p5 = _p4._0._0;
                                if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
                                    var _v10 = rKey,
                                        _v11 = rValue,
                                        _v12 = {
                                            ctor: '_Tuple2',
                                            _0: _p7,
                                            _1: A3(leftStep, _p5, _p6, _p9)
                                        };
                                    rKey = _v10;
                                    rValue = _v11;
                                    _p2 = _v12;
                                    continue stepState;
                                } else {
                                    if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
                                        return {
                                            ctor: '_Tuple2',
                                            _0: _p8,
                                            _1: A3(rightStep, rKey, rValue, _p9)
                                        };
                                    } else {
                                        return {
                                            ctor: '_Tuple2',
                                            _0: _p7,
                                            _1: A4(bothStep, _p5, _p6, rValue, _p9)
                                        };
                                    }
                                }
                            }
                        }
                });
            var _p10 = A3(
                _elm_lang$core$Dict$foldl,
                stepState,
                {
                    ctor: '_Tuple2',
                    _0: _elm_lang$core$Dict$toList(leftDict),
                    _1: initialResult
                },
                rightDict);
            var leftovers = _p10._0;
            var intermediateResult = _p10._1;
            return A3(
                _elm_lang$core$List$foldl,
                F2(
                    function (_p11, result) {
                        var _p12 = _p11;
                        return A3(leftStep, _p12._0, _p12._1, result);
                    }),
                intermediateResult,
                leftovers);
        });
    var _elm_lang$core$Dict$reportRemBug = F4(
        function (msg, c, lgot, rgot) {
            return _elm_lang$core$Native_Debug.crash(
                _elm_lang$core$String$concat(
                    _elm_lang$core$Native_List.fromArray(
                        [
                            'Internal red-black tree invariant violated, expected ',
                            msg,
                            ' and got ',
                            _elm_lang$core$Basics$toString(c),
                            '/',
                            lgot,
                            '/',
                            rgot,
                            '\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
                        ])));
        });
    var _elm_lang$core$Dict$isBBlack = function (dict) {
        var _p13 = dict;
        _v14_2:
            do {
                if (_p13.ctor === 'RBNode_elm_builtin') {
                    if (_p13._0.ctor === 'BBlack') {
                        return true;
                    } else {
                        break _v14_2;
                    }
                } else {
                    if (_p13._0.ctor === 'LBBlack') {
                        return true;
                    } else {
                        break _v14_2;
                    }
                }
            } while (false);
        return false;
    };
    var _elm_lang$core$Dict$sizeHelp = F2(
        function (n, dict) {
            sizeHelp:
                while (true) {
                    var _p14 = dict;
                    if (_p14.ctor === 'RBEmpty_elm_builtin') {
                        return n;
                    } else {
                        var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
                            _v17 = _p14._3;
                        n = _v16;
                        dict = _v17;
                        continue sizeHelp;
                    }
                }
        });
    var _elm_lang$core$Dict$size = function (dict) {
        return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
    };
    var _elm_lang$core$Dict$get = F2(
        function (targetKey, dict) {
            get:
                while (true) {
                    var _p15 = dict;
                    if (_p15.ctor === 'RBEmpty_elm_builtin') {
                        return _elm_lang$core$Maybe$Nothing;
                    } else {
                        var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
                        switch (_p16.ctor) {
                            case 'LT':
                                var _v20 = targetKey,
                                    _v21 = _p15._3;
                                targetKey = _v20;
                                dict = _v21;
                                continue get;
                            case 'EQ':
                                return _elm_lang$core$Maybe$Just(_p15._2);
                            default:
                                var _v22 = targetKey,
                                    _v23 = _p15._4;
                                targetKey = _v22;
                                dict = _v23;
                                continue get;
                        }
                    }
                }
        });
    var _elm_lang$core$Dict$member = F2(
        function (key, dict) {
            var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
            if (_p17.ctor === 'Just') {
                return true;
            } else {
                return false;
            }
        });
    var _elm_lang$core$Dict$maxWithDefault = F3(
        function (k, v, r) {
            maxWithDefault:
                while (true) {
                    var _p18 = r;
                    if (_p18.ctor === 'RBEmpty_elm_builtin') {
                        return { ctor: '_Tuple2', _0: k, _1: v };
                    } else {
                        var _v26 = _p18._1,
                            _v27 = _p18._2,
                            _v28 = _p18._4;
                        k = _v26;
                        v = _v27;
                        r = _v28;
                        continue maxWithDefault;
                    }
                }
        });
    var _elm_lang$core$Dict$NBlack = { ctor: 'NBlack' };
    var _elm_lang$core$Dict$BBlack = { ctor: 'BBlack' };
    var _elm_lang$core$Dict$Black = { ctor: 'Black' };
    var _elm_lang$core$Dict$blackish = function (t) {
        var _p19 = t;
        if (_p19.ctor === 'RBNode_elm_builtin') {
            var _p20 = _p19._0;
            return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
        } else {
            return true;
        }
    };
    var _elm_lang$core$Dict$Red = { ctor: 'Red' };
    var _elm_lang$core$Dict$moreBlack = function (color) {
        var _p21 = color;
        switch (_p21.ctor) {
            case 'Black':
                return _elm_lang$core$Dict$BBlack;
            case 'Red':
                return _elm_lang$core$Dict$Black;
            case 'NBlack':
                return _elm_lang$core$Dict$Red;
            default:
                return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
        }
    };
    var _elm_lang$core$Dict$lessBlack = function (color) {
        var _p22 = color;
        switch (_p22.ctor) {
            case 'BBlack':
                return _elm_lang$core$Dict$Black;
            case 'Black':
                return _elm_lang$core$Dict$Red;
            case 'Red':
                return _elm_lang$core$Dict$NBlack;
            default:
                return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
        }
    };
    var _elm_lang$core$Dict$LBBlack = { ctor: 'LBBlack' };
    var _elm_lang$core$Dict$LBlack = { ctor: 'LBlack' };
    var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
        return { ctor: 'RBEmpty_elm_builtin', _0: a };
    };
    var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
    var _elm_lang$core$Dict$isEmpty = function (dict) {
        return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
    };
    var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
        function (a, b, c, d, e) {
            return { ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e };
        });
    var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
        var _p23 = dict;
        if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
            return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
        } else {
            return dict;
        }
    };
    var _elm_lang$core$Dict$lessBlackTree = function (dict) {
        var _p24 = dict;
        if (_p24.ctor === 'RBNode_elm_builtin') {
            return A5(
                _elm_lang$core$Dict$RBNode_elm_builtin,
                _elm_lang$core$Dict$lessBlack(_p24._0),
                _p24._1,
                _p24._2,
                _p24._3,
                _p24._4);
        } else {
            return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
        }
    };
    var _elm_lang$core$Dict$balancedTree = function (col) {
        return function (xk) {
            return function (xv) {
                return function (yk) {
                    return function (yv) {
                        return function (zk) {
                            return function (zv) {
                                return function (a) {
                                    return function (b) {
                                        return function (c) {
                                            return function (d) {
                                                return A5(
                                                    _elm_lang$core$Dict$RBNode_elm_builtin,
                                                    _elm_lang$core$Dict$lessBlack(col),
                                                    yk,
                                                    yv,
                                                    A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
                                                    A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var _elm_lang$core$Dict$blacken = function (t) {
        var _p25 = t;
        if (_p25.ctor === 'RBEmpty_elm_builtin') {
            return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
        } else {
            return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
        }
    };
    var _elm_lang$core$Dict$redden = function (t) {
        var _p26 = t;
        if (_p26.ctor === 'RBEmpty_elm_builtin') {
            return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
        } else {
            return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
        }
    };
    var _elm_lang$core$Dict$balanceHelp = function (tree) {
        var _p27 = tree;
        _v36_6:
            do {
                _v36_5:
                    do {
                        _v36_4:
                            do {
                                _v36_3:
                                    do {
                                        _v36_2:
                                            do {
                                                _v36_1:
                                                    do {
                                                        _v36_0:
                                                            do {
                                                                if (_p27.ctor === 'RBNode_elm_builtin') {
                                                                    if (_p27._3.ctor === 'RBNode_elm_builtin') {
                                                                        if (_p27._4.ctor === 'RBNode_elm_builtin') {
                                                                            switch (_p27._3._0.ctor) {
                                                                                case 'Red':
                                                                                    switch (_p27._4._0.ctor) {
                                                                                        case 'Red':
                                                                                            if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
                                                                                                break _v36_0;
                                                                                            } else {
                                                                                                if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
                                                                                                    break _v36_1;
                                                                                                } else {
                                                                                                    if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
                                                                                                        break _v36_2;
                                                                                                    } else {
                                                                                                        if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
                                                                                                            break _v36_3;
                                                                                                        } else {
                                                                                                            break _v36_6;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        case 'NBlack':
                                                                                            if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
                                                                                                break _v36_0;
                                                                                            } else {
                                                                                                if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
                                                                                                    break _v36_1;
                                                                                                } else {
                                                                                                    if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
                                                                                                        break _v36_4;
                                                                                                    } else {
                                                                                                        break _v36_6;
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        default:
                                                                                            if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
                                                                                                break _v36_0;
                                                                                            } else {
                                                                                                if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
                                                                                                    break _v36_1;
                                                                                                } else {
                                                                                                    break _v36_6;
                                                                                                }
                                                                                            }
                                                                                    }
                                                                                case 'NBlack':
                                                                                    switch (_p27._4._0.ctor) {
                                                                                        case 'Red':
                                                                                            if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
                                                                                                break _v36_2;
                                                                                            } else {
                                                                                                if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
                                                                                                    break _v36_3;
                                                                                                } else {
                                                                                                    if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
                                                                                                        break _v36_5;
                                                                                                    } else {
                                                                                                        break _v36_6;
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        case 'NBlack':
                                                                                            if (_p27._0.ctor === 'BBlack') {
                                                                                                if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
                                                                                                    break _v36_4;
                                                                                                } else {
                                                                                                    if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
                                                                                                        break _v36_5;
                                                                                                    } else {
                                                                                                        break _v36_6;
                                                                                                    }
                                                                                                }
                                                                                            } else {
                                                                                                break _v36_6;
                                                                                            }
                                                                                        default:
                                                                                            if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
                                                                                                break _v36_5;
                                                                                            } else {
                                                                                                break _v36_6;
                                                                                            }
                                                                                    }
                                                                                default:
                                                                                    switch (_p27._4._0.ctor) {
                                                                                        case 'Red':
                                                                                            if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
                                                                                                break _v36_2;
                                                                                            } else {
                                                                                                if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
                                                                                                    break _v36_3;
                                                                                                } else {
                                                                                                    break _v36_6;
                                                                                                }
                                                                                            }
                                                                                        case 'NBlack':
                                                                                            if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
                                                                                                break _v36_4;
                                                                                            } else {
                                                                                                break _v36_6;
                                                                                            }
                                                                                        default:
                                                                                            break _v36_6;
                                                                                    }
                                                                            }
                                                                        } else {
                                                                            switch (_p27._3._0.ctor) {
                                                                                case 'Red':
                                                                                    if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
                                                                                        break _v36_0;
                                                                                    } else {
                                                                                        if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
                                                                                            break _v36_1;
                                                                                        } else {
                                                                                            break _v36_6;
                                                                                        }
                                                                                    }
                                                                                case 'NBlack':
                                                                                    if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
                                                                                        break _v36_5;
                                                                                    } else {
                                                                                        break _v36_6;
                                                                                    }
                                                                                default:
                                                                                    break _v36_6;
                                                                            }
                                                                        }
                                                                    } else {
                                                                        if (_p27._4.ctor === 'RBNode_elm_builtin') {
                                                                            switch (_p27._4._0.ctor) {
                                                                                case 'Red':
                                                                                    if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
                                                                                        break _v36_2;
                                                                                    } else {
                                                                                        if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
                                                                                            break _v36_3;
                                                                                        } else {
                                                                                            break _v36_6;
                                                                                        }
                                                                                    }
                                                                                case 'NBlack':
                                                                                    if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
                                                                                        break _v36_4;
                                                                                    } else {
                                                                                        break _v36_6;
                                                                                    }
                                                                                default:
                                                                                    break _v36_6;
                                                                            }
                                                                        } else {
                                                                            break _v36_6;
                                                                        }
                                                                    }
                                                                } else {
                                                                    break _v36_6;
                                                                }
                                                            } while (false);
                                                        return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
                                                    } while (false);
                                                return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
                                            } while (false);
                                        return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
                                    } while (false);
                                return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
                            } while (false);
                        return A5(
                            _elm_lang$core$Dict$RBNode_elm_builtin,
                            _elm_lang$core$Dict$Black,
                            _p27._4._3._1,
                            _p27._4._3._2,
                            A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
                            A5(
                                _elm_lang$core$Dict$balance,
                                _elm_lang$core$Dict$Black,
                                _p27._4._1,
                                _p27._4._2,
                                _p27._4._3._4,
                                _elm_lang$core$Dict$redden(_p27._4._4)));
                    } while (false);
                return A5(
                    _elm_lang$core$Dict$RBNode_elm_builtin,
                    _elm_lang$core$Dict$Black,
                    _p27._3._4._1,
                    _p27._3._4._2,
                    A5(
                        _elm_lang$core$Dict$balance,
                        _elm_lang$core$Dict$Black,
                        _p27._3._1,
                        _p27._3._2,
                        _elm_lang$core$Dict$redden(_p27._3._3),
                        _p27._3._4._3),
                    A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
            } while (false);
        return tree;
    };
    var _elm_lang$core$Dict$balance = F5(
        function (c, k, v, l, r) {
            var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
            return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
        });
    var _elm_lang$core$Dict$bubble = F5(
        function (c, k, v, l, r) {
            return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
                _elm_lang$core$Dict$balance,
                _elm_lang$core$Dict$moreBlack(c),
                k,
                v,
                _elm_lang$core$Dict$lessBlackTree(l),
                _elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
        });
    var _elm_lang$core$Dict$removeMax = F5(
        function (c, k, v, l, r) {
            var _p28 = r;
            if (_p28.ctor === 'RBEmpty_elm_builtin') {
                return A3(_elm_lang$core$Dict$rem, c, l, r);
            } else {
                return A5(
                    _elm_lang$core$Dict$bubble,
                    c,
                    k,
                    v,
                    l,
                    A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
            }
        });
    var _elm_lang$core$Dict$rem = F3(
        function (c, l, r) {
            var _p29 = { ctor: '_Tuple2', _0: l, _1: r };
            if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
                if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
                    var _p30 = c;
                    switch (_p30.ctor) {
                        case 'Red':
                            return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
                        case 'Black':
                            return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
                        default:
                            return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
                    }
                } else {
                    var _p33 = _p29._1._0;
                    var _p32 = _p29._0._0;
                    var _p31 = { ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33 };
                    if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
                        return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
                    } else {
                        return A4(
                            _elm_lang$core$Dict$reportRemBug,
                            'Black/LBlack/Red',
                            c,
                            _elm_lang$core$Basics$toString(_p32),
                            _elm_lang$core$Basics$toString(_p33));
                    }
                }
            } else {
                if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
                    var _p36 = _p29._1._0;
                    var _p35 = _p29._0._0;
                    var _p34 = { ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36 };
                    if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
                        return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
                    } else {
                        return A4(
                            _elm_lang$core$Dict$reportRemBug,
                            'Black/Red/LBlack',
                            c,
                            _elm_lang$core$Basics$toString(_p35),
                            _elm_lang$core$Basics$toString(_p36));
                    }
                } else {
                    var _p40 = _p29._0._2;
                    var _p39 = _p29._0._4;
                    var _p38 = _p29._0._1;
                    var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
                    var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
                    var k = _p37._0;
                    var v = _p37._1;
                    return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
                }
            }
        });
    var _elm_lang$core$Dict$map = F2(
        function (f, dict) {
            var _p41 = dict;
            if (_p41.ctor === 'RBEmpty_elm_builtin') {
                return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
            } else {
                var _p42 = _p41._1;
                return A5(
                    _elm_lang$core$Dict$RBNode_elm_builtin,
                    _p41._0,
                    _p42,
                    A2(f, _p42, _p41._2),
                    A2(_elm_lang$core$Dict$map, f, _p41._3),
                    A2(_elm_lang$core$Dict$map, f, _p41._4));
            }
        });
    var _elm_lang$core$Dict$Same = { ctor: 'Same' };
    var _elm_lang$core$Dict$Remove = { ctor: 'Remove' };
    var _elm_lang$core$Dict$Insert = { ctor: 'Insert' };
    var _elm_lang$core$Dict$update = F3(
        function (k, alter, dict) {
            var up = function (dict) {
                var _p43 = dict;
                if (_p43.ctor === 'RBEmpty_elm_builtin') {
                    var _p44 = alter(_elm_lang$core$Maybe$Nothing);
                    if (_p44.ctor === 'Nothing') {
                        return { ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty };
                    } else {
                        return {
                            ctor: '_Tuple2',
                            _0: _elm_lang$core$Dict$Insert,
                            _1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
                        };
                    }
                } else {
                    var _p55 = _p43._2;
                    var _p54 = _p43._4;
                    var _p53 = _p43._3;
                    var _p52 = _p43._1;
                    var _p51 = _p43._0;
                    var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
                    switch (_p45.ctor) {
                        case 'EQ':
                            var _p46 = alter(
                                _elm_lang$core$Maybe$Just(_p55));
                            if (_p46.ctor === 'Nothing') {
                                return {
                                    ctor: '_Tuple2',
                                    _0: _elm_lang$core$Dict$Remove,
                                    _1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
                                };
                            } else {
                                return {
                                    ctor: '_Tuple2',
                                    _0: _elm_lang$core$Dict$Same,
                                    _1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
                                };
                            }
                        case 'LT':
                            var _p47 = up(_p53);
                            var flag = _p47._0;
                            var newLeft = _p47._1;
                            var _p48 = flag;
                            switch (_p48.ctor) {
                                case 'Same':
                                    return {
                                        ctor: '_Tuple2',
                                        _0: _elm_lang$core$Dict$Same,
                                        _1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
                                    };
                                case 'Insert':
                                    return {
                                        ctor: '_Tuple2',
                                        _0: _elm_lang$core$Dict$Insert,
                                        _1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
                                    };
                                default:
                                    return {
                                        ctor: '_Tuple2',
                                        _0: _elm_lang$core$Dict$Remove,
                                        _1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
                                    };
                            }
                        default:
                            var _p49 = up(_p54);
                            var flag = _p49._0;
                            var newRight = _p49._1;
                            var _p50 = flag;
                            switch (_p50.ctor) {
                                case 'Same':
                                    return {
                                        ctor: '_Tuple2',
                                        _0: _elm_lang$core$Dict$Same,
                                        _1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
                                    };
                                case 'Insert':
                                    return {
                                        ctor: '_Tuple2',
                                        _0: _elm_lang$core$Dict$Insert,
                                        _1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
                                    };
                                default:
                                    return {
                                        ctor: '_Tuple2',
                                        _0: _elm_lang$core$Dict$Remove,
                                        _1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
                                    };
                            }
                    }
                }
            };
            var _p56 = up(dict);
            var flag = _p56._0;
            var updatedDict = _p56._1;
            var _p57 = flag;
            switch (_p57.ctor) {
                case 'Same':
                    return updatedDict;
                case 'Insert':
                    return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
                default:
                    return _elm_lang$core$Dict$blacken(updatedDict);
            }
        });
    var _elm_lang$core$Dict$insert = F3(
        function (key, value, dict) {
            return A3(
                _elm_lang$core$Dict$update,
                key,
                _elm_lang$core$Basics$always(
                    _elm_lang$core$Maybe$Just(value)),
                dict);
        });
    var _elm_lang$core$Dict$singleton = F2(
        function (key, value) {
            return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
        });
    var _elm_lang$core$Dict$union = F2(
        function (t1, t2) {
            return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
        });
    var _elm_lang$core$Dict$filter = F2(
        function (predicate, dictionary) {
            var add = F3(
                function (key, value, dict) {
                    return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
                });
            return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
        });
    var _elm_lang$core$Dict$intersect = F2(
        function (t1, t2) {
            return A2(
                _elm_lang$core$Dict$filter,
                F2(
                    function (k, _p58) {
                        return A2(_elm_lang$core$Dict$member, k, t2);
                    }),
                t1);
        });
    var _elm_lang$core$Dict$partition = F2(
        function (predicate, dict) {
            var add = F3(
                function (key, value, _p59) {
                    var _p60 = _p59;
                    var _p62 = _p60._1;
                    var _p61 = _p60._0;
                    return A2(predicate, key, value) ? {
                        ctor: '_Tuple2',
                        _0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
                        _1: _p62
                    } : {
                        ctor: '_Tuple2',
                        _0: _p61,
                        _1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
                    };
                });
            return A3(
                _elm_lang$core$Dict$foldl,
                add,
                { ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty },
                dict);
        });
    var _elm_lang$core$Dict$fromList = function (assocs) {
        return A3(
            _elm_lang$core$List$foldl,
            F2(
                function (_p63, dict) {
                    var _p64 = _p63;
                    return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
                }),
            _elm_lang$core$Dict$empty,
            assocs);
    };
    var _elm_lang$core$Dict$remove = F2(
        function (key, dict) {
            return A3(
                _elm_lang$core$Dict$update,
                key,
                _elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
                dict);
        });
    var _elm_lang$core$Dict$diff = F2(
        function (t1, t2) {
            return A3(
                _elm_lang$core$Dict$foldl,
                F3(
                    function (k, v, t) {
                        return A2(_elm_lang$core$Dict$remove, k, t);
                    }),
                t1,
                t2);
        });

    var _Bogdanp$elm_combine$Combine_Char$crlf = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
            _elm_lang$core$Native_Utils.chr('\n'),
            _Bogdanp$elm_combine$Combine$regex('\r\n')),
        'expected crlf');
    var _Bogdanp$elm_combine$Combine_Char$satisfy = function (pred) {
        return _Bogdanp$elm_combine$Combine$primitive(
            function (cx) {
                var message = 'could not satisfy predicate';
                var _p0 = _elm_lang$core$String$uncons(cx.input);
                if (_p0.ctor === 'Just') {
                    var _p1 = _p0._0._0;
                    return pred(_p1) ? {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Ok(_p1),
                        _1: _elm_lang$core$Native_Utils.update(
                            cx,
                            { input: _p0._0._1, position: cx.position + 1 })
                    } : {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Err(
                            _elm_lang$core$Native_List.fromArray(
                                [message])),
                        _1: cx
                    };
                } else {
                    return {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Result$Err(
                            _elm_lang$core$Native_List.fromArray(
                                [message])),
                        _1: cx
                    };
                }
            });
    };
    var _Bogdanp$elm_combine$Combine_Char$char = function (c) {
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
            _Bogdanp$elm_combine$Combine_Char$satisfy(
                F2(
                    function (x, y) {
                        return _elm_lang$core$Native_Utils.eq(x, y);
                    })(c)),
            A2(
                _elm_lang$core$Basics_ops['++'],
                'expected ',
                _elm_lang$core$Basics$toString(c)));
    };
    var _Bogdanp$elm_combine$Combine_Char$anyChar = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(
            _elm_lang$core$Basics$always(true)),
        'expected any character');
    var _Bogdanp$elm_combine$Combine_Char$oneOf = function (cs) {
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
            _Bogdanp$elm_combine$Combine_Char$satisfy(
                A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
            A2(
                _elm_lang$core$Basics_ops['++'],
                'expected one of ',
                _elm_lang$core$Basics$toString(cs)));
    };
    var _Bogdanp$elm_combine$Combine_Char$noneOf = function (cs) {
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
            _Bogdanp$elm_combine$Combine_Char$satisfy(
                function (_p2) {
                    return _elm_lang$core$Basics$not(
                        A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2));
                }),
            A2(
                _elm_lang$core$Basics_ops['++'],
                'expected none of ',
                _elm_lang$core$Basics$toString(cs)));
    };
    var _Bogdanp$elm_combine$Combine_Char$space = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(
            F2(
                function (x, y) {
                    return _elm_lang$core$Native_Utils.eq(x, y);
                })(
                _elm_lang$core$Native_Utils.chr(' '))),
        'expected space');
    var _Bogdanp$elm_combine$Combine_Char$tab = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(
            F2(
                function (x, y) {
                    return _elm_lang$core$Native_Utils.eq(x, y);
                })(
                _elm_lang$core$Native_Utils.chr('\t'))),
        'expected tab');
    var _Bogdanp$elm_combine$Combine_Char$newline = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(
            F2(
                function (x, y) {
                    return _elm_lang$core$Native_Utils.eq(x, y);
                })(
                _elm_lang$core$Native_Utils.chr('\n'))),
        'expected newline');
    var _Bogdanp$elm_combine$Combine_Char$eol = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<|>'], _Bogdanp$elm_combine$Combine_Char$newline, _Bogdanp$elm_combine$Combine_Char$crlf);
    var _Bogdanp$elm_combine$Combine_Char$lower = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
        'expected a lowercase character');
    var _Bogdanp$elm_combine$Combine_Char$upper = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
        'expected an uppercase character');
    var _Bogdanp$elm_combine$Combine_Char$digit = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
        'expected a digit');
    var _Bogdanp$elm_combine$Combine_Char$octDigit = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
        'expected an octal digit');
    var _Bogdanp$elm_combine$Combine_Char$hexDigit = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        _Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
        'expected a hexadecimal digit');

    var _Bogdanp$elm_ast$Ast_Helpers$name = function (p) {
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
            A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _elm_lang$core$String$cons, p),
            _Bogdanp$elm_combine$Combine$regex('[a-zA-Z0-9-_\']*'));
    };
    var _Bogdanp$elm_ast$Ast_Helpers$upName = _Bogdanp$elm_ast$Ast_Helpers$name(_Bogdanp$elm_combine$Combine_Char$upper);
    var _Bogdanp$elm_ast$Ast_Helpers$spaces$ = _Bogdanp$elm_combine$Combine$regex('[ \t]+');
    var _Bogdanp$elm_ast$Ast_Helpers$spaces = _Bogdanp$elm_combine$Combine$regex('[ \t]*');
    var _Bogdanp$elm_ast$Ast_Helpers$initialSymbol = function (k) {
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
            _Bogdanp$elm_combine$Combine$string(k),
            _Bogdanp$elm_ast$Ast_Helpers$spaces);
    };
    var _Bogdanp$elm_ast$Ast_Helpers$whitespace = _Bogdanp$elm_combine$Combine$regex('[ \r\t\n]*');
    var _Bogdanp$elm_ast$Ast_Helpers$between$ = function (p) {
        return A2(_Bogdanp$elm_combine$Combine$between, p, p);
    };
    var _Bogdanp$elm_ast$Ast_Helpers$symbol = function (k) {
        return A2(
            _Bogdanp$elm_ast$Ast_Helpers$between$,
            _Bogdanp$elm_ast$Ast_Helpers$whitespace,
            _Bogdanp$elm_combine$Combine$string(k));
    };
    var _Bogdanp$elm_ast$Ast_Helpers$commaSeparated = function (p) {
        return A2(
            _Bogdanp$elm_combine$Combine$sepBy1,
            _Bogdanp$elm_combine$Combine$string(','),
            A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$whitespace, p));
    };
    var _Bogdanp$elm_ast$Ast_Helpers$commaSeparated$ = function (p) {
        return A2(
            _Bogdanp$elm_combine$Combine$sepBy,
            _Bogdanp$elm_combine$Combine$string(','),
            A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$whitespace, p));
    };
    var _Bogdanp$elm_ast$Ast_Helpers$moduleName = A2(
        _Bogdanp$elm_ast$Ast_Helpers$between$,
        _Bogdanp$elm_ast$Ast_Helpers$spaces,
        A2(
            _Bogdanp$elm_combine$Combine$sepBy1,
            _Bogdanp$elm_combine$Combine$string('.'),
            _Bogdanp$elm_ast$Ast_Helpers$upName));
    var _Bogdanp$elm_ast$Ast_Helpers$reservedOperators = _elm_lang$core$Native_List.fromArray(
        ['=', '.', '..', '->', '--', '|', ':']);
    var _Bogdanp$elm_ast$Ast_Helpers$symbolicOperator = A2(
        _Bogdanp$elm_combine$Combine$andThen,
        _Bogdanp$elm_combine$Combine$regex('[+-/*=.$<>:&|^?%#@~!]+'),
        function (n) {
            return A2(_elm_lang$core$List$member, n, _Bogdanp$elm_ast$Ast_Helpers$reservedOperators) ? _Bogdanp$elm_combine$Combine$fail(
                _elm_lang$core$Native_List.fromArray(
                    [
                        A2(
                        _elm_lang$core$Basics_ops['++'],
                        'operator \'',
                        A2(_elm_lang$core$Basics_ops['++'], n, '\' is reserved'))
                    ])) : _Bogdanp$elm_combine$Combine$succeed(n);
        });
    var _Bogdanp$elm_ast$Ast_Helpers$reserved = _elm_lang$core$Native_List.fromArray(
        ['module', 'where', 'import', 'as', 'exposing', 'type', 'alias', 'port', 'if', 'then', 'else', 'let', 'in', 'case', 'of']);
    var _Bogdanp$elm_ast$Ast_Helpers$loName = function () {
        var loName$ = A2(
            _Bogdanp$elm_combine$Combine$andThen,
            _Bogdanp$elm_ast$Ast_Helpers$name(_Bogdanp$elm_combine$Combine_Char$lower),
            function (n) {
                return A2(_elm_lang$core$List$member, n, _Bogdanp$elm_ast$Ast_Helpers$reserved) ? _Bogdanp$elm_combine$Combine$fail(
                    _elm_lang$core$Native_List.fromArray(
                        [
                            A2(
                            _elm_lang$core$Basics_ops['++'],
                            'name \'',
                            A2(_elm_lang$core$Basics_ops['++'], n, '\' is reserved'))
                        ])) : _Bogdanp$elm_combine$Combine$succeed(n);
            });
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<|>'],
            _Bogdanp$elm_combine$Combine$string('_'),
            loName$);
    }();
    var _Bogdanp$elm_ast$Ast_Helpers$operator = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<|>'],
        A2(
            _Bogdanp$elm_ast$Ast_Helpers$between$,
            _Bogdanp$elm_combine$Combine$string('`'),
            _Bogdanp$elm_ast$Ast_Helpers$loName),
        _Bogdanp$elm_ast$Ast_Helpers$symbolicOperator);
    var _Bogdanp$elm_ast$Ast_Helpers$functionName = _Bogdanp$elm_ast$Ast_Helpers$loName;
    var _Bogdanp$elm_ast$Ast_Helpers$sequence = function (ps) {
        var accumulate = F3(
            function (acc, ps, cx) {
                accumulate:
                    while (true) {
                        var _p0 = ps;
                        if (_p0.ctor === '[]') {
                            return {
                                ctor: '_Tuple2',
                                _0: _elm_lang$core$Result$Ok(
                                    _elm_lang$core$List$reverse(acc)),
                                _1: cx
                            };
                        } else {
                            var _p1 = A2(_Bogdanp$elm_combine$Combine$app, _p0._0, cx);
                            if (_p1._0.ctor === 'Ok') {
                                var _v2 = A2(_elm_lang$core$List_ops['::'], _p1._0._0, acc),
                                    _v3 = _p0._1,
                                    _v4 = _p1._1;
                                acc = _v2;
                                ps = _v3;
                                cx = _v4;
                                continue accumulate;
                            } else {
                                return {
                                    ctor: '_Tuple2',
                                    _0: _elm_lang$core$Result$Err(_p1._0._0),
                                    _1: _p1._1
                                };
                            }
                        }
                    }
            });
        return _Bogdanp$elm_combine$Combine$primitive(
            function (cx) {
                return A3(
                    accumulate,
                    _elm_lang$core$Native_List.fromArray(
                        []),
                    ps,
                    cx);
            });
    };

    var _Bogdanp$elm_ast$Ast_BinOp$R = { ctor: 'R' };
    var _Bogdanp$elm_ast$Ast_BinOp$L = { ctor: 'L' };
    var _Bogdanp$elm_ast$Ast_BinOp$operators = A3(
        _elm_lang$core$Dict$insert,
        '|>',
        { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$R, _1: 0 },
        A3(
            _elm_lang$core$Dict$insert,
            '<|',
            { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$R, _1: 0 },
            A3(
                _elm_lang$core$Dict$insert,
                '>>',
                { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 9 },
                A3(
                    _elm_lang$core$Dict$insert,
                    '<<',
                    { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 9 },
                    A3(
                        _elm_lang$core$Dict$insert,
                        '^',
                        { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 8 },
                        A3(
                            _elm_lang$core$Dict$insert,
                            'rem',
                            { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7 },
                            A3(
                                _elm_lang$core$Dict$insert,
                                '//',
                                { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7 },
                                A3(
                                    _elm_lang$core$Dict$insert,
                                    '%',
                                    { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7 },
                                    A3(
                                        _elm_lang$core$Dict$insert,
                                        '/',
                                        { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7 },
                                        A3(
                                            _elm_lang$core$Dict$insert,
                                            '*',
                                            { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 7 },
                                            A3(
                                                _elm_lang$core$Dict$insert,
                                                '-',
                                                { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 6 },
                                                A3(
                                                    _elm_lang$core$Dict$insert,
                                                    '+',
                                                    { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 6 },
                                                    A3(
                                                        _elm_lang$core$Dict$insert,
                                                        '++',
                                                        { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 5 },
                                                        A3(
                                                            _elm_lang$core$Dict$insert,
                                                            '<=',
                                                            { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4 },
                                                            A3(
                                                                _elm_lang$core$Dict$insert,
                                                                '>=',
                                                                { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4 },
                                                                A3(
                                                                    _elm_lang$core$Dict$insert,
                                                                    '>',
                                                                    { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4 },
                                                                    A3(
                                                                        _elm_lang$core$Dict$insert,
                                                                        '<',
                                                                        { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4 },
                                                                        A3(
                                                                            _elm_lang$core$Dict$insert,
                                                                            '/=',
                                                                            { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4 },
                                                                            A3(
                                                                                _elm_lang$core$Dict$insert,
                                                                                '==',
                                                                                { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 4 },
                                                                                A3(
                                                                                    _elm_lang$core$Dict$insert,
                                                                                    '&&',
                                                                                    { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 3 },
                                                                                    A3(
                                                                                        _elm_lang$core$Dict$insert,
                                                                                        '||',
                                                                                        { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 2 },
                                                                                        _elm_lang$core$Dict$empty)))))))))))))))))))));
    var _Bogdanp$elm_ast$Ast_BinOp$N = { ctor: 'N' };

    var _Bogdanp$elm_combine$Combine_Num$digit = function () {
        var toDigit = function (c) {
            return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
                _elm_lang$core$Native_Utils.chr('0'));
        };
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
            A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], toDigit, _Bogdanp$elm_combine$Combine_Char$digit),
            'expected a digit');
    }();
    var _Bogdanp$elm_combine$Combine_Num$sign = A2(
        _Bogdanp$elm_combine$Combine$optional,
        1,
        _Bogdanp$elm_combine$Combine$choice(
            _elm_lang$core$Native_List.fromArray(
                [
                    A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
                    1,
                    _Bogdanp$elm_combine$Combine$string('+')),
                    A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
                    -1,
                    _Bogdanp$elm_combine$Combine$string('-'))
                ])));
    var _Bogdanp$elm_combine$Combine_Num$unwrap = F2(
        function (f, s) {
            var _p0 = f(s);
            if (_p0.ctor === 'Ok') {
                return _p0._0;
            } else {
                return _elm_lang$core$Native_Utils.crashCase(
                    'Combine.Num',
                    {
                        start: { line: 19, column: 3 },
                        end: { line: 24, column: 73 }
                    },
                    _p0)(
                    A2(
                        _elm_lang$core$Basics_ops['++'],
                        'impossible state in Combine.Num.unwrap: ',
                        _elm_lang$core$Basics$toString(_p0._0)));
            }
        });
    var _Bogdanp$elm_combine$Combine_Num$toInt = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toInt);
    var _Bogdanp$elm_combine$Combine_Num$int = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        A2(
            _Bogdanp$elm_combine$Combine$andMap,
            A2(
                _Bogdanp$elm_combine$Combine$map,
                F2(
                    function (x, y) {
                        return x * y;
                    }),
                _Bogdanp$elm_combine$Combine_Num$sign),
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                _Bogdanp$elm_combine$Combine_Num$toInt,
                _Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)'))),
        'expected an integer');
    var _Bogdanp$elm_combine$Combine_Num$toFloat = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
    var _Bogdanp$elm_combine$Combine_Num$float = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<?>'],
        A2(
            _Bogdanp$elm_combine$Combine$andMap,
            A2(
                _Bogdanp$elm_combine$Combine$map,
                function (_p2) {
                    return F2(
                        function (x, y) {
                            return x * y;
                        })(
                        _elm_lang$core$Basics$toFloat(_p2));
                },
                _Bogdanp$elm_combine$Combine_Num$sign),
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                _Bogdanp$elm_combine$Combine_Num$toFloat,
                _Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)'))),
        'expected a float');

    var _elm_lang$core$Set$foldr = F3(
        function (f, b, _p0) {
            var _p1 = _p0;
            return A3(
                _elm_lang$core$Dict$foldr,
                F3(
                    function (k, _p2, b) {
                        return A2(f, k, b);
                    }),
                b,
                _p1._0);
        });
    var _elm_lang$core$Set$foldl = F3(
        function (f, b, _p3) {
            var _p4 = _p3;
            return A3(
                _elm_lang$core$Dict$foldl,
                F3(
                    function (k, _p5, b) {
                        return A2(f, k, b);
                    }),
                b,
                _p4._0);
        });
    var _elm_lang$core$Set$toList = function (_p6) {
        var _p7 = _p6;
        return _elm_lang$core$Dict$keys(_p7._0);
    };
    var _elm_lang$core$Set$size = function (_p8) {
        var _p9 = _p8;
        return _elm_lang$core$Dict$size(_p9._0);
    };
    var _elm_lang$core$Set$member = F2(
        function (k, _p10) {
            var _p11 = _p10;
            return A2(_elm_lang$core$Dict$member, k, _p11._0);
        });
    var _elm_lang$core$Set$isEmpty = function (_p12) {
        var _p13 = _p12;
        return _elm_lang$core$Dict$isEmpty(_p13._0);
    };
    var _elm_lang$core$Set$Set_elm_builtin = function (a) {
        return { ctor: 'Set_elm_builtin', _0: a };
    };
    var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
    var _elm_lang$core$Set$singleton = function (k) {
        return _elm_lang$core$Set$Set_elm_builtin(
            A2(
                _elm_lang$core$Dict$singleton,
                k,
                { ctor: '_Tuple0' }));
    };
    var _elm_lang$core$Set$insert = F2(
        function (k, _p14) {
            var _p15 = _p14;
            return _elm_lang$core$Set$Set_elm_builtin(
                A3(
                    _elm_lang$core$Dict$insert,
                    k,
                    { ctor: '_Tuple0' },
                    _p15._0));
        });
    var _elm_lang$core$Set$fromList = function (xs) {
        return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
    };
    var _elm_lang$core$Set$map = F2(
        function (f, s) {
            return _elm_lang$core$Set$fromList(
                A2(
                    _elm_lang$core$List$map,
                    f,
                    _elm_lang$core$Set$toList(s)));
        });
    var _elm_lang$core$Set$remove = F2(
        function (k, _p16) {
            var _p17 = _p16;
            return _elm_lang$core$Set$Set_elm_builtin(
                A2(_elm_lang$core$Dict$remove, k, _p17._0));
        });
    var _elm_lang$core$Set$union = F2(
        function (_p19, _p18) {
            var _p20 = _p19;
            var _p21 = _p18;
            return _elm_lang$core$Set$Set_elm_builtin(
                A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
        });
    var _elm_lang$core$Set$intersect = F2(
        function (_p23, _p22) {
            var _p24 = _p23;
            var _p25 = _p22;
            return _elm_lang$core$Set$Set_elm_builtin(
                A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
        });
    var _elm_lang$core$Set$diff = F2(
        function (_p27, _p26) {
            var _p28 = _p27;
            var _p29 = _p26;
            return _elm_lang$core$Set$Set_elm_builtin(
                A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
        });
    var _elm_lang$core$Set$filter = F2(
        function (p, _p30) {
            var _p31 = _p30;
            return _elm_lang$core$Set$Set_elm_builtin(
                A2(
                    _elm_lang$core$Dict$filter,
                    F2(
                        function (k, _p32) {
                            return p(k);
                        }),
                    _p31._0));
        });
    var _elm_lang$core$Set$partition = F2(
        function (p, _p33) {
            var _p34 = _p33;
            var _p35 = A2(
                _elm_lang$core$Dict$partition,
                F2(
                    function (k, _p36) {
                        return p(k);
                    }),
                _p34._0);
            var p1 = _p35._0;
            var p2 = _p35._1;
            return {
                ctor: '_Tuple2',
                _0: _elm_lang$core$Set$Set_elm_builtin(p1),
                _1: _elm_lang$core$Set$Set_elm_builtin(p2)
            };
        });

    var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
        function (size, step, xs) {
            var okayXs = _elm_lang$core$Native_Utils.cmp(
                _elm_lang$core$List$length(xs),
                0) > 0;
            var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
            var xs$ = A2(_elm_lang$core$List$drop, step, xs);
            var group = A2(_elm_lang$core$List$take, size, xs);
            return (okayArgs && okayXs) ? A2(
                _elm_lang$core$List_ops['::'],
                group,
                A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
                []);
        });
    var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
        function (size, xs) {
            return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
        });
    var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
        function (size, step, xs) {
            var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
            var xs$ = A2(_elm_lang$core$List$drop, step, xs);
            var group = A2(_elm_lang$core$List$take, size, xs);
            var okayLength = _elm_lang$core$Native_Utils.eq(
                size,
                _elm_lang$core$List$length(group));
            return (okayArgs && okayLength) ? A2(
                _elm_lang$core$List_ops['::'],
                group,
                A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
                []);
        });
    var _elm_community$list_extra$List_Extra$groupsOf = F2(
        function (size, xs) {
            return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
        });
    var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
        F5(
            function (v0, v1, v2, v3, v4) {
                return { ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4 };
            }));
    var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
        F4(
            function (v0, v1, v2, v3) {
                return { ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3 };
            }));
    var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
        F3(
            function (v0, v1, v2) {
                return { ctor: '_Tuple3', _0: v0, _1: v1, _2: v2 };
            }));
    var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
        F2(
            function (v0, v1) {
                return { ctor: '_Tuple2', _0: v0, _1: v1 };
            }));
    var _elm_community$list_extra$List_Extra$isPrefixOf = function (prefix) {
        return function (_p0) {
            return A2(
                _elm_lang$core$List$all,
                _elm_lang$core$Basics$identity,
                A3(
                    _elm_lang$core$List$map2,
                    F2(
                        function (x, y) {
                            return _elm_lang$core$Native_Utils.eq(x, y);
                        }),
                    prefix,
                    _p0));
        };
    };
    var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
        function (suffix, xs) {
            return A2(
                _elm_community$list_extra$List_Extra$isPrefixOf,
                _elm_lang$core$List$reverse(suffix),
                _elm_lang$core$List$reverse(xs));
        });
    var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
        var _p1 = xs;
        if (_p1.ctor === '[]') {
            return _elm_lang$core$Native_List.fromArray(
                []);
        } else {
            var _p5 = _p1._1;
            var _p4 = _p1._0;
            return A2(
                _elm_lang$core$List_ops['::'],
                {
                    ctor: '_Tuple3',
                    _0: _elm_lang$core$Native_List.fromArray(
                        []),
                    _1: _p4,
                    _2: _p5
                },
                A2(
                    _elm_lang$core$List$map,
                    function (_p2) {
                        var _p3 = _p2;
                        return {
                            ctor: '_Tuple3',
                            _0: A2(_elm_lang$core$List_ops['::'], _p4, _p3._0),
                            _1: _p3._1,
                            _2: _p3._2
                        };
                    },
                    _elm_community$list_extra$List_Extra$selectSplit(_p5)));
        }
    };
    var _elm_community$list_extra$List_Extra$select = function (xs) {
        var _p6 = xs;
        if (_p6.ctor === '[]') {
            return _elm_lang$core$Native_List.fromArray(
                []);
        } else {
            var _p10 = _p6._1;
            var _p9 = _p6._0;
            return A2(
                _elm_lang$core$List_ops['::'],
                { ctor: '_Tuple2', _0: _p9, _1: _p10 },
                A2(
                    _elm_lang$core$List$map,
                    function (_p7) {
                        var _p8 = _p7;
                        return {
                            ctor: '_Tuple2',
                            _0: _p8._0,
                            _1: A2(_elm_lang$core$List_ops['::'], _p9, _p8._1)
                        };
                    },
                    _elm_community$list_extra$List_Extra$select(_p10)));
        }
    };
    var _elm_community$list_extra$List_Extra$tailsHelp = F2(
        function (e, list) {
            var _p11 = list;
            if (_p11.ctor === '::') {
                var _p12 = _p11._0;
                return A2(
                    _elm_lang$core$List_ops['::'],
                    A2(_elm_lang$core$List_ops['::'], e, _p12),
                    A2(_elm_lang$core$List_ops['::'], _p12, _p11._1));
            } else {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            }
        });
    var _elm_community$list_extra$List_Extra$tails = A2(
        _elm_lang$core$List$foldr,
        _elm_community$list_extra$List_Extra$tailsHelp,
        _elm_lang$core$Native_List.fromArray(
            [
                _elm_lang$core$Native_List.fromArray(
                [])
            ]));
    var _elm_community$list_extra$List_Extra$isInfixOf = F2(
        function (infix, xs) {
            return A2(
                _elm_lang$core$List$any,
                _elm_community$list_extra$List_Extra$isPrefixOf(infix),
                _elm_community$list_extra$List_Extra$tails(xs));
        });
    var _elm_community$list_extra$List_Extra$inits = A2(
        _elm_lang$core$List$foldr,
        F2(
            function (e, acc) {
                return A2(
                    _elm_lang$core$List_ops['::'],
                    _elm_lang$core$Native_List.fromArray(
                        []),
                    A2(
                        _elm_lang$core$List$map,
                        F2(
                            function (x, y) {
                                return A2(_elm_lang$core$List_ops['::'], x, y);
                            })(e),
                        acc));
            }),
        _elm_lang$core$Native_List.fromArray(
            [
                _elm_lang$core$Native_List.fromArray(
                [])
            ]));
    var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
        function (cmp, xs$) {
            var _p13 = xs$;
            if (_p13.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                if (_p13._1.ctor === '[]') {
                    return _elm_lang$core$Native_List.fromArray(
                        [
                            _elm_lang$core$Native_List.fromArray(
                            [_p13._0])
                        ]);
                } else {
                    var _p15 = _p13._0;
                    var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
                    if (_p14.ctor === '::') {
                        return A2(cmp, _p15, _p13._1._0) ? A2(
                            _elm_lang$core$List_ops['::'],
                            A2(_elm_lang$core$List_ops['::'], _p15, _p14._0),
                            _p14._1) : A2(
                            _elm_lang$core$List_ops['::'],
                            _elm_lang$core$Native_List.fromArray(
                                [_p15]),
                            _p14);
                    } else {
                        return _elm_lang$core$Native_List.fromArray(
                            []);
                    }
                }
            }
        });
    var _elm_community$list_extra$List_Extra$stripPrefix = F2(
        function (prefix, xs) {
            var step = F2(
                function (e, m) {
                    var _p16 = m;
                    if (_p16.ctor === 'Nothing') {
                        return _elm_lang$core$Maybe$Nothing;
                    } else {
                        if (_p16._0.ctor === '[]') {
                            return _elm_lang$core$Maybe$Nothing;
                        } else {
                            return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
                        }
                    }
                });
            return A3(
                _elm_lang$core$List$foldl,
                step,
                _elm_lang$core$Maybe$Just(xs),
                prefix);
        });
    var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
        return A2(
            _elm_lang$core$List$foldr,
            F2(
                function (x, xs) {
                    return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? _elm_lang$core$Native_List.fromArray(
                        []) : A2(_elm_lang$core$List_ops['::'], x, xs);
                }),
            _elm_lang$core$Native_List.fromArray(
                []));
    };
    var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
        var step = F2(
            function (x, _p17) {
                var _p18 = _p17;
                var _p19 = _p18._0;
                return (p(x) && _p18._1) ? {
                    ctor: '_Tuple2',
                    _0: A2(_elm_lang$core$List_ops['::'], x, _p19),
                    _1: true
                } : { ctor: '_Tuple2', _0: _p19, _1: false };
            });
        return function (_p20) {
            return _elm_lang$core$Basics$fst(
                A3(
                    _elm_lang$core$List$foldr,
                    step,
                    {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$Native_List.fromArray(
                            []),
                        _1: true
                    },
                    _p20));
        };
    };
    var _elm_community$list_extra$List_Extra$splitAt = F2(
        function (n, xs) {
            return {
                ctor: '_Tuple2',
                _0: A2(_elm_lang$core$List$take, n, xs),
                _1: A2(_elm_lang$core$List$drop, n, xs)
            };
        });
    var _elm_community$list_extra$List_Extra$unfoldr = F2(
        function (f, seed) {
            var _p21 = f(seed);
            if (_p21.ctor === 'Nothing') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                return A2(
                    _elm_lang$core$List_ops['::'],
                    _p21._0._0,
                    A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p21._0._1));
            }
        });
    var _elm_community$list_extra$List_Extra$scanr1 = F2(
        function (f, xs$) {
            var _p22 = xs$;
            if (_p22.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                if (_p22._1.ctor === '[]') {
                    return _elm_lang$core$Native_List.fromArray(
                        [_p22._0]);
                } else {
                    var _p23 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p22._1);
                    if (_p23.ctor === '::') {
                        return A2(
                            _elm_lang$core$List_ops['::'],
                            A2(f, _p22._0, _p23._0),
                            _p23);
                    } else {
                        return _elm_lang$core$Native_List.fromArray(
                            []);
                    }
                }
            }
        });
    var _elm_community$list_extra$List_Extra$scanr = F3(
        function (f, acc, xs$) {
            var _p24 = xs$;
            if (_p24.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    [acc]);
            } else {
                var _p25 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p24._1);
                if (_p25.ctor === '::') {
                    return A2(
                        _elm_lang$core$List_ops['::'],
                        A2(f, _p24._0, _p25._0),
                        _p25);
                } else {
                    return _elm_lang$core$Native_List.fromArray(
                        []);
                }
            }
        });
    var _elm_community$list_extra$List_Extra$scanl1 = F2(
        function (f, xs$) {
            var _p26 = xs$;
            if (_p26.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                return A3(_elm_lang$core$List$scanl, f, _p26._0, _p26._1);
            }
        });
    var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
        function (func, acc, list) {
            var step = F2(
                function (x, _p27) {
                    var _p28 = _p27;
                    var _p29 = _p28._0;
                    return {
                        ctor: '_Tuple2',
                        _0: _p29 - 1,
                        _1: A3(func, _p29, x, _p28._1)
                    };
                });
            return _elm_lang$core$Basics$snd(
                A3(
                    _elm_lang$core$List$foldr,
                    step,
                    {
                        ctor: '_Tuple2',
                        _0: _elm_lang$core$List$length(list) - 1,
                        _1: acc
                    },
                    list));
        });
    var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
        function (func, acc, list) {
            var step = F2(
                function (x, _p30) {
                    var _p31 = _p30;
                    var _p32 = _p31._0;
                    return {
                        ctor: '_Tuple2',
                        _0: _p32 + 1,
                        _1: A3(func, _p32, x, _p31._1)
                    };
                });
            return _elm_lang$core$Basics$snd(
                A3(
                    _elm_lang$core$List$foldl,
                    step,
                    { ctor: '_Tuple2', _0: 0, _1: acc },
                    list));
        });
    var _elm_community$list_extra$List_Extra$foldr1 = F2(
        function (f, xs) {
            var mf = F2(
                function (x, m) {
                    return _elm_lang$core$Maybe$Just(
                        function () {
                            var _p33 = m;
                            if (_p33.ctor === 'Nothing') {
                                return x;
                            } else {
                                return A2(f, x, _p33._0);
                            }
                        }());
                });
            return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
        });
    var _elm_community$list_extra$List_Extra$foldl1 = F2(
        function (f, xs) {
            var mf = F2(
                function (x, m) {
                    return _elm_lang$core$Maybe$Just(
                        function () {
                            var _p34 = m;
                            if (_p34.ctor === 'Nothing') {
                                return x;
                            } else {
                                return A2(f, _p34._0, x);
                            }
                        }());
                });
            return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
        });
    var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
        function (l1, l2, acc) {
            interweaveHelp:
                while (true) {
                    var _p35 = { ctor: '_Tuple2', _0: l1, _1: l2 };
                    _v19_1:
                        do {
                            if (_p35._0.ctor === '::') {
                                if (_p35._1.ctor === '::') {
                                    var _v20 = _p35._0._1,
                                        _v21 = _p35._1._1,
                                        _v22 = A2(
                                        _elm_lang$core$Basics_ops['++'],
                                        acc,
                                        _elm_lang$core$Native_List.fromArray(
                                            [_p35._0._0, _p35._1._0]));
                                    l1 = _v20;
                                    l2 = _v21;
                                    acc = _v22;
                                    continue interweaveHelp;
                                } else {
                                    break _v19_1;
                                }
                            } else {
                                if (_p35._1.ctor === '[]') {
                                    break _v19_1;
                                } else {
                                    return A2(_elm_lang$core$Basics_ops['++'], acc, _p35._1);
                                }
                            }
                        } while (false);
                    return A2(_elm_lang$core$Basics_ops['++'], acc, _p35._0);
                }
        });
    var _elm_community$list_extra$List_Extra$interweave = F2(
        function (l1, l2) {
            return A3(
                _elm_community$list_extra$List_Extra$interweaveHelp,
                l1,
                l2,
                _elm_lang$core$Native_List.fromArray(
                    []));
        });
    var _elm_community$list_extra$List_Extra$permutations = function (xs$) {
        var _p36 = xs$;
        if (_p36.ctor === '[]') {
            return _elm_lang$core$Native_List.fromArray(
                [
                    _elm_lang$core$Native_List.fromArray(
                    [])
                ]);
        } else {
            var f = function (_p37) {
                var _p38 = _p37;
                return A2(
                    _elm_lang$core$List$map,
                    F2(
                        function (x, y) {
                            return A2(_elm_lang$core$List_ops['::'], x, y);
                        })(_p38._0),
                    _elm_community$list_extra$List_Extra$permutations(_p38._1));
            };
            return A2(
                _elm_lang$core$List$concatMap,
                f,
                _elm_community$list_extra$List_Extra$select(_p36));
        }
    };
    var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
        function (permut, xs) {
            return A2(
                _elm_lang$core$List$member,
                permut,
                _elm_community$list_extra$List_Extra$permutations(xs));
        });
    var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
        var _p39 = xs;
        if (_p39.ctor === '[]') {
            return _elm_lang$core$Native_List.fromArray(
                []);
        } else {
            var _p40 = _p39._0;
            var f = F2(
                function (ys, r) {
                    return A2(
                        _elm_lang$core$List_ops['::'],
                        ys,
                        A2(
                            _elm_lang$core$List_ops['::'],
                            A2(_elm_lang$core$List_ops['::'], _p40, ys),
                            r));
                });
            return A2(
                _elm_lang$core$List_ops['::'],
                _elm_lang$core$Native_List.fromArray(
                    [_p40]),
                A3(
                    _elm_lang$core$List$foldr,
                    f,
                    _elm_lang$core$Native_List.fromArray(
                        []),
                    _elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p39._1)));
        }
    };
    var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
        return A2(
            _elm_lang$core$List_ops['::'],
            _elm_lang$core$Native_List.fromArray(
                []),
            _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs));
    };
    var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
        function (subseq, xs) {
            return A2(
                _elm_lang$core$List$member,
                subseq,
                _elm_community$list_extra$List_Extra$subsequences(xs));
        });
    var _elm_community$list_extra$List_Extra$transpose = function (ll) {
        transpose:
            while (true) {
                var _p41 = ll;
                if (_p41.ctor === '[]') {
                    return _elm_lang$core$Native_List.fromArray(
                        []);
                } else {
                    if (_p41._0.ctor === '[]') {
                        var _v27 = _p41._1;
                        ll = _v27;
                        continue transpose;
                    } else {
                        var _p42 = _p41._1;
                        var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p42);
                        var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p42);
                        return A2(
                            _elm_lang$core$List_ops['::'],
                            A2(_elm_lang$core$List_ops['::'], _p41._0._0, heads),
                            _elm_community$list_extra$List_Extra$transpose(
                                A2(_elm_lang$core$List_ops['::'], _p41._0._1, tails)));
                    }
                }
            }
    };
    var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
        return function (_p43) {
            return _elm_lang$core$List$concat(
                A2(_elm_lang$core$List$intersperse, xs, _p43));
        };
    };
    var _elm_community$list_extra$List_Extra$filterNot = F2(
        function (pred, list) {
            return A2(
                _elm_lang$core$List$filter,
                function (_p44) {
                    return _elm_lang$core$Basics$not(
                        pred(_p44));
                },
                list);
        });
    var _elm_community$list_extra$List_Extra$removeAt = F2(
        function (index, l) {
            if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
                return l;
            } else {
                var tail = _elm_lang$core$List$tail(
                    A2(_elm_lang$core$List$drop, index, l));
                var head = A2(_elm_lang$core$List$take, index, l);
                var _p45 = tail;
                if (_p45.ctor === 'Nothing') {
                    return l;
                } else {
                    return A2(_elm_lang$core$List$append, head, _p45._0);
                }
            }
        });
    var _elm_community$list_extra$List_Extra$singleton = function (x) {
        return _elm_lang$core$Native_List.fromArray(
            [x]);
    };
    var _elm_community$list_extra$List_Extra$setAt = F3(
        function (index, value, l) {
            if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
                return _elm_lang$core$Maybe$Nothing;
            } else {
                var tail = _elm_lang$core$List$tail(
                    A2(_elm_lang$core$List$drop, index, l));
                var head = A2(_elm_lang$core$List$take, index, l);
                var _p46 = tail;
                if (_p46.ctor === 'Nothing') {
                    return _elm_lang$core$Maybe$Nothing;
                } else {
                    return _elm_lang$core$Maybe$Just(
                        A2(
                            _elm_lang$core$List$append,
                            head,
                            A2(_elm_lang$core$List_ops['::'], value, _p46._0)));
                }
            }
        });
    var _elm_community$list_extra$List_Extra$remove = F2(
        function (x, xs) {
            var _p47 = xs;
            if (_p47.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                var _p49 = _p47._1;
                var _p48 = _p47._0;
                return _elm_lang$core$Native_Utils.eq(x, _p48) ? _p49 : A2(
                    _elm_lang$core$List_ops['::'],
                    _p48,
                    A2(_elm_community$list_extra$List_Extra$remove, x, _p49));
            }
        });
    var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
        function (predicate, update, list) {
            return A2(
                _elm_lang$core$List$indexedMap,
                F2(
                    function (i, x) {
                        return predicate(i) ? update(x) : x;
                    }),
                list);
        });
    var _elm_community$list_extra$List_Extra$updateAt = F3(
        function (index, update, list) {
            return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
                index,
                _elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
                A3(
                    _elm_community$list_extra$List_Extra$updateIfIndex,
                    F2(
                        function (x, y) {
                            return _elm_lang$core$Native_Utils.eq(x, y);
                        })(index),
                    update,
                    list));
        });
    var _elm_community$list_extra$List_Extra$updateIf = F3(
        function (predicate, update, list) {
            return A2(
                _elm_lang$core$List$map,
                function (item) {
                    return predicate(item) ? update(item) : item;
                },
                list);
        });
    var _elm_community$list_extra$List_Extra$replaceIf = F3(
        function (predicate, replacement, list) {
            return A3(
                _elm_community$list_extra$List_Extra$updateIf,
                predicate,
                _elm_lang$core$Basics$always(replacement),
                list);
        });
    var _elm_community$list_extra$List_Extra$findIndices = function (p) {
        return function (_p50) {
            return A2(
                _elm_lang$core$List$map,
                _elm_lang$core$Basics$fst,
                A2(
                    _elm_lang$core$List$filter,
                    function (_p51) {
                        var _p52 = _p51;
                        return p(_p52._1);
                    },
                    A2(
                        _elm_lang$core$List$indexedMap,
                        F2(
                            function (v0, v1) {
                                return { ctor: '_Tuple2', _0: v0, _1: v1 };
                            }),
                        _p50)));
        };
    };
    var _elm_community$list_extra$List_Extra$findIndex = function (p) {
        return function (_p53) {
            return _elm_lang$core$List$head(
                A2(_elm_community$list_extra$List_Extra$findIndices, p, _p53));
        };
    };
    var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
        return _elm_community$list_extra$List_Extra$findIndices(
            F2(
                function (x, y) {
                    return _elm_lang$core$Native_Utils.eq(x, y);
                })(x));
    };
    var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
        return _elm_community$list_extra$List_Extra$findIndex(
            F2(
                function (x, y) {
                    return _elm_lang$core$Native_Utils.eq(x, y);
                })(x));
    };
    var _elm_community$list_extra$List_Extra$find = F2(
        function (predicate, list) {
            find:
                while (true) {
                    var _p54 = list;
                    if (_p54.ctor === '[]') {
                        return _elm_lang$core$Maybe$Nothing;
                    } else {
                        var _p55 = _p54._0;
                        if (predicate(_p55)) {
                            return _elm_lang$core$Maybe$Just(_p55);
                        } else {
                            var _v33 = predicate,
                                _v34 = _p54._1;
                            predicate = _v33;
                            list = _v34;
                            continue find;
                        }
                    }
                }
        });
    var _elm_community$list_extra$List_Extra$notMember = function (x) {
        return function (_p56) {
            return _elm_lang$core$Basics$not(
                A2(_elm_lang$core$List$member, x, _p56));
        };
    };
    var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$Basics$flip(_elm_lang$core$List$concatMap);
    var _elm_community$list_extra$List_Extra$lift2 = F3(
        function (f, la, lb) {
            return A2(
                _elm_community$list_extra$List_Extra$andThen,
                la,
                function (a) {
                    return A2(
                        _elm_community$list_extra$List_Extra$andThen,
                        lb,
                        function (b) {
                            return _elm_lang$core$Native_List.fromArray(
                                [
                                    A2(f, a, b)
                                ]);
                        });
                });
        });
    var _elm_community$list_extra$List_Extra$lift3 = F4(
        function (f, la, lb, lc) {
            return A2(
                _elm_community$list_extra$List_Extra$andThen,
                la,
                function (a) {
                    return A2(
                        _elm_community$list_extra$List_Extra$andThen,
                        lb,
                        function (b) {
                            return A2(
                                _elm_community$list_extra$List_Extra$andThen,
                                lc,
                                function (c) {
                                    return _elm_lang$core$Native_List.fromArray(
                                        [
                                            A3(f, a, b, c)
                                        ]);
                                });
                        });
                });
        });
    var _elm_community$list_extra$List_Extra$lift4 = F5(
        function (f, la, lb, lc, ld) {
            return A2(
                _elm_community$list_extra$List_Extra$andThen,
                la,
                function (a) {
                    return A2(
                        _elm_community$list_extra$List_Extra$andThen,
                        lb,
                        function (b) {
                            return A2(
                                _elm_community$list_extra$List_Extra$andThen,
                                lc,
                                function (c) {
                                    return A2(
                                        _elm_community$list_extra$List_Extra$andThen,
                                        ld,
                                        function (d) {
                                            return _elm_lang$core$Native_List.fromArray(
                                                [
                                                    A4(f, a, b, c, d)
                                                ]);
                                        });
                                });
                        });
                });
        });
    var _elm_community$list_extra$List_Extra$andMap = F2(
        function (fl, l) {
            return A3(
                _elm_lang$core$List$map2,
                F2(
                    function (x, y) {
                        return x(y);
                    }),
                fl,
                l);
        });
    var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
        function (f, existing, remaining) {
            uniqueHelp:
                while (true) {
                    var _p57 = remaining;
                    if (_p57.ctor === '[]') {
                        return _elm_lang$core$Native_List.fromArray(
                            []);
                    } else {
                        var _p59 = _p57._1;
                        var _p58 = _p57._0;
                        var computedFirst = f(_p58);
                        if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
                            var _v36 = f,
                                _v37 = existing,
                                _v38 = _p59;
                            f = _v36;
                            existing = _v37;
                            remaining = _v38;
                            continue uniqueHelp;
                        } else {
                            return A2(
                                _elm_lang$core$List_ops['::'],
                                _p58,
                                A3(
                                    _elm_community$list_extra$List_Extra$uniqueHelp,
                                    f,
                                    A2(_elm_lang$core$Set$insert, computedFirst, existing),
                                    _p59));
                        }
                    }
                }
        });
    var _elm_community$list_extra$List_Extra$uniqueBy = F2(
        function (f, list) {
            return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
        });
    var _elm_community$list_extra$List_Extra$unique = function (list) {
        return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
    };
    var _elm_community$list_extra$List_Extra$dropWhile = F2(
        function (predicate, list) {
            dropWhile:
                while (true) {
                    var _p60 = list;
                    if (_p60.ctor === '[]') {
                        return _elm_lang$core$Native_List.fromArray(
                            []);
                    } else {
                        if (predicate(_p60._0)) {
                            var _v40 = predicate,
                                _v41 = _p60._1;
                            predicate = _v40;
                            list = _v41;
                            continue dropWhile;
                        } else {
                            return list;
                        }
                    }
                }
        });
    var _elm_community$list_extra$List_Extra$takeWhile = F2(
        function (predicate, list) {
            var _p61 = list;
            if (_p61.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                var _p62 = _p61._0;
                return predicate(_p62) ? A2(
                    _elm_lang$core$List_ops['::'],
                    _p62,
                    A2(_elm_community$list_extra$List_Extra$takeWhile, predicate, _p61._1)) : _elm_lang$core$Native_List.fromArray(
                    []);
            }
        });
    var _elm_community$list_extra$List_Extra$span = F2(
        function (p, xs) {
            return {
                ctor: '_Tuple2',
                _0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
                _1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
            };
        });
    var _elm_community$list_extra$List_Extra$break = function (p) {
        return _elm_community$list_extra$List_Extra$span(
            function (_p63) {
                return _elm_lang$core$Basics$not(
                    p(_p63));
            });
    };
    var _elm_community$list_extra$List_Extra$groupWhile = F2(
        function (eq, xs$) {
            var _p64 = xs$;
            if (_p64.ctor === '[]') {
                return _elm_lang$core$Native_List.fromArray(
                    []);
            } else {
                var _p66 = _p64._0;
                var _p65 = A2(
                    _elm_community$list_extra$List_Extra$span,
                    eq(_p66),
                    _p64._1);
                var ys = _p65._0;
                var zs = _p65._1;
                return A2(
                    _elm_lang$core$List_ops['::'],
                    A2(_elm_lang$core$List_ops['::'], _p66, ys),
                    A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs));
            }
        });
    var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
        F2(
            function (x, y) {
                return _elm_lang$core$Native_Utils.eq(x, y);
            }));
    var _elm_community$list_extra$List_Extra$minimumBy = F2(
        function (f, ls) {
            var minBy = F2(
                function (x, _p67) {
                    var _p68 = _p67;
                    var _p69 = _p68._1;
                    var fx = f(x);
                    return (_elm_lang$core$Native_Utils.cmp(fx, _p69) < 0) ? { ctor: '_Tuple2', _0: x, _1: fx } : { ctor: '_Tuple2', _0: _p68._0, _1: _p69 };
                });
            var _p70 = ls;
            if (_p70.ctor === '::') {
                if (_p70._1.ctor === '[]') {
                    return _elm_lang$core$Maybe$Just(_p70._0);
                } else {
                    var _p71 = _p70._0;
                    return _elm_lang$core$Maybe$Just(
                        _elm_lang$core$Basics$fst(
                            A3(
                                _elm_lang$core$List$foldl,
                                minBy,
                                {
                                    ctor: '_Tuple2',
                                    _0: _p71,
                                    _1: f(_p71)
                                },
                                _p70._1)));
                }
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });
    var _elm_community$list_extra$List_Extra$maximumBy = F2(
        function (f, ls) {
            var maxBy = F2(
                function (x, _p72) {
                    var _p73 = _p72;
                    var _p74 = _p73._1;
                    var fx = f(x);
                    return (_elm_lang$core$Native_Utils.cmp(fx, _p74) > 0) ? { ctor: '_Tuple2', _0: x, _1: fx } : { ctor: '_Tuple2', _0: _p73._0, _1: _p74 };
                });
            var _p75 = ls;
            if (_p75.ctor === '::') {
                if (_p75._1.ctor === '[]') {
                    return _elm_lang$core$Maybe$Just(_p75._0);
                } else {
                    var _p76 = _p75._0;
                    return _elm_lang$core$Maybe$Just(
                        _elm_lang$core$Basics$fst(
                            A3(
                                _elm_lang$core$List$foldl,
                                maxBy,
                                {
                                    ctor: '_Tuple2',
                                    _0: _p76,
                                    _1: f(_p76)
                                },
                                _p75._1)));
                }
            } else {
                return _elm_lang$core$Maybe$Nothing;
            }
        });
    var _elm_community$list_extra$List_Extra$uncons = function (xs) {
        var _p77 = xs;
        if (_p77.ctor === '[]') {
            return _elm_lang$core$Maybe$Nothing;
        } else {
            return _elm_lang$core$Maybe$Just(
                { ctor: '_Tuple2', _0: _p77._0, _1: _p77._1 });
        }
    };
    var _elm_community$list_extra$List_Extra$iterate = F2(
        function (f, x) {
            var _p78 = f(x);
            if (_p78.ctor === 'Just') {
                return A2(
                    _elm_lang$core$List_ops['::'],
                    x,
                    A2(_elm_community$list_extra$List_Extra$iterate, f, _p78._0));
            } else {
                return _elm_lang$core$Native_List.fromArray(
                    [x]);
            }
        });
    var _elm_community$list_extra$List_Extra$getAt = F2(
        function (idx, xs) {
            return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
                A2(_elm_lang$core$List$drop, idx, xs));
        });
    var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
    _elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
    var _elm_community$list_extra$List_Extra$init = function () {
        var maybe = F2(
            function (d, f) {
                return function (_p79) {
                    return A2(
                        _elm_lang$core$Maybe$withDefault,
                        d,
                        A2(_elm_lang$core$Maybe$map, f, _p79));
                };
            });
        return A2(
            _elm_lang$core$List$foldr,
            function (_p80) {
                return A2(
                    F2(
                        function (x, y) {
                            return function (_p81) {
                                return x(
                                    y(_p81));
                            };
                        }),
                    _elm_lang$core$Maybe$Just,
                    A2(
                        maybe,
                        _elm_lang$core$Native_List.fromArray(
                            []),
                        F2(
                            function (x, y) {
                                return A2(_elm_lang$core$List_ops['::'], x, y);
                            })(_p80)));
            },
            _elm_lang$core$Maybe$Nothing);
    }();
    var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
        _elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

    var _Bogdanp$elm_ast$Ast_Expression$op = F2(
        function (ops, n) {
            return A2(
                _elm_lang$core$Maybe$withDefault,
                { ctor: '_Tuple2', _0: _Bogdanp$elm_ast$Ast_BinOp$L, _1: 9 },
                A2(_elm_lang$core$Dict$get, n, ops));
        });
    var _Bogdanp$elm_ast$Ast_Expression$assoc = F2(
        function (ops, n) {
            return _elm_lang$core$Basics$fst(
                A2(_Bogdanp$elm_ast$Ast_Expression$op, ops, n));
        });
    var _Bogdanp$elm_ast$Ast_Expression$level = F2(
        function (ops, n) {
            return _elm_lang$core$Basics$snd(
                A2(_Bogdanp$elm_ast$Ast_Expression$op, ops, n));
        });
    var _Bogdanp$elm_ast$Ast_Expression$hasLevel = F3(
        function (ops, l, _p0) {
            var _p1 = _p0;
            return _elm_lang$core$Native_Utils.eq(
                A2(_Bogdanp$elm_ast$Ast_Expression$level, ops, _p1._0),
                l);
        });
    var _Bogdanp$elm_ast$Ast_Expression$findAssoc = F3(
        function (ops, l, eops) {
            var lops = A2(
                _elm_lang$core$List$filter,
                A2(_Bogdanp$elm_ast$Ast_Expression$hasLevel, ops, l),
                eops);
            var assocs = A2(
                _elm_lang$core$List$map,
                function (_p2) {
                    return A2(
                        _Bogdanp$elm_ast$Ast_Expression$assoc,
                        ops,
                        _elm_lang$core$Basics$fst(_p2));
                },
                lops);
            var error = function (issue) {
                var operators = A2(
                    _elm_lang$core$String$join,
                    ' and ',
                    A2(_elm_lang$core$List$map, _elm_lang$core$Basics$fst, lops));
                return A2(
                    _elm_lang$core$Basics_ops['++'],
                    'conflicting ',
                    A2(
                        _elm_lang$core$Basics_ops['++'],
                        issue,
                        A2(_elm_lang$core$Basics_ops['++'], ' for operators ', operators)));
            };
            if (A2(
                _elm_lang$core$List$all,
                F2(
                    function (x, y) {
                        return _elm_lang$core$Native_Utils.eq(x, y);
            })(_Bogdanp$elm_ast$Ast_BinOp$L),
                assocs)) {
                return _Bogdanp$elm_combine$Combine$succeed(_Bogdanp$elm_ast$Ast_BinOp$L);
            } else {
                if (A2(
                    _elm_lang$core$List$all,
                    F2(
                        function (x, y) {
                            return _elm_lang$core$Native_Utils.eq(x, y);
                })(_Bogdanp$elm_ast$Ast_BinOp$R),
                    assocs)) {
                    return _Bogdanp$elm_combine$Combine$succeed(_Bogdanp$elm_ast$Ast_BinOp$R);
                } else {
                    if (A2(
                        _elm_lang$core$List$all,
                        F2(
                            function (x, y) {
                                return _elm_lang$core$Native_Utils.eq(x, y);
                    })(_Bogdanp$elm_ast$Ast_BinOp$N),
                        assocs)) {
                        var _p3 = assocs;
                        if ((_p3.ctor === '::') && (_p3._1.ctor === '[]')) {
                            return _Bogdanp$elm_combine$Combine$succeed(_Bogdanp$elm_ast$Ast_BinOp$N);
                        } else {
                            return _Bogdanp$elm_combine$Combine$fail(
                                _elm_lang$core$Native_List.fromArray(
                                    [
                                        error('precedence')
                                    ]));
                        }
                    } else {
                        return _Bogdanp$elm_combine$Combine$fail(
                            _elm_lang$core$Native_List.fromArray(
                                [
                                    error('associativity')
                                ]));
                    }
                }
            }
        });
    var _Bogdanp$elm_ast$Ast_Expression$Stop = function (a) {
        return { ctor: 'Stop', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$Cont = function (a) {
        return { ctor: 'Cont', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$BinOp = F3(
        function (a, b, c) {
            return { ctor: 'BinOp', _0: a, _1: b, _2: c };
        });
    var _Bogdanp$elm_ast$Ast_Expression$Application = F2(
        function (a, b) {
            return { ctor: 'Application', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Expression$Lambda = F2(
        function (a, b) {
            return { ctor: 'Lambda', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Expression$Case = F2(
        function (a, b) {
            return { ctor: 'Case', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Expression$Let = F2(
        function (a, b) {
            return { ctor: 'Let', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Expression$If = F3(
        function (a, b, c) {
            return { ctor: 'If', _0: a, _1: b, _2: c };
        });
    var _Bogdanp$elm_ast$Ast_Expression$RecordUpdate = F2(
        function (a, b) {
            return { ctor: 'RecordUpdate', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Expression$Record = function (a) {
        return { ctor: 'Record', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$Access = F2(
        function (a, b) {
            return { ctor: 'Access', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Expression$List = function (a) {
        return { ctor: 'List', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$Range = F2(
        function (a, b) {
            return { ctor: 'Range', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Expression$Variable = function (a) {
        return { ctor: 'Variable', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$variable = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
        _Bogdanp$elm_ast$Ast_Expression$Variable,
        _Bogdanp$elm_combine$Combine$choice(
            _elm_lang$core$Native_List.fromArray(
                [
                    A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _elm_community$list_extra$List_Extra$singleton, _Bogdanp$elm_ast$Ast_Helpers$loName),
                    A2(
                    _Bogdanp$elm_combine$Combine$sepBy1,
                    _Bogdanp$elm_combine$Combine$string('.'),
                    _Bogdanp$elm_ast$Ast_Helpers$upName)
                ])));
    var _Bogdanp$elm_ast$Ast_Expression$access = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _Bogdanp$elm_ast$Ast_Expression$Access, _Bogdanp$elm_ast$Ast_Expression$variable),
        _Bogdanp$elm_combine$Combine$many1(
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_combine$Combine$string('.'),
                _Bogdanp$elm_ast$Ast_Helpers$loName)));
    var _Bogdanp$elm_ast$Ast_Expression$joinL = F2(
        function (es, ops) {
            joinL:
                while (true) {
                    var _p4 = { ctor: '_Tuple2', _0: es, _1: ops };
                    _v2_2:
                        do {
                            if ((_p4.ctor === '_Tuple2') && (_p4._0.ctor === '::')) {
                                if (_p4._0._1.ctor === '[]') {
                                    if (_p4._1.ctor === '[]') {
                                        return _Bogdanp$elm_combine$Combine$succeed(_p4._0._0);
                                    } else {
                                        break _v2_2;
                                    }
                                } else {
                                    if (_p4._1.ctor === '::') {
                                        var _v3 = A2(
                                            _elm_lang$core$List_ops['::'],
                                            A3(
                                                _Bogdanp$elm_ast$Ast_Expression$BinOp,
                                                _Bogdanp$elm_ast$Ast_Expression$Variable(
                                                    _elm_lang$core$Native_List.fromArray(
                                                        [_p4._1._0])),
                                                _p4._0._0,
                                                _p4._0._1._0),
                                            _p4._0._1._1),
                                            _v4 = _p4._1._1;
                                        es = _v3;
                                        ops = _v4;
                                        continue joinL;
                                    } else {
                                        break _v2_2;
                                    }
                                }
                            } else {
                                break _v2_2;
                            }
                        } while (false);
                    return _Bogdanp$elm_combine$Combine$fail(
                        _elm_lang$core$Native_List.fromArray(
                            []));
                }
        });
    var _Bogdanp$elm_ast$Ast_Expression$joinR = F2(
        function (es, ops) {
            var _p5 = { ctor: '_Tuple2', _0: es, _1: ops };
            _v5_2:
                do {
                    if ((_p5.ctor === '_Tuple2') && (_p5._0.ctor === '::')) {
                        if (_p5._0._1.ctor === '[]') {
                            if (_p5._1.ctor === '[]') {
                                return _Bogdanp$elm_combine$Combine$succeed(_p5._0._0);
                            } else {
                                break _v5_2;
                            }
                        } else {
                            if (_p5._1.ctor === '::') {
                                return A2(
                                    _Bogdanp$elm_combine$Combine$andThen,
                                    A2(
                                        _Bogdanp$elm_ast$Ast_Expression$joinR,
                                        A2(_elm_lang$core$List_ops['::'], _p5._0._1._0, _p5._0._1._1),
                                        _p5._1._1),
                                    function (e) {
                                        return _Bogdanp$elm_combine$Combine$succeed(
                                            A3(
                                                _Bogdanp$elm_ast$Ast_Expression$BinOp,
                                                _Bogdanp$elm_ast$Ast_Expression$Variable(
                                                    _elm_lang$core$Native_List.fromArray(
                                                        [_p5._1._0])),
                                                _p5._0._0,
                                                e));
                                    });
                            } else {
                                break _v5_2;
                            }
                        }
                    } else {
                        break _v5_2;
                    }
                } while (false);
            return _Bogdanp$elm_combine$Combine$fail(
                _elm_lang$core$Native_List.fromArray(
                    []));
        });
    var _Bogdanp$elm_ast$Ast_Expression$split = F4(
        function (ops, l, e, eops) {
            var _p6 = eops;
            if (_p6.ctor === '[]') {
                return _Bogdanp$elm_combine$Combine$succeed(e);
            } else {
                return A2(
                    _Bogdanp$elm_combine$Combine$andThen,
                    A3(_Bogdanp$elm_ast$Ast_Expression$findAssoc, ops, l, eops),
                    function (assoc) {
                        return A2(
                            _Bogdanp$elm_combine$Combine$andThen,
                            _Bogdanp$elm_ast$Ast_Helpers$sequence(
                                A4(_Bogdanp$elm_ast$Ast_Expression$splitLevel, ops, l, e, eops)),
                            function (es) {
                                var ops$ = A2(
                                    _elm_lang$core$List$filterMap,
                                    function (x) {
                                        return A3(_Bogdanp$elm_ast$Ast_Expression$hasLevel, ops, l, x) ? _elm_lang$core$Maybe$Just(
                                            _elm_lang$core$Basics$fst(x)) : _elm_lang$core$Maybe$Nothing;
                                    },
                                    eops);
                                var _p7 = assoc;
                                if (_p7.ctor === 'R') {
                                    return A2(_Bogdanp$elm_ast$Ast_Expression$joinR, es, ops$);
                                } else {
                                    return A2(_Bogdanp$elm_ast$Ast_Expression$joinL, es, ops$);
                                }
                            });
                    });
            }
        });
    var _Bogdanp$elm_ast$Ast_Expression$splitLevel = F4(
        function (ops, l, e, eops) {
            var _p8 = A2(
                _elm_community$list_extra$List_Extra$break,
                A2(_Bogdanp$elm_ast$Ast_Expression$hasLevel, ops, l),
                eops);
            if (_p8._1.ctor === '::') {
                return A2(
                    _elm_lang$core$List_ops['::'],
                    A4(_Bogdanp$elm_ast$Ast_Expression$split, ops, l + 1, e, _p8._0),
                    A4(_Bogdanp$elm_ast$Ast_Expression$splitLevel, ops, l, _p8._1._0._1, _p8._1._1));
            } else {
                return _elm_lang$core$Native_List.fromArray(
                    [
                        A4(_Bogdanp$elm_ast$Ast_Expression$split, ops, l + 1, e, _p8._0)
                    ]);
            }
        });
    var _Bogdanp$elm_ast$Ast_Expression$Float = function (a) {
        return { ctor: 'Float', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$float = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _Bogdanp$elm_ast$Ast_Expression$Float, _Bogdanp$elm_combine$Combine_Num$float);
    var _Bogdanp$elm_ast$Ast_Expression$Integer = function (a) {
        return { ctor: 'Integer', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$integer = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _Bogdanp$elm_ast$Ast_Expression$Integer, _Bogdanp$elm_combine$Combine_Num$int);
    var _Bogdanp$elm_ast$Ast_Expression$String = function (a) {
        return { ctor: 'String', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$string = function () {
        var multiString = A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            function (_p9) {
                return _Bogdanp$elm_ast$Ast_Expression$String(
                    _elm_lang$core$String$concat(_p9));
            },
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_combine$Combine$string('\"\"\"'),
                    _Bogdanp$elm_combine$Combine$many(
                        _Bogdanp$elm_combine$Combine$regex('[^\"]*'))),
                _Bogdanp$elm_combine$Combine$string('\"\"\"')));
        var singleString = A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Expression$String,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_combine$Combine$string('\"'),
                    _Bogdanp$elm_combine$Combine$regex('(\\\\\"|[^\"\n])*')),
                _Bogdanp$elm_combine$Combine$string('\"')));
        return A2(_Bogdanp$elm_combine$Combine_Infix_ops['<|>'], multiString, singleString);
    }();
    var _Bogdanp$elm_ast$Ast_Expression$Character = function (a) {
        return { ctor: 'Character', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Expression$character = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
        _Bogdanp$elm_ast$Ast_Expression$Character,
        A2(
            _Bogdanp$elm_ast$Ast_Helpers$between$,
            _Bogdanp$elm_combine$Combine_Char$char(
                _elm_lang$core$Native_Utils.chr('\'')),
            _Bogdanp$elm_combine$Combine_Char$anyChar));
    var _Bogdanp$elm_ast$Ast_Expression$term = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p10) {
                var _p11 = _p10;
                return _Bogdanp$elm_combine$Combine$choice(
                    _elm_lang$core$Native_List.fromArray(
                        [
                            _Bogdanp$elm_ast$Ast_Expression$character,
                            _Bogdanp$elm_ast$Ast_Expression$string,
                            _Bogdanp$elm_ast$Ast_Expression$float,
                            _Bogdanp$elm_ast$Ast_Expression$integer,
                            _Bogdanp$elm_ast$Ast_Expression$access,
                            _Bogdanp$elm_ast$Ast_Expression$variable,
                            _Bogdanp$elm_ast$Ast_Expression$range(ops),
                            _Bogdanp$elm_ast$Ast_Expression$list(ops),
                            _Bogdanp$elm_ast$Ast_Expression$record(ops),
                            _Bogdanp$elm_combine$Combine$parens(
                            _Bogdanp$elm_ast$Ast_Expression$expression(ops))
                        ]));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$expression = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p12) {
                var _p13 = _p12;
                return _Bogdanp$elm_combine$Combine$choice(
                    _elm_lang$core$Native_List.fromArray(
                        [
                            _Bogdanp$elm_ast$Ast_Expression$letExpression(ops),
                            _Bogdanp$elm_ast$Ast_Expression$caseExpression(ops),
                            _Bogdanp$elm_ast$Ast_Expression$ifExpression(ops),
                            _Bogdanp$elm_ast$Ast_Expression$lambda(ops),
                            _Bogdanp$elm_ast$Ast_Expression$binary(ops)
                        ]));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$binary = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p14) {
                var _p15 = _p14;
                var next = A2(
                    _Bogdanp$elm_combine$Combine$andThen,
                    A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$whitespace, _Bogdanp$elm_ast$Ast_Helpers$operator),
                    function (op) {
                        return A2(
                            _Bogdanp$elm_combine$Combine$andThen,
                            _Bogdanp$elm_combine$Combine$choice(
                                _elm_lang$core$Native_List.fromArray(
                                    [
                                        A2(
                                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                                        _Bogdanp$elm_ast$Ast_Expression$Cont,
                                        _Bogdanp$elm_ast$Ast_Expression$application(ops)),
                                        A2(
                                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                                        _Bogdanp$elm_ast$Ast_Expression$Stop,
                                        _Bogdanp$elm_ast$Ast_Expression$expression(ops))
                                    ])),
                            function (e) {
                                var _p16 = e;
                                if (_p16.ctor === 'Cont') {
                                    return A2(
                                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                                        F2(
                                            function (x, y) {
                                                return A2(_elm_lang$core$List_ops['::'], x, y);
                                            })(
                                            { ctor: '_Tuple2', _0: op, _1: _p16._0 }),
                                        collect);
                                } else {
                                    return _Bogdanp$elm_combine$Combine$succeed(
                                        _elm_lang$core$Native_List.fromArray(
                                            [
                                                { ctor: '_Tuple2', _0: op, _1: _p16._0 }
                                            ]));
                                }
                            });
                    });
                var collect = A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<|>'],
                    next,
                    _Bogdanp$elm_combine$Combine$succeed(
                        _elm_lang$core$Native_List.fromArray(
                            [])));
                return A2(
                    _Bogdanp$elm_combine$Combine$andThen,
                    _Bogdanp$elm_ast$Ast_Expression$application(ops),
                    function (e) {
                        return A2(
                            _Bogdanp$elm_combine$Combine$andThen,
                            collect,
                            function (eops) {
                                return A4(_Bogdanp$elm_ast$Ast_Expression$split, ops, 0, e, eops);
                            });
                    });
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$application = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p17) {
                var _p18 = _p17;
                return A2(
                    _Bogdanp$elm_combine$Combine$chainl,
                    _Bogdanp$elm_ast$Ast_Expression$term(ops),
                    A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$'], _Bogdanp$elm_ast$Ast_Expression$Application, _Bogdanp$elm_ast$Ast_Helpers$spaces$));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$caseExpression = function (ops) {
        var binding = _Bogdanp$elm_combine$Combine$rec(
            function (_p19) {
                var _p20 = _p19;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                        F2(
                            function (v0, v1) {
                                return { ctor: '_Tuple2', _0: v0, _1: v1 };
                            }),
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                            _Bogdanp$elm_ast$Ast_Helpers$whitespace,
                            _Bogdanp$elm_ast$Ast_Expression$expression(ops))),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$symbol('->'),
                        _Bogdanp$elm_ast$Ast_Expression$expression(ops)));
            });
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p21) {
                var _p22 = _p21;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                        _Bogdanp$elm_ast$Ast_Expression$Case,
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                            _Bogdanp$elm_ast$Ast_Helpers$symbol('case'),
                            _Bogdanp$elm_ast$Ast_Expression$expression(ops))),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$symbol('of'),
                        _Bogdanp$elm_combine$Combine$many1(binding)));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$ifExpression = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p23) {
                var _p24 = _p23;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                            _Bogdanp$elm_ast$Ast_Expression$If,
                            A2(
                                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                                _Bogdanp$elm_ast$Ast_Helpers$symbol('if'),
                                _Bogdanp$elm_ast$Ast_Expression$expression(ops))),
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                            _Bogdanp$elm_ast$Ast_Helpers$symbol('then'),
                            _Bogdanp$elm_ast$Ast_Expression$expression(ops))),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$symbol('else'),
                        _Bogdanp$elm_ast$Ast_Expression$expression(ops)));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$lambda = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p25) {
                var _p26 = _p25;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                        _Bogdanp$elm_ast$Ast_Expression$Lambda,
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                            _Bogdanp$elm_ast$Ast_Helpers$symbol('\\'),
                            _Bogdanp$elm_combine$Combine$many(
                                A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$spaces, _Bogdanp$elm_ast$Ast_Helpers$loName)))),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$symbol('->'),
                        _Bogdanp$elm_ast$Ast_Expression$expression(ops)));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$letExpression = function (ops) {
        var binding = _Bogdanp$elm_combine$Combine$rec(
            function (_p27) {
                var _p28 = _p27;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                        F2(
                            function (v0, v1) {
                                return { ctor: '_Tuple2', _0: v0, _1: v1 };
                            }),
                        A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$whitespace, _Bogdanp$elm_ast$Ast_Helpers$loName)),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$symbol('='),
                        _Bogdanp$elm_ast$Ast_Expression$expression(ops)));
            });
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p29) {
                var _p30 = _p29;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                        _Bogdanp$elm_ast$Ast_Expression$Let,
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                            _Bogdanp$elm_ast$Ast_Helpers$symbol('let'),
                            _Bogdanp$elm_combine$Combine$many1(binding))),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$symbol('in'),
                        _Bogdanp$elm_ast$Ast_Expression$expression(ops)));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$list = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p31) {
                var _p32 = _p31;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                    _Bogdanp$elm_ast$Ast_Expression$List,
                    _Bogdanp$elm_combine$Combine$brackets(
                        _Bogdanp$elm_ast$Ast_Helpers$commaSeparated$(
                            _Bogdanp$elm_ast$Ast_Expression$expression(ops))));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$range = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p33) {
                var _p34 = _p33;
                return _Bogdanp$elm_combine$Combine$brackets(
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                            _Bogdanp$elm_ast$Ast_Expression$Range,
                            _Bogdanp$elm_ast$Ast_Expression$expression(ops)),
                        A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                            _Bogdanp$elm_ast$Ast_Helpers$symbol('..'),
                            _Bogdanp$elm_ast$Ast_Expression$expression(ops))));
            });
    };
    var _Bogdanp$elm_ast$Ast_Expression$record = function (ops) {
        return _Bogdanp$elm_combine$Combine$rec(
            function (_p35) {
                var _p36 = _p35;
                return A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                    _Bogdanp$elm_ast$Ast_Expression$Record,
                    _Bogdanp$elm_combine$Combine$braces(
                        _Bogdanp$elm_ast$Ast_Helpers$commaSeparated$(
                            A2(
                                _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                                A2(
                                    _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                                    F2(
                                        function (v0, v1) {
                                            return { ctor: '_Tuple2', _0: v0, _1: v1 };
                                        }),
                                    _Bogdanp$elm_ast$Ast_Helpers$loName),
                                A2(
                                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                                    _Bogdanp$elm_ast$Ast_Helpers$symbol('='),
                                    _Bogdanp$elm_ast$Ast_Expression$expression(ops))))));
            });
    };

    var _Bogdanp$elm_ast$Ast_Statement$TypeExport = F2(
        function (a, b) {
            return { ctor: 'TypeExport', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$FunctionExport = function (a) {
        return { ctor: 'FunctionExport', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Statement$functionExport = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _Bogdanp$elm_ast$Ast_Statement$FunctionExport, _Bogdanp$elm_ast$Ast_Helpers$functionName);
    var _Bogdanp$elm_ast$Ast_Statement$SubsetExport = function (a) {
        return { ctor: 'SubsetExport', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Statement$constructorSubsetExports = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
        _Bogdanp$elm_ast$Ast_Statement$SubsetExport,
        _Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
            A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _Bogdanp$elm_ast$Ast_Statement$FunctionExport, _Bogdanp$elm_ast$Ast_Helpers$upName)));
    var _Bogdanp$elm_ast$Ast_Statement$AllExport = { ctor: 'AllExport' };
    var _Bogdanp$elm_ast$Ast_Statement$allExport = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
        _Bogdanp$elm_ast$Ast_Statement$AllExport,
        _Bogdanp$elm_ast$Ast_Helpers$symbol('..'));
    var _Bogdanp$elm_ast$Ast_Statement$constructorExports = _Bogdanp$elm_combine$Combine$maybe(
        _Bogdanp$elm_combine$Combine$parens(
            _Bogdanp$elm_combine$Combine$choice(
                _elm_lang$core$Native_List.fromArray(
                    [_Bogdanp$elm_ast$Ast_Statement$allExport, _Bogdanp$elm_ast$Ast_Statement$constructorSubsetExports]))));
    var _Bogdanp$elm_ast$Ast_Statement$typeExport = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$TypeExport,
            A2(_Bogdanp$elm_combine$Combine_Infix_ops['<*'], _Bogdanp$elm_ast$Ast_Helpers$upName, _Bogdanp$elm_ast$Ast_Helpers$spaces)),
        _Bogdanp$elm_ast$Ast_Statement$constructorExports);
    var _Bogdanp$elm_ast$Ast_Statement$subsetExport = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
        _Bogdanp$elm_ast$Ast_Statement$SubsetExport,
        _Bogdanp$elm_ast$Ast_Helpers$commaSeparated(
            A2(_Bogdanp$elm_combine$Combine$or, _Bogdanp$elm_ast$Ast_Statement$functionExport, _Bogdanp$elm_ast$Ast_Statement$typeExport)));
    var _Bogdanp$elm_ast$Ast_Statement$exports = _Bogdanp$elm_combine$Combine$parens(
        _Bogdanp$elm_combine$Combine$choice(
            _elm_lang$core$Native_List.fromArray(
                [_Bogdanp$elm_ast$Ast_Statement$allExport, _Bogdanp$elm_ast$Ast_Statement$subsetExport])));
    var _Bogdanp$elm_ast$Ast_Statement$TypeApplication = F2(
        function (a, b) {
            return { ctor: 'TypeApplication', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeApplication = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
        _Bogdanp$elm_ast$Ast_Statement$TypeApplication,
        _Bogdanp$elm_ast$Ast_Helpers$symbol('->'));
    var _Bogdanp$elm_ast$Ast_Statement$TypeTuple = function (a) {
        return { ctor: 'TypeTuple', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Statement$TypeRecord = function (a) {
        return { ctor: 'TypeRecord', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Statement$TypeRecordConstructor = F2(
        function (a, b) {
            return { ctor: 'TypeRecordConstructor', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$TypeVariable = function (a) {
        return { ctor: 'TypeVariable', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Statement$typeVariable = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
        _Bogdanp$elm_ast$Ast_Statement$TypeVariable,
        _Bogdanp$elm_combine$Combine$regex('[a-z]+'));
    var _Bogdanp$elm_ast$Ast_Statement$TypeConstructor = F2(
        function (a, b) {
            return { ctor: 'TypeConstructor', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeConstant = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$TypeConstructor,
            A2(
                _Bogdanp$elm_combine$Combine$sepBy1,
                _Bogdanp$elm_combine$Combine$string('.'),
                _Bogdanp$elm_ast$Ast_Helpers$upName)),
        _Bogdanp$elm_combine$Combine$succeed(
            _elm_lang$core$Native_List.fromArray(
                [])));
    var _Bogdanp$elm_ast$Ast_Statement$typeConstructor = _Bogdanp$elm_combine$Combine$rec(
        function (_p0) {
            var _p1 = _p0;
            return A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                    _Bogdanp$elm_ast$Ast_Statement$TypeConstructor,
                    A2(
                        _Bogdanp$elm_combine$Combine$sepBy1,
                        _Bogdanp$elm_combine$Combine$string('.'),
                        _Bogdanp$elm_ast$Ast_Helpers$upName)),
                _Bogdanp$elm_combine$Combine$many(_Bogdanp$elm_ast$Ast_Statement$typeParameter));
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeParameter = _Bogdanp$elm_combine$Combine$rec(
        function (_p2) {
            var _p3 = _p2;
            return A2(
                _Bogdanp$elm_ast$Ast_Helpers$between$,
                _Bogdanp$elm_ast$Ast_Helpers$spaces,
                _Bogdanp$elm_combine$Combine$choice(
                    _elm_lang$core$Native_List.fromArray(
                        [
                            _Bogdanp$elm_ast$Ast_Statement$typeVariable,
                            _Bogdanp$elm_ast$Ast_Statement$typeConstant,
                            _Bogdanp$elm_ast$Ast_Statement$typeRecordConstructor,
                            _Bogdanp$elm_ast$Ast_Statement$typeRecord,
                            _Bogdanp$elm_ast$Ast_Statement$typeTuple,
                            _Bogdanp$elm_combine$Combine$parens(_Bogdanp$elm_ast$Ast_Statement$typeAnnotation)
                        ])));
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeAnnotation = _Bogdanp$elm_combine$Combine$rec(
        function (_p4) {
            var _p5 = _p4;
            return A2(_Bogdanp$elm_combine$Combine$chainr, _Bogdanp$elm_ast$Ast_Statement$type$, _Bogdanp$elm_ast$Ast_Statement$typeApplication);
        });
    var _Bogdanp$elm_ast$Ast_Statement$type$ = _Bogdanp$elm_combine$Combine$rec(
        function (_p6) {
            var _p7 = _p6;
            return A2(
                _Bogdanp$elm_ast$Ast_Helpers$between$,
                _Bogdanp$elm_ast$Ast_Helpers$spaces,
                _Bogdanp$elm_combine$Combine$choice(
                    _elm_lang$core$Native_List.fromArray(
                        [
                            _Bogdanp$elm_ast$Ast_Statement$typeConstructor,
                            _Bogdanp$elm_ast$Ast_Statement$typeVariable,
                            _Bogdanp$elm_ast$Ast_Statement$typeRecordConstructor,
                            _Bogdanp$elm_ast$Ast_Statement$typeRecord,
                            _Bogdanp$elm_ast$Ast_Statement$typeTuple,
                            _Bogdanp$elm_combine$Combine$parens(_Bogdanp$elm_ast$Ast_Statement$typeAnnotation)
                        ])));
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeRecord = _Bogdanp$elm_combine$Combine$rec(
        function (_p8) {
            var _p9 = _p8;
            return _Bogdanp$elm_combine$Combine$braces(
                A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _Bogdanp$elm_ast$Ast_Statement$TypeRecord, _Bogdanp$elm_ast$Ast_Statement$typeRecordPairs));
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeRecordPairs = _Bogdanp$elm_combine$Combine$rec(
        function (_p10) {
            var _p11 = _p10;
            return _Bogdanp$elm_ast$Ast_Helpers$commaSeparated$(_Bogdanp$elm_ast$Ast_Statement$typeRecordPair);
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeRecordPair = _Bogdanp$elm_combine$Combine$rec(
        function (_p12) {
            var _p13 = _p12;
            return A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                    F2(
                        function (v0, v1) {
                            return { ctor: '_Tuple2', _0: v0, _1: v1 };
                        }),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                        _Bogdanp$elm_ast$Ast_Helpers$loName,
                        _Bogdanp$elm_ast$Ast_Helpers$symbol(':'))),
                _Bogdanp$elm_ast$Ast_Statement$typeAnnotation);
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeRecordConstructor = _Bogdanp$elm_combine$Combine$rec(
        function (_p14) {
            var _p15 = _p14;
            return _Bogdanp$elm_combine$Combine$braces(
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                        _Bogdanp$elm_ast$Ast_Statement$TypeRecordConstructor,
                        A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$spaces, _Bogdanp$elm_ast$Ast_Statement$typeVariable)),
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$symbol('|'),
                        _Bogdanp$elm_ast$Ast_Statement$typeRecordPairs)));
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeTuple = _Bogdanp$elm_combine$Combine$rec(
        function (_p16) {
            var _p17 = _p16;
            return A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                _Bogdanp$elm_ast$Ast_Statement$TypeTuple,
                _Bogdanp$elm_combine$Combine$parens(
                    _Bogdanp$elm_ast$Ast_Helpers$commaSeparated$(_Bogdanp$elm_ast$Ast_Statement$type$)));
        });
    var _Bogdanp$elm_ast$Ast_Statement$Comment = function (a) {
        return { ctor: 'Comment', _0: a };
    };
    var _Bogdanp$elm_ast$Ast_Statement$singleLineComment = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
        _Bogdanp$elm_ast$Ast_Statement$Comment,
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_combine$Combine$string('--'),
                _Bogdanp$elm_combine$Combine$regex('.*')),
            _Bogdanp$elm_ast$Ast_Helpers$whitespace));
    var _Bogdanp$elm_ast$Ast_Statement$multiLineComment = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
        function (_p18) {
            return _Bogdanp$elm_ast$Ast_Statement$Comment(
                _elm_lang$core$String$fromList(_p18));
        },
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
            _Bogdanp$elm_combine$Combine$string('{-'),
            A2(
                _Bogdanp$elm_combine$Combine$manyTill,
                _Bogdanp$elm_combine$Combine_Char$anyChar,
                _Bogdanp$elm_combine$Combine$string('-}'))));
    var _Bogdanp$elm_ast$Ast_Statement$comment = A2(_Bogdanp$elm_combine$Combine_Infix_ops['<|>'], _Bogdanp$elm_ast$Ast_Statement$singleLineComment, _Bogdanp$elm_ast$Ast_Statement$multiLineComment);
    var _Bogdanp$elm_ast$Ast_Statement$InfixDeclaration = F3(
        function (a, b, c) {
            return { ctor: 'InfixDeclaration', _0: a, _1: b, _2: c };
        });
    var _Bogdanp$elm_ast$Ast_Statement$infixDeclaration = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                _Bogdanp$elm_ast$Ast_Statement$InfixDeclaration,
                _Bogdanp$elm_combine$Combine$choice(
                    _elm_lang$core$Native_List.fromArray(
                        [
                            A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
                            _Bogdanp$elm_ast$Ast_BinOp$L,
                            _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('infixl')),
                            A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
                            _Bogdanp$elm_ast$Ast_BinOp$R,
                            _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('infixr')),
                            A2(
                            _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
                            _Bogdanp$elm_ast$Ast_BinOp$N,
                            _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('infix'))
                        ]))),
            A2(_Bogdanp$elm_combine$Combine_Infix_ops['*>'], _Bogdanp$elm_ast$Ast_Helpers$spaces, _Bogdanp$elm_combine$Combine_Num$int)),
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
            _Bogdanp$elm_ast$Ast_Helpers$spaces,
            A2(_Bogdanp$elm_combine$Combine_Infix_ops['<|>'], _Bogdanp$elm_ast$Ast_Helpers$loName, _Bogdanp$elm_ast$Ast_Helpers$operator)));
    var _Bogdanp$elm_ast$Ast_Statement$infixStatements = function () {
        var statements = A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
            _Bogdanp$elm_combine$Combine$many(
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                    _Bogdanp$elm_combine$Combine$choice(
                        _elm_lang$core$Native_List.fromArray(
                            [
                                A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _elm_lang$core$Maybe$Just, _Bogdanp$elm_ast$Ast_Statement$infixDeclaration),
                                A2(
                                _Bogdanp$elm_combine$Combine_Infix_ops['<$'],
                                _elm_lang$core$Maybe$Nothing,
                                _Bogdanp$elm_combine$Combine$regex('.*'))
                            ])),
                    _Bogdanp$elm_ast$Ast_Helpers$whitespace)),
            _Bogdanp$elm_combine$Combine$end);
        return A2(
            _Bogdanp$elm_combine$Combine$andThen,
            statements,
            function (xs) {
                return _Bogdanp$elm_combine$Combine$succeed(
                    A2(_elm_lang$core$List$filterMap, _elm_lang$core$Basics$identity, xs));
            });
    }();
    var _Bogdanp$elm_ast$Ast_Statement$opTable = function (ops) {
        var collect = F2(
            function (s, d) {
                var _p19 = s;
                if (_p19.ctor === 'InfixDeclaration') {
                    return A3(
                        _elm_lang$core$Dict$insert,
                        _p19._2,
                        { ctor: '_Tuple2', _0: _p19._0, _1: _p19._1 },
                        d);
                } else {
                    return _elm_lang$core$Native_Utils.crashCase(
                        'Ast.Statement',
                        {
                            start: { line: 312, column: 7 },
                            end: { line: 317, column: 35 }
                        },
                        _p19)('impossible');
                }
            });
        return A2(
            _Bogdanp$elm_combine$Combine$andThen,
            _Bogdanp$elm_ast$Ast_Statement$infixStatements,
            function (xs) {
                return _Bogdanp$elm_combine$Combine$succeed(
                    A3(_elm_lang$core$List$foldr, collect, ops, xs));
            });
    };
    var _Bogdanp$elm_ast$Ast_Statement$FunctionDeclaration = F3(
        function (a, b, c) {
            return { ctor: 'FunctionDeclaration', _0: a, _1: b, _2: c };
        });
    var _Bogdanp$elm_ast$Ast_Statement$functionDeclaration = function (ops) {
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                A2(_Bogdanp$elm_combine$Combine_Infix_ops['<$>'], _Bogdanp$elm_ast$Ast_Statement$FunctionDeclaration, _Bogdanp$elm_ast$Ast_Helpers$loName),
                _Bogdanp$elm_combine$Combine$many(
                    A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$whitespace, _Bogdanp$elm_ast$Ast_Helpers$loName))),
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_ast$Ast_Helpers$symbol('='),
                    _Bogdanp$elm_ast$Ast_Helpers$whitespace),
                _Bogdanp$elm_ast$Ast_Expression$expression(ops)));
    };
    var _Bogdanp$elm_ast$Ast_Statement$FunctionTypeDeclaration = F2(
        function (a, b) {
            return { ctor: 'FunctionTypeDeclaration', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$functionTypeDeclaration = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$FunctionTypeDeclaration,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                _Bogdanp$elm_ast$Ast_Helpers$loName,
                _Bogdanp$elm_ast$Ast_Helpers$symbol(':'))),
        _Bogdanp$elm_ast$Ast_Statement$typeAnnotation);
    var _Bogdanp$elm_ast$Ast_Statement$PortDeclaration = F3(
        function (a, b, c) {
            return { ctor: 'PortDeclaration', _0: a, _1: b, _2: c };
        });
    var _Bogdanp$elm_ast$Ast_Statement$portDeclaration = function (ops) {
        return A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                    _Bogdanp$elm_ast$Ast_Statement$PortDeclaration,
                    A2(
                        _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                        _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('port'),
                        _Bogdanp$elm_ast$Ast_Helpers$loName)),
                _Bogdanp$elm_combine$Combine$many(
                    A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$spaces, _Bogdanp$elm_ast$Ast_Helpers$loName))),
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_ast$Ast_Helpers$symbol('='),
                _Bogdanp$elm_ast$Ast_Expression$expression(ops)));
    };
    var _Bogdanp$elm_ast$Ast_Statement$PortTypeDeclaration = F2(
        function (a, b) {
            return { ctor: 'PortTypeDeclaration', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$portTypeDeclaration = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$PortTypeDeclaration,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('port'),
                _Bogdanp$elm_ast$Ast_Helpers$loName)),
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
            _Bogdanp$elm_ast$Ast_Helpers$symbol(':'),
            _Bogdanp$elm_ast$Ast_Statement$typeAnnotation));
    var _Bogdanp$elm_ast$Ast_Statement$TypeDeclaration = F2(
        function (a, b) {
            return { ctor: 'TypeDeclaration', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeDeclaration = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$TypeDeclaration,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('type'),
                _Bogdanp$elm_ast$Ast_Statement$type$)),
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_ast$Ast_Helpers$whitespace,
                _Bogdanp$elm_ast$Ast_Helpers$symbol('=')),
            A2(
                _Bogdanp$elm_combine$Combine$sepBy1,
                _Bogdanp$elm_ast$Ast_Helpers$symbol('|'),
                A2(_Bogdanp$elm_ast$Ast_Helpers$between$, _Bogdanp$elm_ast$Ast_Helpers$whitespace, _Bogdanp$elm_ast$Ast_Statement$typeConstructor))));
    var _Bogdanp$elm_ast$Ast_Statement$TypeAliasDeclaration = F2(
        function (a, b) {
            return { ctor: 'TypeAliasDeclaration', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$typeAliasDeclaration = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$TypeAliasDeclaration,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('type'),
                    _Bogdanp$elm_ast$Ast_Helpers$symbol('alias')),
                _Bogdanp$elm_ast$Ast_Statement$type$)),
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_ast$Ast_Helpers$whitespace,
                _Bogdanp$elm_ast$Ast_Helpers$symbol('=')),
            _Bogdanp$elm_ast$Ast_Statement$typeAnnotation));
    var _Bogdanp$elm_ast$Ast_Statement$ImportStatement = F3(
        function (a, b, c) {
            return { ctor: 'ImportStatement', _0: a, _1: b, _2: c };
        });
    var _Bogdanp$elm_ast$Ast_Statement$importStatement = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
                _Bogdanp$elm_ast$Ast_Statement$ImportStatement,
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('import'),
                    _Bogdanp$elm_ast$Ast_Helpers$moduleName)),
            _Bogdanp$elm_combine$Combine$maybe(
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_ast$Ast_Helpers$symbol('as'),
                    _Bogdanp$elm_ast$Ast_Helpers$upName))),
        _Bogdanp$elm_combine$Combine$maybe(
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_ast$Ast_Helpers$symbol('exposing'),
                _Bogdanp$elm_ast$Ast_Statement$exports)));
    var _Bogdanp$elm_ast$Ast_Statement$PortModuleDeclaration = F2(
        function (a, b) {
            return { ctor: 'PortModuleDeclaration', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$portModuleDeclaration = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$PortModuleDeclaration,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('port'),
                    _Bogdanp$elm_ast$Ast_Helpers$symbol('module')),
                _Bogdanp$elm_ast$Ast_Helpers$moduleName)),
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
            _Bogdanp$elm_ast$Ast_Helpers$symbol('exposing'),
            _Bogdanp$elm_ast$Ast_Statement$exports));
    var _Bogdanp$elm_ast$Ast_Statement$ModuleDeclaration = F2(
        function (a, b) {
            return { ctor: 'ModuleDeclaration', _0: a, _1: b };
        });
    var _Bogdanp$elm_ast$Ast_Statement$moduleDeclaration = A2(
        _Bogdanp$elm_combine$Combine_Infix_ops['<*>'],
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['<$>'],
            _Bogdanp$elm_ast$Ast_Statement$ModuleDeclaration,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                _Bogdanp$elm_ast$Ast_Helpers$initialSymbol('module'),
                _Bogdanp$elm_ast$Ast_Helpers$moduleName)),
        A2(
            _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
            _Bogdanp$elm_ast$Ast_Helpers$symbol('exposing'),
            _Bogdanp$elm_ast$Ast_Statement$exports));
    var _Bogdanp$elm_ast$Ast_Statement$statement = function (ops) {
        return _Bogdanp$elm_combine$Combine$choice(
            _elm_lang$core$Native_List.fromArray(
                [
                    _Bogdanp$elm_ast$Ast_Statement$portModuleDeclaration,
                    _Bogdanp$elm_ast$Ast_Statement$moduleDeclaration,
                    _Bogdanp$elm_ast$Ast_Statement$importStatement,
                    _Bogdanp$elm_ast$Ast_Statement$typeAliasDeclaration,
                    _Bogdanp$elm_ast$Ast_Statement$typeDeclaration,
                    _Bogdanp$elm_ast$Ast_Statement$portTypeDeclaration,
                    _Bogdanp$elm_ast$Ast_Statement$portDeclaration(ops),
                    _Bogdanp$elm_ast$Ast_Statement$functionTypeDeclaration,
                    _Bogdanp$elm_ast$Ast_Statement$functionDeclaration(ops),
                    _Bogdanp$elm_ast$Ast_Statement$infixDeclaration,
                    _Bogdanp$elm_ast$Ast_Statement$comment
                ]));
    };
    var _Bogdanp$elm_ast$Ast_Statement$statements = function (ops) {
        return A2(
            _Bogdanp$elm_combine$Combine$manyTill,
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                A2(
                    _Bogdanp$elm_combine$Combine_Infix_ops['*>'],
                    _Bogdanp$elm_ast$Ast_Helpers$whitespace,
                    _Bogdanp$elm_ast$Ast_Statement$statement(ops)),
                _Bogdanp$elm_ast$Ast_Helpers$whitespace),
            _Bogdanp$elm_combine$Combine$end);
    };

    var _Bogdanp$elm_ast$Ast$parseModule = function (ops) {
        return _Bogdanp$elm_combine$Combine$parse(
            _Bogdanp$elm_ast$Ast_Statement$statements(ops));
    };
    var _Bogdanp$elm_ast$Ast$parseOpTable = function (ops) {
        return _Bogdanp$elm_combine$Combine$parse(
            _Bogdanp$elm_ast$Ast_Statement$opTable(ops));
    };
    var _Bogdanp$elm_ast$Ast$parse = function (input) {
        var _p0 = A2(_Bogdanp$elm_ast$Ast$parseOpTable, _Bogdanp$elm_ast$Ast_BinOp$operators, input);
        if (_p0._0.ctor === 'Ok') {
            return A2(_Bogdanp$elm_ast$Ast$parseModule, _p0._0._0, input);
        } else {
            return {
                ctor: '_Tuple2',
                _0: _elm_lang$core$Result$Err(_p0._0._0),
                _1: _p0._1
            };
        }
    };
    var _Bogdanp$elm_ast$Ast$parseStatement = function (ops) {
        return _Bogdanp$elm_combine$Combine$parse(
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                _Bogdanp$elm_ast$Ast_Statement$statement(ops),
                _Bogdanp$elm_combine$Combine$end));
    };
    var _Bogdanp$elm_ast$Ast$parseExpression = function (ops) {
        return _Bogdanp$elm_combine$Combine$parse(
            A2(
                _Bogdanp$elm_combine$Combine_Infix_ops['<*'],
                _Bogdanp$elm_ast$Ast_Expression$expression(ops),
                _Bogdanp$elm_combine$Combine$end));
    };

    var Elm = {};
    Elm['Ast'] = Elm['Ast'] || {};
    _elm_lang$core$Native_Platform.addPublicModule(Elm['Ast'], 'Ast', typeof _Bogdanp$elm_ast$Ast$main === 'undefined' ? null : _Bogdanp$elm_ast$Ast$main);

    if (typeof define === "function" && define['amd']) {
        define([], function () { return Elm; });
        return;
    }

    if (typeof module === "object") {
        module['exports'] = Elm;
        return;
    }

    var globalElm = this['Elm'];
    if (typeof globalElm === "undefined") {
        this['Elm'] = Elm;
        return;
    }

    for (var publicModule in Elm) {
        if (publicModule in globalElm) {
            throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
        }
        globalElm[publicModule] = Elm[publicModule];
    }

}).call(this);