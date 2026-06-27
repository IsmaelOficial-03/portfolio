function copyEmail() {
    const email = document.querySelector('.email-text').textContent.trim();
    
    navigator.clipboard.writeText(email).then(() => {
        const btn = document.querySelector('.copy-btn');
        const original = btn.innerHTML;
        
        btn.innerHTML = '✅';
        btn.style.backgroundColor = '#4ade80';
        
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.backgroundColor = '';
        }, 1600);
    });
}