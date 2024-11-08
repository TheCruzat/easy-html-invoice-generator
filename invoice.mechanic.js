// Variables for Item Loop
	let serviceStr = '';
	let totalAmt = 0;

// Item Loop draws string for layout + sums Item Total
	ITEMS.forEach((item, ndx) => {
		if(item.rate) itemRATE = item.rate; else itemRATE = RATE;
		itemTotal = itemRATE * item.time;
		serviceStr += '<div class="service-rack"><div>';
		serviceStr += item.desc;
		serviceStr += '</div><div>';
		serviceStr += itemRATE + LABELS['TIME_LABEL'];
		serviceStr += '</div><div>';
		serviceStr += item.time;
		serviceStr += '</div><div>';
		serviceStr += itemTotal;
		serviceStr += '</div></div>';

		totalAmt += itemTotal;
	});

// Write the Things to the Page
	document.querySelector('head title').innerHTML = ID['NAME'] + " Invoice " + INVOICENUMBER + " - " + DATE.replaceAll('/', '-');
	document.querySelector('header p').innerHTML = ID['NAME'] + '<br>' + ID['ADDRESS1'] + '<br>' + ID['ADDRESS2'];
	document.querySelector('header img').setAttribute('src', ID['LOGO']);
	document.querySelector('h1').innerHTML = LABELS['DATE_LABEL'] + ' <span>' + DATE + '</span>';
	document.querySelector('.header div:nth-child(1)').innerHTML = LABELS['HEADINGS'][0];
	document.querySelector('.header div:nth-child(2)').innerHTML = LABELS['HEADINGS'][1];
	document.querySelector('.header div:nth-child(3)').innerHTML = LABELS['HEADINGS'][2];
	document.querySelector('.header div:nth-child(4)').innerHTML = LABELS['HEADINGS'][3];
	document.querySelector('.service-case').innerHTML = serviceStr;
	document.querySelector('.total div:nth-child(1)').innerHTML = LABELS['TOTAL_LABEL'];
	document.querySelector('.total div:nth-child(2)').innerHTML = totalAmt;
	document.querySelector('footer h3 span:first-child').innerHTML = LABELS['INVOICE_LABEL'] + ' ' + INVOICENUMBER;
	document.querySelector('footer h3 span:last-child').innerHTML = LABELS['TO_LINE'] + ' ' + ID['NAME'];

// Are we showing Direct Deposit info or nah
	if(typeof hideDirectDeposit !== 'undefined' || (!ID['ROUTING'] || !ID['ACCOUNT'])) {
		document.querySelector('.account-info').style.display = 'none';
	} else {
		document.querySelector('.account-info div:nth-child(1)').innerHTML = LABELS['DD_LABEL'];
		document.querySelector('.account-info div:nth-child(2) span:first-child').innerHTML = LABELS['ROUTING_LABEL'];
		document.querySelector('.account-info div:nth-child(2) span:last-child').innerHTML = ID['ROUTING'];
		document.querySelector('.account-info div:nth-child(3) span:first-child').innerHTML = LABELS['ACCOUNT_LABEL'];
		document.querySelector('.account-info div:nth-child(3) span:last-child').innerHTML = ID['ACCOUNT'];
	}
