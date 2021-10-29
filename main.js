fetch('https://todn22mvx9.execute-api.ap-south-1.amazonaws.com/dev/access',{
    method: 'POST',
    headers: {'content-type': 'application/json',
        
        'x-api-key':'JU9eKYSwUW6lVlvGKrUkF71P1aybSR9y73jZ00y0'},
    body: JSON.stringify({
        "email": "tajul.stn99@gmail.com"
    })

})
let a;
a=10;

const xhr=new XMLHttpRequest();
xhr.open('GET','https://todn22mvx9.execute-api.ap-south-1.amazonaws.com/dev/access?email=tajul.stn99@gmail.com')
xhr.send();
  