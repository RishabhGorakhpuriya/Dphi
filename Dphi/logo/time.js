/* start in js */
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
   
    let offer= "july 05, 2022 00:00:00",
        countDown = new Date(offer).getTime(),
        x = setInterval(function() {    
   
          let now = new Date().getTime(),
              distance = countDown - now;
   
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
   
          //do something later when date is reached
          if (distance < 0) {
            let countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
   
            headline.innerText = "Ohhh no! Offer has ended";
            countdown.style.display = "none";
            content.style.display = "block";
   
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

/* start in js */
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
     
      let offer= "july 20, 2022 00:00:00",
          countDown = new Date(offer).getTime(),
          x = setInterval(function() {    
     
            let now = new Date().getTime(),
                distance = countDown - now;
     
            document.getElementById("days-1").innerText = Math.floor(distance / (day)),
              document.getElementById("hours-1").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes-1").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds-1").innerText = Math.floor((distance % (minute)) / second);
     
            //do something later when date is reached
            if (distance < 0) {
              let countdown = document.getElementById("countdown-1"),
                  content = document.getElementById("content");
     
              headline.innerText = "Ohhh no! Offer has ended";
              countdown.style.display = "none";
              content.style.display = "block";
     
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());


      /* End on js */
      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
       
        let offer= "june 25, 2022 00:00:00",
            countDown = new Date(offer).getTime(),
            x = setInterval(function() {    
       
              let now = new Date().getTime(),
                  distance = countDown - now;
       
              document.getElementById("days-2").innerText = Math.floor(distance / (day)),
                document.getElementById("hours-2").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes-2").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds-2").innerText = Math.floor((distance % (minute)) / second);
       
              //do something later when date is reached
              if (distance < 0) {
                let countdown = document.getElementById("countdown-1"),
                    content = document.getElementById("content");
       
                headline.innerText = "Ohhh no! Offer has ended";
                countdown.style.display = "none";
                content.style.display = "block";
       
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());
  


      /* End in js */
        (function () {
          const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
         
          let offer= "june 25, 2022 00:00:00",
              countDown = new Date(offer).getTime(),
              x = setInterval(function() {    
         
                let now = new Date().getTime(),
                    distance = countDown - now;
         
                document.getElementById("days-3").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours-3").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("minutes-3").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("seconds-3").innerText = Math.floor((distance % (minute)) / second);
         
                //do something later when date is reached
                if (distance < 0) {
                  let countdown = document.getElementById("countdown-1"),
                      content = document.getElementById("content");
         
                  headline.innerText = "Ohhh no! Offer has ended";
                  countdown.style.display = "none";
                  content.style.display = "block";
         
                  clearInterval(x);
                }
                //seconds
              }, 0)
          }());



          (function () {
            const second = 1000,
                  minute = second * 60,
                  hour = minute * 60,
                  day = hour * 24;
           
            let offer= "june 25, 2022 00:00:00",
                countDown = new Date(offer).getTime(),
                x = setInterval(function() {    
           
                  let now = new Date().getTime(),
                      distance = countDown - now;
           
                  document.getElementById("days-4").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours-4").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes-4").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds-4").innerText = Math.floor((distance % (minute)) / second);
           
                  //do something later when date is reached
                  if (distance < 0) {
                    let countdown = document.getElementById("countdown-4"),
                        content = document.getElementById("content");
           
                    headline.innerText = "Ohhh no! Offer has ended";
                    countdown.style.display = "none";
                    content.style.display = "block";
           
                    clearInterval(x);
                  }
                  //seconds
                }, 0)
            }());



            (function () {
              const second = 1000,
                    minute = second * 60,
                    hour = minute * 60,
                    day = hour * 24;
             
              let offer= "june 25, 2022 00:00:00",
                  countDown = new Date(offer).getTime(),
                  x = setInterval(function() {    
             
                    let now = new Date().getTime(),
                        distance = countDown - now;
             
                    document.getElementById("days-5").innerText = Math.floor(distance / (day)),
                      document.getElementById("hours-5").innerText = Math.floor((distance % (day)) / (hour)),
                      document.getElementById("minutes-5").innerText = Math.floor((distance % (hour)) / (minute)),
                      document.getElementById("seconds-5").innerText = Math.floor((distance % (minute)) / second);
             
                    //do something later when date is reached
                    if (distance < 0) {
                      let countdown = document.getElementById("countdown-5"),
                          content = document.getElementById("content");
             
                      headline.innerText = "Ohhh no! Offer has ended";
                      countdown.style.display = "none";
                      content.style.display = "block";
             
                      clearInterval(x);
                    }
                    //seconds
                  }, 0)
              }());