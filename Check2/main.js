function changelang() {
    
    if(document.getElementById(`selectLanguages`)){
        id = document.getElementById(`selectLanguages`).Value;
        //日本語を選択
        if(id == `jpn`){document.getElementById(`nihon`).style.display = "";
            document.getElementById(`eigo`).style.display = "none";
            //英語を選択
        }else if(id == `en`){
            document.getElementById(`nihon`).style.display = "none";
            document.getElementById(`eigo`).style.display = "";
            //両方選択
        }else if(id == `all`){
            document.getElementById(`nihon`).style.display = "";
            document.getElementById(`eigo`).style.display = "";
        }
    }
    
}