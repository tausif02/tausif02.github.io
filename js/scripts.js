document.addEventListener("DOMContentLoaded", function () {
    loadRandomCat();
    loadCatTagCounts();
});

function loadRandomCat() {
    const catContainer = document.getElementById("cat-container");

    const imageUrl = "https://cataas.com/cat"; 

    catContainer.innerHTML = `
        <img src="${imageUrl}" class="img-fluid" alt="Random Cat" />
    `;
}
async function loadCatTagCounts() {
    try {
        const response = await fetch("https://cataas.com/api/tags");
        if (!response.ok) throw new Error("Failed to fetch cat tags");

        const tags = await response.json();
        if (!tags || tags.length === 0) {
            console.warn("No cat tags found.");
            return;
        }

        const tagCounts = tags.slice(0, 5).map(tag => ({
            tag,
            count: Math.floor(Math.random() * 100) + 1
        }));

        const labels = tagCounts.map(t => t.tag);
        const data = tagCounts.map(t => t.count);

        const ctx = document.getElementById("catChart").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Number of Cats",
                    backgroundColor: "rgba(75, 192, 192, 0.5)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    data: data,
                }]
            }
        });

        console.log("Chart successfully initialized!");

    } catch (error) {
        console.error("Error loading cat tag counts:", error);
    }
}
