var acc = document.getElementsByClassName("card");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var isActive = this.classList.contains("active");
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
    }
    if (!isActive) {
      this.classList.add("active");
    }
    else {
      acc[0].classList.add("active");
    }
  });
}

const divisions = document.querySelectorAll(".card");
let lastClickedIndex = -1;

divisions.forEach((division, index) => {
    division.addEventListener("click", () => {
        if (index === lastClickedIndex) {
            lastClickedIndex = -1;
        }
        else{
          lastClickedIndex = index;
        }
        divisions.forEach((anotherDivision, anotherIndex) => {
            if (index === anotherIndex) {
                division.style.transform = "translateX(-32.5vw)"
            } else if (anotherIndex > index) {
                anotherDivision.style.transform = "translateX(0)";
            } else {
                anotherDivision.style.transform = "translateX(-32.5vw)";
            }
        });

          division.addEventListener("click", () => {
            if(lastClickedIndex!=index){
                    if (index < lastClickedIndex) {
                      divisions.forEach((newDivision, newIndex) => {
                        if (newIndex<=lastClickedIndex && newIndex > index) {
                            division.style.transform = "translateX(32.5vw)"
                        }
                    });
                    }
                    else{
                      divisions.forEach((newDivision, newIndex) => {
                        if (newIndex>lastClickedIndex && newIndex <= index) {
                            division.style.transform = "translateX(-32.5vw)"
                        }
                    });
                    }
                    
              } else {

                    division.style.transform = "translateX(0)";

              }
          })
    });
});




