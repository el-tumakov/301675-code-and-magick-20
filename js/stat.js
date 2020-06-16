'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var TEXT_GAP = 20;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_X = -90;
  var BAR_Y = -240;
  var BAR_GAP = 50;
  var TIME_GAP = 70;
  var MARGIN_BOTTOM = 25;
  var COORD_ANGLE_ROTATE = (Math.PI / 180) * 180;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getRandomBlueColor = function () {
    var randomSaturation = Math.random() * 100;

    return 'hsl(240, ' + randomSaturation + '%, 50%)';
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(
        ctx,
        CLOUD_X + CLOUD_GAP,
        CLOUD_Y + CLOUD_GAP,
        'rgba(0, 0, 0, 0.7)'
    );
    renderCloud(
        ctx,
        CLOUD_X,
        CLOUD_Y,
        '#ffffff'
    );

    ctx.save();
    ctx.translate(CLOUD_X, CLOUD_Y);

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';

    var headings = ['Ура вы победили!', 'Список результатов:'];

    for (var i = 0; i < headings.length; i++) {
      ctx.fillText(
          headings[i],
          TEXT_GAP,
          TEXT_GAP * (i + 1)
      );
    }

    var maxTime = window.utils.getMaxElement(times);

    for (i = 0; i < players.length; i++) {
      ctx.fillText(
          Math.round(times[i]),
          BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
          TIME_GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime
      );
      ctx.fillText(
          players[i],
          BAR_GAP + (BAR_GAP + BAR_WIDTH) * i,
          CLOUD_HEIGHT - MARGIN_BOTTOM
      );

      ctx.save();
      ctx.rotate(COORD_ANGLE_ROTATE);

      ctx.fillStyle = getRandomBlueColor();

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }

      ctx.fillRect(
          BAR_X - (BAR_GAP + BAR_WIDTH) * i,
          BAR_Y,
          BAR_WIDTH,
          (BAR_HEIGHT * times[i]) / maxTime
      );
      ctx.restore();
    }

    ctx.restore();
  };
})();
