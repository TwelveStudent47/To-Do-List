const check = $(".checkbox");
const checked = $(".checked-btn");

$(".checkbox").click(function() {
    const parent = $(this).closest(".card-custom");
    $(this).addClass("hd");
    parent.find(".checked-btn").removeClass("hd");
})

$(document).ready(function () {
    $(".delete-form").on("submit", function (e) {
      if (!confirm("Are you sure you want to delete this task?")) {
        e.preventDefault();
      }
    });
  });