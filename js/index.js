<script>
        
        let yoursAll = document.querySelectorAll('.yours');
        let result = document.querySelector('.result');

        // forEach(個體,註標/索引), 註標從0開始
        yoursAll.forEach(function(yours,index){
            yours.addEventListener('click',function(){
                console.log(yours,index);
                
                // 清空結果
                result.innerHTML = '';
                //電腦出牌
                let computer = Math.floor(Math.random()*3 ) +1;
                console.log(computer);
                //顯示兩家的牌
                let yours_index = index + 1;
                

               
                your_s = outText(yours_index); //傳回玩家出牌的對應中文

                computer_s = outText(computer); //傳回電腦出牌的對應中文
               
                out1  = win(yours_index,computer);
                
                
                result.innerHTML ='<br><br><br><br><br><br><br><br><br><br>' +'玩家出：' + outText(yours_index) + '，電腦出：' +  outText(computer) + '<br>' + win(yours_index,computer)
            })
        })

        // 函數 處理輸出牌中文
        function outText(card) { //card傳入給函數的參數
            if(card == 1 ){
                return "剪刀"; //回傳一個值"1.剪刀"
            }
            if(card == 2 ){
                return "石頭"; 
            }
                return "布";
        }

        // 判斷輸贏
        function win(you,another){ //參數可以輸入非常多值
            if (you - another == 0){
                return "Try again~~" ;
            }
            if (you - another == -1 || you - another == 2){
                return "Sorry~ you lose" ;
            }
            if (you - another == 1 || you - another == -2){
                return "Congrate! you win!!" ;
            }
        }




        
    </script>