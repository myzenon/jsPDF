var zpringData = new function() {
    this.header = {
        address : function() {
            var array = [];
            for(var i = 0; i < 10; i++) {
                array.push('' + i);
            }
            return array;
        }()
    };
}();