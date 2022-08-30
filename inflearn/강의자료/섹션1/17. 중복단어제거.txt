<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(s){  
                let answer;
                //console.log(s.indexOf("time"));
                answer=s.filter(function(v, i){
                    return s.indexOf(v)===i;
                });
                return answer;
            }
            let str=["good", "time", "good", "time", "student"];
            console.log(solution(str));
        </script>
    </body>
</html>