// InvoiceForge – Core Data & Storage

// Default invoice structure
const defaultInvoice = {
    meta: {
        invoiceNumber: 'INV-001',
        issueDate: new Date().toISOString().slice(0,10),
        dueDate: new Date(Date.now() + 14*24*60*60*1000).toISOString().slice(0,10),
        currency: 'USD',
        notes: '',
    },
    from: {
        name: 'Your Name',
        email: 'you@example.com',
        address: '123 Business St, City',
        taxId: '',
    },
    to: {
        name: 'Client Name',
        email: 'client@example.com',
        address: '456 Client Ave, City',
    },
    items: [
        { id: '1', description: 'Web development', quantity: 1, rate: 500, taxable: true },
    ],
    tax: { rate: 17, label: 'VAT' },
    discount: { type: 'percent', value: 0 },
};

// Load or initialize invoice data
let invoice = JSON.parse(localStorage.getItem('invoiceforge')) || defaultInvoice;

// Save to localStorage every time invoice changes
function saveInvoice() {
    localStorage.setItem('invoiceforge', JSON.stringify(invoice));
}

// Initial save if localStorage was empty
if (!localStorage.getItem('invoiceforge')) {
    saveInvoice();
}

console.log('InvoiceForge ready', invoice);