var John = {
     fullName: 'John naag',
     bills: [200, 300, 112, 345, 43],
     calcTips: function(){
         this.tips = [];
         this.finalValues = [];

         for (var i = 0; i < this.bills.length; i++){
             var percentage;
             var bill = this.bills[i];

             if(bill < 50){
                 percentage = .2;
             }
             else if(bill >= 50 && bill < 200){
                 percentage = .15;
             }
             else{
                 percentage = .1;
             }
             
             this.tips[i] = bill * percentage;
             this.finalValues[i] = bill + bill * percentage;
         }
     }
   
 }
 

  //part II

  var Mark = {
    fullName: 'Mark Tyson',
    bills: [200, 300, 112, 345, 43],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if(bill < 50){
                percentage = .2;
            }
            else if(bill >= 50 && bill < 300){
                percentage = .1;
            }
            else{
                percentage = .25;
            }
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
  
}
 
function calcAverage(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
 
 John.calcTips();
 Mark.calcTips();
 console.log(John, Mark);


 John.average = calcAverage(John.tips);
 Mark.average = calcAverage(Mark.tips);
 console.log(John, Mark);

 if(John.average > Mark.average){
     console.log(John.fullName + '\'s family pays higher tips, with an average of $' +John.average  ) ;                                                                                        
 }
  else if(Mark.average > John.average){

    console.log(Mark.fullName + '\'s family pays higher   tips, with an average of $' +Mark.average  ) ; 
  }
