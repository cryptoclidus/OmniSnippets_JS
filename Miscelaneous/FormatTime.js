function formatTime(time) //Time in seconds
{
    var hours = mathjs.floor(time/3600);
    var timeLeft = time - hours*3600;
    var minutes = mathjs.floor(timeLeft/60);
    var seconds = timeLeft-minutes*60;
    return hours+":"+minutes+":"+seconds;
}
