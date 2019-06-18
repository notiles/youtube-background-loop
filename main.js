function i(e) {
  e.target.mute(), e.target.playVideo();
}

function u(e) {
  e.getIframe().parentNode && (e.seekTo(0.2, !0), e.playVideo());
}

function stateChange(a, s) {
  return function(e) {
    var t,
      n,
      r,
      o = e.data,
      i = e.target;
    switch (o) {
      case YT.PlayerState.PLAYING:
        return (
          (n = a),
          void (
            0 < (r = (t = i).getDuration() - t.getCurrentTime() - 0.2) &&
            (window.clearTimeout(n),
            (n = window.setTimeout(function() {
              u(t);
            }, 1e3 * r)))
          )
        );
      case YT.PlayerState.BUFFERING:
        return void window.clearTimeout(a);
      case YT.PlayerState.ENDED:
        return window.clearTimeout(a), void u(i);
    }
  };
}

var player;
var divPlayer = document.getElementById("player");

window.onYouTubeIframeAPIReady = function() {
  player = new window.YT.Player("player", {
    videoId: "aTF-AnYLSUo",
    playerVars: {
      autoplay: 0, // start automatically
      loop: 0, // loop when complete
      mute: 1,
      rel: 0,
      modestbranding: 1,
      showinfo: 0,
      controls: 0,
      autohide: 1,
      disablekb: 1,
      fs: 0,
      html5: 1,
      enablejsapi: 1,
      iv_load_policy: 3,
      playsinline: 1
    },
    events: {
      onReady: i,
      onStateChange: stateChange(0, divPlayer)
    }
  });

  delete window.onYouTubeIframeAPIReady;
};
var t = document.createElement("script");
(t.src = "https://www.youtube.com/iframe_api"), document.head.appendChild(t);
