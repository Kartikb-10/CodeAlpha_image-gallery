  const galleryImages =
            document.querySelectorAll(".gallery img");

        const lightbox =
            document.getElementById("lightbox");

        const lightboxImg =
            document.getElementById("lightbox-img");

        const closeBtn =
            document.querySelector(".close");

        const nextBtn =
            document.querySelector(".next");

        const prevBtn =
            document.querySelector(".prev");

        let currentIndex = 0;

        galleryImages.forEach((img, index) => {

            img.addEventListener("click", () => {

                currentIndex = index;

                showImage();

                lightbox.style.display = "flex";
            });

        });

        function showImage() {
            lightboxImg.src =
                galleryImages[currentIndex].src;
        }

        nextBtn.addEventListener("click", () => {

            currentIndex++;

            if (currentIndex >= galleryImages.length) {
                currentIndex = 0;
            }

            showImage();
        });

        prevBtn.addEventListener("click", () => {

            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = galleryImages.length - 1;
            }

            showImage();
        });

        closeBtn.addEventListener("click", () => {

            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });

        /* Filters */

        function filterImages(category) {

            const images =
                document.querySelectorAll(".image");

            images.forEach(image => {

                if (category === "all") {
                    image.classList.remove("hidden");
                }

                else if (
                    image.classList.contains(category)
                ) {
                    image.classList.remove("hidden");
                }

                else {
                    image.classList.add("hidden");
                }

            });
        }
