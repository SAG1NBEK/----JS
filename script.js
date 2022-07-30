window.onload = function () {
    let search = document.getElementById("search");
    let listColors = document.querySelectorAll('.product__menu li');
    let notFoundTxt = document.querySelector('.not_found_text');
    const defaultInnerText = notFoundTxt.innerText;
    let fontSize = 32;

    search.addEventListener("input", () => {
        console.log("Searching proces");
        const hiddenColors = document.querySelectorAll('.product__menu li.hide');
        listColors.forEach(elem => elem.classList.remove('hide'));

        let searchValue = search.value.toLowerCase();

        if (searchValue.length) {
            listColors.forEach((elem) => {
                const text = elem.innerText.toLowerCase();

                if (text.search(searchValue) == -1) {
                    elem.classList.add('hide');
                }
            });
        }

        if (hiddenColors.length === listColors.length) {
            notFoundTxt.classList.add("not_found_text--visible");
            fontSize = fontSize * 1.01;
            notFoundTxt.style.fontSize = `${fontSize}px`;
            // notFoundTxt.innerText = `НЕ НАЙДЕНА! ${notFoundTxt.innerText}`
        } else {
            notFoundTxt.classList.remove("not_found_text--visible");
            fontSize = 32;
            // notFoundTxt.innerText = defaultInnerText;
        }
    });
};


/*
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iste, asperiores dicta consequatur dolores reiciendis nemo error, itaque est unde alias, quidem quae nihil quam. Illo porro impedit ducimus quas nesciunt non nostrum. Perspiciatis, nemo accusamus recusandae, accusantium voluptas maiores obcaecati unde animi quisquam mollitia veritatis commodi debitis non harum expedita ipsum voluptate officiis facilis labore illum dolores vitae. Fugiat, ipsa. Dolor similique sit porro nam blanditiis deleniti, mollitia debitis ut quod cumque explicabo veniam excepturi deserunt ipsam voluptates, quibusdam ratione minus quidem, beatae exercitationem culpa assumenda molestiae voluptatem at? Quaerat eveniet dignissimos omnis quis delectus, possimus exercitationem voluptatibus amet dolorum error aliquam mollitia fugiat neque veritatis deleniti perferendis ducimus. Quidem, qui autem? A facilis deleniti, adipisci nulla quisquam numquam itaque iure ipsum explicabo quos voluptates quis eum labore, accusantium voluptatem non repellat quam fuga necessitatibus. Numquam expedita distinctio nobis repellendus id eius, consectetur officia, doloremque praesentium quia voluptas asperiores ad eveniet impedit enim perspiciatis obcaecati magnam, est adipisci temporibus quasi in ab. Quas, at tempore amet ut dolor consequatur architecto. Illum minima voluptatum maiores consequatur asperiores fugiat sapiente distinctio natus necessitatibus sequi pariatur sunt vitae magnam laboriosam aspernatur obcaecati iure enim quisquam dolor ipsam, modi ullam. Cupiditate, quae voluptatibus!
*/