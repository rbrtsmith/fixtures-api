exports.idInArr = (arr, test) => !!arr.find(item => item.id === test);

exports.buildUTCTimestamp = (date, time) => new Date(`${date}:${time}`).toUTCString();
