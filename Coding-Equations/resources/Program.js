function proccessInput(text)
{
    if (text.indexOf("==") > -1)
    {
        return false;
    }
    if (text.indexOf("[") > -1)
    {
        return false;
    }
    if (text.indexOf("]") > -1)
    {
        return false;
    }
    if (text.indexOf("{") > -1)
    {
        return false;
    }
    if (text.indexOf("}") > -1)
    {
        return false;
    }
    if (text.indexOf("$") > -1)
    {
        return false;
    }
    text = "round((" +
    text.replaceAll("<br>", "")
        .replaceAll("&gt;", ">")
        .replaceAll("&lt;", "<")
        .replaceAll("<=", "≤")
        .replaceAll(">=", "≥")
        .replaceAll("=", ") * 100) / 100 == round((")
        .replaceAll("≤", ") * 100) / 100 <= round((")
        .replaceAll("≥", ") * 100) / 100 >= round((")
        .replaceAll("<", ") * 100) / 100 < round((")
        .replaceAll(">", ") * 100) / 100 > round((")
        .replaceAll("0x", "0 * x")
        .replaceAll("1x", "1 * x")
        .replaceAll("2x", "2 * x")
        .replaceAll("3x", "3 * x")
        .replaceAll("4x", "4 * x")
        .replaceAll("5x", "5 * x")
        .replaceAll("6x", "6 * x")
        .replaceAll("7x", "7 * x")
        .replaceAll("8x", "8 * x")
        .replaceAll("9x", "9 * x")
	.replaceAll("x0", "x ** 0")
	.replaceAll("x1", "x ** 1")
	.replaceAll("x2", "x ** 2")
	.replaceAll("x3", "x ** 3")
	.replaceAll("x4", "x ** 4")
	.replaceAll("x5", "x ** 5")
	.replaceAll("x6", "x ** 6")
	.replaceAll("x7", "x ** 7")
	.replaceAll("x8", "x ** 8")
	.replaceAll("x9", "x ** 9")
        //.replaceAll("x", "(round(x * 100) / 100)")
        + ") * 100) / 100";
    return text;
}

function solve()
{
    if (i != -10)
    {
        return;
    }
    var proccessedText = proccessInput(pre.innerHTML);
    if ($debugMode)
    {
        console.log(proccessedText);
    }
    solutions = [];
    if (proccessedText)
    {
        pre.contentEditable = false;
        p.innerHTML = "x &isin; {}";
        button.innerHTML = "Solving...";
        solve0(Function("x", "return " + proccessedText + ";"));
    }
    else
    {
        alert("Invalid syntax");
    }
}

function solve0(f)
{
    i = round(i * 100) / 100;
    //console.log(i);
    if (Boolean(f(i)) == true)
    {
        solutions.push(i);
    }
    if (i < 10)
    {
        i += 0.01;
        setTimeout(function()
        {
            solve0(f);
        }, 0);
    }
    else
    {
        button.innerHTML = "Solve";
        pre.contentEditable = true;
        i = -10;
    }
    p.innerHTML = "x &isin; {" + solutions + "}";
}

button = document.querySelectorAll("button")[0];
pre = document.querySelectorAll("pre")[0];
p = document.querySelectorAll("p")[0];
solutions = [];
i = -10;
pre.innerHTML = localStorage.getItem("equation") || "x**2 = x + 1";

Object.defineProperty(this, "$pow",
{
    "value": Math.pow
});

Object.defineProperty(this, "ln",
{
    "value": Math.log
});

Object.defineProperty(this, "log",
{
    "value": function(base, arg)
    {
        if (arg == undefined)
        {
            return log(10, base);
        }
        return ln(arg) / ln(base);
    }
});

Object.defineProperty(this, "pi",
{
    "value": Math.PI
});

Object.defineProperty(this, "e",
{
    "value": Math.E
});

Object.defineProperty(this, "sin",
{
    "value": Math.sin
});

Object.defineProperty(this, "cos",
{
    "value": Math.cos
});

Object.defineProperty(this, "tan",
{
    "value": Math.tan
});

Object.defineProperty(this, "cot",
{
    "value": function(x)
    {
        return 1 / tan(x);
    }
});

Object.defineProperty(this, "sec",
{
    "value": function(x)
    {
        return 1 / cos(x);
    }
});

Object.defineProperty(this, "csc",
{
    "value": function(x)
    {
        return 1 / sin(x);
    }
});

Object.defineProperty(this, "arcsin",
{
    "value": Math.asin
});

Object.defineProperty(this, "arccos",
{
    "value": Math.acos
});

Object.defineProperty(this, "arctan",
{
    "value": Math.atan
});

Object.defineProperty(this, "arccot",
{
    "value": function(x)
    {
        return arctan(1 / x);
    }
});

Object.defineProperty(this, "arcsec",
{
    "value": function(x)
    {
        return arccos(1 / x);
    }
});

Object.defineProperty(this, "arccsc",
{
    "value": function(x)
    {
        return arcsin(1 / x);
    }
});

Object.defineProperty(this, "sinh",
{
    "value": Math.sinh
});

Object.defineProperty(this, "cosh",
{
    "value": Math.cosh
});

Object.defineProperty(this, "tanh",
{
    "value": Math.tanh
});

Object.defineProperty(this, "coth",
{
    "value": function(x)
    {
        return 1 / tanh(x);
    }
});

Object.defineProperty(this, "sech",
{
    "value": function(x)
    {
        return 1 / cosh(x);
    }
});

Object.defineProperty(this, "csch",
{
    "value": function(x)
    {
        return 1 / sinh(x);
    }
});

