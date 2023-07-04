(() => {
    let count = 0;
    function getAllButtons() {
        return [...document.querySelectorAll('.artdeco-button__text')].map(node => node.parentNode) || [];
    }
    async function unfollowAll() {
        const buttons = getAllButtons();

        for (let button of buttons) {
            if (button.querySelector('.artdeco-button__text').textContent.trim() === "Following") {
                count = count + 1;
                button.click();
                await new Promise((resolve) => setTimeout(resolve, 300));

                const unfollow = document.querySelectorAll(".artdeco-modal__confirm-dialog-btn")[1];
                unfollow.click();
                console.log(`Unfollow #${count}`);
                window.scrollTo(0, button.offsetTop - 260);

                await new Promise((resolve) => setTimeout(resolve, 300));
            }
        }
    }
    async function run() {
        await unfollowAll();
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const buttons = getAllButtons();
        if (buttons.length) run();
    }
    run();
})();