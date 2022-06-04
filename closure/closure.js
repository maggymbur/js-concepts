var a = 10;
        function first_func(){
            var b= 20;
            function second_func(){
                var c = a+b;
                return c
            }
            return second_func();
        }
        var sum = first_func()
        document.write("the sum is " + sum + '<br>')