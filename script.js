// InvoiceForge – Full logic for tabs, due dates, and invoice data

// ---------- DOM Elements ----------
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
const dueTerms = document.getElementById('dueTerms');
const customDateGroup = document.getElementById('customDateGroup');
const customDueDate = document.getElementById('customDueDate');
const issueDateInput = document.getElementById('issueDate');

// ---------- Tab Switching ----------
tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        tabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(`tab-${tabId}`).classList.add('active');
    });
});

// ---------- Due Date Logic ----------
function updateDueDate() {
    if (dueTerms.value === 'custom') {
        customDateGroup.style.display = 'block';
    } else {
        customDateGroup.style.display = 'none';
        if (issueDateInput.value && dueTerms.value !== 'custom') {
            const issue = new Date(issueDateInput.value);
            const days = parseInt(dueTerms.value);
            const due = new Date(issue);
            due.setDate(issue.getDate() + days);
            customDueDate.value = due.toISOString().slice(0,10);
        }
    }
}
dueTerms.addEventListener('change', updateDueDate);
issueDateInput.addEventListener('change', updateDueDate);

// Set today's date as default
issueDateInput.value = new Date().toISOString().slice(0,10);
updateDueDate();

// ---------- Load/Save Invoice Data (to be expanded) ----------
console.log('InvoiceForge tabs and due date logic ready');