(function() {
  var Line;

  Line = (function() {
    function Line() {}

    return Line;

  })();

  this.Invoices = (function() {
    function Invoices() {}

    Invoices.prototype.construction = function() {
      return this.lines = ko.observableArray();
    };

    Invoices.prototype.addLine = function() {
      return this.lines.push(new Line());
    };

    return Invoices;

  })();

}).call(this);
