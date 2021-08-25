import moment from 'moment';

export const formatDate = (date) => {
	return moment.utc(date).local().format('hh:mm A');
}

export const formatToTimeAgo = (date) => {
	return moment.utc(new Date(date).toISOString()).local().fromNow();
}

export const zeroPad = (num, places=2) => {
	return String(num).padStart(places, '0');
}

export const formatCommaSeparated = (num, isRounded=true, isPadded=true) => {
	if (isRounded) num = Math.round(num);
	const decimalPlace = isPadded ? 2 : 0;
	return Number(parseFloat(num).toFixed(decimalPlace)).toLocaleString('en', {minimumFractionDigits: decimalPlace});
}