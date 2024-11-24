function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none'); // Hide all tab contents

    const activeTab = document.getElementById(tabName);
    if (activeTab) activeTab.style.display = 'block'; // Show the selected tab content

    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
    event.currentTarget.classList.add('active'); // Add 'active' class to the clicked button
}
