
window.onload =  function() {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://ws.fanteam.com/match_collections?sport=football&tab=admin_created&statuses[]=waiting&page=0&per_page=30&bearer[white_label]=fanteam');
  myRequest.onload = function() {
    var fanTeamObj =  JSON.parse(this.responseText);
    console.log(fanTeamObj);

  function ViewModel() {
    this.tournaments = ko.observableArray(fanTeamObj.tournaments);

  }

  ko.applyBindings(new ViewModel());
  };
  myRequest.send();
};
