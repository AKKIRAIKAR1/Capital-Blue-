document.addEventListener("DOMContentLoaded", function () {
    // Live Market Ticker Data (Mock Data for now)
    const stockTicker = document.getElementById("liveStockTicker");
    const stocks = ["AAPL +1.2%", "GOOGL -0.5%", "TSLA +2.1%", "MSFT -0.3%", "AMZN +0.8%"];
    let index = 0;

    setInterval(() => {
        stockTicker.innerText = stocks[index];
        index = (index + 1) % stocks.length;
    }, 2000);

    // Ensure search button executes fetchStockData
    document.getElementById("searchButton").addEventListener("click", fetchStockData);

    // Fetch and Update Stock Data
    function fetchStockData() {
        const stockSymbol = document.getElementById("stockSymbol").value.toUpperCase();
        if (stockSymbol === "") {
            alert("Please enter a stock symbol!");
            return;
        }

        alert(`Fetching predictions for ${stockSymbol}... (API integration needed)`);

        // Mock stock data for the graph (you would replace this with real data from an API)
        const mockData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [{
                label: `${stockSymbol} Stock Price Prediction`,
                data: [150, 160, 145, 170, 180, 175, 185],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
                tension: 0.4
            }]
        };

        // Create the chart
        const ctx = document.getElementById('stockChart').getContext('2d');
        const stockChart = new 
            Chart(ctx, 
            {
            type: 'line',
            data: mockData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
            }
        );
    }
});
