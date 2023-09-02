import React from "react";

function DateConv(date){
    const deadline = new Date(date);
    const now = new Date();

    const timeLeft = deadline.getTime() - now.getTime();
    const daysLeft = Math.round(timeLeft/ (1000 * 3600 * 24));
    var text; 
    if (daysLeft < 0) {
        text = "Deadline passed";
    }

    else if (daysLeft === 0) {
        text = "Deadline today";
    }
    else{
        text = daysLeft + " days left";
    }

    return [text , deadline];
}

export default DateConv;