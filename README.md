# Easy HTML Invoice Generator

I've always created my own invoice templates, and over the years I've used a bunch of different apps to do it (Curve, GIMP, Sketch, Illustrator... FLASH?!?). I decided to escape the design apps and recreate the layout as a future-friendly HTML gizmo that can be changed with a simple text editor.

I began by translating the layout into an HTML/CSS structure, with the idea being that the local HTML file can be opened in a browser, print the layout as a PDF, boom, you've got an invoice. I recently refactored the file so that all content and labels are controlled via external JavaScript, the aim being to create a system that even someone with minimal coding skill can customize and use, no live hosting required.

<br>

## Overview

There are five files in the application:
```
invoice.css			// styles for layout
invoice.html 			// structure for layout
invoice.js 			// invoice contents (line items, costs)
invoice.mechanic.js 		// collects contents & settings, writes document
invoice.settings.js 		// user info + ui labels
```
There is also a `logo.svg` for a logo example, and `README.md` for this documentation.

<br>

## Configuration

The first thing to do is to edit the `invoice.settings.js` file, and you will see this structure:
```
const ID = {
	LOGO: './logo.svg',
	NAME: 'Your Name',
	ADDRESS1: '5522 Calle de los Ejemplos',
	ADDRESS2: 'City / State / Zip',
	ROUTING: '987654321',
	ACCOUNT: '123456789',
	};
```

This is where your pertinent information is stored -- name, address and logo. There is also an option for direct deposit info, routing and account numbers, but these can be deleted if not needed.

> All values need to be framed in quotes, and quote symbols copied from a word proc doc aren't valid code.

An option for further customization are to tweak labels for the invoice, these are controlled in this structure.
```
const LABELS = {
	DATE_LABEL: 'Date of Invoice:',
	HEADINGS: [
		'service',
		'rate',
		'time',
		'subtotal',
	],
	DD_LABEL: 'direct deposit',
	TIME_LABEL: '/hr',
	ROUTING_LABEL: 'Routing #',
	ACCOUNT_LABEL: 'ACH #',
	TOTAL_LABEL: 'total due',
	INVOICE_LABEL: 'Invoice #',
	TO_LINE: 'funds payable to',
	};
```
These default values are what I use in my own invoices.

<br>

## Usage

Next, edit the `invoice.js` file, and you will see this structure:
```
const
	INVOICENUMBER = 'ABC-000',
	DATE = 'XX/YY/ZZ',

	RATE = 60,
	ITEMS = [
		{
			desc: 'I am an example task',
			time: 1.5
		},
		{
			desc: 'I am another example',
			time: 1.5
		},
		{
			desc: 'I am a third example',
			time: 1.75,
			rate: 90
		},
	];

// const hideDirectDeposit = true;
```
First, change the date, rate and invoice number values -- you should have some sort of system for organizing your invoices, I've always done 2-3 letters and 3 numbers. The rate value is global, but a given item can have a different rate specified, like the 3rd example item above.

Each of the sets under `ITEMS` will create a line item on the invoice, add or remove as needed.

Finally, there's an option to hide the direct deposit info -- it's commented out by default. Let's say you need to include it for client A but not client B, you can keep the info in settings and easily hide/show as required.

<br>

## Easy peasy

With all changes to `invoice.settings.js` and `invoice.js` saved, open up `invoice.html` in a browser, and you should see your content rendered in the layout. If it's blank, there's like a syntax error that's borking the JS.

In the browser, `File > Print`, and find the PDF output option -- different browsers do this differently but all the good ones have this option. The pre-populated file name is drawn from the document's Title and should also reflect the content entered.

### Hit save, and DONE! You've just created your first Invoice PDF. :tada:

> It should look something like <a target="_blank" href="https://thecruzat.com/Your%20Name%20Invoice%20ABC-000%20-%20XX-YY-ZZ.pdf">this</a>.

<br>

Once you have the info in settings, the only file you have to edit to create new invoices going forward is `invoice.js`. I would also recommend using GIT / version control, having different branches for different clients makes life a lot easier.

<br>

## Customization

All the styles live in `invoice.css` and the structure is common-sense, theming should be straightforward. `invoice.mechanic.js` and `invoice.html` aren't intended to be edited regularly, but if you come up with something cleaner, please send me a PR.

<br>

## Background

Ultimately this is intended to be part of a larger project around time tracking, if you have ideas about how to securely handle content, please reach out. For the time being, it's a useful standalone gadget.

In 2005, I had just started engineering at a recording studio in Evanston IL, the manager told me "just invoice me" and I felt like a deer in headlights. I wasn't sure what information to include, how to format things, it was new and terrifying. I wanted to offer this little gizmo to the world to help anyone having that same moment to get past the panic to the payday.
