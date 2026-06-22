chrome.runtime.onMessage.addListener((message) => {

    if (message.action === "OPEN_READER") {

        if (document.getElementById("upsc-reader-overlay")) {
            return;
        }

        const iframe =
            document.querySelector(
                "#ContentPlaceHolder1_iframepressrealese"
            );

        const articleElement =
            iframe?.contentDocument?.querySelector(
                ".innner-page-main-about-us-content-right-part"
            );

        const articleHTML =
            articleElement?.innerHTML
            || "<h1>Article not found</h1>";

        const articleTitle =
            iframe.contentDocument
                .querySelector("h1,h2")
                ?.innerText || "";

        const overlay = document.createElement("div");

        overlay.id = "upsc-reader-overlay";

        overlay.innerHTML = `
        <div class="reader-container">

            <button id="close-reader">
                Close
            </button>

            <h1 class="article-title">
                ${articleTitle}
            </h1>

            <div class="article-content">
                ${articleHTML}
            </div>

        </div>
        `;

        document.body.appendChild(overlay);

        document
            .getElementById("close-reader")
            .addEventListener("click", () => {
                overlay.remove();
            });
    }
});