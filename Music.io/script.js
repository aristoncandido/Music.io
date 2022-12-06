let email = document.querySelector('#email');  //caixa do email
let caixa = document.querySelector("#caixa")  //section
let pass = document.querySelector('#pass');  ///password
let login = document.getElementById('logar'); //btn logar
let foto  = document.querySelector("#gravatar") // foto do login 
let modal  = document.querySelector('.popup'); //
let body = document.querySelector('body'); //
let footer = document.querySelector('footer')
let close = document.getElementById('close');



const user = 
{
        mail :'ariston@gmail.com',

        senha:'17092001'


}















login.addEventListener('click', logar); 

email.addEventListener  ("keyup", checar);


close.addEventListener('click',fechar)


function fechar () {
     
  

    modal.style.display ="none";
    caixa.style.filter = '';
    footer.style.filter ='';

}


function logar(evento){

    evento.preventDefault;

   // let modal  = document.querySelector('.popup');



    if(email.value === "" || pass.value === "" ){
   
        modalar() 
        
        

         






 
         
         
        














    }else if(email.value != "" || pass.value != "" ){

        if(  email.value== user.mail && pass.value == user.senha ){
               
           // alert("parabéns você logou com  " + user.mail + " e  a senha " + user.senha)
           
          window.location.href = './modal.html'

           
           
                 
        }

    }




} 




function checar(evento){


 
     //mudar  a foto de acordo com o email

    let texto  = evento.target.value.toLowerCase();
    


   let foto  = document.querySelector("#gravatar")
  
    let bancoEmail = "vivi@gmail.com";
    let bancoEmail2 =  user.mail
    
 
    console.log(texto);
  
    if(texto == bancoEmail  ) {  
           
        foto.src = './imgs/vivi.jpg'
        

    } else if (texto == bancoEmail2) {
               

        foto.src = './imgs/aris.jpeg'

    } 




    

}




function modalar () {

    

    modal.style.display ='block';
        
    caixa.style.filter = 'blur(10px)';
    footer.style.filter ='blur(10px)';
}





/* function enganar(){
    
   var x = Math.random();
   x = x *100

   x = x%2

    if(email.value === "" || pass.value === "" ){
     

    if(x  == 0)       
      var p =   login.style.left = '150%';
      
         


    }else{
         var p =   login.style.right = '150%';
      
        
        
    }
     
}

function corrigir(){
  
     var x = 0 ;  
     
   if(email.value === "" || pass.value === ""   ){
     

         
        var p =   login.style.left = '50%';
        
     
           
            
  
      }
 

      
}


 */