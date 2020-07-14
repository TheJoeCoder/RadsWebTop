import Cookies from 'js-cookie';

function checkLogin(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.useruid.value == "myuserid" && form.userpwd.value == "mypswrd")
  {
    window.open('target.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}

//Cookies.set('name', 'example');
//console.log(Cookies.get('name'));
