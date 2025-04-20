var canvas = document.getElementById("myCanvas");
    var stage = new createjs.Stage(canvas);

    var w = canvas.width;
    var h = canvas.height;

    var text = new createjs.Text(
      "the longer I'm with you\n" +
      "the more I love you",
      "bold 24px Arial", "#fff"
    );

    text.textAlign = "center";
    text.x = w / 2;
    text.y = h / 2 - text.getMeasuredLineHeight();

    stage.addChild(text);
    stage.update();
