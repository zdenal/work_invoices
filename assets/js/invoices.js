(function() {
  var Line;

  Line = (function() {
    function Line() {
      var _this = this;
      this.price = ko.observable(0);
      this.selectedTax = ko.observable();
      this.tax = ko.computed(function() {
        return parseInt(_this.price()) * _this.selectedTax();
      });
      this.total = ko.computed(function() {
        return parseInt(_this.price()) + _this.tax();
      });
    }

    return Line;

  })();

  this.Invoices = (function() {
    function Invoices(params) {
      var _this = this;
      this.lines = ko.observableArray();
      this.taxes = params.taxes;
      this.addLine();
      this.linesWithoutTax = ko.computed(function() {
        return _.reduce(_this.lines(), (function(total, line) {
          return total + parseInt(line.price());
        }), 0);
      });
      this.linesTaxes = ko.computed(function() {
        return _.reduce(_this.lines(), (function(total, line) {
          return total + line.tax();
        }), 0);
      });
      this.linesTotal = ko.computed(function() {
        return _.reduce(_this.lines(), (function(total, line) {
          return total + line.total();
        }), 0);
      });
    }

    Invoices.prototype.addLine = function() {
      return this.lines.push(new Line());
    };

    Invoices.prototype.save = function() {
      return console.log(ko.toJSON(this.lines));
    };

    return Invoices;

  })();

}).call(this);
