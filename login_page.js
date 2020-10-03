window.onload = function(){
    var btn = document.getElementById('btn'),
        user = document.getElementById('user'),
        psd = document.getElementById('psd')
    
    btn.onclick = function(){
        var user_data = user.value;
        var psd_data = psd.value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET','http://localhost:8800?user');
        xhr.send;
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){

                }else{

                }
            }
        }
    }
}