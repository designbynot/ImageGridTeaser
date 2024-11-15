document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    let isAnimating = false;

    // Function to get random position within grid
    function getRandomPosition(max) {
        return Math.floor(Math.random() * max);
    }

    // Function to swap two grid items
    function swapGridItems(item1, item2) {
        const temp = document.createElement('div');
        item1.parentNode.insertBefore(temp, item1);
        item2.parentNode.insertBefore(item1, item2);
        temp.parentNode.insertBefore(item2, temp);
        temp.parentNode.removeChild(temp);
    }

    // Function to perform random swaps
    function performRandomSwap() {
        if (isAnimating) return;
        
        isAnimating = true;
        const itemCount = gridItems.length;
        const pos1 = getRandomPosition(itemCount);
        let pos2 = getRandomPosition(itemCount);
        
        // Ensure we don't swap an item with itself
        while (pos2 === pos1) {
            pos2 = getRandomPosition(itemCount);
        }

        const item1 = gridItems[pos1];
        const item2 = gridItems[pos2];

        // Add transition class
        item1.style.transition = 'all 0.5s ease-in-out';
        item2.style.transition = 'all 0.5s ease-in-out';

        // Perform the swap
        swapGridItems(item1, item2);

        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
            item1.style.transition = '';
            item2.style.transition = '';
        }, 500);
    }

    // Perform random swaps periodically
    setInterval(performRandomSwap, 3000);

    // Add hover effect to show image details
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.zIndex = '2';
        });

        item.addEventListener('mouseleave', () => {
            item.style.zIndex = '1';
        });
    });
});
