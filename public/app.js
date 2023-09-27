redirect();
openpdf()
function redirect(){
    document.addEventListener("click" , (e) => {
        let btn_class = e.target.classList;
        for (let i = 0 ; i < btn_class.length ; i++){
            if (btn_class[i] === "btn-portfolio-live"){
                window.open("https://github.com/JosephRemingston/Joseph_website_" , "__blank");
            }
            else if (btn_class[i] === "btn-portfolio-code"){
                window.open("https://github.com/JosephRemingston/josephremingston" , "__blank");
            }
            else if (btn_class[i] === "instagram"){
                window.open("https://www.instagram.com/gorgeousgamer7781" , "__blank");
            }
            else if (btn_class[i] === "linkedin"){
                window.open("https://linkedin.com/in/joseph-remingston-8b6105259" , "__blank");
            }
            else if (btn_class[i] === "github"){
                window.open("https://www.github.com/JosephRemingston" , "__blank");
            }
            else if (btn_class[i] === "pdf"){
                window.open("Joseph'sResume.pdf" , "__blank");
            }
        }
    })
}
