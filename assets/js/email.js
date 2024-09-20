//Your security token is 31012f92-3205-461c-9484-214e50dc3486 Please take note of this.
var btn=document.getElementById('btn')
btn.addEventListener('click',function(e){
    e.preventDefault()
console.log('meegghhhhh');
var name=document.getElementById('name').value;
var email= document.getElementById('email').value;
var message=document.getElementById('message').value;
console.log(name,email,message);

Email.send({
    SecureToken : "4e2a365c-b752-4adb-a5fc-37f2ef3ee7cb",
    To : 'meghap1920@gmail.com',
    From :'meghap1920@gmail.com',
    Subject : "message",
    Body : "message"
}).then(
  message => alert(message)
);
}
)


