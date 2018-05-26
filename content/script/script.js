$(function () {
    $("#notify").click(function () {
        navigator.vibrate(1000);
        if (!("Notification" in window)) {
            $(".footer").html("<h3>Notification not available in your browser :(</h3>");
        } else if (Notification.permission === "granted") {
            var n = new Notification("You fell for that 😂", {
                body: "If you're really desperate for the blog, be back after sometime",
                icon: "https://i.imgflip.com/1dqsdr.jpg",
            });
        }
        else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("You fell for that 😂", {
                body: "If you're really desperate for the blog, be back after sometime",
                icon: "https://i.imgflip.com/1dqsdr.jpg",
            });
      }
    });
  }    });
});