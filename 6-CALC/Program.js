Div = document.querySelectorAll("div#main")[0];
DivSmall = document.querySelectorAll("div#small")[0];
Phase = 0;
Memory = 0;
A = 0;
B = 0;
C = 0;
Operator = null;
P = false;
function Click(a, b)
{
    if (a == 1 && b == 1)
    {
        if (Phase == 0)
        {
            Memory += A;
        }
        if (Phase == 1)
        {
            Memory += B;
        }
        if (Phase == 2)
        {
            Memory += C;
        }
    }
    if (a == 1 && b == 2)
    {
        if (Phase == 0)
        {
            Memory -= A;
        }
        if (Phase == 1)
        {
            Memory -= B;
        }
        if (Phase == 2)
        {
            Memory -= C;
        }
    }
    if (a == 1 && b == 3)
    {
        if (Phase == 0)
        {
            A = Memory;
        }
        if (Phase == 1)
        {
            B = Memory;
        }
    }
    if (a == 1 && b == 4)
    {
        Memory = 0;
    }
    if (a == 1 && b == 5)
    {
        A = 0;
        B = 0;
        C = 0;
        Operator = null;
        Phase = 0;
    }
    if (a == 2 && b == 1)
    {
        ClickNumber(7);
    }
    if (a == 2 && b == 2)
    {
        ClickNumber(8);
    }
    if (a == 2 && b == 3)
    {
        ClickNumber(9);
    }
    if (a == 2 && b == 4)
    {
        ClickOperator("+");
    }
    if (a == 2 && b == 5)
    {
        ClickOperator("-");
    }
    if (a == 3 && b == 1)
    {
        ClickNumber(4);
    }
    if (a == 3 && b == 2)
    {
        ClickNumber(5);
    }
    if (a == 3 && b == 3)
    {
        ClickNumber(6);
    }
    if (a == 3 && b == 4)
    {
        ClickOperator("*");
    }
    if (a == 3 && b == 5)
    {
        ClickOperator("/");
    }
    if (a == 4 && b == 1)
    {
        ClickNumber(1);
    }
    if (a == 4 && b == 2)
    {
        ClickNumber(2);
    }
    if (a == 4 && b == 3)
    {
        ClickNumber(3);
    }
    if (a == 4 && b == 4)
    {
        ClickOperator("**");
    }
    if (a == 4 && b == 5)
    {
        ClickOperator("%");
    }
    if (a == 5 && b == 1)
    {
        ClickNumber(Infinity);
    }
    if (a == 5 && b == 2)
    {
        ClickNumber(0);
    }
    if (a == 5 && b == 3)
    {
        Pound();
    }
    if (a == 5 && b == 4)
    {
        PlusMinus();
    }
    if (a == 5 && b == 5)
    {
        Equals();
    }
    if (A == Infinity)
    {
        A = "&infin;";
    }
    if (A == -Infinity)
    {
        A = "-&infin;";
    }
    if (B == Infinity)
    {
        B = "&infin;";
    }
    if (B == -Infinity)
    {
        B = "-&infin;";
    }
    if (C == Infinity)
    {
        C = "= &infin;";
    }
    else if (C == -Infinity)
    {
        C = "= -&infin;";
    }
    else if (C != C)
    {
        C = "&NotElement; &reals;";
    }
    else
    {
        C = "= " + C;
    }
    if (Phase == 0)
    {
        Div.innerHTML = A;
    }
    if (Phase == 1)
    {
        Div.innerHTML = A + " " + Operator + " " + B;
    }
    if (Phase == 2)
    {
        Div.innerHTML = A + " " + Operator + " " + B + " " + C;
    }
    if (A == "&infin;")
    {
        A = Infinity;
    }
    if (A == "-&infin;")
    {
        A = -Infinity;
    }
    if (B == "&infin;")
    {
        B = Infinity;
    }
    if (B == "-&infin;")
    {
        B = -Infinity;
    }
    if (C == "= &infin;")
    {
        C = Infinity;
    }
    else if (C == "= -&infin;")
    {
        C = -Infinity;
    }
    else if (C == "&NotElement; &reals;")
    {
        C = NaN;
    }
    else
    {
        C = C.substring(2);
    }
    DivSmall.innerHTML = "M = " + Memory;
}

function ClickNumber(n)
{
    if (Phase == 0 && !P)
    {
        if (A == 0)
        {
            A = n;
        }
        else
        {
            A = (String(A) + n) * 1;
        }
    }
    if (Phase == 0 && P)
    {
        A = (String(A) + n) * 1;
    }
    if (Phase == 1 && !P)
    {
        if (B == 0)
        {
            B = n;
        }
        else
        {
            B = (String(B) + n) * 1;
        }
    }
    if (Phase == 1 && P)
    {
        B = (String(B) + n) * 1;
    }
    if (Phase == 2)
    {
        Phase = 0;
        if (A == 0)
        {
            A = n;
        }
        else
        {
            A = A * 10 + n;
        }
    }
}

function ClickOperator(o)
{
    if (Phase == 0)
    {
        Phase = 1;
    }
    else if (Phase == 1 || Phase == 2)
    {
        var c = Calculate();
        if (c != c)
        {
            return;
        }
        A = c;
        B = 0;
        Phase = 1;
    }
    Operator = o;
}

function Calculate()
{
    return Function("return (" + A + ")" + Operator + B + ";")();
}

function Pound()
{
    P = true;
    if (Phase == 0)
    {
        A += ".";
    }
    if (Phase == 1)
    {
        B += ".";
    }
}

function PlusMinus()
{
    if (Phase == 0)
    {
        A = -A;
    }
    if (Phase == 1)
    {
        B = -B;
    }
}

function Equals()
{
    var replaceInd = false;
    if (String(A).endsWith("."))
    {
        A = (A + "0") * 1;
    }
    if (String(B).endsWith("."))
    {
        B = (B + "0") * 1;
    }
    if (A == 0 && B == 0 && Operator == "**")
    {
        Operator = "/";
        replaceInd = true;
    }
    C = Calculate();
    if (replaceInd)
    {
        Operator = "**";
    }
    Phase = 2;
}