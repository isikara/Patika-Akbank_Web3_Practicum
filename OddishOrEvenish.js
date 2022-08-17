function oddishOrEvenish(number) {
	
	let total = 0;
	let digit = 0;

	while(number > 0) {
		digit = number % 10;
		total += digit;
		number = Math.floor(number / 10);
	}

		if(total % 2 == 0) {
			return "Even";
		} else { 
			return "Odd";
		}		
}

oddishOrEvenish(4433);
