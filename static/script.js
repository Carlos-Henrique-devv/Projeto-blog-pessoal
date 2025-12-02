function copyTextBitcoin(wrapper) {
    const text = "bc1qftus08kdvpq7akcmk278nufem0zz97czc6tl5k";
    navigator.clipboard.writeText(text);

    const tooltip = wrapper.querySelector('.copy-tooltip-bitcoin');

    tooltip.textContent = "Copy";

    if (wrapper._timeout) clearTimeout(wrapper._timeout);

    wrapper._timeout = setTimeout(() => {
        tooltip.textContent = "Copy Bitcoin address";
    }, 500);
}


function copyTextPix(wrapper) {
    const text = "72302a5a-0ae8-4034-b0d1-85454a99710e";
    navigator.clipboard.writeText(text);

    const tooltip = wrapper.querySelector('.copy-tooltip-pix');

    tooltip.textContent = "Copy";

    if (wrapper._timeout) clearTimeout(wrapper._timeout);

    wrapper._timeout = setTimeout(() => {
        tooltip.textContent = "Copy Key Pix";
    }, 500);
}



