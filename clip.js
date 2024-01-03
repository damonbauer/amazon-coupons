// Product pages
document.querySelectorAll('input[id^="checkboxpctch"]').forEach((checkbox) => {
    checkbox.click();
});

// Cart page
document.querySelectorAll('.sc-coupon-wrapper a.sc-action-link').forEach(
    (link) => {
    link.click();
});
