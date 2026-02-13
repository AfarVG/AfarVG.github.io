var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  $('.heart').each(function(){
    var top = $(this).css("top").replace(/[^-\d\.]/g, '');
    var width = $(this).css("width").replace(/[^-\d\.]/g, '');
    if(top <= -100 || width >= 150){
      $(this).detach();
    }
  });
},500);


$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

  const audio = document.getElementById("audio");
  const btnPlayPause = document.getElementById("btnPlayPause");
  const seekBar = document.getElementById("seekBar");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");

  // Play / Pause
  btnPlayPause.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      btnPlayPause.textContent = "Pause";
      btnPlayPause.classList.remove("play");
      btnPlayPause.classList.add("pause");
    } else {
      audio.pause();
      btnPlayPause.textContent = "Play";
      btnPlayPause.classList.remove("pause");
      btnPlayPause.classList.add("play");
    }
  });

  // Actualizar duración
  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
    seekBar.max = audio.duration;
  });

  // Actualizar barra de progreso mientras se reproduce
  audio.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    seekBar.value = audio.currentTime;
  });

  // Cambiar posición con la barra
  seekBar.addEventListener("input", () => {
    audio.currentTime = seekBar.value;
  });

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
