let aaa = 1


function lalala() {

    aaa += 1

    if (aaa > 4){ 
        aaa = 1
    }

    const a1 = document.getElementById("a1")
    const a2 = document.getElementById("a2")
    const a3 = document.getElementById("a3")
    const a4 = document.getElementById("a4")

  

    switch (aaa) {
        //trch spaghetti ale nie wazne  
        case 1:

            a3.style.display = "none"

            a1.style.display = "block"
            break

        case 2:

            a1.style.display = "none"

            a2.style.display = "block"
            break

        case 3:

            a2.style.display = "none"

            a3.style.display = "block"
            break
        case 4:
            a3.style.display = "none"

            a4.style.display = "block"
            break
    }
}