Object.defineProperty(this, "arcsinh",
{
    "value": Math.asinh
});

Object.defineProperty(this, "arccosh",
{
    "value": Math.acosh
});

Object.defineProperty(this, "arctanh",
{
    "value": Math.atanh
});

Object.defineProperty(this, "arccoth",
{
    "value": function(x)
    {
        return 0.5 * ln((x + 1) / (x - 1));
    }
});

Object.defineProperty(this, "arcsech",
{
    "value": function(x)
    {
        return ln((1 + $pow(1 - x * x, 0.5)) / x);
    }
});

Object.defineProperty(this, "arccsch",
{
    "value": function(x)
    {
        return ln(1 / x + $pow(1 + x * x, 0.5) / abs(x));
    }
});

Object.defineProperty(this, "sinc",
{
    "value": function(x)
    {
        return x != 0 ? sin(x) / x : 1;
    }
});

Object.defineProperty(this, "abs",
{
    "value": Math.abs
});

Object.defineProperty(this, "floor",
{
    "value": Math.floor
});

Object.defineProperty(this, "ceil",
{
    "value": Math.ceil
});

Object.defineProperty(this, "round",
{
    "value": Math.round
});

Object.defineProperty(this, "restrict",
{
    "value": function(x, min, max)
    {
        var difference = max - min;
        if (difference <= 0 || isNaN(x) || isNaN(max) || isNaN(min) || abs(x) == Infinity)
        {
            return NaN;
        }
        if (x == max)
        {
            return x - difference;
        }
        if (x == min)
        {
            return x;
        }
        if (x < max == x >= min)
        {
            return x;
        }
        while (x >= max)
        {
            x -= difference;
        }
        while (x < min)
        {
            x += difference;
        }
        return x;
    }
});

Object.defineProperty(this, "d",
{
    "value": function(f)
    {
        return function(x)
        {
            var p = 0.0001;
            return (f(x + p) - f(x)) / p;
        }
    },
    "writable": false
});

Object.defineProperty(this, "A",
{
    "value": function(f)
    {
        return function(x)
        {
            return arctan(d(f)(x));
        }
    },
    "writable": false
});

Object.defineProperty(this, "ltanf",
{
    "value": function(f)
    {
        return function(x)
        {
            return function(h)
            {
                return d(f)(h) * (x - h) + f(h);
            }
        }
    },
    "writable": false
});

Object.defineProperty(this, "ctanf",
{
    "value": function(f)
    {
        return function(x)
        {
            return function(h)
            {
                return d(f)(x) * (x - h) + f(h);
            }
        }
    },
    "writable": false
});

Object.defineProperty(this, "sign",
{
    "value": function(x)
    {
        return x == 0 ? x : abs(x) / x;
    },
    "writable": false
});

Object.defineProperty(this, "sum",
{
    "value": function(x)
    {
        return x * (x + 1) / 2;
    }
});

Object.defineProperty(this, "Var",
{
    "value": function(f)
    {
        return function(x)
        {
            if (x == 0)
            {
                return d(f)(0);
            }
            else
            {
                return (f(x) - f(0)) / x;
            }
        };
    }
});

Object.defineProperty(this, "Dis",
{
    "value": function(f)
    {
        return function(x)
        {
            return $pow(f(x) * f(x) + x * x, 0.5);
        };
    }
});

Object.defineProperty(this, "max",
{
    "value": Math.max
});

Object.defineProperty(this, "min",
{
    "value": Math.min
});

Object.defineProperty(this, "logistic",
{
    "value": function(x)
    {
        return $pow(e, x) / (1 + $pow(e, x));
    }
});

Object.defineProperty(this, "logaritmic",
{
    "value": function(x)
    {
        return ln(x * x + 1);
    }
});

Object.defineProperty(this, "gd",
{
    "value": function(x)
    {
        return arcsin(tanh(x));
    }
});

Object.defineProperty(this, "gcd",
{
    "value": function(a, b)
    {
        if (a == undefined || b == undefined)
        {
            return 0;
        }
        a = abs(a);
	    b = abs(b);

	    while (b !== 0)
	    {
	    	[b, a] = [a % b, b];
	    }

	    return a;
    }
});

Object.defineProperty(this, "factorial",
{
    "value": function(x)
    {
        return gamma(x + 1);
    }
});

Object.defineProperty(this, "gamma",
{
    "value": function(x)
    {
        if (x < 0)
    	{
    		return NaN;
	    }
	    return $pow(2 * pi / x, 0.5) * $pow(x / e, x);
    }
});

Object.defineProperty(this, "lcm",
{
    "value": function(a, b)
    {
        if (a == undefined || b == undefined)
        {
            return 0;
        }
        if (a == 0 && b == 0)
	    {
    		return 0;
    	}
    	else
    	{
		    return abs(a * b) / gcd(a, b);
	    }
    }
});

Object.defineProperty(this, "phi",
{
    "value": (1 + $pow(5, 0.5)) / 2
});

Object.defineProperty(this, "fibonacci",
{
    "value": function(x)
    {
        return ($pow(phi, x) - $pow(1 - phi, round(x))) / $pow(5, 0.5);
    }
});

Object.defineProperty(this, "lquad",
{
    "value": function(x)
    {
        return (1 - $pow(1 + 4 * x, 0.05)) / 2;
    }
});

Object.defineProperty(this, "rquad",
{
    "value": function(x)
    {
        return (1 + $pow(1 + 4 * x, 0.5)) / 2;
    }
});

Object.defineProperty(this, "atan2",
{
    "value": Math.atan2
});

$debugMode = false;

window.onbeforeunload = function(e)
{
    localStorage.setItem("equation", pre.innerHTML);
};
