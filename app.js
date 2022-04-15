document.getElementById("change").addEventListener("click", change);


function change(){
    
    const xhr  = new XMLHttpRequest();
    
    xhr.open("GET", "https://open.er-api.com/v6/latest/USD");   // true yazmadık. Çünkü asenkron linki dışarıdan aldık.
    
    xhr.onload = function(){
        
        if(this.status){
            
            const response = JSON.parse(this.responseText);   // JSON objesi olarak almak istiyoruz.
            
            // console.log(response);
            
            const rate  = response.rates.TRY;
            
            const amount = Number(document.getElementById("amount").value);   // Stringi Number'a çevirdik.
            
            document.getElementById("tl").value = amount * rate;
        
        }
    }
    
    xhr.send();
}