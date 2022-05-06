

const convertToDecimal =  function (input, err) {
    try {

        
       
        input = document.getElementById('binaryInput').value;

        if (!(/[^01]/.test(input)) && input != ""){

            if (input.length >= 8) { 
                document.getElementById('result')
            .innerHTML = "Please, insert a binary number!";
        } else{
                
                console.log("teste"+ input);
                let result = parseInt(input, 2);

                document.getElementById('result')
                .innerHTML = result;

                document.getElementById('result')
                .style.color = 'black';
        }

    }   else { 
            document.getElementById('binaryInput').value = "";

            document.getElementById('result')
            .innerHTML = "Please, insert a binary number!";

            document.getElementById('result')
            .style.fontSize = "30px" ;

            document.getElementById('result')
            .style.color = 'red';


  }
    } catch (err) {
        console.log(err);

    }
}



