// Send some Pix to myself
// var options = {enableP2P: false};
// EB.init(options);

// Initialize the EveryBit platform
PB.init();

function displayResult(results){
  $('#usernameResult').text(results.username);
  $('#createdAt').text(results.created);
  $('#key').text(results.defaultKey);
  $('p').slideDown();
  console.log(results);
}

function blowUp(err){
  alert("Ohno! Error! Check the console.");
  console.log(err);
}

function createIdentity(username, password){
  PB.createIdentity(username, password)
    .then(displayResult)
    .catch(blowUp);
};

(function initialBinding(){
  $('p').hide();

  $('input[type=submit]').on("click", function() {
    var username = $('#username').val();
    var password = $('#password').val();
    createIdentity(username, password);
  });
})();

// var login = function(username, password){
//   var prom = PB.loginWithPassphrase(username, password);
//   prom.then(function(success) {
//     console.log(success);
//     if(success) {
//       PB.postPublicMessage('Hello World');
//     } else {
//       return false;
//     }
//   });
// }
//
// login(username, password);
