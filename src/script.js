function ViewModel() {
  var self = this;
  self.data = function() {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://ws.fanteam.com/match_collections?sport=football&tab=admin_created&statuses[]=waiting&page=0&per_page=30&bearer[white_label]=fanteam');
    myRequest.onload = function() {
      var fanTeamObj =  JSON.parse(this.responseText);
      self.tournaments(fanTeamObj.tournaments)
    };
    myRequest.send();
  };

  self.tournaments = ko.observableArray(self.data());
}

ko.applyBindings(new ViewModel());
