var listİmg = {
    Elements: {
        img: document.getElementById("position"),
    },
    Actions: {

        scroll: () => {
            var scroll = window.scrollY;
            var el = listİmg.Elements;
            if (scroll >= 300) {
                el.img.classList.add("on");
            } else if (scroll < 300) {
                el.img.classList.remove("on");

            }
        }

    }
}