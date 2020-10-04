window.onload = function(){
    var btn = document.getElementById('btn'),
        user = document.getElementById('user'),
        psd = document.getElementById('psd'),
        insert = document.getElementById('insert');
    
    btn.onclick = function(){
        var user_data = user.value;
        var psd_data = psd.value;
        console.log(user_data,psd_data);
        var xhr = new XMLHttpRequest();
        var data = 'name='+ encodeURIComponent(user_data)+ '&pwd='+ encodeURIComponent(psd_data);
        xhr.open('POST','/carrots-admin-ajax/a/login',true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    var ret_data = JSON.parse(xhr.responseText);
                    console.log(ret_data);
                    console.log(ret_data.code);
                    if(ret_data.code === 0){
                        location.assign = 'http://dev.admin.carrots.ptteng.com';
                    }else{
                        insert.innerText = ret_data.message;
                    }
                }
            }
        }
    }
}