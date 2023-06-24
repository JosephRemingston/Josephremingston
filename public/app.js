redirect();
function redirect(){
    document.addEventListener("click" , (e) => {
        let btn_class = e.target.classList;
        for (let i = 0 ; i < btn_class.length ; i++){
            if (btn_class[i] === "btn-portfolio-live"){
                window.open("https://github.com/JosephRemingston/Joseph_website_" , "__blank");
            }
            else if (btn_class[i] === "btn-portfolio-code"){
                window.open("https://github.com/JosephRemingston/Joseph_website_" , "__blank");
            }
        }
    })
}