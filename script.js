const thumbnails = Array.from(document.getElementsByClassName("thumbnail"));
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        if(document.querySelector(".thumbnail.active")) {
            document.querySelector(".thumbnail.active").classList.remove("active");
        }
        thumbnail.classList.toggle("active");
    });
    }
);

const colors = Array.from(document.getElementsByClassName("color"));
let selected = undefined;
colors.forEach((color) => {
    color.addEventListener("click", () => {
        if(!selected) {
            color.childNodes[3].classList.toggle("hidden");
            color.childNodes[5].classList.toggle("hidden");
            selected = color;
        }
        else if(selected === color) {
            color.childNodes[3].classList.toggle("hidden");
            color.childNodes[5].classList.toggle("hidden");
            selected = undefined;
        }
        else {
            selected.childNodes[3].classList.toggle("hidden");
            selected.childNodes[5].classList.toggle("hidden");
            color.childNodes[3].classList.toggle("hidden");
            color.childNodes[5].classList.toggle("hidden");
            selected = color;
        }
     
    });
    }
);

const sizes = Array.from(document.getElementsByClassName("size"));
let selectedSize = undefined;
sizes.forEach((size) => {
    size.addEventListener("click", () => {
        size.classList.toggle("selected");
        if(!selectedSize){
            size.childNodes[1].childNodes[3].classList.toggle("hidden");
        }
        else if(selectedSize === size){
            size.childNodes[1].childNodes[3].classList.toggle("hidden");
            selectedSize = undefined;
        }
        else {
            selectedSize.childNodes[1].childNodes[3].classList.toggle("hidden");
            size.childNodes[1].childNodes[3].classList.toggle("hidden");
            selectedSize = size;
        }
    });
    }
);
