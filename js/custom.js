$(function () {
  const progressBox = $(".progress-bar");
  const progressOst = $(".animation").offset().top - 500;
  let isAni = false;
  $("#fullpage").fullpage({
    anchors: [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6",
    ],
    navigation: true,
    navigationPosition: "left",
    sectionsColor: ["#ccc", "#ddd", "#bbb", "#aaa", "#eee"],
    onLeave: function (origin, destination, direction, trigger) {
      console.log(origin, destination, direction, trigger);
      var origin = $(this);
      // === < 자료형태가 같은지
      // == < 안에 형태까지 같은지
      //   if (destination === 2) {
      //     $("section").eq(1).css("background", "red");
      //   }
      if (destination === 3) {
        //$("#fp-nav ul li a").removeClass("add");
        $("#fp-nav ul li").eq(3).find("a").addClass("add");
        if (isAni == false) {
          progressAni();
          isAni = true;
        }
      }
    },
  });

  function progressAni() {
    progressBox.each(function () {
      let $this = $(this), //progress-bar 중에 해당 순번이 되는 애가 this가 된다. \ $는 변수명으로 사용 가능하다.
        progressBar = $this.find(".bar"),
        progressText = $this.find(".rate"),
        progressRate = progressText.attr("data-rate"); //attr 은 대상의 속성을 가져올수있다.
      console.log(progressRate);
      progressBar.animate({ width: progressRate + "%" }, 2500);
      /**
       * progressBar.animate({width:progressRate+%}, 2500)
       * %를 안하면 기본 단위 px로 됨. 단위인 % 로 적을것
       * */

      //변수 text 선언 후 익명함수 할당
      let text = function () {
        $().animate();
        $({ rate: 0 }).animate(
          { rate: progressRate },
          {
            duration: 2000,
            progress: function () {
              let now = this.rate;
              progressText.text(Math.floor(now) + "%");
              // Math.floor은 소수점이 안보이게
            },
            complete: function () {
              isAni = true;
            },
          }
        );
      };
      text();
    });
  }
});
