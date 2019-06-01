// $(function() {
//   $(".change-devoured").on("click", function(event) {
//     var id = $(this).data("id");
//     var newDevoured = $(this).data("newdevoured");

//     var newDevouredState = {
//       devoured: newDevoured
//     };

//     //send PUT req to database.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newDevouredState
//     }).then(
//       function() {
//         console.log("change devoured to", newDevoured);
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // prevent page reloading
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#burgerName").val().trim(),
//       devoured: 0
//     };

//     // send POST req.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("made a new burger");
//         location.reload();
//       }
//     );
//   });
// });