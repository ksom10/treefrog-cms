function initButtons() {
  $('#home').click(function() {
    $('#addNav div').removeClass('active');
    $('#home div').addClass('active');

    $('#createMainNav').off();

    $('.text-wrapper').html(TREEFROG_SERVICE.getHomeContent());
    $('.btn-holder').html(TREEFROG_SERVICE.getHomeStartButton());
    addGetStartedListener();
    $('.ql-toolbar').css('display', 'none');
  $('#editor').css('display', 'none');
  });

  $('.closeModal').click(function() {
    closeModal();
  });

  $('.getInput').click(function(){
    getInput();
  });
}

function addCreateMNListener() {
  $('#createMainNav').click(function(e) {
    $('.modal').css('display', 'flex');
  });
}

function closeModal() {
  $('.modal').css('display', 'none');
}

function getInput(){
    var str = $("#input").val();
    var res = str.toLowerCase();
    if(res === ''){
      alert("Please enter a value!");
    }else{
      console.log(res);
      var array = ["testvar", "example", "home"];
      
      for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        if(res === array[index]) {
          alert("There is already a nav by this name");
          break;
        }else{
          

          appendNav(res);

          closeModal();

          
        }
      }
    }
}

function appendNav(res) {
  console.log(res);
  alert("The Nav Name is " + res);
  $('.text-wrapper').html(TREEFROG_SERVICE.getAddContent());
  $('.btn-holder').html(TREEFROG_SERVICE.getAddContentButton());
  $('.itemAppend').html(res);

  $('.ql-toolbar').css('display', 'flex');
  $('#editor').css('display', 'flex');

}



function addGetStartedListener() {
  $('.get-started').click(function(e) {
    $('#home div').removeClass('active');
    $('#addNav div').addClass('active');

    $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
    $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButtons());
    addCreateMNListener();
    $('.get-started').off('click');
  });
}

$(document).ready(function() {
  initButtons();
  addGetStartedListener();
});