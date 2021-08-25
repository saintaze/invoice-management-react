class Validator {
  isPresent(val){
    return !!val.trim().length;
  }

  isEmail(val){
    const emailPattern = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(val);
  }

  isPhoneNumber(val){
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phonePattern.test(val);
  }

  isPinCode(val){
    const pinCodePattern = /^\d{6}$/;
    return pinCodePattern.test(val);
  }

	isNumber(val){
    return !isNaN(parseFloat(val));
  }

	isInteger(val){
    return Number.isInteger(parseFloat(val));
  }

  isNegativeNumber(val){
    const numSign = Math.sign(parseFloat(val));
    return (numSign === -1 || numSign === -0) && val !== 0;
  }

	isZero(val){
		return val.slice(0,2).startsWith('0') || val.slice(0,2).startsWith('-0');
	}

  isBiggerThan(val, upperBound){
    return parseFloat(val) > parseFloat(upperBound);
  }

	exceedsMaxLength(val, maxLength){
    return val.trim().length > maxLength;
  }
}

export default new Validator();