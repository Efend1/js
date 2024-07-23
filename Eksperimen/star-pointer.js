            /** --------------

                    *
                   **
                  ***
                 ****
                *****
               ******
              *******
             ********
            *********


            ----------------*/

            let y = 10;
            let x = 10;

            let str = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i + j >= y){
                        str = str.concat("*");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }

            console.log(str)


            /**_______________________



            *********
             ********
              *******
               ******
                *****
                 ****
                  ***
                   **
                    *


             _______________________*/

            let str2 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i <= j ){
                        str2 = str2.concat("*");
                    }else{
                        str2 = str2.concat(" ")
                    }
                }
                str2 = str2.concat("\n")
            }

            console.log(str2)


            /**----------------------


            *
            **
            ***
            ****
            *****
            ******
            *******
            ********


             -------------------------*/


            let str3 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i >= j ){
                        str3 = str3.concat("*");
                    }
                }
                str3 = str3.concat("\n")
            }

            console.log(str3)

            /**-------------------------


             *********
             ********
             *******
             ******
             *****
             ****
             ***
             **
             *

             ---------------------------*/
            let str4 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if( j >= i ){
                        str4 = str4.concat("*");
                    }
                }
                str4 = str4.concat("\n")
            }

            console.log(str4)

            /**--------------------
             Diamond of Asterisks

                 *
                ***
               *****
              *******
             *********
              *******
               *****
                ***
                 *


             ---------------------*/

            let str5 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
                        str5 = str5.concat("*");
                    }else if(i >= y / 2
                      && j > ((y / 2) -  i) * (-1)
                      && j < (y - ((y / 2) -  i) * (-1))){
                        str5 = str5.concat("*");
                    }
                    else {
                        str5 = str5.concat(" ");
                    }
                }
                str5 = str5.concat("\n");
            }

            console.log(str5)